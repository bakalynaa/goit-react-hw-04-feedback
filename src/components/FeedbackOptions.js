

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
      {options.map(el => (
        <button key={el}
                type='button'
                onClick={()=> onLeaveFeedback(el)}
        >{el}</button>
      ))}
    </>
  )
};

export default FeedbackOptions;
