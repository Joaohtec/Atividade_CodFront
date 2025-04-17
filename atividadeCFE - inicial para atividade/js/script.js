/*  ==========================================================
    codigo: js/app.js          (coloque num arquivo .js só)
    ========================================================== */
(function () {
  /* ---------------------------------------------------------
           UTIL — executa init() quando o DOM estiver pronto
        --------------------------------------------------------- */
  const ready = (fn) =>
    document.readyState !== "loading"
      ? fn()
      : document.addEventListener("DOMContentLoaded", fn);

  ready(init); // dispara

  function init() {
    /* ============ BOTÃO VOLTAR AO TOPO =================== */
    const toTop = document.getElementById("voltar-topo");
    if (toTop) {
      toTop.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    }

    /* ============ LÓGICA EXCLUSIVA DA PÁGINA LOGIN ======= */
    if (!document.getElementById("section-login")) return; // sai na index

    /* ---- login simples ---------------------------------- */
    document
      .getElementById("login-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const u = document.getElementById("user").value.trim();
        const p = document.getElementById("password").value.trim();

        u === "admin" && p === "123456"
          ? (alert("Bem‑vindo, admin!"), (location.href = "index.html"))
          : alert("Usuário ou senha inválidos!");
      });

    /* ---- mostrar / ocultar cadastro --------------------- */
    const btnShow = document.getElementById("btn-show-signup");
    const btnBack = document.getElementById("btn-back-login");
    const cadastro = document.getElementById("signup-wrapper");
    const secLogin = document.getElementById("section-login");

    const toggle = () => {
      const show = cadastro.style.display === "none" || !cadastro.style.display;
      cadastro.style.display = show ? "block" : "none";
      secLogin.style.display = show ? "none" : "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    btnShow.addEventListener("click", toggle);
    btnBack.addEventListener("click", toggle);

    /* ---- envio do cadastro ------------------------------ */
    document
      .getElementById("signup-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Cadastrado com sucesso!");
        btnBack.click(); // volta para o login
      });
  }
})();
