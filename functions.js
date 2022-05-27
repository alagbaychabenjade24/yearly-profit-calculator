const form = document.querySelector('form');
const capital = document.querySelector('.capital');
const percentage = document.querySelector('.percentage');

const janGains = document.querySelector('.month:nth-of-type(1) .gains');
const janTotalCapital = document.querySelector(
	'.month:nth-of-type(1) .total__capital'
);

const febGains = document.querySelector('.month:nth-of-type(2) .gains');
const febTotalCapital = document.querySelector(
	'.month:nth-of-type(2) .total__capital'
);

const marGains = document.querySelector('.month:nth-of-type(3) .gains');
const marTotalCapital = document.querySelector(
	'.month:nth-of-type(3) .total__capital'
);

const aprGains = document.querySelector('.month:nth-of-type(4) .gains');
const aprTotalCapital = document.querySelector(
	'.month:nth-of-type(4) .total__capital'
);

const mayGains = document.querySelector('.month:nth-of-type(5) .gains');
const mayTotalCapital = document.querySelector(
	'.month:nth-of-type(5) .total__capital'
);

const junGains = document.querySelector('.month:nth-of-type(6) .gains');
const junTotalCapital = document.querySelector(
	'.month:nth-of-type(6) .total__capital'
);

const julGains = document.querySelector('.month:nth-of-type(7) .gains');
const julTotalCapital = document.querySelector(
	'.month:nth-of-type(7) .total__capital'
);

const augGains = document.querySelector('.month:nth-of-type(8) .gains');
const augTotalCapital = document.querySelector(
	'.month:nth-of-type(8) .total__capital'
);

const sepGains = document.querySelector('.month:nth-of-type(9) .gains');
const sepTotalCapital = document.querySelector(
	'.month:nth-of-type(9) .total__capital'
);

const octGains = document.querySelector('.month:nth-of-type(10) .gains');
const octTotalCapital = document.querySelector(
	'.month:nth-of-type(10) .total__capital'
);

const novGains = document.querySelector('.month:nth-of-type(11) .gains');
const novTotalCapital = document.querySelector(
	'.month:nth-of-type(11) .total__capital'
);

const decGains = document.querySelector('.month:nth-of-type(12) .gains');
const decTotalCapital = document.querySelector(
	'.month:nth-of-type(12) .total__capital'
);

const startingCapital = document.querySelector('.starting__capital');
const monthlyPercentageGoal = document.querySelector(
	'.monthly__percentage__goal'
);
const weeklyPercentageGoal = document.querySelector(
	'.weekly__percentage__goal'
);
const dailyPercentageGoal = document.querySelector('.daily__percentage__goal');
const averageNumberTrades = document.querySelector('.avg__numb__trade');

const calculateCapital = () => {
	form.addEventListener('submit', event => {
		event.preventDefault();

		const percentages = percentage.value / 100;

		const parseCapital = parseInt(capital.value);
		const parsePercentage = parseInt((parseCapital * percentage.value) / 100);

		const res = parseCapital + parsePercentage;

		const gains = res - parseCapital;

		const a = (janGains.textContent += ` + ₱ ${gains.toLocaleString()}`);
		const b = (janTotalCapital.textContent += ` = ₱ ${res.toLocaleString()}`);

		const c = b.replace(/[^0-9.]/g, '');
		const d = parseFloat(c);

		startingCapital.textContent +=
			' - ₱ ' + (capital.value / 1).toLocaleString();

		monthlyPercentageGoal.textContent += ' - ' + percentage.value + '%';

		weeklyPercentageGoal.textContent += ' - ' + percentage.value / 4 + '%';

		dailyPercentageGoal.textContent += ' - ' + percentage.value / 20 + '%';

		averageNumberTrades.textContent +=
			' - ' + percentage.value / 20 / 0.5 + 'Trades';

		const cc = (febGains.textContent += ` + ₱ ${(
			d * percentages +
			res -
			d
		).toLocaleString()}`);
		const dd = (febTotalCapital.textContent += ` = ₱ ${(
			d * percentages +
			res
		).toLocaleString()}`);

		const e = dd.replace(/[^0-9.]/g, '');
		const f = parseFloat(e);

		const ee = (marGains.textContent += ` + ₱ ${(
			f * percentages +
			f -
			f
		).toLocaleString()}`);
		const ff = (marTotalCapital.textContent += ` = ₱ ${(
			f * percentages +
			f
		).toLocaleString()}`);

		const g = ff.replace(/[^0-9.]/g, '');
		const h = parseFloat(g);

		const gg = (aprGains.textContent += ` + ₱ ${(
			h * percentages +
			h -
			h
		).toLocaleString()}`);
		const hh = (aprTotalCapital.textContent += ` = ₱ ${(
			h * percentages +
			h
		).toLocaleString()}`);

		const i = hh.replace(/[^0-9.]/g, '');
		const j = parseFloat(i);

		const ii = (mayGains.textContent += ` + ₱ ${(
			j * percentages +
			j -
			j
		).toLocaleString()}`);
		const jj = (mayTotalCapital.textContent += ` = ₱ ${(
			j * percentages +
			j
		).toLocaleString()}`);

		const k = jj.replace(/[^0-9.]/g, '');
		const l = parseFloat(k);

		const kk = (junGains.textContent += ` + ₱ ${(
			l * percentages +
			l -
			l
		).toLocaleString()}`);
		const ll = (junTotalCapital.textContent += ` = ₱ ${(
			l * percentages +
			l
		).toLocaleString()}`);

		const m = ll.replace(/[^0-9.]/g, '');
		const n = parseFloat(m);

		const mm = (julGains.textContent += ` + ₱ ${(
			n * percentages +
			n -
			n
		).toLocaleString()}`);
		const nn = (julTotalCapital.textContent += ` = ₱ ${(
			n * percentages +
			n
		).toLocaleString()}`);

		const o = nn.replace(/[^0-9.]/g, '');
		const p = parseFloat(o);

		const oo = (augGains.textContent += ` + ₱ ${(
			p * percentages +
			p -
			p
		).toLocaleString()}`);
		const pp = (augTotalCapital.textContent += ` = ₱ ${(
			p * percentages +
			p
		).toLocaleString()}`);

		const q = pp.replace(/[^0-9.]/g, '');
		const r = parseFloat(q);

		const qq = (sepGains.textContent += ` + ₱ ${(
			r * percentages +
			r -
			r
		).toLocaleString()}`);
		const rr = (sepTotalCapital.textContent += ` = ₱ ${(
			r * percentages +
			r
		).toLocaleString()}`);

		const s = rr.replace(/[^0-9.]/g, '');
		const t = parseFloat(s);

		const ss = (octGains.textContent += ` + ₱ ${(
			t * percentages +
			t -
			t
		).toLocaleString()}`);
		const tt = (octTotalCapital.textContent += ` = ₱ ${(
			t * percentages +
			t
		).toLocaleString()}`);

		const u = tt.replace(/[^0-9.]/g, '');
		const v = parseFloat(u);

		const uu = (novGains.textContent += ` + ₱ ${(
			v * percentages +
			v -
			v
		).toLocaleString()}`);
		const vv = (novTotalCapital.textContent += ` = ₱ ${(
			v * percentages +
			v
		).toLocaleString()}`);

		const w = vv.replace(/[^0-9.]/g, '');
		const x = parseFloat(w);

		const ww = (decGains.textContent += ` + ₱ ${(
			x * percentages +
			x -
			x
		).toLocaleString()}`);
		const xx = (decTotalCapital.textContent += ` = ₱ ${(
			x * percentages +
			x
		).toLocaleString()}`);

		event.target.reset();
	});
};

calculateCapital();
