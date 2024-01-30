import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center">
      <h3 className="flex-1 "><span className="text-coral-red">Yeni Ürünlerimizden</span> Haberdar Olmak için Üye Olmayı Unutmayın!</h3>
<form className="flex-1 flex justify-between items-center " >
<input placeholder="email.com" className="        input"/>
<Button label="Oturum Aç" />
</form>

    </section>
  )
}

export default Subscribe
