export default ({ page, showButton }) => {
  return (
    <div class="card bg-base-200">
      <div class="card-body">
        <div class="grid md:grid-cols-2 gap-4">
          <a
            class="btn justify-start"
            href="https://www.instagram.com/silvatica_festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ph-light ph-instagram-logo text-2xl" />
            @silvatica_festival
          </a>
          <a
            class="btn justify-start"
            href="mailto:silvatica.fest@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ph-light ph-envelope text-2xl" />
            silvatica.fest@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
