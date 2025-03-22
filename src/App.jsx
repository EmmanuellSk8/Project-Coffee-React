import './index.css'
import SectionCoffee from './SectionCoffee'

export default function App() {


  return (
    <>

      <section className='w-full justify-center flex mt-36'>
        <div className="w-[1200px] text-center justify-center">

          <div className="w-full justify-items-center mb-6">
            <h2 className='text-[#FEF7EE] mb-6 text-[32px]'>Our Collection</h2>
            <p className='font-bold text-[16px] text-[#6F757C] max-w-[500px] text-center flex'>Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small batches and shipped fresh weekly. </p>
          </div>

          <div>
            <button id='AllProducts' className='bg-[#6F757C] py-1 px-3 rounded-lg text-[#FEF7EE] font-bold mr-8 hover:scale-105 duration-300 ease-in-out'>All products</button>
            <button id='Available' className='text-[#FEF7EE] font-bold hover:scale-105 duration-300 ease-in-out'>Available Now</button>
          </div>

        </div>

      </section>
      <SectionCoffee />




    </>

  )
}
