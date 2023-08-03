import Header from '../../components/Header';
import Rekomendasi from '../../components/Rekomendasi';

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-setting">
        <Rekomendasi />
      </div>
    </>
  );
}
