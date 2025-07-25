// *** Take a look at this too: To get the full Unicode code point for such characters, the codePointAt() method should be used instead.

export function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper aplha (A-Z)
    !(code > 96 && code < 123) // lower aplha (a-z)
  ) {
    return false;
  }
  return true;
}
