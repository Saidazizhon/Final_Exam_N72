import Sponsors from '@/components/Sponsors'
import Comments from '@/components/Comments'
import BrowseBy from '@/components/BrowseBy'
import Hero from '@/components/Hero'
import Product from '@/components/Product'

const Home = () => {
  return (
    <>
      <Hero/>
      <Sponsors/>
      <Product/>
      <BrowseBy/>
      <Comments/>
    </>
  )
}

export default Home