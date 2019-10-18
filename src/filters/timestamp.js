export default function (time) {
  if (!time) {
    return;
  }
  new Date(time * 1000).toLocaleDateString();
  // return t;
}
