import PropTypes from 'prop-types';

function BookMark({bookmark}) {
  return (
    <div className="bg-slate-300 p-4 m-4">
    {bookmark.title}    
    </div>
  )
}BookMark.prototype={
    bookmark:PropTypes.object
}

export default BookMark