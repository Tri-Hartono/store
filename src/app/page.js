'use client';
import { Suspense, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Rekomendasi from '../../components/Rekomendasi';

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading Data...</p>}>
        <Rekomendasi />
      </Suspense>
    </>
  );
}
