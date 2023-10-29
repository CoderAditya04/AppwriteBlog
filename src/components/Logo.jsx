function Logo({width = '100px'}) {
  const imgUrl = "https://www.lawof.in/wp-content/uploads/2020/05/blog.jpg";
  return (
    <div><img src={imgUrl} alt="logo-img" className="w-15 h-10" /></div>
  )
}

export default Logo