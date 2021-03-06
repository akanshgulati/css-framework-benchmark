// @flow
import React, { useContext, useMemo, useState, type Node, type Context } from 'react';
import shallowequal from 'shallowequal';
import StyleSheet from '../sheet';
import createStylisInstance from '../utils/stylis';

type Props = {
  children?: Node,
  disableCSSOMInjection?: boolean,
  disableVendorPrefixes?: boolean,
  sheet?: StyleSheet,
  stylisPlugins?: Array<Function>,
  target?: HTMLElement,
};

export const StyleSheetContext: Context<StyleSheet | void> = React.createContext();
export const StyleSheetConsumer = StyleSheetContext.Consumer;
export const masterSheet: StyleSheet = new StyleSheet();

export function useStyleSheet(): StyleSheet {
  return useContext(StyleSheetContext) || masterSheet;
}

export default function StyleSheetManager(props: Props) {
  /**
   * freeze the stylis modification props on initial mount since they rely on
   * reference equality for the useMemo dependencies array and devs will
   * likely not store the reference themselves to avoid this issue
   */
  const [{ disableVendorPrefixes, stylisPlugins }] = useState({
    disableVendorPrefixes: props.disableVendorPrefixes,
    stylisPlugins: props.stylisPlugins,
  });

  if (process.env.NODE_ENV !== 'production') {
    if (!shallowequal(disableVendorPrefixes, props.disableVendorPrefixes)) {
      // eslint-disable-next-line no-console
      console.warn(
        'disableVendorPrefixes is frozen on initial mount of StyleSheetManager. Changing this prop dynamically will have no effect.'
      );
    }

    if (!shallowequal(stylisPlugins, props.stylisPlugins)) {
      // eslint-disable-next-line no-console
      console.warn(
        'stylisPlugins are frozen on initial mount of StyleSheetManager. Changing this prop dynamically will have no effect.'
      );
    }
  }

  const styleSheet = useMemo(() => {
    let sheet = masterSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({ target: props.target });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({ useCSSOMInjection: false });
    }

    if (disableVendorPrefixes || stylisPlugins) {
      sheet = sheet.reconstructWithOptions({
        stringifier: createStylisInstance({
          options: { prefix: !disableVendorPrefixes },
          plugins: stylisPlugins,
        }),
      });
    }

    return sheet;
  }, [
    props.disableCSSOMInjection,
    props.sheet,
    disableVendorPrefixes,
    stylisPlugins,
    props.target,
  ]);

  return (
    <StyleSheetContext.Provider value={styleSheet}>
      {process.env.NODE_ENV !== 'production' ? React.Children.only(props.children) : props.children}
    </StyleSheetContext.Provider>
  );
}
