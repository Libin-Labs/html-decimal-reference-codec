import * as api from '@lp-labs/html-decimal-reference-codec';
import { encodeDecimalReferences } from '@lp-labs/html-decimal-reference-codec';
console.log(encodeDecimalReferences('A😀'));
// @ts-expect-error invalid argument must be rejected by declarations
api.encodeDecimalReferences(5);
