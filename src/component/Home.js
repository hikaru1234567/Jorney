import React from 'react';
import './Home.css';





const Home = () => {
  return (
    <>
    <div className="Home">
    
    <main className="Home-content">
      <p className='main-text'>未経験からエンジニア学習プラットホーム</p>
    <div className="content">
      <div className="image1"></div>
      <div class="text">
    <h2>WORK</h2>
    <p>プロジェクトに対するフィードバックや反省点の共有。<br></br>
    使用したリソース、チュートリアル、オンラインコースなどの学習方法を紹介。
</p>
  </div>
    </div>
    <div className="content">
    <div class="text">
    <h2>QUESTION</h2>
    <p>疑問点についてユーザーが互いに教え合い学びを共有、
    学習者同士が支援し合える、学習の効率を高め、モチベーションの維持の提供。
    </p>
  </div>
      <div className="image2" ></div>
    </div>
    <div className="content">
      <div className="image3" ></div>
      <div className="text">
    <h2>PROJECT</h2>
    <p>プロジェクトベースの学習を通じて、実践的なスキルを身につける機会を提供します。<br></br>
    実践的な経験を積むことができ、理論だけでなく実際の開発スキルも身につけることができます。
    </p>
  </div>
    </div>
    </main>
  </div>
  </>
  )
}

export default Home;