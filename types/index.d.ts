import { ParserOptions } from '@babel/parser';
import { SFCDescriptor } from 'vue-template-compiler';

type TagMatcher = (
  originalTag: string,
  opts: {
    kebabTag: string;
    camelTag: string;
    path: string
    component: SFCDescriptor
  }) => undefined | [string, string]

type AttrMatcher = (
  originalTag: string,
  opts: {
    kebabAttr: string;
    camelAttr: string;
    path: string
    component: SFCDescriptor
  }) => undefined | [string, string]

export default class {
  constructor(options?: {
    match?: TagMatcher | TagMatcher[]
    attrsMatch?: AttrMatcher | AttrMatcher[]
    parserOpts?: {
      jsx: ParserOptions,
      tsx: ParserOptions,
    }
  });
  apply(...args: any[]): void;
}
