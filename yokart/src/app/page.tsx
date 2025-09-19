import Navbar from "./components/Navbar/Navbar";
import Poster from "./components/Poster/Poster";
import CategorySection from "./components/CategorySection/CategorySection";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/intro";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Poster imageUrl="https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Intro/>
      <CategorySection category="TShirt" />
      <Poster imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <CategorySection category="Cricket" />
      <CategorySection category="Football" />
      <Poster imageUrl="https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <CategorySection category="Men" />
      <Poster imageUrl="https://images.unsplash.com/photo-1720959975370-308a2a5a0a4a?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <CategorySection category="Joggers" />
      <CategorySection category="Shorts" />
      <Poster imageUrl="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <CategorySection category="Women" />
      <Poster imageUrl="https://plus.unsplash.com/premium_photo-1664537981095-4852afaf6b62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Footer/>
    </main>
  );
}
