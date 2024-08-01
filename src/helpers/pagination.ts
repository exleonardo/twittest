const postTotal = 100
const postLimit = 10
const postPages = Math.ceil(postTotal / postLimit)

export const pagePagination = Array.from({ length: postPages }, (_, i) => i + 1)
