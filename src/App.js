import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import pide from "./assets/pide.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = [
    {
      title: "Avokado Ezmeli Taco",
      date: "12 Ocak 2021, Salı",
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
      likeCount: 193,
      isLiked: false,
    },
    {
      title: "Görele Pidesi",
      date: "21 Mayıs 2021, Cuma",
      image: pide,
      description:
        "Pide 85 yıllık bir geçmişe sahiptir. Karadeniz Pidesi başta tüm Karadeniz Bölgesinde yapıldığı gibi, yurt içi ve yurt dışında olmak üzere birçok yerde de yapılmaktadır. Pidenin lezzetli olabilmesi fırının ısısından, pidenin servise sunulmasına kadar geçen sürede verilen emeğe bağlıdır.",
      likeCount: 365,
      isLiked: true,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {recipeItem.map((item) => (
          <Card
            author={recipeAuthor}
            title={item.title}
            date={item.date}
            image={item.image}
            description={item.description}
            like={item.likeCount}
            isLiked={item.isLiked}
          />
        ))}
      </header>
    </div>
    
  );
}

export default App;
