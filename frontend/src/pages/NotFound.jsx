import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="NotFound" />
          <p>LOOKS LIKE YOU ARE LOST</p>
          <p>We can not find the page you are looking for.</p>
          <Link to="/">
            Back to Home Page{' '}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
