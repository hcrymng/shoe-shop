import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md "><span className="text-coral-red">İndirim</span> ve <span className="text-coral-red">Kampanyalardan</span> Haberdar Olmak için Üye Olmayı Unutmayın!</h3>
<div  className="flex-1 flex justify-between items-center lg:max-w-[40%] w-full max-sm:flex-col gap-5 p-2.5  sm:border border-slate-gray rounded-full" >
<input placeholder="subscribe@modaayakkabi.com" className="input"   type="text"/>
<div className="flex max-sm:justify-end items-center max-sm:w-full"><Button label="Oturum Aç" fullWidth /></div>
</div>

    </section>
  )
}

export default Subscribe
