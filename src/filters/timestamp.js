export default function (time) {
    if (!time) {
        return;
    }
    let t = time * 1000;
    return new Date(t).toLocaleDateString();
}