export default () => {
  return (
    <>
      <div id="countdown" class="flex flex-wrap justify-center gap-5 text-center">
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span id="weeks" style="--value:99;" aria-live="polite" aria-label="99">99</span>
          </span>
          weeks
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span id="days" style="--value:99;" aria-live="polite" aria-label="99">99</span>
          </span>
          days
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span id="hours" style="--value:99;" aria-live="polite" aria-label="99">99</span>
          </span>
          hours
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span id="minutes" style="--value:99;" aria-live="polite" aria-label="99">99</span>
          </span>
          min
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span id="seconds" style="--value:99;" aria-live="polite" aria-label="99">99</span>
          </span>
          sec
        </div>
      </div>
      <script src="countdown.js" />
    </>
  );
};
