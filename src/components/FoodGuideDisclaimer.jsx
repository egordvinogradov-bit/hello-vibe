function FoodGuideDisclaimer({ children = 'Opening hours and MICHELIN recognition can change. Check current information before visiting.' }) {
  return (
    <p className="food-guide-disclaimer">
      {children}
    </p>
  )
}

export default FoodGuideDisclaimer
