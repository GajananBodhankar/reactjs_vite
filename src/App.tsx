// import { useState } from "react";
// import Navbar from "./components/Navbar.tsx";
// import UseRef from "./hooks/UseRef.tsx";
// import UseMemo from "./hooks/useMemo.tsx";
// import UseCallback from "./hooks/UseCallback.tsx";
// import UseForm from "./hooks/UseForm.tsx";
// import { Provider } from "react-redux";
// import SagaStore from "./ReduxSaga/SagaStore.ts";
// import Index from "./ReduxSaga/Index.tsx";

// function App() {
//   const [count, setCount] = useState(0);
//   // return <Navbar />;
//   // return <UseRef />;
//   // return <UseMemo />;
//   // return <UseCallback />;
//   // return <UseForm />;
//   return (
//     <Provider store={SagaStore}>
//       {/* <Index /> */}
//       <Index />
//     </Provider>
//   );
// }

// export default App;

import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";
import Image from "./ImageUpload/Image";
import Main from "./Model/Main";
import { Provider } from "react-redux";
import Index from "./ReduxClass/Index";
import { Store } from "./ReduxClass/Store";
import WithReactMemo from "./InterviewQuestion/WithReactMemo";
import Child from "./InterviewQuestion/Child";
import SignalsComponent from "./Signals/Signals";

export default function App() {
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <>
      {/* <Image />
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper> */}
      {/* <Main /> */}
      {/* <Provider store={Store}>
        <Index />
      </Provider> */}
      {/* <WithReactMemo>
        <Child />
      </WithReactMemo> */}
      <SignalsComponent/>
    </>
  );
}
