import "../../../css/notfound.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="feyri404-page" role="main" aria-label="404 page">
      <section className="feyri404-card" aria-labelledby="feyri404-title">
        <img
          className="feyri404-ill"
          src="/home/not_found.png"
          alt="Sahifa topilmadi"
        />

        <div className="feyri404-brand">FEYRI BEAUTY</div>

        <h1 id="feyri404-title" className="feyri404-title">
          Sahifa topilmadi
        </h1>

        <p className="feyri404-desc">
          Siz qidirgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
        </p>

        <div className="feyri404-actions">
          <NavLink to="/" className="feyri404-btn feyri404-btn--primary">
            Bosh sahifaga
          </NavLink>

          <button
            type="button"
            className="feyri404-btn feyri404-btn--ghost"
            onClick={() => navigate(-1)}
          >
            Orqaga
          </button>
        </div>

        <div className="feyri404-code" aria-hidden="true">
          404
        </div>
      </section>
    </main>
  );
};

export default NotFound;