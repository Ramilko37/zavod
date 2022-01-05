import React, { ReactElement } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useCategory } from 'contexts/category/use-category';
interface Props {
  imageUrl: string;
  name: string;
  id: string;
}

export default function CategoryCard({
  imageUrl,
  name,
  id,
}: Props): ReactElement {
  const { category, setCategory } = useCategory();

  function handleCategoryClick() {
    if (category !== id) {
      setCategory(id);
    } else {
      setCategory('');
    }
  }
  return (
    <div
      className='category-card flex'
      onClick={handleCategoryClick}
      role="button"
    >
      <div className={`rounded-md pt-4 pl-4 category-card-wrapper category-card${category == id ? "_active" : ""}`}>
        <p className={`nrz-primary-1 font-semibold w-40 ${category == id && "text-white"}`}>{name}</p>
      </div>
      <div className="category-image-container">
        <img className="" src={imageUrl} alt={name} />
      </div>
      {/* <Image src={imageUrl} alt={name} width={120} height={120} objectPosition='absolute' unoptimized/> */}
    </div>
  );
}
