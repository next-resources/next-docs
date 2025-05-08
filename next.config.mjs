import nextra from 'nextra'
 
const withNextra = nextra({

})
 
export default withNextra({
    rewrites: null,
    output: 'export',
    images: {
      unoptimized: true,
    },
})