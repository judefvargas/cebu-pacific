export default function generateKey() {
    return Math.random().toString(36).slice(2);
}