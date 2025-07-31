
export default function getImageURL(name) {
    return new URL(`../assets/users/${name}`, import.meta.url).href
}