/*
Language: Zen
Author: sksat <sksat@sksat.net>
Description: 
Website: https://zen-lang.org
Category: system
*/

export default function(hljs) {
  var ZEN_KEYWORDS =
    'fn usingnamespace test ' +
    // storage
    'const comptime var mut allowzero pub extern export deprecated ' +
    'packed align volatile inline noinline callconv threadlocal ' +
    'linksection noalias terminate ' +
    // structure
    'struct enum union error interface vtable ' +
    // statement
    'break return continue asm defer errdefer unreachable try catch ' +
    'async await suspend nosuspend resume ' +
    // conditional
    'if else switch and or orelse ' +
    // repeat
    'while for ' +
    // constant
    'true false null undefined';
  var ZEN_BUILTINS = 
    // type
    'noreturn type anytype anyerror anyframe ' +
    'void comptime_int comptime_float ' +
    'bool isize usize ' +
    'f16 f32 f64 f128 ' +
    // C type
    'c_short c_ushort c_int c_uint c_long c_ulong c_longlong c_ulonglong c_longdouble c_void';

  var ZEN_BUILTIN_FUNC =
    'addWithOverflow ArgType atomicLoad atomicStore bitCast breakpoint ' +
    'alignCast alignOf cDefine cImport cInclude ' +
    'cUndef canImplicitCast clz cmpxchgWeak cmpxchgStrong compileError ' +
    'compileLog ctz popCount divExact divFloor divTrunc ' +
    'embedFile export tagName TagType errorName call ' +
    'errorReturnTrace fence fieldParentPtr field unionInit ' +
    'frameAddress import intToPtr ' +
    'minValue maxValue ' +
    'memcpy memset mod mulWithOverflow splat ' +
    'bitOffsetOf byteOffsetOf OpaqueType panic ptrCast ' +
    'ptrToInt rem returnAddress setCold Type shuffle ' +
    'setRuntimeSafety setEvalBranchQuota setFloatMode ' +
    'setGlobalLinkage setGlobalSection shlExact This hasDecl hasField ' +
    'shlWithOverflow shrExact sizeOf bitSizeOf sqrt byteSwap subWithOverflow intCast floatCast intToFloat floatToInt boolToInt errSetCast ' +
    'truncate typeInfo typeName TypeOf atomicRmw bytesToSlice sliceToBytes ' +
    'intToError errorToInt intToEnum enumToInt setAlignStack frame Frame frameSize bitReverse Vector ' +
    'sin cos exp exp2 log log2 log10 fabs floor ceil trunc round ' +
    'mulAdd trap alignedSizeOf alignTo overlay call to is nearbyInt';

  return {
    name: 'Zen',
    aliases: ['zen', 'zenlang'],
    keywords: {
      keyword:
        ZEN_KEYWORDS,
      literal:
        'true false null undefined',
      built_in:
        ZEN_BUILTINS,
    },

    contains: [
      hljs.C_LINE_COMMENT_MODE,
      {
        className: 'string',
        variants: [
          hljs.QUOTE_STRING_MODE,
        ]
      },
      {
        className: 'number',
        variants: [
          hljs.C_NUMBER_MODE,
        ]
      },
      {
        className: 'type',
        begin: /(i|u)(\d{3}|\d{2}|\d{1})+\b/
      },
      {
        className: 'meta',
        begin: /@\s*[a-zA-Z]+\b/,
        keywords: {'meta-keyword': ZEN_BUILTIN_FUNC},
        contains: [
          hljs.QUOTE_STRING_MODE,
        ]
      },
      {
        className: 'function',
        beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
        contains: [hljs.TITLE_MODE]
      },
    ]
  };
}
