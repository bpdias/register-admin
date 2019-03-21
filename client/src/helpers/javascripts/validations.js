export const isCpf = (c) => {

  if ((c = c.replace(/[^\d]/g, "")).length !== 11)
    return false;

  if (c === "00000000000")
    return false;

  var r;
  var s = 0;

  for (let i = 1; i <= 9; i++)
    s = s + parseInt(c[i - 1]) * (11 - i);

  r = (s * 10) % 11;

  if ((r === 10) || (r === 11))
    r = 0;

  if (r !== parseInt(c[9]))
    return false;

  s = 0;

  for (let i = 1; i <= 10; i++)
    s = s + parseInt(c[i - 1]) * (12 - i);

  r = (s * 10) % 11;

  if ((r === 10) || (r === 11))
    r = 0;

  if (r !== parseInt(c[10]))
    return false;

  return true;
}

export const isCnpj = (c) => {
  var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
 
  if ((c = c.replace(/[^\d]/g, "")).length !== 14)
    return false;

  if (/0{14}/.test(c))
    return false;

  for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
  if (c[12] !== (((n %= 11) < 2) ? 0 : 11 - n))
    return false;

  for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
  if (c[13] !== (((n %= 11) < 2) ? 0 : 11 - n))
    return false;

  return true;
};