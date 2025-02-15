import Brand1 from "@/assets/brand1.png"
import Brand2 from "@/assets/brand2.png"
import Brand3 from "@/assets/brand3.png"
import Brand4 from "@/assets/brand4.png"
import Brand5 from "@/assets/brand5.png"
const Sponsors = () => {
  return (
    <section className="bg-black mb-[72px]">
      <div className="container py-[42px] px-[100px]">
        <ul className="flex items-center justify-between max-sm:flex-col max-sm:gap-[20px]">
          <li>
            <img src={Brand1} alt="" />
          </li>
          <li>
            <img src={Brand2} alt="" />
          </li>
          <li>
            <img src={Brand3} alt="" />
          </li>
          <li>
            <img src={Brand4} alt="" />
          </li>
          <li>
            <img src={Brand5} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}


export default Sponsors