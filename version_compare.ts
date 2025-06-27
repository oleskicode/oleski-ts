function versionCompare(s1: string, s2: string): number {
  const arr1 = s1.split(".").map(Number);
  const arr2 = s2.split(".").map(Number);

  console.log(arr1);
  console.log(arr2);

  const maxSize = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxSize; i++) {
    const s1Part = arr1[i] ?? 0; // 0 if undefined
    const s2Part = arr2[i] ?? 0;
    // console.log("s1Part = " + s1Part);
    // console.log("s2Part = " + s2Part);
    if (s1Part == s2Part) {
      continue; // skip Equal
    }
    if (s1Part > s2Part) {
      return 1;
    } else {
      return -1;
    }
  }

  // if versions are Equal
  return 0;
}

console.log(versionCompare("1.24.23.50", "1.24"));
console.log(versionCompare("1.24", "1.24.23.50"));
console.log(versionCompare("1.24.23.50", "1.24.23.50"));
console.log(versionCompare("1.24.23.0.5", "1.24.23.5.0"));
