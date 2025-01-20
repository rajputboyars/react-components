import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className='container p-10'>
      {/* main slide */}
      <div className='space-y-10 pb-10'>

        <div className='flex gap-2.5 flex-col'>
          <h2 className='font-medium text-4xl'>Apple watch</h2>
          {/* breadcrumb */}
          <div className='flex text-base gap-4'>
            <p>Home / </p>
            <p>Product / </p>
            <p>Product Details</p>
          </div>
        </div>

        <div className='flex gap-6 flex-col items-start md:flex-row'>

          <div className='flex flex-col flex-1 justify-center gap-5 items-center'>

            <div className='p-12 bg-red-50 flex items-center justify-center'>
              <img src="/product-details/product-main-img.png" alt="" className='w-full h-full' />
            </div>

            <div className='flex overflow-scroll max-md:max-w-[330px] gap-2.5 px-10' style={{
              scrollbarWidth: 'none'
            }}>
              <div className='p-1.5 bg-red-50 rounded-xl border w-28 h-14'>
                <img src="/product-details/product-secondary-img.png" alt="" className='w-full h-full' />
              </div>
              <div className='p-1.5 bg-red-50 rounded-xl border w-28 h-14'>
                <img src="/product-details/product-secondary-img.png" alt="" className='w-full h-full' />
              </div>
              <div className='p-1.5 bg-red-50 rounded-xl border w-28 h-14'>
                <img src="/product-details/product-secondary-img.png" alt="" className='w-full h-full' />
              </div>
              <div className='p-1.5 bg-red-50 rounded-xl border w-28 h-14'>
                <img src="/product-details/product-secondary-img.png" alt="" className='w-full h-full' />
              </div>
              <div className='p-1.5 bg-red-50 rounded-xl border w-28 h-14'>
                <img src="/product-details/product-secondary-img.png" alt="" className='w-full h-full' />
              </div>
              <div className='p-1.5 bg-red-50 rounded-xl border w-28 h-14'>
                <img src="/product-details/product-secondary-img.png" alt="" className='w-full h-full' />
              </div>
            </div>

          </div>

          <div className='flex-1'>

            <div className='space-y-2.5 border-b pb-7'>
              <h2 className='text-2xl font-medium'>Apple watch SE </h2>
              <p className='text-gray-600 pr-24'>Price: $600.00 - Silver Aluminium Case with Abyss Blue Sport Band - Regular </p>
            </div>

            {/* Color */}
            <div className='space-y-2.5 border-b py-7'>
              <p className='text-gray-600'>Color</p>
              <div className='flex gap-4'>
                <div className='border active:border-black bg-yellow-500 rounded-full w-10 h-10'></div>
                <div className='border active:border-black bg-green-500 rounded-full w-10 h-10'></div>
                <div className='border active:border-black bg-green-700 rounded-full w-10 h-10'></div>
                <div className='border active:border-black bg-blue-500 rounded-full w-10 h-10'></div>
              </div>
            </div>

            {/* Size */}
            <div className='space-y-2.5 border-b py-7'>
              <h2>Size</h2>
              <div className='flex gap-2.5'>
                <div className='flex-1 border rounded-xl space-y-1.5 py-2.5 px-5'>
                  <h4 className='text-xl font-medium'>41mm</h4>
                  <p className='text-gray-600'>Fits 130-200mm wrists.</p>
                </div>
                <div className='flex-1 border rounded-xl space-y-1.5 py-2.5 px-5'>
                  <h4 className='text-xl font-medium'>41mm</h4>
                  <p className='text-gray-600'>Fits 130-200mm wrists.</p>
                </div>
              </div>
            </div>

            {/* stylename */}
            <div className='space-y-2.5 border-b py-7'>
              <h2>Style name</h2>
              <div className='flex'>
                <label htmlFor='gps' className='flex-1 flex items-center gap-2.5'>
                  <input type="radio" name='name' id='gps' className='w-6 h-6' /> <span className='text-gray-600 text-sm'>GPS</span>
                </label>
                <label htmlFor='gps+1' className='flex-1 flex items-center gap-2.5'>
                  <input type="radio" name='name' id='gps+1' className='w-6 h-6' /> <span className='text-gray-600 text-sm'>GPS + Cellular</span>
                </label>
              </div>
            </div>

            {/* Price */}
            <div className='space-y-2.5 py-7'>
              <div className='flex border py-2.5 px-5 rounded-xl justify-between'>
                <div className='space-y-1.5'>
                  <h2 className='text-4xl font-medium'>$320</h2>
                  <p className='text-sm text-gray-600'>Inclusive of all taxes</p>
                </div>
                <div>
                  <h2>4.5</h2>
                  <p>stars</p>
                </div>
              </div>
              <p>10-day replacement only <span>Read more</span></p>
            </div>

            {/* buttons */}
            <div className='flex gap-4'>
              <button className='flex px-10 py-2 border rounded-full bg-[#422659] text-white'>Add to cart</button>
              <button className='flex px-10 py-2 border rounded-full'>Buy now</button>
            </div>
          </div>
        </div>
      </div>


      {/* product information */}
      <div className='py-10 space-y-5'>
        <h2 className='text-xl font-medium'>Product Information</h2>
        <div className='border p-12 rounded-[20px]'>
          <div className='grid grid-cols-2 border-b text-gray-600 pb-5'>
            <p>Brand</p>
            <p>Apple</p>
          </div>
          <div className='grid grid-cols-2 border-b py-5 text-gray-600'>
            <p>Brand</p>
            <p>Apple</p>
          </div>
          <div className='grid grid-cols-2 border-b py-5 text-gray-600'>
            <p>Brand</p>
            <p>Apple</p>
          </div>
          <div className='grid grid-cols-2 border-b py-5 text-gray-600'>
            <p>Brand</p>
            <p>Apple</p>
          </div>
          <div className='grid grid-cols-2 border-b py-5 text-gray-600'>
            <p>Brand</p>
            <p>Apple</p>
          </div>
          <div className='grid grid-cols-2 pt-5 text-gray-600'>
            <p>Brand</p>
            <p>Apple</p>
          </div>
        </div>
      </div>


      {/* product Details */}
      <div className='py-10 space-y-5'>
        <h2 className='text-xl font-medium'>Product Details</h2>
        <div className=' border rounded-[20px] p-6 space-y-2.5'>
          <p>Take calls and reply to ranges value={"85%"}. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in. </p>
          <p>Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in. </p>
          <p>Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in. </p>
        </div>
      </div>


      {/* Customer reviews */}
      <div className=' space-y-5'>
        <h2 className='text-xl font-medium'>Customer reviews</h2>

        <div className='flex flex-col md:flex-row w-full'>

          {/* left */}
          <div className='w-full md:w-1/3 pr-10 border-r space-y-10'>
            <div className='w-full border rounded-[20px]'>
              <div className='grid grid-cols-2 p-6 pb-0'>
                <p>Rating</p>
                <p>4.8 Out of 5</p>
              </div>
              <div className='w-full p-6 space-y-2.5'>
                <div className='flex w-full'>
                  <span>⭐5</span>
                  <input type="range" className='w-full' value={"85%"} />
                </div>
                <div className='flex w-full'>
                  <span>⭐4</span>
                  <input type="range" className='w-full' value={"55%"} />
                </div>
                <div className='flex w-full'>
                  <span>⭐3</span>
                  <input type="range" className='w-full' value={"5%"} />
                </div>
                <div className='flex w-full'>
                  <span>⭐2</span>
                  <input type="range" className='w-full' value={"8%"} />
                </div>
                <div className='flex w-full'>
                  <span>⭐1</span>
                  <input type="range" className='w-full' value={"5%"} />
                </div>
              </div>
            </div>

            {/* img */}
            <div className='bg-red-50 rounded-2xl p-5'>
              <img src="/product-details/product-main-img.png" alt="" />
            </div>
          </div>

          {/* right */}
          <div className='p-10 space-y-2.5 pt-0 w-full md:w-2/3'>

            {/* single client revive */}
            <div className='space-y-4 flex flex-col justify-center items-center border p-5 rounded-[20px]'>
              <div className='flex justify-between w-full'>
                <div className='flex gap-1.5'>
                  <div className='bg-gray-700 w-10 h-10 rounded-full'></div>
                  <div>
                    <p>Craig Septimus</p>
                    <p className='text-sm text-gray-600'>6 July 2021</p>
                  </div>
                </div>
                <div>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className='text-sm text-gray-600'>A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.</p>
              <button className='border rounded-full px-8 py-2'>Helpful</button>
            </div>
            
            <div className='space-y-4 flex flex-col justify-center items-center border p-5 rounded-[20px]'>
              <div className='flex justify-between w-full'>
                <div className='flex gap-1.5'>
                  <div className='bg-gray-700 w-10 h-10 rounded-full'></div>
                  <div>
                    <p>Craig Septimus</p>
                    <p className='text-sm text-gray-600'>6 July 2021</p>
                  </div>
                </div>
                <div>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className='text-sm text-gray-600'>A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.</p>
              <button className='border rounded-full px-8 py-2'>Helpful</button>
            </div>
            <div className='space-y-4 flex flex-col justify-center items-center border p-5 rounded-[20px]'>
              <div className='flex justify-between w-full'>
                <div className='flex gap-1.5'>
                  <div className='bg-gray-700 w-10 h-10 rounded-full'></div>
                  <div>
                    <p>Craig Septimus</p>
                    <p className='text-sm text-gray-600'>6 July 2021</p>
                  </div>
                </div>
                <div>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className='text-sm text-gray-600'>A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.</p>
              <button className='border rounded-full px-8 py-2'>Helpful</button>
            </div>
            <div className='space-y-4 flex flex-col justify-center items-center border p-5 rounded-[20px]'>
              <div className='flex justify-between w-full'>
                <div className='flex gap-1.5'>
                  <div className='bg-gray-700 w-10 h-10 rounded-full'></div>
                  <div>
                    <p>Craig Septimus</p>
                    <p className='text-sm text-gray-600'>6 July 2021</p>
                  </div>
                </div>
                <div>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className='text-sm text-gray-600'>A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.</p>
              <button className='border rounded-full px-8 py-2'>Helpful</button>
            </div>

          </div>
        </div>
      </div>

      {/* faq */}
      <div>
        <h2>FAQ</h2>
        {/* faq component */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
