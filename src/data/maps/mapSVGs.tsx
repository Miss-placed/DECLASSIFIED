import { LatLngBoundsExpression } from 'leaflet';
import { SVGOverlay } from 'react-leaflet';

export const ImageBounds: LatLngBoundsExpression = [
	[0, 0],
	[512, 512],
];

const globalStyle = `  
.no-fill{fill:none;}
.no-stroke{stroke:none;}

.border-fill{fill:var(--svg-border);}
.road-fill{fill:var(--svg-roads);}
.background-fill{fill:var(--svg-background);}
.field-fill{fill:var(--svg-field)}
.feature-fill{fill:var(--svg-features);}
.building-fill{fill:var(--svg-buildings);}

.border-stroke{stroke:var(--svg-border);}
.road-stroke{stroke:var(--svg-roads);}
.background-stroke{stroke:var(--svg-background);}
.field-stroke{stroke:var(--svg-field)}
.feature-stroke{stroke:var(--svg-features);}
.building-stroke{stroke:var(--svg-buildings);}
`;

export const mapSVGs = {
	zoo: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .c,.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n,.o,.p,.q,.r,.s,.t,.v{strokeMiterlimit:10;}
            .c,.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n,.o,.p,.q,.r{strokeWidth:0.64px;}
            .s{strokeWidth:6.39px;}
            .t{strokeWidth:4.79px;}
            .v{strokeWidth:0.96px;}
            .d{stroke-dasharray:2.64 2.64;}
            .e{stroke-dasharray:2.58 2.58;}
            .f{stroke-dasharray:1.75 1.75;}
            .g{stroke-dasharray:1.04 1.04;}
            .h{stroke-dasharray:1.7 1.7;}
            .i{stroke-dasharray:2.27 2.27;}
            .j{stroke-dasharray:3.08 3.08;}
            .k{stroke-dasharray:2.13 2.13;}
            .l{stroke-dasharray:3.08 3.08;}
            .m{stroke-dasharray:2.13 2.13;}
            .n{stroke-dasharray:1.11 1.11;}
            .o{stroke-dasharray:1.11 1.11;}
            .p{stroke-dasharray:1.11 1.11;}
            .q{stroke-dasharray:1.04 1.04;}
            .r{stroke-dasharray:1.6;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M39.08,246.67l.49-32.74s-2-30.29,23-44S199.75,99.34,199.75,99.34s51.47-24.76,97.08-27.8,102.07-.65,102.07-.65,68.19,2.17,74.27,59.94l.22,206.75s6.08,68.19-70.15,87.74c0,0-100.55,12.38-125.09,8.69S223,420.76,196.27,404.47s-120.74-63-120.74-63S38,323.9,38.82,278.29Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M104.2,335.87l-9.56,4.5s-3.85-15-16.3-12.17"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M170.64,361.44s11.49,10,11.92,14.48,7.66,8.73,16.18,10.43"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M428.65,209s3,11.5,4.68,13.41,3,9.16.85,11.92-3.62,8.31,5.54,12.78l9.15,4.47"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M436.31,119s-2.13,13,2.56,15.33a23.51,23.51,0,0,1,6.59,4.47s3.41,3,3.62,5.75"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M315.18,161.55l-9.79-11.71s-4.05-3.62-.85-9.79,4.68-10,4.68-10"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M352.44,188.16s-14.48,1.49-19.38-4.68-5.74-6-5.74-6l-.43-4"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M323.27,374.64s2.34,0,5.75-3.4,14.05-3,14.05-3"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="205.76 326.32 205.76 298.22 213.85 290.13"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="143.81 269.91 144.03 242.66 108.9 242.66"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="102.3 242.44 99.75 242.44 99.64 299.18 101.13 299.18"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="108.37 299.18 143.81 299.18 143.81 295.45"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="144.13"
				y1="290.45"
				x2="144.13"
				y2="282.04"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="286.02 136.43 282.5 122.86 222.31 139.14 225.99 151.91"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="226.78 160.38 239.4 205.88 257.76 201.09 274.04 196.78 293.36 163.89 287.61 141.22"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="236.04"
				y1="307.9"
				x2="236.2"
				y2="347.82"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="235.56"
				y1="267.51"
				x2="235.56"
				y2="301.04"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="243.55 229.99 243.07 227.59 235.25 229.35 235.25 264.48"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="259.35 225.2 259.19 222.8 281.07 217.38 283.94 217.38"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="286.34 215.62 289.05 215.78 332.16 205.4 334.55 205.24"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M342.22,204.28s5.27,12.62,21.07,11.18"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M367.92,215.62s28.58-7,32.57,9.9l.48,7"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M401,235.58l.8,29.69s0,4.31,3.19,13.26"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M430.67,319.56s-5.91-28.26-21.71-34l-.64-2.71"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M431.79,322.91s3.67,20.6-11.66,32.57"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M417.58,360.27l-1.12,2.56L416,379.27s-1.28,14.05-13.41,21.08c0,0-14.69,7.82-15.49,9.1"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M382.13,411l-17.88,1s-19.32-6.54-22-9.9c0,0-3.83-2.39-4.63-2.23"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M335,397.63s-8.3-4.95-16.92-5.27-17.08-9.1-17.08-9.1-4.95-8.3-13.42-9.26-8.62,3.67-19,2.08"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M237.16,349.57s11.5,2.56,14.37,11.66,13.73,13.41,13.73,13.41"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M255.79,311.63s3.83-4.47,7-5.11,11.5-2.77,11.5-2.77l3.19,8.94-3,.43,1.28,8.51-4.68,1.49L273,331l7.45-2.13.43,1.49"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M287.72,343.14l-16.6,4s-7.67,4-10.22-1.49"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M254.94,313.54s-.85,16.82,5.53,30"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M324.12,355.7h-1.49s-.21,9.79,3.2,11.06l16.17-4s6.18-2.13,4.26-9.58"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M373.72,299.07l-.63,6.17-2.56,7h-2.34l1.92,7.45s7,3.62,7.66,3.83,3,8.52,3,8.52l7.66,4.47,12.56-3.2v-1.06s4.31,1.33,4.79-3.14-1-17.09-3-19.64-8.62-11-8.62-11-1.44-4-12-1.11S373.72,299.07,373.72,299.07Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M377.66,285.55v-1.12s5.91,1.92,6.55-9.26c0,0-2.08-25.86-18.84-23.15l-4.79,1.76-8.3-.32-15.81,8.46,3,13.25s9.26-.32,5.91,8.78a2.88,2.88,0,0,0,2.56,3.52l1.11,3.35s6.07-3.19,6.39,4.63l4.15-.48"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="310.29 260.17 318.27 258.25 318.94 260.15 319.39 261.44"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="329.92 269.27 328.98 265.55 327.21 258.57 318.94 260.15"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="336.95"
				y1="264.16"
				x2="328.98"
				y2="265.55"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="295.44 264.8 285.06 267.03 287.45 280.28"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="323.06 117.69 331.15 111.31 339.24 116.63"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="342.43"
				y1="119.19"
				x2="344.99"
				y2="120.89"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="349.46 124.08 351.58 126 351.8 131.53"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="319.01 120.89 315.39 123.23 316.46 132.17"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="317.1 135.58 317.52 138.13 327.74 146.65"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="329.44"
				y1="148.56"
				x2="336.04"
				y2="154.31"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="353.5 141.32 351.37 140.05 332.21 157.72 341.58 169.43"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="345.62 172.19 357.76 179.43 372.23 156.23 365.21 148.35"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="358.61"
				y1="144.09"
				x2="362.02"
				y2="146.65"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="381.81 157.93 383.3 166.23 388.84 169.21"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="394.16 172.62 398.42 175.38 406.3 160.48 401.61 157.08"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="396.5"
				y1="154.1"
				x2="398.42"
				y2="155.16"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="392.03 151.76 387.77 148.78 385.01 152.18"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="390.97 140.69 388.84 143.45 392.88 146.22"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="404.59 153.88 408.85 155.8 410.98 152.61"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="414.17"
				y1="140.26"
				x2="411.62"
				y2="149.2"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="413.96"
				y1="138.13"
				x2="410.98"
				y2="126.42"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="410.34 123.44 406.93 113.22 402.89 110.24"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="400.12"
				y1="108.97"
				x2="383.94"
				y2="110.46"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="382.24 126 381.39 122.38 379.04 120.9 375.64 118.76 370.11 118.12"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="379.04 120.9 383.94 113.44 384.37 87.47 378.62 82.14 340.73 78.31 339.24 107.48 353.29 116.63 367.12 117.27"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M367.05,260.34l.29-1.08s-.42-.13-1.09-.27"
			/>
			<path
				className="d feature-stroke no-fill"
				d="M363.63,258.68c-2.71-.09-6.12.62-7.35,4.36"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M356,264.32c-.06.35-.1.72-.13,1.11l1,.41"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M359.33,266.66a8.56,8.56,0,0,0,3.79.54"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M364.34,266.79c.55-.16,1.08-.29,1.08-.29l.29-1.08"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="366.16"
				y1="263.73"
				x2="366.83"
				y2="261.19"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M361.5,274.53c-.25-.18-.5-.37-.76-.58l.74-.61"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="363.4 271.79 364.14 271.18 364.92 271.75"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="365.75"
				y1="272.36"
				x2="367"
				y2="273.29"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="367.42 273.59 368.19 274.16 367.79 275.03"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M367.52,275.63l-.4.87a4.84,4.84,0,0,1-.95-.05"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M364.52,276.06a10.72,10.72,0,0,1-2.3-1.07"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="333.36 299.6 334.61 299.37 334.34 297.9 333.08 298.14"
			/>
			<line
				className="i feature-stroke no-fill"
				x1="330.85"
				y1="298.55"
				x2="327.5"
				y2="299.18"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="326.39 299.39 325.13 299.62 325.4 301.09 326.66 300.85"
			/>
			<line
				className="i feature-stroke no-fill"
				x1="328.89"
				y1="300.44"
				x2="332.24"
				y2="299.81"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="323.32 296.46 322.97 294.57 321.08 294.93"
			/>
			<line
				className="j feature-stroke no-fill"
				x1="318.06"
				y1="295.49"
				x2="307.46"
				y2="297.47"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="305.94 297.75 304.06 298.11 304.41 299.99"
			/>
			<line
				className="k feature-stroke no-fill"
				x1="304.8"
				y1="302.08"
				x2="305.39"
				y2="305.22"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="305.58 306.26 305.94 308.15 307.82 307.8"
			/>
			<line
				className="l feature-stroke no-fill"
				x1="310.85"
				y1="307.23"
				x2="321.44"
				y2="305.25"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="322.96 304.97 324.84 304.62 324.49 302.73"
			/>
			<line
				className="m feature-stroke no-fill"
				x1="324.1"
				y1="300.64"
				x2="323.51"
				y2="297.5"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="400.41 135.09 400.33 134.3 401.13 134.2"
			/>
			<line
				className="n feature-stroke no-fill"
				x1="402.23"
				y1="134.05"
				x2="403.89"
				y2="133.84"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="404.44 133.76 405.23 133.66 405.3 134.46"
			/>
			<line
				className="o feature-stroke no-fill"
				x1="405.4"
				y1="135.56"
				x2="405.54"
				y2="137.21"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="405.59 137.76 405.66 138.56 404.86 138.63"
			/>
			<line
				className="p feature-stroke no-fill"
				x1="403.76"
				y1="138.72"
				x2="402.11"
				y2="138.87"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="401.56 138.91 400.76 138.98 400.69 138.19"
			/>
			<line
				className="q feature-stroke no-fill"
				x1="400.59"
				y1="137.16"
				x2="400.45"
				y2="135.61"
			/>
			<polyline
				className="r feature-stroke no-fill"
				points="392.24 160.27 388.41 164.53 393.74 166.66 394.16 161.12"
			/>
			<polygon
				className="r feature-stroke no-fill"
				points="299.43 341.01 310.29 337.81 310.92 341.01 299.85 344.2 299.43 341.01"
			/>
			<path
				className="s road-stroke no-fill"
				d="M168.38,115.55s24.43,32.09,31.61,39.27,25.39,39.76,25.87,63.23,2.87,149,2.87,149-1.44,18.2-5.27,24.43-9.1,23.47-9.1,23.47"
			/>
			<path
				className="s road-stroke no-fill"
				d="M105.71,242.23s0-10.75,1.27-13.41c1.14-2.34,5.6-5.55,7.88-6.81a40.73,40.73,0,0,1,11.07-3.41c6.92-.88,21-.45,27.89.43,5.77.72,16.82,4,19.16,13.19"
			/>
			<path
				className="s road-stroke no-fill"
				d="M167.23,255.85s-5.75-29.59,26.18-31.71l44.71-.64,90.37-21.29s9.9-4.79,31.93-6.07,29.38-9.9,30.33-10.54,18.21-18.2,21.4-27.78,7.66-27.46,7.66-27.46S431,99.07,458.13,96.51"
			/>
			<path
				className="s road-stroke no-fill"
				d="M105,299.28s-4.79,36.08,27.78,31c0,0,10.22-1.6,18.52-6.07s15-2.56,16.93,6.39,9.9,14.05,23.63,14.05,36.72.31,36.72.31"
			/>
			<path
				className="t road-stroke no-fill"
				d="M214.49,176s4.15-17.56,18.84-21.71,35.76-9.9,35.76-9.9"
			/>
			<path
				className="t road-stroke no-fill"
				d="M230.46,344.63s16-3.84,20.43,9.26,11.18,21.71,30,18.52,22.35,8,22.35,8,9.58,8.3,18.2,8.62S348,401.46,348,401.46s20.43,11.5,38,4.47a45.5,45.5,0,0,0,24-22,29.44,29.44,0,0,0,1-13.73c-1.28-7.66-3.51-12.13,7.35-18.52s12.13-26.82,5.11-41.51-9.58-19.16-17.25-20.76-8.3-9.26-8-15.64-1.6-13.1-4.15-15.65-6.07-12.13-.64-19.8,2.55-21.39-10.86-21.07-34.48,9.9-44.7-16.29"
			/>
			<path
				className="t road-stroke no-fill"
				d="M259.51,198.06s3.2,34.48,22.68,31.29,27.46-1.28,29.05-23"
			/>
			<path
				className="t road-stroke no-fill"
				d="M327.21,379.11s-15,.64-21.39-2.87-8.31-1.6-8.31-1.6"
			/>
			<path
				className="s road-stroke no-fill"
				d="M166.59,300.24V317.8s1,3.2-3.51,5.43"
			/>
			<line
				className="t road-stroke no-fill"
				x1="350.52"
				y1="392.84"
				x2="346.69"
				y2="401.14"
			/>
			<rect
				className="u building-fill"
				x="113.26"
				y="245.21"
				width="10.86"
				height="14.26"
			/>
			<rect
				className="u building-fill"
				x="107.52"
				y="265.01"
				width="8.94"
				height="17.24"
			/>
			<rect
				className="u building-fill"
				x="123.7"
				y="287.15"
				width="17.24"
				height="8.94"
			/>
			<rect
				className="u building-fill"
				x="210.76"
				y="298.64"
				width="8.94"
				height="13.84"
			/>
			<rect
				className="u building-fill"
				x="319.52"
				y="227.42"
				width="11.84"
				height="24.94"
				transform="translate(-43.29 74.07) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="276.99"
				y="294.18"
				width="5.61"
				height="11.06"
				transform="translate(-56.94 65.78) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="281.04"
				y="283.49"
				width="8.66"
				height="5.33"
				transform="translate(-53.95 66.65) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="290.13"
				y="270.91"
				width="5.69"
				height="5.92"
				transform="translate(-51.19 67.98) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="316.38"
				y="264.36"
				width="5.69"
				height="6.73"
				transform="translate(-49.3 73.38) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="365.47"
				y="286.29"
				width="15.96"
				height="13.96"
				transform="translate(-53.47 85.4) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="266.26"
				y="346.42"
				width="8.94"
				height="15.71"
				transform="translate(-68.66 65.1) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="281.13"
				y="329.33"
				width="3.88"
				height="10.75"
				transform="translate(-64.28 67.3) rotate(-12.19)"
			/>
			<rect
				className="u building-fill"
				x="304.67"
				y="343.59"
				width="7.76"
				height="12.39"
				transform="translate(-66.86 72.98) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="324.32"
				y="355"
				width="2.59"
				height="3.55"
				transform="translate(-67.92 76.7) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="366.48"
				y="345.13"
				width="7.32"
				height="5.02"
				transform="translate(-65.02 85.92) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="343.55"
				y="347.89"
				width="12.62"
				height="5.85"
				transform="translate(-66.14 81.72) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="379.14"
				y="341.93"
				width="7.32"
				height="5.02"
				transform="translate(-64.06 88.52) rotate(-12.18)"
			/>
			<polygon
				className="u building-fill"
				points="395.95 391.63 376.89 402.25 370.84 390.95 386.05 382.06 395.95 391.63"
			/>
			<polygon
				className="u building-fill"
				points="403.66 341.36 388.94 344.54 387.01 335.58 401.73 332.4 403.66 341.36"
			/>
			<rect
				className="u building-fill"
				x="326.45"
				y="363.62"
				width="2.59"
				height="3.55"
				transform="translate(-69.69 77.34) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="288.26"
				y="339.31"
				width="13.07"
				height="13.04"
				transform="translate(-66.33 69.99) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="320.87"
				y="335.52"
				width="1.36"
				height="4.85"
				transform="translate(-64.12 75.54) rotate(-12.19)"
			/>
			<rect
				className="u building-fill"
				x="309.69"
				y="334.22"
				width="9.86"
				height="13.04"
				transform="translate(-64.81 74.06) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="370.07"
				y="303.63"
				width="5.11"
				height="7.95"
				transform="translate(-56.52 85.55) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="319.16"
				y="295.34"
				width="5.66"
				height="9.78"
				transform="translate(-56.1 74.7) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="296.22"
				y="239.09"
				width="4.46"
				height="4.16"
				transform="translate(-44.15 68.37) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="243.45"
				y="230.27"
				width="3.33"
				height="2.96"
				transform="translate(-43.38 56.93) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="257.1"
				y="225.4"
				width="3.33"
				height="2.96"
				transform="translate(-42.04 59.71) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="258.86"
				y="174.69"
				width="8.36"
				height="1.85"
				transform="translate(-31.13 59.46) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="284.08"
				y="223.37"
				width="5.56"
				height="2.47"
				transform="matrix(0.98, -0.21, 0.21, 0.98, -40.93, 65.58)"
			/>
			<rect
				className="u building-fill"
				x="290.49"
				y="221.98"
				width="5.56"
				height="2.47"
				transform="translate(-40.49 66.9) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="297"
				y="220.57"
				width="5.56"
				height="2.47"
				transform="translate(-40.05 68.25) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="209.49"
				y="313.97"
				width="7.66"
				height="12.56"
			/>
			<rect
				className="u building-fill"
				x="170.1"
				y="302.05"
				width="2.77"
				height="4.68"
			/>
			<rect
				className="u building-fill"
				x="113.26"
				y="246.49"
				width="27.67"
				height="12.99"
			/>
			<rect
				className="u building-fill"
				x="209.49"
				y="313.97"
				width="11.92"
				height="8.73"
			/>
			<rect
				className="u building-fill"
				x="357.82"
				y="291.52"
				width="23.81"
				height="6.06"
				transform="translate(-53.83 84.64) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="320.62"
				y="295.2"
				width="4.3"
				height="10.93"
				transform="translate(-56.17 74.87) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="321.02"
				y="291.38"
				width="3.51"
				height="14.69"
				transform="translate(-55.79 74.87) rotate(-12.19)"
			/>
			<rect
				className="u building-fill"
				x="299.96"
				y="296.7"
				width="4.1"
				height="16.63"
				transform="translate(-57.61 70.67) rotate(-12.19)"
			/>
			<rect
				className="u building-fill"
				x="300.19"
				y="299.66"
				width="7.6"
				height="12.53"
				transform="translate(-57.7 71.03) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="299.82"
				y="301.34"
				width="10.94"
				height="5.2"
				transform="translate(-57.26 71.26) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="301.25"
				y="309.16"
				width="10.94"
				height="2.75"
				transform="translate(-58.62 71.71) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="295.63"
				y="301.41"
				width="11.96"
				height="7.42"
				transform="translate(-57.59 70.51) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="326.3"
				y="308.43"
				width="7.57"
				height="7.69"
				transform="matrix(0.98, -0.21, 0.21, 0.98, -58.46, 76.68)"
			/>
			<rect
				className="u building-fill"
				x="321.9"
				y="316.56"
				width="7.57"
				height="5.44"
				transform="matrix(0.98, -0.21, 0.21, 0.98, -60.03, 75.91)"
			/>
			<rect
				className="u building-fill"
				x="328.61"
				y="318.13"
				width="5.26"
				height="5.61"
				transform="translate(-60.28 77.16) rotate(-12.19)"
			/>
			<polygon
				className="u building-fill"
				points="337.99 315.14 334.37 323.1 324.07 318.4 327.69 310.45 337.99 315.14"
			/>
			<rect
				className="u building-fill"
				x="333.18"
				y="310.05"
				width="7.57"
				height="6.05"
				transform="translate(-58.47 78.15) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="290.08"
				y="270.5"
				width="32.65"
				height="3.46"
				transform="translate(-50.54 70.78) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="319.14"
				y="263.09"
				width="2.8"
				height="7.7"
				transform="translate(-49.11 73.64) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="304.12"
				y="270.4"
				width="5.94"
				height="5.71"
				transform="translate(-50.74 70.95) rotate(-12.18)"
			/>
			<polygon
				className="u building-fill"
				points="404.48 341.19 388.94 344.54 388.13 340.78 403.66 337.42 404.48 341.19"
			/>
			<rect
				className="u building-fill"
				x="261.01"
				y="174.47"
				width="7.3"
				height="12.25"
				transform="translate(-32.15 59.91) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="257.31"
				y="152.41"
				width="5.5"
				height="12.25"
				transform="translate(-27.6 58.44) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="261.4"
				y="174.78"
				width="3.9"
				height="15.52"
				transform="translate(-32.59 59.67) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="247.54"
				y="156.63"
				width="3.9"
				height="12.3"
				transform="translate(-28.73 56.31) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="247.41"
				y="156.39"
				width="6.23"
				height="11.37"
				transform="translate(-28.56 56.51) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="236.46"
				y="162.4"
				width="7.27"
				height="10.13"
				transform="translate(-29.93 54.43) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="245.47"
				y="156.6"
				width="7.21"
				height="2.11"
				transform="translate(-27.66 56.1) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="233.14"
				y="162.38"
				width="13.5"
				height="4.8"
				transform="translate(-29.37 54.33) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="231.49"
				y="165.36"
				width="12.24"
				height="4.65"
				transform="translate(-30.03 53.91) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="256.85"
				y="152.16"
				width="8.35"
				height="8.21"
				transform="translate(-27.09 58.59) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="271.85"
				y="148.18"
				width="5.87"
				height="5.86"
				transform="translate(-25.7 61.38) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="269.24"
				y="129.15"
				width="7.97"
				height="10.15"
				transform="translate(-22.17 60.67) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="255.48"
				y="152.3"
				width="9.21"
				height="3.28"
				transform="translate(-26.63 58.34) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="268.65"
				y="128.89"
				width="10.97"
				height="4.87"
				transform="translate(-21.54 60.8) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="268.83"
				y="130.55"
				width="11.7"
				height="3.11"
				transform="translate(-21.69 60.93) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="265.86"
				y="129.18"
				width="13.58"
				height="2.85"
				transform="translate(-21.42 60.47) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="265.08"
				y="131.41"
				width="11.41"
				height="5.48"
				transform="translate(-22.21 60.15) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="276.71"
				y="291.68"
				width="3.65"
				height="13.81"
				transform="translate(-56.71 65.46) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="276.27"
				y="286.87"
				width="9.27"
				height="6.13"
				transform="translate(-112.59 380.13) rotate(-58.82)"
			/>
			<circle className="u building-fill" cx="366.65" cy="336.8" r="4.1" />
			<circle className="u building-fill" cx="375.96" cy="343.35" r="2.55" />
			<circle className="u building-fill" cx="358.85" cy="306.55" r="2.1" />
			<circle className="u building-fill" cx="316.86" cy="320.76" r="0.98" />
			<circle className="u building-fill" cx="311.4" cy="325.15" r="1.11" />
			<circle className="u building-fill" cx="331.36" cy="329.15" r="1.25" />
			<circle className="u building-fill" cx="358.66" cy="323.92" r="3.14" />
			<circle className="u building-fill" cx="333.76" cy="311.68" r="4.1" />
			<rect
				className="u building-fill"
				x="325.97"
				y="317.57"
				width="5.42"
				height="5.61"
				transform="translate(-125.18 388.76) rotate(-52.84)"
			/>
			<path
				className="u building-fill"
				d="M348.92,321.21l4.37-.43.74,1.92s.32.85,1.6.11,5.11-.11,5.11-.11h2.13v1.81h-1.39a7.18,7.18,0,0,1-4.79,8.09L350.41,334l-6.6-4-1.27-3.3,1-3.94,5.53-.11Z"
			/>
			<polygon
				className="u building-fill"
				points="353.34 353.04 347.72 354.25 345.05 341.88 350.67 340.66 353.34 353.04"
			/>
			<polygon
				className="u building-fill"
				points="343.08 349.27 346.16 343.67 352.22 348.78 344.03 350.16 343.08 349.27"
			/>
			<rect
				className="u building-fill"
				x="314.75"
				y="344.57"
				width="8.48"
				height="5.39"
				transform="translate(-66.06 75.09) rotate(-12.18)"
			/>
			<path
				className="u building-fill"
				d="M310.45,344s1.43,10.53,9.42,7.66l-.8-5.59Z"
			/>
			<rect
				className="u building-fill"
				x="319.93"
				y="335.61"
				width="1.98"
				height="1.74"
				transform="translate(-63.83 75.37) rotate(-12.19)"
			/>
			<rect
				className="u building-fill"
				x="321.29"
				y="339.2"
				width="2.07"
				height="1.06"
				transform="translate(-64.43 75.66) rotate(-12.18)"
			/>
			<rect
				className="u building-fill"
				x="284.97"
				y="337.07"
				width="3.88"
				height="8.51"
				transform="translate(-158.12 369.15) rotate(-53.53)"
			/>
			<rect
				className="u building-fill"
				x="344.69"
				y="370.2"
				width="9.01"
				height="14.16"
				transform="translate(-92.9 639.64) rotate(-77.9)"
			/>
			<rect
				className="u building-fill"
				x="365.46"
				y="373.54"
				width="7.28"
				height="5.73"
				transform="translate(-76.31 658.4) rotate(-77.9)"
			/>
			<rect
				className="u building-fill"
				x="387.38"
				y="381"
				width="7.28"
				height="11.69"
				transform="translate(-69.19 688.09) rotate(-77.9)"
			/>
			<rect
				className="u building-fill"
				x="362.04"
				y="95.95"
				width="12.45"
				height="9.95"
				transform="translate(246.08 462.7) rotate(-86.66)"
			/>
			<rect
				className="u building-fill"
				x="364.37"
				y="93.76"
				width="9.06"
				height="11.02"
				transform="translate(248.33 461.77) rotate(-86.66)"
			/>
			<rect
				className="u building-fill"
				x="358.34"
				y="88.85"
				width="3.35"
				height="5.11"
			/>
			<rect
				className="u building-fill"
				x="377.76"
				y="85.44"
				width="3.35"
				height="3.77"
				transform="translate(104.55 363.07) rotate(-58.05)"
			/>
			<rect
				className="u building-fill"
				x="327.41"
				y="125.6"
				width="9.7"
				height="9.21"
				transform="translate(8.86 281.08) rotate(-46.41)"
			/>
			<rect
				className="u building-fill"
				x="326.69"
				y="124.95"
				width="11.94"
				height="8.18"
				transform="translate(9.83 281.01) rotate(-46.41)"
			/>
			<rect
				className="u building-fill"
				x="326.84"
				y="116.63"
				width="3.26"
				height="3.04"
				transform="translate(16.42 274.6) rotate(-46.41)"
			/>
			<rect
				className="u building-fill"
				x="349.63"
				y="149.68"
				width="12.25"
				height="9.13"
				transform="translate(38.99 377.87) rotate(-58.66)"
			/>
			<rect
				className="u building-fill"
				x="349.34"
				y="149.15"
				width="8.96"
				height="11.67"
				transform="translate(37.42 376.57) rotate(-58.66)"
			/>
			<rect
				className="u building-fill"
				x="340.44"
				y="160.21"
				width="3.17"
				height="3.25"
				transform="translate(-1.54 320.39) rotate(-50.1)"
			/>
			<rect
				className="u building-fill"
				x="402.57"
				y="113.57"
				width="3.17"
				height="3.25"
				transform="translate(56.52 351.33) rotate(-50.1)"
			/>
			<rect
				className="u building-fill"
				x="389.17"
				y="119.27"
				width="10.13"
				height="8.13"
				transform="translate(-18.26 145.29) rotate(-20.42)"
			/>
			<rect
				className="u building-fill"
				x="387.83"
				y="120.23"
				width="11.64"
				height="7.38"
				transform="matrix(0.94, -0.35, 0.35, 0.94, -18.5, 145.14)"
			/>
			<path
				className="v no-fill border-stroke"
				d="M39.08,246.67l.49-32.74s-2-30.29,23-44S199.75,99.34,199.75,99.34s51.47-24.76,97.08-27.8,102.07-.65,102.07-.65,68.19,2.17,74.27,59.94l.22,206.75s6.08,68.19-70.15,87.74c0,0-100.55,12.38-125.09,8.69S223,420.76,196.27,404.47s-120.74-63-120.74-63S38,323.9,38.82,278.29Z"
			/>
		</SVGOverlay>
	),
	ruka: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .d{clip-path:url(#clip-path);}
            .j,.k,.n,.e,.f,.g,.h,.i{strokeMiterlimit:10;}
            .e{strokeWidth:2.24px;}
            .f{strokeWidth:0.32px;}
            .g{strokeWidth:6px;}
            .j,.k,.h{strokeWidth:0.64px;}
            .i{strokeWidth:0.7px;}
            .j{stroke-dasharray:3.83 0.64;}
            .k{stroke-dasharray:3.92 0.65;}
            .n{strokeWidth:0.96px;}
            `}
				</style>
				<clipPath id="clip-path">
					<path
						className="a no-fill"
						d="M129.7,77.92S171.92,46.4,239.07,67c0,0,51.64,12.37,93.69,37.76s80,48,105.89,98.77,5.86,103.19,2.83,110.51c-3.7,9-14.16,53.12-78.87,93.87S235.37,452.11,187,449.76s-88.46-55.89-88.46-55.89-12.82-22.08-17-46.3C75.34,311.52,62.79,238,61.94,216.8c-.66-16.32-2.42-44.93,15.4-79.65C97.89,97.12,129.7,77.92,129.7,77.92Z"
					/>
				</clipPath>
			</defs>
			<g id="BG-Base">
				<rect className="b background-fill" width="512" height="512" />
			</g>
			<g id="Layer_10" data-name="Layer 10">
				<path
					className="c field-fill"
					d="M129.7,77.92S171.92,46.4,239.07,67c0,0,51.64,12.37,93.69,37.76s80,48,105.89,98.77,5.86,103.19,2.83,110.51c-3.7,9-14.16,53.12-78.87,93.87S235.37,452.11,187,449.76s-88.46-55.89-88.46-55.89-12.82-22.08-17-46.3C75.34,311.52,62.79,238,61.94,216.8c-.66-16.32-2.42-44.93,15.4-79.65C97.89,97.12,129.7,77.92,129.7,77.92Z"
				/>
			</g>
			<path
				className="b background-fill"
				d="M61.76,214.56s20.48,15.25,26,14.61,11.73-1.92,16.64-9.17,7.68-12.37,14.08-13.44,14.93-1.71,20.26,1.28,18.35,13,18.35,13,11.95,6,19.63,1.71S190,215.09,193,214.88s7.68-.85,10.13.43,9.5,5.54,11.1,7.25,5.33,2.35,7.78,1.28,8-2.77,11.31-2.56a78.56,78.56,0,0,0,10.35-.11c1.6-.21,10.34.43,17.6,5.76l.53,1.07.21,2.67,2.46,2.77,4.05.21,3.95,4.06s.32,5,8.21,9.7a41.69,41.69,0,0,0,17.92,6.08c3.2.22,9,2,11.95,5.12s8.21,3.52,13,3.1,18.88-1.18,22.51,2,6.29,7.9,10.66,8.54,15.36,1.92,17.18,3.41,3.84,1.28,6.29,1.81,10.24,2.56,17,1.18,12.91-4.16,15.68-7.79,12.59-11.31,14.29-11.63,13.12-4.8,24.32-3.73l.32,4.16s-18.66.21-27.3,8.53-8.54,10.14-16.54,11.52-11,3.2-22.4.22-11.41-2.24-13.33-2-17.6.32-21.33-5.76-18.35-6.61-26.14-5.23-12.26.64-16.64-4.8-9.92-4.69-12.16-4.58-13.86.64-15.14-1.5a11.86,11.86,0,0,0-5.34-4.9c-2.34-1.07-6.82-5.55-6.82-6.4s-3.31-3.31-3.63-3.42a13,13,0,0,1-2.77-3.41c-.22-.75-5.55-7.15-10.56-9.17s-23.68-3.84-26.35-3.1-7.25,2.88-13.44-.32-8.64-8-15.25-6.4-17.28,4.8-19.84,7.58S165.12,228,165.12,228,157,225.33,154.88,224s-5-2.78-5.33-2.67-4.27-3-4.38-3.84-6-4.91-6-4.91a16.65,16.65,0,0,0-11.84-3.3c-7.36.64-11.63,4.9-15.68,9.81S104.11,231.52,91,233.33s-28.8-12.26-28.8-12.26Z"
			/>
			<g id="Roads">
				<g className="d">
					<path
						className="e road-stroke no-fill"
						d="M134.16,411s5.47.51,8.35.93,5.59,1,7.46,1.18c3,.33,9.12.58,11.9.05s7.09-1.49,9.54-4.53a23,23,0,0,0,4-7.23c.84-2.23,2.33-7.56,3-9.84,1.1-3.51,2.8-9.68,5.57-13"
					/>
					<path
						className="e road-stroke no-fill"
						d="M178.48,391.52S157.65,385,149,380c-1.85-1.08-3.73-1.81-2.13-8.32,1-4.17,4.24-12.29,7.57-20.48,2.71-6.63,5.14-13.28,7.52-17.39.84-1.43,2.19-3.52,6.67-1.81"
					/>
					<path
						className="e road-stroke no-fill"
						d="M172.16,408.8l29.12,9.6a15.16,15.16,0,0,0,10.64.32c4.88-1.6,12.32-4.16,14.08-6.32s5.12-7,9.84-7,10.56-1,14.4-6.16,10.56-16.48,11-19.44.88-13.68.88-13.68"
					/>
					<path
						className="e road-stroke no-fill"
						d="M334.4,279.73s4.16,6.3,1.39,16.54-4.8,15.89-12.7,20.16-21.76,12.16-21.76,12.16-13.08,5.93-16.53,20.48l-.11.64A20.13,20.13,0,0,1,278.51,362s-8.64,6.08-14,5.55l-2.77-.85c-4.48-1.18-10.24-4.27-17.07-7.58-3-1.46-5.44-7.68-3.41-13,1.14-3,4.27-8.67,5.23-11.73.49-1.58.87-5.15.1-6.62-.67-1.27-3.47-2.63-4.8-3.2-4.94-2.11-15.06-5.78-20.05-7.78-2.23-.9-6-2.56-7.25-6.3-.77-2.23,1.21-7.05,2.24-9.17,1.17-2.42,3.95-7.34,3.84-10-.22-4.9,3.73-12.69,3.73-12.69"
					/>
					<path
						className="e road-stroke no-fill"
						d="M158.08,271.2s12.16,4.16,24,4.48,29-.16,29-.16,8.64-1.28,19,6.24a21,21,0,0,0,9,1.28c4.64-.48,60,.32,60,.32l23.68-.64s11,0,21.76-9.28,15.84-13.12,22.24-14.56,12.48-1.44,15.36.16,9,3.36,13.76,1.92,14.52-4.93,18.08-9.6c1.87-2.45,5.28-6.72,8.8-8.64a97.93,97.93,0,0,0,11-6.88c3.2-2.4,12.48-8.8,13.92-8.8"
					/>
					<path
						className="e road-stroke no-fill"
						d="M174.72,165.92s13.6,3.52,21.76,1.92,10.9-1.88,13.36-1.28c3.6.88,4.24,1.68,6.72,2.08s7.76.16,13,1.92,9.76,4,12.64,8.64,10.4,14.88,12.8,16,6.08,3.36,9.76,3.68a19.07,19.07,0,0,1,8,2.88c1.92,1.28,4.8,5.28,12.64,4.16s13.28-1,15.68-.16a32.36,32.36,0,0,0,8.64,1.12c1.76-.16,15.68.16,15.68.16s4.8-.48,10.72,5.76,12.48,11.52,19.36,5.28,9-13.28,18.88-15.36,38.72-15.68,59-9.44"
					/>
					<path
						className="f road-stroke road-fill"
						d="M72.4,290s19.39-.65,23.12.48c4.88,1.48,6.12,1.64,7.12,3.88.75,1.67.56,2,1.52,3.08s7.36,8.28,11,11.2,5.36,4.16,5.36,4.16l-2.8.08s-8.76-7.36-12.16-11.2a27.09,27.09,0,0,1-4-5.28c-.41-.76-.24-2.12-2.12-2.92a23.41,23.41,0,0,0-8.2-2.08c-4-.32-18.6.28-18.6.28Z"
					/>
					<path
						className="g road-stroke no-fill"
						d="M132,431c2-17-4.38-37.79-6-43,0,0-14.79-32.54-15.5-38.5-.91-7.61-6.57-24.88,33-60,20.17-20.95,20.38-57,22-63,1.58-5.87,5.36-17.5,5.5-21.5.15-4.43-1-26-1-31,0-5.53,16-53.72,17.5-56.5S196,85,197,81s6-5.18,7-8,1.73-21.64,1.5-21.5"
					/>
				</g>
			</g>
			<g id="Fences">
				<polyline
					className="h feature-stroke no-fill"
					points="79.68 287.95 79.68 277.6 100.48 277.6"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="79.57"
					y1="298.93"
					x2="79.57"
					y2="319.09"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="79.57 321.33 79.57 324.64 85.76 333.49 106.56 333.49 108.8 327.36"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="111.09"
					y1="321.97"
					x2="117.17"
					y2="313.12"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="104.32 277.49 107.63 277.49 127.04 297.87"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="110.13 287.09 111.57 285.81 119.63 294.51 118.4 295.52"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="113.01"
					y1="290.03"
					x2="114.24"
					y2="288.75"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="115.79"
					y1="292.85"
					x2="117.01"
					y2="291.57"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="110.61"
					y1="236.11"
					x2="120.11"
					y2="236.32"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M107.25,239.31a16.19,16.19,0,0,0-2.82,6.61c-.38,3.31,3.73,5.12,3.73,5.12"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M112.69,254.83s1.44,5.44,12.91,4"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M131,258.24l10.82-.21s3.31.85,5.07,1.54,5.81,1.28,7.36.91,2.13-3.25,2.24-4"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="160"
					y1="239.2"
					x2="158.24"
					y2="250.61"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M155,230.19s5.6.69,5.49,3.89"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="162.24 219.84 162.61 221.01 161.07 229.12 160 229.92"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="168.64 232.43 168.05 231.2 169.71 222.83 170.93 221.87"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M139.57,187.47s4.75,7.57-4.85,8.8"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M107.73,203.36s4.11,1.23,5-.27,1.06-3.25,3.2-4.48,2.13-1.7,2.29-2.13a7.57,7.57,0,0,0,.21-4.43"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M118.13,187.47s4.86-2.46,4.27-5.92-1.6-2.24.53-7.74a5.9,5.9,0,0,0-2.82-7.78"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M127.57,187.84s-3.89-7-1.28-10.35"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M128.59,181s-4.16-2.88-2.19-9.07,7.15-4.48,7.89-3.89,2.78,1.49,2.78,6.29,1,6.72,1.17,6.78"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M144.53,178.77s-2.72-3.2-1.86-6.29-1.71-5.71-1.71-5.71-2.72-3.3-2.45-5.65.8-5.33,5.44-5.49,7.2.8,8.74,3.3a57.57,57.57,0,0,0,5.92,7.36c1.18,1.23,1.07,3.79,1.5,4.32a18.12,18.12,0,0,1,2.34,4.54c.22,1.17.59,3.94.59,3.94"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M152,180.59s.21,5.54,2.45,7.52"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M89.92,171.31s3.2-15.79,7.09-16.64,8.32-2,9.55-5.92,5.07-9.18,7.36-10.24,3.84-4.38,4.53-6,4.64-2,5.55.8,4.48,5,1.92,10.78"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M130.45,145.92s5.07,7.63-3,11.52"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M127.47,150.35s3,8-3,8.69-3.31-1-5.17,3.15"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M168.75,132a14.82,14.82,0,0,1,.74,4.8,6.45,6.45,0,0,0,.75,3.63s.53,5.86-6.51,9.17"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M147,137.65s5.44,5.23,10.34,2.67"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M143.25,141.92s4.7.32,6.4,3.2,6.4,1.92,6.4,1.92"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M137.71,129.23a6.56,6.56,0,0,0-.54,7.78"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="142.4"
					y1="116"
					x2="147.2"
					y2="112.48"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M126.51,102.88s-5.44,8.85-.54,16.43,10.56-1,10.56-1"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M116.59,117.28s4.8,9.6-2.14,12.37c0,0-4.16.75-6.18,6.62s-6.62-2.35-6.62-2.35-3.94-.32-4.8-1.71"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M90.56,144.48A9.74,9.74,0,0,0,103.25,142"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M128.8,111s4.8,3.52,8.8-1"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M212.48,196s4.64,2.72,4.32,6.4,3.84,4.48,3.84,4.48"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M234.88,145.76s-1,7.52,8.16,8.64"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M237.28,130.88a10.24,10.24,0,0,0,8.32,7.36"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M264,194.72s8.8,2.24,10.24,4.8,7.36,4,7.36,4"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M283.36,209.92s1.12,13.92,21.44,14.24"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M320.16,228.8s-3.52,4.64,5.6,5c0,0,4.8-.64,9.44-5.44,0,0,5-2.72,6.08-1.76"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M334.88,257.6s3.84,3.52,8.64,3.36a9.24,9.24,0,0,1,7.36,3.2"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="342.56 271.84 344.16 271.84 353.12 264.64 353.6 263.04"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="345.76 275.36 345.92 274.08 354.72 266.88 356.48 266.72"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M300.48,289.44s2.56-1.6,3.84-.8,2.4.16,4-.48,5.44,1.12,5.6,1.92"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M268.48,289.44s3.84-2.88,6.72-1.76a5.83,5.83,0,0,0,5.44-.48c.48-.32,8.64,1.44,8.64,1.44"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M351.2,289s4.64-2.4,7-.64"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M354.08,280.8s12.64-3.52,18.72,1.92"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M379,297.12a6.61,6.61,0,0,1,6.4-4.64"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M393.76,284.8s5.76.32,8.16-.32"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M372,290.24s2.08-7,8.32-5"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M380,287.68s0-4,2.56-5,5.76,1.44,7.36,3,3.52,4.48,6.4,4.16"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M378.72,272s7.2,4.64,10.72,2.4"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M385.28,271.84s3.52,4,7.52,1.92"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="253.76 216.48 255.52 218.4 255.52 220.96 261.76 227.04 261.92 230.88 264.64 233.44 268.64 233.76 272.64 237.6 265.6 244.48 253.76 232.96 221.12 232.96"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="217.28"
					y1="233.01"
					x2="212.37"
					y2="232.91"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="209.71 232.69 208.21 232.69 205.44 234.72 205.44 242.51"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="204.8"
					y1="249.44"
					x2="199.79"
					y2="254.03"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="198.08"
					y1="255.84"
					x2="194.13"
					y2="259.25"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="192.21"
					y1="261.39"
					x2="192.21"
					y2="273.23"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="199.47"
					y1="273.12"
					x2="202.45"
					y2="273.12"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="204.27 273.12 231.15 273.23 236.16 268.96 236.05 259.36 232.11 255.2 220.59 255.2"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="218.03 255.09 208.32 255.09 205.55 257.97 205.55 261.49"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="199.36 262.99 199.36 261.6 209.28 261.6 209.28 265.65 210.88 265.65"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="243.52 252.21 243.41 250.61 250.99 250.61 252.05 251.25"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="246.83"
					y1="252.11"
					x2="246.83"
					y2="250.72"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="248.85"
					y1="252.11"
					x2="248.85"
					y2="250.72"
				/>
				<path
					className="h feature-stroke no-fill"
					d="M256.56,254.64a16.18,16.18,0,0,1,2.64,2.56"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="243.84 270.32 243.84 267.04 249.52 267.04 249.52 265.52 251.92 265.52 251.92 267.2 258.24 267.2 258.24 270 260.16 270"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="237.92 280.56 258.24 280.56 258.24 279.44 260.08 279.44"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="260.32 272.48 258.32 272.48 258.32 277.04 259.84 277.04"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="272.08 250.64 269.6 250.64 269.6 248.64 266.8 245.84 274 238.96 276.88 241.68 280.64 238.08"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="290.4 260.64 291.44 261.44 296.8 261.44 300 263.12 301.6 265.92"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="302.96 268.24 306.24 274 306.24 281.28 297.92 281.28"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="292.72 281.36 266.24 281.36 266.24 270.88"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="266.32 266.16 266.32 260.88 269.68 260.88 269.68 255.6 272.24 255.6"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="296.96 293.84 304.16 293.84 308.8 301.12"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="308.88 306 308.88 313.12 291.84 322.72 276.08 322.72 269.68 316.32 269.68 309.6"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="269.84"
					y1="305.68"
					x2="269.84"
					y2="302.24"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="270.56 298.96 272.24 295.92 288.08 295.92 291.6 293.84"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="275.92"
					y1="304.48"
					x2="275.92"
					y2="295.92"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="288.16"
					y1="297.28"
					x2="288.16"
					y2="295.92"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="281.68"
					y1="305.76"
					x2="289.6"
					y2="305.76"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="288.16"
					y1="300.8"
					x2="288.16"
					y2="302.56"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="167.2 335.36 155.04 368.48 170.08 374.08"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="172.16"
					y1="374.72"
					x2="181.6"
					y2="378.24"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="185.44"
					y1="379.68"
					x2="207.2"
					y2="387.84"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="210.4 388.96 220.64 392.32 222.88 386.24"
				/>
				<line
					className="i feature-stroke no-fill"
					x1="224.32"
					y1="382.72"
					x2="233.28"
					y2="357.6"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="234.88 353.28 243.04 331.2 233.76 327.84"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="231.2"
					y1="326.88"
					x2="213.92"
					y2="320.64"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="210.88"
					y1="319.52"
					x2="193.92"
					y2="313.44"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="190.88 312.16 177.44 307.36 169.6 329.28"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="269.12"
					y1="232.91"
					x2="268.64"
					y2="233.76"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="258.13 211.79 257.17 212.53 259.41 214.88 265.81 209.23 278.93 222.24 280.11 221.28"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="332.27"
					y1="206.45"
					x2="337.17"
					y2="199.63"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="338.77"
					y1="197.71"
					x2="343.47"
					y2="191.31"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="334.83 207.84 337.28 204.21 344.43 209.23 342.08 212.75"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="343.68 214.45 346.56 210.72 354.24 215.95 356.59 213.07 360.64 215.63 358.29 218.72"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="345.39 192.48 343.25 195.57 350.08 200.48 352.21 197.28"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="354.45 198.88 352.11 202.19 360.32 207.73 358.19 211.15 361.81 213.81 363.73 211.15"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="378.13"
					y1="222.56"
					x2="374.4"
					y2="228"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="450.4"
					y1="275.2"
					x2="448.83"
					y2="274.1"
				/>
				<line
					className="j feature-stroke no-fill"
					x1="448.31"
					y1="273.73"
					x2="379.22"
					y2="225.13"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="378.96"
					y1="224.94"
					x2="377.39"
					y2="223.84"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="375.19"
					y1="226.48"
					x2="376.76"
					y2="227.59"
				/>
				<line
					className="k feature-stroke no-fill"
					x1="377.29"
					y1="227.97"
					x2="448.08"
					y2="277.86"
				/>
				<line
					className="h feature-stroke no-fill"
					x1="448.35"
					y1="278.05"
					x2="449.92"
					y2="279.16"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="397.88 238.08 398.6 237.16 400.84 238.84 400.24 239.68"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="432.24 262.12 432.96 261.2 435.2 262.88 434.6 263.72"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="449.3 278.59 448.57 279.51 446.33 277.83 446.94 276.99"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="415.25 254.75 414.54 255.67 412.3 253.99 412.89 253.15"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="406.57 248.47 405.86 249.39 403.62 247.71 404.21 246.87"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="389.42 236.59 388.69 237.51 386.45 235.83 387.06 234.99"
				/>
				<polyline
					className="h feature-stroke no-fill"
					points="380.74 230.31 380.01 231.23 377.77 229.55 378.38 228.71"
				/>
			</g>
			<polygon
				className="l building-fill"
				points="88 314.61 86.83 314.61 86.83 317.07 88 317.07 88 319.63 98.13 319.63 98.13 317.07 98.13 314.61 98.13 312.05 88 312.05 88 314.61"
			/>
			<rect
				className="l building-fill"
				x="83.84"
				y="293.6"
				width="7.79"
				height="3.41"
			/>
			<polygon
				className="l building-fill"
				points="120.44 300.44 121 301.04 119.26 302.68 119.94 303.4 121.68 301.76 121.78 301.87 119.9 303.64 120.58 304.36 122.46 302.59 122.78 302.93 126.01 299.89 123.67 297.4 120.44 300.44"
			/>
			<rect
				className="l building-fill"
				x="102.57"
				y="305.18"
				width="2.6"
				height="2.5"
				transform="translate(-193.11 178.03) rotate(-47.89)"
			/>
			<rect
				className="l building-fill"
				x="105.35"
				y="280.86"
				width="2.6"
				height="2.5"
				transform="translate(-174.16 172.08) rotate(-47.9)"
			/>
			<polygon
				className="l building-fill"
				points="113.99 297.37 110.44 293.85 111.31 293.04 109.38 290.99 104.31 295.76 104.46 295.92 104.41 295.97 105.83 297.37 106.24 297.81 106.25 297.79 109.94 301.45 110.2 301.18 111.22 302.19 114.42 298.96 113.4 297.95 113.99 297.37"
			/>
			<circle className="l building-fill" cx="111.68" cy="313.6" r="2.32" />
			<rect
				className="l building-fill"
				x="85.84"
				y="264.57"
				width="6.07"
				height="3.73"
				transform="translate(-191.17 287.82) rotate(-75.92)"
			/>
			<rect
				className="l building-fill"
				x="121.49"
				y="275.79"
				width="1.92"
				height="2.24"
			/>
			<rect
				className="l building-fill"
				x="113.23"
				y="237.55"
				width="3.84"
				height="5.6"
			/>
			<rect
				className="l building-fill"
				x="134.53"
				y="245.09"
				width="2.93"
				height="2.76"
				transform="translate(-142.36 288.37) rotate(-69.67)"
			/>
			<rect
				className="l building-fill"
				x="125.81"
				y="216.11"
				width="4.43"
				height="4.11"
				transform="translate(-8.58 5.27) rotate(-2.28)"
			/>
			<rect
				className="l building-fill"
				x="147.01"
				y="385.5"
				width="4.32"
				height="4.69"
				transform="translate(-266.32 394.8) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="187.39"
				y="385.44"
				width="4.32"
				height="2.62"
				transform="translate(-238.76 432.01) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="155.83"
				y="366.38"
				width="1.91"
				height="2.05"
				transform="translate(-242.11 388.52) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="219.03"
				y="389.58"
				width="1.91"
				height="2.05"
				transform="translate(-222.4 463.14) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="177.27"
				y="307.82"
				width="1.91"
				height="2.05"
				transform="translate(-173.04 370.21) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="240.32"
				y="330.97"
				width="1.91"
				height="2.05"
				transform="translate(-153.37 444.63) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="165.3"
				y="337.35"
				width="4.39"
				height="1.56"
				transform="translate(-207.6 379.33) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="165.43"
				y="323.5"
				width="4.39"
				height="2.36"
				transform="translate(-194.88 370.63) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="242.22"
				y="351.03"
				width="4.39"
				height="2.36"
				transform="translate(-170.3 460.81) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="206.23"
				y="312.07"
				width="4.39"
				height="2.36"
				transform="translate(-157.35 401.42) rotate(-69.92)"
			/>
			<polygon
				className="l building-fill"
				points="177.05 340.43 175.22 339.76 175.42 339.21 171.94 337.94 170.64 341.5 170.07 341.29 169.27 343.45 175.16 345.6 175.16 345.59 175.17 345.59 175.56 344.52 177.24 345.13 178.73 341.06 177.05 340.44 177.05 340.43"
			/>
			<rect
				className="l building-fill"
				x="187.75"
				y="344.29"
				width="4.34"
				height="4.1"
				transform="translate(-200.58 405.78) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="195.18"
				y="358.52"
				width="5.45"
				height="2.39"
				transform="translate(-207.89 422.05) rotate(-69.92)"
			/>
			<rect
				className="l building-fill"
				x="220.25"
				y="358.76"
				width="7.99"
				height="3.37"
				transform="translate(-191.3 447.23) rotate(-69.91)"
			/>
			<rect
				className="l building-fill"
				x="207.99"
				y="351.76"
				width="4.31"
				height="4.04"
				transform="translate(-194.28 429.66) rotate(-69.92)"
			/>
			<polygon
				className="l building-fill"
				points="205.56 329.32 203.72 328.64 203.43 329.42 204.77 329.91 204.15 331.6 200.57 330.3 201.2 328.6 202.32 329 202.6 328.23 200.79 327.57 200.51 328.34 200.54 328.36 199.92 330.06 199.91 330.05 197.05 337.88 201.83 339.63 201.84 339.59 201.96 339.63 205.65 329.54 205.5 329.49 205.56 329.32"
			/>
			<rect
				className="l building-fill"
				x="243.09"
				y="273.01"
				width="3.52"
				height="3.95"
			/>
			<rect
				className="l building-fill"
				x="229.97"
				y="235.89"
				width="4.59"
				height="9.07"
			/>
			<rect
				className="l building-fill"
				x="217.01"
				y="175.73"
				width="3.23"
				height="7.95"
			/>
			<rect
				className="l building-fill"
				x="223.57"
				y="175.73"
				width="3.23"
				height="7.95"
			/>
			<rect
				className="l building-fill"
				x="223.78"
				y="153.98"
				width="2.43"
				height="1.63"
				transform="translate(48.68 363.36) rotate(-84.32)"
			/>
			<rect
				className="l building-fill"
				x="226.9"
				y="154.46"
				width="2.43"
				height="1.63"
				transform="translate(51.02 366.9) rotate(-84.32)"
			/>
			<rect
				className="l building-fill"
				x="230.18"
				y="154.94"
				width="2.43"
				height="1.63"
				transform="translate(53.5 370.6) rotate(-84.32)"
			/>
			<rect
				className="l building-fill"
				x="235.08"
				y="160.78"
				width="3.4"
				height="7.95"
				transform="translate(-24.73 43.02) rotate(-9.87)"
			/>
			<rect
				className="l building-fill"
				x="213.65"
				y="235.89"
				width="4.16"
				height="1.92"
			/>
			<rect
				className="l building-fill"
				x="214.29"
				y="240.48"
				width="4.16"
				height="1.92"
			/>
			<rect
				className="l building-fill"
				x="221.01"
				y="238.67"
				width="1.92"
				height="1.92"
			/>
			<rect
				className="l building-fill"
				x="221.23"
				y="242.72"
				width="1.92"
				height="1.92"
			/>
			<rect
				className="l building-fill"
				x="209.6"
				y="239.2"
				width="1.92"
				height="4.37"
			/>
			<polygon
				className="l building-fill"
				points="203.07 268.91 203.31 268.91 203.31 268.67 203.87 268.67 203.87 267.01 203.31 267.01 203.31 266.61 200.03 266.61 200.03 267.01 199.47 267.01 199.47 270.03 203.07 270.03 203.07 268.91"
			/>
			<rect
				className="l building-fill"
				x="239.47"
				y="235.89"
				width="4.59"
				height="9.07"
			/>
			<rect
				className="l building-fill"
				x="247.89"
				y="235.89"
				width="4.59"
				height="9.07"
			/>
			<rect
				className="l building-fill"
				x="257.54"
				y="256.02"
				width="1.81"
				height="4.08"
				transform="translate(-106.38 240.98) rotate(-42.28)"
			/>
			<rect
				className="l building-fill"
				x="252.27"
				y="273.01"
				width="3.52"
				height="3.95"
			/>
			<rect
				className="l building-fill"
				x="285.55"
				y="313.17"
				width="4.32"
				height="3.95"
			/>
			<rect
				className="l building-fill"
				x="286.19"
				y="302.29"
				width="3.68"
				height="3.15"
			/>
			<rect
				className="l building-fill"
				x="296.91"
				y="299.17"
				width="3.68"
				height="4.27"
			/>
			<rect
				className="l building-fill"
				x="305.15"
				y="296.88"
				width="1.77"
				height="3.86"
				transform="translate(-108.92 195.12) rotate(-30.29)"
			/>
			<rect
				className="l building-fill"
				x="275.15"
				y="272.37"
				width="9.04"
				height="4.99"
			/>
			<rect
				className="l building-fill"
				x="285.71"
				y="279.17"
				width="4.08"
				height="1.79"
			/>
			<rect
				className="l building-fill"
				x="275.15"
				y="260.69"
				width="9.04"
				height="4.99"
			/>
			<polygon
				className="l building-fill"
				points="310.83 277.17 310.59 277.17 310.59 278.37 310.03 278.37 310.03 280.48 310.59 280.48 310.59 280.96 313.95 280.96 313.95 280.48 314.59 280.48 314.59 278.37 314.59 277.17 313.95 277.17 310.83 277.17"
			/>
			<rect
				className="l building-fill"
				x="289.64"
				y="263.92"
				width="2.06"
				height="2.07"
				transform="translate(-82 390.68) rotate(-60.99)"
			/>
			<rect
				className="l building-fill"
				x="293.32"
				y="265.72"
				width="2.06"
				height="2.07"
				transform="translate(-81.68 394.82) rotate(-60.99)"
			/>
			<polygon
				className="l building-fill"
				points="277.52 223.59 264.92 211.15 257.3 218.87 259.5 221.05 257.79 222.78 261.22 226.16 262.93 224.43 269.89 231.31 277.52 223.59"
			/>
			<rect
				className="l building-fill"
				x="282.39"
				y="235.95"
				width="2.09"
				height="2.04"
				transform="translate(-84.34 272.13) rotate(-45.36)"
			/>
			<polygon
				className="l building-fill"
				points="130.77 237.92 126.88 237.92 126.88 238.93 124.05 238.93 124.05 247.15 129.28 247.15 129.28 247.73 131.41 247.73 131.41 247.15 131.79 247.15 131.79 238.93 130.77 238.93 130.77 237.92"
			/>
			<polygon
				className="l building-fill"
				points="148.03 238.42 148.19 239.29 150.88 238.8 149.72 232.55 149.72 232.55 149.62 232.04 141.92 233.47 142.01 233.98 140.69 234.22 141.54 238.8 142.86 238.56 143.01 239.35 148.03 238.42"
			/>
			<rect
				className="l building-fill"
				x="120.08"
				y="218.67"
				width="3.11"
				height="2.51"
				transform="translate(-30.81 20.12) rotate(-8.4)"
			/>
			<polygon
				className="l building-fill"
				points="300.13 363.57 299.77 362.95 299.77 362.96 299.28 362.14 295.23 364.55 295.72 365.37 293.62 366.62 293.98 367.23 296.08 365.98 296.25 366.26 294.05 367.58 294.41 368.19 296.62 366.88 297.04 367.59 301.09 365.18 300.13 363.57 300.13 363.57"
			/>
			<rect
				className="l building-fill"
				x="353.62"
				y="184.56"
				width="3.92"
				height="4.18"
				transform="translate(5.33 383.13) rotate(-56.99)"
			/>
			<rect
				className="l building-fill"
				x="361.22"
				y="189.68"
				width="3.92"
				height="4.18"
				transform="translate(4.5 391.83) rotate(-56.99)"
			/>
			<rect
				className="l building-fill"
				x="356.5"
				y="199.84"
				width="3.92"
				height="4.18"
				transform="translate(-6.17 392.5) rotate(-56.99)"
			/>
			<polygon
				className="l building-fill"
				points="339.77 181.13 339.77 181.13 337.09 179.39 334.59 183.24 335.41 183.77 331.8 189.32 337.3 192.89 337.47 192.63 338.56 193.34 341.01 189.58 339.91 188.87 343.4 183.49 339.77 181.13"
			/>
			<g id="tracks">
				<path
					className="f road-stroke road-fill"
					d="M87.15,368.48s4.33,11.46,6.72,15c.64,1,15.46,22.51,15.46,22.51l9.82,9.7s-18.78-25-21.12-28.8-4.59-7.68-4.59-7.68L87,367.41Z"
				/>
				<path
					className="e road-stroke no-fill"
					d="M77.33,138.08,76.48,215s-1,9-2.67,10-1.17,16.32-1.17,16.32,1,13.55-.43,16.54-2.56,18.56-2.56,18.56"
				/>
			</g>
			<polygon
				className="m road-fill"
				points="243.43 68.59 242.4 68.57 242.39 68.83 242.1 68.83 242.12 68.06 242.41 68.06 242.4 68.32 243.44 68.35 243.44 68.09 243.74 68.1 243.72 68.86 243.43 68.85 243.43 68.59"
			/>
			<polygon
				className="m road-fill"
				points="243.42 69.36 242.38 69.34 242.38 69.6 242.08 69.59 242.1 68.83 242.39 68.83 242.39 69.09 243.42 69.11 243.43 68.85 243.72 68.86 243.71 69.62 243.41 69.61 243.42 69.36"
			/>
			<polygon
				className="m road-fill"
				points="243.4 70.12 242.37 70.1 242.37 70.36 242.07 70.36 242.08 69.59 242.38 69.6 242.37 69.86 243.41 69.87 243.41 69.61 243.71 69.62 243.7 70.38 243.4 70.38 243.4 70.12"
			/>
			<polygon
				className="m road-fill"
				points="243.4 70.88 242.36 70.87 242.36 71.13 242.07 71.13 242.07 70.36 242.37 70.36 242.37 70.62 243.4 70.63 243.4 70.38 243.7 70.38 243.69 71.14 243.4 71.14 243.4 70.88"
			/>
			<polygon
				className="m road-fill"
				points="243.4 71.64 242.36 71.64 242.36 71.9 242.06 71.9 242.07 71.13 242.36 71.13 242.36 71.39 243.4 71.39 243.4 71.14 243.69 71.14 243.69 71.9 243.39 71.9 243.4 71.64"
			/>
			<polygon
				className="m road-fill"
				points="243.4 72.4 242.36 72.41 242.37 72.67 242.07 72.67 242.06 71.9 242.36 71.9 242.36 72.16 243.39 72.15 243.39 71.9 243.69 71.9 243.69 72.65 243.4 72.66 243.4 72.4"
			/>
			<polygon
				className="m road-fill"
				points="243.41 73.16 242.37 73.17 242.37 73.43 242.08 73.44 242.07 72.67 242.37 72.67 242.37 72.93 243.4 72.91 243.4 72.66 243.69 72.65 243.7 73.41 243.41 73.42 243.41 73.16"
			/>
			<polygon
				className="m road-fill"
				points="243.42 73.92 242.38 73.94 242.39 74.2 242.09 74.21 242.08 73.44 242.37 73.43 242.38 73.69 243.41 73.67 243.41 73.42 243.7 73.41 243.72 74.17 243.42 74.17 243.42 73.92"
			/>
			<polygon
				className="m road-fill"
				points="243.44 74.68 242.41 74.71 242.42 74.97 242.12 74.98 242.09 74.21 242.39 74.2 242.4 74.46 243.43 74.43 243.42 74.17 243.72 74.17 243.74 74.92 243.45 74.93 243.44 74.68"
			/>
			<polygon
				className="m road-fill"
				points="243.47 75.44 242.43 75.48 242.44 75.74 242.15 75.75 242.12 74.98 242.42 74.97 242.42 75.23 243.46 75.19 243.45 74.93 243.74 74.92 243.77 75.68 243.48 75.69 243.47 75.44"
			/>
			<polygon
				className="m road-fill"
				points="243.5 76.19 242.47 76.25 242.49 76.51 242.19 76.52 242.15 75.75 242.44 75.74 242.46 76 243.49 75.95 243.48 75.69 243.77 75.68 243.81 76.43 243.52 76.45 243.5 76.19"
			/>
			<polygon
				className="m road-fill"
				points="243.55 76.95 242.52 77.02 242.53 77.28 242.24 77.3 242.19 76.52 242.49 76.51 242.5 76.77 243.53 76.7 243.52 76.45 243.81 76.43 243.86 77.19 243.56 77.21 243.55 76.95"
			/>
			<polygon
				className="m road-fill"
				points="243.6 77.71 242.57 77.78 242.59 78.04 242.29 78.07 242.24 77.3 242.53 77.28 242.55 77.53 243.58 77.46 243.56 77.21 243.86 77.19 243.91 77.94 243.62 77.96 243.6 77.71"
			/>
			<polygon
				className="m road-fill"
				points="243.66 78.46 242.63 78.55 242.65 78.81 242.36 78.84 242.29 78.07 242.59 78.04 242.61 78.3 243.64 78.22 243.62 77.96 243.91 77.94 243.98 78.69 243.69 78.72 243.66 78.46"
			/>
			<polygon
				className="m road-fill"
				points="243.73 79.22 242.7 79.32 242.72 79.58 242.43 79.61 242.36 78.84 242.65 78.81 242.68 79.07 243.71 78.97 243.69 78.72 243.98 78.69 244.05 79.44 243.75 79.47 243.73 79.22"
			/>
			<polygon
				className="m road-fill"
				points="243.81 79.97 242.78 80.08 242.81 80.34 242.52 80.37 242.43 79.61 242.72 79.58 242.75 79.83 243.78 79.73 243.75 79.47 244.05 79.44 244.13 80.19 243.84 80.22 243.81 79.97"
			/>
			<polygon
				className="m road-fill"
				points="243.9 80.72 242.87 80.85 242.9 81.11 242.6 81.14 242.52 80.37 242.81 80.34 242.84 80.6 243.87 80.48 243.84 80.22 244.13 80.19 244.22 80.94 243.92 80.98 243.9 80.72"
			/>
			<polygon
				className="m road-fill"
				points="243.99 81.47 242.97 81.61 243 81.87 242.71 81.91 242.6 81.14 242.9 81.11 242.93 81.36 243.96 81.23 243.92 80.98 244.22 80.94 244.32 81.69 244.03 81.73 243.99 81.47"
			/>
			<polygon
				className="m road-fill"
				points="244.1 82.23 243.07 82.37 243.11 82.63 242.82 82.67 242.71 81.91 243 81.87 243.04 82.13 244.06 81.98 244.03 81.73 244.32 81.69 244.42 82.44 244.13 82.48 244.1 82.23"
			/>
			<polygon
				className="m road-fill"
				points="244.2 82.98 243.18 83.13 243.22 83.39 242.93 83.44 242.82 82.67 243.11 82.63 243.14 82.89 244.17 82.73 244.13 82.48 244.42 82.44 244.54 83.19 244.25 83.23 244.2 82.98"
			/>
			<polygon
				className="m road-fill"
				points="244.33 83.73 243.3 83.89 243.35 84.15 243.06 84.2 242.93 83.44 243.22 83.39 243.26 83.65 244.29 83.48 244.25 83.23 244.54 83.19 244.66 83.93 244.37 83.98 244.33 83.73"
			/>
			<polygon
				className="m road-fill"
				points="244.45 84.48 243.43 84.65 243.47 84.91 243.18 84.96 243.06 84.2 243.35 84.15 243.39 84.41 244.41 84.23 244.37 83.98 244.66 83.93 244.78 84.68 244.49 84.73 244.45 84.48"
			/>
			<polygon
				className="m road-fill"
				points="244.58 85.22 243.56 85.41 243.61 85.66 243.32 85.72 243.18 84.96 243.47 84.91 243.52 85.16 244.54 84.98 244.49 84.73 244.78 84.68 244.92 85.42 244.63 85.48 244.58 85.22"
			/>
			<polygon
				className="m road-fill"
				points="244.72 85.97 243.7 86.16 243.75 86.42 243.46 86.47 243.32 85.72 243.61 85.66 243.66 85.92 244.68 85.73 244.63 85.48 244.92 85.42 245.06 86.17 244.77 86.22 244.72 85.97"
			/>
			<polygon
				className="m road-fill"
				points="244.86 86.72 243.84 86.92 243.9 87.17 243.61 87.23 243.46 86.47 243.75 86.42 243.8 86.67 244.81 86.48 244.77 86.22 245.06 86.17 245.2 86.91 244.91 86.97 244.86 86.72"
			/>
			<polygon
				className="m road-fill"
				points="245.01 87.46 244 87.67 244.05 87.92 243.76 87.98 243.61 87.23 243.9 87.17 243.95 87.42 244.96 87.22 244.91 86.97 245.2 86.91 245.35 87.66 245.07 87.72 245.01 87.46"
			/>
			<polygon
				className="m road-fill"
				points="245.17 88.21 244.15 88.42 244.21 88.67 243.92 88.73 243.76 87.98 244.05 87.92 244.1 88.18 245.12 87.97 245.07 87.72 245.35 87.66 245.51 88.4 245.22 88.46 245.17 88.21"
			/>
			<polygon
				className="m road-fill"
				points="245.32 88.95 244.31 89.17 244.37 89.42 244.08 89.49 243.92 88.73 244.21 88.67 244.26 88.93 245.27 88.71 245.22 88.46 245.51 88.4 245.67 89.14 245.38 89.2 245.32 88.95"
			/>
			<polygon
				className="m road-fill"
				points="245.49 89.7 244.48 89.92 244.53 90.17 244.25 90.23 244.08 89.49 244.37 89.42 244.42 89.68 245.43 89.46 245.38 89.2 245.67 89.14 245.83 89.88 245.54 89.95 245.49 89.7"
			/>
			<polygon
				className="m road-fill"
				points="245.65 90.44 244.64 90.67 244.7 90.92 244.41 90.98 244.25 90.23 244.53 90.17 244.59 90.42 245.6 90.2 245.54 89.95 245.83 89.88 246 90.63 245.71 90.69 245.65 90.44"
			/>
			<polygon
				className="m road-fill"
				points="245.82 91.18 244.81 91.41 244.87 91.67 244.58 91.73 244.41 90.98 244.7 90.92 244.75 91.17 245.76 90.94 245.71 90.69 246 90.63 246.16 91.37 245.88 91.43 245.82 91.18"
			/>
			<polygon
				className="m road-fill"
				points="245.99 91.92 244.99 92.16 245.04 92.41 244.76 92.48 244.58 91.73 244.87 91.67 244.93 91.92 245.94 91.69 245.88 91.43 246.16 91.37 246.34 92.11 246.05 92.17 245.99 91.92"
			/>
			<polygon
				className="m road-fill"
				points="246.17 92.67 245.16 92.91 245.22 93.16 244.93 93.22 244.76 92.48 245.04 92.41 245.1 92.66 246.11 92.43 246.05 92.17 246.34 92.11 246.51 92.85 246.23 92.92 246.17 92.67"
			/>
			<polygon
				className="m road-fill"
				points="246.34 93.41 245.34 93.65 245.4 93.9 245.11 93.97 244.93 93.22 245.22 93.16 245.28 93.41 246.29 93.17 246.23 92.92 246.51 92.85 246.69 93.59 246.4 93.66 246.34 93.41"
			/>
			<polygon
				className="m road-fill"
				points="246.52 94.15 245.52 94.39 245.58 94.64 245.29 94.72 245.11 93.97 245.4 93.9 245.46 94.15 246.46 93.91 246.4 93.66 246.69 93.59 246.87 94.33 246.59 94.4 246.52 94.15"
			/>
			<polygon
				className="m road-fill"
				points="246.71 94.89 245.7 95.14 245.76 95.39 245.48 95.46 245.29 94.72 245.58 94.64 245.64 94.9 246.65 94.65 246.59 94.4 246.87 94.33 247.05 95.07 246.77 95.14 246.71 94.89"
			/>
			<polygon
				className="m road-fill"
				points="246.89 95.63 245.88 95.88 245.94 96.13 245.66 96.2 245.48 95.46 245.76 95.39 245.82 95.64 246.83 95.39 246.77 95.14 247.05 95.07 247.23 95.81 246.95 95.88 246.89 95.63"
			/>
			<polygon
				className="m road-fill"
				points="247.07 96.37 246.07 96.62 246.13 96.87 245.84 96.94 245.66 96.2 245.94 96.13 246.01 96.38 247.01 96.13 246.95 95.88 247.23 95.81 247.42 96.55 247.13 96.62 247.07 96.37"
			/>
			<polygon
				className="m road-fill"
				points="247.26 97.11 246.25 97.36 246.32 97.61 246.03 97.69 245.84 96.94 246.13 96.87 246.19 97.12 247.2 96.87 247.13 96.62 247.42 96.55 247.61 97.29 247.32 97.36 247.26 97.11"
			/>
			<polygon
				className="m road-fill"
				points="247.45 97.85 246.44 98.1 246.51 98.36 246.22 98.43 246.03 97.69 246.32 97.61 246.38 97.86 247.38 97.61 247.32 97.36 247.61 97.29 247.79 98.03 247.51 98.1 247.45 97.85"
			/>
			<polygon
				className="m road-fill"
				points="247.63 98.59 246.63 98.85 246.69 99.1 246.41 99.17 246.22 98.43 246.51 98.36 246.57 98.61 247.57 98.35 247.51 98.1 247.79 98.03 247.98 98.77 247.7 98.84 247.63 98.59"
			/>
			<polygon
				className="m road-fill"
				points="247.82 99.33 246.82 99.59 246.88 99.84 246.6 99.91 246.41 99.17 246.69 99.1 246.76 99.35 247.76 99.09 247.7 98.84 247.98 98.77 248.17 99.5 247.89 99.58 247.82 99.33"
			/>
			<polygon
				className="m road-fill"
				points="248.01 100.07 247.01 100.33 247.08 100.58 246.79 100.65 246.6 99.91 246.88 99.84 246.95 100.09 247.95 99.83 247.89 99.58 248.17 99.5 248.36 100.25 248.08 100.32 248.01 100.07"
			/>
			<polygon
				className="m road-fill"
				points="248.21 100.81 247.2 101.07 247.27 101.32 246.98 101.39 246.79 100.65 247.08 100.58 247.14 100.83 248.14 100.57 248.08 100.32 248.36 100.24 248.56 100.98 248.27 101.06 248.21 100.81"
			/>
			<polygon
				className="m road-fill"
				points="248.4 101.55 247.4 101.81 247.46 102.06 247.18 102.13 246.98 101.39 247.27 101.32 247.33 101.57 248.34 101.31 248.27 101.06 248.56 100.98 248.75 101.72 248.46 101.8 248.4 101.55"
			/>
			<path
				className="m road-fill"
				d="M248.59,102.28l-1,.27.08.25-.28.07a6.84,6.84,0,0,1-.21-.74l.28-.07.07.25,1-.26-.07-.25.29-.08a6.09,6.09,0,0,0,.21.73l-.29.07Z"
			/>
			<polygon
				className="m road-fill"
				points="248.83 103 247.83 103.28 247.91 103.53 247.63 103.61 247.39 102.87 247.67 102.8 247.76 103.04 248.75 102.77 248.67 102.52 248.96 102.45 249.19 103.16 248.91 103.24 248.83 103"
			/>
			<polygon
				className="m road-fill"
				points="249.06 103.71 248.07 104.02 248.16 104.27 247.88 104.36 247.63 103.61 247.91 103.53 248 103.78 248.99 103.48 248.91 103.24 249.19 103.16 249.42 103.87 249.14 103.95 249.06 103.71"
			/>
			<polygon
				className="m road-fill"
				points="249.3 104.43 248.32 104.75 248.4 105 248.12 105.1 247.88 104.36 248.16 104.27 248.24 104.52 249.22 104.2 249.14 103.95 249.42 103.87 249.66 104.58 249.38 104.67 249.3 104.43"
			/>
			<polygon
				className="m road-fill"
				points="249.53 105.14 248.56 105.49 248.64 105.74 248.36 105.84 248.12 105.1 248.4 105 248.48 105.25 249.46 104.91 249.38 104.67 249.66 104.58 249.89 105.29 249.61 105.39 249.53 105.14"
			/>
			<polygon
				className="m road-fill"
				points="249.77 105.86 248.8 106.23 248.88 106.47 248.61 106.58 248.36 105.84 248.64 105.74 248.72 105.99 249.69 105.63 249.61 105.39 249.89 105.29 250.12 106 249.85 106.1 249.77 105.86"
			/>
			<path
				className="m road-fill"
				d="M250,106.56l-1,.38.11.24-.28.11c-.1-.23-.21-.47-.3-.71l.27-.11c0,.09.07.17.1.25l1-.38a2.34,2.34,0,0,1-.09-.24l.27-.1c.09.23.2.46.3.69l-.27.11Z"
			/>
			<polygon
				className="m road-fill"
				points="250.35 107.25 249.39 107.65 249.5 107.89 249.23 108 248.91 107.29 249.19 107.18 249.29 107.42 250.25 107.03 250.15 106.8 250.42 106.69 250.72 107.37 250.45 107.49 250.35 107.25"
			/>
			<polygon
				className="m road-fill"
				points="250.66 107.95 249.71 108.36 249.81 108.59 249.54 108.71 249.23 108 249.5 107.89 249.6 108.13 250.56 107.72 250.45 107.49 250.72 107.37 251.03 108.06 250.76 108.18 250.66 107.95"
			/>
			<polygon
				className="m road-fill"
				points="250.96 108.64 250.02 109.06 250.12 109.3 249.85 109.42 249.54 108.71 249.81 108.59 249.92 108.83 250.86 108.41 250.76 108.18 251.03 108.06 251.33 108.75 251.06 108.87 250.96 108.64"
			/>
			<polygon
				className="m road-fill"
				points="251.27 109.33 250.33 109.77 250.43 110 250.17 110.13 249.85 109.42 250.12 109.3 250.23 109.54 251.17 109.11 251.06 108.87 251.33 108.75 251.64 109.44 251.37 109.56 251.27 109.33"
			/>
			<polygon
				className="m road-fill"
				points="251.57 110.02 250.64 110.47 250.75 110.71 250.48 110.84 250.17 110.13 250.43 110 250.54 110.24 251.47 109.8 251.37 109.56 251.64 109.44 251.94 110.13 251.68 110.26 251.57 110.02"
			/>
			<path
				className="m road-fill"
				d="M251.9,110.7l-.92.46.12.23-.26.13c-.12-.22-.25-.45-.36-.68l.27-.13a1.63,1.63,0,0,0,.11.23l.93-.45a2.4,2.4,0,0,1-.11-.23l.26-.13c.1.23.23.44.35.67l-.27.13Z"
			/>
			<polygon
				className="m road-fill"
				points="252.26 111.37 251.34 111.84 251.46 112.07 251.2 112.21 250.84 111.53 251.1 111.39 251.22 111.62 252.15 111.16 252.03 110.93 252.29 110.8 252.64 111.47 252.38 111.6 252.26 111.37"
			/>
			<polygon
				className="m road-fill"
				points="252.62 112.04 251.7 112.52 251.82 112.75 251.56 112.89 251.2 112.21 251.46 112.07 251.58 112.3 252.5 111.83 252.38 111.6 252.64 111.47 253 112.13 252.74 112.27 252.62 112.04"
			/>
			<polygon
				className="m road-fill"
				points="252.97 112.71 252.06 113.2 252.18 113.43 251.93 113.57 251.56 112.89 251.82 112.75 251.94 112.98 252.86 112.5 252.74 112.27 253 112.13 253.35 112.8 253.1 112.94 252.97 112.71"
			/>
			<polygon
				className="m road-fill"
				points="253.33 113.38 252.42 113.88 252.55 114.11 252.29 114.25 251.93 113.57 252.18 113.43 252.31 113.66 253.22 113.17 253.1 112.94 253.35 112.8 253.71 113.47 253.45 113.61 253.33 113.38"
			/>
			<polygon
				className="m road-fill"
				points="253.69 114.05 252.78 114.56 252.91 114.79 252.65 114.93 252.29 114.25 252.55 114.11 252.67 114.34 253.57 113.83 253.45 113.61 253.71 113.47 254.06 114.13 253.81 114.28 253.69 114.05"
			/>
			<path
				className="m road-fill"
				d="M254.05,114.72l-.9.52.13.22-.25.14a7.26,7.26,0,0,1-.38-.67l.26-.14.12.23.9-.52-.12-.22.26-.15a7,7,0,0,0,.36.66l-.25.15Z"
			/>
			<polygon
				className="m road-fill"
				points="254.44 115.37 253.55 115.89 253.68 116.11 253.43 116.26 253.03 115.6 253.28 115.46 253.42 115.68 254.31 115.16 254.18 114.94 254.43 114.79 254.83 115.44 254.57 115.59 254.44 115.37"
			/>
			<polygon
				className="m road-fill"
				points="254.84 116.02 253.94 116.55 254.08 116.77 253.83 116.92 253.43 116.26 253.68 116.11 253.81 116.33 254.71 115.81 254.57 115.59 254.83 115.44 255.22 116.09 254.97 116.24 254.84 116.02"
			/>
			<polygon
				className="m road-fill"
				points="255.23 116.67 254.34 117.2 254.48 117.42 254.23 117.58 253.83 116.92 254.08 116.77 254.21 116.99 255.1 116.46 254.97 116.24 255.22 116.09 255.62 116.74 255.36 116.89 255.23 116.67"
			/>
			<polygon
				className="m road-fill"
				points="255.63 117.32 254.74 117.86 254.88 118.08 254.63 118.23 254.23 117.58 254.48 117.42 254.61 117.65 255.5 117.11 255.36 116.89 255.62 116.74 256.01 117.38 255.76 117.54 255.63 117.32"
			/>
			<polygon
				className="m road-fill"
				points="256.02 117.97 255.14 118.52 255.28 118.74 255.03 118.89 254.63 118.23 254.88 118.08 255.01 118.3 255.89 117.76 255.76 117.54 256.01 117.38 256.4 118.03 256.15 118.19 256.02 117.97"
			/>
			<polygon
				className="m road-fill"
				points="256.41 118.62 255.54 119.17 255.67 119.39 255.43 119.55 255.03 118.89 255.28 118.74 255.41 118.96 256.29 118.41 256.15 118.19 256.4 118.03 256.8 118.68 256.55 118.84 256.41 118.62"
			/>
			<path
				className="m road-fill"
				d="M256.81,119.26l-.87.56.15.22-.25.16c-.15-.21-.28-.43-.41-.65l.24-.16.14.22.87-.55-.13-.22.25-.16c.12.22.26.43.4.64l-.24.16Z"
			/>
			<polygon
				className="m road-fill"
				points="257.24 119.9 256.37 120.46 256.51 120.68 256.27 120.84 255.84 120.2 256.09 120.04 256.23 120.25 257.1 119.69 256.96 119.48 257.2 119.32 257.63 119.95 257.38 120.11 257.24 119.9"
			/>
			<polygon
				className="m road-fill"
				points="257.66 120.53 256.8 121.1 256.94 121.31 256.7 121.47 256.27 120.84 256.51 120.68 256.66 120.89 257.52 120.32 257.38 120.11 257.63 119.95 258.05 120.58 257.81 120.74 257.66 120.53"
			/>
			<polygon
				className="m road-fill"
				points="258.08 121.16 257.22 121.73 257.37 121.95 257.12 122.11 256.7 121.47 256.94 121.31 257.09 121.53 257.95 120.96 257.81 120.74 258.05 120.58 258.47 121.21 258.23 121.37 258.08 121.16"
			/>
			<polygon
				className="m road-fill"
				points="258.51 121.79 257.65 122.37 257.8 122.59 257.55 122.75 257.12 122.11 257.37 121.95 257.51 122.17 258.37 121.59 258.23 121.37 258.47 121.21 258.9 121.84 258.65 122.01 258.51 121.79"
			/>
			<polygon
				className="m road-fill"
				points="258.93 122.42 258.08 123.01 258.22 123.22 257.98 123.39 257.55 122.75 257.8 122.59 257.94 122.8 258.8 122.22 258.65 122.01 258.9 121.84 259.32 122.47 259.08 122.64 258.93 122.42"
			/>
			<polygon
				className="m road-fill"
				points="259.36 123.06 258.5 123.64 258.65 123.86 258.41 124.03 257.98 123.39 258.22 123.22 258.37 123.44 259.22 122.85 259.08 122.64 259.32 122.47 259.74 123.1 259.5 123.27 259.36 123.06"
			/>
			<path
				className="m road-fill"
				d="M259.78,123.69l-.85.59.15.21-.24.17c-.15-.2-.29-.42-.43-.63l.24-.17.14.22.85-.6-.14-.21.24-.17.43.63-.24.17Z"
			/>
			<polygon
				className="m road-fill"
				points="260.23 124.31 259.38 124.9 259.53 125.11 259.29 125.28 258.84 124.66 259.08 124.49 259.24 124.7 260.08 124.11 259.93 123.9 260.17 123.73 260.62 124.34 260.38 124.51 260.23 124.31"
			/>
			<polygon
				className="m road-fill"
				points="260.68 124.92 259.83 125.52 259.98 125.73 259.74 125.9 259.29 125.28 259.53 125.11 259.69 125.32 260.53 124.72 260.38 124.51 260.62 124.34 261.06 124.96 260.83 125.13 260.68 124.92"
			/>
			<polygon
				className="m road-fill"
				points="261.12 125.54 260.28 126.14 260.43 126.35 260.19 126.53 259.74 125.9 259.98 125.73 260.14 125.94 260.98 125.34 260.83 125.13 261.06 124.96 261.51 125.58 261.27 125.75 261.12 125.54"
			/>
			<polygon
				className="m road-fill"
				points="261.57 126.16 260.73 126.76 260.88 126.97 260.64 127.15 260.19 126.53 260.43 126.35 260.58 126.56 261.42 125.96 261.27 125.75 261.51 125.58 261.96 126.19 261.72 126.36 261.57 126.16"
			/>
			<polygon
				className="m road-fill"
				points="262.01 126.77 261.18 127.38 261.33 127.59 261.1 127.77 260.64 127.15 260.88 126.97 261.04 127.18 261.87 126.57 261.72 126.36 261.96 126.19 262.4 126.81 262.17 126.98 262.01 126.77"
			/>
			<polygon
				className="m road-fill"
				points="262.46 127.39 261.63 128 261.78 128.22 261.55 128.39 261.1 127.77 261.33 127.59 261.48 127.8 262.32 127.19 262.17 126.98 262.4 126.81 262.85 127.42 262.61 127.6 262.46 127.39"
			/>
			<polygon
				className="m road-fill"
				points="262.91 128.01 262.08 128.63 262.23 128.83 262 129.01 261.55 128.39 261.78 128.22 261.93 128.43 262.76 127.81 262.61 127.6 262.85 127.42 263.3 128.04 263.06 128.21 262.91 128.01"
			/>
			<polygon
				className="m road-fill"
				points="263.37 128.61 262.54 129.24 262.7 129.44 262.46 129.62 262 129.01 262.23 128.83 262.39 129.04 263.22 128.42 263.06 128.21 263.3 128.04 263.76 128.64 263.53 128.82 263.37 128.61"
			/>
			<polygon
				className="m road-fill"
				points="263.83 129.22 263.01 129.84 263.17 130.05 262.93 130.22 262.46 129.62 262.7 129.44 262.86 129.65 263.68 129.02 263.53 128.82 263.76 128.64 264.23 129.24 263.99 129.42 263.83 129.22"
			/>
			<polygon
				className="m road-fill"
				points="264.3 129.82 263.48 130.45 263.63 130.65 263.4 130.83 262.93 130.22 263.17 130.05 263.32 130.25 264.15 129.63 263.99 129.42 264.23 129.24 264.69 129.84 264.46 130.02 264.3 129.82"
			/>
			<polygon
				className="m road-fill"
				points="264.76 130.42 263.94 131.06 264.1 131.26 263.87 131.44 263.4 130.83 263.63 130.65 263.79 130.86 264.61 130.23 264.46 130.02 264.69 129.84 265.15 130.45 264.92 130.63 264.76 130.42"
			/>
			<polygon
				className="m road-fill"
				points="265.23 131.03 264.41 131.66 264.57 131.87 264.34 132.05 263.87 131.44 264.1 131.26 264.26 131.47 265.08 130.83 264.92 130.63 265.15 130.45 265.62 131.05 265.39 131.23 265.23 131.03"
			/>
			<polygon
				className="m road-fill"
				points="265.69 131.63 264.88 132.27 265.04 132.47 264.81 132.66 264.34 132.05 264.57 131.87 264.73 132.07 265.54 131.44 265.39 131.23 265.62 131.05 266.08 131.65 265.85 131.84 265.69 131.63"
			/>
			<polygon
				className="m road-fill"
				points="266.16 132.23 265.35 132.88 265.5 133.08 265.27 133.26 264.81 132.66 265.04 132.47 265.19 132.68 266.01 132.04 265.85 131.84 266.08 131.65 266.55 132.26 266.32 132.44 266.16 132.23"
			/>
			<polygon
				className="m road-fill"
				points="266.63 132.83 265.82 133.48 265.98 133.68 265.75 133.86 265.27 133.26 265.5 133.08 265.66 133.28 266.48 132.64 266.32 132.44 266.55 132.26 267.02 132.85 266.79 133.03 266.63 132.83"
			/>
			<polygon
				className="m road-fill"
				points="267.11 133.43 266.3 134.07 266.46 134.27 266.24 134.46 265.75 133.86 265.98 133.68 266.15 133.88 266.96 133.23 266.79 133.03 267.02 132.85 267.5 133.44 267.27 133.63 267.11 133.43"
			/>
			<polygon
				className="m road-fill"
				points="267.59 134.02 266.78 134.67 266.95 134.87 266.72 135.05 266.24 134.46 266.46 134.27 266.63 134.47 267.44 133.83 267.27 133.63 267.5 133.44 267.98 134.03 267.75 134.22 267.59 134.02"
			/>
			<polygon
				className="m road-fill"
				points="268.07 134.61 267.27 135.26 267.43 135.46 267.2 135.65 266.72 135.05 266.95 134.87 267.11 135.07 267.92 134.42 267.75 134.22 267.98 134.03 268.46 134.62 268.23 134.81 268.07 134.61"
			/>
			<polygon
				className="m road-fill"
				points="268.55 135.2 267.75 135.85 267.91 136.06 267.68 136.24 267.2 135.65 267.43 135.46 267.59 135.66 268.4 135.01 268.23 134.81 268.46 134.62 268.94 135.22 268.71 135.4 268.55 135.2"
			/>
			<polygon
				className="m road-fill"
				points="269.03 135.79 268.23 136.45 268.39 136.65 268.17 136.84 267.68 136.24 267.91 136.06 268.07 136.26 268.88 135.6 268.71 135.4 268.94 135.22 269.42 135.81 269.19 135.99 269.03 135.79"
			/>
			<polygon
				className="m road-fill"
				points="269.51 136.38 268.71 137.04 268.88 137.25 268.65 137.43 268.17 136.84 268.39 136.65 268.56 136.85 269.36 136.19 269.19 135.99 269.42 135.81 269.9 136.4 269.67 136.59 269.51 136.38"
			/>
			<polygon
				className="m road-fill"
				points="269.99 136.97 269.2 137.64 269.37 137.83 269.14 138.02 268.65 137.43 268.88 137.25 269.04 137.45 269.84 136.79 269.67 136.59 269.9 136.4 270.39 136.98 270.16 137.17 269.99 136.97"
			/>
			<polygon
				className="m road-fill"
				points="270.49 137.56 269.69 138.22 269.86 138.42 269.63 138.61 269.14 138.02 269.37 137.83 269.53 138.03 270.33 137.37 270.16 137.17 270.39 136.98 270.88 137.56 270.65 137.75 270.49 137.56"
			/>
			<polygon
				className="m road-fill"
				points="270.98 138.14 270.19 138.81 270.35 139 270.13 139.19 269.63 138.61 269.86 138.42 270.03 138.62 270.82 137.95 270.65 137.75 270.88 137.56 271.37 138.15 271.15 138.34 270.98 138.14"
			/>
			<polygon
				className="m road-fill"
				points="271.47 138.72 270.68 139.39 270.85 139.59 270.62 139.78 270.13 139.19 270.35 139 270.52 139.2 271.31 138.53 271.15 138.34 271.37 138.15 271.86 138.73 271.64 138.92 271.47 138.72"
			/>
			<polygon
				className="m road-fill"
				points="271.96 139.3 271.18 139.97 271.34 140.17 271.12 140.36 270.62 139.78 270.85 139.59 271.01 139.78 271.81 139.12 271.64 138.92 271.86 138.73 272.36 139.31 272.13 139.5 271.96 139.3"
			/>
			<polygon
				className="m road-fill"
				points="272.46 139.88 271.67 140.56 271.84 140.75 271.61 140.95 271.12 140.36 271.34 140.17 271.51 140.37 272.3 139.7 272.13 139.5 272.36 139.31 272.85 139.89 272.62 140.08 272.46 139.88"
			/>
			<polygon
				className="m road-fill"
				points="272.95 140.47 272.16 141.14 272.33 141.34 272.11 141.53 271.61 140.95 271.84 140.75 272 140.95 272.79 140.28 272.62 140.08 272.85 139.89 273.34 140.47 273.12 140.66 272.95 140.47"
			/>
			<polygon
				className="m road-fill"
				points="273.44 141.05 272.66 141.72 272.83 141.92 272.61 142.11 272.11 141.53 272.33 141.34 272.5 141.54 273.28 140.86 273.12 140.66 273.34 140.47 273.84 141.05 273.61 141.24 273.44 141.05"
			/>
			<polygon
				className="m road-fill"
				points="273.95 141.62 273.17 142.3 273.34 142.49 273.12 142.69 272.61 142.11 272.83 141.92 273 142.11 273.79 141.44 273.61 141.24 273.84 141.05 274.34 141.62 274.12 141.81 273.95 141.62"
			/>
			<polygon
				className="m road-fill"
				points="274.45 142.19 273.67 142.87 273.84 143.07 273.62 143.26 273.12 142.69 273.34 142.49 273.51 142.69 274.29 142.01 274.12 141.81 274.34 141.62 274.84 142.19 274.62 142.39 274.45 142.19"
			/>
			<polygon
				className="m road-fill"
				points="274.95 142.77 274.18 143.45 274.35 143.64 274.13 143.84 273.62 143.26 273.84 143.07 274.01 143.26 274.79 142.58 274.62 142.39 274.84 142.19 275.35 142.77 275.12 142.96 274.95 142.77"
			/>
			<polygon
				className="m road-fill"
				points="275.46 143.34 274.68 144.02 274.85 144.22 274.63 144.41 274.13 143.84 274.35 143.64 274.52 143.84 275.29 143.15 275.12 142.96 275.35 142.77 275.85 143.34 275.63 143.53 275.46 143.34"
			/>
			<polygon
				className="m road-fill"
				points="275.96 143.91 275.19 144.6 275.36 144.79 275.14 144.99 274.63 144.41 274.85 144.22 275.02 144.41 275.8 143.73 275.63 143.53 275.85 143.34 276.35 143.91 276.13 144.11 275.96 143.91"
			/>
			<polygon
				className="m road-fill"
				points="276.46 144.49 275.69 145.17 275.86 145.37 275.64 145.56 275.14 144.99 275.36 144.79 275.53 144.99 276.3 144.3 276.13 144.11 276.35 143.91 276.85 144.48 276.63 144.68 276.46 144.49"
			/>
			<polygon
				className="m road-fill"
				points="276.97 145.05 276.2 145.74 276.37 145.94 276.15 146.13 275.64 145.56 275.86 145.37 276.03 145.56 276.81 144.87 276.63 144.68 276.85 144.48 277.36 145.05 277.14 145.25 276.97 145.05"
			/>
			<polygon
				className="m road-fill"
				points="277.48 145.62 276.71 146.31 276.89 146.5 276.67 146.7 276.15 146.13 276.37 145.94 276.55 146.13 277.32 145.44 277.14 145.25 277.36 145.05 277.88 145.61 277.66 145.81 277.48 145.62"
			/>
			<polygon
				className="m road-fill"
				points="278 146.18 277.23 146.88 277.4 147.07 277.18 147.27 276.67 146.7 276.89 146.5 277.06 146.69 277.83 146 277.66 145.81 277.88 145.61 278.39 146.18 278.17 146.38 278 146.18"
			/>
			<polygon
				className="m road-fill"
				points="278.51 146.75 277.74 147.44 277.92 147.64 277.7 147.83 277.18 147.27 277.4 147.07 277.58 147.26 278.34 146.57 278.17 146.38 278.39 146.18 278.9 146.74 278.68 146.94 278.51 146.75"
			/>
			<polygon
				className="m road-fill"
				points="279.02 147.31 278.26 148.01 278.43 148.2 278.21 148.4 277.7 147.83 277.92 147.64 278.09 147.83 278.86 147.13 278.68 146.94 278.9 146.74 279.41 147.31 279.19 147.5 279.02 147.31"
			/>
			<polygon
				className="m road-fill"
				points="279.53 147.88 278.77 148.58 278.94 148.77 278.73 148.97 278.21 148.4 278.43 148.2 278.6 148.4 279.37 147.7 279.19 147.5 279.41 147.31 279.92 147.87 279.71 148.07 279.53 147.88"
			/>
			<polygon
				className="m road-fill"
				points="280.05 148.44 279.29 149.14 279.46 149.33 279.25 149.53 278.73 148.97 278.94 148.77 279.12 148.96 279.88 148.26 279.71 148.07 279.92 147.87 280.44 148.43 280.22 148.63 280.05 148.44"
			/>
			<polygon
				className="m road-fill"
				points="280.57 149 279.81 149.7 279.99 149.89 279.77 150.09 279.25 149.53 279.46 149.33 279.64 149.52 280.4 148.82 280.22 148.63 280.44 148.43 280.96 148.99 280.74 149.19 280.57 149"
			/>
			<polygon
				className="m road-fill"
				points="281.09 149.56 280.33 150.26 280.51 150.45 280.29 150.65 279.77 150.09 279.99 149.89 280.16 150.08 280.92 149.38 280.74 149.19 280.96 148.99 281.48 149.54 281.26 149.75 281.09 149.56"
			/>
			<polygon
				className="m road-fill"
				points="281.61 150.11 280.85 150.82 281.03 151.01 280.81 151.21 280.29 150.65 280.51 150.45 280.68 150.64 281.44 149.93 281.26 149.75 281.48 149.54 282 150.1 281.79 150.3 281.61 150.11"
			/>
			<polygon
				className="m road-fill"
				points="282.13 150.67 281.38 151.38 281.55 151.57 281.34 151.77 280.81 151.21 281.03 151.01 281.21 151.2 281.96 150.49 281.79 150.3 282 150.1 282.52 150.66 282.31 150.86 282.13 150.67"
			/>
			<polygon
				className="m road-fill"
				points="282.65 151.23 281.9 151.94 282.07 152.13 281.86 152.33 281.34 151.77 281.55 151.57 281.73 151.76 282.48 151.05 282.31 150.86 282.52 150.66 283.04 151.22 282.83 151.42 282.65 151.23"
			/>
			<polygon
				className="m road-fill"
				points="283.18 151.78 282.42 152.49 282.6 152.68 282.39 152.88 281.86 152.33 282.07 152.13 282.25 152.31 283 151.6 282.83 151.42 283.04 151.22 283.57 151.76 283.35 151.97 283.18 151.78"
			/>
			<polygon
				className="m road-fill"
				points="283.7 152.33 282.95 153.05 283.13 153.23 282.92 153.44 282.39 152.88 282.6 152.68 282.78 152.87 283.53 152.15 283.35 151.97 283.57 151.76 284.09 152.31 283.88 152.52 283.7 152.33"
			/>
			<polygon
				className="m road-fill"
				points="284.23 152.88 283.48 153.6 283.66 153.79 283.45 153.99 282.92 153.44 283.13 153.23 283.31 153.42 284.06 152.71 283.88 152.52 284.09 152.31 284.62 152.87 284.41 153.07 284.23 152.88"
			/>
			<polygon
				className="m road-fill"
				points="284.76 153.43 284.01 154.15 284.19 154.34 283.98 154.54 283.45 153.99 283.66 153.79 283.84 153.97 284.59 153.25 284.41 153.07 284.62 152.87 285.15 153.41 284.94 153.62 284.76 153.43"
			/>
			<polygon
				className="m road-fill"
				points="285.29 153.98 284.54 154.7 284.72 154.89 284.51 155.09 283.98 154.54 284.19 154.34 284.37 154.53 285.11 153.81 284.94 153.62 285.15 153.41 285.68 153.96 285.46 154.17 285.29 153.98"
			/>
			<polygon
				className="m road-fill"
				points="285.82 154.53 285.08 155.25 285.26 155.44 285.05 155.64 284.51 155.09 284.72 154.89 284.9 155.07 285.64 154.35 285.46 154.17 285.68 153.96 286.21 154.51 286 154.71 285.82 154.53"
			/>
			<polygon
				className="m road-fill"
				points="286.35 155.07 285.61 155.8 285.79 155.98 285.58 156.19 285.05 155.64 285.26 155.44 285.44 155.62 286.18 154.9 286 154.71 286.21 154.51 286.74 155.05 286.53 155.26 286.35 155.07"
			/>
			<polygon
				className="m road-fill"
				points="286.89 155.62 286.15 156.34 286.33 156.53 286.12 156.74 285.58 156.19 285.79 155.98 285.98 156.17 286.71 155.44 286.53 155.26 286.74 155.05 287.28 155.59 287.07 155.8 286.89 155.62"
			/>
			<polygon
				className="m road-fill"
				points="287.42 156.16 286.69 156.89 286.87 157.07 286.66 157.28 286.12 156.74 286.33 156.53 286.51 156.71 287.25 155.99 287.07 155.8 287.28 155.59 287.81 156.14 287.6 156.34 287.42 156.16"
			/>
			<polygon
				className="m road-fill"
				points="287.96 156.7 287.23 157.43 287.41 157.61 287.2 157.82 286.66 157.28 286.87 157.07 287.05 157.26 287.78 156.53 287.6 156.34 287.81 156.14 288.35 156.67 288.14 156.88 287.96 156.7"
			/>
			<polygon
				className="m road-fill"
				points="288.5 157.24 287.77 157.97 287.96 158.15 287.75 158.36 287.2 157.82 287.41 157.61 287.6 157.8 288.32 157.06 288.14 156.88 288.35 156.67 288.89 157.21 288.68 157.42 288.5 157.24"
			/>
			<polygon
				className="m road-fill"
				points="289.04 157.77 288.31 158.51 288.5 158.69 288.29 158.9 287.75 158.36 287.96 158.15 288.14 158.34 288.87 157.6 288.68 157.42 288.89 157.21 289.43 157.74 289.22 157.95 289.04 157.77"
			/>
			<polygon
				className="m road-fill"
				points="289.58 158.3 288.87 159.05 289.06 159.23 288.85 159.44 288.29 158.9 288.5 158.69 288.69 158.87 289.41 158.13 289.22 157.95 289.43 157.74 289.97 158.26 289.77 158.48 289.58 158.3"
			/>
			<polygon
				className="m road-fill"
				points="290.13 158.82 289.42 159.58 289.61 159.76 289.41 159.97 288.85 159.44 289.06 159.23 289.24 159.41 289.95 158.66 289.77 158.48 289.97 158.26 290.52 158.79 290.32 159 290.13 158.82"
			/>
			<polygon
				className="m road-fill"
				points="290.69 159.34 289.98 160.1 290.18 160.28 289.98 160.49 289.41 159.97 289.61 159.76 289.8 159.93 290.51 159.18 290.32 159 290.52 158.79 291.08 159.3 290.88 159.52 290.69 159.34"
			/>
			<polygon
				className="m road-fill"
				points="291.25 159.86 290.55 160.62 290.74 160.79 290.54 161.01 289.98 160.49 290.18 160.28 290.37 160.45 291.07 159.69 290.88 159.52 291.08 159.3 291.64 159.81 291.44 160.03 291.25 159.86"
			/>
			<polygon
				className="m road-fill"
				points="291.82 160.37 291.11 161.13 291.31 161.31 291.11 161.52 290.54 161.01 290.74 160.79 290.93 160.97 291.63 160.21 291.44 160.03 291.64 159.81 292.21 160.33 292.01 160.54 291.82 160.37"
			/>
			<polygon
				className="m road-fill"
				points="292.38 160.88 291.68 161.65 291.87 161.82 291.67 162.04 291.11 161.52 291.31 161.31 291.5 161.48 292.2 160.72 292.01 160.54 292.21 160.33 292.77 160.84 292.57 161.06 292.38 160.88"
			/>
			<polygon
				className="m road-fill"
				points="292.94 161.4 292.24 162.16 292.44 162.34 292.24 162.56 291.67 162.04 291.87 161.82 292.06 162 292.76 161.23 292.57 161.06 292.77 160.84 293.33 161.36 293.13 161.57 292.94 161.4"
			/>
			<polygon
				className="m road-fill"
				points="293.51 161.91 292.81 162.68 293 162.85 292.8 163.07 292.24 162.56 292.44 162.34 292.63 162.51 293.32 161.75 293.13 161.57 293.33 161.36 293.89 161.87 293.7 162.09 293.51 161.91"
			/>
			<polygon
				className="m road-fill"
				points="294.07 162.43 293.37 163.19 293.57 163.37 293.37 163.59 292.8 163.07 293 162.85 293.19 163.03 293.89 162.26 293.7 162.09 293.89 161.87 294.46 162.38 294.26 162.6 294.07 162.43"
			/>
			<polygon
				className="m road-fill"
				points="294.63 162.94 293.94 163.71 294.13 163.88 293.93 164.1 293.37 163.59 293.57 163.37 293.76 163.54 294.45 162.78 294.26 162.6 294.46 162.38 295.02 162.9 294.82 163.12 294.63 162.94"
			/>
			<polygon
				className="m road-fill"
				points="295.2 163.46 294.5 164.23 294.7 164.4 294.5 164.62 293.93 164.1 294.13 163.88 294.32 164.06 295.01 163.29 294.82 163.12 295.02 162.9 295.58 163.41 295.39 163.63 295.2 163.46"
			/>
			<polygon
				className="m road-fill"
				points="295.76 163.97 295.07 164.74 295.26 164.92 295.06 165.14 294.5 164.62 294.7 164.4 294.89 164.57 295.58 163.8 295.39 163.63 295.58 163.41 296.15 163.93 295.95 164.14 295.76 163.97"
			/>
			<polygon
				className="m road-fill"
				points="296.33 164.48 295.64 165.25 295.83 165.42 295.64 165.64 295.06 165.14 295.26 164.92 295.45 165.09 296.14 164.32 295.95 164.14 296.15 163.93 296.72 164.43 296.52 164.65 296.33 164.48"
			/>
			<polygon
				className="m road-fill"
				points="296.9 164.98 296.22 165.75 296.41 165.93 296.22 166.15 295.64 165.64 295.83 165.42 296.03 165.59 296.72 164.82 296.52 164.65 296.72 164.43 297.29 164.93 297.1 165.15 296.9 164.98"
			/>
			<polygon
				className="m road-fill"
				points="297.48 165.48 296.79 166.26 296.99 166.43 296.79 166.65 296.22 166.15 296.41 165.93 296.61 166.1 297.29 165.32 297.1 165.15 297.29 164.93 297.87 165.43 297.67 165.65 297.48 165.48"
			/>
			<polygon
				className="m road-fill"
				points="298.05 165.99 297.37 166.76 297.56 166.93 297.37 167.15 296.79 166.65 296.99 166.43 297.18 166.6 297.87 165.82 297.67 165.65 297.87 165.43 298.44 165.94 298.25 166.16 298.05 165.99"
			/>
			<polygon
				className="m road-fill"
				points="298.63 166.49 297.94 167.27 298.14 167.44 297.94 167.66 297.37 167.15 297.56 166.93 297.76 167.1 298.44 166.33 298.25 166.16 298.44 165.94 299.01 166.44 298.82 166.66 298.63 166.49"
			/>
			<polygon
				className="m road-fill"
				points="299.2 166.99 298.52 167.77 298.71 167.94 298.52 168.16 297.94 167.66 298.14 167.44 298.33 167.61 299.01 166.83 298.82 166.66 299.01 166.44 299.59 166.94 299.39 167.16 299.2 166.99"
			/>
			<polygon
				className="m road-fill"
				points="299.77 167.49 299.09 168.27 299.29 168.44 299.1 168.67 298.52 168.16 298.71 167.94 298.91 168.11 299.59 167.33 299.39 167.16 299.59 166.94 300.16 167.44 299.97 167.66 299.77 167.49"
			/>
			<polygon
				className="m road-fill"
				points="300.35 168 299.67 168.78 299.87 168.95 299.67 169.17 299.1 168.67 299.29 168.44 299.48 168.62 300.16 167.83 299.97 167.66 300.16 167.44 300.74 167.94 300.54 168.16 300.35 168"
			/>
			<polygon
				className="m road-fill"
				points="300.92 168.5 300.25 169.28 300.44 169.45 300.25 169.67 299.67 169.17 299.87 168.95 300.06 169.12 300.74 168.34 300.54 168.16 300.74 167.94 301.31 168.44 301.12 168.67 300.92 168.5"
			/>
			<polygon
				className="m road-fill"
				points="301.5 169 300.82 169.78 301.02 169.96 300.82 170.18 300.25 169.67 300.44 169.45 300.63 169.62 301.31 168.84 301.12 168.67 301.31 168.44 301.88 168.95 301.69 169.17 301.5 169"
			/>
			<polygon
				className="m road-fill"
				points="302.07 169.5 301.4 170.28 301.6 170.45 301.41 170.67 300.82 170.18 301.02 169.96 301.21 170.13 301.88 169.34 301.69 169.17 301.88 168.95 302.46 169.44 302.27 169.66 302.07 169.5"
			/>
			<polygon
				className="m road-fill"
				points="302.66 169.99 301.99 170.78 302.18 170.94 301.99 171.17 301.41 170.67 301.6 170.45 301.8 170.62 302.47 169.83 302.27 169.66 302.46 169.44 303.05 169.93 302.86 170.16 302.66 169.99"
			/>
			<polygon
				className="m road-fill"
				points="303.24 170.48 302.57 171.27 302.77 171.44 302.58 171.66 301.99 171.17 302.18 170.94 302.38 171.11 303.05 170.32 302.86 170.16 303.05 169.93 303.63 170.42 303.44 170.65 303.24 170.48"
			/>
			<polygon
				className="m road-fill"
				points="303.82 170.97 303.15 171.76 303.35 171.93 303.16 172.15 302.58 171.66 302.77 171.44 302.97 171.6 303.64 170.81 303.44 170.65 303.63 170.42 304.21 170.91 304.02 171.14 303.82 170.97"
			/>
			<polygon
				className="m road-fill"
				points="304.41 171.46 303.74 172.25 303.94 172.42 303.75 172.65 303.16 172.15 303.35 171.93 303.55 172.1 304.22 171.31 304.02 171.14 304.21 170.91 304.8 171.41 304.61 171.63 304.41 171.46"
			/>
			<polygon
				className="m road-fill"
				points="304.99 171.96 304.32 172.75 304.52 172.91 304.33 173.14 303.75 172.65 303.94 172.42 304.14 172.59 304.8 171.8 304.61 171.63 304.8 171.41 305.38 171.9 305.19 172.12 304.99 171.96"
			/>
			<polygon
				className="m road-fill"
				points="305.57 172.45 304.91 173.24 305.11 173.41 304.92 173.63 304.33 173.14 304.52 172.91 304.72 173.08 305.39 172.29 305.19 172.12 305.38 171.9 305.96 172.39 305.77 172.61 305.57 172.45"
			/>
			<polygon
				className="m road-fill"
				points="306.16 172.94 305.5 173.73 305.69 173.9 305.5 174.13 304.92 173.63 305.11 173.41 305.31 173.57 305.97 172.78 305.77 172.61 305.96 172.39 306.54 172.88 306.36 173.1 306.16 172.94"
			/>
			<polygon
				className="m road-fill"
				points="306.74 173.43 306.08 174.23 306.28 174.39 306.09 174.62 305.5 174.13 305.69 173.9 305.89 174.07 306.55 173.27 306.36 173.1 306.54 172.88 307.13 173.37 306.94 173.6 306.74 173.43"
			/>
			<polygon
				className="m road-fill"
				points="307.33 173.92 306.67 174.72 306.86 174.88 306.68 175.11 306.09 174.62 306.28 174.39 306.48 174.56 307.14 173.76 306.94 173.6 307.13 173.37 307.71 173.86 307.52 174.09 307.33 173.92"
			/>
			<polygon
				className="m road-fill"
				points="307.91 174.41 307.25 175.21 307.45 175.37 307.27 175.6 306.68 175.11 306.86 174.88 307.06 175.05 307.72 174.25 307.52 174.09 307.71 173.86 308.3 174.35 308.11 174.57 307.91 174.41"
			/>
			<polygon
				className="m road-fill"
				points="308.5 174.89 307.85 175.69 308.05 175.85 307.86 176.08 307.27 175.6 307.45 175.37 307.65 175.53 308.31 174.74 308.11 174.57 308.3 174.35 308.89 174.83 308.7 175.05 308.5 174.89"
			/>
			<polygon
				className="m road-fill"
				points="309.1 175.37 308.44 176.17 308.64 176.34 308.45 176.56 307.86 176.08 308.05 175.85 308.25 176.02 308.9 175.22 308.7 175.05 308.89 174.83 309.48 175.31 309.3 175.54 309.1 175.37"
			/>
			<polygon
				className="m road-fill"
				points="309.69 175.85 309.03 176.66 309.23 176.82 309.05 177.05 308.45 176.56 308.64 176.34 308.84 176.5 309.5 175.7 309.3 175.54 309.48 175.31 310.07 175.79 309.89 176.02 309.69 175.85"
			/>
			<polygon
				className="m road-fill"
				points="310.28 176.34 309.63 177.14 309.83 177.3 309.64 177.53 309.05 177.05 309.23 176.82 309.43 176.98 310.09 176.18 309.89 176.02 310.07 175.79 310.67 176.27 310.48 176.5 310.28 176.34"
			/>
			<polygon
				className="m road-fill"
				points="310.87 176.82 310.22 177.62 310.42 177.78 310.23 178.01 309.64 177.53 309.83 177.3 310.03 177.47 310.68 176.66 310.48 176.5 310.67 176.27 311.26 176.75 311.07 176.98 310.87 176.82"
			/>
			<polygon
				className="m road-fill"
				points="311.46 177.3 310.81 178.1 311.01 178.27 310.83 178.5 310.23 178.01 310.42 177.78 310.62 177.95 311.27 177.14 311.07 176.98 311.26 176.75 311.85 177.23 311.66 177.46 311.46 177.3"
			/>
			<polygon
				className="m road-fill"
				points="312.06 177.78 311.4 178.59 311.61 178.75 311.42 178.98 310.83 178.5 311.01 178.27 311.21 178.43 311.86 177.63 311.66 177.46 311.85 177.23 312.44 177.72 312.25 177.94 312.06 177.78"
			/>
			<polygon
				className="m road-fill"
				points="312.65 178.26 312 179.07 312.2 179.23 312.01 179.46 311.42 178.98 311.61 178.75 311.81 178.91 312.45 178.11 312.25 177.94 312.44 177.72 313.03 178.2 312.85 178.43 312.65 178.26"
			/>
			<polygon
				className="m road-fill"
				points="313.24 178.75 312.59 179.55 312.79 179.72 312.61 179.94 312.01 179.46 312.2 179.23 312.4 179.4 313.05 178.59 312.85 178.43 313.03 178.2 313.62 178.68 313.44 178.91 313.24 178.75"
			/>
			<polygon
				className="m road-fill"
				points="313.83 179.22 313.19 180.03 313.39 180.19 313.21 180.42 312.61 179.94 312.79 179.72 312.99 179.88 313.64 179.07 313.44 178.91 313.62 178.68 314.22 179.15 314.04 179.38 313.83 179.22"
			/>
			<polygon
				className="m road-fill"
				points="314.43 179.69 313.79 180.5 313.99 180.66 313.81 180.9 313.21 180.42 313.39 180.19 313.59 180.35 314.24 179.54 314.04 179.38 314.22 179.15 314.82 179.63 314.63 179.85 314.43 179.69"
			/>
			<polygon
				className="m road-fill"
				points="315.03 180.17 314.39 180.98 314.59 181.14 314.41 181.37 313.81 180.9 313.99 180.66 314.19 180.82 314.84 180.01 314.63 179.85 314.82 179.63 315.42 180.1 315.24 180.33 315.03 180.17"
			/>
			<polygon
				className="m road-fill"
				points="315.63 180.64 314.99 181.45 315.19 181.61 315.01 181.84 314.41 181.37 314.59 181.14 314.79 181.3 315.44 180.49 315.24 180.33 315.42 180.1 316.02 180.57 315.83 180.8 315.63 180.64"
			/>
			<polygon
				className="m road-fill"
				points="316.23 181.11 315.59 181.93 315.79 182.09 315.61 182.32 315.01 181.84 315.19 181.61 315.39 181.77 316.04 180.96 315.83 180.8 316.02 180.57 316.62 181.04 316.43 181.27 316.23 181.11"
			/>
			<polygon
				className="m road-fill"
				points="316.83 181.59 316.19 182.4 316.39 182.56 316.21 182.79 315.61 182.32 315.79 182.09 316 182.25 316.63 181.43 316.43 181.27 316.62 181.04 317.21 181.51 317.03 181.75 316.83 181.59"
			/>
			<polygon
				className="m road-fill"
				points="317.43 182.06 316.79 182.87 316.99 183.03 316.81 183.26 316.21 182.79 316.39 182.56 316.6 182.72 317.24 181.91 317.03 181.75 317.21 181.51 317.81 181.99 317.63 182.22 317.43 182.06"
			/>
			<polygon
				className="m road-fill"
				points="318.03 182.53 317.39 183.35 317.59 183.51 317.41 183.74 316.81 183.26 316.99 183.03 317.19 183.19 317.83 182.38 317.63 182.22 317.81 181.99 318.41 182.46 318.23 182.69 318.03 182.53"
			/>
			<polygon
				className="m road-fill"
				points="318.63 183 317.99 183.82 318.19 183.98 318.01 184.21 317.41 183.74 317.59 183.51 317.8 183.67 318.43 182.85 318.23 182.69 318.41 182.46 319.01 182.93 318.83 183.16 318.63 183"
			/>
			<polygon
				className="m road-fill"
				points="319.23 183.48 318.59 184.29 318.79 184.45 318.61 184.69 318.01 184.21 318.19 183.98 318.4 184.14 319.03 183.32 318.83 183.16 319.01 182.93 319.61 183.4 319.43 183.63 319.23 183.48"
			/>
			<polygon
				className="m road-fill"
				points="319.83 183.94 319.19 184.76 319.4 184.92 319.22 185.15 318.61 184.69 318.79 184.45 319 184.61 319.63 183.79 319.43 183.63 319.61 183.4 320.21 183.87 320.03 184.1 319.83 183.94"
			/>
			<polygon
				className="m road-fill"
				points="320.44 184.41 319.8 185.23 320.01 185.38 319.83 185.62 319.22 185.15 319.4 184.92 319.61 185.08 320.24 184.26 320.03 184.1 320.21 183.87 320.82 184.33 320.64 184.56 320.44 184.41"
			/>
			<polygon
				className="m road-fill"
				points="321.04 184.87 320.41 185.69 320.61 185.85 320.43 186.08 319.83 185.62 320.01 185.38 320.21 185.54 320.85 184.72 320.64 184.56 320.82 184.33 321.43 184.8 321.25 185.03 321.04 184.87"
			/>
			<polygon
				className="m road-fill"
				points="321.65 185.34 321.01 186.16 321.22 186.31 321.04 186.55 320.43 186.08 320.61 185.85 320.82 186.01 321.45 185.19 321.25 185.03 321.43 184.8 322.03 185.26 321.85 185.49 321.65 185.34"
			/>
			<polygon
				className="m road-fill"
				points="322.25 185.8 321.62 186.62 321.83 186.78 321.65 187.01 321.04 186.55 321.22 186.31 321.43 186.47 322.06 185.65 321.85 185.49 322.03 185.26 322.63 185.72 322.46 185.96 322.25 185.8"
			/>
			<polygon
				className="m road-fill"
				points="322.86 186.27 322.23 187.09 322.43 187.25 322.25 187.48 321.65 187.01 321.83 186.78 322.03 186.94 322.66 186.12 322.46 185.96 322.63 185.72 323.24 186.19 323.06 186.42 322.86 186.27"
			/>
			<polygon
				className="m road-fill"
				points="323.46 186.73 322.83 187.55 323.04 187.71 322.86 187.94 322.25 187.48 322.43 187.25 322.64 187.4 323.27 186.58 323.06 186.42 323.24 186.19 323.85 186.65 323.67 186.89 323.46 186.73"
			/>
			<polygon
				className="m road-fill"
				points="324.07 187.19 323.44 188.02 323.65 188.18 323.47 188.41 322.86 187.94 323.04 187.71 323.25 187.87 323.87 187.04 323.67 186.89 323.85 186.65 324.45 187.12 324.27 187.35 324.07 187.19"
			/>
			<polygon
				className="m road-fill"
				points="324.67 187.66 324.05 188.48 324.25 188.64 324.07 188.88 323.47 188.41 323.65 188.18 323.85 188.33 324.48 187.51 324.27 187.35 324.45 187.12 325.06 187.58 324.88 187.82 324.67 187.66"
			/>
			<polygon
				className="m road-fill"
				points="325.28 188.12 324.66 188.95 324.86 189.1 324.69 189.34 324.07 188.88 324.25 188.64 324.46 188.8 325.08 187.97 324.88 187.82 325.06 187.58 325.67 188.04 325.49 188.28 325.28 188.12"
			/>
			<polygon
				className="m road-fill"
				points="325.89 188.58 325.27 189.41 325.48 189.56 325.3 189.79 324.69 189.34 324.86 189.1 325.07 189.26 325.69 188.43 325.49 188.28 325.67 188.04 326.28 188.5 326.1 188.73 325.89 188.58"
			/>
			<polygon
				className="m road-fill"
				points="326.5 189.04 325.88 189.86 326.09 190.02 325.91 190.25 325.3 189.79 325.48 189.56 325.68 189.72 326.31 188.89 326.1 188.73 326.28 188.5 326.89 188.96 326.71 189.19 326.5 189.04"
			/>
			<polygon
				className="m road-fill"
				points="327.11 189.49 326.49 190.32 326.7 190.48 326.52 190.71 325.91 190.25 326.09 190.02 326.3 190.17 326.92 189.34 326.71 189.19 326.89 188.96 327.5 189.41 327.32 189.65 327.11 189.49"
			/>
			<polygon
				className="m road-fill"
				points="327.73 189.95 327.11 190.78 327.31 190.93 327.14 191.17 326.52 190.71 326.7 190.48 326.91 190.63 327.53 189.8 327.32 189.65 327.5 189.41 328.11 189.87 327.93 190.1 327.73 189.95"
			/>
			<polygon
				className="m road-fill"
				points="328.34 190.41 327.72 191.24 327.92 191.39 327.75 191.63 327.14 191.17 327.31 190.93 327.52 191.09 328.14 190.26 327.93 190.1 328.11 189.87 328.72 190.33 328.54 190.56 328.34 190.41"
			/>
			<polygon
				className="m road-fill"
				points="328.95 190.87 328.33 191.69 328.54 191.85 328.36 192.09 327.75 191.63 327.92 191.39 328.13 191.55 328.75 190.72 328.54 190.56 328.72 190.33 329.33 190.78 329.15 191.02 328.95 190.87"
			/>
			<polygon
				className="m road-fill"
				points="329.56 191.32 328.94 192.15 329.15 192.31 328.97 192.54 328.36 192.09 328.54 191.85 328.74 192 329.36 191.17 329.15 191.02 329.33 190.78 329.94 191.24 329.76 191.48 329.56 191.32"
			/>
			<polygon
				className="m road-fill"
				points="330.17 191.78 329.55 192.61 329.76 192.77 329.59 193 328.97 192.54 329.15 192.31 329.36 192.46 329.97 191.63 329.76 191.48 329.94 191.24 330.55 191.7 330.38 191.93 330.17 191.78"
			/>
			<polygon
				className="m road-fill"
				points="330.78 192.24 330.17 193.07 330.38 193.22 330.2 193.46 329.59 193 329.76 192.77 329.97 192.92 330.58 192.09 330.38 191.93 330.55 191.7 331.17 192.15 330.99 192.39 330.78 192.24"
			/>
			<polygon
				className="m road-fill"
				points="331.4 192.69 330.78 193.52 330.99 193.67 330.82 193.91 330.2 193.46 330.38 193.22 330.58 193.37 331.2 192.54 330.99 192.39 331.17 192.15 331.78 192.6 331.61 192.84 331.4 192.69"
			/>
			<polygon
				className="m road-fill"
				points="332.01 193.14 331.4 193.97 331.61 194.12 331.44 194.36 330.82 193.91 330.99 193.67 331.2 193.82 331.81 192.99 331.61 192.84 331.78 192.6 332.4 193.05 332.22 193.29 332.01 193.14"
			/>
			<polygon
				className="m road-fill"
				points="332.63 193.59 332.02 194.42 332.23 194.57 332.05 194.81 331.44 194.36 331.61 194.12 331.82 194.28 332.43 193.44 332.22 193.29 332.4 193.05 333.01 193.5 332.84 193.74 332.63 193.59"
			/>
			<polygon
				className="m road-fill"
				points="333.25 194.04 332.63 194.87 332.84 195.03 332.67 195.26 332.05 194.81 332.23 194.57 332.44 194.73 333.05 193.89 332.84 193.74 333.01 193.5 333.63 193.95 333.45 194.19 333.25 194.04"
			/>
			<polygon
				className="m road-fill"
				points="333.86 194.49 333.25 195.32 333.46 195.48 333.29 195.72 332.67 195.26 332.84 195.03 333.05 195.18 333.66 194.34 333.45 194.19 333.63 193.95 334.24 194.4 334.07 194.64 333.86 194.49"
			/>
			<polygon
				className="m road-fill"
				points="334.48 194.94 333.87 195.78 334.08 195.93 333.9 196.17 333.29 195.72 333.46 195.48 333.67 195.63 334.28 194.79 334.07 194.64 334.24 194.4 334.86 194.85 334.69 195.09 334.48 194.94"
			/>
			<polygon
				className="m road-fill"
				points="335.09 195.39 334.49 196.23 334.69 196.38 334.52 196.62 333.9 196.17 334.08 195.93 334.29 196.08 334.89 195.25 334.69 195.09 334.86 194.85 335.48 195.31 335.3 195.54 335.09 195.39"
			/>
			<polygon
				className="m road-fill"
				points="335.71 195.84 335.1 196.68 335.31 196.83 335.14 197.07 334.52 196.62 334.69 196.38 334.9 196.53 335.51 195.7 335.3 195.54 335.48 195.31 336.09 195.76 335.92 195.99 335.71 195.84"
			/>
			<polygon
				className="m road-fill"
				points="336.33 196.29 335.72 197.13 335.93 197.28 335.76 197.52 335.14 197.07 335.31 196.83 335.52 196.98 336.13 196.15 335.92 195.99 336.09 195.76 336.71 196.2 336.54 196.44 336.33 196.29"
			/>
			<polygon
				className="m road-fill"
				points="336.95 196.74 336.34 197.57 336.55 197.72 336.38 197.96 335.76 197.52 335.93 197.28 336.14 197.43 336.75 196.59 336.54 196.44 336.71 196.2 337.33 196.65 337.16 196.88 336.95 196.74"
			/>
			<polygon
				className="m road-fill"
				points="337.57 197.18 336.96 198.02 337.17 198.17 337 198.41 336.38 197.96 336.55 197.72 336.76 197.88 337.37 197.04 337.16 196.88 337.33 196.65 337.95 197.09 337.78 197.33 337.57 197.18"
			/>
			<polygon
				className="m road-fill"
				points="338.19 197.63 337.58 198.47 337.79 198.62 337.62 198.85 337 198.41 337.17 198.17 337.38 198.32 337.99 197.48 337.78 197.33 337.95 197.09 338.57 197.54 338.4 197.78 338.19 197.63"
			/>
			<polygon
				className="m road-fill"
				points="338.81 198.07 338.2 198.91 338.42 199.06 338.24 199.3 337.62 198.85 337.79 198.62 338 198.77 338.61 197.93 338.4 197.78 338.57 197.54 339.19 197.98 339.02 198.22 338.81 198.07"
			/>
			<polygon
				className="m road-fill"
				points="339.43 198.51 338.83 199.36 339.04 199.51 338.87 199.75 338.24 199.3 338.42 199.06 338.63 199.21 339.23 198.37 339.02 198.22 339.19 197.98 339.81 198.43 339.64 198.66 339.43 198.51"
			/>
			<polygon
				className="m road-fill"
				points="340.05 198.96 339.45 199.8 339.66 199.95 339.49 200.19 338.87 199.75 339.04 199.51 339.25 199.66 339.85 198.82 339.64 198.66 339.81 198.43 340.43 198.87 340.26 199.11 340.05 198.96"
			/>
			<polygon
				className="m road-fill"
				points="340.67 199.41 340.07 200.25 340.28 200.4 340.11 200.64 339.49 200.19 339.66 199.95 339.87 200.1 340.47 199.26 340.26 199.11 340.43 198.87 341.05 199.32 340.88 199.56 340.67 199.41"
			/>
			<polygon
				className="m road-fill"
				points="341.29 199.85 340.69 200.69 340.9 200.84 340.73 201.08 340.11 200.64 340.28 200.4 340.49 200.55 341.09 199.71 340.88 199.56 341.05 199.32 341.67 199.76 341.5 200 341.29 199.85"
			/>
			<polygon
				className="m road-fill"
				points="341.91 200.29 341.31 201.13 341.52 201.28 341.36 201.52 340.73 201.08 340.9 200.84 341.11 200.99 341.71 200.15 341.5 200 341.67 199.76 342.29 200.2 342.12 200.44 341.91 200.29"
			/>
			<polygon
				className="m road-fill"
				points="342.54 200.73 341.94 201.57 342.15 201.72 341.98 201.96 341.36 201.52 341.52 201.28 341.74 201.43 342.33 200.59 342.12 200.44 342.29 200.2 342.92 200.64 342.75 200.88 342.54 200.73"
			/>
			<polygon
				className="m road-fill"
				points="343.16 201.17 342.56 202.02 342.77 202.16 342.6 202.41 341.98 201.96 342.15 201.72 342.36 201.87 342.96 201.03 342.75 200.88 342.92 200.64 343.54 201.08 343.37 201.32 343.16 201.17"
			/>
			<polygon
				className="m road-fill"
				points="343.78 201.61 343.19 202.46 343.4 202.6 343.23 202.85 342.6 202.41 342.77 202.16 342.99 202.31 343.58 201.47 343.37 201.32 343.54 201.08 344.17 201.52 344 201.76 343.78 201.61"
			/>
			<polygon
				className="m road-fill"
				points="344.41 202.05 343.81 202.9 344.02 203.05 343.85 203.29 343.23 202.85 343.4 202.6 343.61 202.75 344.21 201.91 344 201.76 344.17 201.52 344.79 201.96 344.62 202.2 344.41 202.05"
			/>
			<polygon
				className="m road-fill"
				points="345.03 202.49 344.44 203.34 344.65 203.49 344.48 203.73 343.85 203.29 344.02 203.05 344.24 203.19 344.83 202.35 344.62 202.2 344.79 201.96 345.41 202.4 345.24 202.64 345.03 202.49"
			/>
			<polygon
				className="m road-fill"
				points="345.66 202.93 345.06 203.78 345.27 203.93 345.1 204.17 344.48 203.73 344.65 203.49 344.86 203.64 345.45 202.79 345.24 202.64 345.41 202.4 346.04 202.84 345.87 203.08 345.66 202.93"
			/>
			<polygon
				className="m road-fill"
				points="346.28 203.37 345.69 204.22 345.9 204.37 345.73 204.61 345.1 204.17 345.27 203.93 345.48 204.08 346.08 203.23 345.87 203.08 346.04 202.84 346.66 203.28 346.49 203.52 346.28 203.37"
			/>
			<polygon
				className="m road-fill"
				points="346.91 203.81 346.31 204.66 346.52 204.8 346.36 205.04 345.73 204.61 345.9 204.37 346.11 204.51 346.7 203.67 346.49 203.52 346.66 203.28 347.29 203.71 347.12 203.95 346.91 203.81"
			/>
			<polygon
				className="m road-fill"
				points="347.53 204.24 346.94 205.09 347.15 205.24 346.98 205.48 346.36 205.04 346.52 204.8 346.74 204.95 347.33 204.1 347.12 203.95 347.29 203.71 347.91 204.15 347.75 204.39 347.53 204.24"
			/>
			<polygon
				className="m road-fill"
				points="348.16 204.68 347.57 205.53 347.78 205.68 347.61 205.92 346.98 205.48 347.15 205.24 347.37 205.39 347.96 204.54 347.75 204.39 347.91 204.15 348.54 204.59 348.37 204.83 348.16 204.68"
			/>
			<polygon
				className="m road-fill"
				points="348.79 205.12 348.19 205.97 348.41 206.11 348.24 206.35 347.61 205.92 347.78 205.68 347.99 205.82 348.58 204.97 348.37 204.83 348.54 204.59 349.17 205.02 349 205.26 348.79 205.12"
			/>
			<polygon
				className="m road-fill"
				points="349.41 205.55 348.82 206.4 349.03 206.55 348.87 206.79 348.24 206.35 348.41 206.11 348.62 206.26 349.21 205.41 349 205.26 349.17 205.02 349.79 205.46 349.63 205.7 349.41 205.55"
			/>
			<polygon
				className="m road-fill"
				points="350.04 205.99 349.45 206.84 349.66 206.99 349.49 207.23 348.87 206.79 349.03 206.55 349.25 206.7 349.84 205.85 349.63 205.7 349.79 205.46 350.42 205.89 350.25 206.13 350.04 205.99"
			/>
			<polygon
				className="m road-fill"
				points="350.67 206.42 350.08 207.28 350.29 207.42 350.12 207.66 349.49 207.23 349.66 206.99 349.87 207.13 350.46 206.28 350.25 206.13 350.42 205.89 351.05 206.33 350.88 206.57 350.67 206.42"
			/>
			<polygon
				className="m road-fill"
				points="351.29 206.86 350.7 207.71 350.92 207.86 350.75 208.1 350.12 207.66 350.29 207.42 350.5 207.57 351.09 206.72 350.88 206.57 351.05 206.33 351.67 206.76 351.51 207 351.29 206.86"
			/>
			<polygon
				className="m road-fill"
				points="351.92 207.29 351.34 208.14 351.55 208.29 351.38 208.53 350.75 208.1 350.92 207.86 351.13 208 351.72 207.15 351.51 207 351.67 206.76 352.3 207.2 352.14 207.44 351.92 207.29"
			/>
			<polygon
				className="m road-fill"
				points="352.55 207.72 351.96 208.58 352.18 208.72 352.01 208.97 351.38 208.53 351.55 208.29 351.76 208.44 352.35 207.59 352.14 207.44 352.3 207.2 352.93 207.63 352.76 207.87 352.55 207.72"
			/>
			<polygon
				className="m road-fill"
				points="353.18 208.16 352.59 209.01 352.81 209.16 352.64 209.4 352.01 208.97 352.18 208.72 352.39 208.87 352.98 208.02 352.76 207.87 352.93 207.63 353.56 208.06 353.39 208.3 353.18 208.16"
			/>
			<polygon
				className="m road-fill"
				points="353.81 208.59 353.22 209.44 353.44 209.59 353.27 209.83 352.64 209.4 352.81 209.16 353.02 209.3 353.61 208.45 353.39 208.3 353.56 208.06 354.19 208.5 354.02 208.74 353.81 208.59"
			/>
			<polygon
				className="m road-fill"
				points="354.44 209.02 353.85 209.88 354.06 210.02 353.9 210.26 353.27 209.83 353.44 209.59 353.65 209.74 354.24 208.88 354.02 208.74 354.19 208.5 354.82 208.93 354.65 209.17 354.44 209.02"
			/>
			<polygon
				className="m road-fill"
				points="355.07 209.46 354.48 210.31 354.69 210.46 354.53 210.7 353.9 210.27 354.06 210.02 354.28 210.17 354.86 209.32 354.65 209.17 354.82 208.93 355.45 209.36 355.28 209.6 355.07 209.46"
			/>
			<polygon
				className="m road-fill"
				points="355.7 209.89 355.11 210.74 355.33 210.89 355.16 211.13 354.53 210.7 354.69 210.46 354.91 210.6 355.49 209.75 355.28 209.6 355.45 209.36 356.08 209.79 355.91 210.03 355.7 209.89"
			/>
			<polygon
				className="m road-fill"
				points="356.33 210.32 355.74 211.18 355.96 211.32 355.79 211.56 355.16 211.13 355.32 210.89 355.54 211.04 356.12 210.18 355.91 210.03 356.08 209.79 356.71 210.22 356.54 210.47 356.33 210.32"
			/>
			<polygon
				className="m road-fill"
				points="356.96 210.75 356.37 211.61 356.59 211.75 356.42 212 355.79 211.56 355.95 211.32 356.17 211.47 356.75 210.61 356.54 210.47 356.71 210.22 357.34 210.66 357.17 210.9 356.96 210.75"
			/>
			<polygon
				className="m road-fill"
				points="357.59 211.18 357 212.04 357.22 212.18 357.05 212.43 356.42 212 356.59 211.75 356.8 211.9 357.38 211.04 357.17 210.9 357.34 210.66 357.97 211.09 357.8 211.33 357.59 211.18"
			/>
			<polygon
				className="m road-fill"
				points="358.22 211.62 357.63 212.47 357.85 212.62 357.68 212.86 357.05 212.43 357.22 212.18 357.43 212.33 358.01 211.48 357.8 211.33 357.97 211.09 358.6 211.52 358.43 211.76 358.22 211.62"
			/>
			<polygon
				className="m road-fill"
				points="358.85 212.05 358.26 212.9 358.48 213.05 358.31 213.29 357.68 212.86 357.85 212.62 358.06 212.76 358.64 211.91 358.43 211.76 358.6 211.52 359.23 211.95 359.06 212.19 358.85 212.05"
			/>
			<polygon
				className="m road-fill"
				points="359.48 212.48 358.89 213.33 359.11 213.48 358.94 213.72 358.31 213.29 358.48 213.05 358.69 213.19 359.27 212.34 359.06 212.19 359.23 211.95 359.86 212.38 359.69 212.62 359.48 212.48"
			/>
			<polygon
				className="m road-fill"
				points="360.11 212.91 359.52 213.76 359.74 213.91 359.57 214.15 358.94 213.72 359.11 213.48 359.32 213.63 359.9 212.77 359.69 212.62 359.86 212.38 360.49 212.81 360.32 213.06 360.11 212.91"
			/>
			<polygon
				className="m road-fill"
				points="360.74 213.34 360.15 214.2 360.37 214.34 360.2 214.58 359.57 214.15 359.74 213.91 359.95 214.06 360.54 213.2 360.32 213.06 360.49 212.81 361.12 213.25 360.95 213.49 360.74 213.34"
			/>
			<polygon
				className="m road-fill"
				points="361.37 213.77 360.79 214.63 361 214.77 360.83 215.02 360.2 214.58 360.37 214.34 360.58 214.49 361.17 213.63 360.95 213.49 361.12 213.25 361.75 213.68 361.58 213.92 361.37 213.77"
			/>
			<polygon
				className="m road-fill"
				points="362 214.2 361.42 215.06 361.63 215.21 361.46 215.45 360.83 215.02 361 214.77 361.21 214.92 361.8 214.06 361.58 213.92 361.75 213.68 362.38 214.11 362.21 214.35 362 214.2"
			/>
			<polygon
				className="m road-fill"
				points="362.63 214.64 362.05 215.49 362.26 215.64 362.09 215.88 361.46 215.45 361.63 215.2 361.84 215.35 362.43 214.5 362.21 214.35 362.38 214.11 363.01 214.54 362.84 214.78 362.63 214.64"
			/>
			<polygon
				className="m road-fill"
				points="363.26 215.07 362.67 215.92 362.89 216.07 362.72 216.31 362.09 215.88 362.26 215.64 362.47 215.78 363.06 214.93 362.84 214.78 363.01 214.54 363.64 214.97 363.47 215.22 363.26 215.07"
			/>
			<polygon
				className="m road-fill"
				points="363.89 215.5 363.3 216.36 363.51 216.5 363.35 216.75 362.72 216.31 362.89 216.07 363.1 216.22 363.69 215.36 363.47 215.22 363.64 214.97 364.27 215.41 364.1 215.65 363.89 215.5"
			/>
			<polygon
				className="m road-fill"
				points="364.52 215.94 363.93 216.79 364.14 216.94 363.98 217.18 363.35 216.75 363.51 216.5 363.73 216.65 364.31 215.8 364.1 215.65 364.27 215.41 364.9 215.84 364.73 216.08 364.52 215.94"
			/>
			<polygon
				className="m road-fill"
				points="365.15 216.37 364.56 217.22 364.77 217.37 364.6 217.61 363.98 217.18 364.14 216.94 364.36 217.08 364.94 216.23 364.73 216.08 364.9 215.84 365.53 216.28 365.36 216.52 365.15 216.37"
			/>
			<polygon
				className="m road-fill"
				points="365.78 216.81 365.19 217.66 365.4 217.8 365.23 218.04 364.6 217.61 364.77 217.37 364.98 217.52 365.57 216.66 365.36 216.52 365.53 216.28 366.16 216.71 365.99 216.95 365.78 216.81"
			/>
			<polygon
				className="m road-fill"
				points="366.4 217.25 365.81 218.09 366.02 218.24 365.85 218.48 365.23 218.04 365.4 217.8 365.61 217.95 366.2 217.1 365.99 216.95 366.16 216.71 366.79 217.15 366.62 217.4 366.4 217.25"
			/>
			<polygon
				className="m road-fill"
				points="367.03 217.69 366.43 218.53 366.64 218.68 366.48 218.92 365.85 218.48 366.02 218.24 366.23 218.39 366.83 217.54 366.62 217.4 366.79 217.15 367.41 217.59 367.24 217.84 367.03 217.69"
			/>
			<polygon
				className="m road-fill"
				points="367.66 218.13 367.06 218.97 367.27 219.12 367.1 219.36 366.48 218.92 366.64 218.68 366.86 218.83 367.45 217.98 367.24 217.84 367.41 217.59 368.04 218.03 367.87 218.28 367.66 218.13"
			/>
			<polygon
				className="m road-fill"
				points="368.28 218.57 367.68 219.41 367.89 219.56 367.72 219.8 367.1 219.36 367.27 219.12 367.48 219.27 368.08 218.42 367.87 218.28 368.04 218.03 368.67 218.48 368.49 218.72 368.28 218.57"
			/>
			<polygon
				className="m road-fill"
				points="368.91 219.01 368.31 219.85 368.52 220 368.35 220.24 367.72 219.8 367.89 219.56 368.11 219.71 368.7 218.87 368.49 218.72 368.67 218.48 369.29 218.92 369.12 219.16 368.91 219.01"
			/>
			<polygon
				className="m road-fill"
				points="369.53 219.45 368.93 220.29 369.14 220.44 368.97 220.69 368.35 220.24 368.52 220 368.73 220.15 369.33 219.31 369.12 219.16 369.29 218.92 369.91 219.36 369.74 219.6 369.53 219.45"
			/>
			<polygon
				className="m road-fill"
				points="370.15 219.89 369.55 220.74 369.76 220.89 369.59 221.13 368.97 220.69 369.14 220.44 369.35 220.59 369.95 219.75 369.74 219.6 369.91 219.36 370.53 219.8 370.36 220.04 370.15 219.89"
			/>
			<polygon
				className="m road-fill"
				points="370.77 220.34 370.17 221.18 370.38 221.33 370.21 221.57 369.59 221.13 369.76 220.89 369.97 221.04 370.57 220.19 370.36 220.04 370.53 219.8 371.15 220.25 370.99 220.49 370.77 220.34"
			/>
			<polygon
				className="m road-fill"
				points="371.4 220.78 370.8 221.62 371.01 221.77 370.84 222.01 370.21 221.57 370.38 221.33 370.6 221.48 371.19 220.64 370.99 220.49 371.15 220.25 371.78 220.69 371.61 220.93 371.4 220.78"
			/>
			<polygon
				className="m road-fill"
				points="372.02 221.22 371.42 222.07 371.63 222.22 371.46 222.46 370.84 222.01 371.01 221.77 371.22 221.92 371.82 221.08 371.61 220.93 371.78 220.69 372.4 221.13 372.23 221.37 372.02 221.22"
			/>
			<polygon
				className="m road-fill"
				points="372.64 221.66 372.04 222.51 372.25 222.66 372.08 222.9 371.46 222.46 371.63 222.22 371.84 222.37 372.44 221.52 372.23 221.37 372.4 221.13 373.02 221.57 372.85 221.81 372.64 221.66"
			/>
			<polygon
				className="m road-fill"
				points="373.26 222.11 372.67 222.95 372.88 223.1 372.7 223.34 372.08 222.9 372.25 222.66 372.46 222.81 373.06 221.96 372.85 221.81 373.02 221.57 373.65 222.02 373.48 222.26 373.26 222.11"
			/>
			<polygon
				className="m road-fill"
				points="373.89 222.55 373.29 223.39 373.5 223.54 373.33 223.78 372.7 223.34 372.88 223.1 373.09 223.25 373.69 222.41 373.48 222.26 373.65 222.02 374.27 222.46 374.1 222.7 373.89 222.55"
			/>
			<polygon
				className="m road-fill"
				points="374.51 222.99 373.91 223.84 374.12 223.99 373.95 224.23 373.33 223.78 373.5 223.54 373.71 223.69 374.31 222.85 374.1 222.7 374.27 222.46 374.89 222.9 374.72 223.14 374.51 222.99"
			/>
			<polygon
				className="m road-fill"
				points="375.13 223.44 374.53 224.28 374.74 224.43 374.57 224.67 373.95 224.23 374.12 223.99 374.33 224.14 374.93 223.29 374.72 223.14 374.89 222.9 375.51 223.34 375.34 223.59 375.13 223.44"
			/>
			<polygon
				className="m road-fill"
				points="375.75 223.88 375.15 224.72 375.37 224.87 375.19 225.11 374.57 224.67 374.74 224.43 374.95 224.58 375.55 223.73 375.34 223.59 375.51 223.34 376.14 223.79 375.97 224.03 375.75 223.88"
			/>
			<polygon
				className="m road-fill"
				points="376.38 224.32 375.78 225.16 375.99 225.31 375.82 225.55 375.19 225.11 375.37 224.87 375.58 225.02 376.18 224.18 375.97 224.03 376.14 223.79 376.76 224.23 376.59 224.47 376.38 224.32"
			/>
			<polygon
				className="m road-fill"
				points="377 224.76 376.4 225.61 376.61 225.76 376.44 226 375.82 225.55 375.99 225.31 376.2 225.46 376.8 224.62 376.59 224.47 376.76 224.23 377.38 224.67 377.21 224.91 377 224.76"
			/>
			<polygon
				className="m road-fill"
				points="377.62 225.21 377.02 226.05 377.23 226.2 377.06 226.44 376.44 226 376.61 225.76 376.82 225.91 377.42 225.06 377.21 224.91 377.38 224.67 378 225.12 377.83 225.35 377.62 225.21"
			/>
			<polygon
				className="m road-fill"
				points="378.25 225.65 377.65 226.49 377.86 226.64 377.69 226.88 377.06 226.44 377.23 226.2 377.44 226.35 378.04 225.5 377.83 225.35 378 225.12 378.63 225.56 378.46 225.8 378.25 225.65"
			/>
			<polygon
				className="m road-fill"
				points="378.87 226.09 378.27 226.93 378.48 227.08 378.31 227.32 377.69 226.88 377.86 226.64 378.07 226.79 378.67 225.95 378.46 225.8 378.63 225.56 379.25 226 379.08 226.24 378.87 226.09"
			/>
			<polygon
				className="m road-fill"
				points="379.49 226.53 378.89 227.38 379.1 227.53 378.93 227.77 378.31 227.32 378.48 227.08 378.69 227.23 379.29 226.39 379.08 226.24 379.25 226 379.87 226.44 379.7 226.68 379.49 226.53"
			/>
			<polygon
				className="m road-fill"
				points="380.11 226.98 379.51 227.82 379.72 227.97 379.55 228.21 378.93 227.77 379.1 227.53 379.31 227.68 379.91 226.83 379.7 226.68 379.87 226.44 380.49 226.89 380.32 227.13 380.11 226.98"
			/>
			<polygon
				className="m road-fill"
				points="380.74 227.42 380.14 228.26 380.35 228.41 380.18 228.65 379.55 228.21 379.72 227.97 379.94 228.12 380.54 227.28 380.32 227.13 380.49 226.89 381.12 227.33 380.95 227.57 380.74 227.42"
			/>
			<polygon
				className="m road-fill"
				points="381.36 227.86 380.76 228.71 380.97 228.85 380.8 229.09 380.18 228.65 380.35 228.41 380.56 228.56 381.16 227.72 380.95 227.57 381.12 227.33 381.74 227.77 381.57 228.01 381.36 227.86"
			/>
			<polygon
				className="m road-fill"
				points="381.98 228.3 381.38 229.15 381.59 229.3 381.42 229.54 380.8 229.09 380.97 228.85 381.18 229 381.78 228.16 381.57 228.01 381.74 227.77 382.36 228.21 382.19 228.45 381.98 228.3"
			/>
			<polygon
				className="m road-fill"
				points="382.6 228.75 382 229.59 382.21 229.74 382.04 229.98 381.42 229.54 381.59 229.3 381.8 229.45 382.4 228.6 382.19 228.45 382.36 228.21 382.99 228.66 382.81 228.9 382.6 228.75"
			/>
			<polygon
				className="m road-fill"
				points="383.23 229.19 382.63 230.03 382.84 230.18 382.67 230.42 382.04 229.98 382.21 229.74 382.43 229.89 383.02 229.05 382.81 228.9 382.99 228.66 383.61 229.1 383.44 229.34 383.23 229.19"
			/>
			<polygon
				className="m road-fill"
				points="383.85 229.63 383.25 230.47 383.46 230.63 383.29 230.86 382.67 230.42 382.84 230.18 383.05 230.33 383.65 229.49 383.44 229.34 383.61 229.1 384.23 229.54 384.06 229.78 383.85 229.63"
			/>
			<polygon
				className="m road-fill"
				points="384.47 230.07 383.87 230.92 384.08 231.07 383.91 231.31 383.29 230.86 383.46 230.63 383.67 230.78 384.27 229.93 384.06 229.78 384.23 229.54 384.85 229.98 384.68 230.22 384.47 230.07"
			/>
			<polygon
				className="m road-fill"
				points="385.09 230.52 384.49 231.36 384.7 231.51 384.54 231.75 383.91 231.31 384.08 231.07 384.29 231.22 384.89 230.37 384.68 230.22 384.85 229.98 385.48 230.43 385.31 230.67 385.09 230.52"
			/>
			<polygon
				className="m road-fill"
				points="385.72 230.96 385.12 231.8 385.33 231.95 385.16 232.19 384.54 231.75 384.7 231.51 384.92 231.66 385.52 230.82 385.31 230.67 385.48 230.43 386.1 230.87 385.93 231.11 385.72 230.96"
			/>
			<polygon
				className="m road-fill"
				points="386.34 231.4 385.74 232.25 385.95 232.4 385.78 232.63 385.16 232.19 385.33 231.95 385.54 232.1 386.14 231.26 385.93 231.11 386.1 230.87 386.72 231.31 386.55 231.55 386.34 231.4"
			/>
			<polygon
				className="m road-fill"
				points="386.96 231.84 386.36 232.69 386.57 232.84 386.4 233.08 385.78 232.63 385.95 232.4 386.16 232.54 386.76 231.7 386.55 231.55 386.72 231.31 387.34 231.75 387.17 231.99 386.96 231.84"
			/>
			<polygon
				className="m road-fill"
				points="387.58 232.29 386.99 233.13 387.2 233.28 387.02 233.52 386.4 233.08 386.57 232.84 386.78 232.99 387.38 232.14 387.17 231.99 387.34 231.75 387.97 232.2 387.8 232.44 387.58 232.29"
			/>
			<polygon
				className="m road-fill"
				points="388.21 232.73 387.61 233.57 387.82 233.72 387.65 233.96 387.02 233.52 387.2 233.28 387.41 233.43 388.01 232.59 387.8 232.44 387.97 232.2 388.59 232.64 388.42 232.88 388.21 232.73"
			/>
			<polygon
				className="m road-fill"
				points="388.83 233.17 388.23 234.02 388.44 234.16 388.27 234.41 387.65 233.96 387.82 233.72 388.03 233.87 388.63 233.03 388.42 232.88 388.59 232.64 389.21 233.08 389.04 233.32 388.83 233.17"
			/>
			<polygon
				className="m road-fill"
				points="389.45 233.61 388.85 234.46 389.06 234.61 388.89 234.85 388.27 234.41 388.44 234.16 388.65 234.31 389.25 233.47 389.04 233.32 389.21 233.08 389.83 233.52 389.66 233.76 389.45 233.61"
			/>
			<polygon
				className="m road-fill"
				points="390.07 234.06 389.48 234.9 389.69 235.05 389.52 235.29 388.89 234.85 389.06 234.61 389.27 234.76 389.87 233.91 389.66 233.76 389.83 233.52 390.46 233.97 390.29 234.21 390.07 234.06"
			/>
			<polygon
				className="m road-fill"
				points="390.7 234.5 390.1 235.34 390.31 235.49 390.14 235.73 389.52 235.29 389.69 235.05 389.9 235.2 390.5 234.36 390.29 234.21 390.46 233.97 391.08 234.41 390.91 234.65 390.7 234.5"
			/>
			<polygon
				className="m road-fill"
				points="391.32 234.94 390.72 235.79 390.93 235.94 390.76 236.18 390.14 235.73 390.31 235.49 390.52 235.64 391.12 234.8 390.91 234.65 391.08 234.41 391.7 234.85 391.53 235.09 391.32 234.94"
			/>
			<polygon
				className="m road-fill"
				points="391.94 235.38 391.34 236.23 391.55 236.38 391.38 236.62 390.76 236.18 390.93 235.94 391.14 236.09 391.74 235.24 391.53 235.09 391.7 234.85 392.32 235.29 392.15 235.53 391.94 235.38"
			/>
			<polygon
				className="m road-fill"
				points="392.57 235.83 391.97 236.67 392.18 236.82 392.01 237.06 391.38 236.62 391.55 236.38 391.76 236.53 392.37 235.68 392.15 235.53 392.32 235.29 392.95 235.74 392.78 235.98 392.57 235.83"
			/>
			<polygon
				className="m road-fill"
				points="393.19 236.27 392.59 237.11 392.8 237.26 392.63 237.5 392.01 237.06 392.18 236.82 392.39 236.97 392.99 236.13 392.78 235.98 392.95 235.74 393.57 236.18 393.4 236.42 393.19 236.27"
			/>
			<polygon
				className="m road-fill"
				points="393.81 236.71 393.21 237.56 393.42 237.71 393.25 237.95 392.63 237.5 392.8 237.26 393.01 237.41 393.61 236.57 393.4 236.42 393.57 236.18 394.19 236.62 394.02 236.86 393.81 236.71"
			/>
			<polygon
				className="m road-fill"
				points="394.43 237.16 393.83 238 394.04 238.15 393.87 238.39 393.25 237.95 393.42 237.71 393.63 237.86 394.23 237.01 394.02 236.86 394.19 236.62 394.81 237.06 394.64 237.31 394.43 237.16"
			/>
			<polygon
				className="m road-fill"
				points="395.06 237.6 394.46 238.44 394.67 238.59 394.5 238.83 393.87 238.39 394.04 238.15 394.25 238.3 394.86 237.46 394.64 237.31 394.81 237.06 395.44 237.51 395.27 237.75 395.06 237.6"
			/>
			<polygon
				className="m road-fill"
				points="395.68 238.04 395.08 238.88 395.29 239.03 395.12 239.27 394.5 238.83 394.67 238.59 394.88 238.74 395.48 237.9 395.27 237.75 395.44 237.51 396.06 237.95 395.89 238.19 395.68 238.04"
			/>
			<polygon
				className="m road-fill"
				points="396.3 238.48 395.7 239.33 395.91 239.48 395.74 239.72 395.12 239.27 395.29 239.03 395.5 239.18 396.1 238.34 395.89 238.19 396.06 237.95 396.68 238.39 396.51 238.63 396.3 238.48"
			/>
			<polygon
				className="m road-fill"
				points="396.92 238.93 396.32 239.77 396.54 239.92 396.36 240.16 395.74 239.72 395.91 239.48 396.12 239.63 396.72 238.78 396.51 238.63 396.68 238.39 397.31 238.84 397.13 239.07 396.92 238.93"
			/>
			<polygon
				className="m road-fill"
				points="397.55 239.37 396.95 240.21 397.16 240.36 396.99 240.6 396.36 240.16 396.54 239.92 396.75 240.07 397.35 239.22 397.13 239.07 397.31 238.84 397.93 239.28 397.76 239.52 397.55 239.37"
			/>
			<polygon
				className="m road-fill"
				points="398.17 239.81 397.57 240.65 397.78 240.8 397.61 241.04 396.99 240.6 397.16 240.36 397.37 240.51 397.97 239.67 397.76 239.52 397.93 239.28 398.55 239.72 398.38 239.96 398.17 239.81"
			/>
			<polygon
				className="m road-fill"
				points="398.79 240.25 398.19 241.1 398.4 241.25 398.23 241.49 397.61 241.04 397.78 240.8 397.99 240.95 398.59 240.11 398.38 239.96 398.55 239.72 399.17 240.16 399 240.4 398.79 240.25"
			/>
			<polygon
				className="m road-fill"
				points="399.41 240.7 398.81 241.54 399.02 241.69 398.86 241.93 398.23 241.49 398.4 241.25 398.61 241.4 399.21 240.55 399 240.4 399.17 240.16 399.8 240.61 399.63 240.84 399.41 240.7"
			/>
			<polygon
				className="m road-fill"
				points="400.04 241.14 399.44 241.98 399.65 242.13 399.48 242.37 398.86 241.93 399.02 241.69 399.24 241.84 399.84 241 399.63 240.84 399.8 240.61 400.42 241.05 400.25 241.29 400.04 241.14"
			/>
			<polygon
				className="m road-fill"
				points="400.66 241.58 400.06 242.43 400.27 242.57 400.1 242.81 399.48 242.37 399.65 242.13 399.86 242.28 400.46 241.44 400.25 241.29 400.42 241.05 401.04 241.49 400.87 241.73 400.66 241.58"
			/>
			<polygon
				className="m road-fill"
				points="401.28 242.02 400.68 242.87 400.89 243.02 400.72 243.26 400.1 242.81 400.27 242.57 400.48 242.72 401.08 241.88 400.87 241.73 401.04 241.49 401.66 241.93 401.49 242.17 401.28 242.02"
			/>
			<polygon
				className="m road-fill"
				points="401.9 242.47 401.31 243.31 401.52 243.46 401.35 243.7 400.72 243.26 400.89 243.02 401.1 243.17 401.7 242.32 401.49 242.17 401.66 241.93 402.29 242.38 402.12 242.62 401.9 242.47"
			/>
			<polygon
				className="m road-fill"
				points="402.53 242.91 401.93 243.75 402.14 243.9 401.97 244.14 401.35 243.7 401.52 243.46 401.73 243.61 402.33 242.77 402.12 242.62 402.29 242.38 402.91 242.82 402.74 243.06 402.53 242.91"
			/>
			<polygon
				className="m road-fill"
				points="403.15 243.35 402.55 244.19 402.76 244.34 402.59 244.58 401.97 244.14 402.14 243.9 402.35 244.05 402.95 243.21 402.74 243.06 402.91 242.82 403.53 243.26 403.36 243.5 403.15 243.35"
			/>
			<polygon
				className="m road-fill"
				points="403.77 243.79 403.17 244.64 403.38 244.79 403.21 245.03 402.59 244.58 402.76 244.34 402.97 244.5 403.57 243.65 403.36 243.5 403.53 243.26 404.15 243.7 403.98 243.94 403.77 243.79"
			/>
			<polygon
				className="m road-fill"
				points="404.39 244.24 403.8 245.08 404.01 245.23 403.84 245.47 403.21 245.03 403.38 244.79 403.59 244.94 404.19 244.09 403.98 243.94 404.15 243.7 404.78 244.15 404.61 244.39 404.39 244.24"
			/>
			<polygon
				className="m road-fill"
				points="405.02 244.68 404.42 245.52 404.63 245.67 404.46 245.91 403.84 245.47 404.01 245.23 404.22 245.38 404.82 244.54 404.61 244.39 404.78 244.15 405.4 244.59 405.23 244.83 405.02 244.68"
			/>
			<polygon
				className="m road-fill"
				points="405.64 245.12 405.04 245.97 405.25 246.12 405.08 246.35 404.46 245.91 404.63 245.67 404.84 245.82 405.44 244.98 405.23 244.83 405.4 244.59 406.02 245.03 405.85 245.27 405.64 245.12"
			/>
			<polygon
				className="m road-fill"
				points="406.26 245.56 405.66 246.41 405.87 246.56 405.7 246.8 405.08 246.35 405.25 246.12 405.46 246.26 406.06 245.42 405.85 245.27 406.02 245.03 406.64 245.47 406.47 245.71 406.26 245.56"
			/>
			<polygon
				className="m road-fill"
				points="406.89 246.01 406.29 246.85 406.5 247 406.33 247.24 405.7 246.8 405.87 246.56 406.08 246.71 406.69 245.86 406.47 245.71 406.64 245.47 407.27 245.92 407.1 246.16 406.89 246.01"
			/>
			<polygon
				className="m road-fill"
				points="407.51 246.45 406.91 247.29 407.12 247.44 406.95 247.68 406.33 247.24 406.5 247 406.71 247.15 407.31 246.31 407.1 246.16 407.27 245.92 407.89 246.36 407.72 246.6 407.51 246.45"
			/>
			<polygon
				className="m road-fill"
				points="408.13 246.89 407.53 247.74 407.74 247.88 407.57 248.13 406.95 247.68 407.12 247.44 407.33 247.59 407.93 246.75 407.72 246.6 407.89 246.36 408.51 246.8 408.34 247.04 408.13 246.89"
			/>
			<polygon
				className="m road-fill"
				points="408.75 247.33 408.15 248.18 408.37 248.33 408.19 248.57 407.57 248.13 407.74 247.88 407.95 248.03 408.55 247.19 408.34 247.04 408.51 246.8 409.13 247.25 408.96 247.48 408.75 247.33"
			/>
			<polygon
				className="m road-fill"
				points="409.38 247.78 408.78 248.62 408.99 248.77 408.82 249.01 408.19 248.57 408.37 248.33 408.57 248.48 409.18 247.63 408.96 247.48 409.13 247.25 409.76 247.69 409.59 247.93 409.38 247.78"
			/>
			<polygon
				className="m road-fill"
				points="410 248.22 409.4 249.06 409.61 249.21 409.44 249.45 408.82 249.01 408.99 248.77 409.2 248.92 409.8 248.08 409.59 247.93 409.76 247.69 410.38 248.13 410.21 248.37 410 248.22"
			/>
			<polygon
				className="m road-fill"
				points="410.62 248.66 410.02 249.51 410.23 249.66 410.06 249.9 409.44 249.45 409.61 249.21 409.82 249.36 410.42 248.52 410.21 248.37 410.38 248.13 411 248.57 410.83 248.81 410.62 248.66"
			/>
			<polygon
				className="m road-fill"
				points="411.24 249.1 410.64 249.95 410.86 250.1 410.69 250.34 410.06 249.9 410.23 249.66 410.44 249.81 411.04 248.96 410.83 248.81 411 248.57 411.63 249.01 411.45 249.25 411.24 249.1"
			/>
			<polygon
				className="m road-fill"
				points="411.87 249.55 411.27 250.39 411.48 250.54 411.31 250.78 410.69 250.34 410.86 250.1 411.07 250.25 411.67 249.4 411.45 249.25 411.63 249.01 412.25 249.46 412.08 249.7 411.87 249.55"
			/>
			<polygon
				className="m road-fill"
				points="412.49 249.99 411.89 250.83 412.1 250.98 411.93 251.22 411.31 250.78 411.48 250.54 411.69 250.69 412.29 249.85 412.08 249.7 412.25 249.46 412.87 249.9 412.7 250.14 412.49 249.99"
			/>
			<polygon
				className="m road-fill"
				points="413.11 250.43 412.51 251.28 412.72 251.43 412.55 251.67 411.93 251.22 412.1 250.98 412.31 251.13 412.91 250.29 412.7 250.14 412.87 249.9 413.49 250.34 413.32 250.58 413.11 250.43"
			/>
			<polygon
				className="m road-fill"
				points="413.74 250.88 413.13 251.72 413.35 251.87 413.18 252.11 412.55 251.67 412.72 251.43 412.93 251.58 413.53 250.73 413.32 250.58 413.49 250.34 414.12 250.78 413.94 251.03 413.74 250.88"
			/>
			<polygon
				className="m road-fill"
				points="414.36 251.32 413.76 252.16 413.97 252.31 413.8 252.55 413.18 252.11 413.35 251.87 413.56 252.02 414.16 251.18 413.94 251.03 414.12 250.78 414.74 251.23 414.57 251.47 414.36 251.32"
			/>
			<polygon
				className="m road-fill"
				points="414.98 251.76 414.38 252.6 414.59 252.75 414.42 252.99 413.8 252.55 413.97 252.31 414.18 252.46 414.78 251.62 414.57 251.47 414.74 251.23 415.36 251.67 415.19 251.91 414.98 251.76"
			/>
			<polygon
				className="m road-fill"
				points="415.6 252.2 415 253.05 415.21 253.2 415.04 253.44 414.42 252.99 414.59 252.75 414.8 252.9 415.4 252.06 415.19 251.91 415.36 251.67 415.98 252.11 415.81 252.35 415.6 252.2"
			/>
			<polygon
				className="m road-fill"
				points="416.23 252.65 415.63 253.49 415.84 253.64 415.67 253.88 415.04 253.44 415.21 253.2 415.42 253.35 416.02 252.5 415.81 252.35 415.98 252.11 416.61 252.56 416.44 252.79 416.23 252.65"
			/>
			<polygon
				className="m road-fill"
				points="416.85 253.09 416.25 253.93 416.46 254.08 416.29 254.32 415.67 253.88 415.84 253.64 416.05 253.79 416.65 252.94 416.44 252.79 416.61 252.56 417.23 253 417.06 253.24 416.85 253.09"
			/>
			<polygon
				className="m road-fill"
				points="417.47 253.53 416.87 254.37 417.08 254.52 416.91 254.76 416.29 254.32 416.46 254.08 416.67 254.23 417.27 253.39 417.06 253.24 417.23 253 417.85 253.44 417.68 253.68 417.47 253.53"
			/>
			<polygon
				className="m road-fill"
				points="418.09 253.97 417.49 254.82 417.7 254.97 417.53 255.21 416.91 254.76 417.08 254.52 417.29 254.67 417.89 253.83 417.68 253.68 417.85 253.44 418.47 253.88 418.3 254.12 418.09 253.97"
			/>
			<polygon
				className="m road-fill"
				points="418.72 254.42 418.12 255.26 418.33 255.41 418.16 255.65 417.53 255.21 417.7 254.97 417.92 255.12 418.51 254.27 418.3 254.12 418.47 253.88 419.1 254.33 418.93 254.57 418.72 254.42"
			/>
			<polygon
				className="m road-fill"
				points="419.34 254.86 418.74 255.7 418.95 255.85 418.78 256.09 418.16 255.65 418.33 255.41 418.54 255.56 419.14 254.72 418.93 254.57 419.1 254.33 419.72 254.77 419.55 255.01 419.34 254.86"
			/>
			<polygon
				className="m road-fill"
				points="419.96 255.3 419.36 256.14 419.57 256.3 419.4 256.53 418.78 256.09 418.95 255.85 419.16 256 419.76 255.16 419.55 255.01 419.72 254.77 420.34 255.21 420.17 255.45 419.96 255.3"
			/>
			<polygon
				className="m road-fill"
				points="420.58 255.74 419.98 256.59 420.19 256.74 420.02 256.98 419.4 256.53 419.57 256.3 419.78 256.44 420.38 255.6 420.17 255.45 420.34 255.21 420.96 255.65 420.79 255.89 420.58 255.74"
			/>
			<polygon
				className="m road-fill"
				points="421.21 256.19 420.61 257.03 420.82 257.18 420.65 257.42 420.02 256.98 420.19 256.74 420.4 256.89 421 256.04 420.79 255.89 420.96 255.65 421.59 256.1 421.42 256.34 421.21 256.19"
			/>
			<polygon
				className="m road-fill"
				points="421.83 256.63 421.23 257.47 421.44 257.62 421.27 257.86 420.65 257.42 420.82 257.18 421.03 257.33 421.63 256.49 421.42 256.34 421.59 256.1 422.21 256.54 422.04 256.78 421.83 256.63"
			/>
			<polygon
				className="m road-fill"
				points="422.45 257.07 421.85 257.92 422.06 258.06 421.89 258.31 421.27 257.86 421.44 257.62 421.65 257.77 422.25 256.93 422.04 256.78 422.21 256.54 422.83 256.98 422.66 257.22 422.45 257.07"
			/>
			<polygon
				className="m road-fill"
				points="423.07 257.51 422.47 258.36 422.69 258.51 422.51 258.75 421.89 258.31 422.06 258.06 422.27 258.21 422.87 257.37 422.66 257.22 422.83 256.98 423.45 257.42 423.29 257.66 423.07 257.51"
			/>
			<polygon
				className="m road-fill"
				points="423.7 257.96 423.1 258.8 423.31 258.95 423.14 259.19 422.51 258.75 422.69 258.51 422.9 258.66 423.5 257.81 423.29 257.66 423.45 257.42 424.08 257.87 423.91 258.11 423.7 257.96"
			/>
			<polygon
				className="m road-fill"
				points="424.32 258.4 423.72 259.24 423.93 259.39 423.76 259.63 423.14 259.19 423.31 258.95 423.52 259.1 424.12 258.26 423.91 258.11 424.08 257.87 424.7 258.31 424.53 258.55 424.32 258.4"
			/>
			<polygon
				className="m road-fill"
				points="424.94 258.84 424.34 259.69 424.55 259.83 424.38 260.07 423.76 259.63 423.93 259.39 424.14 259.54 424.74 258.7 424.53 258.55 424.7 258.31 425.32 258.75 425.15 258.99 424.94 258.84"
			/>
			<polygon
				className="m road-fill"
				points="425.56 259.28 424.96 260.13 425.18 260.28 425 260.52 424.38 260.07 424.55 259.83 424.76 259.99 425.36 259.14 425.15 258.99 425.32 258.75 425.94 259.19 425.77 259.43 425.56 259.28"
			/>
			<polygon
				className="m road-fill"
				points="426.19 259.73 425.59 260.57 425.8 260.72 425.63 260.96 425 260.52 425.18 260.28 425.39 260.43 425.99 259.58 425.77 259.43 425.94 259.19 426.57 259.64 426.4 259.88 426.19 259.73"
			/>
			<polygon
				className="m road-fill"
				points="426.81 260.17 426.21 261.01 426.42 261.16 426.25 261.4 425.63 260.96 425.8 260.72 426.01 260.87 426.61 260.03 426.4 259.88 426.57 259.64 427.19 260.08 427.02 260.32 426.81 260.17"
			/>
			<polygon
				className="m road-fill"
				points="427.43 260.61 426.83 261.46 427.04 261.61 426.87 261.85 426.25 261.4 426.42 261.16 426.63 261.31 427.23 260.47 427.02 260.32 427.19 260.08 427.81 260.52 427.64 260.76 427.43 260.61"
			/>
			<polygon
				className="m road-fill"
				points="428.06 261.05 427.45 261.9 427.67 262.05 427.5 262.29 426.87 261.85 427.04 261.61 427.25 261.75 427.85 260.91 427.64 260.76 427.81 260.52 428.44 260.96 428.27 261.2 428.06 261.05"
			/>
			<polygon
				className="m road-fill"
				points="428.68 261.5 428.08 262.34 428.29 262.49 428.12 262.73 427.5 262.29 427.67 262.05 427.88 262.2 428.48 261.35 428.27 261.2 428.44 260.96 429.06 261.41 428.89 261.65 428.68 261.5"
			/>
			<polygon
				className="m road-fill"
				points="429.3 261.94 428.7 262.78 428.91 262.93 428.74 263.17 428.12 262.73 428.29 262.49 428.5 262.64 429.1 261.8 428.89 261.65 429.06 261.41 429.68 261.85 429.51 262.09 429.3 261.94"
			/>
			<polygon
				className="m road-fill"
				points="429.92 262.38 429.32 263.23 429.53 263.38 429.36 263.62 428.74 263.17 428.91 262.93 429.12 263.08 429.72 262.24 429.51 262.09 429.68 261.85 430.3 262.29 430.13 262.53 429.92 262.38"
			/>
			<polygon
				className="m road-fill"
				points="430.55 262.82 429.94 263.67 430.16 263.82 429.99 264.06 429.36 263.62 429.53 263.38 429.74 263.53 430.34 262.68 430.13 262.53 430.3 262.29 430.93 262.74 430.76 262.98 430.55 262.82"
			/>
			<polygon
				className="m road-fill"
				points="431.17 263.27 430.57 264.11 430.78 264.26 430.61 264.5 429.99 264.06 430.16 263.82 430.37 263.97 430.97 263.12 430.76 262.98 430.93 262.74 431.55 263.18 431.38 263.42 431.17 263.27"
			/>
			<polygon
				className="m road-fill"
				points="431.79 263.71 431.19 264.55 431.4 264.7 431.23 264.94 430.61 264.5 430.78 264.26 430.99 264.41 431.59 263.57 431.38 263.42 431.55 263.18 432.17 263.62 432 263.86 431.79 263.71"
			/>
			<polygon
				className="m road-fill"
				points="432.41 264.15 431.81 265 432.02 265.15 431.85 265.39 431.23 264.94 431.4 264.7 431.61 264.85 432.21 264.01 432 263.86 432.17 263.62 432.79 264.06 432.62 264.3 432.41 264.15"
			/>
			<polygon
				className="m road-fill"
				points="433.04 264.6 432.44 265.44 432.65 265.59 432.48 265.83 431.85 265.39 432.02 265.15 432.24 265.3 432.83 264.45 432.62 264.3 432.79 264.06 433.42 264.5 433.25 264.75 433.04 264.6"
			/>
			<polygon
				className="m road-fill"
				points="433.66 265.04 433.06 265.88 433.27 266.03 433.1 266.27 432.48 265.83 432.65 265.59 432.86 265.74 433.46 264.89 433.25 264.75 433.42 264.5 434.04 264.95 433.87 265.19 433.66 265.04"
			/>
			<polygon
				className="m road-fill"
				points="434.28 265.48 433.68 266.32 433.89 266.47 433.72 266.71 433.1 266.27 433.27 266.03 433.48 266.18 434.08 265.34 433.87 265.19 434.04 264.95 434.66 265.39 434.49 265.63 434.28 265.48"
			/>
			<polygon
				className="m road-fill"
				points="434.9 265.92 434.3 266.77 434.51 266.92 434.34 267.16 433.72 266.71 433.89 266.47 434.1 266.62 434.7 265.78 434.49 265.63 434.66 265.39 435.29 265.83 435.11 266.07 434.9 265.92"
			/>
			<polygon
				className="m road-fill"
				points="435.53 266.37 434.93 267.21 435.14 267.36 434.97 267.6 434.34 267.16 434.51 266.92 434.73 267.07 435.32 266.22 435.11 266.07 435.29 265.83 435.91 266.28 435.74 266.51 435.53 266.37"
			/>
			<polygon
				className="m road-fill"
				points="436.15 266.81 435.55 267.65 435.76 267.8 435.59 268.04 434.97 267.6 435.14 267.36 435.35 267.51 435.95 266.67 435.74 266.51 435.91 266.28 436.53 266.72 436.36 266.96 436.15 266.81"
			/>
			<polygon
				className="m road-fill"
				points="436.77 267.25 436.17 268.09 436.38 268.24 436.21 268.48 435.59 268.04 435.76 267.8 435.97 267.95 436.57 267.11 436.36 266.96 436.53 266.72 437.15 267.16 436.98 267.4 436.77 267.25"
			/>
			<polygon
				className="m road-fill"
				points="437.39 267.69 436.79 268.54 437 268.69 436.83 268.93 436.21 268.48 436.38 268.24 436.59 268.39 437.19 267.55 436.98 267.4 437.15 267.16 437.77 267.6 437.61 267.84 437.39 267.69"
			/>
			<polygon
				className="m road-fill"
				points="438.02 268.14 437.42 268.98 437.63 269.13 437.46 269.37 436.83 268.93 437 268.69 437.22 268.84 437.82 267.99 437.61 267.84 437.77 267.6 438.4 268.05 438.23 268.29 438.02 268.14"
			/>
			<polygon
				className="m road-fill"
				points="438.64 268.58 438.04 269.42 438.25 269.57 438.08 269.81 437.46 269.37 437.63 269.13 437.84 269.28 438.44 268.44 438.23 268.29 438.4 268.05 439.02 268.49 438.85 268.73 438.64 268.58"
			/>
			<polygon
				className="m road-fill"
				points="439.26 269.02 438.66 269.87 438.87 270.01 438.7 270.25 438.08 269.81 438.25 269.57 438.46 269.72 439.06 268.88 438.85 268.73 439.02 268.49 439.64 268.93 439.47 269.17 439.26 269.02"
			/>
			<polygon
				className="m road-fill"
				points="439.88 269.46 439.29 270.31 439.5 270.46 439.32 270.7 438.7 270.25 438.87 270.01 439.08 270.16 439.68 269.32 439.47 269.17 439.64 268.93 440.27 269.37 440.1 269.61 439.88 269.46"
			/>
			<polygon
				className="m road-fill"
				points="440.51 269.91 439.91 270.75 440.12 270.9 439.95 271.14 439.32 270.7 439.5 270.46 439.71 270.61 440.31 269.76 440.1 269.61 440.27 269.37 440.89 269.82 440.72 270.06 440.51 269.91"
			/>
			<polygon
				className="m road-fill"
				points="441.13 270.35 440.53 271.19 440.74 271.34 440.57 271.58 439.95 271.14 440.12 270.9 440.33 271.05 440.93 270.21 440.72 270.06 440.89 269.82 441.51 270.26 441.34 270.5 441.13 270.35"
			/>
			<polygon
				className="m road-fill"
				points="441.75 270.79 441.15 271.63 441.36 271.79 441.19 272.02 440.57 271.58 440.74 271.34 440.95 271.49 441.55 270.65 441.34 270.5 441.51 270.26 442.13 270.7 441.96 270.94 441.75 270.79"
			/>
			<polygon
				className="m road-fill"
				points="442.38 271.23 441.77 272.08 441.99 272.23 441.81 272.47 441.19 272.02 441.36 271.79 441.57 271.94 442.17 271.09 441.96 270.94 442.13 270.7 442.76 271.14 442.59 271.38 442.38 271.23"
			/>
			<polygon
				className="m road-fill"
				points="443 271.68 442.4 272.52 442.61 272.67 442.44 272.91 441.82 272.47 441.99 272.23 442.2 272.38 442.8 271.53 442.59 271.38 442.76 271.14 443.38 271.59 443.21 271.83 443 271.68"
			/>
			<polygon
				className="m road-fill"
				points="443.62 272.12 443.02 272.96 443.23 273.11 443.06 273.35 442.44 272.91 442.61 272.67 442.82 272.82 443.42 271.98 443.21 271.83 443.38 271.59 444 272.03 443.83 272.27 443.62 272.12"
			/>
			<polygon
				className="m road-fill"
				points="444.24 272.56 443.64 273.41 443.85 273.56 443.68 273.8 443.06 273.35 443.23 273.11 443.44 273.26 444.04 272.42 443.83 272.27 444 272.03 444.62 272.47 444.45 272.71 444.24 272.56"
			/>
			<polygon
				className="m road-fill"
				points="444.87 273 444.27 273.85 444.48 274 444.31 274.24 443.68 273.8 443.85 273.56 444.06 273.7 444.66 272.86 444.45 272.71 444.62 272.47 445.25 272.91 445.08 273.15 444.87 273"
			/>
			<polygon
				className="m road-fill"
				points="445.49 273.45 444.89 274.29 445.1 274.44 444.93 274.68 444.31 274.24 444.48 274 444.69 274.15 445.29 273.3 445.08 273.15 445.25 272.91 445.87 273.36 445.7 273.6 445.49 273.45"
			/>
			<polygon
				className="m road-fill"
				points="446.11 273.89 445.51 274.73 445.72 274.88 445.55 275.12 444.93 274.68 445.1 274.44 445.31 274.59 445.91 273.75 445.7 273.6 445.87 273.36 446.49 273.8 446.32 274.04 446.11 273.89"
			/>
			<polygon
				className="m road-fill"
				points="446.73 274.33 446.13 275.18 446.34 275.33 446.17 275.56 445.55 275.12 445.72 274.88 445.93 275.03 446.53 274.19 446.32 274.04 446.49 273.8 447.12 274.24 446.94 274.48 446.73 274.33"
			/>
			<polygon
				className="m road-fill"
				points="447.36 274.77 446.76 275.62 446.97 275.77 446.8 276.01 446.17 275.56 446.34 275.33 446.56 275.48 447.15 274.63 446.94 274.48 447.12 274.24 447.74 274.69 447.57 274.92 447.36 274.77"
			/>
			<polygon
				className="m road-fill"
				points="447.98 275.22 447.38 276.06 447.59 276.21 447.42 276.45 446.8 276.01 446.97 275.77 447.18 275.92 447.78 275.07 447.57 274.92 447.74 274.69 448.36 275.13 448.19 275.37 447.98 275.22"
			/>
			<polygon
				className="m road-fill"
				points="448.6 275.66 448 276.5 448.21 276.65 448.04 276.89 447.42 276.45 447.59 276.21 447.8 276.36 448.4 275.52 448.19 275.37 448.36 275.13 448.98 275.57 448.81 275.81 448.6 275.66"
			/>
			<polygon
				className="m road-fill"
				points="449.22 276.1 448.62 276.95 448.83 277.1 448.66 277.34 448.04 276.89 448.21 276.65 448.42 276.8 449.02 275.96 448.81 275.81 448.98 275.57 449.61 276.01 449.44 276.25 449.22 276.1"
			/>
			<polygon
				className="m road-fill"
				points="449.85 276.55 449.25 277.39 449.46 277.54 449.29 277.78 448.66 277.34 448.83 277.1 449.05 277.25 449.64 276.4 449.44 276.25 449.61 276.01 450.23 276.45 450.06 276.69 449.85 276.55"
			/>
			<polygon
				className="m road-fill"
				points="450.47 276.99 449.87 277.83 450.08 277.98 449.91 278.22 449.29 277.78 449.46 277.54 449.67 277.69 450.27 276.84 450.06 276.69 450.23 276.45 450.85 276.9 450.68 277.14 450.47 276.99"
			/>
			<polygon
				className="m road-fill"
				points="451.09 277.43 450.49 278.27 450.7 278.42 450.53 278.66 449.91 278.22 450.08 277.98 450.29 278.13 450.89 277.29 450.68 277.14 450.85 276.9 451.47 277.34 451.3 277.58 451.09 277.43"
			/>
			<g id="DeadZone_Terrain" data-name="DeadZone&amp;Terrain">
				<path
					className="n border-stroke no-fill"
					d="M129.7,77.92S171.92,46.4,239.07,67c0,0,51.64,12.37,93.69,37.76s80,48,105.89,98.77,5.86,103.19,2.83,110.51c-3.7,9-14.16,53.12-78.87,93.87S235.37,452.11,187,449.76s-88.46-55.89-88.46-55.89-12.82-22.08-17-46.3C75.34,311.52,62.79,238,61.94,216.8c-.66-16.32-2.42-44.93,15.4-79.65C97.89,97.12,129.7,77.92,129.7,77.92Z"
				/>
			</g>
		</SVGOverlay>
	),
	duga: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .b,.j{strokeMiterlimit:10;}
            .b{strokeWidth:0.96px;}
            .j{strokeWidth:0.36px;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b no-fill border-stroke"
				d="M41.8,217.8s-18.23-19.65-22.26-41.91c0,0-18.22-79.78,70.56-87.83H404s67.12,5,81,72.09V352.63S477.9,420.1,402.61,434c0,0-50.22,8.39-102.78,0-53.27-8.49-86.6-36.1-125.57-74.93l-50.78-54.33Z"
			/>
			<path
				className="c field-fill"
				d="M54.82,211.88S48.67,200.52,39,196.73s-7.58-15.15-14.68-14.44c0,0-32-78.84,66.29-92.81l311.8.23s67.24,1.19,81.68,73.16V348s-.47,34.57-31.49,61.32c0,0-35-4.94-44.6,0h-6.39l-4.79,3.87s-18.11-2.13-17.58,5.33c0,0-12.79,3.2-13.32,0l-2.1,2.64s-9.47-.71-7.69,3.91c0,0-9.23-1.07-14.21,0,0,0-36.22,8.87-47.94,0,0,0-19.53-9.24-24.5-22.38,0,0-7.11-18.11-20.24-19.53,0,0-9.95-6.39-11.37-5.33,0,0-12.43-3.9-12.78-5s-17.4-5.68-18.47-13.49c0,0-8.88-12.79-13.85-13.85,0,0-3.91-4.44-3.91-5.33s-7.28-8-8.7-7.81l-9.23-8.7s-7.64-5.69-10.12-5.51a14,14,0,0,1-12.25-9.05c-3.73-9.06-5.69-7.28-8.53-7.82s-6.21-7.28-5.86-8.7c0,0-1.59-6.57-3.9-6.57,0,0-3.73-3.55-3.55-6.74,0,0-.71-2.85-2.14-2.85s-2.48-5.32-2.3-5.86-1.42-3-1.42-3-2.67-2.31-2.13-4.71l-13-14.83s-3.73-8-19.88-11.89C85.84,236.15,55.24,222.59,54.82,211.88Z"
			/>
			<path
				className="d road-fill"
				d="M38.83,195.88S53.7,176,71.81,176s45.85,1.82,70.88,10.34c0,0,20.78,2.66,26.11,13.31l37.28,38.89s12.79,11.19,16,11.72,12.79,5.86,13.32,10.12c0,0,6.92,6.92,10.65,5.33,0,0,4.8,7.45,1.6,12.78a34.13,34.13,0,0,1-8.52,9.06S229,296,235.38,305.61,247.63,312,245,318.92l-6.39,6.39a13.5,13.5,0,0,1-6.4,2.14c-3.19,0-9.8,3.16-8.73,11.68l-33.74,33.56,2.84,3.2,32.85-33.2h9.94l38.89,41.72s7.28,8,15.09,7.11l.36-4.44s-5.86.35-9.77-3.38-5.32-5.15-5.32-5.15l4.26.54a42.27,42.27,0,0,0,16.33-.71c9.59-2.13,47.41-1.6,47.41-1.6s8.7.53,11.72-2.31c0,0-3.73,13.49-7.63,13.32v4.79l4.08-1.77s1.42.35,4.26-7.46l6.75-15.45,17.76-16s3.73-3,12.07-5.51c0,0,9.77-2,13.5-8.87l12.07-12.08s4.26-2.84,3.91-14.38,0-30.36,0-30.36,1.59-19,1.95-20.6-.36-4.62.53-8.35c0,0,.54-21.3-6.39-25.92l7.1-10.83s.89-3,4.26-.54,19.54,17.05,19.54,17.05a20.36,20.36,0,0,1,4.26,12.79c0,8,.71,17,.71,17v3.73l3.73-.18-.71-23.26s1.42-8.7-14.56-21.84c0,0-8.88-8.34-14-9.94l2.84-17.76s.18-2.13,4.26-5.68l7.64-8.52s3.37-7.64-1.6-11.9-26.46-27.17-26.46-27.17a8.41,8.41,0,0,0-11.72-.53c-6.57,5.15-27,25.39-27,25.39s-4.61,5.33-11.36-.71c0,0-1.24-3.2-10.3-3.37H337.44s-11.36-4.09-11.18-14l-.18-14.38s.71-8.17-8.52-8H301s-8,0-8,7.81v27.88l-16.51-.36s-6-3.73-7.28-6.75l-9.41-10.12s-10.48-10.12-23.44.89l2,3.2s9.59-8.35,16.16-3c0,0,10.12,8,11.72,11.54s2.49,5.15-.71,8.35l-4.62,4.79-21.48-20.6-.8.8,20.86,20.87-55.75,56.82s-1.24,1.59-5.33-3.38l-16.16-16.16-2.48-.17-.36-2.31-2.48-.89-10.84-11s-5.85-6.75-14.2-6.75l-21.49-5s-47.94-9.23-59.83-6.57c0,0-16.52,1.6-27.17,12.79L30.26,199.39l2.48,3.55Z"
			/>
			<path
				className="c field-fill"
				d="M204.8,230.47l62.86-64.64s2.13-4.61,11.37-3.55c0,0,1.89-.12-4,10.54,0,0-7.57,11.83-5.44,22.49,0,0,15.39,18.46,27.7,27.22,0,0,22.49,16.81,24.38,19.89l-5.92,5.45s-.23,4.26-11.12-7.82l-14.68-14.67s-5.45-5.45-10.66,1.18l-14-13.26s-3.07-3.79-6.86-1l-14.68,14.21s-3.08,5.44,3.08,10.65c0,0,1.42-.23,1.18-2.84,0,0-5.68-3.08-.47-7.81l12.78-12.79s2.61-1.18,3.55-.23l13.26,14.68-26.51,27s-3.56,3.55-3.56,6.39l-4.49-.24s-5-2.6-5-4c0,0-7.34-9.24-11.83-9.24,0,0-8-3.78-10.42-6.63Z"
			/>
			<path
				className="c field-fill"
				d="M255,256.83s-7.85,7.14-3.21,13.92c0,0,3.21,8.21-2.86,12.49l-10,9.28s-5.35,10,6.43,17.49c0,0,6.06,5,12.49-4.29l51-51.74s4.28-3.93-2.5-7.85l-18.2-18.2s-2.14-3.57-6.07,1.07Z"
			/>
			<path
				className="c field-fill"
				d="M261.62,306.82l7.82,7.81,2.84-2.13-7.81-8.17,14.2-14.56s2.49-2.48,5,.71S302.46,310,302.46,310s3.2,2.13.71,4.62l-22,22a6.13,6.13,0,0,1-7.82,0l-18.11-18.11s-3.19-1.78.71-5.68Z"
			/>
			<path
				className="c field-fill"
				d="M336.84,276.58a3.73,3.73,0,0,1-.28,5.26l-26.29,24.82a3.73,3.73,0,0,1-5.27,0l-18.77-19.88a3.72,3.72,0,0,1,.29-5.26l26.28-24.82a3.73,3.73,0,0,1,5.27,0Z"
			/>
			<path
				className="c field-fill"
				d="M238.19,330.26v10.65l29.12,28.77s6,8.52,27.7,4.61c0,0,40.84-3.19,46.16-1.77s10.3,1.06,16-5.69l19.54-18.11s8.87-5.32,14.91-6.74c0,0,5.68-1.78,12.43-8.53s10.3-11,10.3-11,3.55-1.06,2.84-13.49c0,0,0-41.2,1.07-42.62s2.13-33-1.78-35.15c0,0-36.58,1.42-43.33-8.17s-10.65.71-13.14-18.82-1.42-6.4-1.42-6.4S356.09,190,343,187.14l-18.11-4.26s-7.11-1.78-9.24.71-5.32-1.78-5.32-1.78-3.91-4.26-5.69-1.06l-5,7.1,25.57,26.28,1.78,1.42a20.28,20.28,0,0,0,2.13,3.2c1.42,1.77,10.65,10.29-3.2,23.43l37.29,44.4s6,5.32.36,11.36c0,0-6.75,8.17-13.5,8.17s-11.36-1.78-17.4-7.1l-3.91-4.62-44.39,44.74s-6,6-14.2.36l-16-16.34s-3.91-4.26-8.17-1.06Z"
			/>
			<path
				className="c field-fill"
				d="M317,250l6.4-5.68,38.71,44.74s5.32,3.55-2.85,10.3c0,0-8.52,8.52-18.82,2.13l-9.59-8.88,8.17-8.17s6.75-6-1.77-13.85Z"
			/>
			<path
				className="c field-fill"
				d="M273.7,180.39s-5,11.37.35,17.05l20.25,19.89s7.81,5,9.58,7.1l19.54,16.33s15.62-9.23,2.84-21.66c0,0-31.61-35.16-35.52-35.51,0,0-6-7.1-9.94-3.2A18.25,18.25,0,0,1,273.7,180.39Z"
			/>
			<path
				className="c field-fill"
				d="M282.58,162.64l-6.75,13.85s-2.13,4.61,4.26,1.06c0,0,7.81-.71,8.52,1.07s9.24,7.81,9.24,7.81l5.32-7.81s4.27-3.55,7.46.35,4.26,3.2,5.33,1.78,8.52-.36,8.52-.36l26.64,6.75s9.23,3.91,11,13.85.71,12.07,5.32,15.27c0,0,13.5,11.72,28.77,12.07l18.11.36s-1.78-5.68-5.68-6c0,0-12.08-10.3-18.47-21l-19.89-28.41s-7.81-11.72-19.17-9.94Z"
			/>
			<circle className="c field-fill" cx="231.08" cy="334.87" r="3.2" />
			<path
				className="c field-fill"
				d="M297.14,136v-5s1.06-3.55,3.55-3.55H318.8s3.2-.36,3.2,2.13V136Z"
			/>
			<rect
				className="c field-fill"
				x="297.31"
				y="139.37"
				width="24.86"
				height="5.86"
			/>
			<path
				className="c field-fill"
				d="M297.31,148.79h25.4l.17,3.37a27.81,27.81,0,0,0,3.91,4.62c1.6,1.24-.71,2.48-1.78,2.66s-27.7,0-27.7,0Z"
			/>
			<path
				className="c field-fill"
				d="M413.09,161.93l8.08-8.08s1.5-1.51,3.1.44l13.32,14s2.13,1.77,1.6,7.46l-7.64,7.28-19.17-17.94S410.78,163.35,413.09,161.93Z"
			/>
			<path
				className="c field-fill"
				d="M428.71,186.07,409,166.9s-3.19-3,.18-6.93l10.3-10.3-8.88-9.41s-2.49-1.95-5.5,1.07l-26.64,25.21s-4.08,5.86-1.24,9.41,10.65,16.34,10.65,16.34,12.61,17.76,14,18.29A95.58,95.58,0,0,0,414,221.76s1.42,1.6,2.14-.88c0,0,12.6-18.65,9.94-28.06C426.05,192.82,426.05,188.38,428.71,186.07Z"
			/>
			<rect
				className="h building-fill"
				x="72.1"
				y="135.41"
				width="5.68"
				height="5.45"
			/>
			<rect
				className="h building-fill"
				x="116.14"
				y="154.28"
				width="2.79"
				height="2.68"
			/>
			<rect
				className="h building-fill"
				x="108.94"
				y="195.74"
				width="2.79"
				height="2.68"
			/>
			<polygon
				className="h building-fill"
				points="90.39 188.52 89.8 188.52 89.8 188.33 88.65 188.33 88.65 187.79 87.05 187.79 87.05 190.31 88.2 190.31 88.2 191.1 89.8 191.1 89.8 189.32 90.39 189.32 90.39 188.52"
			/>
			<rect
				className="h building-fill"
				x="110.34"
				y="158.52"
				width="4.02"
				height="5.45"
			/>
			<rect
				className="h building-fill"
				x="73.52"
				y="160.86"
				width="1.42"
				height="4.93"
			/>
			<rect
				className="h building-fill"
				x="79.11"
				y="175.75"
				width="1.42"
				height="4.93"
			/>
			<rect
				className="h building-fill"
				x="82.67"
				y="175.75"
				width="0.89"
				height="4.26"
			/>
			<rect
				className="h building-fill"
				x="79.11"
				y="160.86"
				width="1.42"
				height="4.26"
			/>
			<rect
				className="h building-fill"
				x="72.1"
				y="146.77"
				width="8.29"
				height="7.58"
			/>
			<rect
				className="h building-fill"
				x="287.31"
				y="152.69"
				width="2.49"
				height="2.72"
			/>
			<rect
				className="h building-fill"
				x="343.72"
				y="169.6"
				width="6.45"
				height="10.39"
			/>
			<rect
				className="h building-fill"
				x="394.86"
				y="172.68"
				width="4.79"
				height="3.06"
			/>
			<rect
				className="h building-fill"
				x="401.64"
				y="172.68"
				width="4.79"
				height="3.06"
			/>
			<rect
				className="h building-fill"
				x="407.32"
				y="195.44"
				width="2.3"
				height="1.8"
			/>
			<rect
				className="h building-fill"
				x="415.66"
				y="185.95"
				width="3.25"
				height="4.17"
			/>
			<rect
				className="h building-fill"
				x="415.66"
				y="191.86"
				width="3.25"
				height="4.17"
			/>
			<rect
				className="h building-fill"
				x="355.97"
				y="153.39"
				width="6.45"
				height="4.24"
			/>
			<rect
				className="h building-fill"
				x="439.07"
				y="247.9"
				width="6.45"
				height="4.18"
			/>
			<rect
				className="h building-fill"
				x="445.34"
				y="291.94"
				width="7.39"
				height="11.99"
			/>
			<rect
				className="h building-fill"
				x="439.19"
				y="309.98"
				width="11.89"
				height="6.03"
			/>
			<rect
				className="h building-fill"
				x="454.34"
				y="321.77"
				width="4.55"
				height="4.18"
			/>
			<rect
				className="h building-fill"
				x="439.4"
				y="269.85"
				width="3.84"
				height="3.62"
			/>
			<rect
				className="h building-fill"
				x="393.11"
				y="232.8"
				width="2.39"
				height="2.64"
			/>
			<rect
				className="h building-fill"
				x="410.06"
				y="141.72"
				width="2.96"
				height="3.37"
				transform="translate(-6.95 265.04) rotate(-35.42)"
			/>
			<rect
				className="h building-fill"
				x="419.58"
				y="158.79"
				width="10.68"
				height="17.36"
				transform="translate(7.49 352.83) rotate(-45.45)"
			/>
			<rect
				className="h building-fill"
				x="436.24"
				y="147.36"
				width="5.91"
				height="17.36"
				transform="translate(19.89 359.56) rotate(-45.45)"
			/>
			<rect
				className="h building-fill"
				x="401.47"
				y="186.45"
				width="4.48"
				height="2.81"
				transform="translate(-13.36 343.83) rotate(-45.46)"
			/>
			<rect
				className="h building-fill"
				x="389.47"
				y="239.48"
				width="1.95"
				height="3.47"
			/>
			<polygon
				className="h building-fill"
				points="440.9 292.65 434.45 292.65 434.45 295.25 434.45 302.27 434.45 304.88 437.35 304.88 437.35 302.27 440.9 302.27 440.9 292.65"
			/>
			<rect
				className="h building-fill"
				x="441.73"
				y="238.32"
				width="3.96"
				height="7.2"
			/>
			<polygon
				className="h building-fill"
				points="288.97 128.07 288.97 135.17 290.63 135.17 290.63 128.07 287.9 128.07 287.9 128.07 288.97 128.07"
			/>
			<polygon
				className="h building-fill"
				points="288.97 128.07 287.9 128.07 287.9 128.07 287.9 124.75 281.99 124.75 281.99 145.12 284.83 145.12 284.83 145.94 288.97 145.94 288.97 143.22 290.63 143.22 290.63 138.25 288.97 138.25 288.97 135.17 288.97 128.07"
			/>
			<rect
				className="h building-fill"
				x="56.72"
				y="163.58"
				width="8.05"
				height="7.81"
			/>
			<polygon
				className="h building-fill"
				points="263.1 297.14 270.29 290.68 267.48 287.55 268.5 286.71 266.38 284.11 265.24 285.05 263.24 282.82 256.66 288.73 255.19 287.08 248.52 293.07 250 294.71 248.56 296 250.45 298.11 248.9 299.37 250.61 301.48 252.27 300.13 254.37 302.47 256.3 300.74 257.45 302.02 260.29 299.47 257.66 296.55 260.38 294.11 263.1 297.14"
			/>
			<polygon
				className="h building-fill"
				points="259.26 278.31 259.07 278.48 257.68 276.93 255.08 279.27 256.47 280.82 254.29 282.78 257.5 286.36 262.48 281.89 259.26 278.31"
			/>
			<rect
				className="h building-fill"
				x="183.47"
				y="237.9"
				width="8.96"
				height="19.15"
				transform="translate(-117.24 188.9) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="173.15"
				y="248.19"
				width="2.73"
				height="5"
				transform="translate(-122.82 180.74) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="268.55"
				y="278.26"
				width="2.73"
				height="5"
				transform="translate(-118.5 252.18) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="239.5"
				y="328.68"
				width="3.97"
				height="1.81"
				transform="translate(-158.39 245.68) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="272.46"
				y="282.16"
				width="2.73"
				height="5"
				transform="translate(-120.11 255.78) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="275"
				y="280.18"
				width="2.28"
				height="5"
				transform="translate(-118.19 256.83) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="272.26"
				y="274.21"
				width="2.28"
				height="5"
				transform="translate(-8.19 545.08) rotate(-88.97)"
			/>
			<rect
				className="h building-fill"
				x="276.71"
				y="278.07"
				width="5"
				height="2.28"
				transform="translate(-113.41 237.16) rotate(-38.89)"
			/>
			<rect
				className="h building-fill"
				x="176.23"
				y="245.11"
				width="2.73"
				height="5"
				transform="translate(-119.98 182.01) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="305.84"
				y="262.89"
				width="2.73"
				height="5"
				transform="translate(-98.69 273.16) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="325.02"
				y="279.94"
				width="2.73"
				height="5"
				transform="translate(-105.17 290.33) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="316.73"
				y="259.1"
				width="2.73"
				height="5"
				transform="translate(-93.37 279.46) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="320.76"
				y="263.6"
				width="2.73"
				height="5"
				transform="translate(-95.34 283.31) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="313.18"
				y="264.31"
				width="2.73"
				height="5"
				transform="translate(-97.76 278.42) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="223.89"
				y="179.02"
				width="7.07"
				height="2.31"
				transform="translate(-61.93 201.61) rotate(-42.63)"
			/>
			<rect
				className="h building-fill"
				x="232.21"
				y="171.36"
				width="7.07"
				height="2.31"
				transform="translate(-54.54 205.23) rotate(-42.63)"
			/>
			<rect
				className="h building-fill"
				x="240.4"
				y="163.83"
				width="7.07"
				height="2.31"
				transform="translate(-47.28 208.78) rotate(-42.63)"
			/>
			<rect
				className="h building-fill"
				x="194.97"
				y="208.26"
				width="7.81"
				height="2.65"
				transform="translate(-89.12 186.5) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="202.66"
				y="200.56"
				width="7.81"
				height="2.65"
				transform="translate(-82.01 189.67) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="211.07"
				y="192.16"
				width="7.81"
				height="2.65"
				transform="translate(-74.25 193.14) rotate(-41.92)"
			/>
			<rect
				className="h building-fill"
				x="70.21"
				y="192.11"
				width="9.47"
				height="5.45"
				transform="translate(-128.97 150.17) rotate(-56.61)"
			/>
			<rect
				className="h building-fill"
				x="97.53"
				y="209.54"
				width="5.21"
				height="4.37"
				transform="translate(-131.74 178.8) rotate(-56.61)"
			/>
			<rect
				className="h building-fill"
				x="156.57"
				y="261.15"
				width="4.54"
				height="4.37"
				transform="translate(-137.24 180.19) rotate(-43.22)"
			/>
			<polygon
				className="h building-fill"
				points="183.32 265.9 170.66 251.81 164 257.79 175.63 270.75 174.23 271.93 177.03 275.28 179.58 273.14 177.72 270.92 183.32 265.9"
			/>
			<rect
				className="h building-fill"
				x="176.14"
				y="280.71"
				width="4.54"
				height="4.37"
				transform="translate(-145.33 198.93) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="209.65"
				y="248.16"
				width="4.54"
				height="4.37"
				transform="translate(-113.95 213.04) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="342.55"
				y="281.9"
				width="4.54"
				height="4.37"
				transform="translate(-101.01 313.15) rotate(-43.21)"
			/>
			<rect
				className="h building-fill"
				x="399.37"
				y="361.8"
				width="4.54"
				height="4.37"
				transform="translate(-140.31 373.72) rotate(-43.21)"
			/>
			<rect
				className="h building-fill"
				x="389.66"
				y="368.55"
				width="4.54"
				height="4.37"
				transform="translate(-147.56 368.9) rotate(-43.21)"
			/>
			<rect
				className="h building-fill"
				x="367.88"
				y="293.5"
				width="4.54"
				height="4.37"
				transform="translate(-102.08 333.64) rotate(-43.21)"
			/>
			<rect
				className="h building-fill"
				x="382.81"
				y="270.45"
				width="4.03"
				height="5.61"
				transform="translate(-82.74 337.63) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="380.62"
				y="211.67"
				width="3.02"
				height="3.59"
				transform="translate(-42.53 319.57) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="380.58"
				y="217.93"
				width="2.36"
				height="5.68"
				transform="translate(-47.62 321.33) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="375.14"
				y="212.72"
				width="2.36"
				height="5.68"
				transform="translate(-45.53 316.18) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="371.36"
				y="209.46"
				width="2.36"
				height="3.48"
				transform="translate(-43.58 312.39) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="368.39"
				y="206.93"
				width="2.36"
				height="2.56"
				transform="translate(-42.33 309.57) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="365.55"
				y="262.12"
				width="4.03"
				height="2.27"
				transform="translate(-80.58 323.07) rotate(-43.21)"
			/>
			<rect
				className="h building-fill"
				x="355.5"
				y="253.51"
				width="4.03"
				height="4.91"
				transform="translate(-78.3 314.24) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="333.86"
				y="291.88"
				width="3.53"
				height="3.4"
				transform="translate(-110 309.45) rotate(-43.22)"
			/>
			<rect
				className="h building-fill"
				x="307.38"
				y="317.57"
				width="2.69"
				height="3.56"
				transform="translate(-134.94 297.99) rotate(-43.21)"
			/>
			<rect
				className="h building-fill"
				x="289.79"
				y="330.84"
				width="6.97"
				height="4.07"
				transform="translate(-148.39 291.08) rotate(-43.21)"
			/>
			<polygon
				className="h building-fill"
				points="316.2 340.8 315.25 340.32 315.25 338.19 310.67 333.36 312.14 331.98 309.35 329.01 307.87 330.4 307.85 330.38 301.93 335.95 301.95 335.97 301.76 336.14 304.55 339.11 304.74 338.93 311.04 345.64 316.2 340.8"
			/>
			<rect
				className="h building-fill"
				x="185.7"
				y="268.97"
				width="21.24"
				height="5.04"
				transform="translate(-134.6 219.13) rotate(-45.14)"
			/>
			<rect
				className="h building-fill"
				x="297.05"
				y="271.82"
				width="15.72"
				height="10.23"
				transform="translate(-106.47 297.71) rotate(-45.14)"
			/>
			<polygon
				className="h building-fill"
				points="358.29 334.16 358.26 334.19 352.69 328.64 347.08 334.26 352.66 339.81 340.12 352.42 347.37 359.63 365.54 341.38 358.29 334.16"
			/>
			<polygon
				className="h building-fill"
				points="296.42 284.22 291.78 279.6 290.72 280.67 290.72 280.67 286.95 284.45 289.1 286.59 290.16 285.53 292.65 288.01 296.42 284.22"
			/>
			<rect
				className="h building-fill"
				x="325.28"
				y="269.51"
				width="6.51"
				height="10.23"
				transform="translate(-97.87 313.77) rotate(-45.14)"
			/>
			<rect
				className="h building-fill"
				x="315.95"
				y="268.28"
				width="4.5"
				height="2.53"
				transform="translate(-97.32 304.95) rotate(-45.14)"
			/>
			<rect
				className="h building-fill"
				x="311.84"
				y="258.86"
				width="4.5"
				height="1.78"
				transform="translate(-91.59 299.15) rotate(-45.14)"
			/>
			<rect
				className="h building-fill"
				x="104.69"
				y="188.93"
				width="3.95"
				height="4.37"
				transform="translate(-99.88 263.5) rotate(-80.15)"
			/>
			<circle className="h building-fill" cx="85.48" cy="138.84" r="2.72" />
			<circle className="h building-fill" cx="301.22" cy="152.34" r="2.37" />
			<circle className="h building-fill" cx="309.03" cy="152.34" r="2.37" />
			<circle className="h building-fill" cx="316.85" cy="152.34" r="2.37" />
			<circle className="h building-fill" cx="301.22" cy="142.39" r="2.37" />
			<circle className="h building-fill" cx="309.03" cy="142.39" r="2.37" />
			<circle className="h building-fill" cx="316.85" cy="142.39" r="2.37" />
			<circle className="h building-fill" cx="301.22" cy="132.45" r="2.37" />
			<circle className="h building-fill" cx="303.35" cy="115.4" r="2.01" />
			<circle className="h building-fill" cx="297.67" cy="115.4" r="2.01" />
			<circle className="h building-fill" cx="309.92" cy="115.4" r="2.01" />
			<circle className="h building-fill" cx="309.03" cy="132.45" r="2.37" />
			<circle className="h building-fill" cx="316.85" cy="132.45" r="2.37" />
			<path
				className="h building-fill"
				d="M87.28,180.67a1.73,1.73,0,0,0-1.39-.66,1.58,1.58,0,0,0-1.66,1.49,1.42,1.42,0,0,0,.42,1v2.23H89.1v-4.05Z"
			/>
			<ellipse
				className="h building-fill"
				cx="94.67"
				cy="184.18"
				rx="0.6"
				ry="0.54"
			/>
			<circle className="h building-fill" cx="92.54" cy="154.19" r="4.34" />
			<circle className="h building-fill" cx="92.54" cy="165.79" r="4.34" />
			<path
				className="h building-fill"
				d="M191.85,195.51l-1,.88a2.43,2.43,0,0,0-1.47-.49,2.46,2.46,0,0,0-2.46,2.46,2.49,2.49,0,0,0,.34,1.25L186,200.72l8.68,9.67,5.82-5.22Z"
			/>
			<path
				className="h building-fill"
				d="M199.45,188.1l-.83.75a2.44,2.44,0,0,0-1.59-.59,2.46,2.46,0,0,0-2,3.85l-1.36,1.21,8.68,9.67,5.82-5.22Z"
			/>
			<path
				className="h building-fill"
				d="M208,179.58l-.83.75a2.42,2.42,0,0,0-1.59-.59,2.46,2.46,0,0,0-2.46,2.46,2.4,2.4,0,0,0,.42,1.38l-1.35,1.22,8.67,9.66,5.82-5.22Z"
			/>
			<path
				className="h building-fill"
				d="M220.55,167.18l-.88.81a2.43,2.43,0,0,0-1.69-.68,2.46,2.46,0,0,0-2.46,2.46,2.42,2.42,0,0,0,.54,1.54l-.71.66,8.27,9,5.2-4.79Z"
			/>
			<path
				className="h building-fill"
				d="M228.87,159.52l-.9.83a2.46,2.46,0,0,0-4.46,1.43,2.45,2.45,0,0,0,.86,1.88l-.7.65,8.27,9,5.2-4.79Z"
			/>
			<path
				className="h building-fill"
				d="M237.06,152l-1,.95a2.46,2.46,0,1,0-3.45,3.17l-.72.67,8.28,9,5.2-4.79Z"
			/>
			<polygon
				className="h building-fill"
				points="73.52 167.49 74.94 167.49 74.94 172.22 72.1 172.22 72.1 171.4 73.52 171.4 73.52 167.49"
			/>
			<polygon
				className="h building-fill"
				points="79.11 167.02 80.39 167.02 80.39 170.12 84.65 170.12 84.65 171.4 79.11 171.4 79.11 167.02"
			/>
			<path
				className="i feature-fill"
				d="M105.49,211.72l1.06.75L95.19,227,71.63,208.34a4.21,4.21,0,0,0-2.49,0s-1.77.66-2.84-.15-1.42-.69-1.42-.69v-.95s2.19-.71,3,0l-.06.6h2.67a5.51,5.51,0,0,1,3.61,1.95L94.6,225.2Z"
			/>
			<rect
				className="h building-fill"
				x="189.93"
				y="182.34"
				width="2.41"
				height="2.11"
				transform="translate(-73.36 168.85) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="216.39"
				y="155.73"
				width="2.41"
				height="2.11"
				transform="translate(-49.62 179.67) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="234.32"
				y="200.3"
				width="2.41"
				height="2.11"
				transform="translate(-16.08 20.5) rotate(-4.82)"
			/>
			<rect
				className="h building-fill"
				x="205.61"
				y="255.58"
				width="2.41"
				height="2.11"
				transform="translate(-20.83 18.28) rotate(-4.82)"
			/>
			<rect
				className="h building-fill"
				x="263.62"
				y="206.58"
				width="2.41"
				height="2.11"
				transform="translate(-16.5 22.98) rotate(-4.82)"
			/>
			<rect
				className="h building-fill"
				x="231.2"
				y="143.22"
				width="4.45"
				height="2.11"
				transform="translate(-37.65 186.97) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="176.52"
				y="196.94"
				width="4.15"
				height="2.12"
				transform="translate(-85.9 164.21) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="206.17"
				y="227.13"
				width="4.15"
				height="2.12"
				transform="translate(-98.41 190.82) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="258.36"
				y="173.86"
				width="4.15"
				height="2.12"
				transform="translate(-51.09 211.99) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="314.94"
				y="242.16"
				width="4.15"
				height="2.12"
				transform="translate(-81.94 265.36) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="228.76"
				y="258.02"
				width="4.15"
				height="2.12"
				transform="translate(-113.09 213.03) rotate(-40.67)"
			/>
			<rect
				className="h building-fill"
				x="259.19"
				y="217.86"
				width="6.64"
				height="4.26"
				transform="translate(-77.49 261.28) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="262.98"
				y="221.65"
				width="6.64"
				height="4.26"
				transform="translate(-79.06 265.24) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="267"
				y="225.67"
				width="6.64"
				height="4.26"
				transform="translate(-80.72 269.46) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="267.59"
				y="209.45"
				width="6.64"
				height="4.26"
				transform="translate(-68.7 264.75) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="272.33"
				y="213.95"
				width="6.64"
				height="4.26"
				transform="translate(-70.48 269.63) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="277.06"
				y="219.16"
				width="6.64"
				height="4.26"
				transform="translate(-72.79 274.74) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="286.84"
				y="229.37"
				width="3.45"
				height="6.96"
				transform="translate(-78.63 284.38) rotate(-46.89)"
			/>
			<rect
				className="h building-fill"
				x="289.32"
				y="392.76"
				width="9.59"
				height="6.04"
			/>
			<polygon
				className="h building-fill"
				points="307.55 401.4 299.03 401.4 299.03 403.89 299.03 408.38 299.03 410.87 304.71 410.87 304.71 408.38 307.55 408.38 307.55 401.4"
			/>
			<rect
				className="h building-fill"
				x="308.86"
				y="392.76"
				width="8.17"
				height="4.97"
			/>
			<rect
				className="h building-fill"
				x="319.16"
				y="392.76"
				width="8.17"
				height="4.97"
			/>
			<rect
				className="h building-fill"
				x="335.31"
				y="378.13"
				width="6.75"
				height="4.04"
			/>
			<rect
				className="h building-fill"
				x="314.24"
				y="367.71"
				width="6.75"
				height="4.04"
			/>
			<rect
				className="h building-fill"
				x="337.09"
				y="396.42"
				width="5.68"
				height="4.04"
			/>
			<polygon
				className="h building-fill"
				points="279.97 190.57 281.63 188.68 283.05 190.81 284.23 190.81 284.23 189.39 286.37 190.57 287.55 191.05 287.55 192.23 286.37 192.23 286.6 194.36 287.07 195.54 288.5 195.31 288.73 196.97 290.39 196.73 290.63 198.62 292.28 198.38 292.52 200.04 293.94 200.28 295.13 203.59 297.49 204.54 298.44 206.91 300.1 206.91 301.75 208.33 301.75 209.51 303.17 209.51 303.17 211.17 304.6 210.93 305.54 213.06 306.73 213.06 306.73 215.19 308.15 215.19 308.15 216.14 309.09 216.38 309.33 218.04 311.7 218.27 311.7 219.69 313.12 219.69 313.83 221.35 315.25 221.35 315.25 223.01 317.14 223.01 317.14 224.9 318.33 224.9 318.09 223.96 320.46 223.96 320.69 225.85 321.88 225.85 321.88 227.27 320.46 227.03 320.46 228.93 321.64 230.11 323.06 229.87 324.48 231.06 324.48 232.48 323.06 233.66 314.77 225.85 315.01 223.96 313.59 223.48 313 221.94 310.75 221.82 302.94 214.25 302.7 211.88 301.63 211.53 301.4 210.22 299.5 210.58 292.05 203.12 291.93 200.75 290.86 200.52 290.15 199.21 287.9 198.98 279.97 190.57"
			/>
			<polygon
				className="h building-fill"
				points="387.34 295.33 386.87 293.68 388.29 294.15 388.29 292.02 386.63 290.13 385.21 290.13 385.21 292.02 383.79 291.78 380.32 287.38 372.98 279.8 372.98 277.91 371.09 277.91 371.09 276.25 369.67 276.25 368.96 274.59 367.54 274.59 362.57 270.09 362.24 268.82 357.6 264.41 356.21 265.15 358.93 267.87 358.78 269.15 366.59 276.72 368.84 276.84 369.43 278.38 370.85 278.85 370.62 280.75 377.16 287.4 377.51 288.94 378.94 288.94 379.65 288.23 381.66 290.84 380.47 291.55 389.59 299.95 391.37 298.18 387.34 295.33"
			/>
			<polygon
				className="h building-fill"
				points="342.95 250.71 341.53 249.29 341.53 247.87 343.42 246.21 341.53 246.21 341.06 244.08 338.69 245.97 337.27 244.31 335.61 245.97 356.21 265.15 357.6 264.41 342.95 250.71"
			/>
			<circle className="h building-fill" cx="260.38" cy="359.38" r="2.37" />
			<circle className="h building-fill" cx="386.98" cy="312.68" r="1.36" />
			<circle className="h building-fill" cx="389.53" cy="310.13" r="1.36" />
			<circle className="h building-fill" cx="402.85" cy="316.35" r="1.36" />
			<circle className="h building-fill" cx="421.31" cy="224.43" r="1.36" />
			<circle className="h building-fill" cx="251.03" cy="118.72" r="2.37" />
			<path
				className="i feature-fill"
				d="M328,207.12l-5.15-5.06a1.25,1.25,0,0,1-.08-1.87c.88-1.15,5.85-5.77,5.85-5.77a1.94,1.94,0,0,1,2.49-.27c1.24,1,5,4.89,5,4.89l-.62.71L331,195.4s-1-.89-1.68-.18l-4.89,5.24s-1,.71-.09,1.33l4.49,4.48Z"
			/>
			<path
				className="i feature-fill"
				d="M353.78,232.86l-5.15-5.06a1.23,1.23,0,0,1-.09-1.86c.89-1.16,5.86-5.77,5.86-5.77a1.92,1.92,0,0,1,2.49-.27c1.24,1,5,4.88,5,4.88l-.62.71-4.53-4.35s-1-.88-1.69-.17l-4.88,5.23s-1,.71-.09,1.34l4.48,4.48Z"
			/>
			<path
				className="i feature-fill"
				d="M332.65,210.13l-1,.71,9.68,9.5-1.15.89.53.8,9.32-8.52L339.4,202.68l-1.07.88,9,8.88s1.24.8.09,1.51l-5,4.44s-.89,1.24-2.22-.35Z"
			/>
			<path
				className="i feature-fill"
				d="M358,235.7l-1,.71,9.68,9.5-1.15.89.53.8,9.32-8.52-10.65-10.83-1.07.88,9,8.88s1.24.8.09,1.51l-5,4.44s-.89,1.24-2.22-.35Z"
			/>
			<path
				className="i feature-fill"
				d="M367.63,246.45s-.89,1.59,2.13,1.24a17.17,17.17,0,0,0,6.22,1.06s4.79,2.85,5.86,4.8l-1.07.71s-4.26-5.15-6-4.26l-5.5-.71s-3.2-.36-3.11-1.69S367.63,246.45,367.63,246.45Z"
			/>
			<path
				className="i feature-fill"
				d="M389.29,250l.36-2.13-7.1-12.79s-2.49-4.26-6.75-4.44c0,0-4.8-1.24-6.75-4.08l1.07-.71a16.74,16.74,0,0,0,8.87,4.08s3.73,2,4.62,4.26l5.86,10.66h3.2l.71,3.19s-3.38-.17-2.84-.17.17,2.66.17,2.66Z"
			/>
			<rect
				className="i feature-fill"
				x="428.79"
				y="200.33"
				width="4.47"
				height="4.17"
			/>
			<polygon
				className="i feature-fill"
				points="450.73 159.17 450.46 159.17 450.59 159.04 426.02 134.81 426.05 134.77 425.24 133.96 417.17 142.04 417.99 142.86 425.39 135.44 449.58 159.29 449.58 185.14 436.25 198.5 404.95 198.5 384.14 176.71 391.56 169.26 390.74 168.45 382.68 176.53 382.73 176.58 382.71 176.6 404.65 199.58 404.65 199.66 436.7 199.66 436.71 199.67 436.73 199.66 436.76 199.66 436.76 199.63 450.68 185.67 450.55 185.54 450.73 185.54 450.73 159.17"
			/>
			<rect
				className="i feature-fill"
				x="391.34"
				y="167.02"
				width="2.26"
				height="1.15"
				transform="translate(-3.32 327.19) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="393.51"
				y="164.85"
				width="2.26"
				height="1.15"
				transform="translate(-1.14 328.09) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="395.55"
				y="162.8"
				width="2.26"
				height="1.15"
				transform="translate(0.9 328.94) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="397.46"
				y="160.9"
				width="2.26"
				height="1.15"
				transform="translate(2.82 329.73) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="399.55"
				y="158.81"
				width="2.26"
				height="1.15"
				transform="translate(4.91 330.59) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="401.46"
				y="156.9"
				width="2.26"
				height="1.15"
				transform="translate(6.82 331.38) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="403.46"
				y="154.9"
				width="2.26"
				height="1.15"
				transform="translate(8.82 332.21) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="405.36"
				y="152.99"
				width="2.26"
				height="1.15"
				transform="translate(10.73 333) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="407.32"
				y="151.04"
				width="2.26"
				height="1.15"
				transform="translate(12.69 333.81) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="409.32"
				y="149.04"
				width="2.26"
				height="1.15"
				transform="translate(14.69 334.64) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="411.27"
				y="147.09"
				width="2.26"
				height="1.15"
				transform="translate(16.65 335.45) rotate(-45.09)"
			/>
			<rect
				className="i feature-fill"
				x="413.45"
				y="145.12"
				width="1.84"
				height="1.15"
				transform="translate(18.63 336.26) rotate(-45.09)"
			/>
			<polygon
				className="i feature-fill"
				points="321.29 380.25 306.73 380.25 306.73 380.66 306.67 380.59 301.19 385.39 289 385.39 289 386.55 301.32 386.55 301.45 386.7 307.43 381.46 307.37 381.4 321.29 381.4 321.29 380.25"
			/>
			<rect
				className="i feature-fill"
				x="249.03"
				y="143"
				width="1.15"
				height="29.63"
				transform="translate(-37.92 225.16) rotate(-45.49)"
			/>
			<polygon
				className="i feature-fill"
				points="314.24 247.83 264.97 199.39 265.78 198.56 315.05 247.01 314.24 247.83"
			/>
			<rect
				className="i feature-fill"
				x="252.47"
				y="323.41"
				width="1.15"
				height="17.99"
				transform="translate(-161.39 279.8) rotate(-45.49)"
			/>
			<polygon
				className="i feature-fill"
				points="236.03 251.65 212.75 228.76 213.56 227.94 236.83 250.83 236.03 251.65"
			/>
			<rect
				className="i feature-fill"
				x="230.12"
				y="322.75"
				width="1.15"
				height="4.86"
				transform="translate(-162.92 261.71) rotate(-45.49)"
			/>
			<rect
				className="i feature-fill"
				x="239.35"
				y="331.98"
				width="1.15"
				height="4.86"
				transform="translate(-166.75 271.05) rotate(-45.49)"
			/>
			<polygon
				className="i feature-fill"
				points="266.16 175.3 266.97 174.48 263 170.57 262.19 171.39 265.34 174.49 252.85 187.19 252.88 187.21 252.84 187.25 262.61 196.86 263.41 196.03 254.44 187.21 266.16 175.3 266.16 175.3"
			/>
			<rect
				className="i feature-fill"
				x="207.01"
				y="230.92"
				width="5.62"
				height="1.15"
				transform="translate(-102.35 218.81) rotate(-45.49)"
			/>
			<rect
				className="i feature-fill"
				x="234.18"
				y="250.82"
				width="2.61"
				height="1.15"
				transform="translate(-108.87 243.07) rotate(-45.49)"
			/>
			<polygon
				className="i feature-fill"
				points="179.74 192.52 201.67 170.22 200.85 169.41 179.04 191.59 178.8 191.53 177.88 195.19 174.14 199 174.96 199.81 178.7 196 178.86 196.04 179.74 192.52"
			/>
			<polygon
				className="i feature-fill"
				points="231.26 143.5 233.81 140.91 232.99 140.1 230.73 142.4 227.62 142.68 227.6 142.66 227.58 142.68 227.35 142.7 227.37 142.89 204.62 166.03 205.44 166.84 228.1 143.79 231.02 143.53 231.13 143.64 231.26 143.51 231.26 143.51 231.26 143.5"
			/>
			<polygon
				className="i feature-fill"
				points="220.25 298.87 229.07 289.9 229.06 289.89 229.07 289.88 224.94 285.82 236.02 274.56 236.13 274.66 236.94 273.83 224.82 261.92 230.86 255.78 230.04 254.97 223.2 261.92 223.3 262.01 223.28 262.03 235.2 273.75 223.32 285.83 223.35 285.85 223.34 285.86 227.45 289.9 218.67 298.83 218.75 298.91 218.7 298.97 241.48 321.37 242.29 320.55 220.25 298.87"
			/>
			<polygon
				className="i feature-fill"
				points="351.77 283.97 317.1 249.88 316.29 250.7 350.17 284.01 336.56 297.85 337.39 298.66 351.65 284.15 351.63 284.12 351.77 283.97"
			/>
			<polygon
				className="i feature-fill"
				points="410.24 305.14 406.88 301.84 406.94 301.78 406.12 300.97 398.72 308.5 399.54 309.31 406.07 302.66 409.43 305.96 410.24 305.14"
			/>
			<polygon
				className="i feature-fill"
				points="407.29 322.74 406.47 321.93 399.8 328.71 394.72 323.7 393.91 324.53 399.72 330.24 399.8 330.16 399.89 330.26 407.29 322.74"
			/>
			<polygon
				className="i feature-fill"
				points="387.49 316.46 391.03 312.86 390.21 312.05 385.93 316.4 385.95 316.42 385.87 316.49 391.68 322.2 392.49 321.38 387.49 316.46"
			/>
			<polygon
				className="i feature-fill"
				points="384.07 313.04 385.41 311.68 384.59 310.87 382.51 312.98 382.57 313.04 382.5 313.12 384.95 315.53 385.76 314.71 384.07 313.04"
			/>
			<polygon
				className="i feature-fill"
				points="392.11 308.36 390.39 306.67 390.41 306.66 389.59 305.85 386.06 309.43 386.89 310.24 389.58 307.5 391.3 309.18 392.11 308.36"
			/>
			<polygon
				className="i feature-fill"
				points="416.77 311.63 416.75 311.65 412.57 307.54 411.76 308.36 415.94 312.47 409.37 319.15 410.19 319.96 417.59 312.44 416.77 311.63"
			/>
			<polygon
				className="i feature-fill"
				points="216.38 259.39 207.7 250.85 206.89 251.67 214.71 259.36 183.37 291.23 154.02 262.38 185.54 230.31 204.08 248.53 204.88 247.71 185.62 228.77 185.62 228.78 185.53 228.69 153.2 261.57 153.19 261.56 152.38 262.38 182.56 292.06 182.54 292.07 183.36 292.88 215.53 260.17 215.57 260.21 216.38 259.39"
			/>
			<rect
				className="i feature-fill"
				x="427"
				y="288.3"
				width="1.15"
				height="16.92"
			/>
			<rect
				className="i feature-fill"
				x="427"
				y="286.75"
				width="1.15"
				height="0.01"
			/>
			<rect
				className="i feature-fill"
				x="427"
				y="309.48"
				width="1.15"
				height="9.06"
			/>
			<rect
				className="i feature-fill"
				x="427"
				y="322.09"
				width="1.15"
				height="4.76"
			/>
			<polygon
				className="i feature-fill"
				points="428.16 288.3 445.77 288.3 445.77 286.76 445.76 286.76 445.76 286.39 449.1 286.39 449.1 285.07 445.76 285.07 445.76 285.07 444.51 285.07 444.51 285.07 444.51 286.39 444.51 286.76 442.43 286.76 442.43 276.99 441.27 276.99 441.27 286.76 428.16 286.76 427 286.76 426.98 286.76 426.98 288.3 427 288.3 428.16 288.3"
			/>
			<polygon
				className="i feature-fill"
				points="462.34 261.5 462.34 261.5 457.03 261.5 457.03 262.64 462.34 262.64 462.34 286.76 455.35 286.76 455.35 286.35 455.36 286.35 455.36 285.07 455.35 285.07 455.35 285.07 453.93 285.07 453.93 285.07 451.4 285.07 451.4 286.35 453.93 286.35 453.93 286.76 453.93 288.17 453.93 288.3 462.34 288.3 462.34 326.84 428.16 326.84 427 326.84 427 326.84 427 327.99 463.48 327.99 463.48 327.59 463.49 327.59 463.49 261.5 462.34 261.5"
			/>
			<polygon
				className="i feature-fill"
				points="442.43 262.64 452.92 262.64 452.92 261.5 441.32 261.5 441.32 261.54 441.27 261.54 441.27 267.4 442.43 267.4 442.43 262.64"
			/>
			<polygon
				className="i feature-fill"
				points="447.76 253.95 447.76 235.79 446.6 235.79 446.6 253.95 436.39 253.95 436.39 235.79 435.24 235.79 435.24 253.95 435.19 253.95 435.19 255.54 447.77 255.54 447.77 253.95 447.76 253.95"
			/>
			<polygon
				className="i feature-fill"
				points="346.5 385.48 346.5 385.28 330.56 385.28 330.58 380.14 330.28 380.14 330.28 380.07 324.36 380.07 324.36 381.22 329.42 381.22 329.4 386.38 329.43 386.38 329.43 386.43 345.56 386.43 345.56 388.69 346.71 388.69 346.72 385.48 346.5 385.48"
			/>
			<polygon
				className="i feature-fill"
				points="346.38 402.2 346.37 402.2 346.37 392.57 345.21 392.57 345.21 402.2 328.48 402.2 328.48 403.36 328.52 403.36 328.52 407.41 310.13 407.41 310.13 407.5 310.06 407.5 310.06 414.28 295.34 414.28 289.78 408.81 288.97 409.64 294.81 415.38 294.81 415.43 294.87 415.43 294.98 415.54 295.08 415.43 311.29 415.43 311.29 414.28 311.21 414.28 311.21 408.57 329.69 408.57 329.69 407.41 329.68 407.41 329.68 403.36 345.21 403.36 345.21 403.43 346.37 403.43 346.37 403.36 346.38 403.36 346.38 402.2"
			/>
			<rect
				className="i feature-fill"
				x="285.5"
				y="403.46"
				width="7.88"
				height="1.15"
				transform="translate(-115.55 692.13) rotate(-89.81)"
			/>
			<polygon
				className="i feature-fill"
				points="346.21 110.35 346.21 110.38 327.83 110.38 327.83 103.95 327.86 103.95 327.86 102.8 327.83 102.8 327.83 102.77 326.68 102.77 326.68 102.8 276.16 102.8 276.16 102.8 275.01 102.8 275.01 151.81 275.38 151.81 275.33 151.86 280.48 156.93 280.48 157.22 280.79 157.22 280.95 157.39 281.12 157.22 293.06 157.22 293.06 156.07 281.26 156.07 276.16 151.06 276.16 103.95 326.68 103.95 326.68 111.62 327.83 111.62 327.83 111.53 346.21 111.53 346.21 115.76 347.37 115.76 347.37 110.35 346.21 110.35"
			/>
			<rect
				className="i feature-fill"
				x="346.21"
				y="117.21"
				width="1.15"
				height="8.73"
			/>
			<polygon
				className="i feature-fill"
				points="346.21 132.16 332.57 132.16 332.57 132.25 332 132.25 332 148.74 328.11 152.5 328.91 153.33 333.13 149.26 333.16 149.26 333.16 149.23 333.17 149.23 333.16 149.22 333.16 133.31 347.28 133.31 347.28 133.28 347.37 133.28 347.37 127.28 346.21 127.28 346.21 132.16"
			/>
			<polygon
				className="i feature-fill"
				points="377.6 341.49 378.41 340.66 356.27 318.89 356.31 318.85 355.49 318.04 349.84 323.78 336.81 310.98 338.21 309.55 338.2 309.54 338.44 309.31 332.55 303.52 334.07 301.97 333.25 301.17 331 303.46 331.08 303.54 331.01 303.62 336.81 309.33 335.99 310.17 335.96 310.13 335.15 310.96 335.18 310.99 335.14 311.03 335.96 311.84 336 311.8 349.9 325.46 350.7 324.63 350.66 324.59 355.46 319.71 376.7 340.6 347.68 370.12 343.9 370.12 324.39 350.94 324.43 350.9 323.61 350.09 310.9 363.02 311.72 363.83 323.59 351.76 343.3 371.15 343.3 371.19 348.28 371.19 348.28 371.16 377.53 341.41 377.6 341.49"
			/>
			<polygon
				className="i feature-fill"
				points="288.97 345.57 288.98 345.58 278.19 356.56 262.06 340.71 261.25 341.53 278.14 358.13 278.19 358.09 278.25 358.14 289.8 346.39 308.59 364.87 309.4 364.05 289.78 344.75 288.97 345.57"
			/>
			<rect
				className="j feature-stroke no-fill"
				x="328.01"
				y="201.12"
				width="3.95"
				height="3.95"
				transform="translate(-50.79 274.86) rotate(-42.28)"
			/>
			<rect
				className="j feature-stroke no-fill"
				x="333.92"
				y="207.04"
				width="3.95"
				height="3.95"
				transform="translate(-53.23 280.38) rotate(-42.28)"
			/>
			<rect
				className="j feature-stroke no-fill"
				x="337.83"
				y="211.18"
				width="3.95"
				height="3.95"
				transform="translate(-55 284.09) rotate(-42.28)"
			/>
			<rect
				className="j feature-stroke no-fill"
				x="353.81"
				y="226.57"
				width="3.95"
				height="3.95"
				transform="translate(-61.2 298.84) rotate(-42.28)"
			/>
			<rect
				className="j feature-stroke no-fill"
				x="359.73"
				y="232.49"
				width="3.95"
				height="3.95"
				transform="translate(-63.64 304.36) rotate(-42.28)"
			/>
			<rect
				className="j feature-stroke no-fill"
				x="363.64"
				y="236.63"
				width="3.95"
				height="3.95"
				transform="translate(-65.41 308.07) rotate(-42.28)"
			/>
			<path
				className="h building-fill"
				d="M264.11,304.33l5.06,5.15v1.07l1.24,1.51,1.25-.18,1.42,1.33,4.44-4.26,1,.53v.62h1.42v-.8l4.53-4.08.09-1-1.78-2-1.42-.09-1,1.25-5.42-5.24a2,2,0,0,0-1.51,0l-3.19,3.46-1.07-.89s-.35-.53-1.33,0Z"
			/>
		</SVGOverlay>
	),
	alpine: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .d,.e,.g,.h,.i{strokeMiterlimit:10;}
            .d{strokeWidth:0.32px;}
            .e{strokeWidth:2.24px;}
            .g{strokeWidth:0.96px;}
            .h{strokeWidth:0.32px;}
            .i{strokeWidth:0.96px;}
            `}
				</style>
			</defs>
			<rect className="a background-fill no-stroke" width="512" height="512" />
			<path
				className="b field-fill no-stroke"
				d="M471,208.32s19.84-61.44-56.32-85.76S247,97.6,221.44,100.8s-80,5.76-136.32,32.64S33.52,220.83,35.2,233.92c0,0,14.4,97.92,25,117.76s11.52,39,68.48,51.84,76.16,10.56,76.16,10.56h97.6s104,2.24,132.16-107.52Z"
			/>
			<path
				className="c feature-fill no-stroke"
				d="M264.83,264.67s11,2.4,25.44,14.4,31.68-1.92,34.56-4.8,26.53-14.75,46.55,9.6c0,0,4.3,7,8.46,9.89s-1.6,13.44-1.6,13.44-5.12,10.56-6.72,14.4-17.92,15.36-31,14.72-21.76,3.52-26.24,10.24-27.2,8.36-23.36-13.12c0,0,11.52-30.72-12.8-16.32s-21.12,13.44-35.84,6.72c0,0-3.84-2.24-3.2-12.16,0,0-4.16-6.72-6.72-7.36,0,0-4.48-7-4.16-9.6a31.46,31.46,0,0,1-15-1s-25.28,1.6-33.28-.64S166.72,281,166.72,281s-1.28-9.6,3.84-25.28,16.64-27.84,16.64-27.84a16.35,16.35,0,0,0,5.12-10.56c.32-6.4,28.16-16.64,35.2-19.2s15-2.88,21.44-17,29.76-21.76,31.36-21.76,16-5.76,38.72,17.6,50.56,26.56,50.56,26.56,28.16,11.52,3.2,33c0,0-32.32,10.24-49.6-3.84s-33-14.08-33.92-13.76-15.36,0-27.52,10.56c0,0,1,13.12-2.88,14.4C258.88,243.84,265.66,253.5,264.83,264.67Z"
			/>
			<path
				className="d road-fill road-stroke"
				d="M58.88,156.16s14.72,6.72,25.6,7.36c0,0,19.2,8.32,24,13.76s17.6,17.92,7,34.24S105,227.2,103.36,233.28s-7.36,31.36-5.44,47h3.2s1-39.68,10.24-53.44,23.36-32.32-2.24-54.72c0,0-13.12-9.92-27.2-13.12,0,0-15.68-3.52-19.84-7.68Z"
			/>
			<path
				className="d road-fill road-stroke"
				d="M54.08,326.08l.64,5.12S68.08,336.61,72,351.68c4,15.36,19.39,25.19,34.88,28.48,15.84,3.36,27.84,4.32,78.08,13.92,0,0,25.28,2.56,49.28,14.88,0,0,16,2.88,25.6-6.4s16.64-11.52,41.92-8.32,59.84,2.88,65.6,0,12.16-9.28,15-7.68,6.72-4.48,6.72-4.48-10.88-3.2-21.12,7c0,0-2.56,4.64-41,3l-45.44-4.32a31.89,31.89,0,0,0-23.36,9.6C248,408,230.56,403.2,227,401s-13.22-5.91-31.52-9.6c-22.24-4.48-52.16-9.92-75.52-13.44,0,0-35.52-1.6-44.48-29.44C75.52,348.48,73.6,334.08,54.08,326.08Z"
			/>
			<path
				className="e road-stroke no-fill"
				d="M66.6,335.22s1-28.79,17.76-29.75l13.92.48"
			/>
			<path
				className="e road-stroke no-fill"
				d="M108.36,314.59l-.48,27.84s-.48,10.07,23.51,18.71c0,0,9.12,3.84,22.08-4.8,0,0,16.32-7.68,23,1.44s20.64,12.48,22.08,12.48,13.92,1,8.16,25"
			/>
			<path
				className="e road-stroke no-fill"
				d="M317.62,392.82s-1.25-9.35,7.71-11.91,9.18-4.27,10.46-5.12,18.13-14.72,18.13-14.72,4.05-3.84,4.91-13.66S375,332.91,375,332.91s29.87-10,35.63-12c0,0,11.94-2.13,14.5,8.75"
			/>
			<path
				className="e road-stroke no-fill"
				d="M420.69,322.67s-3.62-8.32-1.49-12.38"
			/>
			<path
				className="e road-stroke no-fill"
				d="M410.67,321s15.57-17.28,17.28-44.37,1.49-44.38-10.24-46.51-25.18-32.64-24.32-42-.43-19.84,18.13-27.94"
			/>
			<path
				className="e road-stroke no-fill"
				d="M395.31,198.51s-6.83,25.17-6.62,34.77,2.14,3.2,1.71,14.08-.21,45.44-.21,45.44"
			/>
			<path
				className="e road-stroke no-fill"
				d="M404.05,164.37s-11.52-25.6-26.45-17.92S349.23,142,349.23,142s-25-10.88-38.4-8.53-38.4-14.29-38.83-16.21-23-17.71-58.67-6.62c0,0-10.88,2.14-14.72,2.35s-12.8,4.27-16.64,14.93-18.13,26.24-35,24.54S125.44,148,125.44,148s-16.85-13.23-34.77,13.86"
			/>
			<path
				className="b field-fill no-stroke"
				d="M252.16,192.32s24.32-49.92,59.52-11.52c0,0,17.92,16.64,42.88,25.6s18.24,15,18.24,15-3.52,8-28.48,5.76c0,0-9.6-.64-30.72-15,0,0-26.24-12.8-47.36,1,0,0-11.52,7-14.4,6.72,0,0-1.6-11.84,2.88-16.64S252.16,192.32,252.16,192.32Z"
			/>
			<path
				className="b field-fill no-stroke"
				d="M247.68,195.2s-8.64,7.68-19.2,9.92-28.8,9.6-30.4,17.6a17.94,17.94,0,0,1-7.68,11.52s14.08-7.36,29.12-3.84c0,0,10.24,1,24.64-7.36,0,0,1.48-11.5,2.56-15.36C249,199.68,247.68,195.2,247.68,195.2Z"
			/>
			<path
				className="b field-fill no-stroke"
				d="M247.36,235.2l9.92-4.8s1,8-1.28,10.24Z"
			/>
			<path
				className="b field-fill no-stroke"
				d="M182.08,252.16s16.64-12.16,38.4-9c0,0,12.8-1.28,22.08-7.36a78.86,78.86,0,0,0,10.56,8.64c5.76,3.84,6.72,11.52,6.4,19.84,0,0-23,12.16-26.88,18.56,0,0-5.76,8.64-17,2.56,0,0-32.32,1.92-32.32,0C183.36,285.44,185,259.2,182.08,252.16Z"
			/>
			<path
				className="b field-fill no-stroke"
				d="M233,292.8S256.64,272.64,259.2,273s8.32-4.8,30.72,16c0,0,20.16,10.56,38.4-6.4s37.76,4.8,38.72,9.28,16,26.24-20.48,38.72c0,0-27.52-.64-32,8.64s-23,10.24-17.28-7-3.84-25.92-13.12-24.32S265,323.2,255,322.88s-11.84-9.28-11.52-10.24-1.6-8-4.48-9.28S233,292.8,233,292.8Z"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="66.88 178.56 75.2 180.48 75.2 175.04 66.88 173.12 66.88 178.56"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="66.88 187.84 75.2 189.76 75.2 184.32 66.88 182.4 66.88 187.84"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="66.88 197.44 75.2 199.36 75.2 193.92 66.88 192 66.88 197.44"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="66.88 206.08 75.2 208 75.2 202.56 66.88 200.64 66.88 206.08"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="72.15 246.16 73.85 247.05 72.66 249.31 79.46 252.88 83.92 244.38 75.42 239.92 72.15 246.16"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="69.64 261.48 71.56 261.59 71.41 264.15 79.08 264.59 79.63 255 70.04 254.45 69.64 261.48"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="69.64 274.6 71.56 274.71 71.41 277.27 79.08 277.71 79.63 268.12 70.04 267.57 69.64 274.6"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="72.88 287.97 74.76 287.58 75.28 290.08 82.8 288.52 80.84 279.12 71.44 281.08 72.88 287.97"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="80.71 290.45 80.71 294.11 78.02 296.41 80.71 298.71 80.71 302.38 90.25 302.38 90.25 298.59 92.8 296.41 90.25 294.24 90.25 290.45 80.71 290.45"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="402.13 270.1 402.13 274.05 399.33 276.52 402.13 279 402.13 282.95 412.07 282.95 412.07 278.87 414.72 276.52 412.07 274.18 412.07 270.1 402.13 270.1"
			/>
			<rect
				className="d road-fill road-stroke"
				x="95.68"
				y="280.32"
				width="21.44"
				height="35.2"
			/>
			<rect
				className="f building-fill no-stroke"
				x="94.72"
				y="275.84"
				width="2.24"
				height="3.84"
			/>
			<rect
				className="f building-fill no-stroke"
				x="98.18"
				y="178.53"
				width="4.59"
				height="3.9"
				transform="translate(-98.19 123.91) rotate(-45)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="105.86"
				y="186.53"
				width="4.59"
				height="3.9"
				transform="translate(-101.6 131.68) rotate(-45)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="109.41"
				y="195.79"
				width="3.9"
				height="4.59"
				transform="translate(-87.32 308.37) rotate(-89.69)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="107.65"
				y="205.06"
				width="3.9"
				height="4.59"
				transform="matrix(0.51, -0.86, 0.86, 0.51, -124.61, 195)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="103.49"
				y="213.71"
				width="3.9"
				height="4.59"
				transform="translate(-123.94 144.17) rotate(-46.59)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="95.94"
				y="223.97"
				width="4.59"
				height="3.9"
				transform="translate(-130.98 135.64) rotate(-45)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="142.08"
				y="215.22"
				width="4.48"
				height="3.81"
			/>
			<rect
				className="f building-fill no-stroke"
				x="174.61"
				y="174.59"
				width="3.81"
				height="4.48"
				transform="translate(-73.34 176.61) rotate(-45)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="338.73"
				y="376.63"
				width="7.58"
				height="8.43"
				transform="translate(-146.1 227.19) rotate(-30.58)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="323.52"
				y="368.41"
				width="4.79"
				height="7.11"
				transform="translate(-143.88 217.46) rotate(-30.57)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="347.48"
				y="370.44"
				width="7.58"
				height="8.43"
				transform="translate(-141.74 230.77) rotate(-30.58)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="225.71"
				y="334.93"
				width="3.81"
				height="4.48"
				transform="translate(-177.02 379.14) rotate(-61.9)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="330.67"
				y="145.75"
				width="4.43"
				height="4.48"
				transform="translate(120.04 443.64) rotate(-78.22)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="193.87"
				y="373.46"
				width="7.07"
				height="6.57"
				transform="matrix(0.2, -0.98, 0.98, 0.2, -211.28, 494.57)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="193.58"
				y="374.61"
				width="4.07"
				height="6.57"
				transform="translate(-213.85 493.73) rotate(-78.43)"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="204.71 340.13 202.87 345.32 200.04 344.34 198.13 349.86 200.91 350.82 199.03 356.11 215.59 361.99 221.27 346.01 204.71 340.13"
			/>
			<rect
				className="f building-fill no-stroke"
				x="166.56"
				y="252.81"
				width="3.2"
				height="1.9"
			/>
			<rect
				className="f building-fill no-stroke"
				x="141.6"
				y="204.18"
				width="4.48"
				height="7.33"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="147.68 227.52 137.92 227.52 137.92 226.08 132.96 226.08 132.96 227.52 132.96 247.52 132.96 248.32 133.6 248.32 133.6 251.84 147.04 251.84 147.04 248.32 147.68 248.32 147.68 227.52"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="114.56 273.28 108.16 273.28 108.16 278.72 109.16 278.72 109.16 279.84 113.56 279.84 113.56 278.72 114.56 278.72 114.56 273.28"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="152.09 305.73 149.27 306.22 148.14 299.82 152.15 299.12 150.3 288.67 146.3 289.37 144.97 281.84 148.44 281.23 146.84 272.2 128.53 275.43 130.12 284.46 132.49 284.05 133.81 291.57 129.22 292.39 129.23 292.46 124.98 298.52 131.05 302.77 131.06 302.84 135.66 302.03 136.79 308.43 133.78 308.96 135.37 317.99 153.68 314.76 152.09 305.73"
			/>
			<circle
				className="f building-fill no-stroke"
				cx="183.04"
				cy="376.96"
				r="2.35"
			/>
			<rect
				className="f building-fill no-stroke"
				x="307.2"
				y="365.55"
				width="4.69"
				height="5.12"
			/>
			<rect
				className="f building-fill no-stroke"
				x="331.52"
				y="346.35"
				width="4.91"
				height="8.11"
			/>
			<rect
				className="f building-fill no-stroke"
				x="339.41"
				y="346.35"
				width="4.91"
				height="8.11"
			/>
			<rect
				className="f building-fill no-stroke"
				x="346.88"
				y="346.35"
				width="4.91"
				height="8.11"
			/>
			<rect
				className="f building-fill no-stroke"
				x="339.41"
				y="294.72"
				width="4.69"
				height="3.84"
			/>
			<rect
				className="f building-fill no-stroke"
				x="420.48"
				y="238.83"
				width="4.69"
				height="4.91"
			/>
			<rect
				className="f building-fill no-stroke"
				x="298.88"
				y="238.43"
				width="4.98"
				height="3.73"
			/>
			<rect
				className="f building-fill no-stroke"
				x="302.65"
				y="181.5"
				width="3.04"
				height="4.07"
				transform="translate(-14.82 339.91) rotate(-57.22)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="298.88"
				y="244.03"
				width="4.98"
				height="3.73"
			/>
			<rect
				className="f building-fill no-stroke"
				x="280.64"
				y="228.83"
				width="11.22"
				height="6.77"
			/>
			<rect
				className="f building-fill no-stroke"
				x="208.16"
				y="124.81"
				width="11.22"
				height="8.27"
				transform="translate(-13.01 24.57) rotate(-6.38)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="242.13"
				y="126.73"
				width="11.22"
				height="19.41"
				transform="translate(-28.12 74.05) rotate(-16.1)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="223.32"
				y="139.8"
				width="6.26"
				height="8.27"
				transform="translate(-14.6 26.07) rotate(-6.38)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="216.14"
				y="144.31"
				width="2.92"
				height="3.86"
				transform="translate(-14.91 25.1) rotate(-6.38)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="210.91"
				y="145.8"
				width="2.92"
				height="3.86"
				transform="translate(-15.11 24.53) rotate(-6.38)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="388.31"
				y="180.48"
				width="3.33"
				height="4.8"
			/>
			<rect
				className="f building-fill no-stroke"
				x="420.48"
				y="247.15"
				width="4.69"
				height="7.47"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="377.6 261.87 377.6 266.61 374.88 268.27 375.05 274.52 377.6 275.9 377.6 280 386.56 280 386.56 261.87 377.6 261.87"
			/>
			<rect
				className="f building-fill no-stroke"
				x="425.24"
				y="151.87"
				width="9.6"
				height="6.71"
				transform="translate(-0.95 307.78) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="415.63"
				y="161.87"
				width="4.11"
				height="2.23"
				transform="translate(-8.67 301.7) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="417.71"
				y="164.75"
				width="4.11"
				height="2.23"
				transform="translate(-10.02 303.67) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="419.63"
				y="167.31"
				width="4.11"
				height="2.23"
				transform="translate(-11.21 305.47) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="423.95"
				y="173.22"
				width="4.11"
				height="2.23"
				transform="translate(-13.99 309.55) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="426.03"
				y="175.78"
				width="4.11"
				height="2.23"
				transform="translate(-15.14 311.45) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="427.79"
				y="178.34"
				width="4.11"
				height="2.23"
				transform="translate(-16.36 313.14) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="431"
				y="159.21"
				width="9.6"
				height="6.71"
				transform="translate(-4.3 313.1) rotate(-39.34)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="436.47"
				y="166.07"
				width="9.6"
				height="6.71"
				transform="translate(-7.41 318.11) rotate(-39.34)"
			/>
			<polygon
				className="f building-fill no-stroke"
				points="412.49 146.32 408.75 141.76 408.75 141.76 405.44 137.72 396.38 145.13 399.7 149.18 402.5 146.88 406.24 151.44 412.49 146.32"
			/>
			<rect
				className="f building-fill no-stroke"
				x="419.88"
				y="129.8"
				width="1.92"
				height="4.8"
				transform="translate(5.49 280.76) rotate(-37.12)"
			/>
			<rect
				className="f building-fill no-stroke"
				x="423.56"
				y="134.44"
				width="1.92"
				height="4.8"
				transform="translate(3.44 283.92) rotate(-37.12)"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="113.16 266.75 113.16 264.35 132.84 264.35 132.84 266.75"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="134.72 266.75 134.72 264.35 146.47 264.35 146.47 266.75"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="154.58 280.85 156.95 280.48 158.78 292.08 156.41 292.45"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="160.42 297.75 160.82 300.12 153.96 301.28 153.56 298.92"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="148.8 302.72 151.36 302.72 151.04 300.16"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="144.96 282.56 150.72 281.28 151.04 283.84"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="178.24 298.24 178.24 314.56 175.68 314.56 175.68 319.68 184.32 319.36"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="181.12 298.24 181.12 315.2 183.36 315.2"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="195.84 317.12 199.36 325.76 194.88 327.04 196.48 332.16"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="198.72"
				y1="329.6"
				x2="199.68"
				y2="331.84"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="198.4 316.16 202.24 324.8 204.16 324.16 204.8 327.68 201.28 328.64 201.92 331.2"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="203.52"
				y1="336"
				x2="222.4"
				y2="343.04"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="197.76 344 199.68 337.6 196.8 336.64"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="195.84 348.8 194.24 353.92 191.36 353.28"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="193.6 359.68 196.48 358.4 210.24 363.52 210.24 365.76"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="209.28 367.68 212.8 368.32 214.4 361.92"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="224 346.24 227.2 346.88 226.56 350.72"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="224.96 344.32 227.84 344.64 230.08 342.4"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="320.64 362.56 317.12 364.16 317.12 374.72"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="324.16 359.36 328.32 357.44 349.12 357.76"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="322.56"
				y1="365.44"
				x2="328"
				y2="361.92"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="327.68 364.48 332.16 361.92 338.56 370.88 335.04 373.76"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="332.16 376.32 326.72 378.24 320.64 369.28 324.48 366.72"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="387.2 288 376.64 287.68 376.64 279.36 372.16 279.36 372.16 264.64 376 264.64 376 261.76"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="386.88"
				y1="264"
				x2="388.48"
				y2="264"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="387.84"
				y1="267.84"
				x2="387.84"
				y2="280.32"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="398.72 263.68 398.72 267.2 402.56 267.2"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="405.44 266.88 411.2 266.88 411.2 264"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="295.04 259.84 290.56 263.68 296.96 271.04 304.96 263.36"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="300.16"
				y1="255.36"
				x2="304.96"
				y2="260.48"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="319.36 255.68 313.28 255.68 313.28 261.12 318.4 261.12"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="356.16 255.68 350.08 255.68 350.08 261.12 355.2 261.12"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="274.24 256 268.16 256 268.16 261.44 273.28 261.44"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="235.84 256 229.76 256 229.76 261.44 234.88 261.44"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="201.95 256 195.87 256 195.87 261.44 200.99 261.44"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="398.4 279.68 398.4 282.88 411.84 282.88"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="421.44 176.32 429.12 187.2 438.08 182.08"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="413.76 159.68 411.52 161.92 419.52 174.4"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="412.16 157.44 411.52 155.52 403.2 157.12 392.32 143.36 419.52 124.16"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="423.04 125.76 426.24 130.56 432.32 130.24"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="441.28"
				y1="137.92"
				x2="443.84"
				y2="137.28"
			/>
			<path
				className="g feature-stroke no-fill"
				d="M445.12,137.92s3.52,11.52,1.6,16l7.36,9.6s-4.16,8.32-8,9.92c0,0-5.76,4.48-6.4,6.4"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="235.84 128 231.36 113.92 241.92 111.68"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="237.44 134.4 243.84 158.4 251.2 156.8"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="254.4"
				y1="155.52"
				x2="267.2"
				y2="152.96"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="213.12 117.76 201.6 120.96 206.4 139.52"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="207.04 142.72 210.56 155.52 219.2 152.64"
			/>
			<line
				className="g feature-stroke no-fill"
				x1="224"
				y1="152"
				x2="232"
				y2="149.76"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="329.6 142.61 323.2 141.33 321.71 149.01 322.99 149.44"
			/>
			<polyline
				className="g feature-stroke no-fill"
				points="324.69 150.08 335.36 152.85 337.92 144.96 331.95 143.25"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M126.59,138.43s2.4-2.4,2.88-4.8,4.8-.48,4.8-.48"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M224.51,158.11a6.64,6.64,0,0,1-2.4,4.8c-2.4,1.92.48,3.36,1.92,4.32"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M202.91,178.27s3.84,4.32,2.88,5.76,8.64-1.92,9.6,1.92,14.88-1.92,7.68-8.64"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M180.35,200.35s11-.48,16.8-6.72"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M161.63,320.83s.48-4.32,3.36-4.32c0,0,3.12-3,1.41-6.43s10.88-3.84,10.88-3.84"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M166.83,324.8s-3-7-1.71-9.17"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M184.75,310.72s1.92-5.12,5.12-1.71,3.2,2.14,3.84,1.71,4-1.92,5.33,0c0,0,1.71-2.13,3.2-1.92a39.67,39.67,0,0,0,5.12,0"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M209.07,308s8.53-1.07,2.13-2.14l-6.19.86-1.92,2.13"
			/>
			<polyline
				className="h feature-stroke no-fill"
				points="219.09 311.15 222.72 310.72 227.41 307.73 231.25 307.95"
			/>
			<line
				className="h feature-stroke no-fill"
				x1="227.63"
				y1="313.49"
				x2="222.72"
				y2="310.72"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M239.57,346.56s2.56-3.63,4.91-2.13,2.35-4.48,2.35-4.48l3.91-2.21,4.41-2.49"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M250.67,340.59s.85-2.35-.64-2.56"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M254.72,351.25s8.75-4.69,11.31,5.55"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M233.17,366.19l.43-3.2s4.27-.43,6.19-2.56,4.26-2.78,6-2.14,4.27-4.48,7.89-3"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M241.71,358.51a13.74,13.74,0,0,1-4.7,9.81"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M219.09,370l-.21-4.27s6.19-6,8.11-4.69"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M222.08,362.35s-.64-7.26,4.48-6.62"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M217.6,370.45s.85,4.06,3.41,2.56"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M235.31,399s-1.5-4.69-.64-7.89-3.63.64,0-7.26"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M254.29,384.53s-13.44-.42-7-9.81,9.18-3.84,9.18-3.84"
			/>
			<polyline
				className="h feature-stroke no-fill"
				points="266.24 367.89 267.73 364.69 272.21 364.48 277.12 360.85 281.81 361.07"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M297.39,405.23s4.05-6.62,5.76-6.4,1.49-2.56,1.49-2.56"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M373.55,366.61s-.86-11.94,4.69-13.22"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M381.44,359.15s.85-4.91,3.84-3.84a2.37,2.37,0,0,0,3.41-1.92s2.78-1.5,3.84.42"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M394.24,353.6s6.4-.64,7.68,8.53"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M398.72,342.72a11.9,11.9,0,0,1,12.59.43"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M375,343.57,374,342.29l1.28-1.06L374,339.31s1.5-3.84,6.83-3"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M386.77,335.89s4.91-5.33,8.54-2.77"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M287.79,222.19s-7-2.14-15.58,8.1c0,0-.85,9,3.84,12.59,0,0,1.5,4.48.22,5.76"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M271.79,246.93s4.26,7,8.1,6.19,4.06.43,4.06.43l1.06-3.2"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M279.47,257.39s-5.55,4.9-.43,9.38"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M286.93,260.59s-2.34,9,3.2,10.24"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M356.69,260.59l.22,2.77s-4.06,4.91.64,6S368,272.53,370.13,280"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M421.55,224.32s2.77-5.12,4.48-4.91-.86-8.1,6.61-6"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M413.87,224.11s-5.34-2.56-4.91-5.34-3.84-3.62-3.84-3.62"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M391.89,226.67s3.2-10.67,7.47-10.67c0,0,6.19,10.24,9.81,10.88"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M401.07,205.76a16.3,16.3,0,0,0-1.5-4.48c-1.06-1.92-.85-3.63.22-4.48s-9.82-23.47,1.92-25c0,0,5.33-6.4,8.53-5.12s3.84,5.76,6.19,5.76"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M330.67,162.24s2.56,5.55,5.76,5.76l5.33,9.39s3.2,3.41,7.47-1.71"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M361.81,124.69a51.4,51.4,0,0,0-13.65,4.06c-6,3-4.91.21-4.91.21"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M306.13,111.47a18.78,18.78,0,0,1,8.11,12.8s1.49,3.41,9,3a162.85,162.85,0,0,1,16.85.22l1.07.85"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M322.13,118.72s5.76,7.68,10,8.53"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M300.16,157.33s9,.86,10.88,5.76,4.48,10.88,13.23,6.62"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M305.07,227.52s-1.71,5.33.85,6.4.85,4.05.85,4.05,0,2.14,1.28,2.35,1.28,3.84-.42,4.48-2.14,6,1.06,6.61"
			/>
			<line
				className="h feature-stroke no-fill"
				x1="311.47"
				y1="235.2"
				x2="308.05"
				y2="240.32"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M326.27,287.71s-2.88,4.32-5.28,2.88-4.8,3.84-4.8,3.84L308,296.35l-1,3.84"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M332,295.39s1-6.72,3.36-6.72,1.91-4.8,1.91-4.8,3.36-3.36,4.8-2.88"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M342.1,308.35a55.28,55.28,0,0,0,3.36-5.28"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M352.66,306s2.4-4.8,4.32-3.84"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M306.11,316s-.48,7.2-1.92,8.16-1.92,4.32-1.92,4.32-1,3.83-3.84,5.75-1.92,7.2-.48,8.16"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M310,324.67s-5.28,1.44-7.68,3.84"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M242.27,294.91s-4.8,3.36-1.92,8.64"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M201.6,319s2.88-3.2,6.72-1.28,4.16-1,4.16-1"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M202.88,322.24s2.88-2.56,5.12-.64,6.4-1.6,6.4-1.6"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M196.16,321.28a10.6,10.6,0,0,0-6.4,3.2"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M189.76,322.56s-2.88-1-3.2,1.6"
			/>
			<path
				className="h feature-stroke no-fill"
				d="M196.8,323.84a3.75,3.75,0,0,0-4.48,1"
			/>
			<path
				className="a background-fill no-stroke"
				d="M87.68,189.12s.64-2.88,1.6-2.24,1.49-1.07,1.49-1.39,1.82-1.17,2.78.86c0,0,3,0,2.66.85s.22,3.31,1.07,3.52,4,3.41,3.84,5.87a15.42,15.42,0,0,1-1.17,6.29,4.28,4.28,0,0,0-1.6,3.84s-.43.75-1,.75,1.6,5.12-2.24,5.12c0,0,0,2.77-2,2.66s-2.67.22-3-3-1.38-5.76-2.24-6.72-.32-4.06,0-4.38S85.12,196.05,87.68,189.12Z"
			/>
			<path
				className="a background-fill no-stroke"
				d="M307.52,403.84c.27-.82,1-3.09,5.65-2.88s2.56-1,2.56-1a2.82,2.82,0,0,1,2.88,1.92c.75,2.13,1.5,4.69-.53,4.69s.64,1.82,1.39,1.82-.43,3.41-3.42,1.92c0,0-3.94.1-4.9.32S306.13,408.11,307.52,403.84Z"
			/>
			<path
				className="a background-fill no-stroke"
				d="M405.6,236.48s2.08-.48,1.92,1.92,1,2.88,1,2.88.16,8-5.92,6.24-1.6-7.36-.32-7.52S405.92,237.76,405.6,236.48Z"
			/>
			<path
				className="i border-stroke no-fill"
				d="M471,208.32s19.84-61.44-56.32-85.76S247,97.6,221.44,100.8s-80,5.76-136.32,32.64S33.52,220.83,35.2,233.92c0,0,14.4,97.92,25,117.76s11.52,39,68.48,51.84,76.16,10.56,76.16,10.56h97.6s104,2.24,132.16-107.52Z"
			/>
		</SVGOverlay>
	),
	golova: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .c,.d,.e,.f,.g,.h,.i,.j,.l,.o,.p,.q,.r,.s{strokeMiterlimit:10;}
            .c,.d,.l,.p{strokeWidth:0.64px;}
            .d{stroke-dasharray:4.12 4.12;}
            .e{strokeWidth:0.36px;}
            .f{strokeWidth:1.92px;}
            .g{strokeWidth:1.6px;}
            .h,.q,.r{strokeWidth:0.32px;}
            .i{strokeWidth:2.24px;}
            .j{strokeWidth:1.28px;}
            .m{strokeMiterlimit:10;}
            .m{strokeWidth:0.32px;}
            .n{opacity:0.4;}
            .n{isolation:isolate;}
            .o,.s{strokeWidth:0.96px;}
            .p{stroke-dasharray:3.84;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M61.83,225.22S73,213,76,213.55s-.59-5.83,11.78-14.58-1.18-3.5,25.34-25.67c0,0,10-23.92,15.92-23.92,0,0,7.07-11.66,17.68-9.33L155,134.8s12.37-7,17.09-1.75,6.48-4.08,8-3.79,3.84-8.46,15-7.29c0,0,5.31.29,6.19-3.5s24.75-9,24.75-9,5.9,6.71,7.66,7,5,4.67,5,4.67l1.48-3.5,5.6,5.25,5-2.33-.59-2.92,2.35,2.63,4.13-1.17-1.18-7a3.13,3.13,0,0,1,3.24,2c.89,2.33,2.95-2,2.95-2l.29-2.33-1.77-.3-.88-2.33h2.06s2.07-10.5,3.24-10.5S291.67,81.42,302,86.09c0,0,10.31-5.54,12.08-7S361.16,57,372.71,59.55C383.9,62,414.85,51.83,416.79,154c1.77,92.75,10,179.82,9.27,193.93-1.62,29.59-22,60.65-34.61,68.21-51.06,30.62-98.63,42.23-125.71,33.39-21-6.85-45.46-25.17-71.85-46.36-19.73-15.84-41.21-33.1-59.49-49.45-17.13-15.32-25.4-36.45-37.71-59.27C59.56,225.59,61.83,225.22,61.83,225.22Z"
			/>
			<path
				className="b field-fill"
				d="M236.58,114.75a16.94,16.94,0,0,0,5.46-2.47c2.1-1.66,1.68,5.78,1.68,5.78l-2.94-2.48-2.52,1.24Z"
			/>
			<path
				className="b field-fill"
				d="M246,112.68s4.55.82,4.77,2.25,3,0,2.6-2.46-.65-8.2-5-6.76-2.16,2.25-3.46,2.05S246,112.68,246,112.68Z"
			/>
			<polyline
				className="c background-stroke no-fill"
				points="283.57 117.13 284.17 118.96 282.34 119.55"
			/>
			<line
				className="d background-stroke no-fill"
				x1="278.42"
				y1="120.82"
				x2="233.33"
				y2="135.39"
			/>
			<polyline
				className="c background-stroke no-fill"
				points="231.37 136.03 229.54 136.62 228.95 134.79"
			/>
			<polyline
				className="c background-stroke no-fill"
				points="227.61 130.65 227.02 128.82 228.85 128.23"
			/>
			<line
				className="d background-stroke no-fill"
				x1="232.77"
				y1="126.96"
				x2="277.86"
				y2="112.39"
			/>
			<polyline
				className="c background-stroke no-fill"
				points="279.82 111.75 281.64 111.16 282.24 112.99"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M222.48,373s-1.55-6.18,8.5-9.27"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M239.28,355.83s-10.43-4.83-10,8.89"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M244.11,367.42s2.71-6.95,7.92-2.51"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M258.4,362.4s-5.21-3.09-7.72,1"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M261.3,374.37s1.93,7-.19,9.66"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M260.72,396s2.71,6,3.87,7.15"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M254.35,425s.58,8.5-9.27,7.34-.78.19-.78.19-11-5.4-6.56-9.65"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M230.2,420.15s3.29,6.76,2.13,9.08"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M351.12,377.66s-.58-6.18,3.86-6.18"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M353.82,375.92s.39-10.62,10.43-4.44"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M374.69,375.73s2.31,6.18,5,7.14"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M374.88,365.49s-1-3.48-8.11-3.09"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M360.58,350.62s-4.44,3.67-4.24,7.72"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M351.89,363.36a16.49,16.49,0,0,0-5,5.41c-1.93,3.48-3.86,2.71-3.86,2.71"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="393.81 313.53 394 326.28 406.56 333.43"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="410.61 336.32 417.18 339.22 423.94 328.6"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="393.62 309.86 393.62 301.36 406.94 301.56 421.04 310.06 418.53 314.11"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="369.28 288.61 369.08 284.94 376.04 284.94 376.04 286.88"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="369.28 290.74 369.28 292.67 375.85 292.67 375.85 289.19"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M252.22,322.42s-1.16-6.57,4.64-6.19,4.25-3.86,4.25-3.86"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M264.2,305.8s-1.16-10.81,5-9.27"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M254.54,311.21s-5.79,5.8-7.73,6.57"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M213.21,262.92s2.31-3.86,8.49-1.93"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M225.57,251.33s-1.16,3.09-1.55,4.25-5,4.64-5,4.64"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M241.41,256.74s-1.94,4.64-.39,6.95"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M238.32,267.17s4.25,3.09,3.86,6.57"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M235.61,270.07s6.38,2.9,2.13,7.73"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M311.88,385l-.23-.84s5.55-5.38,12-5.38l1.42,4.83-12.17,3.94-.23-.72-2.66.83.57,2.94,2.89-.72-.12-.78,12.34-3.38,1.3,3.88-9.17,2.84-.17-.61-2.71.77.73,3.06,2.78-.61-.06-1,9.28-2.39,1.3,4.61-13.3,4.11s-6.09,1.17-2.77,8"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="312.6 407.81 309.58 408.84 312.14 418.46 318.94 416.54 317.13 410.17 316.37 410.32"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M339.76,373.46l-.6-.74s-10.11,4.88-11.47,4.73l1.21,4.89,12.67-3.4-.45-.6,2.87-1,1.05,3.25-2.56.74-.61-.59-12.22,3.85,1.21,4.15,9.35-2.67-.45-.89,2.87-.59,1.06,2.81-2.72,1-.3-.74-9.06,3,1.36,4.59,12.22-3.7,2.42-3.26,13.88-4.14,8,24.43L351.23,414s1.21,7.11-4.68,9l.15,1.34"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="352.44 413.73 355.31 422.02 325.73 430.9 323.46 422.46 317.73 424.39 315.62 417.58"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M334.63,428.24l-.3-2.08S328,429.27,325,422l-2.56.74"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M337.8,396.26l8.3-2.52,2.42,8-1.06.45s-3.77-6.52-9.06-4.74Z"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M325.43,399.66l.6,1.63s-7.09,1.48-4.68,8.74l-1.66.59-2.26-8.44Z"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="307.81 355.04 309.9 360.69 332.36 354.15 331.31 350.28"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="339.07 349.58 353.89 345.42 349.55 331.13 345.81 332.03 345.81 333.51"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="337.12 335.9 336.67 334.7 339.52 333.81 340.26 335.15"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="334.88 337.53 333.68 332.92 338.62 331.73"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M340.12,332.18a6.2,6.2,0,0,0,4.34-1.34"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="281.75 347.01 281 355.64 286.54 355.34"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M274.86,374.23s-3.44,13.54,8.39,16.37l.6-1.93-1.8-.45"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M287.89,389.56l-2.25-.45v1.79l11.09.3s4.94-1.79,6.58-4.17c0,0,9.29-8,10-7.89"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="289.84 330.66 283.1 329.32 283 332.29 282.8 338.54"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="289.69"
				y1="333.48"
				x2="283"
				y2="332.29"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="295.23"
				y1="336.16"
				x2="299.12"
				y2="336.01"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="295.38"
				y1="334.82"
				x2="298.52"
				y2="334.53"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="299.42 338.54 298.52 333.63 295.83 333.48"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="282.8"
				y1="336.01"
				x2="289.84"
				y2="336.61"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M309.8,323.41a3.29,3.29,0,0,0-1.08,2.16"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M309.41,328.37a4.24,4.24,0,0,0,2.37,1.57"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M314.69,329.1S316,328,316,326.9"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M315.33,323.66a2.36,2.36,0,0,0-2.37-1.23"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M315.48,320.42s-5.33-3.19-8.84,2.26"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M305.8,325s-.2,4.22,1.58,5.25"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M311.23,332.54s3.66.54,5.34-1.18"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M319,327.14s.39-3.53-1.53-5.25"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M327.42,322s-.9-3,1.65-3.12a14.83,14.83,0,0,0,4.34-.89s2.25-.45,2.7,2.82c0,0,1.94.6,3-.15l.75,2.38"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="297.02 323.8 297.62 322.76 289.84 319.19 288.94 321.42"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M286.54,327.67l-3-.6s1.34-7.44,2.69-10.12l2.25,1.2-1.35,3.12"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="285.14"
				y1="320.02"
				x2="287.27"
				y2="320.92"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="285.64"
				y1="318.24"
				x2="287.89"
				y2="319.46"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="285.98"
				y1="317.4"
				x2="288.17"
				y2="318.52"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M287.59,312.75l2.75,1.39s4.44-6.58,8.09-7.59L297,304S290.4,307.34,287.59,312.75Z"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M289.16,313.64s4.61-7.08,8.54-8.31"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M294.57,316.84l4.1,2.12,4.21-5.07L300.24,309S294.52,315.89,294.57,316.84Z"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="296.31"
				y1="317.74"
				x2="301.25"
				y2="310.98"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M309.34,311.86l-1.68,1-7.14-11.72s13.26-8.42,16.18-8.64,6.68-.79,5.89,1.67l-.84,2.68s-7.3-2.4-10.28-.78L301.31,302"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M314.17,295.4s-.11-2.68,8.08-.62"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M322,296s-6.63-2.57-5.9-.39"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M324.67,296s5.67,1.56,5.9,3.68"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M324.11,297.09s4.77,1.06,5.11,2.9"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M338.82,303.56l1.46-1.61s-13.42-10.49-15.22-6.92l-1.29,3.29s4.77,3.18,7.53,1.06S338.82,303.56,338.82,303.56Z"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M335.23,302.67l1.06.89s-.9,2.68.85,3.74a2.22,2.22,0,0,0,2.86-.16l1.29,1.56"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M341.07,317.9l1.46,6.59a91.67,91.67,0,0,1,10.38-1.79s-3.7-13.72-11.34-19.42l-1.51,1.57,8.92,8.31"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M348.08,322.37s3.77.95,3.71-3.07"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="268.35 315.57 274.4 304.96 273.52 304.66 268.65 313.48 276.76 319.31 281.04 311.69"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="284.44 311.54 276.02 306.01 274.4 308.4"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M277.21,302.57l-1.48-1.05S279,295,288.57,289.57l6.64,10.76"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="279.57"
				y1="304.06"
				x2="286.65"
				y2="308.1"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M289,290.76s-8.71,4-12.69,10.76"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M296.39,290.16l-1.77,1.2,4.13,6.72s14-11.2,19.48-9.71l-.59-5.53"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M317.78,286.87a32.7,32.7,0,0,0-11.95,3.44"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M293.29,289.57l-1.33-2.4s7.23-4.63,12.25-5.08l1.18,2.1A29,29,0,0,0,293.29,289.57Z"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M317.05,280.9A43.09,43.09,0,0,0,293,288.22"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M321.32,287.32s-.59-9.26,6.5-5.53c0,0,22.57,6.43,21.84,11.06"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M247.69,291.06s4.43-4,4.87-5.83a9.66,9.66,0,0,1,1.92-3.44l.89-3.43a5.25,5.25,0,0,1,2.51-2.24c1.62-.6,4.28-6.43,3.83-7.63s2.81-3.88,2.81-3.88"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M287.09,247.87s-.88-2.54-5.16-1.5-6.35.3-6.35.3-3.39,1.05-3.69,1.65-6.34,2.09-4.87,4.93c0,0-1.32,3-1.77,3.14s1.63,2.54,1.63,2.54"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M265.25,256.39a10.22,10.22,0,0,0-1.77,3.58,13.15,13.15,0,0,1-2.21,4.19l-.59,2.24"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M265.11,261.77s-1.48-1-3.55,3"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="317.49"
				y1="250.86"
				x2="322.65"
				y2="251.9"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="317.05"
				y1="256.39"
				x2="322.5"
				y2="256.39"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="332.24"
				y1="257.43"
				x2="326.93"
				y2="256.98"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="332.39"
				y1="252.05"
				x2="327.37"
				y2="252.35"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="327.23"
				y1="249.66"
				x2="326.78"
				y2="259.38"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="323.09"
				y1="249.06"
				x2="322.5"
				y2="258.93"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M273.66,238.6a30.87,30.87,0,0,1-5.46,3.74c-2.5,1.19-1.32,1.49-1.32,1.49s-2.22,1.35-2.51.75.29.6.29.6-1.62,0-1.77,4.48a4.53,4.53,0,0,1-2.95,3.59,2.39,2.39,0,0,0-1.33,3.59"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M253.15,260.87s2.51-6.87,4.87-5.53"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="335.19 211.55 326.05 212.6 326.19 229.78"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="339.33 210.8 350.25 209.31 350.54 226.05"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="355.56 224.85 355.41 209.46 367.81 209.61"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="371.64 210.5 384.63 213.79 382.86 229.49"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="346.56 165.37 345.08 164.32 344.2 165.37"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="339.77 174.19 338.74 175.68 340.06 176.58"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="347.59 181.36 349.51 181.81 349.66 180.46"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="355.26 171.65 355.85 170.3 354.52 169.55"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="352.16 151.32 351.13 152.67 352.61 153.71"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="359.98 157.6 361.61 158.2 362.49 157.15"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="366.92 149.68 367.95 148.03 365.89 147.14"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="358.51 142.65 357.18 141.76 356.29 143.55"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M255.37,198s-9.74-11.81-28.19-6-22.72,1.95-22.72,1.95"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M228.81,218s18.15-6.73,21.84-9.72"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M187.49,203.63s7.53,7.17,9.15,7.17,10.92,6.73,10.92,6.73,4.28,3.14,8.26,2.09"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M411.38,184.5s-5.4,6.95-5,10.43"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M251.84,152.44s-3.09-7-5.41-6.57-1.16-5.8-1.16-5.8-1.93-4.63-9.66-6.56"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M221.71,347.53a8.62,8.62,0,0,0-3.1,8.49"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M229.43,347.14s5.8-1.93,7.73.77,8.11,0,8.11,0l3.86,2.32"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="142.13 354.48 175.35 321.64 170.71 316.62"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="162.6 307.74 148.69 293.44 135.94 305.8 134.01 303.87 129.38 308.12"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="126.29 310.44 120.11 317.01 122.81 322.8 117.4 328.98"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="126.8"
				y1="210.38"
				x2="112.46"
				y2="225.63"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="110.21 227.88 108.87 228.78 109.09 240.44 110.66 241.78"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="112.45 243.58 116.94 248.06 115.82 249.19"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="114.25"
				y1="250.76"
				x2="111.78"
				y2="253.67"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="114.7 256.81 127.7 270.05 135.54 261.97"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="137.56"
				y1="259.95"
				x2="144.06"
				y2="253.22"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="145.85 252.1 163.11 234.38 162.44 233.26"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="161.32 232.14 156.84 228.1 162.89 222.05"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="164.46"
				y1="220.92"
				x2="175.89"
				y2="209.49"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="165.58"
				y1="198.94"
				x2="172.98"
				y2="206.12"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="162.89 196.25 155.49 189.3 148.54 189.07 141.37 196.03"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="139.8"
				y1="197.82"
				x2="131.06"
				y2="207.02"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="152.56 279.92 151.01 277.99 156.42 273.35 157.58 275.67"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="159.51 277.12 160.67 279.29 155.89 283.64 154.87 282.62"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="206.64 322.99 207.99 324.35 211.27 321.45"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="212.63 319.32 218.03 314.3 215.52 311.98"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="214.17 310.25 211.08 307.93 208.96 309.47"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M214.17,287.45s18.74-8.11,21.25-7.72"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M237.35,287.84l.77,2.12a88.65,88.65,0,0,0-11.59,12.17"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="222.28 301.17 214.94 294.02 227.31 282.43 230.78 285.71 232.71 283.98 234.65 286.3"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M233.87,272.77s3.87,3.87,2.71,5.41"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M275,101.83s-5.8,5.41-2.32,8.11"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M268.45,109.17s-1.93-12,4.63-13.13c0,0,5,4.24,8.12-3.48"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M299.35,91.4s1.16-8.5,10.82-1.16l5.41.77"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M313.26,85.22s6.57-3.09,8.11-5.41"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M233.68,122.3s-5-6.18-7.34-6.18c0,0-4.25-8.11-7-1.93,0,0-5,5.8-8.12,4.25"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M166.08,141.23s10.81-2.7,12.74-1.54,7.73-4.25,7.73-4.25-1.93-10.43,3.86-10.82c0,0,6.57,5.8,8.5,5.41"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M199.3,123.46s-10.43-1.16-8.89,1.16"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M164.14,134.28s6.57-1.93,9.66,2.7,5,2.71,5,2.71"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M138.26,149s-4.25,1.93-4.63,6.18-4.25,1.93-4.25,1.93"
			/>
			<path
				className="f road-stroke no-fill"
				d="M128.7,347.43,158,317.59s4.93-4.06,22.89-14.78,41.14-23.47,60.56-28.68,22-7,22-7a152.78,152.78,0,0,0,17.67-8.11c8.4-4.64,22.89-6.09,29.26-6.09s36.8-.28,57.95,7.54,32.16,14.48,42.3,22.31l10.14,7.82"
			/>
			<path
				className="g road-stroke"
				d="M132.85,344.24s10.5-1.49,21.64-14.49c3.57-4.17,8.33-9.07,11.78-16"
			/>
			<path
				className="h road-stroke road-fill"
				d="M95.48,290.74,89.2,278.18a120.33,120.33,0,0,1-2.9-31.68c.67-15,11.61-30.52,16-36.12,6.13-7.74,18.13-20,33.42-33.22,7.06-6.11,14.12-13.37,22.89-18.83,9.78-6.1,21.85-10.3,33.32-14.49,11.75-4.29,22.93-8.55,34.48-12.46,58.66-19.86,106.33-35,164.28-63.16a6.36,6.36,0,0,1,4.63,2.9s-74.17,33.42-112.42,45.49c-37.39,11.8-83.15,28.68-83.15,28.68s-29.47,10.5-38.53,16.23c-5.67,3.58-15.68,12-24.34,20.28-10.11,9.6-19.7,18.83-19.7,18.83S95,222.79,91.71,240.32a62.49,62.49,0,0,0-1,18.11C92.58,276.11,95.48,290.74,95.48,290.74Z"
			/>
			<path
				className="f road-stroke no-fill"
				d="M148.69,169.82s32.3,17.82,46,25.11c4.35,2.32,10.65,5.41,16.71,5.12,2.55-.12,15.41-8.24,26.08-5.22,14.67,4.17,27.56,20.74,22.31,38.25l-9,18.25s-5.79,12.17-1.44,25.79c0,0,2.31,8.4-8.41,14.2s-12.45,15.35-12.45,15.35-3.77,12.17-19.71,25.5c-14.17,11.86-18.12,18.94-21.15,26.94-2.67,7.07-6.08,15.94-14.77,26.37"
			/>
			<path
				className="f road-stroke no-fill"
				d="M415.05,169.63s-38.82,31.29-28.39,117.63c0,0,5.79,31.87-1.74,41.72"
			/>
			<path
				className="f road-stroke no-fill"
				d="M208.76,331.88c1.34,1.65,7.57,5.9,14.2,7.82,3.91,1.13,5.79,1.16,11,2.32,8.6,1.91,20,3.59,28.1,1.45a74.46,74.46,0,0,1,17.39-2.61c5.83-.17,13.33.68,19.41-.29,17.13-2.72,35.21-12,50.41-13.91a87.24,87.24,0,0,1,26.37.58,50.71,50.71,0,0,1,22.6,9.28,57.25,57.25,0,0,0,23.18,9.85"
			/>
			<path
				className="i road-stroke no-fill"
				d="M305,340s-3.67-13.32-3.29-16.8,4.06-7.46,7.53-8.31,9.66.19,11.4,3.48c1.47,2.77,4.25,15.26,4.25,15.26"
			/>
			<path
				className="j road-stroke no-fill"
				d="M331,96.61s7.53,12.17,6.38,19.71-2.32,6.37,3.47,17.38,4.93,20,.29,27-14.48,13.9-6.95,24.33S338,207.87,338,207.87"
			/>
			<path
				className="j road-stroke no-fill"
				d="M390.14,213.67s-12.25-6.19-35.93-6c-8.49.07-18.45.2-29.84,2.8,0,0-25.79,2.32-37.67-.87s-17.38-3.48-28.39,1.74"
			/>
			<path
				className="j road-stroke no-fill"
				d="M386.66,231.92s-44.91,2.61-49.83,5.22-11.3,2.89-11,13.9-4.93,20.57-4.93,20.57-2,5.8-.87,7.83"
			/>
			<path
				className="j road-stroke no-fill"
				d="M256.57,344.05s4.63-71,71.85-64.61c0,0,21.15,2.41,25.5,12.36,0,0-.36,6-.72,7.63-.28,1.23-1.19,2.8-1,4.92.19,2.47-1.06,9.95-1.06,9.95"
			/>
			<path
				className="j road-stroke no-fill"
				d="M338,369.93s22.41-6.57,17-44.42c0,0-5.65-16.11-8.88-20.72-1.73-2.46-6.61-6.19-9.13-7.82-3-1.94-12.89-6.09-12.89-6.09s-9.13-.87-13.19,2-10.52,5.32-13.76,7.53a54.52,54.52,0,0,0-9.37,8.65c-2.14,2.8-5.4,7-6.56,12.5-1,4.61-2.18,18.69-2.18,18.69s.87,15.36-4.2,26.08-3.47,21,5.65,24.63,18.88,1,20.72-.87c3.21-3.21,9.12-8.41,9.12-8.41s3.38-3.93,14.35-6.37Z"
			/>
			<path
				className="j road-stroke no-fill"
				d="M254.93,207.68s-26.66,13.52-34,13.13-31.68.78-39.79,17c0,0-.26,6.24-8.89,13.14-7.72,6.18-2.56,10.55-1.35,13.71.91,2.35-.16,7.32,0,9.85.18,2.76,2.43,7.9,2.51,10.62.15,4.56-4,17.77-4,17.77s-1.44,5.71-.58,7.54c1.14,2.44,8.5,5.6,8.5,5.6s26.65,9.46,30.32,15.64"
			/>
			<path
				className="j road-stroke no-fill"
				d="M88.81,266.4s12.75,4.06,24.34-9.85"
			/>
			<line
				className="j road-stroke no-fill"
				x1="187.32"
				y1="191.65"
				x2="164.14"
				y2="219.46"
			/>
			<path
				className="j road-stroke no-fill"
				d="M402.89,184.69s-23.63-14.64-30.33-15.64c-7.73-1.16-20.67-4.06-29-12.56"
			/>
			<path
				className="j road-stroke no-fill"
				d="M351.89,89.08s6.57,7.34,25.88,3.87,27.82-1.16,31.68,1.54"
			/>
			<path
				className="j road-stroke no-fill"
				d="M385.12,251s1.93-4.25,13.52,6.56a155.16,155.16,0,0,0,23.18,17.77"
			/>
			<path
				className="j road-stroke no-fill"
				d="M387.43,330.53s-5.58,22.33-.77,31.67c2.66,5.17,2.47,11.4,1.55,23.18-.78,9.85-1.16,16.24-1.16,18,0,5.6-4.64,16.8-9.66,19.89"
			/>
			<path
				className="j road-stroke no-fill"
				d="M99.24,300.78s17,1.55,24-4.63S135,292.33,139,292.28c5.36-.06,8.5-2.7,16.62-13.52,7.15-9.54,15.83-9.66,15.83-9.66"
			/>
			<path
				className="j road-stroke no-fill"
				d="M277,361.43s5,19.32,23.95,12c9.11-3.53,15.06,4.25,15.06,4.25"
			/>
			<path
				className="j road-stroke no-fill"
				d="M239.47,433.67s2.71,5.8,12.75,1.94,15.84-1.16,19.71,4.24,7.72,9.66,25.11,9.28"
			/>
			<rect
				className="k building-fill"
				x="181.79"
				y="156.69"
				width="15.03"
				height="10.2"
				transform="translate(-42.08 69.72) rotate(-18.82)"
			/>
			<rect
				className="k building-fill"
				x="203.85"
				y="173.09"
				width="8.13"
				height="9.29"
				transform="translate(-46.22 76.58) rotate(-18.82)"
			/>
			<rect
				className="k building-fill"
				x="355.39"
				y="241.47"
				width="9.29"
				height="8.13"
				transform="matrix(0, -1, 1, 0, 113.06, 604.58)"
			/>
			<rect
				className="k building-fill"
				x="397.95"
				y="317.5"
				width="7.02"
				height="9.37"
				transform="translate(77.68 722.35) rotate(-89.77)"
			/>
			<rect
				className="k building-fill"
				x="397.22"
				y="302.21"
				width="4.12"
				height="5.49"
				transform="translate(92.73 703.02) rotate(-89.77)"
			/>
			<rect
				className="k building-fill"
				x="365.61"
				y="240.93"
				width="5.21"
				height="4.56"
				transform="translate(123.53 610.45) rotate(-89.77)"
			/>
			<rect
				className="k building-fill"
				x="214.57"
				y="160.54"
				width="16.55"
				height="9.67"
				transform="translate(-41.44 80.73) rotate(-18.82)"
			/>
			<rect
				className="k building-fill"
				x="219.93"
				y="149.75"
				width="9.41"
				height="19.56"
				transform="translate(-39.46 81.03) rotate(-18.83)"
			/>
			<rect
				className="k building-fill"
				x="296.46"
				y="198.98"
				width="8.88"
				height="7.73"
				transform="translate(-4.02 6.09) rotate(-1.15)"
			/>
			<rect
				className="k building-fill"
				x="311.56"
				y="151.23"
				width="4.55"
				height="3.96"
				transform="translate(-3.02 6.34) rotate(-1.15)"
			/>
			<rect
				className="k building-fill"
				x="351.75"
				y="193.94"
				width="6.08"
				height="4.91"
				transform="translate(-3.86 7.14) rotate(-1.15)"
			/>
			<rect
				className="k building-fill"
				x="358.3"
				y="188.32"
				width="3.2"
				height="2.8"
				transform="translate(-3.72 7.24) rotate(-1.15)"
			/>
			<rect
				className="k building-fill"
				x="324.51"
				y="123.79"
				width="4.55"
				height="3.96"
				transform="translate(-2.46 6.59) rotate(-1.15)"
			/>
			<rect
				className="k building-fill"
				x="325.83"
				y="111.74"
				width="5.71"
				height="4.97"
				transform="translate(-17.62 148.23) rotate(-24.77)"
			/>
			<rect
				className="k building-fill"
				x="321.05"
				y="149.15"
				width="6.1"
				height="5.4"
				transform="translate(-30.26 101.58) rotate(-17.03)"
			/>
			<rect
				className="k building-fill"
				x="295.55"
				y="151.27"
				width="6.1"
				height="5.4"
				transform="translate(-32 94.21) rotate(-17.03)"
			/>
			<rect
				className="k building-fill"
				x="277.53"
				y="196.28"
				width="7.34"
				height="7.34"
			/>
			<rect
				className="k building-fill"
				x="269.61"
				y="196.28"
				width="6.95"
				height="7.34"
			/>
			<rect
				className="k building-fill"
				x="272.7"
				y="213.28"
				width="6.18"
				height="6.76"
			/>
			<rect
				className="k building-fill"
				x="342.6"
				y="168.08"
				width="10.04"
				height="10.04"
				transform="translate(27.74 393.29) rotate(-61.01)"
			/>
			<rect
				className="k building-fill"
				x="329.32"
				y="282.89"
				width="7.25"
				height="8.37"
				transform="translate(-79.51 439.2) rotate(-61.02)"
			/>
			<rect
				className="k building-fill"
				x="339.3"
				y="288.24"
				width="7.25"
				height="8.37"
				transform="translate(-91.15 413.62) rotate(-56.06)"
			/>
			<rect
				className="k building-fill"
				x="349.93"
				y="271.36"
				width="7.25"
				height="11.96"
				transform="translate(-73.94 415.78) rotate(-56.06)"
			/>
			<polygon
				className="k building-fill"
				points="344.09 275.2 341.16 274.14 342.98 269.11 345.9 270.16 344.09 275.2"
			/>
			<rect
				className="k building-fill"
				x="377.6"
				y="153"
				width="3.12"
				height="8.07"
				transform="translate(58.05 412.6) rotate(-61.01)"
			/>
			<rect
				className="k building-fill"
				x="385.64"
				y="192.46"
				width="6.17"
				height="5.66"
				transform="translate(59.26 479.36) rotate(-67.44)"
			/>
			<rect
				className="k building-fill"
				x="403.85"
				y="304.71"
				width="6.17"
				height="5.66"
				transform="translate(-33.18 565.38) rotate(-67.44)"
			/>
			<rect
				className="k building-fill"
				x="410.81"
				y="308.17"
				width="6.17"
				height="5.66"
				transform="translate(-32.06 573.97) rotate(-67.45)"
			/>
			<rect
				className="k building-fill"
				x="414.96"
				y="326.81"
				width="5.19"
				height="4.77"
				transform="translate(-46.57 588.63) rotate(-67.46)"
			/>
			<rect
				className="k building-fill"
				x="390.74"
				y="186.04"
				width="4.22"
				height="3.87"
				transform="translate(68.56 478.66) rotate(-67.44)"
			/>
			<rect
				className="k building-fill"
				x="351.8"
				y="193.98"
				width="3.03"
				height="5.62"
				transform="translate(-3.85 7.07) rotate(-1.14)"
			/>
			<rect
				className="k building-fill"
				x="371.79"
				y="156.43"
				width="10.04"
				height="6.55"
				transform="translate(54.5 411.91) rotate(-61.01)"
			/>
			<rect
				className="k building-fill"
				x="351.32"
				y="124.32"
				width="7.8"
				height="4.32"
				transform="translate(38.91 331.72) rotate(-52.58)"
			/>
			<rect
				className="k building-fill"
				x="351.76"
				y="119.32"
				width="4.2"
				height="9.41"
				transform="translate(40.34 329.71) rotate(-52.58)"
			/>
			<rect
				className="k building-fill"
				x="352.65"
				y="121.12"
				width="5.05"
				height="6.75"
				transform="translate(40.48 330.94) rotate(-52.58)"
			/>
			<rect
				className="k building-fill"
				x="351.3"
				y="122.57"
				width="4.75"
				height="7.14"
				transform="matrix(0.61, -0.79, 0.79, 0.61, 38.59, 330.39)"
			/>
			<circle className="k building-fill" cx="358.27" cy="145.48" r="2.17" />
			<circle className="k building-fill" cx="364.25" cy="148.96" r="2.17" />
			<circle className="k building-fill" cx="355.47" cy="151.37" r="2.17" />
			<circle className="k building-fill" cx="361.45" cy="154.85" r="2.17" />
			<rect
				className="k building-fill"
				x="196.3"
				y="171.94"
				width="4.64"
				height="4.35"
				transform="translate(-44.95 71.94) rotate(-18.48)"
			/>
			<rect
				className="k building-fill"
				x="253.16"
				y="293.63"
				width="6.83"
				height="6.41"
				transform="translate(-134.46 264.72) rotate(-44.47)"
			/>
			<rect
				className="k building-fill"
				x="152.84"
				y="192.94"
				width="5.59"
				height="23.85"
				transform="translate(-99.45 171.35) rotate(-45.29)"
			/>
			<rect
				className="k building-fill"
				x="140.59"
				y="213.11"
				width="3.13"
				height="12.78"
				transform="translate(-113.84 166.08) rotate(-45.28)"
			/>
			<polyline
				className="l building-stroke no-fill"
				points="160.09 207 161.82 205.56 159.22 203.24"
			/>
			<rect
				className="k building-fill"
				x="138.62"
				y="216.51"
				width="6.51"
				height="10.22"
				transform="translate(-115.42 166.51) rotate(-45.28)"
			/>
			<rect
				className="k building-fill"
				x="128.16"
				y="222.2"
				width="6"
				height="8.27"
				transform="translate(-121.95 160.28) rotate(-45.28)"
			/>
			<rect
				className="k building-fill"
				x="122.36"
				y="227.98"
				width="6"
				height="8.27"
				transform="translate(-127.78 157.88) rotate(-45.28)"
			/>
			<rect
				className="k building-fill"
				x="115.25"
				y="224.73"
				width="4.56"
				height="3.76"
				transform="translate(-126.2 150.72) rotate(-45.29)"
			/>
			<rect
				className="k building-fill"
				x="125.58"
				y="314.82"
				width="4.56"
				height="4.57"
				transform="translate(-187.46 184.89) rotate(-45.29)"
			/>
			<rect
				className="k building-fill"
				x="119.49"
				y="330.09"
				width="4.56"
				height="4.57"
				transform="translate(-200.11 185.09) rotate(-45.29)"
			/>
			<rect
				className="k building-fill"
				x="130.61"
				y="309.8"
				width="4.56"
				height="4.57"
				transform="translate(-182.4 186.98) rotate(-45.29)"
			/>
			<polygon
				className="k building-fill"
				points="214.95 314.7 206.14 323.6 200.52 318.02 209.32 309.13 214.95 314.7"
			/>
			<polygon
				className="k building-fill"
				points="217.59 346.56 211.06 354.05 205.09 348.84 211.63 341.36 217.59 346.56"
			/>
			<rect
				className="k building-fill"
				x="294.67"
				y="309.1"
				width="7.71"
				height="7.92"
				transform="translate(-133.98 304.98) rotate(-45.29)"
			/>
			<polygon
				className="k building-fill"
				points="297.31 320.89 296.59 328.57 288.71 327.82 289.44 320.15 297.31 320.89"
			/>
			<polygon
				className="k building-fill"
				points="284.11 310.56 279.25 317.47 273.78 313.62 278.65 306.71 284.11 310.56"
			/>
			<rect
				className="k building-fill"
				x="288.86"
				y="329.81"
				width="7.71"
				height="7.92"
				transform="translate(-66.99 593.96) rotate(-84.63)"
			/>
			<rect
				className="m building-stroke no-fill"
				x="145.09"
				y="296.67"
				width="4.87"
				height="3.78"
				transform="translate(-168.45 193.37) rotate(-45.29)"
			/>
			<polygon
				className="l building-stroke no-fill"
				points="146.29 323.4 138.62 331.15 133.33 325.91 141 318.16 146.29 323.4"
			/>
			<rect
				className="k building-fill"
				x="148.18"
				y="316.66"
				width="4.87"
				height="3.78"
				transform="translate(-181.74 201.49) rotate(-45.29)"
			/>
			<rect
				className="k building-fill"
				x="144.4"
				y="330.18"
				width="11.14"
				height="9.11"
				transform="translate(-193.41 205.79) rotate(-45.28)"
			/>
			<rect
				className="k building-fill"
				x="116.71"
				y="233.64"
				width="6"
				height="8.27"
				transform="translate(-133.48 155.54) rotate(-45.28)"
			/>
			<rect
				className="k building-fill"
				x="114.3"
				y="230.73"
				width="21.77"
				height="2.73"
				transform="translate(-127.83 157.75) rotate(-45.28)"
			/>
			<polygon
				className="k building-fill"
				points="152.99 237.4 134 256.58 132.06 254.65 151.05 235.47 152.99 237.4"
			/>
			<circle className="k building-fill" cx="134.16" cy="254.52" r="4.64" />
			<circle className="n building-fill" cx="153.95" cy="305.32" r="2.61" />
			<circle className="n building-fill" cx="145.7" cy="313.58" r="2.61" />
			<circle className="k building-fill" cx="143.57" cy="320.63" r="2.22" />
			<circle className="k building-fill" cx="139.76" cy="324.44" r="2.22" />
			<circle className="k building-fill" cx="136.04" cy="328.16" r="2.22" />
			<circle className="k building-fill" cx="143.72" cy="244.96" r="4.64" />
			<circle className="k building-fill" cx="153.13" cy="235.54" r="4.64" />
			<polyline
				className="o building-stroke no-fill"
				points="148.59 300.2 153.95 305.32 142.99 316.14"
			/>
			<line
				className="o building-stroke no-fill"
				x1="145.7"
				y1="313.58"
				x2="151.3"
				y2="319.13"
			/>
			<line
				className="l building-stroke no-fill"
				x1="137.58"
				y1="321.64"
				x2="144.63"
				y2="330.04"
			/>
			<path
				className="k building-fill"
				d="M167.57,322.89a1.74,1.74,0,0,1,.22,2.45l-3.34,3.73a1.75,1.75,0,0,1-2.46.06h0a1.75,1.75,0,0,1-.22-2.46l3.34-3.73a1.75,1.75,0,0,1,2.46-.05Z"
			/>
			<path
				className="k building-fill"
				d="M149,341.33a1.75,1.75,0,0,1,.22,2.46l-3.34,3.73a1.76,1.76,0,0,1-2.47.05h0a1.74,1.74,0,0,1-.21-2.45l3.34-3.73a1.75,1.75,0,0,1,2.46-.06Z"
			/>
			<rect
				className="k building-fill"
				x="281.97"
				y="395.43"
				width="8.11"
				height="8.31"
			/>
			<rect
				className="k building-fill"
				x="283.13"
				y="343.95"
				width="10.91"
				height="6.95"
			/>
			<rect
				className="k building-fill"
				x="287.57"
				y="376.5"
				width="8.11"
				height="8.31"
			/>
			<rect
				className="k building-fill"
				x="359.43"
				y="387.58"
				width="2.7"
				height="2.77"
			/>
			<rect
				className="k building-fill"
				x="351.12"
				y="386.55"
				width="3.86"
				height="2.77"
				transform="translate(-36.25 36.39) rotate(-5.61)"
			/>
			<rect
				className="k building-fill"
				x="359.93"
				y="392.36"
				width="3.71"
				height="2.76"
				transform="translate(-68.16 75.83) rotate(-10.94)"
			/>
			<rect
				className="k building-fill"
				x="361.34"
				y="393.48"
				width="1.83"
				height="3.92"
				transform="translate(-68.44 75.9) rotate(-10.94)"
			/>
			<rect
				className="k building-fill"
				x="277.44"
				y="375.06"
				width="8.31"
				height="8.11"
				transform="matrix(0.14, -0.99, 0.99, 0.14, -133.98, 603.44)"
			/>
			<rect
				className="k building-fill"
				x="265.59"
				y="328.52"
				width="5.52"
				height="5.39"
				transform="translate(-97.92 549.3) rotate(-81.76)"
			/>
			<rect
				className="k building-fill"
				x="297.99"
				y="375.3"
				width="8.08"
				height="7.79"
				transform="translate(-77.02 76.98) rotate(-12.9)"
			/>
			<polygon
				className="k building-fill"
				points="329.45 349.51 309.54 355.43 306.02 343.58 325.93 337.66 329.45 349.51"
			/>
			<rect
				className="k building-fill"
				x="327.86"
				y="320.66"
				width="9.41"
				height="7.12"
				transform="translate(-78.59 108.18) rotate(-16.55)"
			/>
			<rect
				className="k building-fill"
				x="339.6"
				y="313.66"
				width="7.44"
				height="4.17"
				transform="translate(-75.75 110.94) rotate(-16.56)"
			/>
			<rect
				className="k building-fill"
				x="340.24"
				y="320.32"
				width="8.92"
				height="3.39"
				transform="translate(-77.46 111.56) rotate(-16.55)"
			/>
			<rect
				className="k building-fill"
				x="353.9"
				y="311.83"
				width="5.76"
				height="4.68"
				transform="translate(-74.68 114.58) rotate(-16.54)"
			/>
			<polygon
				className="k building-fill"
				points="360.87 323.08 356.43 323.32 356.1 317.35 360.55 317.11 360.87 323.08"
			/>
			<rect
				className="k building-fill"
				x="270.48"
				y="391.6"
				width="8.71"
				height="8.54"
				transform="translate(-206.94 407.61) rotate(-56.63)"
			/>
			<rect
				className="k building-fill"
				x="298.02"
				y="376.46"
				width="9.59"
				height="4.71"
				transform="translate(-76.91 77.14) rotate(-12.9)"
			/>
			<polygon
				className="k building-fill"
				points="318.6 415.87 312.4 417.28 310.34 408.3 316.54 406.88 318.6 415.87"
			/>
			<polygon
				className="k building-fill"
				points="364.53 404.5 355.88 408.31 353.08 401.97 361.74 398.15 364.53 404.5"
			/>
			<rect
				className="k building-fill"
				x="299.72"
				y="343.39"
				width="4.59"
				height="6.47"
				transform="translate(-69.75 76.15) rotate(-12.9)"
			/>
			<polygon
				className="k building-fill"
				points="322.17 353.45 318.02 354.68 313.53 339.58 317.68 338.35 322.17 353.45"
			/>
			<polygon
				className="k building-fill"
				points="351.78 343.28 338.03 347.37 334.87 336.74 348.62 332.66 351.78 343.28"
			/>
			<rect
				className="k building-fill"
				x="283.13"
				y="343.95"
				width="3.67"
				height="9.66"
			/>
			<rect
				className="k building-fill"
				x="284.19"
				y="343.18"
				width="2.61"
				height="10.43"
			/>
			<rect
				className="k building-fill"
				x="287.28"
				y="343.18"
				width="2.61"
				height="6.57"
			/>
			<rect
				className="k building-fill"
				x="290.57"
				y="343.18"
				width="2.61"
				height="6.57"
			/>
			<polygon
				className="k building-fill"
				points="352.54 344.32 348.76 345.44 344.91 332.49 348.68 331.37 352.54 344.32"
			/>
			<polygon
				className="k building-fill"
				points="342.71 347.25 338.47 348.51 334.62 335.55 338.86 334.29 342.71 347.25"
			/>
			<polygon
				className="k building-fill"
				points="346.71 345.29 344.06 346.07 340.55 334.26 343.2 333.47 346.71 345.29"
			/>
			<polygon
				className="p background-stroke no-fill"
				points="265.17 269.73 239.72 277.29 238.1 271.86 263.55 264.3 265.17 269.73"
			/>
			<polygon
				className="k building-fill"
				points="310.57 290.87 299.95 297.37 296.18 291.2 306.79 284.7 310.57 290.87"
			/>
			<polygon
				className="k building-fill"
				points="295.12 298.98 284.5 305.48 280.72 299.31 291.34 292.81 295.12 298.98"
			/>
			<polygon
				className="k building-fill"
				points="291.14 276.88 279.23 284.18 275.45 278.01 287.36 270.72 291.14 276.88"
			/>
			<polygon
				className="k building-fill"
				points="316.04 297.03 327.21 300.77 326.67 302.26 332.31 314.19 323.94 318.05 322.16 313.95 320.26 313.3 320.73 311.52 314.68 309.38 314.14 310.99 312.3 310.33 307.91 312.53 304.11 303.98 315.21 299.41 316.04 297.03"
			/>
			<polygon
				className="k building-fill"
				points="292.37 301.67 289 303.73 284.77 296.83 288.14 294.77 292.37 301.67"
			/>
			<path
				className="k building-fill"
				d="M268.45,337.29a1.16,1.16,0,0,1-1.16,1.16h-1.74a1.16,1.16,0,0,1-1.16-1.16h0a1.16,1.16,0,0,1,1.16-1.16h1.74a1.16,1.16,0,0,1,1.16,1.16Z"
			/>
			<path
				className="k building-fill"
				d="M272.89,336.52a1.16,1.16,0,0,1-1.16,1.15H270a1.16,1.16,0,0,1-1.16-1.15h0a1.15,1.15,0,0,1,1.16-1.16h1.74a1.15,1.15,0,0,1,1.16,1.16Z"
			/>
			<circle className="k building-fill" cx="262.65" cy="354.67" r="2.51" />
			<rect
				className="k building-fill"
				x="238.9"
				y="303.1"
				width="3.67"
				height="10.43"
				transform="translate(-25.39 21.63) rotate(-4.89)"
			/>
			<rect
				className="k building-fill"
				x="234.07"
				y="305.7"
				width="13.33"
				height="8.51"
				transform="translate(-15.64 12.81) rotate(-2.95)"
			/>
			<rect
				className="k building-fill"
				x="224.14"
				y="288.57"
				width="3.67"
				height="10.43"
				transform="translate(-144.52 283.37) rotate(-50.82)"
			/>
			<rect
				className="k building-fill"
				x="218.14"
				y="288.42"
				width="13.33"
				height="8.51"
				transform="translate(-143.52 269.66) rotate(-48.9)"
			/>
			<polygon
				className="k building-fill"
				points="276.48 273.52 284.02 285.28 290.11 281.37 282.57 269.62 276.48 273.52"
			/>
			<rect
				className="k building-fill"
				x="297.8"
				y="270.85"
				width="8.31"
				height="7.92"
				transform="translate(-47.99 64.48) rotate(-11.3)"
			/>
			<rect
				className="k building-fill"
				x="285.56"
				y="261.24"
				width="5.56"
				height="3.75"
				transform="translate(-45.98 61.62) rotate(-11.3)"
			/>
			<rect
				className="k building-fill"
				x="275.5"
				y="264.33"
				width="5.56"
				height="3.75"
				transform="translate(-92.67 162.75) rotate(-28.15)"
			/>
			<rect
				className="k building-fill"
				x="272.85"
				y="251.81"
				width="6.73"
				height="6.68"
				transform="matrix(0.85, -0.53, 0.53, 0.85, -93, 183.86)"
			/>
			<rect
				className="k building-fill"
				x="297.24"
				y="256.94"
				width="3.67"
				height="9.08"
				transform="translate(-29.19 37.74) rotate(-6.89)"
			/>
			<rect
				className="k building-fill"
				x="292.2"
				y="258.27"
				width="14.48"
				height="6.59"
				transform="translate(-29.22 37.82) rotate(-6.89)"
			/>
			<rect
				className="k building-fill"
				x="269.69"
				y="252.54"
				width="9.51"
				height="4.61"
				transform="translate(-87.75 159.55) rotate(-28.14)"
			/>
			<rect
				className="k building-fill"
				x="281.3"
				y="249.49"
				width="3.58"
				height="4.61"
				transform="translate(-85.3 163.32) rotate(-28.15)"
			/>
			<rect
				className="k building-fill"
				x="325.99"
				y="284.8"
				width="8.67"
				height="3.24"
				transform="translate(-80.3 436.56) rotate(-61.01)"
			/>
			<rect
				className="k building-fill"
				x="334.43"
				y="395.99"
				width="3.35"
				height="28.33"
				transform="translate(-93.47 99.26) rotate(-14.77)"
			/>
			<rect
				className="k building-fill"
				x="329.99"
				y="398.97"
				width="13.64"
				height="25.4"
				transform="translate(-103.48 113.25) rotate(-16.58)"
			/>
			<rect
				className="k building-fill"
				x="324.33"
				y="404.94"
				width="25.59"
				height="13.47"
				transform="translate(-103.47 113.34) rotate(-16.58)"
			/>
			<polygon
				className="k building-fill"
				points="352.97 409.31 322.57 418.36 321.4 414.44 351.8 405.39 352.97 409.31"
			/>
			<rect
				className="k building-fill"
				x="329.72"
				y="404.55"
				width="16.12"
				height="17.96"
				transform="translate(-103.97 113.6) rotate(-16.58)"
			/>
			<rect
				className="k building-fill"
				x="326.74"
				y="406.27"
				width="20.3"
				height="10.93"
				transform="translate(-103.5 113.27) rotate(-16.58)"
			/>
			<rect
				className="k building-fill"
				x="334.5"
				y="399.51"
				width="2.43"
				height="24.44"
				transform="translate(-190.36 485.74) rotate(-58.82)"
			/>
			<polygon
				className="k building-fill"
				points="330.29 419.62 332.36 420.76 344.18 400.6 342.11 399.46 330.29 419.62"
			/>
			<line
				className="q feature-stroke no-fill"
				x1="419.53"
				y1="221.2"
				x2="421.51"
				y2="218.58"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="420.65 288.37 420.19 289.06 419.74 289.74 419.28 290.42 418.82 291.11"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="419.29 287.33 418.84 288.01 418.38 288.69 417.92 289.38 417.46 290.06"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="417.9 286.25 417.45 286.93 416.99 287.62 416.53 288.3 416.07 288.99"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="416.6 285.25 416.14 285.93 415.69 286.61 415.23 287.29 414.77 287.98"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="415.13 284.12 414.68 284.8 414.23 285.48 413.77 286.17 413.31 286.85"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="413.86 283.13 413.41 283.81 412.95 284.49 412.49 285.18 412.03 285.87"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="412.43 282.03 411.98 282.71 411.52 283.39 411.06 284.08 410.6 284.76"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="410.99 280.93 410.54 281.6 410.09 282.28 409.63 282.98 409.18 283.67"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="409.58 279.87 409.15 280.55 408.7 281.24 408.25 281.94 407.8 282.64"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="408.16 278.83 407.73 279.51 407.3 280.21 406.86 280.91 406.42 281.62"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="406.74 277.82 406.32 278.5 405.9 279.2 405.46 279.92 405.03 280.63"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="405.29 276.82 404.89 277.51 404.47 278.21 404.05 278.93 403.63 279.65"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="403.82 275.83 403.42 276.52 403.02 277.23 402.6 277.96 402.19 278.68"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="402.36 274.88 401.98 275.58 401.58 276.3 401.18 277.03 400.78 277.76"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="400.87 273.94 400.5 274.65 400.12 275.37 399.72 276.11 399.33 276.85"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="399.35 273.01 398.98 273.72 398.61 274.44 398.23 275.19 397.84 275.94"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="397.86 272.14 397.51 272.85 397.15 273.58 396.77 274.33 396.4 275.08"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="396.33 271.26 395.99 271.98 395.64 272.71 395.28 273.47 394.92 274.23"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="394.76 270.39 394.43 271.11 394.09 271.85 393.73 272.61 393.38 273.38"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="393.25 269.58 392.93 270.3 392.6 271.05 392.25 271.81 391.91 272.59"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="391.7 268.78 391.39 269.5 391.07 270.25 390.73 271.02 390.4 271.8"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="390.1 267.97 389.8 268.7 389.49 269.45 389.16 270.23 388.84 271.01"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="388.53 267.2 388.23 267.93 387.93 268.68 387.61 269.46 387.3 270.25"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="386.98 266.46 386.69 267.19 386.4 267.94 386.09 268.74 385.78 269.53"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="385.38 265.72 385.11 266.45 384.82 267.21 384.52 268 384.21 268.8"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="383.74 264.98 383.47 265.71 383.19 266.47 382.89 267.27 382.6 268.07"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="382.17 264.29 381.9 265.02 381.63 265.78 381.34 266.58 381.06 267.38"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="380.59 263.61 380.33 264.34 380.07 265.11 379.79 265.91 379.5 266.71"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="378.97 262.93 378.72 263.66 378.46 264.43 378.18 265.24 377.91 266.04"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="377.3 262.24 377.06 262.98 376.8 263.74 376.54 264.56 376.27 265.37"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="375.69 261.6 375.46 262.33 375.21 263.1 374.94 263.91 374.68 264.73"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="374.11 260.97 373.88 261.71 373.64 262.48 373.38 263.29 373.12 264.11"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="372.49 260.35 372.26 261.08 372.02 261.85 371.77 262.67 371.52 263.49"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="370.82 259.71 370.6 260.45 370.37 261.22 370.12 262.04 369.87 262.86"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="369.12 259.08 368.9 259.81 368.67 260.58 368.43 261.41 368.18 262.23"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="367.48 258.49 367.28 259.23 367.07 260.01 366.84 260.84 366.62 261.67"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="365.81 257.94 365.62 258.68 365.43 259.46 365.22 260.3 365.02 261.14"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="364.11 257.42 363.94 258.16 363.77 258.95 363.58 259.79 363.39 260.63"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="362.39 256.93 362.24 257.68 362.08 258.46 361.9 259.31 361.73 260.15"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="360.65 256.47 360.52 257.21 360.37 258 360.21 258.85 360.05 259.7"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="358.96 256.05 358.83 256.79 358.69 257.58 358.55 258.43 358.4 259.29"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="357.24 255.65 357.13 256.39 357 257.18 356.87 258.04 356.74 258.9"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="355.52 255.28 355.42 256.02 355.3 256.81 355.18 257.67 355.06 258.53"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="353.79 254.92 353.69 255.67 353.59 256.46 353.48 257.32 353.37 258.19"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="352.05 254.6 351.97 255.34 351.88 256.13 351.77 257 351.68 257.86"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="350.31 254.29 350.23 255.03 350.15 255.82 350.06 256.69 349.97 257.56"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="348.57 254 348.5 254.75 348.43 255.54 348.35 256.41 348.27 257.28"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="346.83 253.74 346.77 254.48 346.7 255.27 346.63 256.14 346.56 257.01"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="345.09 253.49 345.04 254.23 344.98 255.02 344.92 255.9 344.86 256.77"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="343.37 253.26 343.32 254 343.27 254.79 343.22 255.67 343.17 256.54"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="341.6 253.05 341.57 253.78 341.52 254.58 341.48 255.45 341.44 256.33"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="339.83 252.85 339.8 253.58 339.77 254.38 339.73 255.25 339.69 256.13"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="338.08 252.66 338.06 253.4 338.03 254.19 338 255.07 337.97 255.95"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="336.35 252.5 336.33 253.23 336.31 254.03 336.29 254.91 336.27 255.79"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="334.64 252.35 334.63 253.08 334.62 253.87 334.6 254.76 334.59 255.64"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="332.86 252.21 332.85 252.94 332.84 253.73 332.83 254.61 332.83 255.5"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="331.06 252.08 331.06 252.81 331.06 253.6 331.06 254.48 331.06 255.37"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="329.31 251.97 329.32 252.69 329.32 253.48 329.32 254.37 329.33 255.25"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="327.61 251.87 327.61 252.59 327.62 253.38 327.63 254.27 327.65 255.16"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="325.9 251.78 325.92 252.5 325.93 253.29 325.95 254.18 325.96 255.07"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="324.05 251.7 324.07 252.42 324.09 253.21 324.11 254.1 324.13 254.99"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="322.27 251.63 322.3 252.35 322.32 253.14 322.35 254.03 322.38 254.92"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="320.58 251.58 320.61 252.3 320.64 253.09 320.68 253.98 320.71 254.87"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="318.87 251.54 318.91 252.26 318.94 253.05 318.98 253.94 319.02 254.83"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="316.99 251.51 317.02 252.22 317.06 253.01 317.11 253.9 317.16 254.79"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="315.28 251.49 315.32 252.2 315.36 252.99 315.42 253.88 315.47 254.77"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="313.6 251.48 313.65 252.19 313.69 252.97 313.75 253.87 313.81 254.76"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="311.7 251.48 311.75 252.19 311.8 252.97 311.86 253.87 311.92 254.76"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="310.24 251.48 310.29 252.19 310.35 252.97 310.42 253.87 310.49 254.76"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="308.47 251.53 308.55 252.23 308.63 253.01 308.72 253.9 308.81 254.8"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="306.7 251.62 306.79 252.32 306.89 253.1 307 253.99 307.12 254.88"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="304.9 251.75 305.01 252.44 305.12 253.22 305.26 254.11 305.39 255"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="303.15 251.91 303.27 252.6 303.4 253.37 303.55 254.26 303.7 255.15"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="301.38 252.1 301.51 252.79 301.65 253.56 301.82 254.45 301.99 255.34"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="299.62 252.33 299.76 253.02 299.92 253.78 300.1 254.67 300.28 255.55"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="297.87 252.59 298.03 253.27 298.2 254.03 298.4 254.91 298.6 255.8"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="296.11 252.88 296.27 253.56 296.46 254.32 296.68 255.2 296.89 256.08"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="294.37 253.21 294.55 253.88 294.75 254.64 294.99 255.51 295.22 256.39"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="292.63 253.58 292.82 254.24 293.04 254.99 293.3 255.86 293.55 256.74"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="290.88 253.99 291.1 254.65 291.33 255.39 291.61 256.26 291.89 257.12"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="289.16 254.44 289.39 255.1 289.65 255.83 289.95 256.69 290.25 257.55"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="287.44 254.96 287.69 255.6 287.97 256.32 288.3 257.17 288.63 258.02"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="285.72 255.53 285.99 256.16 286.3 256.88 286.66 257.71 287.02 258.55"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="284.05 256.16 284.35 256.78 284.69 257.48 285.08 258.3 285.48 259.13"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="282.35 256.9 282.68 257.5 283.05 258.18 283.49 258.99 283.93 259.79"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="280.73 257.72 281.1 258.3 281.51 258.95 282 259.73 282.49 260.5"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="279.22 258.54 279.58 259.12 279.99 259.77 280.47 260.56 280.95 261.33"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="277.7 259.33 278.05 259.91 278.45 260.58 278.92 261.36 279.39 262.15"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="276.15 260.11 276.5 260.69 276.88 261.36 277.35 262.16 277.81 262.95"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="274.62 260.85 274.95 261.44 275.33 262.12 275.78 262.92 276.24 263.72"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="273.04 261.6 273.37 262.19 273.74 262.87 274.18 263.67 274.63 264.48"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="271.5 262.3 271.82 262.89 272.18 263.58 272.62 264.39 273.05 265.2"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="269.89 263.02 270.2 263.61 270.56 264.3 270.99 265.12 271.41 265.94"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="268.33 263.69 268.63 264.29 268.98 264.98 269.4 265.8 269.82 266.63"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="266.74 264.36 267.03 264.96 267.38 265.65 267.79 266.48 268.2 267.31"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="265.11 265.03 265.4 265.63 265.74 266.32 266.14 267.15 266.54 267.99"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="263.55 265.64 263.83 266.24 264.16 266.94 264.55 267.78 264.94 268.62"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="262.01 266.33 262.31 266.92 262.66 267.61 263.08 268.44 263.5 269.26"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="260.49 266.93 260.77 267.53 261.08 268.23 261.46 269.08 261.85 269.93"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="258.87 267.5 259.13 268.11 259.43 268.82 259.79 269.68 260.15 270.53"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="257.25 268.05 257.49 268.66 257.78 269.37 258.13 270.24 258.48 271.1"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="255.65 268.57 255.89 269.18 256.17 269.89 256.51 270.76 256.85 271.63"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="254 269.08 254.24 269.69 254.51 270.41 254.84 271.28 255.18 272.15"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="252.3 269.6 252.52 270.21 252.79 270.92 253.12 271.8 253.45 272.68"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="250.73 270.06 250.96 270.67 251.22 271.38 251.54 272.26 251.87 273.14"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="249.03 270.55 249.25 271.16 249.51 271.88 249.83 272.76 250.15 273.64"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="247.3 271.04 247.51 271.65 247.77 272.37 248.08 273.26 248.4 274.14"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="245.74 271.48 245.96 272.09 246.21 272.81 246.52 273.69 246.83 274.58"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="244.09 271.93 244.3 272.54 244.55 273.26 244.86 274.15 245.17 275.04"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="242.34 272.41 242.55 273.02 242.79 273.74 243.1 274.63 243.41 275.52"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="240.57 272.89 240.78 273.5 241.03 274.21 241.34 275.11 241.66 276"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="238.91 273.37 239.13 273.97 239.39 274.68 239.72 275.57 240.04 276.45"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="237.22 273.88 237.46 274.47 237.73 275.18 238.07 276.06 238.41 276.94"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="235.53 274.42 235.77 275.01 236.05 275.71 236.41 276.59 236.76 277.47"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="233.83 274.99 234.07 275.57 234.36 276.28 234.73 277.15 235.1 278.02"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="232.19 275.56 232.44 276.14 232.74 276.84 233.12 277.71 233.5 278.58"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="230.55 276.16 230.81 276.74 231.12 277.43 231.51 278.3 231.9 279.16"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="228.91 276.78 229.17 277.35 229.49 278.04 229.89 278.9 230.28 279.77"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="227.25 277.42 227.52 277.99 227.85 278.68 228.26 279.54 228.66 280.39"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="225.61 278.08 225.88 278.65 226.21 279.33 226.63 280.19 227.05 281.04"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="224 278.75 224.28 279.31 224.62 279.98 225.04 280.84 225.47 281.69"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="222.4 279.43 222.68 279.98 223.02 280.65 223.46 281.51 223.89 282.36"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="220.79 280.12 221.07 280.68 221.42 281.35 221.86 282.19 222.3 283.04"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="219.17 280.84 219.46 281.39 219.82 282.05 220.26 282.9 220.71 283.75"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="217.57 281.56 217.86 282.11 218.22 282.77 218.68 283.62 219.13 284.46"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="215.99 282.3 216.28 282.83 216.65 283.5 217.11 284.34 217.57 285.18"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="214.41 283.04 214.71 283.57 215.07 284.23 215.54 285.07 216.01 285.91"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="212.82 283.79 213.13 284.33 213.5 284.98 213.97 285.82 214.45 286.65"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="211.25 284.56 211.55 285.09 211.93 285.74 212.41 286.58 212.89 287.41"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="209.67 285.34 209.98 285.86 210.36 286.51 210.85 287.35 211.33 288.18"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="208.11 286.12 208.42 286.64 208.8 287.29 209.29 288.12 209.78 288.95"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="206.55 286.91 206.86 287.43 207.25 288.07 207.75 288.9 208.24 289.73"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="205 287.71 205.31 288.23 205.7 288.87 206.2 289.7 206.7 290.52"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="203.45 288.52 203.76 289.03 204.16 289.67 204.66 290.5 205.17 291.32"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="201.9 289.33 202.22 289.84 202.62 290.48 203.13 291.31 203.64 292.13"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="200.35 290.16 200.67 290.67 201.07 291.3 201.59 292.13 202.1 292.95"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="198.81 290.99 199.13 291.5 199.53 292.13 200.05 292.95 200.57 293.77"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="197.28 291.82 197.6 292.33 198 292.96 198.53 293.78 199.05 294.6"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="195.76 292.66 196.08 293.16 196.49 293.79 197.01 294.61 197.54 295.43"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="194.24 293.51 194.56 294.01 194.97 294.63 195.5 295.45 196.03 296.27"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="192.7 294.37 193.02 294.87 193.43 295.49 193.97 296.31 194.5 297.12"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="191.17 295.23 191.5 295.73 191.91 296.35 192.45 297.17 192.98 297.98"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="189.66 296.1 189.99 296.59 190.4 297.21 190.94 298.02 191.48 298.84"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="188.16 296.96 188.49 297.44 188.9 298.06 189.45 298.88 189.99 299.69"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="186.66 297.83 186.98 298.31 187.4 298.93 187.95 299.75 188.49 300.56"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="185.12 298.72 185.45 299.21 185.87 299.82 186.42 300.63 186.97 301.44"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="183.61 299.61 183.94 300.09 184.36 300.7 184.91 301.52 185.47 302.33"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="182.12 300.49 182.45 300.97 182.87 301.58 183.43 302.39 183.98 303.2"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="180.65 301.37 180.98 301.84 181.4 302.45 181.96 303.26 182.52 304.07"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="179.08 302.3 179.41 302.78 179.84 303.38 180.4 304.19 180.96 305"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="177.53 303.23 177.87 303.71 178.29 304.31 178.85 305.12 179.42 305.93"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="176.06 304.13 176.39 304.6 176.81 305.2 177.38 306.01 177.95 306.82"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="174.64 304.99 174.97 305.46 175.4 306.06 175.97 306.87 176.54 307.68"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="173.13 305.92 173.46 306.38 173.89 306.99 174.47 307.79 175.04 308.6"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="171.59 306.87 171.93 307.33 172.36 307.93 172.94 308.74 173.51 309.54"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="170.15 307.77 170.49 308.23 170.92 308.83 171.5 309.63 172.08 310.44"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="168.73 308.67 169.07 309.12 169.5 309.72 170.09 310.52 170.68 311.32"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="167.18 309.66 167.51 310.11 167.95 310.71 168.54 311.5 169.13 312.31"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="165.75 310.58 166.09 311.03 166.53 311.62 167.13 312.42 167.72 313.21"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="164.28 311.54 164.62 311.99 165.07 312.57 165.67 313.37 166.27 314.16"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="162.81 312.51 163.16 312.96 163.6 313.54 164.21 314.33 164.82 315.12"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="161.38 313.49 161.72 313.93 162.18 314.5 162.79 315.29 163.41 316.07"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="159.97 314.46 160.32 314.9 160.78 315.47 161.41 316.25 162.03 317.02"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="158.51 315.51 158.87 315.93 159.34 316.49 159.99 317.26 160.63 318.03"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="157 316.72 157.42 317.08 157.97 317.56 158.73 318.21 159.49 318.86"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="155.78 317.96 156.2 318.32 156.75 318.8 157.51 319.45 158.28 320.1"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="154.56 319.2 154.98 319.56 155.53 320.03 156.3 320.69 157.06 321.34"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="153.34 320.44 153.76 320.8 154.31 321.27 155.08 321.93 155.84 322.58"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="152.13 321.68 152.54 322.04 153.1 322.51 153.86 323.17 154.63 323.82"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="150.91 322.92 151.32 323.28 151.88 323.75 152.64 324.41 153.41 325.06"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="149.69 324.17 150.11 324.52 150.66 324.99 151.43 325.65 152.19 326.31"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="148.48 325.4 148.89 325.76 149.44 326.23 150.21 326.89 150.97 327.55"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="147.26 326.65 147.67 327 148.22 327.47 148.99 328.13 149.76 328.79"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="146.04 327.89 146.45 328.24 147 328.71 147.77 329.37 148.54 330.03"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="144.83 329.13 145.23 329.48 145.78 329.95 146.55 330.61 147.32 331.27"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="143.61 330.37 144.02 330.72 144.57 331.19 145.34 331.85 146.11 332.51"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="142.39 331.61 142.8 331.96 143.35 332.43 144.12 333.09 144.89 333.75"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="141.18 332.85 141.58 333.2 142.13 333.67 142.9 334.33 143.67 334.99"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="139.96 334.09 140.36 334.44 140.91 334.91 141.68 335.57 142.46 336.23"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="138.74 335.33 139.14 335.68 139.69 336.15 140.47 336.81 141.24 337.48"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="137.52 336.57 137.92 336.92 138.47 337.39 139.25 338.05 140.02 338.72"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="136.31 337.81 136.71 338.16 137.25 338.63 138.03 339.29 138.8 339.96"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="135.09 339.06 135.49 339.4 136.04 339.87 136.81 340.53 137.59 341.2"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="133.87 340.3 134.27 340.64 134.82 341.11 135.59 341.77 136.37 342.44"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="132.66 341.54 133.05 341.88 133.6 342.35 134.38 343.01 135.15 343.68"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="131.44 342.78 131.83 343.12 132.38 343.59 133.16 344.25 133.94 344.92"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="130.22 344.02 130.62 344.36 131.16 344.83 131.94 345.5 132.72 346.16"
			/>
			<polyline
				className="q feature-stroke no-fill"
				points="129.01 345.26 129.4 345.6 129.94 346.07 130.72 346.74 131.5 347.4"
			/>
			<path
				className="r field-stroke no-fill"
				d="M131,347.53l27.38-28s4.92-4.06,22.89-14.78,41.14-23.47,60.55-28.68,22-7,22-7A153.36,153.36,0,0,0,281.49,261c8.4-4.63,22.89-6.08,29.26-6.08s36.8-.29,57.95,7.53,32.16,14.49,42.3,22.31l10.14,7.82"
			/>
			<path
				className="r field-stroke no-fill"
				d="M128.7,345.69,158,315.85s4.93-4.06,22.89-14.78S222,277.6,241.41,272.39s22-7,22-7a152.78,152.78,0,0,0,17.67-8.11c8.4-4.63,22.89-6.08,29.26-6.08s36.8-.29,57.95,7.53,32.16,14.49,42.3,22.31l10.14,7.82"
			/>
			<path
				className="r field-stroke no-fill"
				d="M135.75,342s10.14-1.88,28.1-26.51"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="135.13 343.18 135.18 343.45 135.23 343.73 135.28 344.01 135.33 344.29 135.38 344.57 135.43 344.84 135.48 345.12 135.53 345.4"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="136.52 341.71 136.6 342.11 136.69 342.51 136.78 342.92 136.87 343.32 136.95 343.72 137.04 344.12 137.13 344.52 137.22 344.93"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="138.06 340.86 138.16 341.26 138.26 341.66 138.36 342.06 138.46 342.46 138.56 342.86 138.66 343.25 138.75 343.65 138.85 344.05"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="139.48 340.02 139.59 340.42 139.7 340.82 139.81 341.21 139.92 341.61 140.03 342 140.14 342.4 140.25 342.8 140.36 343.19"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="140.97 339.09 141.09 339.49 141.22 339.88 141.34 340.27 141.46 340.66 141.58 341.06 141.7 341.45 141.82 341.84 141.94 342.24"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="142.35 338.18 142.49 338.57 142.62 338.96 142.75 339.35 142.88 339.74 143.01 340.13 143.14 340.52 143.27 340.91 143.4 341.3"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="143.79 337.17 143.94 337.56 144.08 337.94 144.22 338.33 144.36 338.72 144.5 339.1 144.64 339.49 144.78 339.87 144.92 340.26"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="145.13 336.18 145.29 336.56 145.44 336.95 145.59 337.33 145.74 337.71 145.89 338.09 146.04 338.48 146.19 338.86 146.34 339.24"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="146.49 335.13 146.65 335.51 146.81 335.89 146.97 336.27 147.13 336.65 147.29 337.02 147.45 337.4 147.61 337.78 147.77 338.16"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="147.83 334.03 148 334.4 148.17 334.78 148.34 335.15 148.51 335.53 148.68 335.9 148.85 336.28 149.02 336.65 149.19 337.02"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="149.1 332.94 149.28 333.31 149.45 333.68 149.63 334.05 149.81 334.42 149.99 334.79 150.17 335.16 150.35 335.53 150.53 335.9"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="150.38 331.78 150.56 332.15 150.75 332.52 150.94 332.88 151.13 333.25 151.31 333.61 151.5 333.98 151.69 334.35 151.88 334.71"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="151.64 330.59 151.83 330.95 152.03 331.31 152.22 331.67 152.42 332.03 152.62 332.39 152.81 332.76 153.01 333.12 153.21 333.48"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="152.86 329.38 153.06 329.74 153.26 330.09 153.47 330.45 153.67 330.81 153.88 331.17 154.08 331.52 154.28 331.88 154.49 332.24"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="154.04 328.15 154.25 328.51 154.46 328.86 154.68 329.21 154.89 329.57 155.1 329.92 155.31 330.27 155.52 330.62 155.74 330.98"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="155.21 326.89 155.43 327.24 155.65 327.59 155.87 327.94 156.09 328.28 156.31 328.63 156.53 328.98 156.75 329.32 156.97 329.67"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="156.33 325.62 156.56 325.96 156.79 326.3 157.01 326.64 157.24 326.98 157.47 327.33 157.7 327.67 157.93 328.01 158.16 328.35"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="157.43 324.31 157.66 324.64 157.9 324.98 158.14 325.31 158.37 325.65 158.61 325.99 158.85 326.32 159.08 326.66 159.32 327"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="158.49 322.97 158.74 323.3 158.98 323.63 159.23 323.96 159.47 324.29 159.72 324.62 159.96 324.95 160.21 325.28 160.45 325.61"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="159.51 321.61 159.77 321.93 160.02 322.26 160.27 322.58 160.53 322.9 160.78 323.23 161.03 323.55 161.29 323.88 161.54 324.2"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="160.5 320.22 160.77 320.53 161.03 320.85 161.29 321.17 161.56 321.48 161.82 321.8 162.08 322.12 162.34 322.43 162.6 322.75"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="161.45 318.81 161.72 319.12 161.99 319.43 162.26 319.74 162.53 320.05 162.8 320.36 163.07 320.67 163.34 320.98 163.62 321.28"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="162.36 317.36 162.64 317.66 162.92 317.96 163.2 318.26 163.48 318.57 163.76 318.87 164.04 319.17 164.32 319.47 164.6 319.77"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="163.22 315.91 163.51 316.2 163.8 316.5 164.09 316.79 164.38 317.08 164.66 317.38 164.95 317.67 165.24 317.96 165.53 318.26"
			/>
			<polyline
				className="r field-stroke no-fill"
				points="164.75 315.08 164.96 315.29 165.18 315.5 165.4 315.7 165.61 315.91 165.83 316.12 166.05 316.33 166.26 316.54 166.48 316.75"
			/>
			<path
				className="r field-stroke no-fill"
				d="M132,346.44s21.59-4.59,35.78-33.2"
			/>
			<path
				className="s border-stroke no-fill"
				d="M83,268.72c43.37,92.28,54.47,85.76,123.43,143.71s93.29,41.72,158.19,18,61.42-85.76,61.42-85.76-4.63-169.21-13.9-241.06-75-34.36-82.29-31.87L91.13,156.3s-51.57,19.7-27.23,73S83,268.72,83,268.72Z"
			/>
		</SVGOverlay>
	),
	sanatorium: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .c{opacity:0.2;}
            .c{isolation:isolate;}
            .d{strokeWidth:0.32px;}
            .d,.f,.h,.i{strokeMiterlimit:10;}
            .f{strokeWidth:0.36px;}
            .h{strokeWidth:1.07px;}
            .i{strokeWidth:0.96px;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M296.71,196.15s-3,6.56,4.62,10.11c0,0-1.06,8.69,3,9.93,0,0,3.08,4.32,4.26,5.91,0,0,5.93.83,7.47-.59,2.68-2.47,7.47-9.22,7.47-9.22s2.66-10.46-4.8-15.61-9.43-3.36-12.09-6.56l.89-.53a3.73,3.73,0,0,0,1.6-4.43s-3.38-.53-3.2,2l-1.25,1.77-2.13-3.9s-8.89-4.61-8.89,5.68Z"
			/>
			<path
				className="b field-fill"
				d="M466.49,289.26c-5.22-2.84-14.22,2.6-15.41,5.44s-5.21,6.62-5.21,6.62l1.06-4.38.48-3.43s-1.42-.35-1.42-.71.11-3.78-3.44-3.31a6,6,0,0,0-4.74,3.43l4.32,7.33-.53,2.49c-21.69,2.3-48.18-24.12-48.18-24.12-13.15-.53-24.35-8.16-24.35-8.16l-.71-4.26c-6.76-2.3-6.4-5.67-6.4-5.67L358,216.72l-13.68-9.22s2.31,37.07,3,47-.71,10.82-.71,10.82a6.07,6.07,0,0,0-5.69,5.32l-5,.17-.53-4.78h-7.11l-.54,3-11.55-.53s-3-9.93-8.18-10.29-16.89-6.56-16.89-6.56l-.71-5.67h-1.42a34,34,0,0,1-22.23-11.35c-8.17.53-4.68-3.08-4.68-3.08l12-8.45c1.54-.89,1.6-1.3.18-3.84a2.34,2.34,0,0,0-3.56-1l-13.57,8.48-.77-.62c.95-2.83-3.43-5.43-3.43-5.43a6.45,6.45,0,0,0-2.73-7.1c-8.3-6.38-6.16-19.62-6.16-19.62h3.79l7.53-5.27,4.81-5.26a8.19,8.19,0,0,1-3.8-5.54l-15.32,10.72s-.27-2.22-4-4c-2.94-1.69-2-3.37-2-3.37s3.29-3.2-6-12.42-14.31-5.23-14.31-5.23c-1.33,3.55-6.81-1.09-4.44-3s.27-7.13.27-7.13c-.89-4.08-8.63-8.33-9.87-9.75-4.58-5.22-4.62-9.84-5.42-12.42a14.58,14.58,0,0,0-5-6.47c-1.6-1.06-1.07-3.63-1.07-4.88s1.42-1,1.42-1l-.8-13.83c-45.8-19.51-78.63,7-78.63,7s-32.71,34.76-37.22,40S33.66,197,21.57,228.25c-10.43,26.92-.24,61.48-.24,61.48,10,46.11,68.27,89.62,68.27,89.62,41,35.94,133,36.56,133,36.56l191.26,1.92c21.86-.18,34.33-6.71,34.33-6.71,35.71-22.55,38.93-60.65,38.93-60.65C491.93,315.89,471.7,292.1,466.49,289.26Z"
			/>
			<path
				className="b field-fill"
				d="M260.46,183.57l-.79.88a9.33,9.33,0,1,0-4.5-8,8.85,8.85,0,0,0,.15,1.64l.46-.32Z"
			/>
			<path
				className="c field-fill"
				d="M260.28,183.44l.7-.77-4.09-5-.41.28A8.19,8.19,0,0,0,260.28,183.44Z"
			/>
			<path
				className="b field-fill"
				d="M260.28,183.44l.7-.77-4.09-5-.41.28A8.19,8.19,0,0,0,260.28,183.44Z"
			/>
			<path
				className="d road-stroke road-fill"
				d="M62.22,165.83s25,38.48,30.58,42.91c1.78,1.42,4.27,7.45,4.27,7.45A17.41,17.41,0,0,1,83.2,219s-4.62-1.24-6.4,1.42c0,0-16.53,14.9-20.09,18.62,0,0-4.8,3.9-8,4.79,0,0-11.55,6.21-2.84,14,0,0,10.49,3.72,12.62-6.39a11.42,11.42,0,0,0-4.09-8.15L77.33,222.4s1.07-2.31,7.83-1.24,12.26-2.31,12.62-3.19,2.49,9.4,2.49,9.4-.18,6.56,6.22,12.41c0,0,40.71,59.41,44.27,67.57,0,0,9.24,23.41,4.26,47.52s.36,27.49-23.64,26.43l.18,12.06,15.28.53-1.77,12.59,5.15,1.42.36-8.69S159.11,409,162.31,410l4.09.35-15.29-15.07s5.16-18.8,6.22-24.3c0,0,2.67-14.18,2.67-16.14,0,0,.53-11.35,16-6.56,0,0,24.71,8.16,37.69,11.18,0,0,5.87.88,5.87,8.69L219.38,382s4.26.53,3.91,5.85l.35,27.67,48.18,1.24V399.39h20.62V370.66h-1.77s-1.25-9.22,8.71-11.88c0,0,22.93-17.92,33.24-32.1,0,0,14.76-20.57,27.56-21.11,0,0,.35,17.38-7.11,24.3,0,0-13,20.93-11.56,30,0,0-2.67,20.93-19.73,35.65,0,0-11.74,11.7-11,20.39l2.66.36s3.2-15.43,11.2-20.22c0,0,18-17.38,19-37.07,0,0,1.25-14.54,10.67-26.6,0,0,10.67-14.54,7.82-27.84,0,0,9.78-.18,15.65,1.42s24.53,7.09,28.09,6.38c0,0-.54,25.89-4.09,32.1s-6.4,33.87,10.13,34.76,30.58-2.31,35.38-37.06l.53-24.12s17.78.35,21.69-1.24,16,4.07,16.89,6.56l-2.13-8.69a30.64,30.64,0,0,0-20.63-2.31s-17.24,4.08-46.57-2.13-44.45-12.06-51-11.35c0,0-5.86-2.3-5.86-15.6L354,212.82l-5-3.54,6.75,74.3s1.07,16.14-4.62,19.16S333,318.87,333,318.87s-5,4.26-14.58-3.9-22.76-18.26-22.76-18.26-5.51-3.37-4.62-16.32-22.22-23.23-22.22-23.23L247.29,246s-11-3.55-19.38-19-22.75-18.09-22.75-18.09-19.38-.89-27-23.94c0,0-8.35-15.61-11.2-17.2,0,0-3.55-2.48.54-7.81s4.09-11.17,1.06-17.91L165,132.84s-4.8-6,6-11.17l7.47-4.08-2.31-2.84-10.85,7.45s-23.64,18.62-28.44,25-6.93,5.49.35,13.47,3.92,4.44,3.92,4.44,4.26,3-1.25,9c0,0-3.55,3.73,1.25,11.88s17.06,34.23,17.06,34.23,3.91,5.68-3.73,9.76l-10.67,7.62s-8.53,5.85-3.73,14.37-3.2,13.47-12.09,11.17l-18-27.14s-5.68-8.68-5-13.47-5-11.71-5-11.71-4.8-5.5,2.84-12.23L129.6,173.1,123,166l-7.11,6.74,3.2,3.91-19.2,18.62s-7.64,7.8-14.4-2.84-19.91-30.5-19.91-30.5Z"
			/>
			<path
				className="b field-fill"
				d="M52.15,244.8s-11.85,4-4,10.64c0,0,7.11,1.9,7.58-4.25C55.7,251.19,54,245.28,52.15,244.8Z"
			/>
			<path
				className="b field-fill"
				d="M98.61,199.4s-4.51,2.37-7.35,1.19-1,0-1,0,4.74,5.67,6.88,4.73C97.19,205.32,96.24,201.53,98.61,199.4Z"
			/>
			<path
				className="b field-fill"
				d="M143.41,259.46l2.84,3.55s-3.32-.47-4,0A9.7,9.7,0,0,0,143.41,259.46Z"
			/>
			<path
				className="b field-fill"
				d="M135.11,274.6s-10.43-9.22,7.82-9.7c0,0,20.15,1.19,21.81,26.72,0,0,.24,11.83-11.61,11.35Z"
			/>
			<path
				className="b field-fill"
				d="M161,341l.24,5.68s3.79-2.6,6.63-1.66S161,342.7,161,341Z"
			/>
			<path
				className="b field-fill"
				d="M177.07,302.26s-13.75-6.62-21.1,7.33c0,0,7.11,9.7,4.74,21.76S173,342.93,173,342.93s23,5.21,29.86,10.17c0,0,18.49,4.26,28.21,4.26,0,0,42.67,4.49,54.28,1.65,0,0,19.2-1.89,37.69-27.9,0,0,2.85-7.57-1.66-10.88l-26.07-20.8s-3-3.79-7.47-.36c0,0-5.33,7.92-16.24,1.66s-26.9-12.18-26.9-12.18-18.61-3.54-25.48,8.63c-7.35,13-17.42,20-32.24,10.17Z"
			/>
			<path
				className="b field-fill"
				d="M326.4,327.09l4.74-4.73a11.49,11.49,0,0,1-4.74-.71S327.35,326.38,326.4,327.09Z"
			/>
			<path
				className="b field-fill"
				d="M358.4,290s-1.19,9.69-2.61,10.64,9,0,9,0S359.59,293.51,358.4,290Z"
			/>
			<path
				className="b field-fill"
				d="M244.86,286.18S264.3,294,275,299.66s14.46-8.51,14.46-8.51,1.9-18.44-9.48-25.06-35.32-18.92-35.32-18.92-12.09-6.27-17.18-16.55-13.16-19.87-27.74-20.81c0,0-10.78-1.18-17.66-12.89s-13-22.58-13-22.58-4-10.52-13.75-8.51a20.39,20.39,0,0,0-13.63,10.4s-2.13,3.43,3,11.94,16,31,16,31,4.15,7.8-3.32,12.18S139.38,242,141.16,248.82s4.38,12.54,11.25,16.32,12.8,11.11,13.63,18.68a62.39,62.39,0,0,1-.11,14.07,23.92,23.92,0,0,1,19.43,5.91c8.89,8,22,8.51,30.34-5S235.38,284.65,244.86,286.18Z"
			/>
			<path
				className="b field-fill"
				d="M161.42,128.76s14,27.61.48,32.81c-10.07,3.87-10.43,2.6-15.59,5.5L136,155.9s-6.58-1.9,12.39-16.32Z"
			/>
			<path
				className="b field-fill"
				d="M230.4,368s0,27.66-1.19,30.74.24,10.16,6.88,8.51l23.23.24s6.16,1.89,5.69-5.44l-.24-7.81h19.67l.95-23.17,3.08-.47s.95-9-11.37-7.33c0,0-22.52,1.65-30.34-.24C246.76,363,227.79,359.25,230.4,368Z"
			/>
			<path
				className="b field-fill"
				d="M408.89,313.14s17.54,5.44,35.79,4.73c0,0,2.85,37.83-8.53,50.13s-10.43,9-23.94,8.75-10.43-27-8.54-29.32C403.67,347.43,407.7,339.39,408.89,313.14Z"
			/>
			<path
				className="d road-stroke road-fill"
				d="M323.32,415.53s19.44-9.23,24.65-11.35A71.7,71.7,0,0,1,390.16,399a27.71,27.71,0,0,1,14,8s16.59,9.23,21.81,9.7l.94,1.18-7.82-.71s-16.59-8.28-19.44-11.35c0,0-7.34-8.75-35.55-4.73,0,0-27.26,7.57-36,15.13l-4.74.48Z"
			/>
			<rect
				className="e feature-fill"
				x="26.84"
				y="290.06"
				width="41.19"
				height="1.15"
			/>
			<rect
				className="e feature-fill"
				x="26.8"
				y="258.49"
				width="14.8"
				height="1.15"
			/>
			<polygon
				className="e feature-fill"
				points="30.66 229.63 59.07 206.38 59.8 207.27 31.39 230.52 30.66 229.63"
			/>
			<polygon
				className="e feature-fill"
				points="49.39 241.25 54.58 237.01 55.31 237.9 50.12 242.15 49.39 241.25"
			/>
			<polygon
				className="e feature-fill"
				points="55.97 235.93 60.2 232.47 60.93 233.36 56.7 236.82 55.97 235.93"
			/>
			<polygon
				className="e feature-fill"
				points="61.67 231.14 70.45 223.96 71.18 224.85 62.41 232.03 61.67 231.14"
			/>
			<rect
				className="e feature-fill"
				x="41.01"
				y="241.05"
				width="9.14"
				height="1.15"
				transform="translate(-0.41 0.08) rotate(-0.1)"
			/>
			<rect
				className="e feature-fill"
				x="68.69"
				y="222.42"
				width="3.91"
				height="1.16"
				transform="matrix(0.02, -1, 1, 0.02, -154.04, 288.08)"
			/>
			<polygon
				className="e feature-fill"
				points="70.35 221.9 58.28 207.23 59.24 206.45 71.31 221.12 70.35 221.9"
			/>
			<polygon
				className="e feature-fill"
				points="41.01 242.21 30.75 229.74 31.66 228.98 41.92 241.46 41.01 242.21"
			/>
			<polygon
				className="e feature-fill"
				points="58.8 241.24 60.38 239.75 61.17 240.59 59.59 242.08 58.8 241.24"
			/>
			<polygon
				className="e feature-fill"
				points="61.2 238.94 67.83 232.75 68.62 233.59 61.99 239.78 61.2 238.94"
			/>
			<polygon
				className="e feature-fill"
				points="68.62 231.97 76.03 225.03 76.82 225.87 69.41 232.81 68.62 231.97"
			/>
			<polygon
				className="e feature-fill"
				points="69.17 255.88 84.66 241.4 85.45 242.24 69.96 256.72 69.17 255.88"
			/>
			<polygon
				className="e feature-fill"
				points="88.23 285.13 93.7 274.71 94.72 275.24 89.26 285.67 88.23 285.13"
			/>
			<rect
				className="e feature-fill"
				x="81.57"
				y="246.98"
				width="11.76"
				height="1.16"
				transform="matrix(0.09, -1, 1, 0.09, -167.14, 311.7)"
			/>
			<polygon
				className="e feature-fill"
				points="82.5 254.57 87.04 252.39 87.54 253.43 83 255.61 82.5 254.57"
			/>
			<polygon
				className="e feature-fill"
				points="87.36 241.55 90.09 240.24 90.59 241.28 87.86 242.59 87.36 241.55"
			/>
			<polygon
				className="e feature-fill"
				points="73.74 304.25 67.16 300.31 67.14 300.27 67.11 300.28 67.09 300.28 67.08 300.29 60.16 303.62 60.66 304.65 67.05 301.59 73.14 305.24 73.74 304.25"
			/>
			<polygon
				className="e feature-fill"
				points="89.07 313.37 82.43 309.4 83.03 308.41 89.67 312.38 89.07 313.37"
			/>
			<rect
				className="e feature-fill"
				x="82.04"
				y="307.68"
				width="2.33"
				height="1.16"
				transform="translate(-232.92 353.1) rotate(-82.97)"
			/>
			<rect
				className="e feature-fill"
				x="85.19"
				y="315.68"
				width="7.72"
				height="1.16"
				transform="translate(-228.23 401.59) rotate(-89.33)"
			/>
			<rect
				className="e feature-fill"
				x="84.11"
				y="234.7"
				width="1.16"
				height="7.57"
				transform="translate(-9.82 3.72) rotate(-2.38)"
			/>
			<rect
				className="e feature-fill"
				x="58.91"
				y="241.19"
				width="1.16"
				height="3.91"
				transform="translate(-10.04 2.68) rotate(-2.38)"
			/>
			<polygon
				className="e feature-fill"
				points="84.28 235.6 75.2 225.94 76.1 225.09 85.18 234.76 84.28 235.6"
			/>
			<polygon
				className="e feature-fill"
				points="69.41 256.13 58.96 245.01 59.86 244.17 70.31 255.29 69.41 256.13"
			/>
			<rect
				className="e feature-fill"
				x="48.31"
				y="258.89"
				width="1.16"
				height="31.74"
			/>
			<rect
				className="e feature-fill"
				x="71.07"
				y="258.89"
				width="1.16"
				height="29.29"
				transform="translate(-1.56 0.41) rotate(-0.33)"
			/>
			<rect
				className="e feature-fill"
				x="25.38"
				y="259.19"
				width="1.16"
				height="31.41"
			/>
			<rect
				className="e feature-fill"
				x="62.58"
				y="258.49"
				width="9.6"
				height="1.15"
			/>
			<rect
				className="e feature-fill"
				x="55.47"
				y="258.49"
				width="5.16"
				height="1.15"
			/>
			<polygon
				className="e feature-fill"
				points="67.35 290.23 71.56 287.25 72.22 288.19 68.02 291.17 67.35 290.23"
			/>
			<polygon
				className="e feature-fill"
				points="25.85 289.56 27.31 290.13 26.88 291.2 25.43 290.63 25.85 289.56"
			/>
			<polygon
				className="e feature-fill"
				points="25.42 259.16 26.83 258.48 27.33 259.52 25.93 260.2 25.42 259.16"
			/>
			<rect
				className="e feature-fill"
				x="46.04"
				y="258.49"
				width="7.47"
				height="1.15"
			/>
			<path
				className="e feature-fill"
				d="M118.28,321.42s8.3.94,11.62-9l.94.24s1.66,6.38-12.56,10.87Z"
			/>
			<rect
				className="e feature-fill"
				x="122.07"
				y="334.18"
				width="1.42"
				height="11.82"
			/>
			<rect
				className="e feature-fill"
				x="218.07"
				y="364.45"
				width="1.42"
				height="19.15"
			/>
			<rect
				className="e feature-fill"
				x="230.64"
				y="364.45"
				width="1.42"
				height="15.13"
			/>
			<rect
				className="e feature-fill"
				x="222.1"
				y="383.6"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="230.87"
				y="386.91"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="237.51"
				y="395.66"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="248.41"
				y="395.66"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="282.55"
				y="363.03"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="292.03"
				y="373.44"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="143.41"
				y="362.79"
				width="1.42"
				height="3.55"
			/>
			<rect
				className="e feature-fill"
				x="143.64"
				y="352.63"
				width="1.42"
				height="3.55"
			/>
			<rect
				className="e feature-fill"
				x="447.76"
				y="346.36"
				width="1.42"
				height="3.63"
			/>
			<rect
				className="e feature-fill"
				x="447.76"
				y="331.11"
				width="1.42"
				height="11.26"
			/>
			<rect
				className="e feature-fill"
				x="441.13"
				y="331.11"
				width="1.42"
				height="11.26"
			/>
			<rect
				className="e feature-fill"
				x="411.55"
				y="325.28"
				width="1.42"
				height="7.53"
				transform="translate(57.44 719.34) rotate(-86.32)"
			/>
			<rect
				className="e feature-fill"
				x="430.29"
				y="319.25"
				width="1.42"
				height="22.9"
				transform="matrix(0.1, -0.99, 0.99, 0.1, 57.64, 725.33)"
			/>
			<rect
				className="e feature-fill"
				x="430.81"
				y="352.04"
				width="1.42"
				height="19.77"
			/>
			<rect
				className="e feature-fill"
				x="441.13"
				y="346.24"
				width="1.42"
				height="7.33"
			/>
			<polygon
				className="e feature-fill"
				points="447.89 349.25 449.25 349.64 445.07 364.1 443.7 363.71 447.89 349.25"
			/>
			<rect
				className="e feature-fill"
				x="394.43"
				y="365.28"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="394.43"
				y="344.35"
				width="1.42"
				height="7.09"
			/>
			<rect
				className="e feature-fill"
				x="369.07"
				y="344.35"
				width="1.42"
				height="25.86"
			/>
			<polygon
				className="e feature-fill"
				points="395.27 371.01 395.92 372.28 375.05 382.92 374.41 381.66 395.27 371.01"
			/>
			<polygon
				className="e feature-fill"
				points="433.44 377.4 434.29 378.54 427.94 383.28 427.09 382.14 433.44 377.4"
			/>
			<polygon
				className="e feature-fill"
				points="442.18 368.44 443.25 369.37 438.06 375.36 436.99 374.43 442.18 368.44"
			/>
			<polygon
				className="e feature-fill"
				points="427.99 372.23 428.51 373.55 423.53 375.49 423.01 374.17 427.99 372.23"
			/>
			<polygon
				className="e feature-fill"
				points="465.5 382.36 464.12 382.04 469.69 357.86 471.08 358.18 465.5 382.36"
			/>
			<polygon
				className="e feature-fill"
				points="472.32 354.12 470.9 354.05 471.61 337.82 473.03 337.88 472.32 354.12"
			/>
			<polygon
				className="e feature-fill"
				points="449.78 402.65 448.69 401.73 457.1 391.75 458.19 392.66 449.78 402.65"
			/>
			<polygon
				className="e feature-fill"
				points="418.74 381.49 420.03 382.09 408.36 407.19 407.07 406.59 418.74 381.49"
			/>
			<polygon
				className="e feature-fill"
				points="408.65 328.24 410.03 328.56 404.3 352.83 402.92 352.5 408.65 328.24"
			/>
			<polygon
				className="e feature-fill"
				points="378.67 391.48 379.35 390.23 408.88 406.01 408.21 407.26 378.67 391.48"
			/>
			<polygon
				className="e feature-fill"
				points="368.96 369.93 370.25 369.35 379.92 390.93 378.63 391.51 368.96 369.93"
			/>
			<rect
				className="e feature-fill"
				x="292.03"
				y="384.55"
				width="1.42"
				height="14.9"
			/>
			<rect
				className="e feature-fill"
				x="270.93"
				y="399.21"
				width="1.42"
				height="15.61"
			/>
			<rect
				className="e feature-fill"
				x="222.1"
				y="392.59"
				width="1.42"
				height="12.06"
			/>
			<rect
				className="e feature-fill"
				x="222.1"
				y="407.72"
				width="1.42"
				height="6.86"
			/>
			<rect
				className="e feature-fill"
				x="130.01"
				y="380.06"
				width="1.42"
				height="14.66"
			/>
			<rect
				className="e feature-fill"
				x="151.84"
				y="363.63"
				width="14.66"
				height="1.42"
				transform="translate(-226.65 460.4) rotate(-80.38)"
			/>
			<rect
				className="e feature-fill"
				x="170.08"
				y="361.24"
				width="9.82"
				height="1.42"
				transform="translate(-211.12 474) rotate(-80.38)"
			/>
			<polygon
				className="e feature-fill"
				points="176.15 385.59 174.75 385.35 177.94 366.59 179.35 366.61 176.15 385.59"
			/>
			<rect
				className="e feature-fill"
				x="122.07"
				y="334.07"
				width="4.86"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="159.76"
				y="356.94"
				width="4.86"
				height="1.42"
			/>
			<polygon
				className="e feature-fill"
				points="176.53 356.94 176.27 358.38 168.3 358.36 168.3 356.94 176.53 356.94"
			/>
			<rect
				className="e feature-fill"
				x="155.94"
				y="384.17"
				width="20.15"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="222.07"
				y="413.37"
				width="50.28"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="270.9"
				y="399.18"
				width="22.55"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="409.35"
				y="380.72"
				width="10.68"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="369.08"
				y="344.01"
				width="26.77"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="447.66"
				y="331.07"
				width="19.48"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="422.83"
				y="352.11"
				width="19.48"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="403.02"
				y="352.11"
				width="14.76"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="409.33"
				y="374.28"
				width="10.58"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="402.93"
				y="352.2"
				width="1.42"
				height="14.72"
			/>
			<polygon
				className="e feature-fill"
				points="402.96 366.79 404.1 365.94 410.63 374.72 409.49 375.57 402.96 366.79"
			/>
			<polygon
				className="e feature-fill"
				points="465.94 332.01 467.02 331.08 473.03 337.97 471.95 338.9 465.94 332.01"
			/>
			<polygon
				className="e feature-fill"
				points="394.31 372.13 395.11 370.96 406.44 378.63 405.64 379.81 394.31 372.13"
			/>
			<polygon
				className="e feature-fill"
				points="427.35 382.65 428.3 381.6 449.93 400.97 448.98 402.03 427.35 382.65"
			/>
			<polygon
				className="e feature-fill"
				points="445.36 361.44 445.84 360.1 468.02 368.05 467.54 369.39 445.36 361.44"
			/>
			<rect
				className="e feature-fill"
				x="237.72"
				y="401.55"
				width="12.12"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="248.62"
				y="395.52"
				width="5.01"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="233.82"
				y="395.52"
				width="5.01"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="237.38"
				y="370.69"
				width="5.01"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="245.44"
				y="370.69"
				width="5.01"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="230.86"
				y="366.67"
				width="11.99"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="250.15"
				y="366.67"
				width="11.99"
				height="1.42"
			/>
			<polygon
				className="e feature-fill"
				points="179.42 366.61 178.13 368.03 173.45 368.03 173.45 366.61 179.42 366.61"
			/>
			<rect
				className="e feature-fill"
				x="133.45"
				y="334.07"
				width="16.12"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="130.25"
				y="380.06"
				width="14.58"
				height="1.42"
			/>
			<rect
				className="e feature-fill"
				x="130.01"
				y="393.42"
				width="14.58"
				height="1.42"
			/>
			<path
				className="e feature-fill"
				d="M262.13,366.67l5.87-.05,6.44-.48a65.09,65.09,0,0,0,8.11-3.11v1.24a29,29,0,0,1-7,3.06c-3.44.75-13.38.76-13.38.76Z"
			/>
			<path
				className="e feature-fill"
				d="M257.64,376.36H254v1.42h5v-.25c0-.71.4-2.68,3.39-2.7l0-1.45A4.76,4.76,0,0,0,257.64,376.36Z"
			/>
			<path
				className="e feature-fill"
				d="M257.64,389.69H254v-1.42h5v.25c0,.71.4,2.68,3.39,2.7l0,1.45A4.77,4.77,0,0,1,257.64,389.69Z"
			/>
			<polygon
				className="e feature-fill"
				points="113.3 255.44 116.12 256.07 124.7 268.75 126.58 271.27 126.58 273.65 125.37 273.53 125.1 271.01 115.31 256.83 113.44 256.57 113.3 255.44"
			/>
			<polygon
				className="e feature-fill"
				points="130.53 277.2 129.78 277.82 132.53 282.31 132.78 285.3 134.4 285.42 134.4 282.18 130.53 277.2"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M155.38,254.85l8.18-5.32-3.92-6s12.45-2.83,10-16.31,12.44-12.77,13.16-13.48,19.2,2.13,19.2,2.13,7.82,1.77,9.6,0,2.13,2.84,2.13,2.84"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="144"
				y1="244.57"
				x2="151.47"
				y2="254.5"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M155,253.43l2.14,4.26s3.2,2.13,6.4.71l11.37,16.67s-5,7.8,0,10.29"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M173.87,277.91l27.73,15.25s5,2.13-3.91,15.25"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M210.13,271.88s14.58,16,24.54-8.51"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M237.16,264.78l-4.63-3.19c-4.62,1.42-3.91,6.39-3.91,6.39-4.26,3.9-11.73.35-11.73.35"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M234,262.3l7.34-14.19L237,246.22a4.6,4.6,0,0,1-3.08,1.66c-2.37.47-2.14,4-1,5.67"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M238.22,252.84s-9.72-2.12-6.87,8.52"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="243.91 261.59 237.99 258.52 240.83 253.08"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="242.96"
				y1="263.96"
				x2="237.51"
				y2="261.12"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M176.59,228.25s-4.26-3.54,0-9.22"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="172.56 250.48 165.93 255.68 179.67 273.89 186.07 267.27"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="173.51 253.32 169.72 256.63 179.67 269.63 184.65 265.14"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M164.27,241.49a5.2,5.2,0,0,1-2.14,5.21"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="159.29 242.2 159.53 241.26 162.37 239.37 160.47 235.82"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M162.13,238s11.38-9.7-2.6-26l2.6-1.19s3.08,3.08,3.08,5.68"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M147.2,185.22s1.42-2.84-2.84-4c0,0-4-3.79,3.55-7.1,0,0,7.59-.23,3.79,6.86l-2.84,4.73s-1.66,4.49.47,8,8.06,15.84,8.06,15.84"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M169,221.63s0-10.4-4.51-13.95"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="175.41 215.01 156.44 185.45 170.43 176.47"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="182.28 199.17 184.89 203.42 176.35 209.1 173.99 205.32"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M123.26,228.49s-5.45-4.73.95-9.22L122.55,216l10.9-6.62"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M129.42,216.19l10.91-7.09s5.14-4.22,10.66,7.09c4.51,9.22,1.42,8.75,1.42,8.75"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="154.31 215.96 157.63 223.52 154.31 225.65 155.26 227.54 151.7 229.67"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="149.57"
				y1="232.03"
				x2="147.44"
				y2="232.98"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="126.1 169.37 120.89 163.23 129.42 156.37 117.57 143.6 137.01 126.34 146.96 136.98"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="149.09 139.82 164.03 155.19 159.05 160.86"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="128.95 171.97 133.21 177.41 141.75 193.26"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="134.16"
				y1="176.47"
				x2="140.32"
				y2="172.21"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="172.56 151.88 166.64 128.23 183.7 124.45 191.53 151.64"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M223.05,200.82l2.85-1.42.23-18c-7.11-3.07-23.46-20.33-23.46-20.33l-2.14-11.35-6.87.71-1.42-5.91"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="225.9"
				y1="199.4"
				x2="227.55"
				y2="201.3"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M219,201.06l-2.13-1.89,2.37-17.5s-.48-4.49-14.94-6.15h-6.16l-2.61-3.07,2.85-3.55"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="197.69"
				y1="176.7"
				x2="196.98"
				y2="183.09"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="196.5"
				y1="185.69"
				x2="196.27"
				y2="189.47"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M195.55,194.44l-.71,3.55-1.18,4s-4,1.41-8.77-8.75l-2.37-4.73"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="181.57"
				y1="185.69"
				x2="174.22"
				y2="174.81"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M171.61,170.08,168.77,168s6.87-7.81,16.83-4l6.4,6.14,2.61-4.25"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="224 202.95 225.9 202 241.06 225.89"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="193.66 202 206.69 204.37 209.06 201.53 213.09 201.77 215.47 203.9"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="243.2 224.47 247.7 231.8 258.61 237.95 262.16 237.95 264.53 240.31"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M247.94,224.47l5.69-2.37,3.55,5.92,15.17-10.17,2.85,4.25-15.65,10.64,1.9,2.37,4.74.94s2.19,3.14,4.8,6.24,5.63,6.18,7.29,6.06"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="270.99"
				y1="242.29"
				x2="269.04"
				y2="245.99"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M260.74,250s2.37-2.61,3.08-.71"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="233.72 201.53 241.3 197.75 240.12 195.15 246.75 190.66 248.41 192.31 255.29 188.29 254.1 186.4 258.84 182.85 263.35 184.03 267.14 184.51 272.83 180.25 273.3 173.63 269.51 169.37 263.58 167.72 257.18 171.5 256.71 176.94 255.76 179.78 238.46 191.6 234.66 187.58"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="246.64"
				y1="190.54"
				x2="248.06"
				y2="189.59"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="252.53"
				y1="187.17"
				x2="253.95"
				y2="186.22"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M279.11,251.31s4.62,5.67,7.47,6.38"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M271.64,270.81l-2.48,3.91s15.64,2.83,10.31,18.44"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="266.43"
				y1="276.73"
				x2="271.41"
				y2="279.56"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M270,296.11s8.05,6.63,12.8-5.2h2.37l.47-3.54"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="266.67"
				y1="294.93"
				x2="258.61"
				y2="290.44"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="246.04"
				y1="284.06"
				x2="256"
				y2="289.02"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="239.64"
				y1="281.45"
				x2="242.49"
				y2="282.4"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M300.56,289.73,293,285.24s-3.08,10.64,11.14,14.66"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="301.99"
				y1="290.91"
				x2="305.3"
				y2="293.28"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M305.3,301.32l10.2-16.79-2.14-14.9s-22-9.69-26.31-15.6"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M276.62,265.38s5.93,3.78,7.11,7.8"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="288 265.14 289.66 262.54 298.19 268.45 294.16 274.12"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="292.98"
				y1="276.02"
				x2="291.56"
				y2="278.38"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="269.99 306.75 270.93 305.1 260.74 300.37 259.79 302.5"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M257,298l-8.77,16.79s-5.93,9.69,13.27,14.42l-1.18,1.89"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M285.39,329l-1.89-.47c-5,12.53-17.78,2.36-17.78,2.36l-.71,1.42"
			/>
			<polyline
				className="f feature-stroke no-fill"
				points="289.19 313.85 283.97 325.67 286.1 326.38"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M275,308.88l1-2.6L278,307.7s5.22-3.07,5.69,1.89l2.61,1.66-.47,1.89"
			/>
			<line
				className="f feature-stroke no-fill"
				x1="203.38"
				y1="299.19"
				x2="176.36"
				y2="282.87"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M300.09,199.88s5.93,4,4.5,8.27,5.46,3.79,6.64,3.79"
			/>
			<path
				className="f feature-stroke no-fill"
				d="M318.34,201.3s2.85,4.73-.71,8"
			/>
			<rect
				className="g building-fill"
				x="42.67"
				y="225.06"
				width="3.2"
				height="3.9"
			/>
			<polygon
				className="g building-fill"
				points="68.37 316.04 70.99 319.65 67.3 322.32 64.67 318.71 68.37 316.04"
			/>
			<rect
				className="g building-fill"
				x="47.41"
				y="219.03"
				width="2.13"
				height="2.13"
			/>
			<rect
				className="g building-fill"
				x="76.8"
				y="241.73"
				width="1.66"
				height="3.78"
			/>
			<rect
				className="g building-fill"
				x="37.69"
				y="283.58"
				width="3.32"
				height="3.31"
			/>
			<polygon
				className="g building-fill"
				points="143.51 369.37 141.37 366.3 136.97 369.42 131.94 369.42 128.46 364.61 125.43 366.8 129.24 372.7 129.24 372.73 139.32 372.73 139.32 372.72 139.33 372.73 143.51 369.37"
			/>
			<polygon
				className="g building-fill"
				points="340.85 283.53 338.71 280.47 334.31 283.58 329.28 283.58 325.79 278.78 322.76 280.97 326.58 286.87 326.58 286.89 336.65 286.89 336.65 286.88 336.66 286.89 340.85 283.53"
			/>
			<polygon
				className="g building-fill"
				points="120.07 351.48 120.07 355.5 117.23 355.5 117.23 363.48 125.73 363.48 125.73 358.51 125.73 355.5 125.73 351.48 120.07 351.48"
			/>
			<rect
				className="g building-fill"
				x="52.39"
				y="284.76"
				width="3.79"
				height="2.13"
			/>
			<polygon
				className="g building-fill"
				points="33.9 267.5 42.19 267.5 42.19 277.67 38.64 277.67 38.64 281.69 33.9 281.69 33.9 275.78 32.47 275.78 32.47 269.16 33.9 269.16 33.9 267.5"
			/>
			<polygon
				className="g building-fill"
				points="57.6 265.61 59.5 265.61 59.5 267.03 65.66 267.03 65.66 276.96 57.6 276.96 57.6 265.61"
			/>
			<polygon
				className="g building-fill"
				points="76.16 245.5 69.23 237.45 64.55 241.46 63.68 240.45 61.74 242.11 68.67 250.16 68.74 250.09 69.61 251.1 76.16 245.5"
			/>
			<polygon
				className="g building-fill"
				points="138.74 341.04 138.74 344.12 130.61 344.12 130.61 352.16 143.17 352.16 143.17 349.08 143.17 344.12 143.17 341.04 138.74 341.04"
			/>
			<rect
				className="g building-fill"
				x="162.37"
				y="363.27"
				width="2.13"
				height="4.49"
			/>
			<rect
				className="g building-fill"
				x="164.25"
				y="324.61"
				width="2.4"
				height="6.38"
			/>
			<polygon
				className="g building-fill"
				points="151.7 275.56 153.64 274.15 157.42 279.3 155.49 280.71 151.7 275.56"
			/>
			<polygon
				className="g building-fill"
				points="123.52 231.22 127.18 228.54 133.37 236.97 129.71 239.65 123.52 231.22"
			/>
			<polygon
				className="g building-fill"
				points="130.85 224.96 143.5 215.71 150.79 225.63 138.14 234.88 130.85 224.96"
			/>
			<polygon
				className="g building-fill"
				points="175.65 153.42 171.12 134.73 183.11 131.84 187.64 150.53 175.65 153.42"
			/>
			<polygon
				className="g building-fill"
				points="148.97 240.92 157.26 234.86 160.84 239.74 152.56 245.8 148.97 240.92"
			/>
			<polygon
				className="g building-fill"
				points="233.15 226.71 236.96 223.92 239.32 227.13 235.51 229.92 233.15 226.71"
			/>
			<polygon
				className="g building-fill"
				points="234.46 220.02 231.22 215.61 230.6 216.06 230.01 215.26 226.61 217.76 230.92 223.62 234.33 221.13 233.84 220.47 234.46 220.02"
			/>
			<polygon
				className="g building-fill"
				points="268.84 177.88 264.53 172.01 261.12 174.51 261.6 175.17 260.99 175.62 264.23 180.03 264.84 179.57 265.43 180.37 268.84 177.88"
			/>
			<polygon
				className="g building-fill"
				points="179.38 195.74 170.53 183.69 164.9 187.81 169.61 194.23 166.51 196.49 170.68 202.17 178.97 196.11 178.93 196.06 179.38 195.74"
			/>
			<polygon
				className="g building-fill"
				points="173.93 202.92 179.56 198.8 182.07 202.22 176.44 206.33 173.93 202.92"
			/>
			<polygon
				className="g building-fill"
				points="237.65 195.58 235.73 193.09 233.48 194.81 232.99 194.15 227.46 198.26 230.35 202.12 235.87 198.01 235.36 197.32 237.65 195.58"
			/>
			<polygon
				className="g building-fill"
				points="244.48 232.62 242.72 235.22 245.07 236.81 244.6 237.48 250.25 241.41 253.01 237.45 247.36 233.53 246.87 234.23 244.48 232.62"
			/>
			<polygon
				className="g building-fill"
				points="176.56 285.26 197.65 295 194.43 301.94 173.34 292.19 176.56 285.26"
			/>
			<rect
				className="g building-fill"
				x="161.19"
				y="370.6"
				width="1.9"
				height="4.26"
			/>
			<rect
				className="g building-fill"
				x="165.69"
				y="371.31"
				width="4.74"
				height="6.15"
			/>
			<rect
				className="g building-fill"
				x="239.64"
				y="394.24"
				width="7.82"
				height="5.67"
			/>
			<polygon
				className="g building-fill"
				points="264.77 372.96 264.77 379.82 260.5 379.82 260.5 385.73 264.77 385.73 264.77 393.3 284.68 393.3 284.68 372.96 264.77 372.96"
			/>
			<rect
				className="g building-fill"
				x="322.37"
				y="371.07"
				width="4.74"
				height="4.97"
			/>
			<polygon
				className="g building-fill"
				points="299.75 268.51 308.64 273.94 305.86 278.49 296.96 273.06 299.75 268.51"
			/>
			<polygon
				className="g building-fill"
				points="264.2 286.47 268.74 289.23 266.84 292.33 262.31 289.57 264.2 286.47"
			/>
			<polygon
				className="g building-fill"
				points="265.55 285.96 268.74 287.91 267.36 290.16 264.17 288.22 265.55 285.96"
			/>
			<polygon
				className="g building-fill"
				points="261.28 242.93 261.98 241.8 258.21 239.5 257.51 240.63 256.63 240.09 254.39 243.75 259.75 247.02 261.99 243.36 261.28 242.93"
			/>
			<polygon
				className="g building-fill"
				points="306.83 280.26 311.37 283.02 306.56 290.87 302.03 288.1 306.83 280.26"
			/>
			<polygon
				className="g building-fill"
				points="452.97 385.03 450.6 382.93 452.08 381.27 445.72 375.63 438.71 383.49 445.07 389.13 445.09 389.12 447.45 391.22 452.97 385.03"
			/>
			<polygon
				className="g building-fill"
				points="427.97 358.07 426.9 358.07 426.9 356.19 417.9 356.19 417.9 358.07 416.71 358.07 416.71 367.52 420.03 367.52 420.03 370.13 424.77 370.13 424.77 367.52 427.97 367.52 427.97 358.07"
			/>
			<polygon
				className="g building-fill"
				points="435.49 336.67 435.49 333.95 426.6 333.95 426.6 336.67 426.6 341.99 426.6 344.71 437.86 344.71 437.86 336.67 435.49 336.67"
			/>
			<polygon
				className="g building-fill"
				points="408.64 390.42 405.15 388.51 406.32 386.39 402.19 384.14 401.02 386.26 397.89 384.55 393.33 392.86 394.8 393.66 393.95 395.21 402.06 399.64 402.91 398.09 404.08 398.73 408.64 390.42"
			/>
			<polygon
				className="g building-fill"
				points="390.16 356.53 386.84 356.53 386.84 353.34 378.31 353.34 378.31 354.99 375.7 354.99 375.7 363.03 378.31 363.03 378.31 364.21 386.84 364.21 386.84 361.61 390.16 361.61 390.16 356.53"
			/>
			<polygon
				className="g building-fill"
				points="452.15 348.43 455.47 348.43 455.47 351.62 464 351.62 464 349.97 466.61 349.97 466.61 341.93 464 341.93 464 340.75 455.47 340.75 455.47 343.35 452.15 343.35 452.15 348.43"
			/>
			<polygon
				className="g building-fill"
				points="330.94 331.09 336.82 324.92 338.88 326.87 333 333.04 330.94 331.09"
			/>
			<polygon
				className="g building-fill"
				points="64.69 223.77 59.88 218.04 59.8 218.12 59.66 217.95 58.77 218.69 58.17 217.91 52.27 222.45 53.05 223.47 48.52 227.24 51.11 230.33 54.36 227.62 56.72 230.43 64.69 223.77"
			/>
			<polygon
				className="g building-fill"
				points="460.59 379.01 462.36 380.39 460.98 382.15 459.21 380.77 460.59 379.01"
			/>
			<rect
				className="g building-fill"
				x="420.8"
				y="341.57"
				width="3.02"
				height="2.31"
			/>
			<rect
				className="g building-fill"
				x="428.63"
				y="315.33"
				width="2.31"
				height="8.36"
				transform="translate(47.82 694.87) rotate(-81.13)"
			/>
			<polygon
				className="g building-fill"
				points="271.43 263.69 248.04 252.8 240.84 268.18 245.16 270.19 241.88 277.22 256.61 284.09 259.9 277.06 264.23 279.07 271.43 263.69"
			/>
			<polygon
				className="g building-fill"
				points="285.24 316.79 260.29 305 258.43 308.93 255.56 307.57 251.13 316.91 273.74 327.59 275.6 323.66 280.81 326.12 285.24 316.79"
			/>
			<polygon
				className="g building-fill"
				points="123.08 163.17 131.07 157.25 134.89 162.37 126.9 168.29 123.08 163.17"
			/>
			<polygon
				className="g building-fill"
				points="136.31 137.49 129.38 142.63 127.55 140.18 122.38 144.02 124.2 146.47 124.16 146.51 127.98 151.63 140.13 142.61 136.31 137.49"
			/>
			<polygon
				className="g building-fill"
				points="171.15 108.4 164.22 113.54 162.4 111.1 157.22 114.94 159.05 117.39 159 117.42 162.82 122.54 174.97 113.52 171.15 108.4"
			/>
			<polygon
				className="g building-fill"
				points="129.48 169.91 137.47 163.98 141.29 169.11 133.3 175.03 129.48 169.91"
			/>
			<polygon
				className="g building-fill"
				points="145.3 144.45 155.58 155.74 146.98 163.54 136.69 152.25 145.3 144.45"
			/>
			<rect
				className="g building-fill"
				x="200.5"
				y="182.32"
				width="13.03"
				height="17.53"
				transform="translate(-11.7 368.66) rotate(-81.78)"
			/>
			<ellipse
				className="g building-fill"
				cx="200.53"
				cy="244.92"
				rx="29.51"
				ry="29.44"
			/>
			<polygon
				className="g building-fill"
				points="179.06 261.55 177.06 258.95 173.54 261.65 172.56 260.38 170.23 262.17 171.22 263.44 169.24 264.95 171.25 267.55 173.22 266.04 174.36 267.52 176.68 265.73 175.54 264.25 179.06 261.55"
			/>
			<path
				className="h road-stroke no-fill"
				d="M317.39,188.29l-45.75,84.65a36.76,36.76,0,0,1-16.59,14.9c-11.38,5-19.67,9-51.44,11.59"
			/>
			<path
				className="h road-stroke no-fill"
				d="M320.35,190.19l-1.3,2.36L273.3,277.2A44.53,44.53,0,0,1,255.82,291l-8,3.19s-7.46,2.74-12.62,3.37"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="246.25 291.04 246.9 290.76 248.51 294.52 247.86 294.8 246.25 291.04"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="264.25 281.24 264.68 280.67 268.4 283.48 267.97 284.05 264.25 281.24"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="275.1 265.19 275.53 264.62 279.25 267.43 278.82 268 275.1 265.19"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="285.23 246.12 285.66 245.56 289.38 248.37 288.95 248.93 285.23 246.12"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="296.61 225.37 297.04 224.81 300.76 227.62 300.33 228.18 296.61 225.37"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="309.59 201.16 310.02 200.6 313.74 203.41 313.31 203.98 309.59 201.16"
			/>
			<polygon
				className="d road-stroke road-fill"
				points="233.61 294.75 234.26 294.47 235.76 297.95 235.1 298.23 233.61 294.75"
			/>
			<path
				className="i border-stroke no-fill"
				d="M199.33,109.57s-34.36-27.89-86.43.54c0,0-50.27,47.8-86.23,104.66,0,0-27.48,47.18,6.4,103.22,0,0,43.34,77.57,120.89,90.44,0,0,52.26,9.92,140.18,8.57,96.62-1.47,136.44.65,136.44.65s22.73-7.11,33.2-17.58c32.21-32.19,33.64-95.61-4.66-117.43Z"
			/>
		</SVGOverlay>
	),
	collateral: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .c,.d,.f{;strokeMiterlimit:10;}
            .c{strokeWidth:0.7px;}
            .d{strokeWidth:1.07px;}
            .f{strokeWidth:0.96px;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M53.07,156.89l19.83-3.14s11-9.91,16.19-19.31c0,0,8.87-2.09,15.13,3.66l10.44-4.18s2.61,8.87,11,5.74l4.18,6.79,19.31-7.83,2.09-3.13s8.87,5.21,9.4-7.83,3.32-12.51,3.32-12.51-2.32-7.66,10-15.55l3-.23L179.7,95s10.44.47,17.63-7,13.46-13.45,16-9.28c0,0,7.51-6.86,14.15-2.55,4.64,3,20.88-4.17,20.88-4.17s14.15-3.48,20.88,1.16,24.13,6.26,26.68,5.8,14.15.23,27.14,7.65c0,0,14.39,3.71,18.33,2.09s4.18-2.78,7.19-.46,7.66,4.64,17.4,1.16A19.12,19.12,0,0,1,376,88c5.8.7,28.07-3,34.8-14.15,0,0,1.39-3.94,5.1-4.17s3.71-9.28,13.69-2.56,6.5,10,15.54,8.12c0,0,3.72,1.16,4.88,4a8.16,8.16,0,0,1,5.16,3.71s1.4,1.67,6.44,7.89c.94,1.16,4.05,2.23,4.87,3.48,1.06,1.61,1.24,5.69,2.09,7.42,1,2,4.22,5.36,5.39,7.31.5.82-.64,3.78,0,5.39,1,2.4,3.26,4.14,3.31,5.4a143.66,143.66,0,0,0,2.95,23.49c.33,1.53,3.3,3.92,4.18,6.61,1.43,4.34,0,10.26,0,10.26s6.09,5.75,6.44,9.57c.63,7,.52,19.49.52,19.49L491,212.53s-2.78,16.18-1.39,21.23c1.17,4.23.87,16.53.87,16.53a54.59,54.59,0,0,1,2.26,8.87c1.14,6.59,2,15.37,3,19,1.39,5-2.61,13.39-2.61,13.39s-12,45.94-50.29,45.07c-33.94-.77-42.8,14.79-42.8,14.79s-1.22,3.13.18,5.57c0,0-.7,5.39-5.57,6.09,0,0-3.66,8.18-14.79,13.4s-17.13,14.37-21.23,19.83c-9.83,13.11-33.41,30.8-59.68,27-27.94-4.07-26.28-7.13-38.8,1.91s-9.57,30.11-42.46,16.36c0,0-15.31-6.44-20.18-5.57s-16.88-6.44-16.88-6.44-5.4-2.08-8.35-1.39-10.62-3.48-11.31-4.35c0,0-7.14,5.74-9.22,5.57s-5.22,5.05-5.22,5.05H18.92V262.12s9.75-3.48,10.62-6.44V247l-4.87-4s-.53-14.79-4.18-19.84l8.7-9.57S35,221.05,37.37,215c.73-1.89-.18-5.91-6.61-4.69l-.18-16.88L45.72,189s3.31-15.49,4.87-18.45S54.5,158.66,53.07,156.89Z"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="85.74 374.29 69.5 358.28 69.27 336.24 79.47 326.27 111.72 326.27"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="111.49"
				y1="314.43"
				x2="111.49"
				y2="342.97"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="91.54 380.09 107.78 396.33 129.35 396.33 139.33 386.35 139.33 359.91"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="118.92 336.01 118.92 343.9 144.2 343.9 144.2 319.31"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="143.51 311.88 143.51 308.17 118.92 308.17 118.92 326.27"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="69.27 279.63 66.25 279.63 66.25 273.14 72.75 273.14 72.75 279.4"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="202.43 235.09 199.65 238.8 193.62 237.18 193.15 235.09 191.53 233.24 193.85 231.84"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M195.71,237.41s-5.8,10-8.36,10.44L176,256.2l-16.48,7-38,3.95-7.43-7.2-3.71-9.28.7-7.19,1.39-15.08A54.13,54.13,0,0,1,128,217l8.12,1.16S153,224.42,157,223.49l4.41,2.55,7.19-3.25,3.25,3.25,4.87,1.16"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="66.95 192.4 71.12 199.13 79.24 194.49"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="113.58 156.44 117.75 162.24 124.71 158.07"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="121.7 151.57 117.75 144.61 110.56 148.09"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M144.2,142.76s-.46,3.71-3,4.4l-.47,4.88-4.17,3.48s-3.48,1.62-5.11,1.16l-5.33,6.49.69.93-3,2.09-9.52.23-2.78,2.09-5.1-.23"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M141.42,188.69a1.88,1.88,0,0,1,2.09-2.09c2.32,0,1.16-2.55,1.16-2.55s4.4-5.8,7.88-5.1c0,0,6-4.41,4.88-9l3-3.48,7.43-4.64a10.39,10.39,0,0,1,4.4-5.57c3.72-2.55,2.09-5.57,2.09-5.57s5.22-5.33,7.43-10.78l7-4.07,2-.11,9.28-4.76"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M255.68,139.86,243.85,139l-2.21,1.63-4.17-.24s-4.76,1.4-11.84,10.44l-.46,3.25"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M205.1,157.72s22.27-6.73,34.8-3"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M177,182l2.09,9.28s15.66,17.17,23.31,21.23L223,217.92s9.39,3,13.22.35,33.41-35.73,33.41-35.73l.35-3.48s-6.85-7.42-6.73-11.13"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M268,141.71a26.51,26.51,0,0,0,12.65,6.73"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M171,205.39s7.31,9.75,19.49-2.43"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M163.34,130.23s21.23-10.44,10.09-26.8"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="193.97 106.22 190.14 99.25 196.75 95.08"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="203.01 102.04 209.63 98.91 205.45 91.95"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="327.95 96.82 327.25 101.34 343.95 104.47"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="182.83 265.6 182.83 273.6 197.45 273.6"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="204.75 273.95 229.81 273.95 229.81 266.64"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="270.87 224.53 302.54 224.53 302.54 238.11"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="328.99 238.45 328.99 228.01 353.7 228.01 353.7 231.49"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="353.7 235.32 353.7 245.41 329.34 245.41 329.34 242.28"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="331.77"
				y1="293.79"
				x2="331.77"
				y2="310.14"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="330.03"
				y1="312.23"
				x2="330.03"
				y2="316.06"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="294.89 291.7 312.29 291.7 312.29 330.32 293.84 330.32 293.84 336.59 298.02 336.59"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="298.37 339.37 293.84 339.37 293.84 341.46 287.58 341.46 287.58 339.72 283.05 339.72"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="283.4 336.24 286.88 336.24 286.88 330.32 269.48 330.32 269.48 317.45"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="266.35 309.79 269.13 309.79 269.13 292.05 287.23 292.05"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="318.2 328.58 325.16 328.58 329.34 324.41 329.34 321.97"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="170.65 318.49 167.52 318.49 167.52 302.49"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="186.31 324.41 186.31 322.32 175.87 322.32 175.87 297.27 213.8 297.27 213.8 288.22 237.81 288.22 237.81 307.71 213.8 307.71 213.8 300.05 201.62 300.05 201.62 324.41 181.79 324.41 181.79 328.58"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="177.96"
				y1="328.24"
				x2="177.96"
				y2="322.32"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="170.3"
				y1="353.99"
				x2="170.3"
				y2="363.04"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="170.3 368.61 170.3 373.48 173.44 373.48"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="173.78"
				y1="363.39"
				x2="173.78"
				y2="354.69"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="176.22 373.13 180.4 373.13 180.4 377.31 195.01 377.31"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="193.27 387.05 203.36 387.05 203.36 397.14"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="203.71 400.27 203.71 410.02 193.62 410.02"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="186.66 410.37 176.57 410.37 176.57 402.01"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="176.91 397.14 176.91 390.18 179 390.18"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="173.09"
				y1="394.01"
				x2="173.09"
				y2="405.14"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="207.54"
				y1="394.01"
				x2="207.54"
				y2="405.14"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="209.63"
				y1="357.47"
				x2="209.63"
				y2="365.47"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="209.63"
				y1="370"
				x2="209.63"
				y2="373.48"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="186.66"
				y1="351.21"
				x2="194.31"
				y2="351.21"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="389.54 233.58 395.81 233.58 395.81 239.85"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="426.78 265.6 434.95 257.42 444.52 246.11 446.61 236.71 452.18 237.76"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="436.17 262.81 439.31 265.95 434.08 271.17"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="440.7"
				y1="263.51"
				x2="434.78"
				y2="257.59"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="453.92 260.03 446.26 255.16 449.75 249.94"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="456.36 239.5 462.97 241.93 467.14 213.4"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="448.7 228.01 450.79 220.36 458.79 222.45"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="452.53 205.05 452.88 212.7 458.44 213.05"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="458.1 196 458.1 206.79 465.06 206.79"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="467.84"
				y1="209.57"
				x2="467.84"
				y2="201.57"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="460.19 188.34 460.19 178.95 468.19 178.95 468.19 189.39"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="450.09 165.72 450.09 161.2 456.7 161.2 456.7 170.59 446.96 170.59 446.96 161.2"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="450.44"
				y1="178.25"
				x2="450.44"
				y2="170.59"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="432.69"
				y1="196"
				x2="437.91"
				y2="196"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="438.26"
				y1="191.13"
				x2="438.26"
				y2="199.13"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="389.19 209.22 389.19 212.7 389.19 218.27 391.28 218.27"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="395.46"
				y1="213.05"
				x2="389.19"
				y2="213.05"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="393.02"
				y1="217.57"
				x2="401.37"
				y2="217.57"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="421.21 219.31 408.68 219.31 408.68 197.74 396.15 197.74 396.15 206.44 405.2 206.44"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="417.73 205.39 428.17 205.39 428.17 215.14"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="426.08 212.35 426.08 219.31 424.34 219.31"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="429.56 170.94 429.56 166.77 418.43 166.77 418.43 174.77 432.35 174.77 432.35 168.85"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="417.73 155.98 417.73 161.55 421.21 161.55"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="378.4 165.38 380.84 165.38 380.84 157.37"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="380.14 151.8 380.14 137.19 385.71 137.19"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="384.67 146.93 397.2 146.93 397.2 144.15 407.29 144.15"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="373.19 151.8 373.19 127.79 361.35 127.79"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="365.53 130.92 361 130.92 361 139.28"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="371.79"
				y1="145.89"
				x2="375.97"
				y2="145.89"
			/>
			<polygon
				className="c feature-stroke no-fill"
				points="96.92 356.28 109.44 369.33 112.31 366.46 99 353.15 96.92 356.28"
			/>
			<path
				className="d road-stroke no-fill"
				d="M339.63,287.38v31.14a3.2,3.2,0,0,1-1,2.31l-2.74,2.62a3.17,3.17,0,0,1-1.51.8l-1.47.33a3.2,3.2,0,0,0-1.41.71L319.1,336.15a3.17,3.17,0,0,1-2.1.79h0a3.23,3.23,0,0,0-2.15.83L299.31,352a3,3,0,0,1-.54.4L291,357a3,3,0,0,0-.5.35l-14,12.25-.19.15-9,6.76a3.16,3.16,0,0,1-1.42.6l-10.1,1.58a4.21,4.21,0,0,1-.5,0H155.69"
			/>
			<path
				className="d road-stroke no-fill"
				d="M342.21,288.91V319.8a3.2,3.2,0,0,1-.71,2l-4.53,5.6a3.23,3.23,0,0,1-1.71,1.09l-2.48.62a3.14,3.14,0,0,0-1.19.58l-10.43,8.15-.36.24-3.47,2a3.17,3.17,0,0,0-.89.78l-4.27,5.41a3.29,3.29,0,0,1-1.46,1l-9.21,3.18"
			/>
			<path
				className="d road-stroke no-fill"
				d="M269.83,377.3,280.5,371a3.21,3.21,0,0,0,.82-.7l2.9-3.48a3,3,0,0,1,.51-.49L302.19,353"
			/>
			<path
				className="d road-stroke no-fill"
				d="M345,288.22v33a3.17,3.17,0,0,1-1.14,2.44l-20.44,17.15L313.47,350a2.17,2.17,0,0,1-.29.24l-8.78,6.42a2,2,0,0,0-.23.18L290.11,369.3a3.15,3.15,0,0,1-1.85.78l-7.29.61"
			/>
			<path
				className="d road-stroke no-fill"
				d="M348.48,289.61v31.82a3.17,3.17,0,0,1-1.27,2.54l-11.3,8.56a3.14,3.14,0,0,1-.67.38l-4.51,1.94"
			/>
			<line
				className="d road-stroke no-fill"
				x1="341.17"
				y1="258.64"
				x2="341.17"
				y2="279.17"
			/>
			<line
				className="d road-stroke no-fill"
				x1="343.61"
				y1="258.29"
				x2="343.61"
				y2="278.13"
			/>
			<line
				className="d road-stroke no-fill"
				x1="347.09"
				y1="257.25"
				x2="347.09"
				y2="277.43"
			/>
			<path
				className="d road-stroke no-fill"
				d="M156,381.83h91.88a3,3,0,0,1,.66.07l3.95.84a3,3,0,0,0,1.2,0l10.85-1.86A3.28,3.28,0,0,1,266,381l3.62,1.07a3.22,3.22,0,0,0,2.89-.56l14-11.15"
			/>
			<rect
				className="e building-fill"
				x="63.93"
				y="266.41"
				width="9.74"
				height="9.05"
			/>
			<rect
				className="e building-fill"
				x="28.78"
				y="334.39"
				width="4.64"
				height="17.17"
			/>
			<rect
				className="e building-fill"
				x="56.28"
				y="319.42"
				width="4.06"
				height="11.02"
			/>
			<rect
				className="e building-fill"
				x="75.88"
				y="310.66"
				width="11.02"
				height="3.24"
				transform="translate(-196.08 147.48) rotate(-44.68)"
			/>
			<rect
				className="e building-fill"
				x="147.8"
				y="303.93"
				width="11.02"
				height="3.24"
				transform="translate(-185.5 351.05) rotate(-71)"
			/>
			<rect
				className="e building-fill"
				x="143.98"
				y="319.25"
				width="11.5"
				height="3.24"
				transform="translate(-178.4 453.94) rotate(-87.06)"
			/>
			<rect
				className="e building-fill"
				x="56.62"
				y="329.28"
				width="2.9"
				height="23.78"
			/>
			<rect
				className="e building-fill"
				x="28.78"
				y="369.01"
				width="4.64"
				height="17.17"
			/>
			<rect
				className="e building-fill"
				x="50.59"
				y="422.08"
				width="16.88"
				height="4.47"
			/>
			<rect
				className="e building-fill"
				x="84"
				y="422.08"
				width="16.88"
				height="4.47"
			/>
			<rect
				className="e building-fill"
				x="123.45"
				y="408.14"
				width="16.88"
				height="4.47"
				transform="translate(-42.92 16.36) rotate(-6.11)"
			/>
			<rect
				className="e building-fill"
				x="134.05"
				y="406.73"
				width="11.66"
				height="3.03"
				transform="translate(-156.7 94.76) rotate(-24.5)"
			/>
			<rect
				className="e building-fill"
				x="132.72"
				y="344.13"
				width="7.48"
				height="4.47"
			/>
			<rect
				className="e building-fill"
				x="341.63"
				y="321.68"
				width="12.35"
				height="2.84"
			/>
			<rect
				className="e building-fill"
				x="379.91"
				y="263.12"
				width="11.42"
				height="3.43"
				transform="translate(-14.1 21.81) rotate(-3.18)"
			/>
			<rect
				className="e building-fill"
				x="54.44"
				y="382.13"
				width="8.5"
				height="14.07"
				transform="translate(-256.2 153.07) rotate(-44.56)"
			/>
			<rect
				className="e building-fill"
				x="129.7"
				y="312.64"
				width="3.25"
				height="25.35"
			/>
			<rect
				className="e building-fill"
				x="129.12"
				y="335.84"
				width="4.41"
				height="2.15"
			/>
			<rect
				className="e building-fill"
				x="129.12"
				y="324.82"
				width="4.41"
				height="2.15"
			/>
			<rect
				className="e building-fill"
				x="129.12"
				y="313.91"
				width="4.41"
				height="2.15"
			/>
			<rect
				className="e building-fill"
				x="144.32"
				y="375.8"
				width="3.25"
				height="9.86"
			/>
			<rect
				className="e building-fill"
				x="164.33"
				y="375.8"
				width="3.25"
				height="9.86"
			/>
			<rect
				className="e building-fill"
				x="179.12"
				y="299.59"
				width="14.21"
				height="18.39"
			/>
			<rect
				className="e building-fill"
				x="177.38"
				y="354.31"
				width="29.52"
				height="19.34"
			/>
			<rect
				className="e building-fill"
				x="174.25"
				y="354.31"
				width="29.52"
				height="3.86"
			/>
			<rect
				className="e building-fill"
				x="181.03"
				y="357.88"
				width="20.13"
				height="19.34"
			/>
			<rect
				className="e building-fill"
				x="181.03"
				y="370.87"
				width="13.34"
				height="19.6"
			/>
			<rect
				className="e building-fill"
				x="165.02"
				y="271.4"
				width="9.69"
				height="9.19"
			/>
			<rect
				className="e building-fill"
				x="188.51"
				y="262.35"
				width="8.47"
				height="7.28"
			/>
			<rect
				className="e building-fill"
				x="204.87"
				y="251.39"
				width="8.47"
				height="7.28"
			/>
			<rect
				className="e building-fill"
				x="219.31"
				y="250"
				width="7.77"
				height="9.02"
			/>
			<rect
				className="e building-fill"
				x="204.87"
				y="262"
				width="16.99"
				height="7.98"
			/>
			<rect
				className="e building-fill"
				x="192.69"
				y="282.36"
				width="11.25"
				height="3.28"
			/>
			<rect
				className="e building-fill"
				x="181.03"
				y="294.54"
				width="4.99"
				height="2.23"
			/>
			<rect
				className="e building-fill"
				x="233.41"
				y="281.32"
				width="11.25"
				height="3.28"
			/>
			<rect
				className="e building-fill"
				x="312.56"
				y="280.27"
				width="12.46"
				height="3.61"
				transform="translate(-72.37 114.2) rotate(-18.28)"
			/>
			<rect
				className="e building-fill"
				x="245.59"
				y="293.84"
				width="14.56"
				height="9.02"
			/>
			<rect
				className="e building-fill"
				x="220.99"
				y="294.42"
				width="11.43"
				height="2.64"
			/>
			<rect
				className="e building-fill"
				x="220.99"
				y="299.64"
				width="11.43"
				height="2.64"
			/>
			<rect
				className="e building-fill"
				x="220.99"
				y="294.31"
				width="7.48"
				height="7.98"
			/>
			<rect
				className="e building-fill"
				x="273.19"
				y="296.05"
				width="4"
				height="8.67"
			/>
			<rect
				className="e building-fill"
				x="275.29"
				y="319.96"
				width="2.03"
				height="6.08"
				transform="translate(-136.64 423.75) rotate(-63.17)"
			/>
			<rect
				className="e building-fill"
				x="270.06"
				y="299.35"
				width="3.31"
				height="8.32"
			/>
			<rect
				className="e building-fill"
				x="308.69"
				y="294.66"
				width="16.7"
				height="14.41"
			/>
			<rect
				className="e building-fill"
				x="312.52"
				y="308.75"
				width="13.05"
				height="14.41"
			/>
			<rect
				className="e building-fill"
				x="298.78"
				y="319.7"
				width="8.92"
				height="4.1"
				transform="matrix(0.5, -0.86, 0.86, 0.5, -127.4, 421.9)"
			/>
			<rect
				className="e building-fill"
				x="281.3"
				y="367.79"
				width="3.34"
				height="10.01"
				transform="matrix(0.76, -0.65, 0.65, 0.76, -174.98, 276.2)"
			/>
			<rect
				className="e building-fill"
				x="302.53"
				y="350.74"
				width="3.34"
				height="10.01"
				transform="translate(-158.64 285.93) rotate(-40.89)"
			/>
			<rect
				className="e building-fill"
				x="319.4"
				y="336.64"
				width="3.34"
				height="10.01"
				transform="translate(-145.29 293.54) rotate(-40.89)"
			/>
			<rect
				className="e building-fill"
				x="369.12"
				y="354.27"
				width="4.29"
				height="9.21"
				transform="translate(-126.2 497.28) rotate(-59.58)"
			/>
			<rect
				className="e building-fill"
				x="320.52"
				y="301.09"
				width="13.05"
				height="12.15"
			/>
			<rect
				className="e building-fill"
				x="305.21"
				y="290.65"
				width="14.79"
				height="9.19"
			/>
			<rect
				className="e building-fill"
				x="338.1"
				y="276.73"
				width="13.4"
				height="14.07"
			/>
			<rect
				className="e building-fill"
				x="339.49"
				y="251.33"
				width="10.61"
				height="7.8"
			/>
			<rect
				className="e building-fill"
				x="301.73"
				y="254.81"
				width="12.53"
				height="4.67"
			/>
			<rect
				className="e building-fill"
				x="298.95"
				y="245.24"
				width="14.09"
				height="4.15"
			/>
			<rect
				className="e building-fill"
				x="311.47"
				y="221.05"
				width="7.83"
				height="11.11"
			/>
			<rect
				className="e building-fill"
				x="274.06"
				y="225.06"
				width="9.05"
				height="5.71"
			/>
			<rect
				className="e building-fill"
				x="304.22"
				y="110.68"
				width="11.37"
				height="3.16"
			/>
			<rect
				className="e building-fill"
				x="295.57"
				y="92.89"
				width="3.16"
				height="11.37"
				transform="translate(51.58 292.77) rotate(-56.69)"
			/>
			<rect
				className="e building-fill"
				x="255.62"
				y="224.19"
				width="9.05"
				height="3.97"
			/>
			<rect
				className="e building-fill"
				x="289.55"
				y="226.1"
				width="4.35"
				height="8.5"
			/>
			<rect
				className="e building-fill"
				x="234.22"
				y="238.28"
				width="57.25"
				height="20.16"
			/>
			<rect
				className="e building-fill"
				x="246.57"
				y="233.06"
				width="18.44"
				height="20.16"
			/>
			<rect
				className="e building-fill"
				x="259.62"
				y="245.07"
				width="19.84"
				height="20.5"
			/>
			<rect
				className="e building-fill"
				x="261.71"
				y="252.03"
				width="17.23"
				height="17.55"
			/>
			<rect
				className="e building-fill"
				x="261.71"
				y="255.16"
				width="8.87"
				height="17.55"
			/>
			<rect
				className="e building-fill"
				x="381.89"
				y="188.81"
				width="9.57"
				height="14.76"
			/>
			<rect
				className="e building-fill"
				x="393.49"
				y="225.23"
				width="10.27"
				height="8.96"
			/>
			<rect
				className="e building-fill"
				x="415.74"
				y="184.48"
				width="4.43"
				height="8.77"
				transform="translate(-1.91 373.44) rotate(-48.05)"
			/>
			<rect
				className="e building-fill"
				x="450.01"
				y="183.43"
				width="3.11"
				height="5.63"
				transform="translate(-27.72 91.97) rotate(-11.29)"
			/>
			<rect
				className="e building-fill"
				x="449.91"
				y="194.86"
				width="5.63"
				height="3.11"
				transform="translate(255.67 648.86) rotate(-89.92)"
			/>
			<rect
				className="e building-fill"
				x="435.76"
				y="112.78"
				width="8.39"
				height="12.67"
				transform="translate(78.28 396.5) rotate(-52.64)"
			/>
			<rect
				className="e building-fill"
				x="416.21"
				y="236.09"
				width="12.82"
				height="8.82"
				transform="translate(-40 390.27) rotate(-47.58)"
			/>
			<rect
				className="e building-fill"
				x="426.36"
				y="269.14"
				width="9.53"
				height="5.04"
				transform="translate(-60.22 406.72) rotate(-47.59)"
			/>
			<rect
				className="e building-fill"
				x="423.93"
				y="266.03"
				width="8.81"
				height="4.71"
				transform="translate(-58.72 403.6) rotate(-47.59)"
			/>
			<rect
				className="e building-fill"
				x="421.8"
				y="264.64"
				width="5.75"
				height="4.54"
				transform="translate(-63.97 380.12) rotate(-45.19)"
			/>
			<rect
				className="e building-fill"
				x="408.57"
				y="202.03"
				width="10.27"
				height="17.08"
			/>
			<rect
				className="e building-fill"
				x="403.69"
				y="202.03"
				width="10.27"
				height="4.76"
			/>
			<rect
				className="e building-fill"
				x="460.07"
				y="178.6"
				width="8.64"
				height="4.52"
			/>
			<rect
				className="e building-fill"
				x="463.37"
				y="178.6"
				width="5.16"
				height="5.92"
			/>
			<rect
				className="e building-fill"
				x="459.89"
				y="187.47"
				width="8.82"
				height="14.44"
			/>
			<rect
				className="e building-fill"
				x="463.72"
				y="194.26"
				width="4.99"
				height="14.09"
			/>
			<rect
				className="e building-fill"
				x="461.98"
				y="196.35"
				width="10.38"
				height="4.35"
			/>
			<rect
				className="e building-fill"
				x="454.67"
				y="161.2"
				width="9.34"
				height="12.35"
			/>
			<rect
				className="e building-fill"
				x="417.44"
				y="166.59"
				width="9.34"
				height="12.35"
			/>
			<rect
				className="e building-fill"
				x="400.04"
				y="158.94"
				width="12.47"
				height="16.01"
			/>
			<rect
				className="e building-fill"
				x="405.09"
				y="162.76"
				width="6.38"
				height="16.01"
			/>
			<rect
				className="e building-fill"
				x="379.68"
				y="164.85"
				width="14.56"
				height="11.83"
			/>
			<rect
				className="e building-fill"
				x="388.9"
				y="137.53"
				width="9.34"
				height="9.74"
			/>
			<rect
				className="e building-fill"
				x="355.5"
				y="138.06"
				width="17.34"
				height="11.14"
			/>
			<rect
				className="e building-fill"
				x="338.62"
				y="234.1"
				width="10.27"
				height="5.02"
			/>
			<rect
				className="e building-fill"
				x="209.57"
				y="375.8"
				width="2.73"
				height="9.86"
			/>
			<rect
				className="e building-fill"
				x="230.8"
				y="375.8"
				width="2.73"
				height="9.86"
			/>
			<ellipse
				className="e building-fill"
				cx="90.09"
				cy="346.59"
				rx="14.62"
				ry="14.53"
			/>
			<ellipse
				className="e building-fill"
				cx="118.63"
				cy="375.13"
				rx="14.62"
				ry="14.53"
			/>
			<ellipse
				className="e building-fill"
				cx="125.76"
				cy="315.27"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="84"
				cy="233.58"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="125.76"
				cy="325.98"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="125.76"
				cy="336.76"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="136.72"
				cy="315.27"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="205.36"
				cy="303.8"
				rx="1.91"
				ry="1.9"
			/>
			<ellipse
				className="e building-fill"
				cx="209.63"
				cy="303.8"
				rx="1.91"
				ry="1.9"
			/>
			<ellipse
				className="e building-fill"
				cx="136.72"
				cy="325.98"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="136.72"
				cy="336.76"
				rx="3.57"
				ry="3.55"
			/>
			<ellipse
				className="e building-fill"
				cx="190.31"
				cy="399.4"
				rx="2.17"
				ry="2.16"
			/>
			<polygon
				className="e building-fill"
				points="291.06 396.79 287.35 399.11 287.81 401.67 292.91 402.59 294.31 399.81 291.06 396.79"
			/>
			<polygon
				className="e building-fill"
				points="291.99 385.19 293.15 384.26 292.68 382.41 294.07 381.94 295.93 383.8 295.47 385.66 293.84 387.05 291.99 385.19"
			/>
			<polygon
				className="e building-fill"
				points="322.61 380.09 324.23 379.63 325.63 384.5 323.31 384.73 322.61 380.09"
			/>
			<polygon
				className="e building-fill"
				points="340.24 378.93 343.72 381.94 340.71 385.66 337.46 386.12 335.83 383.8 340.24 378.93"
			/>
			<circle className="e building-fill" cx="300.45" cy="370.69" r="2.67" />
			<ellipse
				className="e building-fill"
				cx="339.89"
				cy="353.52"
				rx="2.2"
				ry="1.74"
			/>
			<path
				className="e building-fill"
				d="M247.91,311l3.24-2.08,1.86,1.85V313S247.44,318.15,247.91,311Z"
			/>
			<path
				className="e building-fill"
				d="M287.58,206.55s4.41-.92,4.87,0,5.1-.69,5.1-.69l.24,3L295.93,210l.7,4.64s-6,4.18-10-2.32S287.58,206.55,287.58,206.55Z"
			/>
			<path
				className="e building-fill"
				d="M408.45,228.36l2.09,3.95s9.74-.7,1.85-5.57Z"
			/>
			<ellipse
				className="e building-fill"
				cx="382.7"
				cy="232.54"
				rx="2.32"
				ry="1.62"
			/>
			<path
				className="e building-fill"
				d="M418.42,150l4.64,1.16S427,149,428.86,149s3.48,3.25,2.32,5.33-6,2.56-6.49.47-5.8-2.32-5.8-2.32Z"
			/>
			<polygon
				className="e building-fill"
				points="193.27 231.15 191.88 233.58 194.66 237.06 199.19 237.76 201.62 232.89 193.27 231.15"
			/>
			<ellipse
				className="e building-fill"
				cx="131.33"
				cy="223.32"
				rx="1.74"
				ry="2.61"
			/>
			<path
				className="e building-fill"
				d="M114.62,225.23l-2.08-2.44,2.78-4.87s1.39-2.43,5.22,1.74S114.62,225.23,114.62,225.23Z"
			/>
			<path
				className="e building-fill"
				d="M80.87,172.45,85.51,169,85,166.65l5.34-5.34-.46-1.62,11.6-3.71,6.26,3s4.64,9.28-1.62,12.07l1.16,1.85-4.18,8.59-13.22,5.57-7.43-4.88Z"
			/>
			<polygon
				className="e building-fill"
				points="86.9 261.54 89.45 259.22 95.25 263.63 95.48 270.35 94.09 274.3 96.18 275.69 95.95 278.24 93.86 278.7 91.08 281.72 88.06 282.65 80.17 276.15 84.81 270.82 85.04 267.57 87.83 262.93 86.9 261.54"
			/>
			<path
				className="e building-fill"
				d="M104.71,232.71l7.48-5.22,1.91,1.57,7.48.52a9.36,9.36,0,0,1,6.44,4l5.92,2.79s-1.74,5,1,7.48c0,0-3.13,7.13-7.48,7.83l-6.09-2.79-16.88-.52s-3.65-3.13-1.74-9.74A14.67,14.67,0,0,0,104.71,232.71Z"
			/>
			<path
				className="e building-fill"
				d="M120.54,258.81s17.4.18,21.92-1.74l14.62.87s4.35,0,2.61,8l-4,3.3-2.26-1.39-8.53.52s-5.05,5.92-11.83,7.66l-2.26-1.39-7,.69S117.23,269.77,120.54,258.81Z"
			/>
			<path
				className="e building-fill"
				d="M157.25,232s12.53-5.4,17.75,8.17A19.77,19.77,0,0,1,167,252l-16.71.34s-7-1.39-7.65-4.35-1.74-3.82-1.74-3.82-1.92-6.44,5.91-11.84Z"
			/>
			<path
				className="e building-fill"
				d="M168.21,217.75l1.66,1.91,2.09.52s1,4.88.17,5.75-3.13,2.43-4.09.26-1.48-1.39-1.74-1.13-2.26-.44-1-2.44Z"
			/>
			<path
				className="e building-fill"
				d="M185.27,218.44l8.09-4,10.35,9.31s2.52.61,3.22,2,.78,4,.35,4.44S202,235,202,235a8.57,8.57,0,0,1-7.05-.69c-3.56-2.09-10.52-8-10.52-8Z"
			/>
			<path
				className="e building-fill"
				d="M174.57,229s2.34-3.39,3.3-3.22,10.09,4.87,7.74,20.53l1.83,1.66a14.65,14.65,0,0,1-9.48,9c-7.31,2.09,1.48-10.17,1.48-10.17s1.65-9.49-1.57-12.71S174.57,229,174.57,229Z"
			/>
			<path
				className="e building-fill"
				d="M148.84,290.77s-6.84.7-8.12,1.28-3.13,3.13-11.83,2.08c0,0-3.13-5.68.58-7.88s1.74-3.48,7-3.72a18.34,18.34,0,0,0,3.48-3.48c.81-1.39,7.77.35,9.28,3.25S149.66,290.31,148.84,290.77Z"
			/>
			<path
				className="e building-fill"
				d="M136.66,150.64l-2.08,2.55s1.74,4.06,4.64,3.6,1.5-4.76.92-5S136.66,150.64,136.66,150.64Z"
			/>
			<path
				className="e building-fill"
				d="M162.42,168.62s-1.4,5-4.06,4.76-3.25-2-3.25-2l-.81-4.53s3.24-2.55,4.87-1.51A15.9,15.9,0,0,1,162.42,168.62Z"
			/>
			<path
				className="e building-fill"
				d="M158,144.49h-1.74a31.55,31.55,0,0,0-3,2c-.46.46-1,4.06,3.83,3.13l1.51-2.44h2.32l2.78-2.78-.93-4.18-4.41,2.09Z"
			/>
			<path
				className="e building-fill"
				d="M168.33,122.34s5.57-1.63,7,.69-.7,7-.7,7H170S167.17,128.37,168.33,122.34Z"
			/>
			<path
				className="e building-fill"
				d="M202.2,135.79l-3.25-4.4.24-2.79s5.8-.93,7,2.09S202.2,135.79,202.2,135.79Z"
			/>
			<path
				className="e building-fill"
				d="M167.87,196.11l-3-6.72s-4.18-.47-4.87-1.86-3.71.93-3.71.93-2.79,10.21,3.48,13.45l-.82,4.06,3.31,4.76s4.35-2.84,6.44-2.61,5.62-4.64,5.62-4.64,2-6-2.14-6.9S167.87,196.11,167.87,196.11Z"
			/>
			<polygon
				className="e building-fill"
				points="184.51 197.68 184.57 204.06 190.02 204.29 184.51 197.68"
			/>
			<path
				className="e building-fill"
				d="M201.8,212.24s.46-9.28,11.77-5.92,9.69,11.25,9.69,11.25-4.12,4.76-10.85,1.63c0,0-4.87-4.93-7.54-4.82A2.77,2.77,0,0,1,201.8,212.24Z"
			/>
			<path
				className="e building-fill"
				d="M176,170.48l.69-7.54,5.57-3.25,6.15.7,7.77-4.64s10.56.46,10.67,4.75,0,3.83,0,3.83,7.31,3,6.38,7.77l12.53,6s1.86,3.6,1.28,5l-.58,1.39s1.85,9.17-1,10.68-13.92,5.33-13.92,5.33L205.22,197l-14.5-.69L178,184.86l-2.9-6.38-2.44-1.16,1.16-5.91Z"
			/>
			<path
				className="e building-fill"
				d="M243.38,172.22l3.13,4.64L242.92,181s-8,.93-9.75-1.5,3.83-6.38,4.64-6.62S243.38,172.22,243.38,172.22Z"
			/>
			<path
				className="e building-fill"
				d="M242,192.29l1.28,5.8-7.54,13.8v6.61s14.15.23,21.69-8.93c0,0,8.58-5,10.44-7.54s0-3.71,0-3.71,6-3.48,6.61-5.69-.23-2.66-.23-2.66l1.27-1.16s.93-6.38-3.13-6.38l-9.05,1a6.16,6.16,0,0,0-7.65-.35C251.62,186,242,192.29,242,192.29Z"
			/>
			<path
				className="e building-fill"
				d="M252.31,161.2l7.2-1s5.45,3.48,3.94,9.17l-6.15,4.52-6-1.62S247,165.72,252.31,161.2Z"
			/>
			<path
				className="e building-fill"
				d="M269.13,155.17s7.2-4.53,8.82-6.15,7.66-6.38,7.66-6.38h4.06l6.26,12.41-5.57,9.74s-8.81,1.05-13,4.53c0,0-3.6-4.64-6.5-4.64Z"
			/>
			<path
				className="e building-fill"
				d="M287.23,169.32l2.78,2.2a7.12,7.12,0,0,1-.11,2.09c-.23.7-3.6,3.71-3.6,3.71h-2.78l-1.86-2.78S283.87,170.25,287.23,169.32Z"
			/>
			<path
				className="e building-fill"
				d="M316.69,159c3.8,1.27,4.3,3.95,15.9,2l1.85,3.94.81-.7s6.15,1.86,3.48,6.5a37.32,37.32,0,0,1-4.64.7c-.58-.12-3.24,5.8-5.91,6s-8.82-2.32-8.82-2.32-.46-1.63-2,.69-5.77-1.62-5.16-5.42c0,0-1.63-4.32,1.22-7.74S316.35,158.88,316.69,159Z"
			/>
			<path
				className="e building-fill"
				d="M167.26,337.63s3-1.48,4,.79-.52,2.69-.52,2.69l-1.31,1.74s-5.48,1.66-3.74-3.91A5.06,5.06,0,0,0,167.26,337.63Z"
			/>
			<path
				className="e building-fill"
				d="M178.74,342.16l1.39-1.92s2.87-1.21,3.22,1.57-.78,3.57-2.78,2.78A2.49,2.49,0,0,1,178.74,342.16Z"
			/>
			<path
				className="e building-fill"
				d="M214.41,351.29s-1.65-9.22-4.87-10.87c0,0-.78-.18-.52-1.74,0,0-.52-.87-2.53-.18s-2.61-3.13-.26-4.52h2.44s1-.87,1-7.22,7.3-5.48,7.3-5.48,5.46.58,6.38-2.9,7.43-4.88,8.82.23c0,0,4.41,0,6.73,2.78,0,0,2.9-3.13,8.81.12,0,0,2.56,1.62,4.18,1.28A2.54,2.54,0,0,1,254.4,324s4.18-1.28,5.34,1a26.78,26.78,0,0,1,1.74,6.5s2,8.46.35,10.32-2.44,10.09-2.44,10.09l-4.52,4.87-.24,3.6s-1.27,2-1.85,3.13a6.5,6.5,0,0,1-4.41,3.37c-2.09.23-2.67,4.87-2.67,4.87l-.11.58-9.28.11s-5.8-5.45-7.2-5-2.2-2-2.2-3.14a3.58,3.58,0,0,0-3.25-3.48C221.11,360.37,222.1,355.67,214.41,351.29Z"
			/>
			<path
				className="e building-fill"
				d="M268.79,354.34s3.82-5.45,6.26,0c0,0-.35,3-2,4.41s-1.16-.47-3.83.92S268.21,354.45,268.79,354.34Z"
			/>
			<path
				className="e building-fill"
				d="M304.75,379.51s3.36-3.71,5.33-3.6,4.64-2.08,4.64-2.08,3.95-1.75,3.37,2.66c0,0-5.69,6.15-11.72,7.77l-5.92.12s-1.74-3.48,2.32-4.58S304.75,379.51,304.75,379.51Z"
			/>
			<path
				className="e building-fill"
				d="M328.41,361.65l5.74-3.43,2.84,3.14-7.36,5.22s-1.86.92-1.63,4-8.12,2.08-3.94-2.38c0,0,.12-.87-.17-1s.23-1.91.87-1.85-.29-.82-.29-.82-2.85-1.56-.58-4.34C323.89,360.2,326.21,358.57,328.41,361.65Z"
			/>
			<path
				className="e building-fill"
				d="M384.15,285.61c2.86.9,13.05-2.26,9.92,6.44s-11.84,8-11.84,8l-2.78,1.74-3.83-2.44-1-1.74s-3.83,2.09-4.87-2.78c0,0-.35-1.48-1.4-1.39s.18-1.66.61-1.83-.43-1.48-1.56-1.83-7.14-8.44,1.56-13.39c0,0,6-4.09,7.05,1.21C376,277.6,378.93,284,384.15,285.61Z"
			/>
			<path
				className="e building-fill"
				d="M389.43,312.23s5-2.67,4.52,2.32-3.48,2.78-4.52,1.86S387.34,314.2,389.43,312.23Z"
			/>
			<path
				className="e building-fill"
				d="M408.68,322.09s3.95-5.45,6-.46a5.93,5.93,0,0,1-2,2.78,2.06,2.06,0,0,0-.41,1.83c.27,1.13-4.21.69-4.21.69s-1.83.44-2.35,1.48-4.83-3.3.21-6.09C406,322.32,407.59,321.38,408.68,322.09Z"
			/>
			<ellipse
				className="e building-fill"
				cx="428.73"
				cy="307.44"
				rx="3.83"
				ry="3.48"
			/>
			<ellipse
				className="e building-fill"
				cx="428.76"
				cy="315.23"
				rx="2.33"
				ry="3.48"
			/>
			<ellipse
				className="e building-fill"
				cx="427.71"
				cy="308.45"
				rx="3.37"
				ry="4"
			/>
			<path
				className="e building-fill"
				d="M455.83,267.69l.35-5.22,9.22-5.57s13.23-.87,15,4.87-3,9.92-3,9.92h-5.92l1.57,1.91-.52,6.27-4.7.34-3.65,3s-2.27-1.91-5.75.35-7.48.35-7.48.35l-.69-3.31-3-3.48,1-8.18Z"
			/>
			<ellipse
				className="e building-fill"
				cx="344.21"
				cy="195.56"
				rx="2.17"
				ry="2"
			/>
			<ellipse
				className="e building-fill"
				cx="347"
				cy="196.26"
				rx="2.17"
				ry="2.35"
			/>
			<path
				className="e building-fill"
				d="M319.77,190.26h-3s-2.26-7.31.7-8.36,6.09,1.57,5.74,3.48-2.26,2.61-1.39,3.83a3.42,3.42,0,0,1,.52,2.61l-2.09.18Z"
			/>
			<path
				className="e building-fill"
				d="M337.86,180.34l.35,3.3s2.79-.87,3,1.22l3.48-.87S342.21,176.34,337.86,180.34Z"
			/>
			<path
				className="e building-fill"
				d="M361.18,195.65s3-6.44,6.44-7.31c0,0,6.61,2.44,4,5.74,0,0-2.61,3.66-2.44,4.53s-5.22.52-5.22.52Z"
			/>
			<path
				className="e building-fill"
				d="M372.32,211.83l-1.57-6.09s-.35-4.35,5.92-2.78c0,0,3.48-.18,3.13,4l1.56,1.57s1.57,2.78-2.95,4l-.18,3.3-1.91,2.09-3-3,.87-1.56S375.27,212.35,372.32,211.83Z"
			/>
			<path
				className="e building-fill"
				d="M350.91,216.7l1.57-1.21-1.91-3.14v-6.78s4-5.4,10.61-3.66l1.74,2.27s6.26,6.09,7.13,9.39-6.43,7.48-7,7.48-3.65-.52-3.65-.52l-1.91,1.74Z"
			/>
			<path
				className="e building-fill"
				d="M312.63,142.75l7,4.7s10.27-1.39,12-8c0,0-6.79-11.66-9.05-12a42.74,42.74,0,0,0-7.31.18s-4,3.42-3.36,7.54,1.51,3.88,1.51,3.88S313.5,142.52,312.63,142.75Z"
			/>
			<path
				className="f border-stroke no-fill"
				d="M53.07,156.89l19.83-3.14s11-9.91,16.19-19.31c0,0,8.87-2.09,15.13,3.66l10.44-4.18s2.61,8.87,11,5.74l4.18,6.79,19.31-7.83,2.09-3.13s8.87,5.21,9.4-7.83,3.32-12.51,3.32-12.51-2.32-7.66,10-15.55l3-.23L179.7,95s10.44.47,17.63-7,13.46-13.45,16-9.28c0,0,7.51-6.86,14.15-2.55,4.64,3,20.88-4.17,20.88-4.17s14.15-3.48,20.88,1.16,24.13,6.26,26.68,5.8,14.15.23,27.14,7.65c0,0,14.39,3.71,18.33,2.09s4.18-2.78,7.19-.46,7.66,4.64,17.4,1.16A19.12,19.12,0,0,1,376,88c5.8.7,28.07-3,34.8-14.15,0,0,1.39-3.94,5.1-4.17s3.71-9.28,13.69-2.56,6.5,10,15.54,8.12c0,0,3.72,1.16,4.88,4a8.16,8.16,0,0,1,5.16,3.71s1.4,1.67,6.44,7.89c.94,1.16,4.05,2.23,4.87,3.48,1.06,1.61,1.24,5.69,2.09,7.42,1,2,4.22,5.36,5.39,7.31.5.82-.64,3.78,0,5.39,1,2.4,3.26,4.14,3.31,5.4a143.66,143.66,0,0,0,2.95,23.49c.33,1.53,3.3,3.92,4.18,6.61,1.43,4.34,0,10.26,0,10.26s6.09,5.75,6.44,9.57c.63,7,.52,19.49.52,19.49L491,212.53s-2.78,16.18-1.39,21.23c1.17,4.23.87,16.53.87,16.53a54.59,54.59,0,0,1,2.26,8.87c1.14,6.59,2,15.37,3,19,1.39,5-2.61,13.39-2.61,13.39s-12,45.94-50.29,45.07c-33.94-.77-42.8,14.79-42.8,14.79s-1.22,3.13.18,5.57c0,0-.7,5.39-5.57,6.09,0,0-3.66,8.18-14.79,13.4s-17.13,14.37-21.23,19.83c-9.83,13.11-33.41,30.8-59.68,27-27.94-4.07-26.28-7.13-38.8,1.91s-9.57,30.11-42.46,16.36c0,0-15.31-6.44-20.18-5.57s-16.88-6.44-16.88-6.44-5.4-2.08-8.35-1.39-10.62-3.48-11.31-4.35c0,0-7.14,5.74-9.22,5.57s-5.22,5.05-5.22,5.05H18.92V262.12s9.75-3.48,10.62-6.44V247l-4.87-4s-.53-14.79-4.18-19.84l8.7-9.57S35,221.05,37.37,215c.73-1.89-.18-5.91-6.61-4.69l-.18-16.88L45.72,189s3.31-15.49,4.87-18.45S54.5,158.66,53.07,156.89Z"
			/>
		</SVGOverlay>
	),
	armada: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .c{strokeWidth:0.7px;}
            .d,.e{strokeWidth:1.03px;}
            .g{strokeWidth:0.96px;}
            .c,.d,.e,.g{strokeMiterlimit:10;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M35.12,202.21C59,177.63,111.55,140.14,214.5,129.44c94.37-9.82,190,5.26,243.63,33.83,12.77,6.8,35.13,25,36.5,49.4,2.19,39,8.41,84.76-47.33,128.81-46.13,36.45-170.62,63.65-277.1,52.27,0,0-59.16-3.83-120.84-37C38.61,351,23.86,340.73,21,316.6c-4.38-37.12-4.14-63.41,1-87.62C23.55,221.56,23.18,214.51,35.12,202.21Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M61.59,300s64.94,1.65,100,10c45.09,10.77,48,21,48,21s-19.71,11.32-57.32,6-89.44-15-93.64-17.7Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M221.68,347.27l11.68,10.4,33-34.87s4.93-8.57,3.83-16.42c0,0-6.2-2-16.06,5.29Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M317.88,309.3s23.54,1.64,25,8.58-26.65-3.11-26.65-3.11Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M306.56,188.82a80,80,0,0,1,45.09-4.38c25,4.93,104,23.55,104,23.55l-4.56,20.08-109-17.89S312.76,201.05,306.56,188.82Z"
			/>
			<path
				className="d feature-stroke no-fill"
				d="M282.83,159.43l11.86,7.12L269,208.17s-10.23,13.87-17.89,15.7c0,0,.91-14.24,6.75-23S282.83,159.43,282.83,159.43Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M197.4,205.07l1.1-5.66s-16.07-6.57-26.47-1.83C172,197.58,172.76,206.35,197.4,205.07Z"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M320.54,236.83H199.12c-12.54,0-22.71,9.24-22.71,20.64v6.36c0,11.4,10.17,20.64,22.71,20.64H320.54c12.54,0,22.71-9.24,22.71-20.64v-6.36C343.25,246.07,333.08,236.83,320.54,236.83Zm-22.93,25.4c0,5.33-5.33,9.65-11.9,9.65H222.08c-6.57,0-11.9-4.32-11.9-9.65v-3c0-5.33,5.33-9.65,11.9-9.65h63.63c6.57,0,11.9,4.32,11.9,9.65Z"
			/>
			<path
				className="e feature-stroke no-fill"
				d="M296.7,256s-12.23.36-14.24-1.65-56,0-56,0-10.77.55-13.14,6c0,0,1.1,5.84,13.51,6s55.86,1.28,55.86,1.28,4.38-3.47,13.14-2.37C295.79,265.31,300.17,264.39,296.7,256Z"
			/>
			<rect
				className="f building-fill"
				x="236.1"
				y="256.54"
				width="5.29"
				height="1.83"
			/>
			<rect
				className="f building-fill"
				x="236.1"
				y="262.93"
				width="5.29"
				height="1.83"
			/>
			<rect
				className="f building-fill"
				x="242.67"
				y="257.3"
				width="3.47"
				height="6.71"
			/>
			<rect
				className="f building-fill"
				x="261.56"
				y="257.3"
				width="3.47"
				height="6.71"
			/>
			<rect
				className="f building-fill"
				x="268.5"
				y="256.38"
				width="1.83"
				height="2.33"
			/>
			<rect
				className="f building-fill"
				x="271.33"
				y="256.38"
				width="1.83"
				height="2.33"
			/>
			<rect
				className="f building-fill"
				x="268.5"
				y="262.61"
				width="1.83"
				height="2.33"
			/>
			<rect
				className="f building-fill"
				x="271.33"
				y="262.61"
				width="1.83"
				height="2.33"
			/>
			<polygon
				className="f building-fill"
				points="84.53 310.03 98.89 311.73 99.13 308.81 132.96 313.68 133.21 306.38 150.97 308.81 150.97 314.65 183.83 319.28 183.1 335.83 148.05 331.44 147.57 336.56 130.29 334.12 130.53 327.55 97.43 322.2 97.92 319.28 83.56 317.08 84.53 310.03"
			/>
			<polygon
				className="f building-fill"
				points="64.33 305.4 79.91 307.84 78.93 317.81 63.6 316.11 64.33 305.4"
			/>
			<ellipse
				className="f building-fill"
				cx="183.59"
				cy="321.34"
				rx="1.95"
				ry="2.56"
			/>
			<ellipse
				className="f building-fill"
				cx="189.31"
				cy="328.28"
				rx="3.29"
				ry="2.92"
			/>
			<polygon
				className="f building-fill"
				points="243.46 327.31 256.12 313.43 264.15 320.49 251.25 335.1 249.67 333.51 248.21 334.73 244.07 331.44 245.16 329.5 243.46 327.31"
			/>
			<polygon
				className="f building-fill"
				points="227.52 348.97 230.81 344.59 235.43 348.12 231.41 352.5 227.52 348.97"
			/>
			<circle className="f building-fill" cx="233.85" cy="339.84" r="1.58" />
			<circle className="f building-fill" cx="240.54" cy="344.95" r="1.58" />
			<polygon
				className="f building-fill"
				points="330.71 315.14 331.69 315.14 331.99 313.19 334.49 313.37 334.49 314.41 337.89 314.41 338.08 315.63 339.29 315.63 339.35 316.96 338.08 317.02 338.02 318.67 334.49 318.67 334.43 317.94 330.84 317.88 330.71 315.14"
			/>
			<polygon
				className="f building-fill"
				points="349.64 184.08 374.46 189.37 373.92 192.29 390.89 195.58 391.99 192.84 411.15 196.49 410.35 199.9 404.95 222.77 385.96 219.31 386.33 216.02 369.17 212.19 368.99 215.66 343.61 210.91 349.64 184.08"
			/>
			<polygon
				className="f building-fill"
				points="432.33 204.34 409.44 199.9 404.58 218.94 428.53 223.5 432.33 204.34"
			/>
			<polygon
				className="f building-fill"
				points="278.45 169.84 282.46 164.18 290.5 169.29 287.21 175.31 278.45 169.84"
			/>
			<path
				className="f building-fill"
				d="M259.83,201.05l9.31-14.78,1.28.54,7.66-11.68L276.8,174l1.83-2.19,7.12,5.11-1.28,2-1.82-.73-6.39,12.05,1.27,1.46-8.94,14.79S259.65,208,259.83,201.05Z"
			/>
			<path
				className="f building-fill"
				d="M87.69,224.84l3.65-5.6L109.6,227s4.14,9.25,10.22,6.09c0,0,18,9,23.36,25.31C143.18,258.43,109.84,259.89,87.69,224.84Z"
			/>
			<path
				className="f building-fill"
				d="M381,259.89s5.36-1.95,12.66,2.68,46.73,33.1,46.73,33.1L437,300.78l-3.89-3.65-2.68,2.67-3.65-3.89,1.46-2-3.41-2.43-3.41,4.14-9.24-6.82-1.95,1.95-5.6-4.14-1.95.73-3.4-2.19.24-1.95-5.84-4.86,4.62-6.33Z"
			/>
			<rect
				className="f building-fill"
				x="184.8"
				y="251.86"
				width="17.77"
				height="17.77"
			/>
			<rect
				className="f building-fill"
				x="188.94"
				y="240.66"
				width="9.49"
				height="4.62"
			/>
			<rect
				className="f building-fill"
				x="188.94"
				y="276.2"
				width="9.49"
				height="4.62"
			/>
			<rect
				className="f building-fill"
				x="188.94"
				y="243.58"
				width="7.55"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="216.2"
				y="237.26"
				width="11.93"
				height="8.52"
			/>
			<rect
				className="f building-fill"
				x="200.87"
				y="241.76"
				width="2.92"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="205.49"
				y="241.76"
				width="2.92"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="200.87"
				y="275.83"
				width="2.92"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="186.3"
				y="275.71"
				width="1.64"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="205.49"
				y="275.83"
				width="2.92"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="188.94"
				y="272.55"
				width="7.55"
				height="5.35"
			/>
			<rect
				className="f building-fill"
				x="216.2"
				y="237.26"
				width="11.68"
				height="8.28"
			/>
			<rect
				className="f building-fill"
				x="217.66"
				y="247.54"
				width="8.21"
				height="2.56"
			/>
			<rect
				className="f building-fill"
				x="282.46"
				y="247.54"
				width="8.21"
				height="2.56"
			/>
			<rect
				className="f building-fill"
				x="282.46"
				y="271.45"
				width="8.21"
				height="2.56"
			/>
			<rect
				className="f building-fill"
				x="333.57"
				y="261.47"
				width="4.08"
				height="5.48"
			/>
			<rect
				className="f building-fill"
				x="333.57"
				y="254.78"
				width="4.08"
				height="5.48"
			/>
			<rect
				className="f building-fill"
				x="298.4"
				y="273.28"
				width="2.98"
				height="3.89"
			/>
			<rect
				className="f building-fill"
				x="298.4"
				y="244.07"
				width="2.98"
				height="3.89"
			/>
			<rect
				className="f building-fill"
				x="217.66"
				y="271.42"
				width="8.21"
				height="2.08"
			/>
			<rect
				className="f building-fill"
				x="217.66"
				y="278.27"
				width="8.4"
				height="6.45"
			/>
			<rect
				className="f building-fill"
				x="232.75"
				y="237.26"
				width="43.81"
				height="1.95"
			/>
			<rect
				className="f building-fill"
				x="232.75"
				y="247.96"
				width="43.81"
				height="1.95"
			/>
			<rect
				className="f building-fill"
				x="240.05"
				y="238.9"
				width="27.75"
				height="11.07"
			/>
			<rect
				className="f building-fill"
				x="232.75"
				y="271.82"
				width="43.81"
				height="1.95"
			/>
			<rect
				className="f building-fill"
				x="232.75"
				y="282.52"
				width="43.81"
				height="1.95"
			/>
			<rect
				className="f building-fill"
				x="240.05"
				y="273.46"
				width="27.75"
				height="11.07"
			/>
			<rect
				className="f building-fill"
				x="278.99"
				y="276.14"
				width="12.17"
				height="8.4"
			/>
			<rect
				className="f building-fill"
				x="281.91"
				y="237.19"
				width="9.25"
				height="5.72"
			/>
			<rect
				className="f building-fill"
				x="300.17"
				y="237.92"
				width="2.19"
				height="4.99"
			/>
			<rect
				className="f building-fill"
				x="323.9"
				y="237.92"
				width="2.19"
				height="4.99"
			/>
			<rect
				className="f building-fill"
				x="246.14"
				y="249.61"
				width="15.58"
				height="23.73"
			/>
			<polygon
				className="f building-fill"
				points="306.01 247.23 306.01 274.25 320.61 274.25 330.11 265.73 330.11 256.24 320.61 246.99 306.01 247.23"
			/>
			<ellipse
				className="f building-fill"
				cx="307.93"
				cy="261.2"
				rx="4.65"
				ry="5.75"
			/>
			<ellipse
				className="f building-fill"
				cx="336.92"
				cy="194.3"
				rx="3.65"
				ry="3.16"
			/>
			<ellipse
				className="f building-fill"
				cx="259.89"
				cy="210.18"
				rx="2.31"
				ry="2.25"
			/>
			<polygon
				className="f building-fill"
				points="176.41 197.4 183.34 199.04 182.98 202.69 176.23 201.42 176.41 197.4"
			/>
			<path
				className="g border-stroke no-fill"
				d="M35.12,202.21C59,177.63,111.55,140.14,214.5,129.44c94.37-9.82,190,5.26,243.63,33.83,12.77,6.8,35.13,25,36.5,49.4,2.19,39,8.41,84.76-47.33,128.81-46.13,36.45-170.62,63.65-277.1,52.27,0,0-59.16-3.83-120.84-37C38.61,351,23.86,340.73,21,316.6c-4.38-37.12-4.14-63.41,1-87.62C23.55,221.56,23.18,214.51,35.12,202.21Z"
			/>
		</SVGOverlay>
	),
	dieMaschine: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
                .d{strokeMiterlimit:10;}
                .d{strokeWidth:0.96px;}
                `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<polyline
				className="b field-fill"
				points="77.44 262.72 81.92 255.68 87.36 252.16 92.8 252.16 101.12 247.36 103.68 243.84 116.32 244 120.16 249.76 131.36 249.76 136.16 252.32 136.16 259.04 139.36 263.84 144.8 263.84 153.12 252.32 162.4 255.84 172.96 257.12 187.68 276.96 192.8 272.8 194.08 269.6 192.8 265.44 185.54 257.2 203.04 239.84 200.05 232.66 205.6 219.36 210.72 216.16 210.72 211.36 206.56 210.08 196 188.96 197.6 185.76 206.56 181.28 209.44 177.12 196 164 197.6 160.8 204.64 155.36 203.04 145.76 197.92 141.28 208.16 130.72 214.88 136.16 220.32 141.28 224.8 143.2 229.6 141.28 238.88 148 254.88 148 262.24 145.76 267.36 131.04 272.12 126.51 281.44 126.56 289.76 120.16 297.76 120.16 296.16 107.04 288.48 98.72 289.76 89.44 318.56 73.44 343.84 86.56 345.44 100.64 348.32 106.08 361.12 111.84 376.16 103.52 395.36 127.52 395.36 148 384.48 156.64 378.08 152.48 368.48 150.88 360.8 157.28 363.68 164 370.72 170.4 374.24 186.72 381.6 201.44 357.28 228.32 357.28 267.04 373.6 297.12 366.24 306.72 368.8 316 374.24 321.44 385.12 319.52 394.08 333.28 404.64 355.68 406.24 363.68 407.52 367.52 407.52 375.84 405.28 383.2 396 391.2 391.84 392.48 389.6 380.64 396 374.24 396 367.52 390.56 372 361.44 384.16 352.8 408.8 320.8 408.8 291.68 384.16 254.88 383.52 254.47 337.59 197.85 337.79 190.24 324 186.72 314.72 182.24 312.48 176.8 313.44 177.76 319.52 174.24 331.68 154.08 330.4 132.51 330.39 113.76 325.6 114.72 319.84 111.84 308 109.6 303.84 103.84 306.72 100.96 316 79.84 297.12 83.04 284 72.48 267.68"
			/>
			<path
				className="c building-fill"
				d="M394.64,385a12.37,12.37,0,0,0-1-3c-.41,0-2.3,3.93-1.95,4.05.19.08,1.05.58,1.91,1.13a5.57,5.57,0,0,0,1.71.87A16.4,16.4,0,0,0,394.64,385Zm-3.84,7.3a.41.41,0,0,0-.15.55c.3.48.51.39.51-.22C391.16,392.32,391,392.18,390.8,392.29Zm0-1.74c-.19-.12-.35,0-.35.33s.16.54.35.54a.34.34,0,0,0,.35-.33A.77.77,0,0,0,390.81,390.55Zm0-1.74c0-.29-.16-.52-.35-.52s-.35.23-.35.52.16.52.35.52S390.81,389.1,390.81,388.81Zm-.44-1.68a1.15,1.15,0,0,0-.05-.84c-.38-.38-.64.23-.37.85S390.23,387.74,390.37,387.13Zm-.26-2.15c0-.29-.15-.52-.35-.52s-.34.23-.34.52.15.52.34.52S390.11,385.27,390.11,385Zm-.48-1.57c.07,0,.13-.23.13-.52s-.15-.52-.33-.52-.25.24-.14.52S389.55,383.41,389.63,383.41Zm.13-2.24c0-.08-.15-.25-.34-.36s-.35-.05-.35.15a.37.37,0,0,0,.35.37C389.61,381.33,389.76,381.26,389.76,381.17ZM380.46,349c-2-5.46-3.74-10-3.81-10.07s-10.89,3.05-11.2,3.31,7.71,21.72,8,21.72a4.15,4.15,0,0,0,1.07-.33c.44-.18,2.88-1.07,5.43-2,3.78-1.33,4.59-1.74,4.41-2.19S382.48,354.41,380.46,349Zm-28.4-58.25-2.26-.57-3.88,2.17c-3.85,2.16-3.88,2.18-3.67,3.29a10.25,10.25,0,0,1-.4,3.38,8.71,8.71,0,0,0-.45,2.39c3.52,2.76,5.87,3.85,9.49,4.38.15,0,.58-.65,1-1.49a11.79,11.79,0,0,1,2.76-3.39L356.7,299l-.87-3.13C354.56,291.25,354.64,291.36,352.06,290.71Zm-1.95,52.81-4.5-1.79-2.8,2.13c-2.51,1.91-2.82,2.27-3,3.53-.35,2.3.82,3.87,5.43,7.33,3.88,2.9,4,3,5.72,2.87l1.74-.11.95-5.22c.52-2.87.95-5.61.95-6.09C354.6,345.38,354.21,345.15,350.11,343.52Zm-7.64-167.78-6.22,2.86a44.84,44.84,0,0,0-6,3c0,.17,2.92,6.09,6.49,13.17,4.82,9.58,6.61,12.82,7,12.67s2.35-1.48,4.61-3.06l4.11-2.87-.66-1.74-4.88-13C344.58,180.68,342.59,175.68,342.47,175.74Zm-11-11.06a.88.88,0,0,0,.25.82c.31.32.69.11,1.63-.93a46.86,46.86,0,0,1,3.52-3.33,15.15,15.15,0,0,1,2.6-2,12.47,12.47,0,0,1,2.28,2l2,2,2.64-2.36a21.27,21.27,0,0,0,2.61-2.58c0-.11-2.05-2-4.52-4.17a51.05,51.05,0,0,1-4.5-4.25c0-.16.78-2.08,1.74-4.28s1.74-4.08,1.74-4.19S336,133.88,330.88,129l-2.32-2.19-8.79,7.69-8.78,7.7-5.9-5.83-5.9-5.84-.82,1c-.69.87-.74,1.08-.31,1.32a1,1,0,0,0,.88.06c.45-.28,1.27.5,18.7,17.56C325.35,158.08,331.59,164.44,331.5,164.68Zm2.05,148.15-4,1.74-4,1.73-.76,5.06c-.67,4.52-.86,5.2-1.8,6.39l-1.05,1.33.41,2.28.43,2.28h4.93l4.52-3.87c2.49-2.13,4.62-4,4.74-4.25a38.65,38.65,0,0,0,1-4l.78-3.61-2.56-2.53Zm-18.06-203.3,2.42,1.35a16,16,0,0,0,2.8,1.37,19.62,19.62,0,0,0,3.13-3.53c1.51-2,2.88-3.76,3-4s-.49-1.71-2.17-4.31a24.69,24.69,0,0,1-2.15-3.63c.17.11.22-.16.11-.58s-.27-.59-.34-.37a.45.45,0,0,1-.62.22,21,21,0,0,0-4.17.42l-3.7.61-1,1.43-1,1.42,1.8,4.81Zm8,62.66c.43-.32.79-.65.79-.75a2.09,2.09,0,0,0-.31-.67c-.23-.37-.44-.4-.78-.13s-1.84-.92-6.55-5.35c-11.83-11.13-12.36-11.57-12.36-10.28,0,.25,4.14,4.35,9.21,9.11C322.6,172.65,322.74,172.75,323.52,172.19Zm-3.87-76.28c.08,0,.15-.16.15-.35a.36.36,0,0,0-.37-.35c-.2,0-.27.16-.15.35S319.56,95.91,319.65,95.91ZM293.7,144.62c-3.51-2.87-4.09-3.77-3.07-4.78.33-.33.33-.52,0-.84-.67-.67-1.56.5-1.6,2.09,0,1.33.08,1.46,3.79,4.52s4.36,3.39,4.36,2.34A17.82,17.82,0,0,0,293.7,144.62Zm-14.62,11a65.43,65.43,0,0,0-5.35,4.16l-5.05,4.15.43,1.07c.24.58,1.6,3.92,3,7.42a40.42,40.42,0,0,0,2.92,6.35c.19,0,3.6-1.51,7.58-3.35s7.25-3.4,7.25-3.46C289.87,171.57,279.33,155.6,279.08,155.6Zm-5.38,22.8c-.08,0-.25.16-.37.35s0,.35.16.35a.37.37,0,0,0,.37-.35C273.86,178.56,273.79,178.4,273.7,178.4Zm-2.2,1.33c-.09.25.07.33.41.2s.55-.36.55-.55C272.46,178.92,271.67,179.21,271.5,179.73Zm-1.38.42c-.44,0-.79.15-.79.34,0,.43.37.43,1,0C270.8,180.22,270.75,180.15,270.12,180.15Zm-1.81.69a.73.73,0,0,0-.54.35c-.12.19,0,.34.32.34s.55-.15.55-.34A.34.34,0,0,0,268.31,180.84Zm-.39-15.67a.36.36,0,0,0,.37-.34c0-.19-.07-.35-.16-.35s-.25.16-.36.35S267.72,165.17,267.92,165.17Zm-1.72.87c-.27.33-.3.53-.07.53a.84.84,0,0,0,.61-.37C267.11,165.59,266.68,165.46,266.2,166Zm-.7,16.23c0,.36.11.38.84.1.3-.12.47-.34.37-.51C266.49,181.5,265.5,181.83,265.5,182.27Zm-1-14.84c-.28.33-.31.53-.07.53a.84.84,0,0,0,.6-.37C265.37,167,264.94,166.85,264.47,167.43Zm-.17,15.15c-.29,0-.54.16-.54.35a.34.34,0,0,0,.33.34.72.72,0,0,0,.54-.34C264.75,182.74,264.6,182.58,264.3,182.58Zm-1.57-13.76c-.28.33-.3.53-.07.53a.8.8,0,0,0,.59-.37C263.63,168.37,263.2,168.25,262.73,168.82Zm-.14,14.45a1,1,0,0,0-.74.35c-.12.19,0,.35.3.35a1,1,0,0,0,.74-.35C263,183.43,262.87,183.27,262.59,183.27Zm-1.41-13.36c-.3.12-.55.37-.55.55,0,.46.79.17,1-.35C261.68,169.86,261.52,169.78,261.18,169.91Zm-.73,14.28c-.28.11-.52.34-.52.5s.24.21.52.1.53-.33.53-.5S260.74,184.08,260.45,184.19Zm-1-12.89c-.3.12-.55.37-.55.56,0,.45.79.17,1-.36C259.94,171.25,259.78,171.17,259.44,171.3ZM258.56,185c-.39,0-.71.16-.71.35s.22.35.5.35a.89.89,0,0,0,.71-.35C259.18,185.17,259,185,258.56,185Zm-.43-12.16c.08-.26-.05-.39-.31-.3a1.06,1.06,0,0,0-.6.61c-.09.26,0,.39.3.3A1.11,1.11,0,0,0,258.13,172.85Zm-1.31,12.86a.75.75,0,0,0-.54.35c-.12.19,0,.35.33.35s.54-.16.54-.35A.34.34,0,0,0,256.82,185.71Zm-.74-11.77a1.09,1.09,0,0,0-.6.61c-.09.26,0,.39.3.3a1.09,1.09,0,0,0,.61-.6C256.47,174,256.35,173.86,256.08,173.94Zm-1.56,12.47c-.28,0-.5.15-.5.35s.32.34.71.34.62-.15.51-.34A.91.91,0,0,0,254.52,186.41Zm.19-10.86c0-.46-.79-.17-1,.35-.09.25.07.33.41.2S254.71,175.74,254.71,175.55Zm-2.35,9.61c-.24.24.25.9.68.9.23,0,.2-.2-.07-.53S252.45,185.07,252.36,185.16Zm.61-8.58c0-.2-.23-.16-.52.08a1.38,1.38,0,0,0-.52.78c0,.2.23.16.52-.08A1.38,1.38,0,0,0,253,176.58Zm-2.12,7c-.17,0-.32.24-.32.52a.52.52,0,0,0,.52.53c.31,0,.43-.21.31-.53S251,183.62,250.85,183.62Zm0-4.7a.91.91,0,0,0,.35-.73c0-.29-.15-.43-.35-.31a1,1,0,0,0-.35.74C250.53,178.9,250.69,179,250.88,178.92Zm0,1.92c.2,0,.35-.24.35-.52s-.15-.52-.35-.52-.35.23-.35.52S250.69,180.84,250.88,180.84Zm0,2.09c.2,0,.35-.24.35-.53s-.15-.52-.35-.52-.35.24-.35.52S250.69,182.93,250.88,182.93Zm-15.48,6.23-6.1.22a35.78,35.78,0,0,0-6.52.59c-.24.19-.44.22-.45.05s-.17,0-.37.31-.54.51-.77.38-.29-.11-.15.06c.35.38-1.84,2.64-2.29,2.36-.19-.12-.24,0-.11.17s-.06.54-.42.74c-.59.31-.62.52-.3,1.93.45,1.95,1,2.42,7.85,6.31l5.09,2.91,2.44-.22c2.35-.22,2.52-.3,4.62-2.17s2.17-2,2.17-3.64c0-1.44-.34-2.29-2.35-5.84ZM203.89,137v4.68l2.34-2.25c1.29-1.24,2.41-2.29,2.5-2.34a13.61,13.61,0,0,0-2.34-.09Zm3.14-5.57c.19,0,.35-.07.35-.15s-.16-.25-.35-.37-.35,0-.35.15A.37.37,0,0,0,207,131.41Zm-1.23,1.4c.29-.24.44-.57.33-.75-.28-.44-.84,0-.84.63C205.29,133.14,205.38,133.16,205.8,132.81Zm-1.37,1.38c.29-.24.45-.51.37-.6-.25-.24-.91.25-.91.67C203.89,134.49,204.09,134.46,204.43,134.19Zm-1.58.88a.75.75,0,0,0-.35.56c0,.19.16.25.35.13a.77.77,0,0,0,.35-.56C203.2,135,203,135,202.85,135.07Zm-1.73,1.73c-.28.33-.3.53-.07.53a.8.8,0,0,0,.59-.37C202,136.35,201.59,136.22,201.12,136.8Zm-1.54,2c.14.24.32.2.51-.1s.23-.52.15-.59C200,137.81,199.37,138.44,199.58,138.78Zm-.93.7a1.11,1.11,0,0,0-.61.61c-.08.26.05.39.31.31a1.14,1.14,0,0,0,.61-.61C199,139.53,198.91,139.4,198.65,139.48Zm-1.37,1.33a.35.35,0,1,0,.35.35A.35.35,0,0,0,197.28,140.81ZM185.81,290.48a5.35,5.35,0,0,0-3.73,2.43A2.57,2.57,0,0,1,180.9,294c-.7.25-.74.44-.52,2.1.13,1,.32,2.48.43,3.29.17,1.37.68,1.88,2.2,2.17a24.42,24.42,0,0,0,2.73-.93c2.24-.85,2.65-1.14,3.26-2.34a3.49,3.49,0,0,0,.3-3.17C188.76,292.72,187.09,290.48,185.81,290.48Zm-8.72-12.18c-.87-.45-1.39-1-1.39-1.36,0-1-4.06-3.46-7-4.22-3.3-.84-4.18-.52-6.67,2.44-1.89,2.26-1.9,2.28-2.09,5.12l-.19,2.85,2.42,1.46c2.1,1.28,3,1.59,7.36,2.42,2.72.53,5.13,1,5.35,1s.72-.79,1.1-1.79l1.59-4.22a23.48,23.48,0,0,0,.91-2.69C178.49,279.14,177.86,278.69,177.09,278.3ZM154,298.66l-3.07-.7-2.35-.53-2.36,1.19c-3.1,1.57-3.75,2.34-4.42,5.23-.54,2.33-.53,2.5.19,4.7,1.37,4.22,4.22,8.18,5.66,7.87.41-.09,1.73-.33,2.92-.54,2.56-.43,7.64-3.42,7.93-4.65l.8-3.52.63-2.79-2.6-3A14.89,14.89,0,0,0,154,298.66Zm-10.75-10.72c2.2-1.22,5.08-7.63,5-11.21,0-1.91-.62-2.64-3.27-4-1.23-.61-1.43-.61-3.6-.09s-2.32.59-3.19,2.3a21.13,21.13,0,0,0-1.35,3.48c-.41,1.56-.4,1.84.18,2.81a9.18,9.18,0,0,1,.88,2.71c.22,1.49.41,1.75,2.22,3C142.4,288.56,142.22,288.5,143.23,287.94Zm-25.16-9.74c-2-1.68-3.27-2.41-4.52-2.71a14.88,14.88,0,0,1-3.38-1.41l-1.66-1L104.74,275,101,276.86l-.41,3.61c-.36,3.18-.32,4.18.29,8.46.68,4.67.75,4.89,1.83,5.82a2.77,2.77,0,0,0,1.65.81c.3-.08,1.28-.25,2.19-.37a3.35,3.35,0,0,0,2.08-.85c.24-.35,2.41-2.72,4.81-5.29,6.66-7.09,7.76-8.32,7.61-8.44Zm-4.33-35.41a.34.34,0,0,0,.35-.34.35.35,0,1,0-.69,0A.34.34,0,0,0,113.74,242.79Zm-.69,4.78a20.11,20.11,0,0,0-1.67-1.74l-1.66-1.64-3.44,3.48h3.39A30.17,30.17,0,0,0,113.05,247.57Zm-1.22-4.78c.29,0,.52-.15.52-.34s-.23-.35-.52-.35-.52.16-.52.35S111.54,242.79,111.83,242.79Zm-2.26,0c.38,0,.69-.15.69-.34s-.31-.35-.69-.35-.7.16-.7.35S109.18,242.79,109.57,242.79Zm-2.26,0c.28,0,.52-.15.52-.34s-.24-.35-.52-.35-.53.16-.53.35S107,242.79,107.31,242.79Zm-1.94,0a.36.36,0,0,0,.37-.34c0-.19-.07-.35-.16-.35s-.25.16-.36.35S105.17,242.79,105.37,242.79Z"
			/>
			<path
				className="c building-fill"
				d="M231,288.83c0,.11-4.11,2.56-9.14,5.44s-9.38,5.31-9.66,5.41c-.65.25-4.52-6.92-4-7.4.83-.74,18.34-10.5,18.58-10.35A64,64,0,0,1,231,288.83Z"
			/>
			<path
				className="c building-fill"
				d="M356.71,229.22l-.07,17.94-.06,17.93-22.48,0c-12.36,0-23,0-23.61,0l-1.13,0v23.85c0,15.66-.12,23.84-.35,23.84s-.35,1.28-.35,3.13.15,3.13.33,3.13.26,1.1.16,2.64c-.13,2-.07,2.59.25,2.39s.32-.11.11.23a2.22,2.22,0,0,0-.2,1.27c.08.6-.07.78-.64.78-.74,0-.74-.06-.63-6.78l.1-6.79h-7.83v13.57h-9.74l-.09,29.26c-.06,21-.2,29.15-.47,28.88s-5.81-.38-18.13-.36H254.13l-.23-34.72c-.13-19.1-.23-51.37-.23-71.71v-37H239.4c-12.46,0-14.27-.07-14.27-.52s.92-.53,6.26-.53c4.13,0,6.27-.12,6.27-.36s-.63-2.86-1.39-5.9a38.31,38.31,0,0,1-1.4-7.82,12.06,12.06,0,0,1,.11-2.28c.06,0,3.82-.78,8.35-1.74l8.25-1.74h7.27c5.5,0,7.32-.1,7.44-.43s.44-2,.77-3.92l.6-3.48,4.15-6.29,4.15-6.29,12.09-.77c6.65-.42,12.57-.76,13.16-.76,1.21,0,18.2,7.44,18.81,8.23.22.28,1.85,4.38,3.62,9.11s3.68,9.82,4.25,11.3l1,2.7Z"
			/>
			<path
				className="d border-stroke no-fill"
				d="M104.83,241.27l-2.69,1.3-2.48,4-7.91,3.69-5.42.26-5.54,3.72L75,262.46,72.07,264,69.91,269l6.72,7.69c2.44,2.93,3.56,6,4.84,9A99.19,99.19,0,0,1,79.08,298l22,18.9,2.41-5.27,4-6,1.79-.51,2,3.21.46,3.18-.92,4,2.12,3.8-.26,2.21-2.21,3.27,2.66,2.73,28.57,4.87,17.65-.18,14.33,2.58,3.77-10.09,1.09-9.9,3.13.1,3.48,1.34,2.84,5.63.54,3.89,3,3.16,4.48,9.15,56.65.74v46.64h36.55l30.92,24.95,33.58-.18,7.46-24.48,28.92-12.28,4.52-4v2.89l0,1.11-.88,2a9.39,9.39,0,0,1-2.66,2.58l-3,2.1"
			/>
			<path
				className="d border-stroke no-fill"
				d="M114.58,241.37l3.5,1.52,3.72,5.25,11.26-.08,5.39,4.26-1.06,6.92.68,2.89,2.06,1.9,5.24-4.48,6.85-9.36,8,3.5,4.33,1.14,9.72.91,13,19.33,1.4.11,2.66-1.77.81-2.26-.6-3.22L183.33,258l17.36-18.11-.12-3.17-1.52-2.44,4.41-16,5.28-1.8.06-2.75-4.69-2.15L194,189.14l2.57-4.85,8.58-3.59,2-2.58-13-13.27.5-4,7.87-7.06-1.42-6.63-5.37-5.09,0-.47"
			/>
			<path
				className="d border-stroke no-fill"
				d="M208,129.94l7.84,4.53,4.59,6.21,2.84.93,6.53-1.45,9.58,6.67,14.87.9,6.39-3.13,5.66-14.15,6.39-5.57,8.61,0,7-6.15,6.55.15-.31-8.7-7.21-8L283.7,99.9l.26-3.08,4.75-9.43,29.66-15.82L344.9,85.25l1.56,14,3.12,6,11.22,5L376.23,102l2.08,3.3,2.23,3L396,127.78v22l-12.77,9.39L381,155.84l-7.72-3.21h-2.43l-6,3.23-2.22,1.88-.07,1.68L364,161l2.63,0,10.47,19.09-2.32,7.47,9.81,16.22-26.58,26,.07,33.76h1.11l15,33.31-5.38,10.4,0,9.23,5.06,3,11.85-.92,10.27,15,9.57,22.25v4.36s2.36,6.6,2.68,7,.7,7,.7,7l-.74,4.58-1.7,3.83L404.84,385l-2.77,3-4,3-6.94,3.44"
			/>
		</SVGOverlay>
	),
	dieMaschineUnderground: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
                .d{stroke:#b33536;}
                .d{strokeMiterlimit:}
                .d{10;strokeWidth:0.96px;}
                `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M153.5,260l1.15-.17,2.59-15.9,1.85-8.81,3-11.42,6-6.39-6.51-7.19,43.26-45,10.24-3.81,27.2-21.79,17.31,15.12-6.42,16.52c-1.69-.42-3.51-2.82-4.81-4.13L228.9,185.2h-6.46l-3.54,3.58.36,1.15,19,18.84h3.54l8.65,9.2,11.16.06L276.37,193H292v-15.6h10.84v-17.8h61.92v14h24.56v38.21H370.16v13.84l4.57,6.09v11.95l-4.51,5.79h-3.17v7.37l9.81,8.9v19.19H365.65v8.41h6.64l6.82,2.44,5.73,2.62,4,2.56,2.31,1.95,3.11-3.11,5.67,4.45,2.07,2.81.73,1.28-3.05,3c9.35,11.45,9.91,24,9.33,36.75l5.48,5.18,11.4-10.48,18.34.49L454,353.5l-33.88,34.32,4.14,3.47c-4.06,12.78,7.82,17,15.29,12.25,1.42-.91,2.69-4.08,2.79-6.78.12-2.86-.94-5.24.45-6l16,.07c1.11-.82.07,3.17-.41,6.45a36,36,0,0,1-3.14,11.16c-3.73,7.32-11.5,14.2-21.88,14.29-6.55.06-14.19-2.18-22.34-9.93l-5,5.19-8.48-8.44-2.31,2.29-.4,2.35L363.12,444l-10.87-10.82v-9.93l-3.14-3,6.26-5.83-2.54-2.64-12.93-5.16L337.42,409l-18.5-6-3.06,2.38-8.21-5.59,2.65-3.55-5.7-5.48-2.85,1.95L294.47,383l3.12-8.8-4.41-6.11-3.53-11.72,4.21-.13-.28-3.24-15.45-9.33-11.69,0,.12,4.89L261,354.17,243.82,354l-7.18-7.2h-48V319.2l-3.46-1.29-14.82.26,0-22.33-11.67-.07-3.41-3.39-.07-19.16,48.75-.06,2.69,1.39h4.93l-.07-26.18h18.18l8.74-8.48-.13-10.62-7.94-7.62c-1.35-1-.71-2.87-1-4.34l-19.49-19.1-3.71,3.71.24,6.41-23.67,22.75-6.26-6.39-10,29.55-.07,6.1-.62.83Z"
			/>
			<path
				className="c building-fill"
				d="M156.18,259.88c-.08,0-.24.16-.36.34s0,.34.15.34a.35.35,0,0,0,.36-.34C156.33,260,156.26,259.88,156.18,259.88Zm1.85,0c-.38,0-.68.16-.68.34s.3.34.68.34.67-.15.67-.34S158.4,259.88,158,259.88Zm2.37,0c-.37,0-.68.16-.68.34s.31.34.68.34.68-.15.68-.34S160.77,259.88,160.4,259.88Zm-1.83-2.72,1.15,1.2c.64.65,1.17,1.18,1.19,1.18s.56-.53,1.19-1.18l1.15-1.2Zm3.69,3.08c-.11.17.11.32.5.32s.7-.06.7-.13C163.46,260.11,162.44,259.94,162.26,260.24Zm14,51.48c-.1-.24-.18,0-.18.42s.08.66.18.43A1.37,1.37,0,0,0,176.24,311.72Zm0-2c-.1-.23-.18,0-.18.43s.08.65.18.42A1.37,1.37,0,0,0,176.24,309.68Zm0-6.44c-.1-.24-.18-.05-.18.42s.08.66.18.42A1.34,1.34,0,0,0,176.24,303.24Zm0-2c-.1-.24-.18,0-.18.42s.08.66.18.42A1.34,1.34,0,0,0,176.24,301.2Zm0,12.92c-.11-.28-.19-.2-.2.2s.06.56.18.44A.67.67,0,0,0,176.24,314.12Zm0-6.45c-.11-.27-.19-.19-.2.2s.06.56.18.45A.69.69,0,0,0,176.24,307.67Zm0-2c-.11-.27-.19-.19-.2.21s.06.55.18.44A.68.68,0,0,0,176.24,305.63Zm0-6.45c-.11-.27-.19-.19-.2.21s.06.56.18.44A.68.68,0,0,0,176.24,299.18Zm0-2c-.11-.27-.19-.19-.2.2s.06.56.18.45A.69.69,0,0,0,176.24,297.15Zm12.67-3.33c-.51,0-.45-8.58.06-9.1.32-.31-1.85-.39-9.75-.33l-10.17.08,19.18.2v9.15h-8.49c-4.66,0-8.48.06-8.48.14,0,1,.54,1.21,2.58,1.21,1.5,0,2.18.14,2.2.43s.06.34.2,0,1.77-.43,6.59-.43c6.19,0,6.41,0,6.41-.67C189.24,294.12,189.09,293.82,188.91,293.82Zm2.28-9.37a.68.68,0,0,0-.65,0c-.27.11-.19.19.21.21S191.3,284.56,191.19,284.45Zm2,32.92a.66.66,0,0,0-.65,0c-.28.11-.2.19.2.21S193.34,317.48,193.23,317.37Zm.33-32.92a.66.66,0,0,0-.64,0c-.28.11-.19.19.2.21S193.68,284.56,193.56,284.45Zm1.7,32.92a.65.65,0,0,0-.65,0c-.27.11-.19.19.21.21S195.38,317.48,195.26,317.37Zm.52-32.94a1.37,1.37,0,0,0-.85,0c-.23.09,0,.17.42.17S196,284.52,195.78,284.43Zm1.7,32.92a1.24,1.24,0,0,0-.85,0c-.24.09,0,.17.42.17S197.71,317.44,197.48,317.35Zm.67-32.92a1.34,1.34,0,0,0-.84,0c-.24.09-.05.17.42.17S198.39,284.52,198.15,284.43Zm1.36,32.92a1.24,1.24,0,0,0-.85,0c-.23.09,0,.17.43.17S199.74,317.44,199.51,317.35Zm.84-32.9a.68.68,0,0,0-.65,0c-.27.11-.19.19.21.21S200.46,284.56,200.35,284.45Zm1.36,32.92a.65.65,0,0,0-.65,0c-.27.11-.19.19.2.21S201.82,317.48,201.71,317.37Zm.43-24.57c-.18,0-.34.23-.34.51s.16.51.34.51.34-.23.34-.51S202.33,292.8,202.14,292.8Zm-.25-8.48c-.51,0-.52.05-.09.33.64.42.68.42.68,0C202.48,284.47,202.21,284.32,201.89,284.32Zm.28,10.52c-.24,0-.27.56,0,1.27.11.36.36-.05.36-.6C202.48,295.14,202.34,294.84,202.17,294.84Zm0-4.09a.89.89,0,0,0-.15.76c.3.48.47.29.47-.49C202.47,290.42,202.4,290.36,202.16,290.75Zm.32,6.63c-.19-.12-.34-.05-.34.15a.35.35,0,0,0,.34.36c.19,0,.34-.07.34-.15S202.67,297.49,202.48,297.38Zm1.27,20a.68.68,0,0,0-.66,0c-.26.11-.18.19.21.21S203.86,317.48,203.75,317.37Zm.6-20.16c-.28,0-.51.15-.51.34s.23.34.51.34.51-.15.51-.34S204.63,297.21,204.35,297.21ZM206,317.35a1.24,1.24,0,0,0-.85,0c-.23.09,0,.17.43.17S206.19,317.44,206,317.35Zm.42-20.14c-.28,0-.5.15-.5.34s.22.34.5.34.51-.15.51-.34S206.66,297.21,206.38,297.21Zm1.78,20.16a.66.66,0,0,0-.65,0c-.27.11-.19.19.2.21S208.27,317.48,208.16,317.37Zm-.09-19.81c-.11.18.12.33.5.33s.7-.06.7-.13C209.27,297.43,208.25,297.27,208.07,297.56Zm2.13,19.81a.68.68,0,0,0-.66,0c-.27.11-.19.19.21.21S210.31,317.48,210.2,317.37Zm.85-19.71a1.37,1.37,0,0,0-.85,0c-.23.1,0,.18.42.18S211.28,297.76,211.05,297.66Zm1.36,19.69a1.24,1.24,0,0,0-.85,0c-.24.09,0,.17.42.17S212.64,317.44,212.41,317.35Zm.76-19.8a.7.7,0,0,0-.53-.34.33.33,0,0,0-.32.34c0,.19.24.34.53.34S213.29,297.74,213.17,297.55Zm-.81,33.26h-1.67l-3.93-4.16c-3.74-4-3.93-4.23-3.94-5.6,0-1.05-.14-1.44-.51-1.44s-.51.43-.51,1.83v1.83l4.11,4.28,4.11,4.27h2c1.55,0,2-.11,2-.5S213.61,330.81,212.36,330.81ZM227,317.24c-.32,0-.44-2.37-.5-10.1l-.09-10.1L220,297l-6.36-.1v21.06H220a42.23,42.23,0,0,0,6.88-.34C227.24,317.36,227.28,317.24,227,317.24Zm-1.78-.35h-5.09a26.8,26.8,0,0,1-5.13-.25c0-.14-.09-4.34-.15-9.33l-.11-9.08h10.48Zm2.2-19.68c-.28,0-.5.15-.5.34s.22.34.5.34.51-.15.51-.34S227.7,297.21,227.42,297.21Zm2,20.14a1.27,1.27,0,0,0-.86,0c-.23.09,0,.17.43.17S229.61,317.44,229.38,317.35Zm.08-19.92c-.28.1-.51.25-.51.33s.23.13.51.13.51-.15.51-.33S229.74,297.32,229.46,297.43Zm2.11,19.94a.65.65,0,0,0-.65,0c-.27.11-.19.19.21.21S231.69,317.48,231.57,317.37Zm.5-19.89c-.31-.32-.5-.32-.81,0s-.23.41.4.41S232.39,297.8,232.07,297.48Zm1-7.46-.11-2.51-1.46-.92-1.46-.93-13.87.09-13.87.09,0,1a6.9,6.9,0,0,1-.11,1.19,1.37,1.37,0,0,0,.19,1.62c.4.37.47.12.47-1.61V286h27l1.43,1.05,1.42,1.05v2.36c0,1.3.12,2.3.26,2.21A7.73,7.73,0,0,0,233.08,290Zm.53,27.35a.66.66,0,0,0-.65,0c-.27.11-.19.19.2.21S233.72,317.48,233.61,317.37Zm.5-19.89c-.32-.32-.5-.32-.82,0s-.22.41.41.41S234.43,297.8,234.11,297.48Zm1.71,19.87a1.24,1.24,0,0,0-.85,0c-.23.09,0,.17.43.17S236.05,317.44,235.82,317.35Zm.5-19.67a.68.68,0,0,0-.65,0c-.27.11-.19.19.21.2S236.44,297.8,236.32,297.68Zm1.54,19.67a1.24,1.24,0,0,0-.85,0c-.23.09,0,.17.42.17S238.09,317.44,237.86,317.35Zm.08-20.14c-.28,0-.51.15-.51.34s.23.34.51.34.51-.15.51-.34S238.22,297.21,237.94,297.21Zm2.12,20.16a.66.66,0,0,0-.65,0c-.27.11-.19.19.2.21S240.17,317.48,240.06,317.37Zm.11-20.16a.72.72,0,0,0-.53.34c-.12.19,0,.34.32.34s.53-.15.53-.34A.33.33,0,0,0,240.17,297.21Zm1.92,20.16a.65.65,0,0,0-.65,0c-.27.11-.19.19.21.21S242.2,317.48,242.09,317.37Zm.5-19.89c-.31-.32-.49-.32-.81,0s-.23.41.41.41S242.91,297.8,242.59,297.48Zm10.8-128c-.19-.12-.35,0-.35.31,0,.6.21.68.5.21A.38.38,0,0,0,253.39,169.45Zm-3.66,138-4.15-.07.07,4.84.08,4.83.1-4.65.11-4.66,4-.11,4-.1Zm4.32-140.06c-.18-.11-.33-.13-.33,0a3.47,3.47,0,0,1-.2.7c-.12.29-.05.54.13.54s.43-.23.53-.5A.6.6,0,0,0,254.05,167.4Zm.69-2.2c-.19,0-.34.32-.34.7s.15.61.34.49a.9.9,0,0,0,.34-.7C255.08,165.42,254.93,165.2,254.74,165.2Zm-.49-6.11c-.87-1.65-.85-1.66-1.71,1.19-.77,2.57-.8,2.54,1.2,1.52.74-.38,1.34-.8,1.33-.93A11.85,11.85,0,0,0,254.25,159.09Zm1.17,4.07c-.19,0-.34.32-.34.7s.15.61.34.49a.88.88,0,0,0,.34-.7C255.76,163.39,255.61,163.16,255.42,163.16Zm1-1.95c-.5.17-.78.94-.33.94.18,0,.42-.25.53-.54S256.62,161.12,256.37,161.21Zm.27-1.58c-.12.33-.05.49.2.4a.93.93,0,0,0,.54-.54C257.58,158.89,256.88,159,256.64,159.63Zm1.22-2.64c-.31-.32-.4-.23-.4.41s.09.72.4.4S258.18,157.31,257.86,157Zm.61-1.63a.34.34,0,0,0-.34.34.35.35,0,0,0,.34.34.34.34,0,0,0,.34-.34A.34.34,0,0,0,258.47,155.36Zm17.65,108.08-2.72-2.69-2.71,2.69-2.72,2.7,2.63,2.64a31,31,0,0,0,2.8,2.64,29,29,0,0,0,2.81-2.64l2.63-2.64ZM287,274l-2.71-2.7-2.72,2.7-2.71,2.7,2.62,2.64a29,29,0,0,0,2.81,2.64,31,31,0,0,0,2.8-2.64l2.63-2.64ZM290,249.19l-2.72-2.7-2.72,2.7-2.71,2.7,2.62,2.64a30.92,30.92,0,0,0,2.81,2.63,30.92,30.92,0,0,0,2.81-2.63l2.62-2.64Zm3.22-44.62c-.44,0-.51,1.28-.51,9.5s.07,9.5.51,9.5.51-1.28.51-9.5S293.7,204.57,293.26,204.57ZM290.82,303l-13-12.44,0-4.53-21.3-21.3,8.85-8.21L262.86,254l1.36-1.28-3.81-3.61-2.72,2.31-1.95-1.79-7.46.05-6.69,9.93-9,.07.17,12.62-8.33.1.07,2.73,7.08-.16,2.26-1.46h4.64l8.62,8.6,0,7.39-2.86,0-.2,3.06,2.89,2.86-.13,1.17,20,0-.13,22-19.86.07-.56,8.06-6.29,6,2.8,3,3.11-.66,5,4.21h1.36l10.09-9.21,5.09-.17,2.15,1.49h7.81l3.23-9.57,19.95-19.06Zm10.24-43.1-2.54-2.53-2.72,2.7-2.71,2.7,2.62,2.64a30.4,30.4,0,0,0,2.81,2.64,26.78,26.78,0,0,0,2.64-2.47,16.33,16.33,0,0,0,2.45-2.81A17.24,17.24,0,0,0,301.06,259.88ZM334,222.47c-.07-.79-.14-1.56-.16-1.7s-6.35-.25-14.1-.25H305.64V222c0,1.45.05,1.51,1.11,1.64.6.07,7,.16,14.24.2l13.13.06Zm11.44,174A56,56,0,0,1,336,393a61.82,61.82,0,0,1-9.06-5.72,6,6,0,0,0-2.1-1.28c-.31.31-7.53-6.87-9.94-9.87a15.44,15.44,0,0,1-2-2.84,6.49,6.49,0,0,0-1-2,43.9,43.9,0,0,1-6.14-16.5c-.52-3.1-.71-3.65-1.24-3.65s-.6.19-.4,1.61c.26,1.84,1.33,6.81,1.84,8.54a4.19,4.19,0,0,1,.26,1.24s-.87.46-1.83.95a8.39,8.39,0,0,0-2,1.2c-.16.27,2.31,4.84,5.3,9.78l.67,1.1,2-1,2-1,1.88,2.45a84.39,84.39,0,0,0,9.31,9.59c.41.29.76.68.76.87a10.51,10.51,0,0,1-1.42,2.21c-1.15,1.52-1.33,2-.94,2.17s2.4,1.65,4.73,3.33c3.29,2.37,4.32,3,4.59,2.62l1.44-2,1.09-1.57,2,1A50.23,50.23,0,0,0,346.28,398c.05,0,.09-.28.09-.65S346.07,396.59,345.43,396.45Zm6.44-168.11c-.23.36-.28.66-.11.66s.4-.25.52-.56C352.59,227.63,352.35,227.57,351.87,228.34Zm3.07,21.33-2.69,0-4.81-5.35-.05-12.4,2.33-3.62-1-.42-.05-2.3L287.48,225v4.58l-16.1.06-.13,5.07,1.59,1.75L270,239.35l3.86,4.15,2.48-2.05,1.63,1.72,8.64-7.94,20.92,21.48,5.21.68,9.9,10.59.7,13.5,9.6-8.81.89-2.94.35-1.05,9.31-9.49,11.71-2.47ZM353.56,226a5.71,5.71,0,0,1-2.76-.43c-.37-.34-.41-.34-.22,0s.08.43-.12.43-.36.3-.36.67c0,.63.23.68,2.89.68s2.88-.05,2.88-.68S355.64,226,353.56,226Zm13.86,180.26a98.72,98.72,0,0,0-9.15,8.16.26.26,0,0,0,.29.26.49.49,0,0,0,.42-.26c.06-.14,1.94-1.93,4.18-4l4.42-4C367.8,406.17,367.74,406.11,367.42,406.21Zm.87-181.62c-.07,0-.22.23-.33.51s0,.51.14.51.33-.23.33-.51S368.36,224.59,368.29,224.59ZM366.35,226c-2.45,0-2.68.05-2.68.67s.23.68,2.89.68a14.77,14.77,0,0,0,2.88-.14C369.44,226.15,368.92,226,366.35,226Zm-4.28,101.2a.55.55,0,0,0-.2.69c.14.25-.68.28-2.62.12l-2.83-.24-3.84,3.83-3.84,3.83v2.74a8.79,8.79,0,0,1-.35,3.09c-.36.36.44,1.19,7.76,8.05,2.56,2.4,3.25,2.89,3.65,2.57s.24-.67-1-2a26.84,26.84,0,0,1-2.61-3.55,8.65,8.65,0,0,1,2.73-12c2.85-1.88,7.88-1.3,10.65,1.22,3.54,3.22,3.56,3.24,4,2.83C374.13,337.79,362.68,326.65,362.07,327.15Zm3.56-137.46-13.92-.05h-2.29V176.06H352c2,0,2.54-.1,2.54-.51s-2.37-.51-19.34-.51-19.35.06-19.35.51,1.14.51,8.15.51h8.15V189H309.23l-2,1.94-2,1.94v14.54l1.89,2.15,1.89,2.16H321c6.55,0,11.83-.08,11.73-.17s-5.35-.18-11.68-.19h-11.5l-1.95-2.08-2-2.07v-14l1.79-1.76,1.79-1.77,23.4-.17,0-6.71,0-6.7h16.51v14.25h27.83v7.79l-4.33.1-4.32.11,4.49.07,4.5.08v-8.73Zm8.45,16.91c-3.42,0-6.29.07-6.37.16a4.36,4.36,0,0,0,0,1.52l.13,1.38H380.3V206.6ZM396,355.75l-.15-11c-.17-12.13-.34-13.45-2.36-18.41a29.29,29.29,0,0,0-7.33-10.5c-6.44-6.1-13.51-8.64-25.1-9l-5.88-.19.16-4.61c.09-2.54.19-5.46.23-6.49s.05-4.65,0-8.06l0-6.19h-6.17c-5.23,0-6.26-.08-6.78-.55s-.91-.27-6,4.54c-2.95,2.81-5.7,5.47-6.12,5.93a21.94,21.94,0,0,0-2.14,4.87L327,300.1l2.47,2.26c1.58,1.45,2.59,2.15,2.81,1.94s.19-.54-.06-.94,0-1,2.81-3.8c2.61-2.61,3.19-3.37,3.2-4.21a3.05,3.05,0,0,1,1.27-2.22l4.25-4.06,3-2.86,3.89,3.88c3.71,3.71,3.89,4,3.89,5.29v1.41l-3.31.41c-14.56,1.83-27.84,13.51-32.11,28.25-1.32,4.53-1.69,9-1.45,17.07.12,3.92.31,7.53.42,8,.16.71.05,1-.54,1.31-.41.22-.88.27-1,.11s-1-5.09-1.91-11L313,330.3l-2.38-2.67c-1.31-1.46-2.53-2.86-2.7-3.11-.34-.48-.28-.55,9.81-9.77l5.42-5,.78.73c.6.57.87.64,1.18.32s0-.82-1.44-2.29c-3.38-3.45-3.09-3.36-7.08-2l-3.43,1.16-5.95,5.5a64.94,64.94,0,0,0-5.85,5.78c.05.15,1.93,2.3,4.19,4.78s4.58,5.06,5.17,5.74c1.06,1.21,1.1,1.39,2.78,12.29,1.65,10.67,1.92,12.08,2.36,12.44a21,21,0,0,1,1.17,3.06,43.87,43.87,0,0,0,10,16.92,51.11,51.11,0,0,0,9.86,7.34,5.45,5.45,0,0,1,1.38.89c.39.6,4.87,2,11.18,3.46,7,1.64,12.5,2.87,13.06,2.92.2,0,4.82-4.45,10.26-9.89l9.93-9.92,1.3,1.28c1.06,1,1.39,1.19,1.69.82.56-.67-13.29-14.51-13.91-13.89-.33.33.4,1.24,3.58,4.43l4,4L377.78,367a14.91,14.91,0,0,1-2.67,1.9,22.47,22.47,0,0,1-7.87,1.22h-2.38l-1.21-1.94c-.91-1.45-3.83-4.31-11.48-11.21-8.58-7.75-10.34-9.19-10.76-8.85s-.38.52-.23.65c.79.67,14.33,12.86,17.33,15.61a32.19,32.19,0,0,1,4.36,4.67l.84,1.44h-5a30.54,30.54,0,0,1-7.9-.69,24.82,24.82,0,0,1-18.71-18.29c-.65-2.58-.7-3.51-.56-11.51.13-7.57.25-9.06.89-11.42,2.11-7.77,6.7-13.41,13.11-16.08a30.22,30.22,0,0,1,8.81-2.08h1.2v-3.13l6.36.17c7.83.2,11.17,1,17,3.84a22.71,22.71,0,0,1,6.56,4.47,29.52,29.52,0,0,1,9.66,19.37l.24,2.77h-7.38L378.77,329c-7.36-7.19-9.25-8.87-9.63-8.56s1.33,2.15,9,9.63l9.47,9.24h4.31l-.13,5.86c-.13,5.55-.18,5.93-1,7.59a20.16,20.16,0,0,1-2.54,3.53L386.56,358l-3.79-4c-3.4-3.58-4.51-4.35-4.5-3.13a88.6,88.6,0,0,0,6.78,7.19c5.37,5.37,6.86,6.69,7.19,6.36s.16-.68-.84-1.7l-1.25-1.28,2.91-2.88ZM338.25,381.7a15.87,15.87,0,0,1-2.06-1.08,38.72,38.72,0,0,1-16.12-17.19c-1.45-3-3.56-8.5-3.56-9.34,0-.23.51-.67,1.13-1l1.14-.55.43,1.93a36.22,36.22,0,0,0,18.25,24,5.4,5.4,0,0,1,1.78,1.21A4.16,4.16,0,0,1,338.25,381.7Zm17.2,4.4-5-1.18c-2.71-.64-6.25-1.57-7.87-2.07l-3-.9.49-.95.49-.94,2.07.84a58.54,58.54,0,0,0,10.92,2.7c1.94.22,1.95.23,1.95,1.37A4.16,4.16,0,0,1,355.45,386.1Zm-.6-84.07c0,2.15-.09,4.61-.21,5.48-.21,1.49-.28,1.57-1.45,1.74-11.91,1.69-19.14,8.12-22.14,19.69-.73,2.83-.79,3.73-.8,12.05,0,10.13.17,11.2,2.54,16.12,3.18,6.58,9.24,11.49,17,13.77,2.14.63,3.64.77,9.42.9l6.87.16v1.66c0,1.09.15,1.67.42,1.68s2.18,0,4.33,0l3.9,0-6.1,6.12c-3.36,3.36-6.34,6.1-6.62,6.08s-1.78-.34-3.33-.7l-2.81-.68.1-1.41.1-1.41L353.7,383c-11.15-1.1-21.7-6.88-27.9-15.29a35.56,35.56,0,0,1-6.51-16.77c-.13-1.65-.24-7-.23-11.82,0-7.92.08-9.12.74-11.75,3.89-15.41,17.82-27.89,32.42-29l2.63-.21Zm74.83,52.46c-.37.19-4.55,4.28-9.27,9.09l-8.59,8.73-1.66-1.64L408.5,369,395.6,381.9l-12.9,12.87,1.75,1.77c1.7,1.73,1.73,1.79,1.14,2.45-.34.37-5.56,5.6-11.6,11.62s-11,11.1-11,11.29,5.45-5.07,12.12-11.69,12.19-12.08,12.28-12.13a6.43,6.43,0,0,0-1.34-1.62l-1.5-1.53,12-12,12-12,1.21,1.18a7.41,7.41,0,0,0,1.41,1.19c.15,0,18.24-18,18.95-18.89C430.28,354.22,430.05,354.29,429.68,354.49Zm13.74,35.7a.35.35,0,0,0-.34.34.34.34,0,0,0,.34.34.34.34,0,0,0,.34-.34A.34.34,0,0,0,443.42,390.19Zm1.89,0a.93.93,0,0,0-.7.34c-.11.19.11.34.49.34s.7-.15.7-.34S445.58,390.19,445.31,390.19Zm2,0c-.27,0-.5.16-.5.34s.23.34.5.34.51-.15.51-.34S447.61,390.19,447.32,390.19Zm2,0c-.28,0-.51.16-.51.34s.23.34.51.34.51-.15.51-.34S449.64,390.19,449.36,390.19Zm2,0c-.28,0-.51.16-.51.34s.23.34.51.34.51-.15.51-.34S451.68,390.19,451.4,390.19Zm.14,3.11-1.37-1.15-.86.8a7.67,7.67,0,0,0-1.18,1.4c-.29.54-.09.59,2.24.59a6.71,6.71,0,0,0,2.55-.25A5.91,5.91,0,0,0,451.54,393.3Zm1.89-3.45c-.27,0-.51.16-.51.34s.24.34.51.34.51-.15.51-.34S453.72,389.85,453.43,389.85Zm2,0c-.28,0-.51.16-.51.34s.23.34.51.34.51-.15.51-.34S455.75,389.85,455.47,389.85Zm1.87,0a.34.34,0,0,0-.34.34.34.34,0,0,0,.34.34.34.34,0,0,0,.34-.34A.35.35,0,0,0,457.34,389.85Z"
			/>
			<path
				className="a background-fill"
				d="M290.82,303l-13-12.44,0-4.53-21.3-21.3,8.85-8.21L262.86,254l1.36-1.28-3.81-3.61-2.72,2.31-1.95-1.79-7.46.05-6.69,9.93-9,.07.17,12.62-8.33.1.07,2.73,7.08-.16,2.26-1.46h4.64l8.62,8.6,0,7.39-2.86,0-.2,3.06,2.89,2.86-.13,1.17,20,0-.13,22-19.86.07-.56,8.06-6.29,6,2.8,3,3.11-.66,5,4.21h1.36l10.09-9.21,5.09-.17,2.15,1.49h7.81l3.23-9.57,19.95-19.06Zm64.12-53.31-2.69,0-4.81-5.35-.05-12.4,2.33-3.62-1-.42-.05-2.3L287.48,225v4.58l-16.1.06-.13,5.07,1.59,1.75L270,239.35l3.86,4.15,2.48-2.05,1.63,1.72,8.64-7.94,20.92,21.48,5.21.68,9.9,10.59.7,13.5,9.6-8.81.89-2.94.35-1.05,9.31-9.49,11.71-2.47Z"
			/>
			<path
				className="d border-stroke no-fill"
				d="M253.19,171.17c-1.69-.42-3.51-2.82-4.81-4.13L228.9,185.2h-6.46l-3.54,3.58.36,1.15,19,18.84h3.54l8.65,9.2,11.16.06L276.37,193H292v-15.6h10.84v-17.8h61.92v14h24.56v38.21H370.16v13.84l4.57,6.09v11.95l-4.51,5.79h-3.17v7.37l9.81,8.9v19.19H365.65v8.41h6.64l6.82,2.44,5.73,2.62,4,2.56,2.31,1.95,3.11-3.11,5.67,4.45,2.07,2.81.73,1.28-3.05,3c9.35,11.45,9.91,24,9.33,36.75l5.48,5.18,11.4-10.48,18.34.49L454,353.5l-33.88,34.32,4.14,3.47c-4.06,12.78,7.82,17,15.29,12.25,1.42-.91,2.69-4.08,2.79-6.78.12-2.86-.94-5.24.45-6"
			/>
			<path
				className="d border-stroke no-fill"
				d="M153.5,260l1.15-.17,2.59-15.9,1.85-8.81,3-11.42,6-6.39-6.51-7.19,43.26-45,10.24-3.81,27.2-21.79,17.31,15.12"
			/>
			<path
				className="d border-stroke no-fill"
				d="M458.72,390.81c1.11-.82.07,3.17-.41,6.45a36,36,0,0,1-3.14,11.16c-3.73,7.32-11.5,14.2-21.88,14.29-6.55.06-14.19-2.18-22.34-9.93l-5,5.19-8.48-8.44-2.31,2.29-.4,2.35L363.12,444l-10.87-10.82v-9.93l-3.14-3,6.26-5.83-2.54-2.64-12.93-5.16L337.42,409l-18.5-6-3.06,2.38-8.21-5.59,2.65-3.55-5.7-5.48-2.85,1.95L294.47,383l3.12-8.8-4.41-6.11-3.53-11.72,4.21-.13-.28-3.24-15.45-9.33-11.69,0,.12,4.89L261,354.17,243.82,354l-7.18-7.2h-48V319.2l-3.46-1.29-14.82.26,0-22.33-11.67-.07-3.41-3.39-.07-19.16,48.75-.06,2.69,1.39h4.93l-.07-26.18h18.18l8.74-8.48-.13-10.62-7.94-7.62c-1.35-1-.71-2.87-1-4.34l-19.49-19.1-3.71,3.71.24,6.41-23.67,22.75-6.26-6.39-10,29.55-.07,6.1-.62.83"
			/>
			<polygon
				className="d border-stroke no-fill"
				points="300.45 302.88 280.5 321.94 277.27 331.51 269.46 331.52 267.31 330.03 262.22 330.2 252.13 339.41 250.77 339.41 245.79 335.2 242.68 335.86 239.88 332.82 246.17 326.81 246.73 318.75 266.59 318.68 266.72 296.69 246.77 296.65 246.9 295.48 244.01 292.62 244.21 289.56 247.07 289.53 247.1 282.14 238.48 273.54 233.84 273.54 231.58 275 224.5 275.17 224.43 272.43 232.75 272.33 232.59 259.71 241.59 259.64 248.28 249.71 255.74 249.66 257.69 251.45 260.41 249.14 264.22 252.75 262.86 254.03 265.39 256.5 256.55 264.71 277.85 286.01 277.82 290.54 290.82 302.98 300.45 302.88"
			/>
			<polygon
				className="d border-stroke no-fill"
				points="355.22 256.72 343.51 259.19 334.2 268.68 333.85 269.73 332.96 272.67 323.36 281.49 322.66 267.98 312.76 257.39 307.55 256.71 286.63 235.23 277.99 243.17 276.36 241.45 273.88 243.5 270.02 239.35 272.84 236.47 271.25 234.72 271.38 229.65 287.48 229.59 287.48 225.01 348.69 225.62 348.74 227.92 349.72 228.34 347.39 231.96 347.44 244.35 352.25 249.71 354.94 249.67 355.22 256.72"
			/>
			<path
				className="d border-stroke no-fill"
				d="M299.48,303.81l3.74-2.93V289.44l6.6-6.33,11.46-.07,2.08-1.6"
			/>
		</SVGOverlay>
	),
	firebaseZ: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .d,.e{strokeMiterlimit:11.34;}
            .d{strokeWidth:0.32px;}
            .e{strokeWidth:0.96px;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path className="b field-fill" d="M299.53,345.85l0,5.12.21,4" />
			<path
				className="b field-fill"
				d="M366.91,394.43l-4.3,17.8,8.85,8.64,3.06,5.11.92,7.52-8.2,7.78-21.66-20.41,2.22-22.65-2.44-3.16-18.3-.17-1.46,1.81,1.48,7.27-.31,30.43-9.19,5.21-.87,8.2-14.19.67-6.67-14.74.22-8.59,16.82-14.21v-2.38L301.4,391l-1.64-34.72H263.41l.21-22.15-1.14-1.44L254.37,329l-8.93-7.9,3.22-2.71.55-1.54-1.46-1.73-4.73,4.7-3.69-.88-7.88-.1.26-11.5-7.79.21-.12-1.43-23,.09V275.79H173.22L164.84,277l-.07,2.64-1.21,3.28.07,6.65.61.23,2.2-1.2,7.08,11.08-11,6.91-8.06-13.14-9.77,1-.29,8.05-12.56-.14v-7.91l-7.28-.07-5.59,8.52-16.82,10L90.5,322.72l-27.6,12-8.4-5.14.37-13.12L65.63,307l11.76-5,6.09-5,6.69-6.62L92,282.09l-4.89-3.42-9.43,0-10,8.7-12.28,1.71-12.24-9.24,3-16.54,14.21-6.35,34.43-.11,5-3.79,4.74-6.88-6.86-13.29-5.5-2-24.6-.09-25.68-9.54-4.27-9.53L42,203.09l8.62,1.78,8.86-.22,19.31,9.76,15.61-13.52-.61-7.59L84,181.59l-5.65-3.22-6.2-2.09-9.87-.1-8.92-8.11-2.09-8.27,8.5-8.08,18.47,3.43L92,160l15.23,15.48,6.08.61,15.27,8.79,15.25-.1.28,8.47,7,.38.37-.6-.77-11.07,13.1-1.42.06,13.85,2.9,15.89,2.43,1.27.68.35h.62v-.73l0-32,29.07-.2h1.75l.06-19.41,36.78-35.26h0l-.11-31.67H264.5V77.34h50V85.2h4.94V78.93H356.7V63.53h34.89c3.82-.3,20.26,4.49,24.66,11.29,11.49.48,19.23,2.07,20,5.7h2.34l1.61,4.83,4.06-1.63,7.05-.06,2.09.86L455,82,456,78.8l-.09-3.47h5.61l4.31,5.81,2.69,9.8L469,99l-7.86-.13L452.51,94l-4.91,5.15-9.73,0-3.37,6,.32,3,2.79,2.6,8.5,3.49,16.93-.25,11.27,1.28.09,5.29-2.62,7.94L463,131.47l-20.78-.18-4.83,2.78,2.39,4.26-.14,2.51.81,1.22,2.28.28,2,2.89,1,.57,4.52-4.43,17.64-.23,1.36,17.09-5.62.06-4.67,5-3.14-1.06-7.81,10.59h-6.8l-11.42,7.33H418.92l-3.73-3.43h-8.28l-10.63-5.25L390,170.21l-6.15,2.13v10.17h5.67v85.88H375.44v3.89l-4.6,5.52,5.69,4.69-5.95,6.67.08,1.51,6.12,18.42.09,2.18L370,332.73l6.32,9.33-1.08,6.76,0,2.46,21.09,16.55,1.87,7.11-2.55,2.85L402.8,386l7.76,5.31,3.7-2,6.05,4.07L418,406l-.87,1.73-5,1.31-5.5.58-3.69-.5-3.58-1.29-3.76-2.24-5.27-3.77-4.2-5.63-4.48-6.53-1.32-3.33,0,1.16Z"
			/>
			<path
				className="c building-fill"
				d="M127.75,220.33V227H138v-6.68Zm9.79,6.23h-9.35v-5.79h9.35Z"
			/>
			<path
				className="c building-fill"
				d="M138.78,194.63a11.9,11.9,0,0,1,2.67,0c.67.1,0,.19-1.46.18S138,194.73,138.78,194.63Z"
			/>
			<path
				className="c building-fill"
				d="M145.91,265.64l-.13-3.21-1.67.05-3.67.09-2,.05v2.82a10.07,10.07,0,0,0,.3,3.12,14.41,14.41,0,0,0,3.8.3H146Zm-.8,2.33h-5.79v-4.9h5.79Z"
			/>
			<path
				className="c building-fill"
				d="M138.43,251.49h4c2.37,0,4,.18,4,.45s-1.71.44-4.23.44H138V235.91l4.56.09,4.57.1-4.34.14-4.35.15Z"
			/>
			<path
				className="c building-fill"
				d="M151.58,250.38,151.33,280h-16v-8h-18.7V254.16H130V232.79h-1.34c-.83,0-1.3-.21-1.22-.55s-1.27-.59-5.35-.68l-5.45-.13v-18.2l5.45-.12,5.46-.13-.07-2.34-.07-2.33h15.94v6.23h8l.13,11c.12,10.48.13,10.31.23-3.63l.1-14.65-6.08.29c-3.34.16-9,.29-12.47.29h-6.38v4.45H116.62v-8l3.21-4.69L123,195h2.76c1.82,0,2.81-.19,2.91-.56a29.49,29.49,0,0,0-.09-4.34l-.25-3.78-.08,3.89-.09,3.9H123l-3.62,5.22-3.62,5.22V285L119.6,289a29.25,29.25,0,0,0,4.32,3.95c.26,0-1.28-1.76-3.41-3.91l-3.89-3.9V279c0-6,0-6.12,1-6.18.55,0,2.85-.09,5.12-.12l4.12,0v8.24h24.93l-.11-15.25Zm-7.36-42.07h7.13v5.78h-7.13Zm-27.6,24h5.12c3.12,0,5.12.17,5.12.44s.6.45,1.33.45h1.34v20.48H116.62ZM134.87,280h-7.12v-7.13h7.12Z"
			/>
			<path
				className="c building-fill"
				d="M174.05,271.75c0,2.27-.3,2.89-1,2.15a6.63,6.63,0,0,1-.29-2.45c0-1.61.16-2.15.66-2.15S174.05,269.87,174.05,271.75Z"
			/>
			<path
				className="c building-fill"
				d="M174.05,227.58c0,2.3-.06,2.4-2.89,5.21l-2.9,2.87v17.05L174,257.5v2.56c0,2-.15,2.56-.67,2.56s-.67-.57-.69-2.33c0-2.32-.05-2.36-2.89-4.76l-2.87-2.42V235.57l2.89-3.12c2.69-2.91,2.9-3.27,2.9-5.18,0-1.52.17-2.05.66-2.05S174.05,225.78,174.05,227.58Z"
			/>
			<path
				className="c building-fill"
				d="M183.29,213.76c-.12.38-1.58.6-4.71.68l-4.53.13v2c0,1.47-.17,2-.67,2s-.66-.49-.67-1.67a13.5,13.5,0,0,0-.27-2.67c-.27-1-.27-1,5.38-1C182.15,213.2,183.43,213.33,183.29,213.76Z"
			/>
			<path
				className="c building-fill"
				d="M196.76,272.64c0,.86-.2,1.56-.45,1.56-.52,0-.54-.05-.61-1.78,0-.8.17-1.34.5-1.34S196.76,271.69,196.76,272.64Z"
			/>
			<ellipse
				className="c building-fill"
				cx="203.44"
				cy="273.98"
				rx="0.89"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M203,168.46c0-.48.49-.67,1.77-.67s1.71.14,1.51.67-.83.67-1.77.67S203,168.92,203,168.46Z"
			/>
			<path
				className="c building-fill"
				d="M205.66,190.32c-3.55,0-5-.07-3.23-.15s4.68-.09,6.46,0S209.21,190.32,205.66,190.32Z"
			/>
			<ellipse
				className="c building-fill"
				cx="207.22"
				cy="184.49"
				rx="4.23"
				ry="0.67"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="207.19"
				rx="0.45"
				ry="0.67"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="201.41"
				rx="0.45"
				ry="0.67"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="195.62"
				rx="0.45"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M196.24,214.44c-4.21-.09-5.92-.28-6.05-.68s2.11-.56,10.28-.56c8,0,10.51-.13,10.66-.55.34-1,.87,0,.55,1s-.63.93-4.43.93h-4.13l0,2.07c0,1.3-.16,2.15-.5,2.27s-.56-.46-.56-2.07v-2.24Z"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="210.09"
				rx="0.45"
				ry="0.89"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="204.3"
				rx="0.45"
				ry="0.89"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="198.51"
				rx="0.45"
				ry="0.89"
			/>
			<ellipse
				className="c building-fill"
				cx="211.45"
				cy="192.72"
				rx="0.45"
				ry="0.89"
			/>
			<path
				className="c building-fill"
				d="M196.76,258.17v3.12c0,3.32-.87,4.47-.93,1.22,0-1-.07-2.69-.11-3.67l-.08-1.78,3.25-.13c2.21-.1,3.22-.3,3.17-.67s0-7.3,0-15.56c0-12.35.16-15,.66-15s.61,1.16.62,5.45c0,7.29,0,6.94,1.07,7.1,1.4.2,1.59,1.25.23,1.25-1.21,0-1.63,1-1.44,3.34.06.74.14,3.69.17,6.57l.08,5.23h4.15a24.63,24.63,0,0,1,4.37.21,4.41,4.41,0,0,1,0,1.78l-.18,1.57Z"
			/>
			<path
				className="c building-fill"
				d="M215.31,286.89a15.16,15.16,0,0,1-.12,2.78c-.16.84-.49,1-2,1h-1.77v-5.84l1.89.14C215.22,285.11,215.23,285.12,215.31,286.89Z"
			/>
			<path
				className="c building-fill"
				d="M226.06,303.73a.55.55,0,0,1-.55.74c-.41,0-.7-.38-.7-.92C224.81,302.46,225.85,302.61,226.06,303.73Z"
			/>
			<path
				className="c building-fill"
				d="M238.06,236.91l-.12-6.12h-7.57l-.12,6.12-.13,6.12h8.07Zm-.79,5.68H231V231.46h6.23Z"
			/>
			<path
				className="c building-fill"
				d="M239.18,305.93c1,.09.07.17-2.13.16s-3.05-.07-1.88-.17A31.48,31.48,0,0,1,239.18,305.93Z"
			/>
			<path
				className="c building-fill"
				d="M230.15,195v8h11.57v-8Zm11.13,7.57H231V195.4h10.24Z"
			/>
			<path
				className="c building-fill"
				d="M244.4,268.59c0,.41-.32.55-.89.39-.85-.22-.89,0-.89,4,0,2.32-.14,8.45-.3,13.63L242,296l-2.71-.08-2.72-.08,2.34-.17a4.88,4.88,0,0,0,2.35-.47c0-.17.06-2.71.11-5.65l.09-5.34-2.55-.14c-3.27-.17-3.35-1-.11-1h2.45V268h1.56C243.88,268,244.4,268.17,244.4,268.59Z"
			/>
			<path
				className="c building-fill"
				d="M252.88,277.93c1.46,3,2.65,5.63,2.65,5.78a11.16,11.16,0,0,1-2.7,1.63l-2.69,1.36-2.65-5.61c-1.46-3.09-2.65-5.69-2.65-5.8a26.23,26.23,0,0,1,4.59-2.53C250.12,272.48,250.63,273.23,252.88,277.93Z"
			/>
			<ellipse
				className="c building-fill"
				cx="254.41"
				cy="124.83"
				rx="8.24"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M260.24,169.13H256.5l-9.84-10,.15-2.45c.08-1.35.17-5.9.2-10.13l.06-7.68H250c1.64,0,2.89-.19,2.89-.44S251.6,138,250,138h-2.89v-5.79c0-4.84-.11-5.78-.67-5.78s-.67.81-.67,4.67c0,4.16-.08,4.68-.78,4.68-.43,0-5.39,4.65-11,10.35C216.65,163.53,215,165.31,215,166.62c0,.95-.2,1.17-1.11,1.17-.7,0-1.11.26-1.11.67s.41.67,1.11.67H215v9.35h3.11v59.66h-4.22c-3.46,0-4.22.12-4.22.66s.76.67,4.23.67h4.23v18.7h6.68v15.14h-7.13c-6,0-7.12.1-7.12.67s1.09.66,7.12.66h7.13v11.61c0,9.1.12,11.58.55,11.43s.59-2,.68-6.93l.12-6.76h3.33c1.92,0,3.33-.18,3.33-.44s-1.41-.45-3.34-.45h-3.34V255.94h15.14v6.24h1.56c1.08,0,1.56-.2,1.56-.67s-.4-.67-.89-.67c-.79,0-.89-.3-.89-2.45v-2.45H246c2.51,0,3.33-.14,3.19-.55s-3.62-.59-15-.67l-14.77-.12V186.09l2.66-5.69,2.66-5.71,3.54-2c1.94-1.11,3.68-2.14,3.85-2.31s-.34-1.44-1.13-2.81a9.93,9.93,0,0,1-1.26-2.68c.1-.09,3.77-1.18,8.17-2.42l8-2.25,10.27,10.24h3.89c3.16,0,3.89-.12,3.89-.66S263.27,169.13,260.24,169.13Zm-14.61-21.08-.12,11-8.68,2.41c-4.78,1.33-8.77,2.49-8.88,2.58s.36,1.23,2.23,4.38l.81,1.35-3.61,2-3.61,2-2.14,4.64-2.15,4.65v-6h-3.11V165.71l13.91-14.21c7.65-7.81,14.27-14.27,14.7-14.35C245.7,137,245.74,137.7,245.63,148.05Z"
			/>
			<ellipse
				className="c building-fill"
				cx="263.76"
				cy="272.86"
				rx="0.67"
				ry="2.23"
			/>
			<ellipse
				className="c building-fill"
				cx="263.76"
				cy="286.44"
				rx="0.67"
				ry="2.45"
			/>
			<path
				className="c building-fill"
				d="M265,198c-.92-.26-1.45-.7-1.45-1.18a65.63,65.63,0,0,1,1.5-8.42,6.84,6.84,0,0,1,2.26.35c1.8.45,2.06.66,1.87,1.47-.13.51-.47,2.59-.78,4.61C267.79,198.81,267.78,198.82,265,198Z"
			/>
			<path
				className="c building-fill"
				d="M243,218.73,238.77,212l.88-1.83a4.32,4.32,0,0,1,1.81-2.07c1.92-.51,5.51-.24,9.52.72l4.14,1,1,3.27c.85,2.81,1.1,3.23,1.87,3,.49-.12,2.15-.35,3.68-.52l2.78-.31-.21,1.29a79.11,79.11,0,0,0-1,7.94c.07.05,1.45.7,3.07,1.45,2.91,1.34,2.93,1.37,3.22,3.47a33.07,33.07,0,0,1,.29,3.62c0,.82-.15,1.48-.33,1.46-1.14-.11-21.16-7.91-21.67-8.44C247.42,225.74,245.26,222.42,243,218.73Z"
			/>
			<path
				className="c building-fill"
				d="M270.66,300.24c0,.55-.71.67-3.78.67h-3.79v-2c0-1.48.18-2,.67-2s.67.45.67,1.34v1.34h3.12C270,299.58,270.66,299.71,270.66,300.24Z"
			/>
			<ellipse
				className="c building-fill"
				cx="279.79"
				cy="81.2"
				rx="0.67"
				ry="2"
			/>
			<path
				className="c building-fill"
				d="M270.22,124.83c0-.55.79-.67,4.45-.67h4.45V106.8c0-15.14.09-17.37.67-17.37s.67,2.31.67,18v18h-5.12C271.08,125.5,270.22,125.38,270.22,124.83Z"
			/>
			<path
				className="c building-fill"
				d="M280.46,138.85H269.7c-5.92,0-10.66-.1-10.54-.22.32-.31,21.22-.45,21.53-.14a15.46,15.46,0,0,1,.1,3.76l-.15,3.5Z"
			/>
			<path
				className="c building-fill"
				d="M297.23,115.14a1.79,1.79,0,0,1,0,1.12c-.13.31-.23,0-.23-.56S297.1,114.84,297.23,115.14Z"
			/>
			<path
				className="c building-fill"
				d="M297.71,348a40.59,40.59,0,0,1,0,4.68c-.09,1.28-.17.23-.17-2.34S297.62,346.71,297.71,348Z"
			/>
			<path
				className="c building-fill"
				d="M302.79,115.7c0-.61.1-.86.22-.56a1.66,1.66,0,0,1,0,1.12C302.89,116.57,302.79,116.31,302.79,115.7Z"
			/>
			<path
				className="c building-fill"
				d="M290.29,164.44c-.54-.52-.36-1,1.28-3.08l1.9-2.46,1.4,1c2.24,1.57,8,5.79,8.43,6.13.19.17-.49,1.39-1.52,2.72s-2,2.54-2.14,2.72S292.27,166.37,290.29,164.44Z"
			/>
			<path
				className="c building-fill"
				d="M312.87,129.17c-.12-3.61-.2-3.91-1.1-4-.52-.08-2.69-1.93-4.8-4.12l-3.84-4h-6.07l-3.67,4c-3.24,3.55-3.83,4-5.18,4h-1.52V112.58h5.09c3.64,0,5.14.16,5.3.56.25.62.45-3.59.53-10.93,0-2.65-.12-4.91-.32-5s-.36,3.1-.36,7.15v7.37H286.69V94.33h2.78c1.87,0,2.57-.14,2.14-.41-.69-.44-3.74-.55-5-.18-.73.2-.78,1.51-.78,19.33v19.11h-5.56c-4.65,0-5.57.12-5.57.67s.92.67,5.57.67h5.56v12l6.12-.1,6.12-.09-5.67-.14-5.68-.14V133.51h1.64c1.43,0,2.06.41,5.07,3.34l3.43,3.34h6.58l3.85-3.56c2.3-2.14,4.22-3.57,4.79-3.57C313,133.06,313,132.89,312.87,129.17Zm-1.73,2.56a27,27,0,0,0-4.33,3.56L303,138.85h-5.7l-3.39-3.31c-2.92-2.83-3.65-3.32-5.19-3.45l-1.78-.14v-5.79l1.88-.13c1.72-.13,2.14-.44,5.28-3.9l3.42-3.76h5.11l3.93,4c2.16,2.2,4.19,4,4.51,4s.58.76.58,2.67C311.62,130.69,311.44,131.73,311.14,131.73Z"
			/>
			<path
				className="c building-fill"
				d="M317,352.73c-.39.49-.38.68.06.84s.45.33.3.5-.51,0-.81-.37c-.58-.7-.3-1.59.5-1.59C317.36,352.11,317.34,352.32,317,352.73Z"
			/>
			<path
				className="c building-fill"
				d="M318.66,349.65c.14.14,0,.5-.3.8s-.49.38-.25-.25C318.28,349.76,318.52,349.52,318.66,349.65Z"
			/>
			<path
				className="c building-fill"
				d="M320.32,348.07a1,1,0,0,1-.76.48c-.3,0-.27-.25.09-.68C320.26,347.13,320.8,347.3,320.32,348.07Z"
			/>
			<path
				className="c building-fill"
				d="M321.2,357c-.16-.25-.08-.45.16-.45a1,1,0,0,1,.73.45c.15.24.07.44-.17.44A1,1,0,0,1,321.2,357Z"
			/>
			<path
				className="c building-fill"
				d="M321,346c0-.54.85-1.17,1.16-.86.11.11-.11.46-.48.77S321,346.25,321,346Z"
			/>
			<path
				className="c building-fill"
				d="M323.42,358.2c-.37,0-.67-.17-.67-.38s.3-.37.67-.37.67.17.67.37S323.79,358.2,323.42,358.2Z"
			/>
			<path
				className="c building-fill"
				d="M323.09,141.23a1.76,1.76,0,0,1,1.11,0c.31.12.06.22-.56.22S322.78,141.35,323.09,141.23Z"
			/>
			<path
				className="c building-fill"
				d="M308.73,353.36c-4.16-3.44-7.65-6.48-7.75-6.73-.22-.61.63.05,8.7,6.71l6.62,5.46,1.21-1.45c.67-.8,1.13-1.7,1-2s0-.56.31-.56a2.58,2.58,0,0,0,1.29-.71c.72-.65.93-.59,2.8.78a8.16,8.16,0,0,1,2,1.85c0,.2-.88-.28-2-1.08l-2-1.44-1.67,1.95L317,358.85C316.35,359.56,315.75,359.16,308.73,353.36Z"
			/>
			<path
				className="c building-fill"
				d="M326.61,116.93a1.76,1.76,0,0,1,0,1.11c-.13.31-.22,0-.22-.56S326.48,116.62,326.61,116.93Z"
			/>
			<path
				className="c building-fill"
				d="M326.61,114.92c-.13.31-.22.06-.22-.55s.09-.87.22-.56A1.76,1.76,0,0,1,326.61,114.92Z"
			/>
			<path
				className="c building-fill"
				d="M326.61,112.25c-.13.31-.22,0-.22-.56s.09-.86.22-.55A1.76,1.76,0,0,1,326.61,112.25Z"
			/>
			<path
				className="c building-fill"
				d="M326.32,109.27c0-.38.2-.69.44-.69a.43.43,0,0,1,.45.42.94.94,0,0,1-.45.69C326.52,109.84,326.32,109.66,326.32,109.27Z"
			/>
			<path
				className="c building-fill"
				d="M325.65,357.9c-.15-.25.14-.45.64-.45s.92.2.92.45-.29.44-.65.44A1.18,1.18,0,0,1,325.65,357.9Z"
			/>
			<path
				className="c building-fill"
				d="M326.23,141.22a.9.9,0,0,1,.86,0c.14.14-.12.25-.59.23S325.87,141.36,326.23,141.22Z"
			/>
			<ellipse
				className="c building-fill"
				cx="329.21"
				cy="357.9"
				rx="0.67"
				ry="0.45"
			/>
			<path
				className="c building-fill"
				d="M329,109.05a1,1,0,0,1,.44-.69c.25-.16.45,0,.45.41s-.2.7-.45.7A.43.43,0,0,1,329,109.05Z"
			/>
			<path
				className="c building-fill"
				d="M329.73,105.82a.9.9,0,0,1,0,.86c-.15.14-.25-.12-.23-.59S329.59,105.47,329.73,105.82Z"
			/>
			<path
				className="c building-fill"
				d="M329.7,104c-.15.14-.25-.12-.23-.59s.12-.63.26-.27A.9.9,0,0,1,329.7,104Z"
			/>
			<path
				className="c building-fill"
				d="M329.7,101.33c-.15.15-.25-.11-.23-.58s.12-.63.26-.27A.88.88,0,0,1,329.7,101.33Z"
			/>
			<path
				className="c building-fill"
				d="M329.7,98.66c-.15.15-.25-.11-.23-.58s.12-.63.26-.27A.88.88,0,0,1,329.7,98.66Z"
			/>
			<path
				className="c building-fill"
				d="M328.9,141.22a.9.9,0,0,1,.86,0c.14.14-.12.25-.59.23S328.55,141.36,328.9,141.22Z"
			/>
			<path
				className="c building-fill"
				d="M329.43,95.69a1,1,0,0,1,.44-.69c.26-.15.33,0,.18.42C329.75,96.19,329.43,96.33,329.43,95.69Z"
			/>
			<path
				className="c building-fill"
				d="M313.52,365.66c10.3,1.66,13.54,1,16.39-3.27a8,8,0,0,0,1.3-2.79c0-.45.22-.81.48-.81.59,0,.16,1.52-.94,3.34a11.37,11.37,0,0,1-5,4.43c-1.75.73-4.61.81-7.91.22a29.77,29.77,0,0,0-3.9-.39c-1,0-1.89-.24-1.89-.5S312.66,365.52,313.52,365.66Z"
			/>
			<path
				className="c building-fill"
				d="M331.21,94c0-.54.85-1.17,1.16-.86.11.11-.11.46-.48.77S331.21,94.26,331.21,94Z"
			/>
			<path
				className="c building-fill"
				d="M330.81,320.21c-2.2-1.88-4.05-5.52-4-7.92a16.59,16.59,0,0,1,.88-4.26c1.12-3.18,1.09-3.78-.09-1.55a13,13,0,0,0-1.15,5c-.18,2.85-.08,3.4,1,5.49A14.23,14.23,0,0,0,330,320.3l1.27,1.07-1.17,2c-1.4,2.38-1.82,2.29-4.62-1-3.42-4-4.33-7.06-3.6-12.17a17.88,17.88,0,0,1,2.18-6.45l1.7-3.17-2.43-1.88a12.13,12.13,0,0,0-2.58-1.74c-.08.07-1.38,3.44-2.9,7.49l-2.75,7.34,2.16,6.61,2.16,6.6,4,2.81c2.21,1.55,4,2.78,4.08,2.74s1.19-2,2.56-4.47l2.5-4.4Zm-3.29,7.91c-.49.65-.9.49-3.76-1.52l-3.21-2.24-2.07-6.21L316.42,312l2.37-6.42c1.31-3.52,2.57-6.41,2.81-6.41a3.49,3.49,0,0,1,1.4.91l1,.92-1.57,3.16c-1.43,2.85-1.6,3.59-1.78,7.75-.19,4.34-.14,4.74,1,7.13a22.83,22.83,0,0,0,3.84,5.09C328.27,326.83,328.36,327,327.52,328.12Z"
			/>
			<path
				className="c building-fill"
				d="M332.66,141.23c.31.12,0,.22-.56.22s-.86-.1-.55-.22A1.76,1.76,0,0,1,332.66,141.23Z"
			/>
			<ellipse
				className="c building-fill"
				cx="332.1"
				cy="357.9"
				rx="0.89"
				ry="0.45"
			/>
			<ellipse
				className="c building-fill"
				cx="333.66"
				cy="92.1"
				rx="0.67"
				ry="0.45"
			/>
			<path
				className="c building-fill"
				d="M334.53,346.81a9.86,9.86,0,0,1-2.65.38c-1,0-1.54.19-1.25.38a.64.64,0,0,1,.19.89c-.24.4-1.31-.2-3.75-2.12a42.72,42.72,0,0,0-3.61-2.69c-.64,0-2.38-2.12-2.11-2.57s1.46.37,3.73,2.14c3.18,2.48,3.56,2.66,5.77,2.66a18.78,18.78,0,0,1,3.46.3C335.31,346.45,335.33,346.5,334.53,346.81Z"
			/>
			<path
				className="c building-fill"
				d="M302.85,105.24l.07-8.46.27,14.91h9.14l0-4.78c.09-9.49.12-9.91.7-9.91.42,0,.53,1.36.47,5.57l-.08,5.56h8l0,16.59c0,9.12,0,19.94,0,24l0,7.46h7.37c6.25,0,7.36.1,7.36.66s-1.19.67-8,.67h-8V164c0,5.44-.1,6.45-.67,6.45s-.66-1.11-.66-7.34v-7.35H313V145.56l-10-.28,5.23-.1,5.23-.09v9.79h6.68v-42.3h-8.42c-6.32,0-8.48.14-8.65.56A64.8,64.8,0,0,1,302.85,105.24Z"
			/>
			<ellipse
				className="c building-fill"
				cx="335"
				cy="357.9"
				rx="0.67"
				ry="0.45"
			/>
			<path
				className="c building-fill"
				d="M332.27,138l3,3.23v3a10.67,10.67,0,0,1-.22,3,9.53,9.53,0,0,1-.23-2.88v-2.89l-2.95-3.13c-1.63-1.73-2.86-3.24-2.73-3.37S330.65,136.26,332.27,138Z"
			/>
			<path
				className="c building-fill"
				d="M335.73,92.13c.19-.58.8-.68.86-.15,0,.18-.21.41-.5.5S335.63,92.42,335.73,92.13Z"
			/>
			<ellipse
				className="c building-fill"
				cx="336.56"
				cy="89.66"
				rx="0.45"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M336.11,87.21c0-.25.31-.45.69-.45s.57.2.42.45a1,1,0,0,1-.69.44A.43.43,0,0,1,336.11,87.21Z"
			/>
			<path
				className="c building-fill"
				d="M337.45,346.7c-.62,0-.87-.1-.56-.23a1.76,1.76,0,0,1,1.11,0C338.31,346.59,338.06,346.7,337.45,346.7Z"
			/>
			<path
				className="c building-fill"
				d="M337.36,357.81c.41-.41.65-.41,1.07,0s.29.53-.54.53S336.94,358.22,337.36,357.81Z"
			/>
			<path
				className="c building-fill"
				d="M338.7,86.9a.91.91,0,0,1,.85,0c.15.15-.11.25-.58.23S338.34,87.05,338.7,86.9Z"
			/>
			<path
				className="c building-fill"
				d="M340.89,346.5c.14.15-.12.25-.59.23s-.62-.12-.27-.26A.9.9,0,0,1,340.89,346.5Z"
			/>
			<path
				className="c building-fill"
				d="M340.48,358a.88.88,0,0,1,.85,0c.15.14-.11.25-.58.23S340.12,358.18,340.48,358Z"
			/>
			<path
				className="c building-fill"
				d="M341.37,86.9a.9.9,0,0,1,.85,0c.15.15-.11.25-.58.23S341,87.05,341.37,86.9Z"
			/>
			<path
				className="c building-fill"
				d="M328.76,210.53c-9.05,0-14-.15-14-.44s4.75-.45,13.36-.45h13.35v-4c0-3.26.13-4,.67-4s.67.79.67,4.45v4.45Z"
			/>
			<path
				className="c building-fill"
				d="M321.17,228.79h14l.13,1.89.14,1.89,2.14-3.44,2.15-3.45L342,227c1.27.73,2.26,1.53,2.2,1.76s-4.95,8.21-5.74,9.3a4.41,4.41,0,0,1-1.7-.76c-1.5-.89-1.58-.89-1.58-.11a1.22,1.22,0,0,1-.67,1.09c-.56.21-.67-.4-.67-4v-4.22H320.53c-11.58,0-13.36-.09-13.36-.67S309,228.79,321.17,228.79Z"
			/>
			<path
				className="c building-fill"
				d="M343.68,358.27c-.62,0-.86-.1-.56-.22a1.79,1.79,0,0,1,1.12,0C344.54,358.17,344.29,358.27,343.68,358.27Z"
			/>
			<path
				className="c building-fill"
				d="M344,86.9a.9.9,0,0,1,.85,0c.15.15-.11.25-.58.23S343.68,87.05,344,86.9Z"
			/>
			<path
				className="c building-fill"
				d="M339.89,134c1.55,0,2.1-.28,3.56-1.78.95-1,1.83-1.67,1.95-1.55s-.65,1.13-1.73,2.22c-1.68,1.72-2.21,2-3.78,2s-2.08-.28-4-2.23c-1.21-1.22-2-2.23-1.75-2.23a7.6,7.6,0,0,1,2.19,1.78C337.8,133.68,338.35,134,339.89,134Z"
			/>
			<path
				className="c building-fill"
				d="M346.54,358.31c-.52,0-.63-.13-.27-.27a.88.88,0,0,1,.85,0C347.27,358.22,347,358.33,346.54,358.31Z"
			/>
			<path
				className="c building-fill"
				d="M346.54,141.49c-.52,0-.63-.13-.27-.27a.88.88,0,0,1,.85,0C347.27,141.4,347,141.51,346.54,141.49Z"
			/>
			<path
				className="c building-fill"
				d="M346.27,86.9a.91.91,0,0,1,.85,0c.15.15-.12.25-.58.23S345.91,87.05,346.27,86.9Z"
			/>
			<path
				className="c building-fill"
				d="M349.31,350.11c-.15-.37-.07-.67.17-.67s.43.3.43.67-.08.67-.17.67S349.45,350.47,349.31,350.11Z"
			/>
			<path
				className="c building-fill"
				d="M348.91,358.05a1.76,1.76,0,0,1,1.11,0c.31.12.06.22-.55.22S348.6,358.17,348.91,358.05Z"
			/>
			<path
				className="c building-fill"
				d="M350,141.23c.31.12.06.22-.55.22s-.87-.1-.56-.22A1.76,1.76,0,0,1,350,141.23Z"
			/>
			<path
				className="c building-fill"
				d="M346.56,138a19,19,0,0,1,3.54-3.1,18.85,18.85,0,0,1-3.08,3.54l-3.29,3.33-.32,5.78-.09-3.13-.09-3.12Z"
			/>
			<path
				className="c building-fill"
				d="M350.79,353.45c-.24,0-.43-.31-.43-.67s.08-.67.17-.67.29.3.43.67S351,353.45,350.79,353.45Z"
			/>
			<path
				className="c building-fill"
				d="M351.77,355.13c.29.29.43.63.3.76-.3.29-.82-.23-.82-.83C351.25,354.79,351.46,354.81,351.77,355.13Z"
			/>
			<path
				className="c building-fill"
				d="M352.61,357.45a.44.44,0,0,1,.42.45c0,.24-.31.44-.7.44s-.57-.2-.41-.44A.94.94,0,0,1,352.61,357.45Z"
			/>
			<path
				className="c building-fill"
				d="M352,141.23a1.76,1.76,0,0,1,1.11,0c.31.12.05.22-.56.22S351.72,141.35,352,141.23Z"
			/>
			<path
				className="c building-fill"
				d="M338.34,361.7c0-.24.86.5,1.91,1.64,3,3.3,5.47,3.81,9.22,1.9a6.84,6.84,0,0,0,2.91-2.49c.39-.76.82-1.27.95-1.14.55.56-1.53,3-3.44,4.05a8.85,8.85,0,0,1-6.89.72C341.94,366,338.34,362.33,338.34,361.7Z"
			/>
			<path
				className="c building-fill"
				d="M352.21,344.78c-1.73,1.15-3.21,2.42-3.29,2.82s-.23.58-.49.17a3.93,3.93,0,0,0-2.52-.56,12.24,12.24,0,0,1-2.9-.28c-1.28-.49.2-1,2.81-1,2.06,0,2.8-.28,5.52-2.05,2.06-1.32,3.3-1.88,3.58-1.59S354.27,343.41,352.21,344.78Z"
			/>
			<path
				className="c building-fill"
				d="M355.17,141.22a.88.88,0,0,1,.85,0c.15.14-.11.25-.58.23S354.81,141.36,355.17,141.22Z"
			/>
			<path
				className="c building-fill"
				d="M353.25,276.17,349,272.76v-9.05c0-5.55-.17-9.15-.44-9.32-.43-.27-.72,6.62-.63,14.8l0,3.23h-2.53v-8.51l-5.9,0c-3.24,0-6.35,0-6.9,0-1,0-1-.11-1-5.81v-5.79h3.56V248.6c0-3.07-.12-3.79-.67-3.79s-.67.65-.67,3.12v3.12H300.05V228.79H288.92v8.9H274.23v16.92h-6.91c-5.83,0-6.9.1-6.9.67s.45.66,1.34.66h1.33v2.9c0,2.27.15,2.89.67,2.89s.67-.47.67-1.56v-1.55H295.6v41H286c-8.21,0-9.57.09-9.57.66s1.36.67,9.57.67h9.58v15.82l-7,7-7,7-4.67.13-4.68.12-.27,4.68h2c2,0,2,0,2,1.48a3.88,3.88,0,0,0,.29,1.78c.16.17,5.6.3,12.08.3h11.78l3.92-3.83,3.91-3.84,3.46,2.7c3.09,2.41,4.18,2.91,4.18,1.93a23.72,23.72,0,0,0-3.53-3l-3.54-2.66-2.27-6.46c-1.24-3.55-2.69-7.67-3.22-9.16l-1-2.72,1.45-4.63c.8-2.55,2.43-7.74,3.63-11.54l2.18-6.9,11.12-7.79,11.13-7.79,0-4.12,0-4.12h12.46v8.46h2.12c2,0,2.41.25,6.51,3.56,2.42,2,4.48,3.56,4.57,3.56s.16-.3.16-.66S355.58,278,353.25,276.17Zm-23-13.45-.12,10.33-5.57,3.9c-3.06,2.15-8,5.61-10.93,7.7l-5.38,3.79-3.64,11.69c-2,6.42-3.64,11.88-3.64,12.13s1.41,4.44,3.13,9.33l3.13,8.88-3.67,3.69-3.69,3.7h-22.5v-1.55c0-1.55,0-1.56-2-1.56s-2-.05-2-1.34v-1.33H282l14.9-14.93V257.28H280.68c-14.15,0-16.25-.08-16.25-.67s.92-.67,5.57-.67h5.56V239h14.8l-.18-4.46-.18-4.45h8.71v22.26h31.63Z"
			/>
			<ellipse
				className="c building-fill"
				cx="358.59"
				cy="83.2"
				rx="0.67"
				ry="2.23"
			/>
			<path
				className="c building-fill"
				d="M357.65,305,355,297.13l-5.12-3-5.12-3H338c-7.66,0-7.51-.09-5.92,3.43,1.26,2.77,4.47,5.8,6.55,6.17,3.07.54,6.85,2.87,8.25,5.06,2.85,4.52,2.86,10.33,0,13.55-.61.69-.63.81-.09.65a5.62,5.62,0,0,0,1.7-2.07c1.4-2.52,1.42-7.1.05-10.3a13.93,13.93,0,0,0-5.14-5.72c-.8-.45-.8-.53.17-2.52l1-2.06,2,1.41c2.33,1.59,5.1,5.6,6.22,9a12.48,12.48,0,0,1,.46,5.64c-.38,4.66-.87,6.13-2.92,8.82l-1.76,2.32,2.53,1.79c1.38,1,2.65,1.64,2.81,1.47s1.65-3.59,3.3-7.58l3-7.25Zm-1.27,14c-3.36,8.09-2.92,7.48-4.55,6.27l-1.39-1,1.71-2.54c1.85-2.76,2.44-5.31,2.42-10.56,0-3.16-1.16-6.23-3.76-10-1.29-1.88-5.4-5.13-6.48-5.13-.26,0-.92.93-1.47,2.05-1,2-1,2.05-2.63,1.75a12.46,12.46,0,0,1-2.84-.93A12.18,12.18,0,0,1,333,293.7l-.44-1.25h12l4.65,2.71c5.26,3.07,4.63,2.08,8,12.49l1.69,5.18Z"
			/>
			<path
				className="c building-fill"
				d="M365.05,251.83c0,6.3.13,11.91.28,12.46.22.81.08,1-.67,1-.94,0-1-.06-1-12.46,0-10.79.09-12.47.67-12.47S365.05,241.93,365.05,251.83Z"
			/>
			<path
				className="c building-fill"
				d="M365.13,287.45c-1.84-1.48-2.65-2.4-2.36-2.69s1.36.3,3.14,1.69a13.37,13.37,0,0,1,2.7,2.48C368.61,289.89,367.7,289.5,365.13,287.45Z"
			/>
			<path
				className="c building-fill"
				d="M353.55,265.07l7.53,6.14a81.17,81.17,0,0,1,7.53,6.57c0,1-1.57,0-8.35-5.66l-7.23-6,.1-6.08.09-6.08.17,5.57Z"
			/>
			<path
				className="c building-fill"
				d="M364.8,334.79c2.16-1.57,3.2-2.09,3.43-1.72s.29.56.25.6L365,336.24c-2.13,1.57-3.53,2.33-3.72,2C360.87,337.67,361,337.57,364.8,334.79Z"
			/>
			<path
				className="c building-fill"
				d="M363.71,209.64H368c3.22,0,4.22.14,4.08.56s-1.19.57-3,.59c-1.58,0-3.11.07-3.41.11s-.56,2.51-.56,10.54c0,8.92-.1,10.46-.66,10.46s-.68-1.15-.77-6.74l-.13-6.75-1.42,1.2-1.41,1.19-3.45-4.55-3.45-4.54,1.92-1.7a10.49,10.49,0,0,1,2.25-1.7A21.59,21.59,0,0,1,361,212l2.71,3.64Z"
			/>
			<path
				className="c building-fill"
				d="M372.62,110.07l-1.34.2c-.8.11-1.33,0-1.33-.31s.6-.49,1.33-.49c1.26,0,1.34-.1,1.34-1.76a3.4,3.4,0,0,1,.44-2c.3-.18.45,3.56.45,10.89,0,7.14-.16,11.15-.45,11.15s-.44-.29-.44-.65-.84-.68-3.9-.8l-3.89-.15,3.89-.09,3.9-.09Z"
			/>
			<ellipse
				className="c building-fill"
				cx="373.51"
				cy="266.41"
				rx="0.45"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M359.87,350.91c.11-.11.87.15,1.69.58,1.61.84,4.54,1,9.28.5l2.89-.31-2.89.63c-4.24.93-7,.85-9.26-.26C360.53,351.54,359.76,351,359.87,350.91Z"
			/>
			<path
				className="c building-fill"
				d="M350.15,156.22H358l0-7.46c0-4.1,0-18.23,0-31.39,0-21,.1-23.93.68-23.93s.67,1.19.67,8v8h3.56c2.25,0,3.57.18,3.57.48s-1.23.43-3.57.33l-3.56-.14v15.75l1.89.17,1.9.17-1.9.08-1.89.08v49.86h15.09l.16-2.78.16-2.78.09,3.22.08,3.23H359.26v6.68h7.79c4.9,0,7.79.16,7.79.44s-5.64.45-16,.45h-16v4.9c0,4-.12,4.89-.67,4.89s-.67-.84-.67-4.89v-4.9H306.28v24.93h1.34c.73,0,1.33.2,1.33.45s-.9.44-2,.44h-2v-4.9H290l.07,2.68c.06,2-.07,2.67-.55,2.67s-.63-1.1-.63-5.78v-5.77l-5.23-.13-5.24-.12-.12-7.68c-.12-7.45-.09-7.68.78-7.68s.9-.27.9-6.68v-6.68h-3.56c-2.87,0-3.56-.13-3.56-.66s.77-.67,4.23-.67h4.23v14.69h37.4V176.7h-6.68v-7.65a58.33,58.33,0,0,1,.23-7.41,58.2,58.2,0,0,1,.28,7.2l.05,7h3c4.5,0,4.43-.07,4.43,4.27v3.74h37.85V157.55h-7.8c-6.62,0-7.79-.1-7.79-.67S343.51,156.22,350.15,156.22Z"
			/>
			<path
				className="c building-fill"
				d="M381.52,191.31c0,.48-16,.49-16.29,0-.13-.2,3.48-.37,8-.37S381.52,191.11,381.52,191.31Z"
			/>
			<path
				className="c building-fill"
				d="M384.56,360.78c.4.41,0,5.26-.46,6.23a33.36,33.36,0,0,1-6.62,6.7,10.89,10.89,0,0,1-7.4.54c-1.81-.63-1.91-.61-2.89.45-2.52,2.7-8.47,4.44-13.63,4a40.92,40.92,0,0,1-6.73-1.4c-6.54-2-9-1.54-15.76,2.84-5,3.25-7.21,4.09-11,4.18-2.87.08-2.9.09-4.06,1.9a9,9,0,0,1-5.53,4.14c-2,.52-7.33.48-7.33-.06,0-.18,1.66-.34,3.69-.34,2.72,0,4.07-.21,5.23-.82,2.07-1.1,4.23-4,5.15-6.93.74-2.33.74-2.42-.2-3.94-1.32-2.13-1.2-2.61.19-.74,1.15,1.52,1.28,3.27.41,5.42-.28.69,0,.78,2.4.78,3.53,0,5.92-.94,11.55-4.56,6.71-4.31,8.33-4.53,16.11-2.22,7.17,2.12,13.82,1.35,18.58-2.15l1.86-1.36-2.21-2.73a13,13,0,0,1-2.21-3.39c0-.36.61.26,1.36,1.39a23.22,23.22,0,0,0,3.12,3.63c1.66,1.5,1.93,1.6,4.76,1.58,3.73,0,5-.67,8.35-4.34,2.53-2.75,2.57-2.84,2.79-5.91C384.22,362,384.43,360.65,384.56,360.78Z"
			/>
			<ellipse
				className="c building-fill"
				cx="383.3"
				cy="210.09"
				rx="4.45"
				ry="0.45"
			/>
			<ellipse
				className="c building-fill"
				cx="387.31"
				cy="122.6"
				rx="0.45"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M387.76,119.46a1.19,1.19,0,0,1-.45.92c-.24.15-.45-.14-.45-.64s.21-.92.45-.92S387.76,119.11,387.76,119.46Z"
			/>
			<ellipse
				className="c building-fill"
				cx="387.31"
				cy="116.81"
				rx="0.45"
				ry="0.67"
			/>
			<ellipse
				className="c building-fill"
				cx="387.31"
				cy="111.03"
				rx="0.45"
				ry="0.67"
			/>
			<path
				className="c building-fill"
				d="M386.86,113.92c0-.83.13-1,.54-.53s.41.65,0,1.06S386.86,114.75,386.86,113.92Z"
			/>
			<path
				className="c building-fill"
				d="M387.4,107.6c.41.41.41.65,0,1.07s-.54.3-.54-.54S387,107.18,387.4,107.6Z"
			/>
			<path
				className="c building-fill"
				d="M386.86,91.88V89h-3.81c-2.09,0-3.71-.15-3.6-.34a14.32,14.32,0,0,1,4.14-.24l3.94.08.13,3.14c.09,2,0,3.15-.33,3.15S386.86,93.6,386.86,91.88Z"
			/>
			<path
				className="c building-fill"
				d="M371.76,153.1h13.17l1.8-4.12c1.64-3.75,1.72-4.13,1-4.26s-.84-.57-.84-3.48c0-2.11.17-3.23.45-3.06s.45,1.57.45,3.15v2.87h4.89l-.08,2.56-.08,2.56-.17-2.34c-.16-2.31-.17-2.34-1.62-2.34s-1.51.11-3.39,4.45l-1.92,4.45H371.28l.1-5,.09-5,.15,4.78Z"
			/>
			<path
				className="c building-fill"
				d="M396.06,119.15a1.63,1.63,0,0,1,0,1.11c-.12.31-.22.06-.22-.55S395.94,118.84,396.06,119.15Z"
			/>
			<path
				className="c building-fill"
				d="M396,117.36c-.15.15-.25-.11-.24-.58s.13-.63.27-.27A.88.88,0,0,1,396,117.36Z"
			/>
			<path
				className="c building-fill"
				d="M395.77,122.58c0-.39.2-.57.44-.42a.94.94,0,0,1,.45.69.44.44,0,0,1-.45.42C396,123.27,395.77,123,395.77,122.58Z"
			/>
			<path
				className="c building-fill"
				d="M395.77,111c0-.37.2-.67.43-.67s.32.3.17.67-.33.66-.43.66S395.77,111.39,395.77,111Z"
			/>
			<path
				className="c building-fill"
				d="M395.77,113.89c0-.5.19-.79.43-.65a.79.79,0,0,1,.17.92C396,115.08,395.77,115,395.77,113.89Z"
			/>
			<path
				className="c building-fill"
				d="M395.77,108.11c0-.51.19-.8.43-.66a.79.79,0,0,1,.17.92C396,109.29,395.77,109.18,395.77,108.11Z"
			/>
			<path
				className="c building-fill"
				d="M379.39,82.07c.12-.12,6.17-.23,13.45-.23,8.08,0,13.11-.15,13-.41a31,31,0,0,0-3.42-2.64l-3.16-2.22L395.9,79a15.75,15.75,0,0,1-3.54,2.25c-.37-.37,6.67-5.24,7.25-5a41.86,41.86,0,0,1,3.7,2.5l3.14,2.29V106.8H386.86V104c0-2,.14-2.63.5-2.27a3.77,3.77,0,0,1,.32,2.32l-.17,1.82h18.05V82.31H392.35C385.09,82.31,379.26,82.2,379.39,82.07Z"
			/>
			<path
				className="c building-fill"
				d="M406.45,135.85a91.45,91.45,0,0,0,.46,11.47c1.09,3.67-1.5,10.38-5,12.91a7.47,7.47,0,0,1-2.32,1.3c-.27,0-.11-.26.35-.55,4.87-3,7.49-9.23,6.06-14.33l-.56-2h-6.52l-.16,2.34-.16,2.34-.08-2.56-.09-2.56h7.12V126.39h-18l.15,2.71c.09,1.59,0,2.93-.33,3.21s-.49-.64-.49-3.61c0-2.7.17-4.09.5-4.09s.37.29.24.66c-.22.57.39.67,3.92.67s4.21-.11,4.39-.78.2-.74.25,0,.62.78,5.17.78h5.12Z"
			/>
			<path
				className="c building-fill"
				d="M411.12,166.38c3.31-3.75,6-7,6-7.15a4.89,4.89,0,0,0-1.8-1.24l-1.8-.92,1.86-3.43c1-1.89,2-3.6,2.19-3.8s1.55.25,3,1a31.92,31.92,0,0,0,2.93,1.37,5.25,5.25,0,0,0,.73-1.89c1-3.83-.73-15.82-2.9-19.79-1.95-3.58-2.67-4.33-3.6-3.81-.67.38-1.18,0-3.07-2a31,31,0,0,1-2.38-2.78c-.2-.52,6.61-5.81,8.68-6.75s2.28-1.41,3.28-7.26a46.72,46.72,0,0,0-.7-15,50.1,50.1,0,0,0-5.7-12.31c-1.35-2.24-2.3-4.08-2.1-4.08.57,0,5.24,8,6.71,11.51a41.34,41.34,0,0,1,2,6.22,54.19,54.19,0,0,1,0,16.33c-.36,1.72-.66,3.27-.66,3.45s.83.34,1.84.34c2.25,0,3,.85,3,3.36,0,2.7-1.57,4.53-5.76,6.65l-3.53,1.78,1.53,2.41c1.9,3,2.67,5.36,3.53,10.73.77,4.8.88,9.77.27,11.93l-.42,1.46,3.78,1.87c3,1.49,3.73,2,3.53,2.66-.13.43-.35,1.13-.49,1.56-.19.61.4,1.1,2.74,2.25,2,1,2.83,1.62,2.52,1.93s-1.33,0-3.17-.92a19.28,19.28,0,0,0-3.1-1.37c-.21,0-.75.8-1.19,1.78s-1,1.77-1.29,1.77a42.38,42.38,0,0,1-5-2.38L418,159.47l-6.27,7.06c-5.73,6.46-6.65,7.41-6.65,6.87C405.12,173.29,407.82,170.14,411.12,166.38Z"
			/>
			<ellipse
				className="c building-fill"
				cx="447.86"
				cy="85.87"
				rx="3.12"
				ry="0.45"
			/>
			<path
				className="d no-fill building-stroke"
				d="M207,255.94c-2.38,0-4,.19-4,.45s1.63.44,4,.44,4-.18,4-.44S209.37,255.94,207,255.94Zm0,0c-2.38,0-4,.19-4,.45s1.63.44,4,.44,4-.18,4-.44S209.37,255.94,207,255.94Zm6.45,30.28c-.46,0-.66.47-.66,1.56s.2,1.56.66,1.56.67-.48.67-1.56S213.92,286.22,213.45,286.22Zm0,0c-.46,0-.66.47-.66,1.56s.2,1.56.66,1.56.67-.48.67-1.56S213.92,286.22,213.45,286.22Zm8.69-30.28c-1.49,0-2.68.2-2.68.45s1.19.44,2.68.44,2.67-.19,2.67-.44S223.62,255.94,222.14,255.94Zm0,0c-1.49,0-2.68.2-2.68.45s1.19.44,2.68.44,2.67-.19,2.67-.44S223.62,255.94,222.14,255.94Zm0,0c-1.49,0-2.68.2-2.68.45s1.19.44,2.68.44,2.67-.19,2.67-.44S223.62,255.94,222.14,255.94Zm-8.69,30.28c-.46,0-.66.47-.66,1.56s.2,1.56.66,1.56.67-.48.67-1.56S213.92,286.22,213.45,286.22ZM207,255.94c-2.38,0-4,.19-4,.45s1.63.44,4,.44,4-.18,4-.44S209.37,255.94,207,255.94Z"
			/>
			<path
				className="e no-fill border-stroke"
				d="M299.53,345.85l0,5.12.2,5.31"
			/>
			<path
				className="e no-fill border-stroke"
				d="M366.91,394.43l-4.3,17.8,8.85,8.64,3.06,5.11.92,7.52-8.2,7.78-21.66-20.41,2.22-22.65-2.44-3.16-18.3-.17-1.46,1.81,1.48,7.27-.31,30.43-9.19,5.21-.87,8.2-14.19.67-6.67-14.74.22-8.59,16.82-14.21v-2.38L301.4,391l-1.64-34.72H263.41l.21-22.15-1.14-1.44L254.37,329l-8.93-7.9,3.22-2.71.55-1.54-1.46-1.73-4.73,4.7-3.69-.88-7.88-.1.26-11.5-7.79.21-.12-1.43-23,.09V275.79H173.22L164.84,277l-.07,2.64-1.21,3.28.07,6.65.61.23,2.2-1.2,7.08,11.08-11,6.91-8.06-13.14-9.77,1-.29,8.05-12.56-.14v-7.91l-7.28-.07-5.59,8.52-16.82,10L90.5,322.72l-27.6,12-8.4-5.14.37-13.12L65.63,307l11.76-5,6.09-5,6.69-6.62L92,282.09l-4.89-3.42-9.43,0-10,8.7-12.28,1.71-12.24-9.24,3-16.54,14.21-6.35,34.43-.11,5-3.79,4.74-6.88-6.86-13.29-5.5-2-24.6-.09-25.68-9.54-4.27-9.53L42,203.09l8.62,1.78,8.86-.22,19.31,9.76,15.61-13.52-.61-7.59L84,181.59l-5.65-3.22-6.2-2.09-9.87-.1-8.92-8.11-2.09-8.27,8.5-8.08,18.47,3.43L92,160l15.23,15.48,6.08.61,15.27,8.79,15.25-.1.28,8.47,7,.38.37-.6-.77-11.07,13.1-1.42.06,13.85,2.9,15.89,2.43,1.27.68.35h.62v-.73l0-32,29.07-.2h1.75l.06-19.41,36.78-35.26h0l-.11-31.67H264.5V77.34h50V85.2h4.94V78.93H356.7V63.53h34.89c3.82-.3,20.26,4.49,24.66,11.29,11.49.48,19.23,2.07,20,5.7h2.34l1.61,4.83,4.06-1.63,7.05-.06,2.09.86L455,82,456,78.8l-.09-3.47h5.61l4.31,5.81,2.69,9.8L469,99l-7.86-.13L452.51,94l-4.91,5.15-9.73,0-3.37,6,.32,3,2.79,2.6,8.5,3.49,16.93-.25,11.27,1.28.09,5.29-2.62,7.94L463,131.47l-20.78-.18-4.83,2.78,2.39,4.26-.14,2.51.81,1.22,2.28.28,2,2.89,1,.57,4.52-4.43,17.64-.23,1.36,17.09-5.62.06-4.67,5-3.14-1.06-7.81,10.59h-6.8l-11.42,7.33H418.92l-3.73-3.43h-8.28l-10.63-5.25L390,170.21l-6.15,2.13v10.17h5.67v85.88H375.44v3.89l-4.6,5.52,5.69,4.69-5.95,6.67.08,1.51,6.12,18.42.09,2.18L370,332.73l6.32,9.33-1.08,6.76,0,2.46,21.09,16.55,1.87,7.11-2.55,2.85L402.8,386l7.76,5.31,3.7-2,6.05,4.07L418,406l-.87,1.73-5,1.31-5.5.58-3.69-.5-3.58-1.29-3.76-2.24-5.27-3.77-4.2-5.63-4.48-6.53-1.32-3.33,0,1.16Z"
			/>
			<path className="e no-fill border-stroke" d="M301.4,391l-1.64-34.72" />
		</SVGOverlay>
	),
	firebaseZSpawn: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
            .d{strokeMiterlimit:10;}
            .d{strokeWidth:0.96px;}
            `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M186.92,399.81l.17-54.81-27.67-.2.74-9.16-15-2.71,0-90.36-7.12.07L137.85,221l3.41-.15V113.45l148.43,0-.05,2.89h42l.2,115-12,0,.05,12.78,55,66-42.95,35.62-26.34-31.66-31.81,27,.1,17.94-29.52-.11.1,40.92Z"
			/>
			<path
				className="c building-fill"
				d="M196.08,201.53a.81.81,0,1,1-.81-.8A.81.81,0,0,1,196.08,201.53Z"
			/>
			<path
				className="c building-fill"
				d="M196.08,198.3a.81.81,0,1,1-1.61,0,.81.81,0,0,1,1.61,0Z"
			/>
			<path
				className="c building-fill"
				d="M198.77,270.19c-1,0-1.14-.13-.65-.65s.79-.49,1.3,0S199.78,270.19,198.77,270.19Z"
			/>
			<path
				className="c building-fill"
				d="M202.27,270.19c-.44,0-.8-.22-.8-.52s.36-.38.8-.22.81.4.81.54S202.72,270.19,202.27,270.19Z"
			/>
			<path
				className="c building-fill"
				d="M205.24,262.92c0-.45.24-.81.53-.81s.54.36.54.81-.24.81-.54.81S205.24,263.37,205.24,262.92Z"
			/>
			<path
				className="c building-fill"
				d="M205.24,259.69c0-.45.24-.81.53-.81s.54.36.54.81-.24.81-.54.81S205.24,260.14,205.24,259.69Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,249.46c0,.45-.24.81-.54.81s-.53-.36-.53-.81.24-.81.53-.81S206.31,249,206.31,249.46Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,236c0,.45-.24.8-.54.8s-.53-.35-.53-.8.24-.81.53-.81S206.31,235.55,206.31,236Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,222.53c0,.45-.24.81-.54.81s-.53-.36-.53-.81.24-.8.53-.8S206.31,222.09,206.31,222.53Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,209.07c0,.45-.24.81-.54.81s-.53-.36-.53-.81.24-.8.53-.8S206.31,208.62,206.31,209.07Z"
			/>
			<path
				className="c building-fill"
				d="M205,269.65a1.17,1.17,0,0,1,.83-.54.53.53,0,0,1,.51.54c0,.29-.38.54-.83.54S204.79,269.94,205,269.65Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,225.74c0,.45-.24.83-.54.83a.52.52,0,0,1-.53-.51,1.16,1.16,0,0,1,.53-.83C206.07,225.05,206.31,225.27,206.31,225.74Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,212.28c0,.45-.24.83-.54.83a.52.52,0,0,1-.53-.51,1.14,1.14,0,0,1,.53-.83C206.07,211.59,206.31,211.81,206.31,212.28Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,239.21c0,.94-.31,1.07-.78.33a.62.62,0,0,1,.24-.85C206.07,238.51,206.31,238.73,206.31,239.21Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,215.78c0,1.3-.29,1.41-.72.32a1,1,0,0,1,.21-1.13C206.09,214.82,206.31,215.15,206.31,215.78Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,266.31c0,1.3-.27,1.5-.83.6a1,1,0,0,1,.23-1.18C206.16,265.28,206.31,265.43,206.31,266.31Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,256.08c0,1.3-.27,1.5-.83.6a1.06,1.06,0,0,1,.23-1.19C206.16,255.07,206.31,255.2,206.31,256.08Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,252.85c0,1.3-.27,1.5-.83.6a1.06,1.06,0,0,1,.23-1.19C206.16,251.84,206.31,252,206.31,252.85Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,242.62c0,1.3-.27,1.5-.83.6a1.06,1.06,0,0,1,.23-1.19C206.16,241.61,206.31,241.74,206.31,242.62Z"
			/>
			<path
				className="c building-fill"
				d="M206.31,229.15c0,1.31-.27,1.51-.83.61a1.06,1.06,0,0,1,.23-1.19C206.16,228.14,206.31,228.28,206.31,229.15Z"
			/>
			<path
				className="c building-fill"
				d="M205.55,233.1c-.45-.72,0-1.55.54-1a1.08,1.08,0,0,1,.11,1C206,233.66,205.89,233.66,205.55,233.1Z"
			/>
			<path
				className="c building-fill"
				d="M205.55,219.64c-.45-.72,0-1.55.54-1a1.11,1.11,0,0,1,.11,1C206,220.2,205.89,220.2,205.55,219.64Z"
			/>
			<path
				className="c building-fill"
				d="M206.36,206.36a.6.6,0,1,1,.2-.83A.62.62,0,0,1,206.36,206.36Z"
			/>
			<path
				className="c building-fill"
				d="M199.58,322.42h-10v10.23c0,8.73-.11,10.23-.81,10.23s-.81-1.59-.81-11v-11h10.77c9.23,0,10.77.11,10.77.8S208.09,322.42,199.58,322.42Z"
			/>
			<path
				className="c building-fill"
				d="M191.77,306.81h15.62v-4.58c0-2.69.22-4.58.54-4.58s.54,2,.54,4.85v4.84H192.85v1.89c0,1.86,0,1.88-2.29,1.79-2-.06-2.06-.11-.54-.29s1.75-.38,1.75-2.08Z"
			/>
			<path
				className="c building-fill"
				d="M209.27,205.21c.45,0,.81.21.81.45s-.36.45-.81.45-.8-.2-.8-.45S208.83,205.21,209.27,205.21Z"
			/>
			<path
				className="c building-fill"
				d="M212.51,205.21c.44,0,.8.21.8.45s-.36.45-.8.45-.81-.2-.81-.45S212.06,205.21,212.51,205.21Z"
			/>
			<path
				className="c building-fill"
				d="M206,245.42h-10v-41.6l-1.21.34c-.67.18-12.54.34-26.39.34-22,0-25.17.11-25.17.8s1.21.81,7.76.81h7.79l0,12c0,10.9.3,13.73.95,11.87.2-.52,4.17-.67,17.43-.67h17.19v43.61H160V257.27c0-12.14-.15-15.62-.67-15.62s-.67,3.66-.67,16.42V274.5h20.06c17.47,0,20.05-.11,20.05-.81,0-.49-.51-.81-1.34-.81h-1.35V247h10c8.51,0,10-.12,10-.81S214.55,245.42,206,245.42Zm-11.57-17.77H160V206.11h34.47Z"
			/>
			<path
				className="c building-fill"
				d="M216,205a.53.53,0,0,1,.51.54c0,.29-.38.54-.83.54s-.69-.25-.51-.54A1.17,1.17,0,0,1,216,205Z"
			/>
			<path
				className="c building-fill"
				d="M220.07,205.6c.15.29-.18.51-.81.51-1.3,0-1.41-.29-.32-.72A1,1,0,0,1,220.07,205.6Z"
			/>
			<path
				className="c building-fill"
				d="M223.3,205.6c.15.29-.18.51-.81.51-1.3,0-1.41-.29-.31-.72A1,1,0,0,1,223.3,205.6Z"
			/>
			<path
				className="c building-fill"
				d="M224.08,361.19c.34,0,.54,3.5.54,9.43V380H205.24v-8.62c0-5.38.2-8.61.53-8.61s.54,3.14.54,8.34v8.35h17.23v-9.15C223.54,364.6,223.75,361.19,224.08,361.19Z"
			/>
			<path
				className="c building-fill"
				d="M225.68,205a1.19,1.19,0,0,1,.83.54c.18.29,0,.54-.52.54s-.83-.25-.83-.54A.53.53,0,0,1,225.68,205Z"
			/>
			<path
				className="c building-fill"
				d="M229.2,205c.45,0,.81.25.81.54s-.36.54-.81.54-.81-.25-.81-.54S228.75,205,229.2,205Z"
			/>
			<path
				className="c building-fill"
				d="M232.43,205c.45,0,.81.25.81.54s-.36.54-.81.54-.81-.25-.81-.54S232,205,232.43,205Z"
			/>
			<path
				className="c building-fill"
				d="M236.47,205.86c0,.14-.38.25-.83.25s-.7-.25-.52-.54C235.44,205.06,236.47,205.3,236.47,205.86Z"
			/>
			<path
				className="c building-fill"
				d="M239.81,205.46c.49.52.36.65-.65.65s-1.14-.13-.65-.65S239.29,205,239.81,205.46Z"
			/>
			<path
				className="c building-fill"
				d="M242.93,345.58c0,9.69-.11,11.3-.81,11.3s-.81-1.61-.81-11.3.12-11.31.81-11.31S242.93,335.88,242.93,345.58Z"
			/>
			<path
				className="c building-fill"
				d="M242.37,205a1.17,1.17,0,0,1,.83.54c.18.29,0,.54-.52.54s-.83-.25-.83-.54A.53.53,0,0,1,242.37,205Z"
			/>
			<path
				className="c building-fill"
				d="M245.6,205a1.17,1.17,0,0,1,.83.54c.18.29-.05.54-.52.54s-.83-.25-.83-.54A.53.53,0,0,1,245.6,205Z"
			/>
			<path
				className="c building-fill"
				d="M249.12,205.21c.45,0,.81.21.81.45s-.36.45-.81.45-.81-.2-.81-.45S248.67,205.21,249.12,205.21Z"
			/>
			<path
				className="c building-fill"
				d="M251,193.19h-1.62v-35H237.07l-.18-2.25c-.09-1.23-.47-2.35-.83-2.46-.51-.18-.67,2.17-.67,10.59v10.81H196.1l-.13-6.6c-.09-3.95-.38-6.59-.7-6.59s-.58,6.14-.67,17.09c-.13,15,0,17.1.67,17.1.45,0,.81-.25.81-.54s9.78-.54,28.27-.54c24.77,0,28.27-.11,28.27-.8C252.62,193.46,252.08,193.19,251,193.19Zm-15.62,0H196.08V176.5h39.31Zm12.39,0H237V159.26h10.77Z"
			/>
			<path
				className="c building-fill"
				d="M251.81,205.57a1.19,1.19,0,0,1,.83-.54.53.53,0,0,1,.52.54c0,.29-.38.54-.83.54S251.63,205.86,251.81,205.57Z"
			/>
			<path
				className="c building-fill"
				d="M255,205.6c.29-.48,1.91-.21,1.91.31,0,.11-.49.2-1.1.2S254.87,205.89,255,205.6Z"
			/>
			<path
				className="c building-fill"
				d="M259.06,206.11c-.63,0-1-.22-.81-.51.3-.48,1.91-.21,1.91.31C260.16,206,259.67,206.11,259.06,206.11Z"
			/>
			<path
				className="c building-fill"
				d="M263.39,205.86c0,.14-.38.25-.83.25s-.69-.25-.51-.54C262.36,205.06,263.39,205.3,263.39,205.86Z"
			/>
			<path
				className="c building-fill"
				d="M228,246.09c-.18-.51,1.25-.67,5.94-.67h6.15l-1.26-2.51a12.59,12.59,0,0,1-1.28-4.49c0-2.18,2-6.51,3.24-6.91.44-.16.26.34-.43,1.26a8.76,8.76,0,0,0,.76,11.93,8.63,8.63,0,0,0,13.06-1.46l.83-1.32-1.32,1.14a7.9,7.9,0,0,1-6.06,2.36,8,8,0,0,1-6.91-11.85,10.09,10.09,0,0,0,1-2.42c0-1,2.56-1.86,5.56-1.88,3.77,0,6.24,1.48,7.76,4.69l1.08,2.26,3.64,0c2.87,0,3.63.21,3.63.83s-.74.81-3.5.81c-3.39,0-3.5.05-3.5,1.37,0,2.18-2,5.52-4.17,7a10,10,0,0,1-7.94,1.32,55.1,55.1,0,0,0-8.84-.65C230.23,246.81,228.14,246.59,228,246.09Z"
			/>
			<path
				className="c building-fill"
				d="M265.81,205.21c.45,0,.81.21.81.45s-.36.45-.81.45-.8-.2-.8-.45S265.37,205.21,265.81,205.21Z"
			/>
			<path
				className="c building-fill"
				d="M269.85,205.6c0,.29-.36.51-.8.51s-.81-.09-.81-.2.36-.36.81-.54S269.85,205.3,269.85,205.6Z"
			/>
			<path
				className="c building-fill"
				d="M272.55,202.88c-.3,0-.54-.49-.54-1.12s.24-.94.54-.76a1.41,1.41,0,0,1,.53,1.1C273.08,202.52,272.84,202.88,272.55,202.88Z"
			/>
			<path
				className="c building-fill"
				d="M273.08,197.72a1.45,1.45,0,0,1-.53,1.12c-.3.18-.54-.18-.54-.78s.24-1.1.54-1.1S273.08,197.29,273.08,197.72Z"
			/>
			<path
				className="c building-fill"
				d="M271.74,205.57a1.2,1.2,0,0,1,.87-.54c.29,0,.38.25.2.54a1.19,1.19,0,0,1-.87.54C271.65,206.11,271.56,205.86,271.74,205.57Z"
			/>
			<path
				className="c building-fill"
				d="M158.93,159.26c-.34,0-.54-3.14-.54-8.34v-8.35h36.08V128H237V134h38.23V149c0,8.28-.11,15.08-.27,15.08s-.27-6.55-.27-14.54V135H237.07l-.18,2.25c-.09,1.23-.44,2.35-.83,2.46s-.67-1.05-.67-4.93v-5.16H196.08v9.15c0,7.79-.11,9.16-.81,9.16s-.8-.61-.8-2.16v-2.15h-35v7.81C159.47,156.3,159.26,159.26,158.93,159.26Z"
			/>
			<path
				className="c building-fill"
				d="M282.6,212.44a2.05,2.05,0,0,1,0,1.34c-.16.39-.27.07-.27-.67S282.44,212.08,282.6,212.44Z"
			/>
			<path
				className="c building-fill"
				d="M282.6,210.55c-.16.39-.27.07-.27-.67s.11-1,.27-.67A2.05,2.05,0,0,1,282.6,210.55Z"
			/>
			<path
				className="c building-fill"
				d="M282.28,206.34c0-.63.16-.77.32-.34a1.15,1.15,0,0,1,0,1C282.4,207.21,282.26,206.9,282.28,206.34Z"
			/>
			<path
				className="c building-fill"
				d="M282.28,203.1c0-.62.16-.76.32-.33a1.15,1.15,0,0,1,0,1C282.4,204,282.26,203.67,282.28,203.1Z"
			/>
			<path
				className="c building-fill"
				d="M284.39,200.73c0,.29-.49.54-1.07.54s-1.08-.25-1.08-.54.49-.54,1.08-.54S284.39,200.43,284.39,200.73Z"
			/>
			<ellipse
				className="c building-fill"
				cx="284.66"
				cy="214.19"
				rx="0.81"
				ry="0.54"
			/>
			<ellipse
				className="c building-fill"
				cx="287.89"
				cy="120.76"
				rx="0.81"
				ry="2.42"
			/>
			<path
				className="c building-fill"
				d="M295.16,274.74c0,.95-.31,1.08-.78.34a.62.62,0,0,1,.24-.85C294.91,274.05,295.16,274.27,295.16,274.74Z"
			/>
			<path
				className="c building-fill"
				d="M297.63,271.94c.13.13-.11.56-.56.94s-.83.45-.83.09C296.24,272.32,297.27,271.58,297.63,271.94Z"
			/>
			<path
				className="c building-fill"
				d="M300.32,269.79c.14.13-.11.56-.56.94s-.83.45-.83.09C298.93,270.17,300,269.43,300.32,269.79Z"
			/>
			<path
				className="c building-fill"
				d="M301.35,268a1.19,1.19,0,0,1,.88-.54c.29,0,.38.24.2.54a1.19,1.19,0,0,1-.87.53C301.26,268.57,301.17,268.33,301.35,268Z"
			/>
			<path
				className="c building-fill"
				d="M304.32,265.59c.74-.87,1.41-.67.83.25a1.31,1.31,0,0,1-.92.58C303.87,266.42,303.91,266.11,304.32,265.59Z"
			/>
			<path
				className="c building-fill"
				d="M307,263.44c.74-.88,1.41-.68.83.24a1.27,1.27,0,0,1-.92.59C306.56,264.27,306.6,264,307,263.44Z"
			/>
			<path
				className="c building-fill"
				d="M310.55,260.63c.14.14-.11.56-.56.94s-.83.45-.83.09C309.16,261,310.19,260.27,310.55,260.63Z"
			/>
			<path
				className="c building-fill"
				d="M317.6,244.7c-.41.41-8.82.54-19.34.29l-6.87-.13V230.25l-1.3,1.55c-2.56,3-12.7,7.25-12.7,5.25,0-.42,1-1,2.29-1.32a18.4,18.4,0,0,0,7.4-3.3c3.28-2.38,3.77-3.79,3.77-11,0-5.77-.06-6.21-1-6.21-1.41,0-2.74-.57-2.74-1.15,0-.25,1.22-.47,2.7-.47h2.69v15.08h8.08c6.82,0,8.07.13,8.07.81s-1.28.8-8.34.8h-8.35v14h13C312,244.34,317.6,244.5,317.6,244.7Z"
			/>
			<path
				className="c building-fill"
				d="M311.85,259.13c.74-.88,1.42-.67.83.25a1.21,1.21,0,0,1-.92.58C311.41,260,311.45,259.64,311.85,259.13Z"
			/>
			<path
				className="c building-fill"
				d="M315.09,187.8v-5.92H288.16V156.57c0-16.51-.18-25.31-.54-25.31s-.65,9.52-.54,41.06l.05,11.71H273.62v9.16H272q-1.62,0-1.62.81c0,.6.63.8,2.42.8h2.43v-9.15h11.84v7.22c0,5.25-.18,7.32-.67,7.54s-.54.38,0,.63a1.31,1.31,0,0,1,.67,1.08c0,.54.65.76,2.16.76s2.15-.22,2.15-.81-.54-.8-1.61-.8h-1.62V187.8Zm-26.93-4.3h25.31v2.69H288.16Z"
			/>
			<path
				className="c building-fill"
				d="M315.62,256.68c0,.27-.36.61-.8.79s-.81.09-.81-.16.36-.6.81-.78S315.62,256.44,315.62,256.68Z"
			/>
			<path
				className="c building-fill"
				d="M315.09,229.54c0-.5.51-.81,1.34-.81s1.35.31,1.35.81-.52.8-1.35.8S315.09,230,315.09,229.54Z"
			/>
			<path
				className="c building-fill"
				d="M318.09,254.17c.14.14-.11.56-.56.94s-.83.45-.83.09C316.7,254.55,317.73,253.81,318.09,254.17Z"
			/>
			<path
				className="c building-fill"
				d="M319.68,253a.61.61,0,1,1,.83.21A.62.62,0,0,1,319.68,253Z"
			/>
			<path
				className="c building-fill"
				d="M322.09,255.4c-.41-.51-.45-.83-.09-.83a1.29,1.29,0,0,1,.92.59C323.5,256.08,322.83,256.28,322.09,255.4Z"
			/>
			<path
				className="c building-fill"
				d="M298.48,279.23c.36.34.52.76.36.92-.36.36-1-.29-1-1C297.85,278.81,298.1,278.85,298.48,279.23Z"
			/>
			<path
				className="c building-fill"
				d="M300.75,281.77c.16.45.07.8-.23.8s-.51-.35-.51-.8.09-.81.2-.81S300.57,281.32,300.75,281.77Z"
			/>
			<path
				className="c building-fill"
				d="M302.7,284.19c0,.29-.11.54-.25.54s-.38-.25-.56-.54-.06-.54.25-.54A.56.56,0,0,1,302.7,284.19Z"
			/>
			<path
				className="c building-fill"
				d="M319.1,255.11c-.51,0-.13.54,3.52,5.12a45.91,45.91,0,0,1,3.77,5.11c0,.81-8.14,7.68-8.55,7.21s-6.91-8.62-7.42-9.32a.3.3,0,0,0-.43,0,36.68,36.68,0,0,0,3.7,5.27l3.95,5.05-4.1,3.68a47.57,47.57,0,0,1-4.38,3.7,27.61,27.61,0,0,1-3-4c-1.48-2.22-2.89-4-3.14-4a39,39,0,0,0-4.89,2.45c-3.73,2.09-5,3.19-8,6.93a33.51,33.51,0,0,0-3.59,5,22.8,22.8,0,0,0,3.5,3.95c1.93,1.91,3.45,3.64,3.36,3.84-.25.65-30.4,25.57-30.94,25.57-.13-.13-.25-4.12-.27-8.9S262,303,261.71,303s-.47,4-.47,8.88v8.89H242.93v-6.73c0-4.13.2-6.74.54-6.74s.54-1,.54-2.15-.25-2.15-.54-2.15-.54.85-.54,1.88v1.89H223.54v-4.58c0-2.69-.22-4.58-.53-4.58s-.54,2-.54,4.85v4.84h19.38v13.47H231.62c-8.73,0-10.23.11-10.23.8s1.46.81,10,.81h10v1.35c0,.83.32,1.34.81,1.34s.81-.51.81-1.34v-1.35h9.74c6.21,0,10.12-.22,10.86-.6,3.79-2.05,64.48-54.52,64.48-55.76C328,265.7,319.39,255.11,319.1,255.11ZM307.68,282.6c-1.95,1.77-11.22,10-12.29,10.88s-1.19.85-4.45-2.51a22.78,22.78,0,0,1-3.32-4c0-.74,5.12-7.16,6.85-8.57a3,3,0,0,1,2.26-.86c.47.16.68.09.43-.15s1-1.24,2.65-2.2l3.07-1.75,2.87,4.13C308.47,281.5,308.58,281.79,307.68,282.6Z"
			/>
			<path
				className="c building-fill"
				d="M324.55,258c-.29-.74-.2-.79.47-.2a2.43,2.43,0,0,1,.83.87C325.85,259.29,324.84,258.75,324.55,258Z"
			/>
			<path
				className="c building-fill"
				d="M326.93,260.3c0-.34.25-.3.63.09s.52.76.36.92C327.56,261.66,326.93,261,326.93,260.3Z"
			/>
			<path
				className="c building-fill"
				d="M330.16,187c0,.56-.56.8-1.88.8h-1.89v-5.92h1.89c1.32,0,1.88.25,1.88.81s-.47.81-1.07.81c-.79,0-1.08.35-1.08,1.34s.29,1.35,1.08,1.35C329.69,186.19,330.16,186.55,330.16,187Z"
			/>
			<path
				className="c building-fill"
				d="M330.16,263.48c0,.14-.24.25-.54.25a.55.55,0,0,1-.53-.56c0-.32.24-.43.53-.25S330.16,263.37,330.16,263.48Z"
			/>
			<path
				className="d border-stroke no-fill"
				d="M186.92,399.81l.17-54.81-27.67-.2.74-9.16-15-2.71,0-90.36-7.12.07L137.85,221l3.41-.15V113.45l148.43,0-.05,2.89h42l.2,115-12,0,.05,12.78,55,66-42.95,35.62-26.34-31.66-31.81,27,.1,17.94-29.52-.11.1,40.92Z"
			/>
		</SVGOverlay>
	),
	mauerDerToten: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
                .c{isolation:isolate;}
                .e{strokeWidth:0.36px;}
                .e,.f,.g{strokeMiterlimit:10;}
                .f,.g{strokeWidth:0.96px;}
                `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<polygon
				className="b field-fill"
				points="32.17 358.45 78.14 358.45 78.14 391.92 111.61 391.92 111.61 389.59 147.2 389.59 147.2 359.72 160.33 359.72 160.33 372.01 190.83 372.01 190.83 354.64 203.75 354.64 203.75 362.26 267.94 362.26 267.94 313.76 276.41 313.76 277.68 311.85 285.1 322.02 285.1 365.02 325.77 365.02 325.77 334.51 346.53 334.51 346.53 324.98 380.84 324.98 380.84 356.33 475.95 356.33 475.95 323.92 446.3 323.92 446.3 343.62 425.33 343.62 425.33 312.49 340.38 312.49 340.38 303.8 325.56 303.8 325.56 255.29 346.53 255.29 346.53 198.73 383.6 198.73 383.6 222.88 395.25 222.88 395.25 186.66 346.31 186.66 338.26 177.34 325.56 177.34 325.56 124.38 256.08 124.38 256.08 151.28 242.94 151.28 242.94 126.92 210.75 126.92 210.75 130.1 182.36 130.1 182.36 127.14 170.29 127.14 170.29 129.89 148.26 129.89 148.26 176.92 163.08 176.92 163.08 183.69 166.9 183.69 166.9 194.71 183 194.71 183 183.69 188.08 183.69 188.08 273.93 192.95 273.93 192.95 297.66 208.63 313.12 205.87 315.66 205.87 332.19 190.62 332.19 183.42 327.1 147.41 327.1 147.41 297.23 109.26 297.23 109.26 294.67 78.28 294.67 78.28 328.98 32.17 328.98 32.17 358.45"
			/>
			<rect
				className="c background-fill"
				x="206.08"
				y="144.08"
				width="5.08"
				height="39.4"
			/>
			<rect
				className="c background-fill"
				x="206.08"
				y="175.38"
				width="7.71"
				height="8.1"
			/>
			<rect
				className="d building-fill"
				x="234.26"
				y="327.84"
				width="10.49"
				height="10.49"
			/>
			<rect
				className="d building-fill"
				x="241.67"
				y="297.55"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="281.92"
				y="225.21"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="281.92"
				y="207.26"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="281.92"
				y="190.26"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="270.27"
				y="150.86"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="306.38"
				y="126.04"
				width="3.18"
				height="39.25"
			/>
			<rect
				className="d building-fill"
				x="306.38"
				y="200.93"
				width="3.71"
				height="38.19"
			/>
			<rect
				className="d building-fill"
				x="306.38"
				y="252.08"
				width="3.92"
				height="7.06"
			/>
			<rect
				className="d building-fill"
				x="306.38"
				y="280.36"
				width="4.02"
				height="12.78"
			/>
			<rect
				className="d building-fill"
				x="306.38"
				y="313.83"
				width="3.81"
				height="6"
			/>
			<rect
				className="d building-fill"
				x="306.38"
				y="339.25"
				width="3.81"
				height="11.29"
			/>
			<rect
				className="d building-fill"
				x="224.2"
				y="149.12"
				width="3.18"
				height="4.96"
			/>
			<rect
				className="d building-fill"
				x="329.1"
				y="210.12"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="329.1"
				y="233.31"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="241.35"
				y="313.86"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="252.79"
				y="313.86"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="252.79"
				y="335.68"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="252.79"
				y="347.22"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="241.51"
				y="347.22"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="219.64"
				y="347.22"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="219.64"
				y="335.79"
				width="3.18"
				height="3.18"
			/>
			<rect
				className="d building-fill"
				x="393.13"
				y="326.25"
				width="17.48"
				height="11.76"
			/>
			<rect
				className="d building-fill"
				x="222.82"
				y="225.85"
				width="8.26"
				height="16.84"
			/>
			<rect
				className="d building-fill"
				x="197.72"
				y="243.01"
				width="7.31"
				height="12.07"
			/>
			<rect
				className="d building-fill"
				x="213.92"
				y="252.86"
				width="7.31"
				height="10.49"
			/>
			<rect
				className="d building-fill"
				x="207.89"
				y="213.14"
				width="7.63"
				height="23.2"
			/>
			<rect
				className="d building-fill"
				x="189.46"
				y="183.27"
				width="7.63"
				height="26.05"
			/>
			<polygon
				className="d building-fill"
				points="184.06 161.03 192.63 159.28 193.43 165.32 185.01 166.59 184.06 161.03"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="162.66 172.68 162.66 183.48 169.01 183.48"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="162.87 164.21 162.87 143.87 192.74 143.87"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="202.91 144.08 211.59 144.08 211.59 175.01 214.13 175.01 214.13 183.48 205.87 183.48 187.66 183.48"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="205.66"
				y1="144.29"
				x2="205.66"
				y2="183.48"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="288.7"
				y1="125.23"
				x2="288.7"
				y2="252.11"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="282.77"
				y1="176.92"
				x2="288.7"
				y2="176.92"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="325.77"
				y1="177.55"
				x2="325.77"
				y2="255.5"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="325.55"
				y1="303.8"
				x2="325.55"
				y2="334.94"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="346.31"
				y1="321.38"
				x2="346.31"
				y2="325.41"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="345.89"
				y1="312.27"
				x2="345.89"
				y2="315.24"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="446.08"
				y1="342.78"
				x2="458.58"
				y2="342.78"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="109.07 306.76 143.38 306.76 143.38 379.21 108.01 379.21"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="160.33 327.52 160.33 338.96 152.28 338.96"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="143.38"
				y1="332.82"
				x2="160.33"
				y2="332.82"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="151.86 347.86 160.54 347.86 160.54 359.93"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="143.38"
				y1="353.79"
				x2="160.75"
				y2="353.79"
			/>
			<polyline
				className="e feature-stroke no-fill"
				points="92.33 357.6 92.33 366.08 127.07 366.08 132.58 361.2 132.58 325.19 127.5 319.9 92.12 319.9 92.12 326.46"
			/>
			<rect
				className="e feature-stroke no-fill"
				x="306.28"
				y="200.85"
				width="4.02"
				height="65.67"
			/>
			<rect
				className="e feature-stroke no-fill"
				x="306.28"
				y="273.25"
				width="4.02"
				height="56.75"
			/>
			<rect
				className="e feature-stroke no-fill"
				x="306.28"
				y="339.1"
				width="4.02"
				height="25.67"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="192.79"
				y1="273.99"
				x2="195.81"
				y2="273.99"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="203.28"
				y1="273.99"
				x2="206.3"
				y2="273.99"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="209.47"
				y1="311.32"
				x2="208.36"
				y2="312.43"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="215.83"
				y1="305.12"
				x2="218.45"
				y2="302.5"
			/>
			<polygon
				className="f border-stroke no-fill"
				points="32.17 358.45 78.14 358.45 78.14 391.92 111.61 391.92 111.61 389.59 147.2 389.59 147.2 359.72 160.33 359.72 160.33 372.01 190.83 372.01 190.83 354.64 203.75 354.64 203.75 362.26 267.94 362.26 267.94 313.76 276.41 313.76 277.68 311.85 285.1 322.02 285.1 365.02 325.77 365.02 325.77 334.51 346.53 334.51 346.53 324.98 380.84 324.98 380.84 356.33 475.95 356.33 475.95 323.92 446.3 323.92 446.3 343.62 425.33 343.62 425.33 312.49 340.38 312.49 340.38 303.8 325.56 303.8 325.56 255.29 346.53 255.29 346.53 198.73 383.6 198.73 383.6 222.88 395.25 222.88 395.25 186.66 346.31 186.66 338.26 177.34 325.56 177.34 325.56 124.38 256.08 124.38 256.08 151.28 242.94 151.28 242.94 126.92 210.75 126.92 210.75 130.1 182.36 130.1 182.36 127.14 170.29 127.14 170.29 129.89 148.26 129.89 148.26 176.92 163.08 176.92 163.08 183.69 166.9 183.69 166.9 194.71 183 194.71 183 183.69 188.08 183.69 188.08 273.93 192.95 273.93 192.95 297.66 208.63 313.12 205.87 315.66 205.87 332.19 190.62 332.19 183.42 327.1 147.41 327.1 147.41 297.23 109.26 297.23 109.26 294.67 78.28 294.67 78.28 328.98 32.17 328.98 32.17 358.45"
			/>
			<polygon
				className="g border-stroke background-fill"
				points="228.11 175.65 228.11 183.91 232.99 183.91 232.99 274.78 205.66 274.78 205.66 291.73 217.31 302.95 219.01 301.05 233.62 301.05 233.62 287.91 237.01 287.91 237.01 284.95 253.96 284.95 253.96 300.2 267.51 300.2 267.51 301.47 275.77 301.47 277.89 303.17 285.52 292.57 285.52 260.8 288.49 260.8 288.49 252.12 274.72 252.12 274.72 245.76 265.82 233.47 265.82 176.92 272.39 176.92 272.39 171.62 255.65 171.62 255.65 163.99 243.15 163.99 243.15 175.65 228.11 175.65"
			/>
		</SVGOverlay>
	),
	mauerDerTotenStreets: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
                .d,.e,.f{strokeMiterlimit:10;}
                .d,.e{strokeWidth:0.36px;}
                .f{strokeWidth:0.96px;}
                `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<polygon
				className="b field-fill"
				points="96.3 189.31 96.3 149.18 117.35 149.18 117.35 233.18 124.55 233.18 124.55 185.66 178.79 185.66 192.23 197.18 203.75 186.14 221.03 186.14 221.03 233.18 255.59 233.18 255.59 222.14 239.27 222.14 239.27 125.66 320.86 125.66 320.86 107.9 331.9 106.46 341.02 96.86 364.06 96.86 367.9 98.78 369.34 96.86 382.78 102.14 382.78 95.91 406.78 95.91 406.78 100.7 415.42 100.7 415.42 121.82 423.1 121.82 423.1 139.1 473.98 139.1 473.98 170.3 461.02 170.3 461.02 191.9 473.5 191.9 473.5 228.86 442.78 228.86 442.78 302.29 449.5 302.29 449.5 327.25 476.38 327.25 476.38 409.81 449.5 409.81 449.5 391.09 437.5 391.09 437.5 399.73 390.46 399.73 390.46 394.93 362.14 394.93 362.14 360.85 348.22 360.85 348.22 373.81 320.86 373.81 320.86 416.05 258.95 416.05 258.95 360.37 273.35 360.37 273.35 308.53 319.9 308.53 319.9 301.81 323.26 301.81 323.26 297.97 254.63 297.97 236.87 289.33 218.63 289.33 218.63 345.49 200.39 345.49 186.47 336.37 169.19 341.17 165.35 346.45 144.71 345.97 136.55 336.37 128.39 336.37 128.39 289.33 121.19 289.33 121.19 283.57 117.83 283.57 117.83 335.89 90 335.89 90 331.09 50.64 331.09 50.64 295.1 35.76 295.1 35.76 213.5 50.64 213.5 50.64 189.31 96.3 189.31"
			/>
			<polygon
				className="c building-fill"
				points="181.64 217.04 185.05 223.44 195.08 218.32 191.88 212.13 181.64 217.04"
			/>
			<polygon
				className="c building-fill"
				points="199.77 208.29 200.62 215.76 210.01 219.81 212.57 217.04 211.08 206.16 199.77 208.29"
			/>
			<polygon
				className="c building-fill"
				points="75.18 246.27 92.04 256.08 86.49 265.25 69.64 255.44 75.18 246.27"
			/>
			<polygon
				className="c building-fill"
				points="124.04 254.37 143.45 254.37 143.45 264.83 124.25 264.83 124.04 254.37"
			/>
			<rect
				className="c building-fill"
				x="198.49"
				y="254.59"
				width="19.84"
				height="10.45"
			/>
			<rect
				className="c building-fill"
				x="104.41"
				y="217.89"
				width="11.52"
				height="14.72"
			/>
			<polygon
				className="c building-fill"
				points="116.57 282.75 108.25 282.75 103.77 292.13 110.81 306.64 116.57 306.64 116.57 282.75"
			/>
			<polygon
				className="c building-fill"
				points="161.58 289.57 169.69 304.72 179.29 299.6 180.78 289.57 161.58 289.57"
			/>
			<polygon
				className="c building-fill"
				points="140.68 313.25 150.49 314.96 151.34 328.61 140.89 326.48 140.68 313.25"
			/>
			<circle className="c building-fill" cx="172.14" cy="318.37" r="5.87" />
			<polygon
				className="c building-fill"
				points="191.45 310.91 204.25 308.56 199.56 323.92 191.66 318.59 191.45 310.91"
			/>
			<polygon
				className="c building-fill"
				points="202.33 289.57 208.3 303.65 217.26 303.65 217.26 289.36 202.33 289.57"
			/>
			<polygon
				className="c building-fill"
				points="242.86 250.32 250.54 239.87 255.02 243.28 247.13 253.52 242.86 250.32"
			/>
			<polygon
				className="c building-fill"
				points="134.06 195.92 146.44 194.43 146.65 205.09 138.97 208.08 134.06 195.92"
			/>
			<polygon
				className="c building-fill"
				points="160.73 203.39 171.61 199.55 174.38 210.43 160.73 213.41 158.17 209.57 160.73 203.39"
			/>
			<ellipse
				className="c building-fill"
				cx="173.64"
				cy="204.99"
				rx="5.65"
				ry="6.29"
			/>
			<polygon
				className="c building-fill"
				points="251.82 267.6 256.09 274.21 273.16 264.4 268.89 258 251.82 267.6"
			/>
			<polygon
				className="c building-fill"
				points="289.8 246.91 310.49 251.17 307.29 263.76 286.81 259.28 289.8 246.91"
			/>
			<polygon
				className="c building-fill"
				points="263.77 223.01 275.08 223.01 275.08 232.61 263.98 232.61 263.77 223.01"
			/>
			<polygon
				className="c building-fill"
				points="285.53 223.23 294.06 223.23 305.37 236.03 300.46 240.93 285.53 223.23"
			/>
			<polygon
				className="c building-fill"
				points="333.1 218.11 343.13 213.63 351.24 218.53 350.6 235.17 341.85 246.69 336.73 244.13 330.33 228.35 333.1 218.11"
			/>
			<polygon
				className="c building-fill"
				points="330.54 262.91 337.37 265.47 330.76 283.17 324.14 281.04 330.54 262.91"
			/>
			<polygon
				className="c building-fill"
				points="287.24 271.01 294.06 273.57 289.58 286.8 298.33 296.83 273.8 297.25 275.93 291.92 281.48 289.15 287.24 271.01"
			/>
			<polygon
				className="c building-fill"
				points="356.14 284.67 361.9 280.61 378.33 301.73 369.37 301.73 356.14 284.67"
			/>
			<polygon
				className="c building-fill"
				points="398.17 301.73 398.17 294.27 405.21 294.27 406.7 276.99 410.12 275.28 441.48 272.93 441.48 301.52 398.17 301.73"
			/>
			<polygon
				className="c building-fill"
				points="353.16 251.17 371.08 245.84 373.21 252.24 355.29 257.79 353.16 251.17"
			/>
			<polygon
				className="c building-fill"
				points="375.77 266.11 394.76 267.6 393.9 274.43 374.92 272.72 375.77 266.11"
			/>
			<polygon
				className="c building-fill"
				points="406.92 253.09 403.72 259.71 420.57 267.17 423.98 261.2 406.92 253.09"
			/>
			<polygon
				className="c building-fill"
				points="367.02 217.04 377.9 214.27 377.9 219.81 368.3 222.16 367.02 217.04"
			/>
			<polygon
				className="c building-fill"
				points="410.12 229.41 442.12 229.41 442.12 245.41 418.01 245.41 410.12 229.41"
			/>
			<polygon
				className="c building-fill"
				points="344.62 164.13 361.69 171.17 359.56 177.57 341.85 170.32 344.62 164.13"
			/>
			<polygon
				className="c building-fill"
				points="359.98 146.85 370.86 138.53 376.2 143.65 374.28 154.32 368.3 156.67 359.98 146.85"
			/>
			<rect
				className="c building-fill"
				x="340.36"
				y="195.28"
				width="3.2"
				height="4.27"
			/>
			<rect
				className="c building-fill"
				x="273.8"
				y="384.72"
				width="11.31"
				height="9.17"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="51.5 212.56 95.45 212.56 95.45 188.88"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="54.28"
				y1="224.51"
				x2="54.28"
				y2="212.77"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="44.25"
				y1="232.4"
				x2="46.17"
				y2="232.4"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="53.21"
				y1="232.19"
				x2="54.7"
				y2="232.19"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="50.86 295.12 77.96 295.12 89.9 309.2 89.9 331.6"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="128.94"
				y1="288.93"
				x2="144.73"
				y2="288.93"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="152.2"
				y1="288.93"
				x2="181.21"
				y2="288.93"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="190.38"
				y1="288.93"
				x2="217.48"
				y2="288.93"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="125.74"
				y1="232.19"
				x2="146.01"
				y2="232.19"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="166.06"
				y1="232.19"
				x2="198.17"
				y2="232.19"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="205.74"
				y1="232.19"
				x2="219.61"
				y2="232.19"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="240.09 234.32 240.09 241.79 231.98 242 227.93 268.67 241.8 275.49"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="256.09 222.37 303.24 222.37 306.86 218.75"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="312.41 213.63 314.97 210.64 314.97 188.03"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="321.16 127.01 321.16 181.84 314.97 190.8"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="334.38 182.91 334.38 156.88 321.16 156.88"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="334.81"
				y1="140.03"
				x2="321.16"
				y2="140.03"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="343.34"
				y1="108.67"
				x2="343.34"
				y2="111.01"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="343.34"
				y1="119.97"
				x2="343.34"
				y2="131.49"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="343.34"
				y1="138.96"
				x2="343.34"
				y2="141.09"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="383.24"
				y1="115.71"
				x2="383.24"
				y2="154.11"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="396.25"
				y1="152.19"
				x2="383.24"
				y2="152.19"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="402.44 152.4 423.13 152.4 423.13 140.24"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="404.14"
				y1="121.04"
				x2="414.81"
				y2="121.04"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="410.97"
				y1="167.33"
				x2="410.97"
				y2="152.4"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="383.02"
				y1="165.63"
				x2="383.02"
				y2="211.92"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="397.1 228.56 387.08 228.56 378.33 220.67 378.33 212.13 387.93 212.13"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="403.08"
				y1="228.77"
				x2="442.54"
				y2="228.77"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="383.24"
				y1="168.4"
				x2="386.44"
				y2="168.4"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="388.36"
				y1="168.19"
				x2="391.13"
				y2="168.19"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="399.66"
				y1="168.4"
				x2="402.65"
				y2="168.4"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="404.78"
				y1="168.19"
				x2="407.77"
				y2="168.19"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="409.26"
				y1="168.4"
				x2="412.68"
				y2="168.4"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="414.6 168.4 416.94 168.4 416.94 170.11"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.52"
				y1="171.39"
				x2="416.52"
				y2="174.16"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.52"
				y1="176.51"
				x2="416.52"
				y2="179.49"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.3"
				y1="181.2"
				x2="416.3"
				y2="184.61"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.3"
				y1="186.53"
				x2="416.3"
				y2="189.31"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.52"
				y1="191.23"
				x2="416.52"
				y2="194.64"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.3"
				y1="196.35"
				x2="416.3"
				y2="199.33"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.52"
				y1="201.25"
				x2="416.52"
				y2="204.45"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.73"
				y1="206.16"
				x2="416.73"
				y2="209.36"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.52"
				y1="211.07"
				x2="416.52"
				y2="214.48"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.73"
				y1="216.19"
				x2="416.73"
				y2="219.17"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.73"
				y1="220.88"
				x2="416.73"
				y2="224.08"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="416.73"
				y1="226.21"
				x2="416.73"
				y2="228.35"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="239.45"
				y1="180.35"
				x2="242.44"
				y2="180.35"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="244.14"
				y1="180.56"
				x2="247.98"
				y2="180.56"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="249.69"
				y1="180.56"
				x2="252.89"
				y2="180.56"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="254.17"
				y1="180.56"
				x2="258.01"
				y2="180.56"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="259.5"
				y1="180.56"
				x2="262.28"
				y2="180.77"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="264.84"
				y1="180.77"
				x2="268.04"
				y2="180.77"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="239.45"
				y1="203.39"
				x2="242.44"
				y2="203.39"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="244.14"
				y1="203.6"
				x2="247.98"
				y2="203.6"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="249.69"
				y1="203.6"
				x2="252.89"
				y2="203.6"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="254.17"
				y1="203.6"
				x2="258.01"
				y2="203.6"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="259.5"
				y1="203.6"
				x2="262.28"
				y2="203.81"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="264.84"
				y1="203.81"
				x2="268.04"
				y2="203.81"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="268.04 186.43 268.04 173.09 315.08 173.09 315.08 185.57"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="267.82 193.47 267.82 217.57 271.56 217.57 271.56 222.37"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="320.36"
				y1="308.35"
				x2="320.36"
				y2="317.47"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="323.56 301.63 360.68 301.63 442.6 301.63"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="360.84"
				y1="319.55"
				x2="360.84"
				y2="301.63"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="348.52 360.67 348.52 319.55 364.04 319.55 364.04 338.59"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="361.8 360.03 361.8 338.91 367.24 338.91"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="388.04"
				y1="317.15"
				x2="388.04"
				y2="338.91"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="392.2"
				y1="326.59"
				x2="388.04"
				y2="326.59"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="417.64"
				y1="314.91"
				x2="417.64"
				y2="301.63"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="401.64"
				y1="326.59"
				x2="437.48"
				y2="326.59"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="449.96"
				y1="337.31"
				x2="449.96"
				y2="375.39"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="449.96 380.99 449.96 393.79 475.72 393.79"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="390.6"
				y1="389.63"
				x2="390.6"
				y2="395.23"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="305 405.15 285.48 405.15 285.48 359.39"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="273.48 359.39 321 359.39 321 326.27 335.4 326.27"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="273.48"
				y1="330.43"
				x2="320.84"
				y2="330.43"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="315.4"
				y1="404.99"
				x2="320.52"
				y2="404.99"
			/>
			<rect
				className="e feature-stroke background-fill"
				x="381.96"
				y="338.75"
				width="54.72"
				height="38.72"
			/>
			<polygon
				className="f border-stroke no-fill"
				points="96.3 189.31 96.3 149.18 117.35 149.18 117.35 233.18 124.55 233.18 124.55 185.66 178.79 185.66 192.23 197.18 203.75 186.14 221.03 186.14 221.03 233.18 255.59 233.18 255.59 222.14 239.27 222.14 239.27 125.66 320.86 125.66 320.86 107.9 331.9 106.46 341.02 96.86 364.06 96.86 367.9 98.78 369.34 96.86 382.78 102.14 382.78 95.91 406.78 95.91 406.78 100.7 415.42 100.7 415.42 121.82 423.1 121.82 423.1 139.1 473.98 139.1 473.98 170.3 461.02 170.3 461.02 191.9 473.5 191.9 473.5 228.86 442.78 228.86 442.78 302.29 449.5 302.29 449.5 327.25 476.38 327.25 476.38 409.81 449.5 409.81 449.5 391.09 437.5 391.09 437.5 399.73 390.46 399.73 390.46 394.93 362.14 394.93 362.14 360.85 348.22 360.85 348.22 373.81 320.86 373.81 320.86 416.05 258.95 416.05 258.95 360.37 273.35 360.37 273.35 308.53 319.9 308.53 319.9 301.81 323.26 301.81 323.26 297.97 254.63 297.97 236.87 289.33 218.63 289.33 218.63 345.49 200.39 345.49 186.47 336.37 169.19 341.17 165.35 346.45 144.71 345.97 136.55 336.37 128.39 336.37 128.39 289.33 121.19 289.33 121.19 283.57 117.83 283.57 117.83 335.89 90 335.89 90 331.09 50.64 331.09 50.64 295.1 35.76 295.1 35.76 213.5 50.64 213.5 50.64 189.31 96.3 189.31"
			/>
		</SVGOverlay>
	),
	forsaken: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
                .c,.d,.f{strokeMiterlimit:10;}
                .c,.d{strokeWidth:0.52px;}
                .d{stroke-dasharray:2.62;}
                .f{strokeWidth:0.96px;}
                `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M38.72,109.57H54.41V94.67h69v-22H165V86.82h24.32v11h7.06V81.33h5.49V62.5h42.37V79h25.1v25.89h36.09v7.06s66.53-1.25,88.66,0,59.86,25.31,68.26,56.49c3.06,11.36,0,47.07,0,47.07L455.32,221v38.45h18.83v22H482V407.71H468.66v11.77H332.93V374.76h8.63v-80l17.26-18h24.32V259.43h50.22v-33l-6.28-9.41V181.75s-1.21-31.37-42.37-34.52c-35.2-2.69-141.22,0-141.22,0v45.51H162.68v-9.42l3.93-7.06L157.19,181h-7.06v-5.49H136.79V150.37h-11v12.55H69.32V147.23l-11-7.06H38.72Z"
			/>
			<polygon
				className="b field-fill"
				points="273 215.17 286.08 203.67 329.5 203.67 343.1 216.22 343.1 264.34 333.16 277.42 294.97 277.42 294.97 285.79 301.25 292.59 301.25 300.43 296.02 306.71 290.79 306.71 286.6 310.89 275.1 310.89 275.1 316.65 286.6 316.65 294.97 326.06 294.97 355.88 287.65 355.88 287.65 405.05 262.02 405.05 262.02 414.46 195.07 414.46 195.07 457.35 160.54 457.35 152.18 463.63 139.62 463.63 139.62 459.97 135.44 459.97 135.44 463.63 83.13 463.63 83.13 434.34 69.53 434.34 69.53 397.2 89.93 397.2 94.11 391.45 87.84 381.51 87.84 353.26 117.65 353.26 117.65 356.75 136.48 356.75 136.48 330.77 159.5 330.77 165.25 325.54 187.74 325.54 187.74 312.99 251.03 312.99 251.03 318.74 254.17 318.74 254.17 310.37 231.16 310.37 231.16 261.2 258.88 261.2 258.88 258.06 269.87 258.06 269.87 263.3 273 263.3 273 215.17"
			/>
			<polygon
				className="b field-fill"
				points="55.8 238.71 33.3 238.71 33.3 262.77 50.57 262.77 50.57 278.99 34.87 278.99 34.87 300.43 92.94 300.43 92.94 311.94 131.12 311.94 131.12 212.03 90.32 212.03 90.32 196.87 55.8 196.87 55.8 238.71"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="61.47"
				y1="137.82"
				x2="70.89"
				y2="137.82"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="86.58 144.88 86.58 155.08 117.18 155.08 117.18 101.73 87.36 101.73 87.36 113.5"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="80.3"
				y1="95.45"
				x2="80.3"
				y2="112.71"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="80.51"
				y1="141.94"
				x2="80.51"
				y2="160.25"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="117.13"
				y1="117.88"
				x2="124.45"
				y2="117.88"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="117.65"
				y1="137.24"
				x2="125.5"
				y2="137.24"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="124.97 97.48 124.97 105.33 124.97 146.65"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="132.3"
				y1="106.37"
				x2="124.98"
				y2="106.37"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="141.71"
				y1="72.9"
				x2="141.71"
				y2="91.21"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="165.25 86.5 165.25 113.7 194.54 113.7"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="168.39 141.42 168.39 174.9 203.96 174.9"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="239.53"
				y1="148.22"
				x2="168.39"
				y2="148.22"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="238.48"
				y1="142.99"
				x2="167.87"
				y2="142.99"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="199.77 108.99 269.87 108.99 269.87 105.33"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="201.87"
				y1="112.65"
				x2="265.16"
				y2="112.65"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="265.68 108.47 265.68 116.84 260.97 123.11 260.97 142.99"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="218.08 175.42 209.71 175.42 209.71 182.22 190.36 182.22"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="216.51"
				y1="190.07"
				x2="216.51"
				y2="175.42"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="206.05 82.05 237.7 82.05 237.7 71.85 224.62 71.85"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M372.91,137s57,1.84,63.29,47.08c1.36,9.78,0,39.49,0,39.49"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M375.26,120.5s70.09,2.09,78.2,57.8c1.41,9.7.79,39.23.79,39.23"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="300.73 205.24 300.73 226.68 293.4 233.48 293.4 241.33 300.73 241.33"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="274.05"
				y1="260.16"
				x2="291.57"
				y2="277.68"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="287.13"
				y1="234.53"
				x2="341.53"
				y2="234.53"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="274.57"
				y1="234.53"
				x2="280.85"
				y2="234.53"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="307 249.17 316.42 249.17 316.42 259.63 323.74 259.63 329.5 254.93"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="330.54"
				y1="246.03"
				x2="330.54"
				y2="235.05"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="315.9"
				y1="275.33"
				x2="315.9"
				y2="265.39"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="273.53"
				y1="249.17"
				x2="280.85"
				y2="249.17"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="286.6"
				y1="249.17"
				x2="299.16"
				y2="249.17"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="272.48 270.62 276.14 270.62 285.03 278.46 285.03 285.79 290.79 285.79"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="254.7"
				y1="309.85"
				x2="262.02"
				y2="309.85"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="276.67"
				y1="306.71"
				x2="289.22"
				y2="306.71"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="218.08 314.03 218.08 343.85 214.42 343.85"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M215.47,351.69h3.66v6.8h30.34s.52-4.18,4.18-3.66"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="278.41 354.31 287.3 354.31 287.3 352.22"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="282.42"
				y1="326.59"
				x2="282.42"
				y2="348.03"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="218.6"
				y1="327.11"
				x2="249.99"
				y2="327.11"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="218.6 336.52 238.48 336.52 238.48 334.43"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="224.36 413.24 214.42 413.24 214.42 402.43 214.42 379.42 261.15 379.42 261.15 413.94"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="223.84"
				y1="408.88"
				x2="214.42"
				y2="408.88"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="214.42"
				y1="399.29"
				x2="191.93"
				y2="399.29"
			/>
			<rect
				className="c feature-stroke no-fill"
				x="160.02"
				y="384.12"
				width="32.43"
				height="17.78"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="188.79 326.59 188.79 344.37 186.17 344.37"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="165.77"
				y1="325.54"
				x2="165.77"
				y2="339.14"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="187.13"
				y1="355.97"
				x2="163.6"
				y2="355.97"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="137.35 355.88 163.68 355.88 163.68 361.11 167.87 365.29 167.87 384.12"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="185.13 384.12 178.85 377.32 178.85 367.91 181.47 365.29 181.47 353.26"
			/>
			<path
				className="c feature-stroke no-fill"
				d="M145.9,339.14s4.71,8.37,10.46.52"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="100.39 385.17 100.39 396.15 103.53 396.15 103.53 409.23"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="84.18 433.82 84.18 423.88 90.63 423.88"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="90.45 462.76 90.45 405.57 90.45 398.25"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="134.56 462.76 134.39 433.82 126.02 424.4 108.24 424.4 108.24 413.42 101.44 406.62 90.45 406.62"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="94.11"
				y1="412.89"
				x2="94.11"
				y2="423.35"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="90.45"
				y1="452.12"
				x2="134.39"
				y2="452.12"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="160.02"
				y1="401.91"
				x2="160.02"
				y2="457.88"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="287.13"
				y1="377.85"
				x2="279.8"
				y2="377.85"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="49.52"
				y1="279.51"
				x2="49.52"
				y2="298.86"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="75.15"
				y1="298.86"
				x2="75.15"
				y2="278.99"
			/>
			<polyline
				className="c feature-stroke no-fill"
				points="84.04 277.94 84.04 281.6 119.09 281.6 119.09 278.99 127.98 278.99"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="75.67"
				y1="201.57"
				x2="88.75"
				y2="201.57"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="75.67"
				y1="197.91"
				x2="75.67"
				y2="206.28"
			/>
			<line
				className="c feature-stroke no-fill"
				x1="88.75"
				y1="197.91"
				x2="88.75"
				y2="206.28"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="212.68"
				y1="91.03"
				x2="212.68"
				y2="109.17"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="225.23"
				y1="96.96"
				x2="225.23"
				y2="109.17"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="244.76"
				y1="79.52"
				x2="244.76"
				y2="109.17"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="229.07"
				y1="110.21"
				x2="229.07"
				y2="147.17"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="239.53"
				y1="109.17"
				x2="239.53"
				y2="143.34"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="225.93 147.87 225.93 175.77 214.07 175.77 214.07 169.84"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="213.72"
				y1="147.87"
				x2="213.72"
				y2="159.38"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="201.17"
				y1="148.22"
				x2="201.17"
				y2="174.72"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="187.57 175.07 181.64 170.89 181.64 148.22"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="232.2"
				y1="356.05"
				x2="232.2"
				y2="389.53"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="240.57"
				y1="356.4"
				x2="240.57"
				y2="413.94"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="214.77"
				y1="384.65"
				x2="259.4"
				y2="384.65"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="129.68"
				y1="432.77"
				x2="164.55"
				y2="432.77"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="130.03"
				y1="440.79"
				x2="164.55"
				y2="440.79"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="101.09"
				y1="424.05"
				x2="101.09"
				y2="452.3"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="90.28"
				y1="423.7"
				x2="106.67"
				y2="423.7"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="214.42"
				y1="389.18"
				x2="220"
				y2="384.3"
			/>
			<polygon
				className="e building-fill"
				points="149.54 97.32 151.71 101.65 148.1 103.09 146.66 121.14 143.04 121.86 137.27 109.59 140.16 102.37 149.54 97.32"
			/>
			<rect
				className="e building-fill"
				x="220.92"
				y="339.69"
				width="16.6"
				height="7.22"
			/>
			<rect
				className="e building-fill"
				x="248.15"
				y="273.28"
				width="9.02"
				height="9.03"
			/>
			<rect
				className="e building-fill"
				x="248.15"
				y="287"
				width="9.02"
				height="9.03"
			/>
			<rect
				className="e building-fill"
				x="271.25"
				y="292.05"
				width="9.02"
				height="9.03"
			/>
			<rect
				className="e building-fill"
				x="270.89"
				y="277.98"
				width="9.03"
				height="9.02"
			/>
			<rect
				className="e building-fill"
				x="311.58"
				y="234.93"
				width="20.21"
				height="5.05"
			/>
			<rect
				className="e building-fill"
				x="311.58"
				y="237.21"
				width="14.8"
				height="11.69"
			/>
			<rect
				className="e building-fill"
				x="251.58"
				y="289.53"
				width="9.02"
				height="4.33"
			/>
			<rect
				className="e building-fill"
				x="164.18"
				y="348.36"
				width="20.22"
				height="7.22"
			/>
			<rect
				className="e building-fill"
				x="62.39"
				y="113.16"
				width="13.36"
				height="7.22"
			/>
			<rect
				className="e building-fill"
				x="67.41"
				y="131.8"
				width="14.8"
				height="5.41"
			/>
			<rect
				className="e building-fill"
				x="91.69"
				y="104.37"
				width="5.41"
				height="11.55"
				transform="translate(-16.51 203.64) rotate(-89.53)"
			/>
			<rect
				className="e building-fill"
				x="200.21"
				y="88.62"
				width="5.41"
				height="8.8"
			/>
			<rect
				className="e building-fill"
				x="235.43"
				y="82.09"
				width="8.12"
				height="13.13"
			/>
			<rect
				className="e building-fill"
				x="108.39"
				y="115.58"
				width="8.3"
				height="5.41"
			/>
			<rect
				className="e building-fill"
				x="163.71"
				y="141.2"
				width="4.69"
				height="14.89"
			/>
			<rect
				className="e building-fill"
				x="158.44"
				y="109.45"
				width="5.42"
				height="5.41"
			/>
			<rect
				className="e building-fill"
				x="194.43"
				y="105.84"
				width="5.42"
				height="5.41"
			/>
			<rect
				className="e building-fill"
				x="158.77"
				y="114.5"
				width="9.81"
				height="5.41"
			/>
			<rect
				className="e building-fill"
				x="194.22"
				y="109.81"
				width="9.81"
				height="5.41"
			/>
			<rect
				className="e building-fill"
				x="106.77"
				y="136.65"
				width="10.47"
				height="8.12"
			/>
			<rect
				className="e building-fill"
				x="87.6"
				y="141.34"
				width="7.22"
				height="4.51"
			/>
			<rect
				className="e building-fill"
				x="179.49"
				y="423.02"
				width="12.27"
				height="15.34"
			/>
			<rect
				className="e building-fill"
				x="118.3"
				y="242.57"
				width="10.35"
				height="10.05"
			/>
			<rect
				className="e building-fill"
				x="80.1"
				y="228.72"
				width="8.96"
				height="5.62"
				transform="translate(-4.82 1.82) rotate(-1.2)"
			/>
			<rect
				className="e building-fill"
				x="54.01"
				y="256.93"
				width="14.68"
				height="13.42"
			/>
			<rect
				className="e building-fill"
				x="109.72"
				y="213.77"
				width="10.35"
				height="9.08"
			/>
			<rect
				className="e building-fill"
				x="60.35"
				y="292.22"
				width="7.82"
				height="5.11"
			/>
			<rect
				className="e building-fill"
				x="112.97"
				y="295.63"
				width="7.82"
				height="5.11"
			/>
			<rect
				className="e building-fill"
				x="103.76"
				y="268.77"
				width="6.02"
				height="11.19"
			/>
			<rect
				className="e building-fill"
				x="69.65"
				y="280.83"
				width="3.49"
				height="6.01"
			/>
			<rect
				className="e building-fill"
				x="89.71"
				y="281.77"
				width="4.36"
				height="3.85"
			/>
			<rect
				className="e building-fill"
				x="110.63"
				y="282.03"
				width="4.36"
				height="3.85"
			/>
			<rect
				className="e building-fill"
				x="115.38"
				y="261.06"
				width="4.36"
				height="3.85"
			/>
			<rect
				className="e building-fill"
				x="64.85"
				y="233.37"
				width="4.36"
				height="3.85"
				transform="translate(-129.48 89.56) rotate(-37.54)"
			/>
			<rect
				className="e building-fill"
				x="69.32"
				y="213.25"
				width="4.36"
				height="3.85"
				transform="translate(-18.51 7.06) rotate(-5.01)"
			/>
			<rect
				className="e building-fill"
				x="111.16"
				y="217.51"
				width="5.17"
				height="9.08"
			/>
			<rect
				className="e building-fill"
				x="109.51"
				y="245.07"
				width="12.27"
				height="7.55"
			/>
			<rect
				className="e building-fill"
				x="60.83"
				y="252.77"
				width="10.91"
				height="7.55"
			/>
			<rect
				className="e building-fill"
				x="67.09"
				y="246.51"
				width="18.13"
				height="7.55"
			/>
			<rect
				className="e building-fill"
				x="76.87"
				y="244.59"
				width="7.38"
				height="7.55"
			/>
			<rect
				className="e building-fill"
				x="168.15"
				y="409.15"
				width="7.1"
				height="8.12"
			/>
			<rect
				className="e building-fill"
				x="147.57"
				y="350.43"
				width="7.54"
				height="7.16"
			/>
			<rect
				className="e building-fill"
				x="172.55"
				y="326.41"
				width="15.96"
				height="4.03"
			/>
			<rect
				className="e building-fill"
				x="178.68"
				y="329.84"
				width="9.83"
				height="4.03"
			/>
			<rect
				className="e building-fill"
				x="148.52"
				y="354.23"
				width="5.97"
				height="5.67"
			/>
			<rect
				className="e building-fill"
				x="150.81"
				y="400"
				width="4.88"
				height="11.01"
			/>
			<rect
				className="e building-fill"
				x="109.42"
				y="374.98"
				width="4.88"
				height="11.01"
			/>
			<rect
				className="e building-fill"
				x="109.9"
				y="404.94"
				width="4.88"
				height="5.59"
			/>
			<rect
				className="e building-fill"
				x="385.02"
				y="288.09"
				width="12.27"
				height="4.51"
			/>
			<rect
				className="e building-fill"
				x="350.53"
				y="371.2"
				width="3.97"
				height="11.55"
			/>
			<rect
				className="e building-fill"
				x="466.59"
				y="369.68"
				width="3.97"
				height="11.55"
			/>
			<rect
				className="e building-fill"
				x="447.96"
				y="271.38"
				width="3.97"
				height="11.55"
			/>
			<rect
				className="e building-fill"
				x="464.6"
				y="298.13"
				width="3.97"
				height="11.55"
			/>
			<rect
				className="e building-fill"
				x="243.94"
				y="332.23"
				width="4.96"
				height="15.4"
			/>
			<rect
				className="e building-fill"
				x="270.9"
				y="328.86"
				width="4.96"
				height="11.55"
			/>
			<rect
				className="e building-fill"
				x="271.38"
				y="361.59"
				width="4.96"
				height="17.8"
			/>
			<rect
				className="e building-fill"
				x="254.95"
				y="322.16"
				width="17.81"
				height="6.07"
				transform="translate(-147.02 244.24) rotate(-39.8)"
			/>
			<polygon
				className="e building-fill"
				points="198.41 333.62 193.58 329.94 202.04 318.83 206.87 322.51 198.41 333.62"
			/>
			<polygon
				className="e building-fill"
				points="157.88 127.45 152.41 123.29 160.87 112.19 166.33 116.35 157.88 127.45"
			/>
			<rect
				className="e building-fill"
				x="191.45"
				y="129.04"
				width="13.96"
				height="6.87"
				transform="matrix(0.76, -0.66, 0.66, 0.76, -38.28, 162.37)"
			/>
			<polygon
				className="e building-fill"
				points="192.24 121.31 186.78 117.16 195.23 106.05 200.7 110.21 192.24 121.31"
			/>
			<polygon
				className="e building-fill"
				points="193.39 380.14 188.56 376.46 197.01 365.35 201.85 369.03 193.39 380.14"
			/>
			<polygon
				className="e building-fill"
				points="144.67 396.16 138.91 394.23 143.72 379.98 149.47 381.92 144.67 396.16"
			/>
			<polygon
				className="e building-fill"
				points="139.01 375.95 135.85 372.85 143.54 365.03 146.7 368.14 139.01 375.95"
			/>
			<polygon
				className="e building-fill"
				points="240.49 379.79 236.99 377.08 243.7 368.42 247.2 371.13 240.49 379.79"
			/>
			<polygon
				className="e building-fill"
				points="462.83 335.52 459.92 332.19 468.17 324.98 471.09 328.32 462.83 335.52"
			/>
			<polygon
				className="e building-fill"
				points="125.78 409.4 122.62 406.3 130.31 398.49 133.46 401.59 125.78 409.4"
			/>
			<polygon
				className="e building-fill"
				points="269.1 357.72 265.41 360.16 259.37 351.02 263.06 348.58 269.1 357.72"
			/>
			<polygon
				className="e building-fill"
				points="103.51 130.28 97.95 135.43 88.54 125.26 94.1 120.11 103.51 130.28"
			/>
			<polygon
				className="e building-fill"
				points="152.54 140.81 147.69 143.92 140.22 132.25 145.07 129.14 152.54 140.81"
			/>
			<polygon
				className="e building-fill"
				points="167.74 141.41 165.17 145.57 153.39 138.27 155.96 134.12 167.74 141.41"
			/>
			<polygon
				className="e building-fill"
				points="205.81 118.17 201.69 123.19 190.98 114.39 195.1 109.37 205.81 118.17"
			/>
			<polygon
				className="e building-fill"
				points="232.85 127.84 227.25 131.12 220.25 119.16 225.86 115.87 232.85 127.84"
			/>
			<polygon
				className="e building-fill"
				points="226.91 368.05 222.07 371.26 214.55 359.88 219.4 356.67 226.91 368.05"
			/>
			<polygon
				className="e building-fill"
				points="133.32 379.31 131.44 384.81 118.54 380.39 120.43 374.89 133.32 379.31"
			/>
			<polygon
				className="e building-fill"
				points="107 255.17 102.88 263.2 88.92 256.04 93.03 248.01 107 255.17"
			/>
			<polygon
				className="e building-fill"
				points="146.48 446.46 143.32 443.36 151 435.55 154.16 438.65 146.48 446.46"
			/>
			<polygon
				className="e building-fill"
				points="80.1 234.03 77.83 229.49 91.6 222.64 93.86 227.18 80.1 234.03"
			/>
			<polygon
				className="e building-fill"
				points="317.53 256.77 317.53 245.58 325.83 245.58 325.83 248.89 317.53 256.77"
			/>
			<circle className="e building-fill" cx="271.45" cy="388.06" r="4.33" />
			<rect
				className="e building-fill"
				x="54.01"
				y="256.93"
				width="8.42"
				height="20.64"
			/>
			<rect
				className="e building-fill"
				x="56.05"
				y="265.23"
				width="10.66"
				height="9.77"
				transform="translate(-155.53 97.84) rotate(-38.74)"
			/>
			<path
				className="f no-fill border-stroke"
				d="M38.72,109.57H54.41V94.67h69v-22H165V86.82h24.32v11h7.06V81.33h5.49V62.5h42.37V79h25.1v25.89h36.09v7.06s66.53-1.25,88.66,0,59.86,25.31,68.26,56.49c3.06,11.36,0,47.07,0,47.07L455.32,221v38.45h18.83v22H482V407.71H468.66v11.77H332.93V374.76h8.63v-80l17.26-18h24.32V259.43h50.22v-33l-6.28-9.41V181.75s-1.21-31.37-42.37-34.52c-35.2-2.69-141.22,0-141.22,0v45.51H162.68v-9.42l3.93-7.06L157.19,181h-7.06v-5.49H136.79V150.37h-11v12.55H69.32V147.23l-11-7.06H38.72Z"
			/>
			<polygon
				className="f no-fill border-stroke"
				points="273 215.17 286.08 203.67 329.5 203.67 343.1 216.22 343.1 264.34 333.16 277.42 294.97 277.42 294.97 285.79 301.25 292.59 301.25 300.43 296.02 306.71 290.79 306.71 286.6 310.89 275.1 310.89 275.1 316.65 286.6 316.65 294.97 326.06 294.97 355.88 287.65 355.88 287.65 405.05 262.02 405.05 262.02 414.46 195.07 414.46 195.07 457.35 160.54 457.35 152.18 463.63 139.62 463.63 139.62 459.97 135.44 459.97 135.44 463.63 83.13 463.63 83.13 434.34 69.53 434.34 69.53 397.2 89.93 397.2 94.11 391.45 87.84 381.51 87.84 353.26 117.65 353.26 117.65 356.05 136.48 356.05 136.48 330.77 159.5 330.77 165.25 325.54 187.74 325.54 187.74 312.99 251.03 312.99 251.03 318.74 254.17 318.74 254.17 310.37 231.16 310.37 231.16 261.2 258.88 261.2 258.88 258.06 269.87 258.06 269.87 263.3 273 263.3 273 215.17"
			/>
			<polygon
				className="f no-fill border-stroke"
				points="55.8 238.71 33.3 238.71 33.3 262.77 50.57 262.77 50.57 278.99 34.87 278.99 34.87 300.43 92.94 300.43 92.94 311.94 131.12 311.94 131.12 212.03 90.32 212.03 90.32 196.87 55.8 196.87 55.8 238.71"
			/>
		</SVGOverlay>
	),
	forsakenUnderground: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
                .c,.d,.e{strokeMiterlimit:10;}
                .c{strokeWidth:0.96px;}
                .d,.e{sstrokeWidth:0.39px;}
                .e{stroke-dasharray:1.94;}
                `}
				</style>
			</defs>
			<rect className="a background-fill" width="512" height="512" />
			<path
				className="b field-fill"
				d="M475.09,310.64V287.35h-7.51V186.18H425.67V196H347V178.68h7.25V151.77H340.55l-20.7-19.15v-9.83H292.42c-22.51-2.59-23-22.26-23-22.26h-81.5c.78,14.49-16.81,21.74-16.81,21.74H137.44v9.83L117,151.51H104.32v27.17h6.21v15.78h-4.14v6.73H64.74L64,198.86H45.85v-2.59h-14l.26,36.48H45.33l2.59-2.59H63.19L65,228.35H91.39v1.81h15.26l.78,3.37H125.8l2.33-2.85h17.33V240h16.3v9.83h-2.33v39.33c-.51,28.2,30.28,38,30.28,38H216.1v21.21H375.22V333.15h39.07V325.9h7.5v51.24h5.43v5.43h-4.4V463h51V382.83h-4.65v-6.21h4.91V325.9H480V310.64ZM334,194.52H306.26v-4.46H250l-.19-11.84h21.53V156.49H301l14.56,14.16v7.57H334Z"
			/>
			<path
				className="a background-fill"
				d="M175.73,240.26v7.24h2.59v40.63s0,20.18,19.41,20.44h18.11V287.09H375.22v15H414.8v8.28h5.95V286.57H428V244.92h-2.85V234.05H306.91v5.69Z"
			/>
			<polygon
				className="a background-fill"
				points="123.86 178.42 141.52 178.42 141.52 171.04 155.49 157.26 185.56 157.26 185.56 177.84 207.3 177.84 207.3 189.48 144.62 189.48 144.62 196.27 123.66 196.27 123.86 178.42"
			/>
			<polygon
				className="c no-fill border-stroke"
				points="249.79 178.22 271.33 178.22 271.33 156.49 301.02 156.49 315.58 170.66 315.58 178.22 334.01 178.22 334.01 194.52 306.26 194.52 306.26 190.06 249.99 190.06 249.79 178.22"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="149.47"
				y1="208.3"
				x2="170.43"
				y2="208.3"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="149.86"
				y1="221.11"
				x2="170.43"
				y2="221.11"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="158.4"
				y1="189.67"
				x2="158.4"
				y2="208.3"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="158.01"
				y1="221.11"
				x2="158.01"
				y2="239.35"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="161.7"
				y1="240.91"
				x2="175.86"
				y2="240.91"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="207.3"
				y1="181.13"
				x2="249.99"
				y2="181.13"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="268.62"
				y1="202.29"
				x2="268.62"
				y2="225.77"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="268.81"
				y1="190.06"
				x2="268.81"
				y2="192"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="268.62"
				y1="239.93"
				x2="268.62"
				y2="237.8"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="286.28 239.74 286.28 221.11 308.2 221.11"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="308.2 207.91 286.28 207.91 286.28 189.87"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="424.25"
				y1="196.08"
				x2="424.25"
				y2="233.92"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="427.93"
				y1="285.93"
				x2="441.32"
				y2="285.93"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="455.29"
				y1="285.93"
				x2="467.32"
				y2="285.93"
			/>
			<polyline
				className="d feature-stroke no-fill"
				points="421.72 326.1 424.25 326.1 424.25 309.6 420.75 309.6"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="375.93"
				y1="302.03"
				x2="375.93"
				y2="311.35"
			/>
			<line
				className="d feature-stroke no-fill"
				x1="376.32"
				y1="324.16"
				x2="376.32"
				y2="332.89"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="215.06"
				y1="327.46"
				x2="215.06"
				y2="325.32"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="215.25"
				y1="311.54"
				x2="215.25"
				y2="308.63"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="256.59"
				y1="190.06"
				x2="256.59"
				y2="206.56"
			/>
			<line
				className="e feature-stroke no-fill"
				x1="256.98"
				y1="223.05"
				x2="256.98"
				y2="239.74"
			/>
			<rect
				className="e feature-stroke no-fill"
				x="197.01"
				y="207.53"
				width="2.91"
				height="14.17"
			/>
			<circle className="f building-fill" cx="228.64" cy="139.99" r="24.84" />
			<circle className="f building-fill" cx="176.25" cy="139.99" r="4.27" />
			<circle className="f building-fill" cx="137.44" cy="152.02" r="4.27" />
			<circle className="f building-fill" cx="318.68" cy="152.02" r="4.27" />
			<circle className="f building-fill" cx="280.65" cy="140.38" r="4.27" />
			<rect
				className="f building-fill"
				x="219.72"
				y="205.59"
				width="14.75"
				height="12.42"
			/>
			<rect
				className="f building-fill"
				x="239.51"
				y="299.12"
				width="18.24"
				height="11.26"
			/>
			<rect
				className="f building-fill"
				x="239.51"
				y="324.35"
				width="17.72"
				height="11.26"
			/>
			<rect
				className="f building-fill"
				x="269.27"
				y="309.09"
				width="12.55"
				height="17.21"
			/>
			<rect
				className="f building-fill"
				x="301.09"
				y="306.76"
				width="5.56"
				height="21.61"
			/>
			<rect
				className="f building-fill"
				x="322.56"
				y="310.9"
				width="34.28"
				height="12.81"
			/>
			<rect
				className="f building-fill"
				x="301.35"
				y="287.61"
				width="5.3"
				height="2.46"
			/>
			<rect
				className="f building-fill"
				x="301.35"
				y="345.12"
				width="5.3"
				height="2.46"
			/>
			<rect
				className="f building-fill"
				x="371.46"
				y="205.59"
				width="22.12"
				height="16.69"
			/>
			<polygon
				className="f building-fill"
				points="438.61 328.23 457.75 328.23 457.75 336.51 453.1 340.65 444.04 340.65 439.12 337.03 438.61 328.23"
			/>
			<polygon
				className="f building-fill"
				points="448.44 397.84 438.09 392.4 438.09 377.65 443 372.22 452.84 372.22 458.01 377.65 458.01 392.14 448.44 397.84"
			/>
			<path
				className="c no-fill border-stroke"
				d="M31.88,196.27h14v2.59H64l.78,2.33h41.65v-6.73h4.14V178.68h-6.21V151.51H117l20.44-19.41v-9.83h33.64s17.59-7.25,16.81-21.74h81.5s.52,19.67,23,22.26h27.43v9.83l20.7,19.15h13.71v26.91H347V196h78.66v-9.83h41.91V287.35h7.51v23.29H480V325.9h-5.95v50.72h-4.91v6.21h4.65V463h-51V382.57h4.4v-5.43h-5.43V325.9h-7.5v7.25H375.22v15.26H216.1V327.2H189.71s-30.79-9.84-30.28-38V249.83h2.33V240h-16.3v-9.32H128.13l-2.33,2.85H107.43l-.78-3.37H91.39v-1.81H65l-1.81,1.81H47.92l-2.59,2.59H32.14Z"
			/>
			<path
				className="c no-fill border-stroke"
				d="M175.73,240.26v7.24h2.59v40.63s0,20.18,19.41,20.44h18.11V287.09H375.22v15H414.8v8.28h5.95V286.57H428V244.92h-2.85V234.05H306.91v5.69Z"
			/>
			<polygon
				className="c no-fill border-stroke"
				points="123.86 178.42 141.52 178.42 141.52 171.04 155.49 157.26 185.56 157.26 185.56 177.84 207.3 177.84 207.3 189.48 144.62 189.48 144.62 196.27 123.66 196.27 123.86 178.42"
			/>
		</SVGOverlay>
	),
	//#TODO: set up styling to use global colors instead of local colors.
	libertyFalls: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{`
      .cls-1, .cls-2, .cls-3 {
        strokeWidth: 0px;
      }

      .cls-4 {
        fill: url(#New_Pattern_Swatch_2);
      }

      .cls-4, .cls-5, .cls-6, .cls-7, .cls-8 {
        strokeMiterlimit: 10;
      }

      .cls-4, {
        stroke: #6a6a6b;
      }
      .cls-5 {
        strokeWidth: 1px;
      }

      .cls-5, .cls-3, .cls-6, .cls-7 {
        fill: none;
      }
      .cls-9 {
        clip-path: url(#clippath);
      }

      .cls-6 {
        strokeWidth: .1px;
      }

      .cls-10 {
        opacity: .6;
      }`}
				</style>
				<clipPath id="clippath">
					<rect className="cls-3" x="0" y="0" width="7.7" height="7.7" />
				</clipPath>
				<pattern
					id="New_Pattern_Swatch_2"
					data-name="New Pattern Swatch 2"
					x="0"
					y="0"
					width="7.7"
					height="7.7"
					patternTransform="translate(369.8 7905.9) rotate(-29.2) scale(119.6 2.1) skewX(-1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 7.7 7.7"
				>
					<g>
						<rect className="cls-3 background-fill" width="7.7" height="7.7" />
						<g className="cls-10">
							<g className="cls-9">
								<line
									className="cls-6 border-stroke"
									x1="7.4"
									y1="8"
									x2="8.1"
									y2="7.3"
								/>
								<line
									className="cls-6 border-stroke"
									x1="6.7"
									y1="8"
									x2="8.1"
									y2="6.6"
								/>
								<line
									className="cls-6 border-stroke"
									x1="6"
									y1="8"
									x2="8.1"
									y2="5.9"
								/>
								<line
									className="cls-6 border-stroke"
									x1="5.3"
									y1="8"
									x2="8.1"
									y2="5.2"
								/>
								<line
									className="cls-6 border-stroke"
									x1="4.6"
									y1="8"
									x2="8.1"
									y2="4.5"
								/>
								<line
									className="cls-6 border-stroke"
									x1="3.9"
									y1="8"
									x2="8.1"
									y2="3.8"
								/>
								<line
									className="cls-6 border-stroke"
									x1="3.2"
									y1="8"
									x2="8.1"
									y2="3.1"
								/>
								<line
									className="cls-6 border-stroke"
									x1="2.5"
									y1="8"
									x2="8.1"
									y2="2.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="1.8"
									y1="8"
									x2="8.1"
									y2="1.7"
								/>
								<line
									className="cls-6 border-stroke"
									x1="1.1"
									y1="8"
									x2="8.1"
									y2="1"
								/>
								<line
									className="cls-6 border-stroke"
									x1=".4"
									y1="8"
									x2="8.1"
									y2=".3"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="8"
									x2="8.1"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="7.3"
									x2="7.4"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="6.6"
									x2="6.7"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="5.9"
									x2="6"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="5.2"
									x2="5.3"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="4.5"
									x2="4.6"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="3.8"
									x2="3.9"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="3.1"
									x2="3.2"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="2.4"
									x2="2.5"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="1.7"
									x2="1.8"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1="1"
									x2="1.1"
									y2="-.4"
								/>
								<line
									className="cls-6 border-stroke"
									x1="-.3"
									y1=".3"
									x2=".4"
									y2="-.4"
								/>
							</g>
						</g>
					</g>
				</pattern>
			</defs>
			<g id="Layer_1" data-name="Background layer">
				<rect
					className="cls-2 background-fill"
					x="0"
					y="0"
					width="512"
					height="512"
				/>
				<polygon
					className="cls-1 field-fill"
					points="82.1 249.3 74.6 277.6 77.3 278.3 75.7 289 77.5 290.9 69.5 321.8 154.2 344 183.6 346.2 240.7 381 234.2 392.2 276.2 417.1 311.2 361.1 337.6 358.8 341.4 372.4 379.8 361.5 378.2 355.6 431.7 343.6 432.2 332.5 452.9 326.6 445.3 299.6 433.5 303 435.3 279.5 405.2 265.6 382.3 272.1 375.7 248.8 393.6 243.8 383.4 207.6 388.7 206.1 386.4 197.9 394.1 195.7 389.5 179.4 357.9 188.4 350.5 162.4 321.9 170.5 325.7 183.8 307.2 189 308.6 194.2 295 198 296 201.3 278.1 206.3 267.1 204.8 263.1 190.7 230.8 199.8 233.1 208.2 203.5 216.6 201.1 208.2 159.9 219.9 170.7 259.7 94.7 239.8 82.1 249.3"
				/>
			</g>
			<g id="Layer_2" data-name="Building layer">
				<polyline
					className="cls-7 feature-stroke "
					points="154.2 344 157.8 330.3 153.9 330.3"
				/>
				<polyline
					className="cls-7 feature-stroke "
					points="156.1 321.9 160 321.9 163.1 310.1 152.7 307.4 151.1 313.8"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="142.9 304.9 140.3 314.8 133.4 313 129.9 326.4 136.8 328.2 134 338.7 69 321.7 77.5 290.9 80.5 288.5 142.9 304.9"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="84.3"
					y1="280.2"
					x2="77.3"
					y2="278.3"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="90.1"
					y1="281.7"
					x2="145.2"
					y2="296.1"
				/>
				<polyline
					className="cls-7 feature-stroke "
					points="155 298.7 165.5 301.5 170.3 282.5"
				/>
				<polyline
					className="cls-7 feature-stroke "
					points="172.2 275.8 176.1 261.1 170.7 259.7"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="145.1"
					y1="253"
					x2="138.8"
					y2="277.2"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="118.5"
					y1="246.1"
					x2="114.7"
					y2="260.8"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="113.1"
					y1="267"
					x2="108"
					y2="286.4"
				/>
				<rect
					className="cls-7 feature-stroke "
					x="99.7"
					y="267.6"
					width="2.8"
					height="2.4"
					transform="translate(-184.5 298.5) rotate(-75.3)"
				/>
				<rect
					className="cls-7 feature-stroke "
					x="117.7"
					y="280.8"
					width="2.8"
					height="2.4"
					transform="translate(-183.8 325.8) rotate(-75.3)"
				/>
				<rect
					className="cls-7 feature-stroke "
					x="88.8"
					y="249.3"
					width="2.8"
					height="2.4"
					transform="translate(-175 274.3) rotate(-75.3)"
				/>
				<rect
					className="cls-7 feature-stroke "
					x="106.2"
					y="250.5"
					width="6.2"
					height="5.4"
					transform="translate(-163.4 294.7) rotate(-75.3)"
				/>
				<rect
					className="cls-7 feature-stroke "
					x="148.5"
					y="262.4"
					width="6.2"
					height="3.8"
					transform="translate(-142.5 343.9) rotate(-75.3)"
				/>
				<rect
					className="cls-7 feature-stroke "
					x="158.8"
					y="282.9"
					width="6.1"
					height="6.9"
					transform="translate(-156.2 370.3) rotate(-75.3)"
				/>
				<rect
					className="cls-8 feature-stroke background-fill"
					x="359.6"
					y="183.6"
					width="32.8"
					height="16.9"
					transform="translate(-38.1 109.5) rotate(-15.8)"
				/>
				<rect
					className="cls-8 feature-stroke background-fill"
					x="310.7"
					y="184.7"
					width="27.4"
					height="30.1"
					transform="translate(-42.1 95.8) rotate(-15.8)"
				/>
				<polyline
					className="cls-7 feature-stroke "
					points="280.2 211 274.1 212.8 277.7 225.5 301.9 218.8 298.3 205.9 293 207.4"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="343.5 225.8 349.6 247.4 351.9 246.7 357.1 265 353.3 271.4 337.6 275.9 331.1 252.6 336.1 251.2 330 229.7 343.5 225.8"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="325.6 254.2 333.1 280.6 288.9 293.1 270.4 227.7 301.9 218.8 312.9 257.8 325.6 254.2"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="236.7 215.5 243.2 238.4 212.6 246.9 210.1 238 224.6 233.9 220.7 220 236.7 215.5"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="198.4 230 201.4 240.5 195.2 242.2 197.7 251.1 181 256 175.5 236.5 198.4 230"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="206.2"
					y1="224.1"
					x2="220.7"
					y2="220"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="197.7"
					y1="251.1"
					x2="212.6"
					y2="246.9"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="215.4 265.2 204.3 268.3 191.6 284.4 211.2 295.4 189.6 328.5 200.3 334.5 202.4 331.8 196.8 328.7 211.6 309.8 227.6 318.7 228.1 310.3 238.3 307.5 240.5 315.1 271.1 306.4 263.8 280.4 236.9 288.1 235 290.5 223.4 293.6 215.4 265.2"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="263.8 280.5 239.7 287.3 232.1 260.4 249.7 255.4 250.1 255.3 255.5 274.5 261.6 272.8 263.8 280.5"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="215.4"
					y1="265.2"
					x2="232.1"
					y2="260.4"
				/>
				<polygon
					className="cls-5 feature-stroke "
					points="213 364.1 231.2 333.9 218.8 325.7 214.8 326.9 198 355 213 364.1"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="238.1"
					y1="324.6"
					x2="227.6"
					y2="318.7"
				/>
				<line
					className="cls-7 feature-stroke "
					x1="186.5"
					y1="326.8"
					x2="189.6"
					y2="328.5"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="306.9 368 302.5 352.5 268.2 333.8 240.7 381 234.2 392.2 276.2 417.1 306.9 368"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="276.3 338.2 302.6 321.1 328.7 313.4 336.2 340 312.1 346.9 302.5 352.5 276.3 338.2"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="342.8 306.9 328 311.1 336.2 340 351 335.9 342.8 306.9"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="354.9 349.8 340.1 353.9 336.2 340 351 335.9 354.9 349.8"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="383 348.5 384.7 352.8 394.1 347 391.4 343.9 383 348.5"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="405.1 343.7 405.2 349 394.7 349 394.7 343.7 405.1 343.7"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="430.4 331.8 418 335.3 410.3 308 423.4 304.3 430.4 331.8"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="395.1 311 397.4 325.4 414.1 321.3 410.3 308 395.1 311"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="355 208.4 359.3 208.8 355.9 230.8 351.6 230.3 355 208.4"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="255.1 211 259.3 210.2 262 232.2 257.7 233 255.1 211"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="232 342.6 235.9 340.6 245 360.8 241.1 362.9 232 342.6"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="167.7 217.7 169.4 223.4 161.4 225.7 159.9 219.9 167.7 217.7"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="219.7 360.5 218.2 364.9 229.2 366.4 229.1 362.3 219.7 360.5"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="266.8 255.2 262.8 257.4 271.6 268.1 274.4 265.1 266.8 255.2"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="325.6 300.6 321.6 302.8 328.5 311.4 331.3 308.3 325.6 300.6"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="239.2 373.2 234.9 376.3 228.9 367.6 233.3 364.6 239.2 373.2"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="267.3 287.3 266.6 290.5 273.6 295.6 274.9 294.4 288.2 295.1 287.9 289.8 274.5 289.7 267.3 287.3"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="427.3 275.8 424 277.9 429.1 287 432.8 284.3 427.3 275.8"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="432.8 287.7 428.8 287.7 429.2 298.1 433.3 298 432.8 287.7"
				/>
				<polygon
					className="cls-7 feature-stroke "
					points="364.4 307.9 362.1 307.2 360.7 310.1 368.4 313.9 370.1 311 368.6 310.3 378.1 293.8 373.2 291 364.4 307.9"
				/>
				<polygon
					className="cls-4 feature-stroke "
					points="379.8 361.5 341.4 372.4 337.6 358.8 340.1 353.9 375 344.4 379.8 361.5"
				/>
				<polygon
					className="cls-8 feature-stroke background-fill"
					points="433.5 303 423.4 304.3 430.4 331.8 432.2 332.5 452.9 326.6 445.3 299.6 433.5 303"
				/>
				<polygon
					className="cls-5 border-stroke"
					points="82.1 249.3 74.6 277.6 77.3 278.3 75.7 289 77.5 290.9 69.5 321.8 154.2 344 183.6 346.2 240.7 381 234.2 392.2 276.2 417.1 311.2 361.1 337.6 358.8 341.4 372.4 379.8 361.5 378.2 355.6 431.7 343.6 432.2 332.5 452.9 326.6 445.3 299.6 433.5 303 435.3 279.5 405.2 265.6 382.3 272.1 375.7 248.8 393.6 243.8 383.4 207.6 388.7 206.1 386.4 197.9 394.1 195.7 389.5 179.4 357.9 188.4 350.5 162.4 321.9 170.5 325.7 183.8 307.2 189 308.6 194.2 295 198 296 201.3 278.1 206.3 267.1 204.8 263.1 190.7 230.8 199.8 233.1 208.2 203.5 216.6 201.1 208.2 159.9 219.9 170.7 259.7 94.7 239.8 82.1 249.3"
				/>
			</g>
		</SVGOverlay>
	),
	terminus_biolab: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{` 
      .st0, .st1, .st2, .st3, .st4, .st5, .st6, .st7, .st8, .st9, .st10, .st11 {
        fill: none;
      }

      .st12, .st1, .st2, .st13, .st14, .st15, .st16, .st17, .st18, .st19, .st20, .st21, .st22, .st23, .st24, .st25, .st26, .st27, .st28, .st29, .st30, .st31, .st32, .st4, .st5, .st6, .st7, .st8, .st9, .st33, .st34, .st35, .st10, .st36, .st11, .st37 {
        strokeMiterlimit: 10;
      }

      .st12, .st1, .st13, .st14, .st15, .st16, .st17, .st18, .st19, .st20, .st21, .st22, .st23, .st24, .st25, .st26, .st27, .st28, .st29, .st30, .st31, .st32, .st4, .st5, .st6, .st7, .st8, .st9, .st33, .st35, .st10, .st36, .st11, .st37 {
        stroke: #6b6b6b;
      }

      .st12, .st38, .st35 {
        fill: #565555;
      }

      .st1 {
        stroke-dasharray: 0 0 .7 .7;
      }

      .st1, .st9, .st36 {
        strokeWidth: .5px;
      }

      .st2, .st34 {
        stroke: #7c2728;
        strokeWidth: 1.6px;
      }

      .st13 {
        fill: url(#_10_lpi_60_-3);
      }

      .st13, .st14, .st15, .st16, .st17, .st18, .st20, .st21, .st22, .st23, .st24, .st25, .st26, .st27, .st28, .st29, .st31, .st6, .st33, .st37 {
        strokeWidth: 1px;
      }

      .st14 {
        fill: url(#_10_lpi_60_-2);
      }

      .st15 {
        fill: url(#_10_lpi_60_-6);
      }

      .st16 {
        fill: url(#_10_lpi_60_-4);
      }

      .st17 {
        fill: url(#_10_lpi_60_-8);
      }

      .st18 {
        fill: url(#_10_lpi_60_-9);
      }

      .st39, .st36 {
        fill: #2c2c2c;
      }

      .st19 {
        fill: url(#_10_lpi_60_-5);
        strokeWidth: .8px;
      }

      .st20 {
        fill: url(#_10_lpi_60_2);
      }

      .st3 {
        stroke: #7b4848;
        strokeWidth: 4.3px;
      }

      .st21 {
        fill: url(#_10_lpi_60_-10);
      }

      .st22 {
        fill: url(#_10_lpi_60_2-7);
      }

      .st23 {
        fill: url(#_10_lpi_60_2-2);
      }

      .st24 {
        fill: url(#_10_lpi_60_2-3);
      }

      .st25 {
        fill: url(#_10_lpi_60_2-6);
      }

      .st26 {
        fill: url(#_10_lpi_60_2-9);
      }

      .st27 {
        fill: url(#_10_lpi_60_2-8);
      }

      .st28 {
        fill: url(#_10_lpi_60_2-5);
      }

      .st29 {
        fill: url(#_10_lpi_60_2-4);
      }

      .st30, .st31 {
        fill: #565656;
      }

      .st30, .st8 {
        strokeWidth: .5px;
      }

      .st32 {
        fill: url(#_10_lpi_60_-7);
      }

      .st4, .st5, .st10, .st11 {
        strokeWidth: .5px;
      }

      .st5 {
        stroke-dasharray: 0 0 .7 .7;
      }

      .st7 {
        strokeWidth: .8px;
      }

      .st33 {
        fill: url(#_10_lpi_60_2-10);
      }

      .st34 {
        fill: #011833;
      }

      .st35 {
        strokeWidth: .2px;
      }

      .st10 {
        stroke-dasharray: 0 0 .7 .7;
      }

      .st40 {
        fill: #6b6b6b;
      }

      .st11 {
        stroke-dasharray: 0 0 .7 .7;
      }

      .st37 {
        fill: url(#_10_lpi_60_);
      }
     `}
				</style>
				<pattern
					id="_10_lpi_60_"
					data-name=" 10 lpi 60 "
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14046.2 -1084.2) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-2"
					data-name=" 10 lpi 60 -2"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14046.2 -1085.2) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-3"
					data-name=" 10 lpi 60 -3"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14044.6 -1085.2) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-4"
					data-name=" 10 lpi 60 -4"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14044.6 -1085.2) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-5"
					data-name=" 10 lpi 60 -5"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14392.8 -751.4) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-6"
					data-name=" 10 lpi 60 -6"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14045.1 -1085) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-7"
					data-name=" 10 lpi 60 -7"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14045 -1084.4) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-8"
					data-name=" 10 lpi 60 -8"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14045.2 -1084.2) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-9"
					data-name=" 10 lpi 60 -9"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14046 -1085.3) rotate(-46) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_-10"
					data-name=" 10 lpi 60 -10"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14012.8 -1106.4) rotate(-45.3) scale(.2 -.2)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2"
					data-name=" 10 lpi 60 2"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14486.8 -621.6) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-2"
					data-name=" 10 lpi 60 2-2"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14490.9 -627.4) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-3"
					data-name=" 10 lpi 60 2-3"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14491.8 -626.2) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-4"
					data-name=" 10 lpi 60 2-4"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14491.8 -626.2) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-5"
					data-name=" 10 lpi 60 2-5"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14491.8 -626.2) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-6"
					data-name=" 10 lpi 60 2-6"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14491.8 -626.2) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-7"
					data-name=" 10 lpi 60 2-7"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14491.8 -626.2) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-8"
					data-name=" 10 lpi 60 2-8"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-14486.7 -621.4) rotate(-46) scale(.1 -.1)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-9"
					data-name=" 10 lpi 60 2-9"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-15369.4 284.2) rotate(-46) scale(0 0)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
				<pattern
					id="_10_lpi_60_2-10"
					data-name=" 10 lpi 60 2-10"
					x="0"
					y="0"
					width="72"
					height="72"
					patternTransform="translate(-15189.2 60.4) rotate(-46) scale(0 0)"
					patternUnits="userSpaceOnUse"
					viewBox="0 0 72 72"
				>
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<line className="st3" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								<line className="st3" x1="71.8" y1="18" x2="144.2" y2="18" />
								<line
									className="st3"
									x1="71.8"
									y1="32.4"
									x2="144.2"
									y2="32.4"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="46.8"
									x2="144.2"
									y2="46.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="61.2"
									x2="144.2"
									y2="61.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="10.8"
									x2="144.2"
									y2="10.8"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="25.2"
									x2="144.2"
									y2="25.2"
								/>
								<line
									className="st3"
									x1="71.8"
									y1="39.6"
									x2="144.2"
									y2="39.6"
								/>
								<line className="st3" x1="71.8" y1="54" x2="144.2" y2="54" />
								<line
									className="st3"
									x1="71.8"
									y1="68.4"
									x2="144.2"
									y2="68.4"
								/>
							</g>
							<g>
								<line className="st3" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								<line className="st3" x1="-.2" y1="18" x2="72.2" y2="18" />
								<line className="st3" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
								<line className="st3" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
								<line className="st3" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
								<line className="st3" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
								<line className="st3" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
								<line className="st3" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
								<line className="st3" x1="-.2" y1="54" x2="72.2" y2="54" />
								<line className="st3" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
							</g>
							<g>
								<line className="st3" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								<line className="st3" x1="-72.2" y1="18" x2=".2" y2="18" />
								<line className="st3" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
								<line className="st3" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
								<line className="st3" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
								<line className="st3" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
								<line className="st3" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
								<line className="st3" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
								<line className="st3" x1="-72.2" y1="54" x2=".2" y2="54" />
								<line className="st3" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
							</g>
						</g>
					</g>
				</pattern>
			</defs>
			<g id="Ocean">
				<path
					className="st34"
					d="M356.6,46.8l44.9,48.6,13.5,31.8,59.5,65.3-4.9,27.5-27.1,32.9,8.7,30.8-36.8,89.6-135.8,66.4-80.1.5-42.2-50.7-36.8-4.9-42.2-71.2,37.3-102-2.7-37.8,13-21.6,1.6-29.2,23.3-37.2s57.4-27,97.9-31.3l108.8-7.6h0Z"
				/>
			</g>
			<g id="MapBorder">
				<path
					className="st2"
					d="M356.6,46.8l44.9,48.6,13.5,31.8,59.5,65.3-4.9,27.5-27.1,32.9,8.7,30.8-36.8,89.6-135.8,66.4-80.1.5-42.2-50.7-36.8-4.9-42.2-71.2,37.3-102-2.7-37.8,13-21.6,1.6-29.2,23.3-37.2s57.4-27,97.9-31.3l108.8-7.6h0Z"
				/>
			</g>
			<g id="Island">
				<path
					className="st39"
					d="M182,191.7s1.9-2.6,2.9-2.2,1.9-1.9.7-2,2.8-2.4,5.9.2-2.2-3.5,2.4-3.1,4.6,2.9,4.6,2.9c0,0,2.2-.6,2.8-2.4s1.7-.7.6,3.3-.2,9.2-.2,9.2c0,0,1.1,2.9-1.1,3.9,0,0-1.7,5.4-7.2,4.2,0,0,.7,4.4-.7,4.4,0,0-1.1-2.8-3.7-2.4,0,0-2.9-.9-4.8,2.2,0,0-2.6-.9.2-3.3,0,0-2.8-2,.2-4.2,0,0-1.1-2.9-2-3.1s-.6-7.6-.6-7.6h0Z"
				/>
				<path
					className="st39"
					d="M194.2,223.3s-2.2-5.5,3.9-6.6c0,0,2.6-1.1,3.7,4.2,0,0-.2-.6.6-4.1,0,0,5.4-3.9,5.4,1.9,0,0,6.1-.7,2.9,2.9l2-.6s-2,3.9,2.4,7.9l-1.5.7,1.1,1.5s5.5,6.3.6,8.1c0,0-5.2-1.5-2.4,3.1,0,0,.4,4.4-1.7,4.4s-3.7-.7-5.7-.4-4.1-1.7-1.9-2.4-2.2-1.5-3.1-.2-6.1-1.5-6.1-1.5c0,0-2.8-2.8.4-3.7,0,0,1.1-3.1-1.7-3.1,0,0-4.2-.4-2.8-2.6,0,0-1.1-2.8-3.7-3.1,0,0,2.2-2.9,4.8-3.5,0,0,.4-3.5,2.8-3.1h0Z"
				/>
				<path
					className="st39"
					d="M204.6,285.5s6.3-4.1,9.2-2.6c0,0,2.4-.5,2.8-2s.7-3.5,2.8-3.9.6-1.7-.9-2.2.7-2.8-2.8-1.5l-.4-5.5-1.3,2.8s-1.1-.7-3.5,3c0,0-2.8-2-3.5-.4,0,0-6.3-1.5-3.7,2,0,0,1.3.7,1.1,2s.2,2.4,2.4,1.1.7,3.7-.4,4.1-1.9,3.1-1.9,3.1h0Z"
				/>
				<path
					className="st39"
					d="M195.9,311.3s-.7-6.5-7.8-5.4-4.2,8.9-4.2,8.9l1.5,2.6s-3.5,5.5.6,5.2.7,1.7.7,1.7c0,0,1.9.7,2.8,2.4s3.5-2.4,3.5-2.4c0,0,1.3,1.5,2.8,1.1s2.8-2.6,1.1-3,.7-1.7,2-1.5,2.6-3.5.4-4.1.6-1.9.6-1.9c0,0,1.5-2.6-3.9-3.7h0Z"
				/>
				<path
					className="st39"
					d="M353.3,310.2l-3,3.5s-3.9,1.1-5,3.1-4.6-.5-3.9-3.1-1.7-1.1-1.7-1.1c0,0-1.3-1.5-.4-2.2s-.4-4.1-2-3.5-.5-1.9-.5-1.9c0,0-2.4-1.9,0-2.8,0,0,.7-2.4.9-3.9s2.8.7,2.8.7c0,0,.9-1.3-1.5-2s2-2.8,2-2.8c0,0,.9-3.5,3-.9,0,0,3-2,5-.5,0,0,1.9-1.3,3.3,1.9l1.5.4-.5,15.1h0Z"
				/>
				<path
					className="st39"
					d="M353.9,223.5s-1.1-2.4-4.1-.4c0,0-3.7.2-5.2-1.3s-.2,3.5,2.4,4.6l-1.5,1.5,1.3,1.9-1.5,1.7s-2.6,1.9,2.4,1.1c0,0,2.8,2,5.2-.6,0,0,.9-9,.9-8.5h0Z"
				/>
				<path
					className="st39"
					d="M339.3,161.6s2.2,2,3.1,4.4,3.7,2.6,3.7,2.6c0,0-1.7,2.9-4.1,2.8s.4,2,.4,2l-1.5,1.1s-2,3.7-1.1,5.4-5-5.2-9-2.4c0,0-1.3-2.6-2.8-2.2s-3.1-2.2-2.4-3.3c0,0-1.9-2-1.1-2.9,0,0-2.2-1.3-2-2.4s-4.6-3.3,2.8-5h14,0Z"
				/>
				<path
					className="st39"
					d="M239.7,353.3s-12.9-5.1-16.1-4.1-16.3,16.4-16.3,16.4c0,0-7.4,7.5-8.1,9.2s-4.5,2.2-4.1,5.9-3.4,26.4,9.5,29.1c12.9,2.7,45.4-8,47-7,1.7,1,48.9,2.4,55.9-8.4,0,0,3.6-3.4,3.9-5.1,0,0,3-2.4,3.4-3.6,0,0,1-1,1.4-1.3s-.3-6.2-2.9-6.5c0,0-2.9-13.5-9.2-16.8-6.3-3.3-22.6-1.3-26.9,1.5s-5.2,7.3-15.6,4c0,0-7.4-2.1-7.7-9.1s-10.4-3.9-10.4-3.9c0,0-2.8.3-3.9-.2h0Z"
				/>
				<path
					className="st39"
					d="M205.8,356.2s-3.9-2.4-6.5-1.2-.3,2.9-.3,2.9c0,0-2.9,2.3-2.1,2.8.8.4,4.4-2.2,4.4-2.2,0,0-2.1,2.7-.7,2.9s6.1-1.8,6.1-1.8l-.9-3.3h0Z"
				/>
				<path
					className="st39"
					d="M234.4,406.3s-3.5,4.8-.6,5.5c0,0,1.4,3.8,4,.3s5-.1,5-.1c0,0,4.2,1.3,5.9-2.2s-3.1-1.7-3.1-1.7l-.6-3.5-10.6,1.7h0Z"
				/>
				<path
					className="st39"
					d="M261.7,406s4.1,5.6,5.8,6.5,3.2-.8,3.3-1.7,3.5-5.3,4.4-4.9,3.6,3,3.6,3.8,2.2-.4,2.4.1,1.9.7,2.8-1,6.1-2.1,6.2-.7,1,3,2.5,2.9,3.5-2.1,3.2-3.9c-.3-1.8-27.4-5.2-34.3-1.2Z"
				/>
				<path
					className="st39"
					d="M313.1,371.9s3.5-3.9,3.2-5.3-4.4-1.7-4.4-1.7l1.2,7Z"
				/>
				<path
					className="st39"
					d="M212.2,410.4s1.4,3.9,2.2,3.8,1.4-2.8,1.4-2.8c0,0-.6,2.7.8,2.5s3.9-3.5,3.9-4.3-8.3.8-8.3.8h0Z"
				/>
				<path
					className="st39"
					d="M403.7,217.1s-2.5-1-2.7-2.5c0-.6-.5-1.4-1.1-2s.2-.7-.6-1.1c-.8-.4-.2-4.4-1.3-5-.5-.3-1,.2-1.2.1-1.3-.5-1.5-.5-2.5.6-1.4,1.4-4.4,6.1-6.2,9.8-1,2-1.4,3.9-1.4,4.9,0,2.9-.3,6.1,1.4,7,1.5.8,1.5,2.3,2.1,2.6.3.1,1.9,0,3.8-1.2,1.5-1,3.3-2,5.2-3,2.6-1.4,5.7-7.9,4.6-10.2h0Z"
				/>
				<path
					className="st39"
					d="M404.4,225.3s.5-2,.6-2.7c0-.5-.1-1.5-.1-1.5,0,0,0-3.1,1-3.4s2.5-2.2,3.1-3.6,8.4-16.4,12.6-17.1,8.3-.7,10,3.9.7,6,1.9,7.5,2.6,6.5,2,7.1-.3,3.1-.4,3.6.1,1.6-1.1,3.8c0,0-.5.9-.4,1.9s-.4,4.4-.9,4.8-3.3,3.4-3.3,6.6c0,3.2-.6,5.6-3,7s-4,2.1-6.2,2.1-1.5.2-3.2.5-6.1-1.1-7.5-2.7-2.2-3-2.5-4.3-1.5-3.8-1.9-4.6-1.8-6.3-.9-8.9h0Z"
				/>
				<path
					className="st39"
					d="M404,221.8s.1-.2.5-.2,0-.5-.4-.4-.5.6-.2.6Z"
				/>
				<path
					className="st39"
					d="M433.4,225.8s1.2-.4,2-.3,1.1-1.1.9-1.1-1.8-.2-.7-1.1-.2-1-.7-1-1.5-.6-1.5-.6l-.2,4.1Z"
				/>
				<path
					className="st39"
					d="M413.7,206.7s-2.4,0-2.6.5-.4,3-.2,3.4,2.8-3.9,2.8-3.9h0Z"
				/>
				<path
					className="st1"
					d="M409.5,212.9s-1.9,4.9-4.1,4.6c-2.2-.3-4-1.4-4.3-2.6-.3-1.1-.6-1.8-1.1-2.2-.6-.4.2-.9-.7-1.2s-.4-4.6-1.3-5.1-1.1.3-1.6,0c-1.1-.7-2.2.4-3.3,1.8-.9,1.2-1.9,3-4.7,7.6-3,5-1.8,9.8-1.7,10.6s.4,2.2,1.3,2.7c1.5.8,1.4,2.2,1.8,2.3.9.2,3.4-.4,5.5-2.2.4-.3,3.7-1.1,6.6-4.2,0,0,3-1.6,2.3,1.4-.7,3,1,7.6,1,7.6,0,0,1.7,3.2,2.2,5.6s3.1,4,3.6,4.4c1.4,1,4.5,2,6.4,1.5,1.9-.5,2.5-.3,4.3-.5s7.7-2.3,7.7-7,1.2-6.4,2.7-7.8c1.5-1.4,1.6-4.6,1.5-5.7s.9-2.5,1.3-3.8-.3-3.4.6-5.2c.9-1.8-1.6-6.2-2.5-7.9-.6-1.2-.3-2.9-.7-4.4s-1.8-4.9-3.4-5.7-6.9-1.5-9.7.5-9.1,13.7-9.9,15h0Z"
				/>
				<path
					className="st39"
					d="M221.1,111.1l-3.4-2.2s-2.6-.7-4.6-.3c-5.6,1.1-8.1-.2-9.8-.2s-3.2-.3-3.7-.7c-.9-.5-3.5-2.1-6.4-.4,0,0-1.1,0-2.1.1-1.4,0-3.3,1.1-4.8,1.6s-3.7.7-4.4,1.6c-.5.6-2,1.1-2,1.1,0,0-2.7.5-4.6,4s-4,5.4-3.4,8.6-1,6.5-1.1,8c-.1,2,1.5,3.4,2.5,4.7.5.6.6,1.8,1.2,2.2,1.6,1,1.3,1.5,2.2,2.2,1.7,1.4,3.3,2,4.2,3.3s3.7.6,4.6.8,3.8,1.1,5.1.9,4.3,0,7.3-2.7c3.5-3.2,1.5-9.8,1.3-12.4s1.2-2.3.7-4.8c-.3-1.6,4-3.5,4.3-4.2,1.3-3.9,4.1-5.1,7.2-6.6,2.4-1.2,2.9-.3,3.9-1.2s2.4-2.3,3.1-2.7c1.3-.6,2.8-.9,2.8-.9h0Z"
				/>
				<path
					className="st39"
					d="M226.2,110.8s.3-2.8,1.8-3.5,2.1-1.9,2.1-1.9c0,0,.3-.8,1.6-1.1s1.8-.7,3-.8,5.9.8,4.1,4.3c-1.5,3-5.6,3.6-8.8,3.2-2.2-.3-3.9-.2-3.9-.2h0Z"
				/>
				<path
					className="st1"
					d="M229.9,105.3s-1.4,1.8-3.7,2.8c-1.9.8-4.8,1.3-8.6.8-4.6-.7-5.2,0-6.9.1-2.8.2-4.2.2-6.2-.3-2.4-.6-3.5.2-6.1-1.4-2.7-1.7-5.1.3-6,.2-1.4-.2-4.2.7-6.2,1.6-2,1-3.8.6-4.6,1.7-.3.3-1.8.9-3.4,1.6-1.7.6-5.6,6.9-6.3,8.3-.7,1.4,0,6.5-.3,7.9-.4,1.4-2.1,5.4.8,7.7,1.6,1.2,1.1,3,2.8,3.8.9.5,1.1,2.1,2.8,2.5s2.6,3.7,5.3,3.2c3.4-.6,5.4,1.4,6.6,1.1,1-.2,2.9-.7,4-.5s5.6-3.4,5.9-5.7c.6-4.7-1.2-9.9-.3-11.1,1-1.3.4-2.9.6-3.4.8-1.6,1.7-1.8,3.3-3s1.6-3.5,3.5-4.8c1.9-1.3,4.8-3.2,7.2-3.3,1.9,0,2.4-2.3,4.3-3.3,2.5-1.3,11.3-.8,14.5-.7,2.8,0,6.4-2.8,6.4-4.7s-2.4-3.9-5.6-3-3.7,1.8-3.7,1.8h0Z"
				/>
				<path
					className="st39"
					d="M381.8,282.9l1.6-5.4-.3-2.7,3.2.5.5-1.3h3v2.7s7,3.2.3,8.9v2.4l-3.5.3v-3h-1.9v2.4l-1.6-4-1.3-.8h0Z"
				/>
				<path
					className="st39"
					d="M366.2,198.8c.4,0,4.9,4.5,7.4-.8,0,0,5.1.8,6-4.1,0,0,6.5.1-1.3-4.4,0,0-1.3-3.8-3.5-4.4,0,0-1.1-2.4-2.5-2.3s-.2,1.8-.2,1.8l-2-.2s1.4-5.1-2.9-2.8c0,0-3.7-.6-3,1.9,0,0,.6,1.2-5.2.7,0,0,4.1,3.6,1.9,4.2s-3.6,1.8-3,2,2.9,0,2.1,3.3c0,0-3.5,1,.5,2.1,0,0,1.2,3.2,5.7,2.9h0Z"
				/>
				<path
					className="st39"
					d="M325.3,161.6s-1.1-3.1,2.2-3.4-.1-2.6-.8-2.6-.2-2.5,3-.8c3.2,1.7,8.1,5.9,8.4,7.9s-12.7-1-12.7-1h0Z"
				/>
				<path
					className="st39"
					d="M320,117.8s-3.5,1-1.4,2.1,1.4,1.8,2.2,2.2,3,1.2,7.1.7.4,1.2.4,1.2c0,0-.5,2.2.5,3.1.9.9-1.9,1.2-1.9,1.2,0,0-.8,1.5,4.4.7,0,0,.4,3.5,1.8,1.2s1.2-2.1,4.8-2.1,2-5,2-5c0,0,2.3.9,1.4-3.8,0,0,1.4-.6,0-2.7,0,0-2.1-3.2-.5-3.7,0,0,2.7-3.6-4.9-4.3,0,0-2.7-1.4-2.6-2.9s-5.5-1.7-4.6,1.2c0,0-2.9.7-2.4,4.6,0,0-1.3,1.7-2.7,1.9s-3.7,1.9-3.4,4.3h0Z"
				/>
				<path
					className="st39"
					d="M316.3,120.8s2.8-.6,2.2,3.9c0,0-2.3,2.1-4.1.3s1.5-2.4,1.5-2.4l.4-1.8h0Z"
				/>
				<path
					className="st39"
					d="M277.9,101.1s15.9.2,13.6,9.8c0,0,5.4-1.1,4.5,3.4-.9,4.5-6.8.4-6.8.4l.5,3.4s-4.1-.9-4.1-2-2-4.3-5.4-2.2-3.6-3.9,0-4.1.2-8.4-2.3-8.8h0Z"
				/>
				<path
					className="st39"
					d="M306.2,82.3s8.2.5,8.2-4.1c0,0,3.9,1.6,1.4,4.1s3.8,1.4,4.7,1.2,2.9,5.6-4.8,3.4c0,0-1.2,3.6,1.1,4.1s1.2,4.1-7.9,3.9-3.6-7.3-3.6-7.3c0,0,.9-5.4.9-5.4Z"
				/>
				<path className="st39" d="M323.3,83s2.7,1.4,1.6,2-2.7-.7-1.6-2Z" />
				<path
					className="st39"
					d="M307.5,76.6s3.2,1.4,3.4.5,0,3.2-2.7,2.9-.7-3.4-.7-3.4h0Z"
				/>
				<path
					className="st39"
					d="M154,212.5s4.7,2.5,8.2,0,1.1,8.6-.4,9,0,3.6,0,3.6c0,0-6.1-.7-7.9.4s-6.8-3.9-3.2-6.4c0,0-.2-3.6,1.6-4.3s-.5-2,1.6-2.1h0Z"
				/>
				<path
					className="st39"
					d="M228.9,327.7s2.9-3.4,6.6-.7,2.7,4.8.4,6.5-12.4-1.1-6.8-4.5l-.2-1.2h0Z"
				/>
				<path
					className="st39"
					d="M281.2,330.8s2-3.2,2.3-4.8,1.8-3.2,5.5-2.5,5.2-2.7,9.7-.7,6.3,9.1-.4,12.2c0,0-2,4.1-6.5,2.9,0,0-1.4-.4-4.1,1.2s-8.1-7.5-6.6-8.2h0Z"
				/>
				<path
					className="st39"
					d="M335.4,344.8s2-5,3.4-5.4c0,0,.2-2.7,2.3-1.6s3.4.5,3.4.5c0,0,.5-1.1,2.7-.2s4.1.4,4.1.4c0,0-.4,2.9-2.5,3.2s-.9,5-.9,5c0,0-1.6,2.9.2,3.4s-.4,3.6-5.2,2.3c0,0-3,.9-3.6,2.7s-9-2.7-4.7-3.9c0,0-2-2.9,0-3.6l.7-2.9h0Z"
				/>
				<path
					className="st0"
					d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.2,0Z"
				/>
				<path
					className="st0"
					d="M273.1,233.1c-.6-.1-.6-2.5-.6-2.5v3.2c-.1,0-3.1,0-3.5.1s.5,1.4-.3,1.4-1.5-1.4-1.5-1.4h-6.1c0,0,2,2.3,2,2.3,0,0,1.3,1.1,1.1,1.8-.3.6.8,1.8,1.3,1.9.5,0,1.3,1.3,1.3,1.3,1,.3,1.3.9,1.3.9.5,2,2.4.5,1.9-.4s1.6-1.8,1.6-1.8c1.3-.5,2.2-.6,2.2-.6.1-.6-.5-2.6-.5-2.6,0,0,.4-3.4-.3-3.5h0Z"
				/>
				<path
					className="st0"
					d="M243.7,213.6c2.2-1.1-.7-2.9-.7-2.9l1.1-2.3s-1.3-3.7-.7-6.3l-4,13.6s-.3,1.9,2.4.7l.7,1.2,3.1,5.9,3-.3,1.1-1.3-4.5-3.9s-3.6-3.2-1.4-4.3h0Z"
				/>
				<path
					className="st0"
					d="M277.9,233c-.5-.4-2.4-.2-2.9,0s-.5,5.8-.5,5.8c1.3-.2,1.3,1.4,1.3,1.4.9-.2.7,1.6.7,1.6.7.5.9,3.7,1.6,4.6.7.9.9-.1.9-.1v-13.2c0,0-.7.4-1.1,0Z"
				/>
				<path
					className="st0"
					d="M282.3,233.9c-1.1-.3-1.8-1.1-1.8-1.1l.2,12.6s.5.7.9.6c.4,0,0-.4.5-.4s.9-.6.4-.8.3-1.3.3-1.3c-.3-1.2,2.5-2.2,2.5-2.2,1.1-2.2,3.8-4.5,3.8-4.5,0,0,1.2-.7.7-1.4-.5-.7.8-1.5.8-1.5,0,0-7.1.4-8.3,0h0Z"
				/>
				<path
					className="st0"
					d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.2,0Z"
				/>
				<path
					className="st0"
					d="M267.1,245.1c-.5.2-.9-.4-.9-.4,0,0-.7,1.1-1.7.4-1-.7-.2-2.3-.4-2.6-.1-.3.6-.9.6-.9-.3,0-.6-.3-.6-.3-.9-.7,0-.9,0-1s-.6-.9-.6-.9c0,0,.4,2.1.4,4.4s-.8,4.6-.8,4.6c0,1.4-3,3.6-3,3.6l-4.5,4.5s-1.2.5-1.1,1-.5,1.9-.5,1.9l.9-1.6c.3-1.7,1.7-.8,1.8-.9,0,0,0,0,0,.1.2.3,1,.3,1.1,0s1-.9,1-.9c0,0,1.1-.6.2-.6-.9,0-1.1-1.5,0-1.7,1-.2,1.3,1.5,1.3,1.5l.8-.4c1.2-.3.2-1.1.2-1.1-2.1-1.6.3-3,1-3.4.6-.5,1-2.1,1-2.1,0,0,.7-.2,1.7-1,1-.7,2.2-.7,2.2-.7-.3-.2,0-1.5,0-1.5h0Z"
				/>
				<path
					className="st0"
					d="M273.1,233.1c-.6-.1-.6-2.5-.6-2.5v3.2c-.1,0-3.1,0-3.5.1s.5,1.4-.3,1.4-1.5-1.4-1.5-1.4h-6.1c0,0,2,2.3,2,2.3,0,0,1.3,1.1,1.1,1.8-.3.6.8,1.8,1.3,1.9.5,0,1.3,1.3,1.3,1.3,1,.3,1.3.9,1.3.9.5,2,2.4.5,1.9-.4s1.6-1.8,1.6-1.8c1.3-.5,2.2-.6,2.2-.6.1-.6-.5-2.6-.5-2.6,0,0,.4-3.4-.3-3.5h0Z"
				/>
				<path
					className="st0"
					d="M276.6,241.8c.7.5.9,3.7,1.6,4.6.7.9.9-.1.9-.1v-13.2c0,0-.7.4-1.1,0s-2.4-.2-2.9,0-.5,5.8-.5,5.8c1.3-.2,1.3,1.4,1.3,1.4.9-.2.7,1.6.7,1.6Z"
				/>
				<path
					className="st0"
					d="M243.7,213.6c2.2-1.1-.7-2.9-.7-2.9l1.1-2.3s-1.3-3.7-.7-6.3l-4,13.6s-.3,1.9,2.4.7l.7,1.2,3.1,5.9,3-.3,1.1-1.3-4.5-3.9s-3.6-3.2-1.4-4.3h0Z"
				/>
				<path
					className="st0"
					d="M282.3,233.9c-1.1-.3-1.8-1.1-1.8-1.1l.2,12.6s.5.7.9.6c.4,0,0-.4.5-.4s.9-.6.4-.8.3-1.3.3-1.3c-.3-1.2,2.5-2.2,2.5-2.2,1.1-2.2,3.8-4.5,3.8-4.5,0,0,1.2-.7.7-1.4-.5-.7.8-1.5.8-1.5,0,0-7.1.4-8.3,0h0Z"
				/>
				<path
					className="st0"
					d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.2,0Z"
				/>
				<g>
					<path
						className="st0"
						d="M243.7,213.6c2.2-1.1-.7-2.9-.7-2.9l1.1-2.3s-1.3-3.7-.7-6.3l-4,13.6s-.3,1.9,2.4.7l.7,1.2,3.1,5.9,3-.3,1.1-1.3-4.5-3.9s-3.6-3.2-1.4-4.3h0Z"
					/>
					<path
						className="st0"
						d="M273.1,233.1c-.6-.1-.6-2.5-.6-2.5v3.2c-.1,0-3.1,0-3.5.1s.5,1.4-.3,1.4-1.5-1.4-1.5-1.4h-6.1c0,0,2,2.3,2,2.3,0,0,1.3,1.1,1.1,1.8-.3.6.8,1.8,1.3,1.9.5,0,1.3,1.3,1.3,1.3,1,.3,1.3.9,1.3.9.5,2,2.4.5,1.9-.4s1.6-1.8,1.6-1.8c1.3-.5,2.2-.6,2.2-.6.1-.6-.5-2.6-.5-2.6,0,0,.4-3.4-.3-3.5h0Z"
					/>
					<path
						className="st0"
						d="M276.6,241.8c.7.5.9,3.7,1.6,4.6.7.9.9-.1.9-.1v-13.2c0,0-.7.4-1.1,0s-2.4-.2-2.9,0-.5,5.8-.5,5.8c1.3-.2,1.3,1.4,1.3,1.4.9-.2.7,1.6.7,1.6Z"
					/>
					<path
						className="st0"
						d="M268.4,165.1c14.6,1.9,16.1-3.5,16.1-3.5,0,0,.2,0,.6,0,0-1.7.2-5.8.9-6.4.9-.7,0-14,0-14h-24.2v18.4s4.8.8,6.6,5.4h0Z"
					/>
					<path
						className="st0"
						d="M280.5,251s-1-1.6-1.5-.4-3.1.9-3.1.9c0,0-.1.4,1,2,1,1.6,1.7,1.1,2.1,1.9.4.8,3.1.9,1.2-1.2s.3-3.2.3-3.2h0Z"
					/>
					<path
						className="st0"
						d="M267.1,245.1c-.5.2-.9-.4-.9-.4,0,0-.7,1.1-1.7.4-1-.7-.2-2.3-.4-2.6-.1-.3.6-.9.6-.9-.3,0-.6-.3-.6-.3-.9-.7,0-.9,0-1s-.6-.9-.6-.9c0,0,.4,2.1.4,4.4s-.8,4.6-.8,4.6c0,1.4-3,3.6-3,3.6l-4.5,4.5s-1.2.5-1.1,1-.5,1.9-.5,1.9l.9-1.6c.3-1.7,1.7-.8,1.8-.9,0,0,0,0,0,.1.2.3,1,.3,1.1,0s1-.9,1-.9c0,0,1.1-.6.2-.6-.9,0-1.1-1.5,0-1.7,1-.2,1.3,1.5,1.3,1.5l.8-.4c1.2-.3.2-1.1.2-1.1-2.1-1.6.3-3,1-3.4.6-.5,1-2.1,1-2.1,0,0,.7-.2,1.7-1,1-.7,2.2-.7,2.2-.7-.3-.2,0-1.5,0-1.5h0Z"
					/>
					<path
						className="st0"
						d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.2,0Z"
					/>
					<path
						className="st0"
						d="M310.8,249.4c-3.2.1-3.5-3.3-3.5-3.3,0,0,3.2-2.3,3.2-2.9s1.9-1.6,1.9-1.6c1.8.3,3.5-3.3,2.1-2-1.3,1.2-2.6.1-2.6.1,0,0,.1.8-.7,1.3s-1.2,2.5-1.2,2.5c0,0-2.2,1.7-3.6,2.6s2.3,5.9,2.7,5.9,1-1,1-1c.4-2,1.8-.9,1.8-.9,0,0,1.6,1.4,3.6.8s.7-5.4.7-5.4c0,0-2.1,3.6-5.3,3.7h0Z"
					/>
					<path
						className="st0"
						d="M283.7,244.9s-1,1.8-.2,2.8c.9,1-1.3,1.3-1.3,1.3,0,0,.6.4,1.2.3,0,0-2.1,1.1-.7,2.4,1.4,1.2,2.8,1.3,2.8,1.3,0,0-.3-.5-.2-.9s-.9-.1-1-.5c-.1-.4-1.1-3,1-3.7s2.7-3.8,2.7-3.8c0,0-.7,1.5-4.3.8h0Z"
					/>
					<path
						className="st0"
						d="M282.3,233.9c-1.1-.3-1.8-1.1-1.8-1.1l.2,12.6s.5.7.9.6c.4,0,0-.4.5-.4s.9-.6.4-.8.3-1.3.3-1.3c-.3-1.2,2.5-2.2,2.5-2.2,1.1-2.2,3.8-4.5,3.8-4.5,0,0,1.2-.7.7-1.4-.5-.7.8-1.5.8-1.5,0,0-7.1.4-8.3,0h0Z"
					/>
					<path
						className="st39"
						d="M341.7,257.6c-2.6.9-2.2-5.4-5.4-2.4-3.1,3-5.5-4.4-3.9-5s-5.2-5,.4-6.8-2.2-4.1-2.2-4.1c0,0-3-9-6.8-7.9s-1.1-5.9-1.1-5.9c0,0-8.5-5.9-4.1-13.5,0,0,1.9.2,3.3-3.1,1.5-3.3,3.5-5.4,3.5-5.4,0,0,2.8-7.6-.5-7.6s-2-6.6-2-6.6c0,0-5.7-2.4-.7-3.9s0-8.7-1.7-6.5-6.1.4-3.9-3.7c0,0,.4-6.1-3.1-5.9s-6.3-2.2-6.3-2.2c0,0-1-5-4.3-5.7-1.4-4.9-11.7-5.7-11.7-5.7l.5-19.2c-2.5-4.7-5.4-.2-5.4-.2h-24.9c-3.2-4.8-5.4.4-5.4.4l-.4,21.5-11.2,3s.6.2,1.7.5h-3.6s-3.1,1-3.7,3.2-.9,4.4-2.4,4.1-1.1,2.2-1.1,2.2c0,0-2,1.3-2.6.6-.6-.7-.9,3.1.4,4.4,0,0-2.6,2-2.2,3.5.4,1.5-1.1,2.8-4.1,2.4,0,0-5,2.4-.4,6.5,0,0-1.5,1.9-.9,2.9s-2.4,1.9-.4,4.4c2,2.6,2.4,5,2.4,5,0,0-2,6.1-1.3,8.5,0,0-2.4,4.1-1.1,7.6,0,0-.2,4.8,2,6.1,0,0-.2,3.1,1.5,3.3,0,0-.2,4.2,1.1,5.5s-1.1,1.7-1.1,1.7c0,0-.4,10.1-1.7,10.7-1.3.6-2.4,2.9-.2,4.8,0,0-1.5,2.6,2,4.1,0,0-2,4.2.7,7,0,0-5.2,4.4-.4,5.2,0,0,2,1.7,1.5,3.3s2,2.8,2,2.8c0,0-2.9,1.3-.9,3.1,0,0-2,3.5-.7,4.1,0,0-1.9-.4-3.5,1.7s-2.8,2.6-1.7,3.3-6.1-.9-6.6,8.3c0,0-6.5,8.7-2.2,12l.9,3.7s-2.6,2,.2,4.1c0,0-2.4,2.6-.6,4.1,0,0-1.5,5.2.2,4.2s2.4,3.9,2.4,3.9c0,0,2.4,2.4,9.4-5.4,0,0,.2,1.9,1.9,2s3.3-3,3.9-.7,1.7,4.8,5,3.1,6.6,1.3,6.6,1.3c0,0,3.1,1.9,4.8-1.1,1.7-3,2.2-.4,2.2-.4,0,0,2.2,2.6,5.2.4s.7-.7,1.9.2,1.9-.9,3.3-.9,3.1,0,4.6-1.7c1.5-1.7,2.6-5.4,3.7-5.7s2.6-15.7,10.3-7.9,9.6,12,17.7,6.8,10.9-11.3,10.9-11.3c0,0,4.8-3.1-.2-5-5-1.9.2-4.2.2-4.2,0,0-5.5-8.5-12.7-6.5,0,0-2,5.9-5.7,7.9s-7.8,8.3-6.3-5.2l3-6.3s5.7,0,6.1-3.5,3.9-2.6,3.9-2.6c0,0,5.2-1.5,2.4-3.1s6.1.2,6.1.2c0,0,2-.9,3.1,2.6s4.6,2.2,4.6,2.2c0,0-.5,3.9.7,4.1,1.3.2,5.4-2.6,5.4-2.6,0,0,1.5,1.3-.5,2.8-2,1.5,6.1,1.1,7.6-.5,1.5-1.7,4.1.4,4.1.4,0,0,.5-2.8,2.2-2.6,1.7.2.9-3.7.9-3.7,0,0,3.1-3.3,4.2-2.6,1.1.7,3.5-2.8,3.5-6.8s.9-7,.9-7c0,0-.7-3.9-3.3-3h0ZM261.8,141.2h24.2s.9,13.3,0,14c-.7.6-.9,4.7-.9,6.4-.4,0-.6,0-.6,0,0,0-1.5,5.4-16.1,3.5-1.8-4.6-6.6-5.4-6.6-5.4v-18.4h0ZM248.5,223.2l-3,.3-3.1-5.9-.7-1.2c-2.7,1.2-2.4-.7-2.4-.7l4-13.6c-.7,2.6.7,6.3.7,6.3l-1.1,2.3s2.9,1.7.7,2.9,1.4,4.3,1.4,4.3l4.5,3.9-1.1,1.3h0ZM264.9,247.3c-1,.7-1.7,1-1.7,1,0,0-.3,1.6-1,2.1-.6.5-3.1,1.9-1,3.4,0,0,1,.8-.2,1.1l-.8.4s-.2-1.7-1.3-1.5c-1,.2-.9,1.6,0,1.7.9,0-.2.6-.2.6,0,0-1,.6-1,.9s-.9.3-1.1,0c0,0,0,0,0-.1-.1.1-1.5-.8-1.8.9l-.9,1.6s.6-1.4.5-1.9,1.1-1,1.1-1l4.5-4.5s3-2.2,3-3.6c0,0,.8-2.3.8-4.6s-.4-4.4-.4-4.4c0,0,.5.9.6.9s-.8.3,0,1c0,0,.3.3.6.3,0,0-.7.6-.6.9s-.6,1.9.4,2.6c1,.7,1.7-.4,1.7-.4,0,0,.4.7.9.4,0,0-.3,1.3,0,1.5,0,0-1.2,0-2.2.7h0ZM273.9,239.2s-1,.1-2.2.6c0,0-2.1.9-1.6,1.8.5.9-1.4,2.4-1.9.4,0,0-.4-.6-1.3-.9,0,0-.8-1.2-1.3-1.3s-1.6-1.3-1.3-1.9c.3-.6-1.1-1.8-1.1-1.8l-2-2.2h6.1c0,0,.7,1.4,1.5,1.4s0-1.2.3-1.4,3.4-.1,3.4-.1v-3.2c.1,0,0,2.4.7,2.5.6.1.3,3.5.3,3.5,0,0,.6,2,.5,2.6h0ZM274.6,238.8s0-5.6.5-5.8c.5-.2,2.4-.4,2.9,0s1.2,0,1.2,0v13.2c0,0-.2,1.1-1,.1-.7-.9-.9-4.1-1.6-4.6,0,0,.2-1.8-.7-1.6,0,0,0-1.6-1.3-1.4ZM279,255.5c-.4-.8-1-.3-2.1-1.9-1-1.6-1-2-1-2,0,0,2.6.4,3.1-.9s1.5.4,1.5.4c0,0-2.1,1.1-.3,3.2,1.8,2.1-.9,2-1.2,1.2h0ZM285.3,248c-2.1.8-1,3.4-1,3.7.1.4,1,.1,1,.5-.1.4.2.9.2.9,0,0-1.3-.1-2.8-1.3-1.4-1.2.7-2.4.7-2.4-.7.1-1.2-.3-1.2-.3,0,0,2.2-.4,1.3-1.3-.9-1,.2-2.8.2-2.8,3.6.8,4.3-.8,4.3-.8,0,0-.6,3.1-2.7,3.8h0ZM289.8,235.3c.5.7-.7,1.4-.7,1.4,0,0-2.7,2.3-3.8,4.5,0,0-2.8,1-2.5,2.2,0,0-.8,1.1-.3,1.3.5.3,0,.8-.4.8s-.2.3-.5.4-.9-.6-.9-.6l-.2-12.6s.7.8,1.8,1.1,8.3,0,8.3,0c0,0-1.2.8-.8,1.5h0ZM303.6,219.8l-9.6,9.6h-9.9s-2,.7-3.2,0-3.6-3.7-6.7-1.2l-2.4,1.7-11.1-1.5-10.2-9.8.6-15.9,15.6-12.1h22.2l14.6,14.6v14.6h0ZM315.4,251c-2,.7-3.6-.8-3.6-.8,0,0-1.4-1.1-1.8.9,0,0-.6,1-1,1s-4.1-5.1-2.7-5.9,3.6-2.6,3.6-2.6c0,0,.5-1.9,1.2-2.5s.7-1.3.7-1.3c0,0,1.2,1.1,2.6-.1s-.3,2.3-2.1,2c0,0-1.9,1.1-1.9,1.6s-3.2,2.9-3.2,2.9c0,0,.4,3.4,3.5,3.3,3.2-.1,5.3-3.7,5.3-3.7,0,0,1.3,4.7-.7,5.4h0Z"
					/>
				</g>
			</g>
			<g id="OutdoorPaths_Boat">
				<g>
					<path
						className="st12"
						d="M254.4,230.6l.8-2.5-4.1-3.1,1.3-1.6-2-2-1.2,1.5-3.6.3-1.9,1.9-.6,1-3,2v1.4l-4.4,7.8-1.6,8,3.8,6.1,2.8.9.5,1.8-5.8,2.2s3.6,11.2,5,12.4c0,0,3.2,0,6.6,4.5,0,0,1.3,1.7,2.5,2.1v1.3s1.5-.6,2.8,0l1.6,1.6,5.3,2.6,4.8-2.6.5-3.4-2.7-4.3-5.1-2.4s-.3-2.4-4.5-6.3l1.7-4.6,8.2-8.9s2.9-9.3-1.5-11.7l-6.3-5.8h0Z"
					/>
					<path
						className="st12"
						d="M247,273.2h-9.6v2.8h-2.9v30.2l5.6,5.8h21.6l2.9-2.6v-7.2h6.6v-17h-.8v-10.4l-11.2,5.9-5.5-2.6s-1-2.5-4.2-1.5v-1.3s-1.6-1-2.5-2.1h0Z"
					/>
					<path
						className="st12"
						d="M300.6,224.1v2.8l-1.7,1.6s0,3.6.5,4.6l-.7,2.2s-3.5,1.2-8.4,7.1l-.3,1.1s-1.4,3.8-4.4,5.1v1.1l2.2,2.6s.4,3.8-.3,4.6-3.2,2.4-3.3,5.9,0,10.2,0,10.2h4.5s-.2-3.6,3.1-3.5h3.1s1.1-5.8,6-3.9l1.5.7s3.9-5.2,5.6-5.8l.5-1.6s-2.7-1.3-1.6-3.9l1.8-1.8-3.5-5.6s-.8-1.9,1-3.1,3.7-3.3,4.5-5.9-3.1-2.7-1.1-5.1c0,0,1.6-.8,0-4.4,0,0,.7-2.9-1.3-3.8l-5.9-3"
					/>
				</g>
				<path
					className="st36"
					d="M137.8,269.8s-8.7-9.8-18-10.6c0,0-4.1,12.3-2.2,20.4,1.9,8.2,33,68.6,33,68.6l21-7.6-33.8-70.8h0Z"
				/>
				<path
					className="st40"
					d="M120.7,280.1s8.4-7.6,14.4-7.1c0,0,.5,1.1-1.4,1.9s-11.2,4.4-12,6.3l-1.1-1.1h0Z"
				/>
				<polygon
					className="st40"
					points="123.4 284.7 136.7 278.5 137.3 280.4 135.6 280.9 138.1 286.4 128.8 290.5 126.1 285.3 123.9 285.8 123.4 284.7"
				/>
				<polyline
					className="st9"
					points="132.8 312.5 137.5 310.3 131 297.3 142.7 292.4 148.7 304.6 153.3 302.7"
				/>
				<polygon
					className="st9"
					points="139.7 306.3 142.2 306.3 142.2 298.6 138.6 298.6 139.7 306.3"
				/>
				<polygon
					className="st9"
					points="145.7 312.3 148.4 313.1 146.5 319.6 143.3 318.8 145.7 312.3"
				/>
				<polygon
					className="st9"
					points="139.5 324 143.5 322.6 147.1 329.7 143 331.3 139.5 324"
				/>
				<polygon
					className="st9"
					points="154.7 316.9 159.1 316.1 162.9 322.3 158.8 323.7 154.7 316.9"
				/>
				<polygon
					className="st9"
					points="149.8 329.7 153.1 329.7 152.3 336.8 149 336.5 149.8 329.7"
				/>
				<polygon
					className="st9"
					points="158.3 335.7 165.3 337.3 164.8 340 158.5 339.2 158.3 335.7"
				/>
				<path className="st7" d="M270.7,275s5.5,5,8,3.9l.5-.4.7-2.2" />
				<polyline
					className="st7"
					points="279.8 276.2 283.9 272.9 289.5 272.9 289.5 277.6 286.4 280.4 292.8 286"
				/>
			</g>
			<g id="docks">
				<g>
					<path
						className="st8"
						d="M270.7,275s4.9,5.7,8.7,3.8l.5-2.6,4.1-3.3h5.6c0,0,0,4.7,0,4.7l-3.1,2.8,6.1,5.4-4,4-2.6-2.2-.5,8.8,5.1,5.7,3.4-.9s2-2.8,2.2-4.3c.3-2.4,2-1.5,2.1-2.5.3-2.4,1.3-2.9,2.4-3,2.4-.1,5.5-1,6.3,4.8,0,0,.9,2.1,3,2.3,0,0,1.6,1.9-1.6,3l-4,6v4.6h-1.9l-.5-2.8-2.2-2.2s-4,2.6-4.5,3.8l-3.8,4.5-9.8-10.1-.4.5-10.1-.3v-20.4h-.6c0,0,.1-9.8.1-9.8h0Z"
					/>
					<g>
						<path
							className="st38"
							d="M289.9,301.9l3.6-1s2.1-2.9,2.4-4.6c.3-2.5,2.1-1.6,2.2-2.7.3-2.5,1.3-3.1,2.5-3.1,2.5-.1,5.8-1.1,6.6,5.1,0,0,.9,2.2,3.1,2.5,0,0,2,2.4-1.5,3.6l-3.9,6.2v4.3c-.1,0-1.5,0-1.5,0l-2.2-6.2-2.2,1.8"
						/>
						<g>
							<line
								className="st4"
								x1="289.9"
								y1="301.9"
								x2="290.3"
								y2="301.8"
							/>
							<path
								className="st10"
								d="M291,301.6l2.5-.7s2.1-2.9,2.4-4.6c.3-2.5,2.1-1.6,2.2-2.7.3-2.5,1.3-3.1,2.5-3.1,2.5-.1,5.8-1.1,6.6,5.1,0,0,.9,2.2,3.1,2.5,0,0,2,2.4-1.5,3.6l-3.9,6.2v3.5"
							/>
							<polyline
								className="st4"
								points="304.8 311.8 304.8 312.2 304.4 312.2"
							/>
							<polyline
								className="st4"
								points="303.8 312.1 303.5 312.1 303.3 311.8"
							/>
							<line
								className="st11"
								x1="303.1"
								y1="311.1"
								x2="301.5"
								y2="306.5"
							/>
							<polyline
								className="st4"
								points="301.3 306.2 301.2 305.9 300.9 306.1"
							/>
							<line
								className="st5"
								x1="300.4"
								y1="306.5"
								x2="299.6"
								y2="307.2"
							/>
							<line className="st4" x1="299.3" y1="307.4" x2="299" y2="307.6" />
						</g>
					</g>
					<path
						className="st38"
						d="M270.7,275s4.9,5.7,8.7,3.8l.5-2.6,4.1-3.3h5.6c0,0,0,4.7,0,4.7l-3.1,2.8,6.4,5.6-4,4-2.8-2.4-.5,8.8,5.1,5.7,3.4-.9s2-2.8,2.2-4.3c.3-2.4,2-1.5,2.1-2.5.3-2.4,1.3-2.9,2.4-3,2.4-.1,5.5-1,6.3,4.8,0,0,.9,2.1,3,2.3,0,0,1.6,1.9-1.6,3l-4,6v4.6h-1.9l-.5-2.8-2.2-2.2s-4,2.6-4.5,3.8l-3.8,4.5-9.8-10.1-.7.7h-1.6s0-.3,0-.3l-8.2-.2v-20.4h-.6c0,0,.1-9.8.1-9.8h0Z"
					/>
				</g>
				<polyline
					className="st9"
					points="274.3 300.6 274.3 289.3 278.3 289.3 278.3 288.1"
				/>
				<polyline
					className="st6"
					points="292.8 286 285.9 280.2 289.5 277.6 289.5 272.9 284.2 273 279.8 276.2 279.1 278.5"
				/>
				<polyline
					className="st6"
					points="285.8 288.3 285.4 296.4 290.5 302 292.6 301.2"
				/>
				<polyline
					className="st6"
					points="271.2 302.2 271.2 305.2 279.4 305.2"
				/>
				<path
					className="st6"
					d="M281.2,305.5l.8-.7,9.4,10.4,3.8-4.5s3-4.1,4.4-3.5c.2,0,2.3,1.9,2.3,1.9l.5,2.8"
				/>
			</g>
			<g id="BioLab">
				<path
					className="st12"
					d="M302.2,196.5l3.9-4.1-3.3-3.3-4.2,3.9-8.6-8.5h-7.9c0,0,0-5.3,0-5.3h-10c0,0,0,5.5,0,5.5h-7.9c0,0-17.1,16.4-17.1,16.4v18.6l14.3,13.3h10.6v-7.9s-9,0-9,0l9.8-9.6h0c1.2.7,2.6,1.1,4,1.1s2.8-.4,4-1.1h0l9.7,9.6h-8.8v7.9h11.1l13.6-13.3v-18.7l-4.6-4.5h0ZM275,200.3c-3.6.9-6.2,4.1-6.2,8s.5,3.4,1.5,4.7l-10.4,10.1-6.5-7v-11.7h1.3l12.7-12.6h7.6s0,4.3,0,8.5h0ZM300.9,216l-6.8,7.2-10.3-10.2c.9-1.3,1.5-3,1.5-4.7,0-3.8-2.6-7.1-6.1-8,0-4.3,0-8.7,0-8.6h7.8l12.5,12.6h1.4v11.8h0Z"
				/>
				<circle className="st35" cx="302.6" cy="192.6" r="1.6" />
			</g>
			<g id="Redstripes">
				<path
					className="st30"
					d="M293.8,250.2l1-3.2s-3.3-5.1,2.2-5.5,4.9,2.8,4.9,2.8l.4,9.4-.8,2.1-7,2.3s-2.2,0-2.4-2.8h-1.4c0,0-1.7-4.8.3-4.8l2.8-.3h0Z"
				/>
				<path
					className="st30"
					d="M302.4,236.1s1.3-3,2.2.2-2.2,2.4-2.2,2.4c0,0-2.6-1.6,0-2.5h0Z"
				/>
				<path
					className="st30"
					d="M243.9,231.6s3.3,1.6,4.1-1.3c0,0-.9-2-3.2-1.4,0,0-.9,1.2-1.4,1.2s.5,1.5.5,1.5Z"
				/>
				<path
					className="st30"
					d="M238.8,237.5l.9-1.2s2.5-.7,2.9.7c.4,1.3.8,2.4-1.8,2.8,0,0-2.4.5-2.4-.8s.4-1.4.4-1.4h0Z"
				/>
				<path
					className="st30"
					d="M245.1,243.3l-.8-1.8-2.2-.2-1.6,1.4-.8,3.4,1.9,2.4s2.1-1.8,3.5-5.1h0Z"
				/>
				<path
					className="st30"
					d="M252.7,242.2s-.6-5.4,2.4-2.2,1.5,6.4,1.5,6.4c0,0-.6,2.4-2.1,3,0,0-5.6,6.1-6,8.8-.4,2.7-2.4.2-2.4.2,0,0-3.3-2.4-.5-2.4,0,0-.2-1.9,1.3-2.2,0,0,3.2-3.4,3.6-3.2s3-5.6,2.2-8.4h0Z"
				/>
				<path
					className="st31"
					d="M250.2,272s2.3,1,2.3-1.3c0,0-1-2.9-1.8-2.9,0,0,.2-3.2-3.3-3.4,0,0-.8-2-2.9-1.9s-3.6-.2-3.4,1.5,9,8,9,8h0Z"
				/>
				<path
					className="st30"
					d="M249.5,276.7v22.4c0,0,3,2.6,3,2.6h4.7c0,0,2.4-2,2.4-2l-.2-19.3-5.8-2.4s-1.1-1.9-4-1.3h0Z"
				/>
				<polygon
					className="st30"
					points="277.8 287.1 282.4 285.1 285.2 287.9 284.3 289.6 281 291 277.5 289.1 277.8 287.1"
				/>
				<path
					className="st30"
					d="M240.9,311.3s4.4-5.3,6.2-2.9,0,2.9,0,2.9h-6.2Z"
				/>
				<path
					className="st37"
					d="M293.8,250.2l1-3.2s-3.3-5.1,2.2-5.5,4.9,2.8,4.9,2.8l.4,9.4-.8,2.1-7,2.3s-2.2,0-2.4-2.8h-1.4c0,0-1.7-4.8.3-4.8l2.8-.3h0Z"
				/>
				<path
					className="st14"
					d="M302.4,236.1s1.3-3,2.2.2-2.2,2.4-2.2,2.4c0,0-2.6-1.6,0-2.5h0Z"
				/>
				<path
					className="st13"
					d="M243.9,231.6s3.3,1.6,4.1-1.3c0,0-.9-2-3.2-1.4,0,0-.9,1.2-1.4,1.2s.5,1.5.5,1.5Z"
				/>
				<path
					className="st16"
					d="M238.8,237.5l.9-1.2s2.5-.7,2.9.7c.4,1.3.8,2.4-1.8,2.8,0,0-2.4.5-2.4-.8s.4-1.4.4-1.4h0Z"
				/>
				<path
					className="st19"
					d="M245.1,243.3l-.8-1.8-2.2-.2-1.6,1.4-.8,3.4,1.9,2.4s2.1-1.8,3.5-5.1h0Z"
				/>
				<path
					className="st15"
					d="M252.7,242.2s-.6-5.4,2.4-2.2,1.5,6.4,1.5,6.4c0,0-.6,2.4-2.1,3,0,0-5.6,6.1-6,8.8-.4,2.7-2.4.2-2.4.2,0,0-3.3-2.4-.5-2.4,0,0-.2-1.9,1.3-2.2,0,0,3.2-3.4,3.6-3.2s3-5.6,2.2-8.4h0Z"
				/>
				<path
					className="st32"
					d="M250.2,272s2.3,1,2.3-1.3c0,0-1-2.9-1.8-2.9,0,0,.2-3.2-3.3-3.4,0,0-.8-2-2.9-1.9s-3.6-.2-3.4,1.5,9,8,9,8h0Z"
				/>
				<path
					className="st17"
					d="M249.5,276.7v22.4c0,0,3,2.6,3,2.6h4.7c0,0,2.4-2,2.4-2l-.2-19.3-5.8-2.4s-1.1-1.9-4-1.3h0Z"
				/>
				<polygon
					className="st18"
					points="277.8 287.1 282.4 285.1 285.2 287.9 284.3 289.6 281 291 277.5 289.1 277.8 287.1"
				/>
				<path
					className="st21"
					d="M240.9,311.3s4.5-5.3,6.2-2.8,0,2.9,0,2.9h-6.2c0,0,0,0,0,0Z"
				/>
				<path
					className="st30"
					d="M214.5,374.3s4.8-12.1,15-11.9c10.1.2,6.3-12.3,4-14s-12.2-4.3-19.3-.9-4.6,4.6-9.3,7.5c-.9.5-1.2,2.3.2,4.4s1.2,3.8-1.1,5.9c-2.3,2.1-2.4,2.3.1,4.4,0,0,2.5,4.6,2.5,5.9s4.7,4.1,7.9-1.3h0Z"
				/>
				<path
					className="st30"
					d="M247.7,354.8s-4.7-.1-6.2,5.4,7.8,5,8.6,4.3,4.7-7.3-2.4-9.6h0Z"
				/>
				<path
					className="st30"
					d="M273.3,371.6s14.6-1.4,13.9,8.1c-.8,9.5-16.8,3.2-16.8,3.2,0,0-9.1-8.8,3-11.2h0Z"
				/>
				<path
					className="st30"
					d="M280.3,357.7s2.2-.4,2.8,0,2.8-3.7,6.4-2.8,7.4,1.3,9.3,1,11,2.6,13.9,11.6c2.8,9-7.4,11.6-7.4,11.6,0,0-2.2,1.8-2,3.7s-3,2-5.5-2.4-4.3-8.8-9.9-9.3c-5.7-.4-12.7-5.6-7.6-13.3h0Z"
				/>
				<path
					className="st30"
					d="M227.6,367.9s-6.9.3-9.2,7.6,5,8.7,10.1,5.6c0,0,2.7-7.2,2.6-8.7s-.4-3.6-3.6-4.5h0Z"
				/>
				<path
					className="st30"
					d="M237.4,367.7s1.5-.2,3.3.9,4.4,1.3,8.5.4c4.2-.9,7.8,1.5,6.1,5.9,0,0-4.9,3-6.8,3.5s-5.1,1.5-6.2,2.6-5.7.1-7.1-5.4,2.2-8,2.2-8h0Z"
				/>
				<path
					className="st30"
					d="M196.1,386.7s6.9.5,8.9,0,7.8-1.8,11.2.1,10.9-.4,10.9-.4c0,0,10.4.1,12.6.1s12.2-5.4,12.2-5.4c0,0,3.3-1.5,12.2,3s20.2,6.4,20.2,6.4c0,0,3.4.2,5.2-.8s3.3-1.4,4.9-1.3,3.7-3,6.4-1.2,6.7,5.2,7,6,1.4,2.5-1.2,5.7c-2.6,3.2-5.4,4-8.5,8.2,0,0-10.6.8-12.1,1.8-1.5,1-7.1-1.5-7.1-1.5l-8.4,1.1s-2.7,1.5-5.1-1.9h-5.5c0,.1-2.4-.8-3.1-1.9s-2.2-3.3-8.9-.8c-6.8,2.5-7.6,4.7-17.6,3.3l-5.6,2.7s-3.5,1.9-8.9.7h-3.9s-2.3-1-3.7,0-15.1-4-12.2-23.9h0Z"
				/>
				<path
					className="st20"
					d="M214.5,374.3s4.8-12.1,15-11.9c10.1.2,6.3-12.3,4-14s-12.2-4.3-19.3-.9-4.6,4.6-9.3,7.5c-.9.5-1.2,2.3.2,4.4s1.2,3.8-1.1,5.9c-2.3,2.1-2.4,2.3.1,4.4,0,0,2.5,4.6,2.5,5.9s4.7,4.1,7.9-1.3h0Z"
				/>
				<path
					className="st23"
					d="M247.7,354.8s-4.7-.1-6.2,5.4,7.8,5,8.6,4.3,4.7-7.3-2.4-9.6h0Z"
				/>
				<path
					className="st24"
					d="M273.3,371.6s14.6-1.4,13.9,8.1c-.8,9.5-16.8,3.2-16.8,3.2,0,0-9.1-8.8,3-11.2h0Z"
				/>
				<path
					className="st29"
					d="M280.3,357.7s2.2-.4,2.8,0,2.8-3.7,6.4-2.8,7.4,1.3,9.3,1,11,2.6,13.9,11.6c2.8,9-7.4,11.6-7.4,11.6,0,0-2.2,1.8-2,3.7s-3,2-5.5-2.4-4.3-8.8-9.9-9.3c-5.7-.4-12.7-5.6-7.6-13.3h0Z"
				/>
				<path
					className="st28"
					d="M227.6,367.9s-6.9.3-9.2,7.6,5,8.7,10.1,5.6c0,0,2.7-7.2,2.6-8.7s-.4-3.6-3.6-4.5h0Z"
				/>
				<path
					className="st25"
					d="M237.4,367.7s1.5-.2,3.3.9,4.4,1.3,8.5.4c4.2-.9,7.8,1.5,6.1,5.9,0,0-4.9,3-6.8,3.5s-5.1,1.5-6.2,2.6-5.7.1-7.1-5.4,2.2-8,2.2-8h0Z"
				/>
				<path
					className="st22"
					d="M196.1,386.7s6.9.5,8.9,0,7.8-1.8,11.2.1,10.9-.4,10.9-.4c0,0,10.4.1,12.6.1s12.2-5.4,12.2-5.4c0,0,3.3-1.5,12.2,3s20.2,6.4,20.2,6.4c0,0,3.4.2,5.2-.8s3.3-1.4,4.9-1.3,3.7-3,6.4-1.2,6.7,5.2,7,6,1.4,2.5-1.2,5.7c-2.6,3.2-5.4,4-8.5,8.2,0,0-10.6.8-12.1,1.8-1.5,1-7.1-1.5-7.1-1.5l-8.4,1.1s-2.7,1.5-5.1-1.9h-5.5c0,.1-2.4-.8-3.1-1.9s-2.2-3.3-8.9-.8c-6.8,2.5-7.6,4.7-17.6,3.3l-5.6,2.7s-3.5,1.9-8.9.7h-3.9s-2.3-1-3.7,0-15.1-4-12.2-23.9h0Z"
				/>
				<path
					className="st30"
					d="M259.3,360.8s3.4-1.3,5.8-.1,2.9,1.5,2.9,1.5c0,0,1.6,1.9,2,2.2s.1,2.9.1,2.9l-3.8,3.9s-4.2.3-5.2-.7-2.3-2.8-2.3-2.8c0,0-1.2-5,.4-6.8h0Z"
				/>
				<path
					className="st27"
					d="M259.3,360.7s3.4-1.3,5.8-.1,2.9,1.5,2.9,1.5c0,0,1.6,1.9,2,2.2s.1,2.9.1,2.9l-3.8,3.9s-4.2.3-5.2-.7-2.3-2.8-2.3-2.8c0,0-1.2-5,.4-6.8h0Z"
				/>
				<path
					className="st30"
					d="M418.9,208.9s.4-3.6,1.9-4,3.6,0,5.4,2.2,3.7,6.4,3.8,7.7.6,3.8-.3,5.1-1.7,2.9-1.8,3.9-1,3.6-2.1,5.2-1.3,2.4-1.3,2.4c0,0,.1,2.3-.8,3.8s-1.4,2.1-2.6,2-2.6-.5-2.9-1.7,0-2.4-2.1-2.5-5.9-7.8-5.8-9.2,1.9-12.3,3.4-13.5l2.5-1.4h2.9c0,0,0,0,0,0Z"
				/>
				<path
					className="st26"
					d="M418.9,208.9s.4-3.6,1.9-4,3.6,0,5.4,2.2,3.7,6.4,3.8,7.7.6,3.8-.3,5.1-1.7,2.9-1.8,3.9-1,3.6-2.1,5.2-1.3,2.4-1.3,2.4c0,0,.1,2.3-.8,3.8s-1.4,2.1-2.6,2-2.6-.5-2.9-1.7,0-2.4-2.1-2.5-5.9-7.8-5.8-9.2,1.9-12.3,3.4-13.5l2.5-1.4h2.9c0,0,0,0,0,0Z"
				/>
				<path
					className="st30"
					d="M188.3,128.9s-.3-2.3,1.9-2.1,4.6.4,5.1-2.8-.8-3.2-1.4-3.9-1.3-6.4-5.7-6.2c-4.4.2-5.4,1.6-5.9,2s-1.4,1.9-2.3,2.6-2.4,4.7-2.4,4.7c0,0-3.3,5.9-3.1,9s1.7,3.2,2.4,3.2,2.4.4,3.7,1.1,4.2,0,5.8-2.3,2.6-3.2,1.8-5.4h0Z"
				/>
				<path
					className="st33"
					d="M188.3,128.9s-.3-2.3,1.9-2.1,4.6.4,5.1-2.8-.8-3.2-1.4-3.9-1.3-6.4-5.7-6.2c-4.4.2-5.4,1.6-5.9,2s-1.4,1.9-2.3,2.6-2.4,4.7-2.4,4.7c0,0-3.3,5.9-3.1,9s1.7,3.2,2.4,3.2,2.4.4,3.7,1.1,4.2,0,5.8-2.3,2.6-3.2,1.8-5.4h0Z"
				/>
				<polyline className="st37" points="288.8 290 286 287.6 285.2 287.9" />
			</g>
		</SVGOverlay>
	),
	terminus_prison: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
			<defs>
				<style>
					{globalStyle}
					{` .st0, .st1, .st2, .st3, .st4, .st5 {
        fill: none;
      }

      .st6, .st7 {
        fill: #363635;
      }

      .st8 {
        fill: url(#_10_lpi_60_2-10);
      }

      .st8, .st1, .st9, .st3, .st4, .st5, .st10, .st11, .st12, .st13, .st14, .st15, .st16, .st17, .st18, .st19, .st20, .st21, .st7 {
        strokeMiterlimit: 10;
      }

      .st8, .st9, .st3, .st4, .st5, .st10, .st11, .st12, .st13, .st14, .st15, .st16, .st17, .st18, .st20, .st21, .st7 {
        stroke: #6b6b6b;
      }

      .st1, .st19 {
        stroke: #7c2728;
        strokeWidth: 1.6px;
      }

      .st22, .st21 {
        fill: #2c2c2c;
      }

      .st2 {
        stroke: #7b4848;
        strokeWidth: 4.3px;
      }

      .st23 {
        fill: #565555;
      }

      .st9 {
        fill: #565656;
      }

      .st9, .st3, .st5, .st20, .st21, .st7 {
        strokeWidth: .5px;
      }

      .st3 {
        stroke-dasharray: 0 0 .7 .7;
      }

      .st4 {
        strokeWidth: .8px;
      }

      .st10 {
        fill: url(#_10_lpi_60_2-3);
      }

      .st11 {
        fill: url(#_10_lpi_60_2-2);
      }

      .st12 {
        fill: url(#_10_lpi_60_2-6);
      }

      .st13 {
        fill: url(#_10_lpi_60_2-7);
      }

      .st14 {
        fill: url(#_10_lpi_60_2-5);
      }

      .st15 {
        fill: url(#_10_lpi_60_2-4);
      }

      .st16 {
        fill: url(#_10_lpi_60_2-9);
      }

      .st17 {
        fill: url(#_10_lpi_60_2-8);
      }

      .st18 {
        fill: url(#_10_lpi_60_1);
      }

      .st19 {
        fill: #011833;
      }

      .st24 {
        fill: #6b6b6b;
      }

      .st20 {
        fill: url(#_10_lpi_60_);
      } `}
				</style>
				<pattern id="_10_lpi_60_" data-name=" 10 lpi 60 " x="0" y="0" width="72" height="72" patternTransform="translate(-19666.1 -5974.2) rotate(-46) scale(.2)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_1" data-name=" 10 lpi 60 " patternTransform="translate(-21265.5 -6452.8) rotate(-46) scale(0)" xlinkHref="#_10_lpi_60_" />
				<pattern id="_10_lpi_60_2-2" data-name=" 10 lpi 60 2-2" x="0" y="0" width="72" height="72" patternTransform="translate(-21269.6 -6447) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-3" data-name=" 10 lpi 60 2-3" x="0" y="0" width="72" height="72" patternTransform="translate(-21270.5 -6448.2) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-4" data-name=" 10 lpi 60 2-4" x="0" y="0" width="72" height="72" patternTransform="translate(-21270.5 -6448.2) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-5" data-name=" 10 lpi 60 2-5" x="0" y="0" width="72" height="72" patternTransform="translate(-21270.5 -6448.2) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-6" data-name=" 10 lpi 60 2-6" x="0" y="0" width="72" height="72" patternTransform="translate(-21270.5 -6448.2) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-7" data-name=" 10 lpi 60 2-7" x="0" y="0" width="72" height="72" patternTransform="translate(-21270.5 -6448.2) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-8" data-name=" 10 lpi 60 2-8" x="0" y="0" width="72" height="72" patternTransform="translate(-21265.4 -6453) rotate(-46) scale(0)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-9" data-name=" 10 lpi 60 2-9" x="0" y="0" width="72" height="72" patternTransform="translate(41 -15519.3) scale(1 -1)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
				<pattern id="_10_lpi_60_2-10" data-name=" 10 lpi 60 2-10" x="0" y="0" width="72" height="72" patternTransform="translate(41 -15519.3) scale(1 -1)" patternUnits="userSpaceOnUse" viewBox="0 0 72 72">
					<g>
						<rect className="st0" width="72" height="72" />
						<g>
							<rect className="st0" width="72" height="72" />
							<g>
								<rect className="st0" width="72" height="72" />
								<g>
									<line className="st2" x1="71.8" y1="68.4" x2="144.2" y2="68.4" />
									<line className="st2" x1="71.8" y1="54" x2="144.2" y2="54" />
									<line className="st2" x1="71.8" y1="39.6" x2="144.2" y2="39.6" />
									<line className="st2" x1="71.8" y1="25.2" x2="144.2" y2="25.2" />
									<line className="st2" x1="71.8" y1="10.8" x2="144.2" y2="10.8" />
									<line className="st2" x1="71.8" y1="61.2" x2="144.2" y2="61.2" />
									<line className="st2" x1="71.8" y1="46.8" x2="144.2" y2="46.8" />
									<line className="st2" x1="71.8" y1="32.4" x2="144.2" y2="32.4" />
									<line className="st2" x1="71.8" y1="18" x2="144.2" y2="18" />
									<line className="st2" x1="71.8" y1="3.6" x2="144.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-.2" y1="68.4" x2="72.2" y2="68.4" />
									<line className="st2" x1="-.2" y1="54" x2="72.2" y2="54" />
									<line className="st2" x1="-.2" y1="39.6" x2="72.2" y2="39.6" />
									<line className="st2" x1="-.2" y1="25.2" x2="72.2" y2="25.2" />
									<line className="st2" x1="-.2" y1="10.8" x2="72.2" y2="10.8" />
									<line className="st2" x1="-.2" y1="61.2" x2="72.2" y2="61.2" />
									<line className="st2" x1="-.2" y1="46.8" x2="72.2" y2="46.8" />
									<line className="st2" x1="-.2" y1="32.4" x2="72.2" y2="32.4" />
									<line className="st2" x1="-.2" y1="18" x2="72.2" y2="18" />
									<line className="st2" x1="-.2" y1="3.6" x2="72.2" y2="3.6" />
								</g>
								<g>
									<line className="st2" x1="-72.2" y1="68.4" x2=".2" y2="68.4" />
									<line className="st2" x1="-72.2" y1="54" x2=".2" y2="54" />
									<line className="st2" x1="-72.2" y1="39.6" x2=".2" y2="39.6" />
									<line className="st2" x1="-72.2" y1="25.2" x2=".2" y2="25.2" />
									<line className="st2" x1="-72.2" y1="10.8" x2=".2" y2="10.8" />
									<line className="st2" x1="-72.2" y1="61.2" x2=".2" y2="61.2" />
									<line className="st2" x1="-72.2" y1="46.8" x2=".2" y2="46.8" />
									<line className="st2" x1="-72.2" y1="32.4" x2=".2" y2="32.4" />
									<line className="st2" x1="-72.2" y1="18" x2=".2" y2="18" />
									<line className="st2" x1="-72.2" y1="3.6" x2=".2" y2="3.6" />
								</g>
							</g>
						</g>
					</g>
				</pattern>
			</defs>
			<g id="Ocean">
				<path className="st19" d="M356.6,46.8l44.9,48.6,13.5,31.8,59.5,65.3-4.9,27.5-27.1,32.9,8.7,30.8-36.8,89.6-135.8,66.4-80.1.5-42.2-50.7-36.8-4.9-42.2-71.2,37.3-102-2.7-37.8,13-21.6,1.6-29.2,23.3-37.2s57.4-27,97.9-31.3l108.8-7.6h0Z" />
			</g>
			<g id="MapBorder">
				<path className="st1" d="M356.6,46.8l44.9,48.6,13.5,31.8,59.5,65.3-4.9,27.5-27.1,32.9,8.7,30.8-36.8,89.6-135.8,66.4-80.1.5-42.2-50.7-36.8-4.9-42.2-71.2,37.3-102-2.7-37.8,13-21.6,1.6-29.2,23.3-37.2s57.4-27,97.9-31.3l108.8-7.6h0Z" />
			</g>
			<g id="Island">
				<path className="st22" d="M182,191.7s1.9-2.6,2.9-2.2,1.9-1.9.7-2,2.8-2.4,5.9.2-2.2-3.5,2.4-3.1,4.6,2.9,4.6,2.9c0,0,2.2-.6,2.8-2.4s1.7-.7.6,3.3-.2,9.2-.2,9.2c0,0,1.1,2.9-1.1,3.9,0,0-1.7,5.4-7.2,4.2,0,0,.7,4.4-.7,4.4,0,0-1.1-2.8-3.7-2.4,0,0-2.9-.9-4.8,2.2,0,0-2.6-.9.2-3.3,0,0-2.8-2,.2-4.2,0,0-1.1-2.9-2-3.1s-.6-7.6-.6-7.6h0Z" />
				<path className="st22" d="M194.2,223.3s-2.2-5.5,3.9-6.6c0,0,2.6-1.1,3.7,4.2,0,0-.2-.6.6-4.1,0,0,5.4-3.9,5.4,1.9,0,0,6.1-.7,2.9,2.9l2-.6s-2,3.9,2.4,7.9l-1.5.7,1.1,1.5s5.5,6.3.6,8.1c0,0-5.2-1.5-2.4,3.1,0,0,.4,4.4-1.7,4.4s-3.7-.7-5.7-.4-4.1-1.7-1.9-2.4-2.2-1.5-3.1-.2-6.1-1.5-6.1-1.5c0,0-2.8-2.8.4-3.7,0,0,1.1-3.1-1.7-3.1,0,0-4.2-.4-2.8-2.6,0,0-1.1-2.8-3.7-3.1,0,0,2.2-2.9,4.8-3.5,0,0,.4-3.5,2.8-3.1h0v.2Z" />
				<path className="st22" d="M204.6,285.5s6.3-4.1,9.2-2.6c0,0,2.4-.5,2.8-2s.7-3.5,2.8-3.9.6-1.7-.9-2.2.7-2.8-2.8-1.5l-.4-5.5-1.3,2.8s-1.1-.7-3.5,3c0,0-2.8-2-3.5-.4,0,0-6.3-1.5-3.7,2,0,0,1.3.7,1.1,2s.2,2.4,2.4,1.1.7,3.7-.4,4.1-1.9,3.1-1.9,3.1h0Z" />
				<path className="st22" d="M195.9,311.3s-.7-6.5-7.8-5.4-4.2,8.9-4.2,8.9l1.5,2.6s-3.5,5.5.6,5.2.7,1.7.7,1.7c0,0,1.9.7,2.8,2.4s3.5-2.4,3.5-2.4c0,0,1.3,1.5,2.8,1.1s2.8-2.6,1.1-3,.7-1.7,2-1.5,2.6-3.5.4-4.1.6-1.9.6-1.9c0,0,1.5-2.6-3.9-3.7h-.1Z" />
				<path className="st22" d="M353.3,310.2l-3,3.5s-3.9,1.1-5,3.1-4.6-.5-3.9-3.1-1.7-1.1-1.7-1.1c0,0-1.3-1.5-.4-2.2s-.4-4.1-2-3.5-.5-1.9-.5-1.9c0,0-2.4-1.9,0-2.8,0,0,.7-2.4.9-3.9s2.8.7,2.8.7c0,0,.9-1.3-1.5-2s2-2.8,2-2.8c0,0,.9-3.5,3-.9,0,0,3-2,5-.5,0,0,1.9-1.3,3.3,1.9l1.5.4-.5,15.1h0Z" />
				<path className="st22" d="M353.9,223.5s-1.1-2.4-4.1-.4c0,0-3.7.2-5.2-1.3s-.2,3.5,2.4,4.6l-1.5,1.5,1.3,1.9-1.5,1.7s-2.6,1.9,2.4,1.1c0,0,2.8,2,5.2-.6,0,0,.9-9,.9-8.5h.1Z" />
				<path className="st22" d="M339.3,161.6s2.2,2,3.1,4.4,3.7,2.6,3.7,2.6c0,0-1.7,2.9-4.1,2.8s.4,2,.4,2l-1.5,1.1s-2,3.7-1.1,5.4-5-5.2-9-2.4c0,0-1.3-2.6-2.8-2.2s-3.1-2.2-2.4-3.3c0,0-1.9-2-1.1-2.9,0,0-2.2-1.3-2-2.4s-4.6-3.3,2.8-5h14Z" />
				<path className="st22" d="M239.7,353.3s-12.9-5.1-16.1-4.1-16.3,16.4-16.3,16.4c0,0-7.4,7.5-8.1,9.2s-4.5,2.2-4.1,5.9-3.4,26.4,9.5,29.1,45.4-8,47-7c1.7,1,48.9,2.4,55.9-8.4,0,0,3.6-3.4,3.9-5.1,0,0,3-2.4,3.4-3.6,0,0,1-1,1.4-1.3s-.3-6.2-2.9-6.5c0,0-2.9-13.5-9.2-16.8-6.3-3.3-22.6-1.3-26.9,1.5s-5.2,7.3-15.6,4c0,0-7.4-2.1-7.7-9.1s-10.4-3.9-10.4-3.9c0,0-2.8.3-3.9-.2h.1Z" />
				<path className="st22" d="M205.8,356.2s-3.9-2.4-6.5-1.2-.3,2.9-.3,2.9c0,0-2.9,2.3-2.1,2.8.8.4,4.4-2.2,4.4-2.2,0,0-2.1,2.7-.7,2.9s6.1-1.8,6.1-1.8l-.9-3.3h0Z" />
				<path className="st22" d="M234.4,406.3s-3.5,4.8-.6,5.5c0,0,1.4,3.8,4,.3s5-.1,5-.1c0,0,4.2,1.3,5.9-2.2s-3.1-1.7-3.1-1.7l-.6-3.5-10.6,1.7h0Z" />
				<path className="st22" d="M261.7,406s4.1,5.6,5.8,6.5,3.2-.8,3.3-1.7,3.5-5.3,4.4-4.9,3.6,3,3.6,3.8,2.2-.4,2.4.1,1.9.7,2.8-1,6.1-2.1,6.2-.7,1,3,2.5,2.9,3.5-2.1,3.2-3.9-27.4-5.2-34.3-1.2h.1Z" />
				<path className="st22" d="M313.1,371.9s3.5-3.9,3.2-5.3-4.4-1.7-4.4-1.7l1.2,7h0Z" />
				<path className="st22" d="M212.2,410.4s1.4,3.9,2.2,3.8,1.4-2.8,1.4-2.8c0,0-.6,2.7.8,2.5s3.9-3.5,3.9-4.3-8.3.8-8.3.8h0Z" />
				<path className="st22" d="M403.7,217.1s-2.5-1-2.7-2.5c0-.6-.5-1.4-1.1-2s.2-.7-.6-1.1-.2-4.4-1.3-5c-.5-.3-1,.2-1.2.1-1.3-.5-1.5-.5-2.5.6-1.4,1.4-4.4,6.1-6.2,9.8-1,2-1.4,3.9-1.4,4.9,0,2.9-.3,6.1,1.4,7,1.5.8,1.5,2.3,2.1,2.6.3.1,1.9,0,3.8-1.2,1.5-1,3.3-2,5.2-3,2.6-1.4,5.7-7.9,4.6-10.2h0Z" />
				<path className="st22" d="M404.4,225.3s.5-2,.6-2.7c0-.5-.1-1.5-.1-1.5,0,0,0-3.1,1-3.4s2.5-2.2,3.1-3.6,8.4-16.4,12.6-17.1,8.3-.7,10,3.9.7,6,1.9,7.5,2.6,6.5,2,7.1-.3,3.1-.4,3.6.1,1.6-1.1,3.8c0,0-.5.9-.4,1.9s-.4,4.4-.9,4.8-3.3,3.4-3.3,6.6-.6,5.6-3,7-4,2.1-6.2,2.1-1.5.2-3.2.5-6.1-1.1-7.5-2.7-2.2-3-2.5-4.3-1.5-3.8-1.9-4.6-1.8-6.3-.9-8.9h.2Z" />
				<path className="st22" d="M404,221.8s.1-.2.5-.2,0-.5-.4-.4-.5.6-.2.6h.1Z" />
				<path className="st22" d="M433.4,225.8s1.2-.4,2-.3,1.1-1.1.9-1.1-1.8-.2-.7-1.1-.2-1-.7-1-1.5-.6-1.5-.6l-.2,4.1h.2Z" />
				<path className="st22" d="M413.7,206.7s-2.4,0-2.6.5-.4,3-.2,3.4,2.8-3.9,2.8-3.9h0Z" />
				<path className="st3" d="M409.5,212.9s-1.9,4.9-4.1,4.6c-2.2-.3-4-1.4-4.3-2.6-.3-1.1-.6-1.8-1.1-2.2-.6-.4.2-.9-.7-1.2s-.4-4.6-1.3-5.1-1.1.3-1.6,0c-1.1-.7-2.2.4-3.3,1.8-.9,1.2-1.9,3-4.7,7.6-3,5-1.8,9.8-1.7,10.6s.4,2.2,1.3,2.7c1.5.8,1.4,2.2,1.8,2.3.9.2,3.4-.4,5.5-2.2.4-.3,3.7-1.1,6.6-4.2,0,0,3-1.6,2.3,1.4s1,7.6,1,7.6c0,0,1.7,3.2,2.2,5.6s3.1,4,3.6,4.4c1.4,1,4.5,2,6.4,1.5s2.5-.3,4.3-.5,7.7-2.3,7.7-7,1.2-6.4,2.7-7.8c1.5-1.4,1.6-4.6,1.5-5.7s.9-2.5,1.3-3.8-.3-3.4.6-5.2-1.6-6.2-2.5-7.9c-.6-1.2-.3-2.9-.7-4.4s-1.8-4.9-3.4-5.7-6.9-1.5-9.7.5-9.1,13.7-9.9,15h.2Z" />
				<path className="st22" d="M221.1,111.1l-3.4-2.2s-2.6-.7-4.6-.3c-5.6,1.1-8.1-.2-9.8-.2s-3.2-.3-3.7-.7c-.9-.5-3.5-2.1-6.4-.4,0,0-1.1,0-2.1,0-1.4,0-3.3,1.1-4.8,1.6s-3.7.7-4.4,1.6c-.5.6-2,1.1-2,1.1,0,0-2.7.5-4.6,4s-4,5.4-3.4,8.6-1,6.5-1.1,8c-.1,2,1.5,3.4,2.5,4.7.5.6.6,1.8,1.2,2.2,1.6,1,1.3,1.5,2.2,2.2,1.7,1.4,3.3,2,4.2,3.3s3.7.6,4.6.8,3.8,1.1,5.1.9,4.3,0,7.3-2.7c3.5-3.2,1.5-9.8,1.3-12.4s1.2-2.3.7-4.8c-.3-1.6,4-3.5,4.3-4.2,1.3-3.9,4.1-5.1,7.2-6.6,2.4-1.2,2.9-.3,3.9-1.2s2.4-2.3,3.1-2.7c1.3-.6,2.8-.9,2.8-.9h0v.2Z" />
				<path className="st22" d="M226.2,110.8s.3-2.8,1.8-3.5,2.1-1.9,2.1-1.9c0,0,.3-.8,1.6-1.1s1.8-.7,3-.8,5.9.8,4.1,4.3c-1.5,3-5.6,3.6-8.8,3.2-2.2-.3-3.9-.2-3.9-.2h0Z" />
				<path className="st3" d="M229.9,105.3s-1.4,1.8-3.7,2.8c-1.9.8-4.8,1.3-8.6.8-4.6-.7-5.2,0-6.9,0-2.8.2-4.2.2-6.2-.3s-3.5.2-6.1-1.4c-2.7-1.7-5.1.3-6,.2-1.4-.2-4.2.7-6.2,1.6-2,1-3.8.6-4.6,1.7-.3.3-1.8.9-3.4,1.6-1.7.6-5.6,6.9-6.3,8.3s0,6.5-.3,7.9c-.4,1.4-2.1,5.4.8,7.7,1.6,1.2,1.1,3,2.8,3.8.9.5,1.1,2.1,2.8,2.5s2.6,3.7,5.3,3.2c3.4-.6,5.4,1.4,6.6,1.1,1-.2,2.9-.7,4-.5s5.6-3.4,5.9-5.7c.6-4.7-1.2-9.9-.3-11.1,1-1.3.4-2.9.6-3.4.8-1.6,1.7-1.8,3.3-3s1.6-3.5,3.5-4.8,4.8-3.2,7.2-3.3c1.9,0,2.4-2.3,4.3-3.3,2.5-1.3,11.3-.8,14.5-.7,2.8,0,6.4-2.8,6.4-4.7s-2.4-3.9-5.6-3-3.7,1.8-3.7,1.8h-.1Z" />
				<path className="st22" d="M381.8,282.9l1.6-5.4-.3-2.7,3.2.5.5-1.3h3v2.7s7,3.2.3,8.9v2.4l-3.5.3v-3h-1.9v2.4l-1.6-4-1.3-.8h0Z" />
				<path className="st22" d="M366.2,198.8c.4,0,4.9,4.5,7.4-.8,0,0,5.1.8,6-4.1,0,0,6.5.1-1.3-4.4,0,0-1.3-3.8-3.5-4.4,0,0-1.1-2.4-2.5-2.3s-.2,1.8-.2,1.8l-2-.2s1.4-5.1-2.9-2.8c0,0-3.7-.6-3,1.9,0,0,.6,1.2-5.2.7,0,0,4.1,3.6,1.9,4.2s-3.6,1.8-3,2,2.9,0,2.1,3.3c0,0-3.5,1,.5,2.1,0,0,1.2,3.2,5.7,2.9h0Z" />
				<path className="st22" d="M325.3,161.6s-1.1-3.1,2.2-3.4-.1-2.6-.8-2.6-.2-2.5,3-.8,8.1,5.9,8.4,7.9-12.7-1-12.7-1h-.1Z" />
				<path className="st22" d="M320,117.8s-3.5,1-1.4,2.1,1.4,1.8,2.2,2.2,3,1.2,7.1.7.4,1.2.4,1.2c0,0-.5,2.2.5,3.1.9.9-1.9,1.2-1.9,1.2,0,0-.8,1.5,4.4.7,0,0,.4,3.5,1.8,1.2s1.2-2.1,4.8-2.1,2-5,2-5c0,0,2.3.9,1.4-3.8,0,0,1.4-.6,0-2.7,0,0-2.1-3.2-.5-3.7,0,0,2.7-3.6-4.9-4.3,0,0-2.7-1.4-2.6-2.9s-5.5-1.7-4.6,1.2c0,0-2.9.7-2.4,4.6,0,0-1.3,1.7-2.7,1.9s-3.7,1.9-3.4,4.3h-.2Z" />
				<path className="st22" d="M316.3,120.8s2.8-.6,2.2,3.9c0,0-2.3,2.1-4.1.3s1.5-2.4,1.5-2.4l.4-1.8h0Z" />
				<path className="st22" d="M277.9,101.1s15.9.2,13.6,9.8c0,0,5.4-1.1,4.5,3.4s-6.8.4-6.8.4l.5,3.4s-4.1-.9-4.1-2-2-4.3-5.4-2.2-3.6-3.9,0-4.1.2-8.4-2.3-8.8h0Z" />
				<path className="st22" d="M306.2,82.3s8.2.5,8.2-4.1c0,0,3.9,1.6,1.4,4.1s3.8,1.4,4.7,1.2,2.9,5.6-4.8,3.4c0,0-1.2,3.6,1.1,4.1s1.2,4.1-7.9,3.9-3.6-7.3-3.6-7.3l.9-5.4h0Z" />
				<path className="st22" d="M323.3,83s2.7,1.4,1.6,2-2.7-.7-1.6-2Z" />
				<path className="st22" d="M307.5,76.6s3.2,1.4,3.4.5,0,3.2-2.7,2.9-.7-3.4-.7-3.4h0Z" />
				<path className="st22" d="M154,212.5s4.7,2.5,8.2,0,1.1,8.6-.4,9,0,3.6,0,3.6c0,0-6.1-.7-7.9.4s-6.8-3.9-3.2-6.4c0,0-.2-3.6,1.6-4.3s-.5-2,1.6-2.1h0v-.2Z" />
				<path className="st22" d="M228.9,327.7s2.9-3.4,6.6-.7,2.7,4.8.4,6.5-12.4-1.1-6.8-4.5l-.2-1.2h0Z" />
				<path className="st22" d="M281.2,330.8s2-3.2,2.3-4.8,1.8-3.2,5.5-2.5,5.2-2.7,9.7-.7,6.3,9.1-.4,12.2c0,0-2,4.1-6.5,2.9,0,0-1.4-.4-4.1,1.2s-8.1-7.5-6.6-8.2h.1Z" />
				<path className="st22" d="M335.4,344.8s2-5,3.4-5.4c0,0,.2-2.7,2.3-1.6s3.4.5,3.4.5c0,0,.5-1.1,2.7-.2s4.1.4,4.1.4c0,0-.4,2.9-2.5,3.2s-.9,5-.9,5c0,0-1.6,2.9.2,3.4s-.4,3.6-5.2,2.3c0,0-3,.9-3.6,2.7s-9-2.7-4.7-3.9c0,0-2-2.9,0-3.6l.7-2.9h.1Z" />
				<path className="st0" d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.3Z" />
				<path className="st0" d="M273.1,233.1c-.6-.1-.6-2.5-.6-2.5v3.2c-.1,0-3.1,0-3.5.1s.5,1.4-.3,1.4-1.5-1.4-1.5-1.4h-6.1l2,2.3s1.3,1.1,1.1,1.8c-.3.6.8,1.8,1.3,1.9.5,0,1.3,1.3,1.3,1.3,1,.3,1.3.9,1.3.9.5,2,2.4.5,1.9-.4s1.6-1.8,1.6-1.8c1.3-.5,2.2-.6,2.2-.6.1-.6-.5-2.6-.5-2.6,0,0,.4-3.4-.3-3.5h.1Z" />
				<path className="st0" d="M243.7,213.6c2.2-1.1-.7-2.9-.7-2.9l1.1-2.3s-1.3-3.7-.7-6.3l-4,13.6s-.3,1.9,2.4.7l.7,1.2,3.1,5.9,3-.3,1.1-1.3-4.5-3.9s-3.6-3.2-1.4-4.3h-.1Z" />
				<path className="st0" d="M277.9,233c-.5-.4-2.4-.2-2.9,0s-.5,5.8-.5,5.8c1.3-.2,1.3,1.4,1.3,1.4.9-.2.7,1.6.7,1.6.7.5.9,3.7,1.6,4.6.7.9.9-.1.9-.1v-13.2s-.7.4-1.1,0h0Z" />
				<path className="st0" d="M282.3,233.9c-1.1-.3-1.8-1.1-1.8-1.1l.2,12.6s.5.7.9.6c.4,0,0-.4.5-.4s.9-.6.4-.8.3-1.3.3-1.3c-.3-1.2,2.5-2.2,2.5-2.2,1.1-2.2,3.8-4.5,3.8-4.5,0,0,1.2-.7.7-1.4s.8-1.5.8-1.5c0,0-7.1.4-8.3,0h0Z" />
				<path className="st0" d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.3Z" />
				<path className="st0" d="M267.1,245.1c-.5.2-.9-.4-.9-.4,0,0-.7,1.1-1.7.4-1-.7-.2-2.3-.4-2.6-.1-.3.6-.9.6-.9-.3,0-.6-.3-.6-.3-.9-.7,0-.9,0-1s-.6-.9-.6-.9c0,0,.4,2.1.4,4.4s-.8,4.6-.8,4.6c0,1.4-3,3.6-3,3.6l-4.5,4.5s-1.2.5-1.1,1-.5,1.9-.5,1.9l.9-1.6c.3-1.7,1.7-.8,1.8-.9h0c.2.4,1,.4,1.1.1s1-.9,1-.9c0,0,1.1-.6.2-.6s-1.1-1.5,0-1.7c1-.2,1.3,1.5,1.3,1.5l.8-.4c1.2-.3.2-1.1.2-1.1-2.1-1.6.3-3,1-3.4.6-.5,1-2.1,1-2.1,0,0,.7-.2,1.7-1,1-.7,2.2-.7,2.2-.7-.3-.2,0-1.5,0-1.5h-.1Z" />
				<path className="st0" d="M273.1,233.1c-.6-.1-.6-2.5-.6-2.5v3.2c-.1,0-3.1,0-3.5.1s.5,1.4-.3,1.4-1.5-1.4-1.5-1.4h-6.1l2,2.3s1.3,1.1,1.1,1.8c-.3.6.8,1.8,1.3,1.9.5,0,1.3,1.3,1.3,1.3,1,.3,1.3.9,1.3.9.5,2,2.4.5,1.9-.4s1.6-1.8,1.6-1.8c1.3-.5,2.2-.6,2.2-.6.1-.6-.5-2.6-.5-2.6,0,0,.4-3.4-.3-3.5h.1Z" />
				<path className="st0" d="M276.6,241.8c.7.5.9,3.7,1.6,4.6.7.9.9-.1.9-.1v-13.2s-.7.4-1.1,0-2.4-.2-2.9,0-.5,5.8-.5,5.8c1.3-.2,1.3,1.4,1.3,1.4.9-.2.7,1.6.7,1.6h0Z" />
				<path className="st0" d="M243.7,213.6c2.2-1.1-.7-2.9-.7-2.9l1.1-2.3s-1.3-3.7-.7-6.3l-4,13.6s-.3,1.9,2.4.7l.7,1.2,3.1,5.9,3-.3,1.1-1.3-4.5-3.9s-3.6-3.2-1.4-4.3h-.1Z" />
				<path className="st0" d="M282.3,233.9c-1.1-.3-1.8-1.1-1.8-1.1l.2,12.6s.5.7.9.6c.4,0,0-.4.5-.4s.9-.6.4-.8.3-1.3.3-1.3c-.3-1.2,2.5-2.2,2.5-2.2,1.1-2.2,3.8-4.5,3.8-4.5,0,0,1.2-.7.7-1.4s.8-1.5.8-1.5c0,0-7.1.4-8.3,0h0Z" />
				<path className="st0" d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.3Z" />
				<g>
					<path className="st0" d="M243.7,213.6c2.2-1.1-.7-2.9-.7-2.9l1.1-2.3s-1.3-3.7-.7-6.3l-4,13.6s-.3,1.9,2.4.7l.7,1.2,3.1,5.9,3-.3,1.1-1.3-4.5-3.9s-3.6-3.2-1.4-4.3h-.1Z" />
					<path className="st0" d="M273.1,233.1c-.6-.1-.6-2.5-.6-2.5v3.2c-.1,0-3.1,0-3.5.1s.5,1.4-.3,1.4-1.5-1.4-1.5-1.4h-6.1l2,2.3s1.3,1.1,1.1,1.8c-.3.6.8,1.8,1.3,1.9.5,0,1.3,1.3,1.3,1.3,1,.3,1.3.9,1.3.9.5,2,2.4.5,1.9-.4s1.6-1.8,1.6-1.8c1.3-.5,2.2-.6,2.2-.6.1-.6-.5-2.6-.5-2.6,0,0,.4-3.4-.3-3.5h.1Z" />
					<path className="st0" d="M276.6,241.8c.7.5.9,3.7,1.6,4.6.7.9.9-.1.9-.1v-13.2s-.7.4-1.1,0-2.4-.2-2.9,0-.5,5.8-.5,5.8c1.3-.2,1.3,1.4,1.3,1.4.9-.2.7,1.6.7,1.6h0Z" />
					<path className="st0" d="M268.4,165.1c14.6,1.9,16.1-3.5,16.1-3.5h.6c0-1.7.2-5.8.9-6.4.9-.7,0-14,0-14h-24.2v18.4s4.8.8,6.6,5.4h0Z" />
					<path className="st0" d="M280.5,251s-1-1.6-1.5-.4-3.1.9-3.1.9c0,0-.1.4,1,2,1,1.6,1.7,1.1,2.1,1.9s3.1.9,1.2-1.2.3-3.2.3-3.2h0Z" />
					<path className="st0" d="M267.1,245.1c-.5.2-.9-.4-.9-.4,0,0-.7,1.1-1.7.4-1-.7-.2-2.3-.4-2.6-.1-.3.6-.9.6-.9-.3,0-.6-.3-.6-.3-.9-.7,0-.9,0-1s-.6-.9-.6-.9c0,0,.4,2.1.4,4.4s-.8,4.6-.8,4.6c0,1.4-3,3.6-3,3.6l-4.5,4.5s-1.2.5-1.1,1-.5,1.9-.5,1.9l.9-1.6c.3-1.7,1.7-.8,1.8-.9h0c.2.4,1,.4,1.1.1s1-.9,1-.9c0,0,1.1-.6.2-.6s-1.1-1.5,0-1.7c1-.2,1.3,1.5,1.3,1.5l.8-.4c1.2-.3.2-1.1.2-1.1-2.1-1.6.3-3,1-3.4.6-.5,1-2.1,1-2.1,0,0,.7-.2,1.7-1,1-.7,2.2-.7,2.2-.7-.3-.2,0-1.5,0-1.5h-.1Z" />
					<path className="st0" d="M266.8,190.6l-15.6,12.1-.6,15.9,10.2,9.8,11.1,1.5,2.4-1.7c3.1-2.4,5.5.7,6.7,1.2,1.2.6,3.2,0,3.2,0h9.9l9.6-9.6v-14.6l-14.6-14.6h-22.3Z" />
					<path className="st0" d="M310.8,249.4c-3.2.1-3.5-3.3-3.5-3.3,0,0,3.2-2.3,3.2-2.9s1.9-1.6,1.9-1.6c1.8.3,3.5-3.3,2.1-2-1.3,1.2-2.6.1-2.6.1,0,0,.1.8-.7,1.3s-1.2,2.5-1.2,2.5c0,0-2.2,1.7-3.6,2.6s2.3,5.9,2.7,5.9,1-1,1-1c.4-2,1.8-.9,1.8-.9,0,0,1.6,1.4,3.6.8s.7-5.4.7-5.4c0,0-2.1,3.6-5.3,3.7h0v.2Z" />
					<path className="st0" d="M283.7,244.9s-1,1.8-.2,2.8c.9,1-1.3,1.3-1.3,1.3,0,0,.6.4,1.2.3,0,0-2.1,1.1-.7,2.4,1.4,1.2,2.8,1.3,2.8,1.3,0,0-.3-.5-.2-.9s-.9-.1-1-.5-1.1-3,1-3.7,2.7-3.8,2.7-3.8c0,0-.7,1.5-4.3.8h0Z" />
					<path className="st0" d="M282.3,233.9c-1.1-.3-1.8-1.1-1.8-1.1l.2,12.6s.5.7.9.6c.4,0,0-.4.5-.4s.9-.6.4-.8.3-1.3.3-1.3c-.3-1.2,2.5-2.2,2.5-2.2,1.1-2.2,3.8-4.5,3.8-4.5,0,0,1.2-.7.7-1.4s.8-1.5.8-1.5c0,0-7.1.4-8.3,0h0Z" />
					<path className="st22" d="M341.7,257.6c-2.6.9-2.2-5.4-5.4-2.4-3.1,3-5.5-4.4-3.9-5s-5.2-5,.4-6.8-2.2-4.1-2.2-4.1c0,0-3-9-6.8-7.9s-1.1-5.9-1.1-5.9c0,0-8.5-5.9-4.1-13.5,0,0,1.9.2,3.3-3.1,1.5-3.3,3.5-5.4,3.5-5.4,0,0,2.8-7.6-.5-7.6s-2-6.6-2-6.6c0,0-5.7-2.4-.7-3.9s0-8.7-1.7-6.5-6.1.4-3.9-3.7c0,0,.4-6.1-3.1-5.9s-6.3-2.2-6.3-2.2c0,0-1-5-4.3-5.7-1.4-4.9-11.7-5.7-11.7-5.7l.5-19.2c-2.5-4.7-5.4-.2-5.4-.2h-24.9c-3.2-4.8-5.4.4-5.4.4l-.4,21.5-11.2,3s.6.2,1.7.5h-3.6s-3.1,1-3.7,3.2-.9,4.4-2.4,4.1-1.1,2.2-1.1,2.2c0,0-2,1.3-2.6.6s-.9,3.1.4,4.4c0,0-2.6,2-2.2,3.5.4,1.5-1.1,2.8-4.1,2.4,0,0-5,2.4-.4,6.5,0,0-1.5,1.9-.9,2.9s-2.4,1.9-.4,4.4c2,2.6,2.4,5,2.4,5,0,0-2,6.1-1.3,8.5,0,0-2.4,4.1-1.1,7.6,0,0-.2,4.8,2,6.1,0,0-.2,3.1,1.5,3.3,0,0-.2,4.2,1.1,5.5s-1.1,1.7-1.1,1.7c0,0-.4,10.1-1.7,10.7-1.3.6-2.4,2.9-.2,4.8,0,0-1.5,2.6,2,4.1,0,0-2,4.2.7,7,0,0-5.2,4.4-.4,5.2,0,0,2,1.7,1.5,3.3s2,2.8,2,2.8c0,0-2.9,1.3-.9,3.1,0,0-2,3.5-.7,4.1,0,0-1.9-.4-3.5,1.7s-2.8,2.6-1.7,3.3-6.1-.9-6.6,8.3c0,0-6.5,8.7-2.2,12l.9,3.7s-2.6,2,.2,4.1c0,0-2.4,2.6-.6,4.1,0,0-1.5,5.2.2,4.2s2.4,3.9,2.4,3.9c0,0,2.4,2.4,9.4-5.4,0,0,.2,1.9,1.9,2s3.3-3,3.9-.7,1.7,4.8,5,3.1,6.6,1.3,6.6,1.3c0,0,3.1,1.9,4.8-1.1s2.2-.4,2.2-.4c0,0,2.2,2.6,5.2.4s.7-.7,1.9.2,1.9-.9,3.3-.9,3.1,0,4.6-1.7,2.6-5.4,3.7-5.7,2.6-15.7,10.3-7.9,9.6,12,17.7,6.8,10.9-11.3,10.9-11.3c0,0,4.8-3.1-.2-5s.2-4.2.2-4.2c0,0-5.5-8.5-12.7-6.5,0,0-2,5.9-5.7,7.9s-7.8,8.3-6.3-5.2l3-6.3s5.7,0,6.1-3.5,3.9-2.6,3.9-2.6c0,0,5.2-1.5,2.4-3.1s6.1.2,6.1.2c0,0,2-.9,3.1,2.6s4.6,2.2,4.6,2.2c0,0-.5,3.9.7,4.1,1.3.2,5.4-2.6,5.4-2.6,0,0,1.5,1.3-.5,2.8s6.1,1.1,7.6-.5c1.5-1.7,4.1.4,4.1.4,0,0,.5-2.8,2.2-2.6,1.7.2.9-3.7.9-3.7,0,0,3.1-3.3,4.2-2.6,1.1.7,3.5-2.8,3.5-6.8s.9-7,.9-7c0,0-.7-3.9-3.3-3h.1ZM261.8,141.2h24.2s.9,13.3,0,14c-.7.6-.9,4.7-.9,6.4h-.6s-1.5,5.4-16.1,3.5c-1.8-4.6-6.6-5.4-6.6-5.4v-18.4h0ZM248.5,223.2l-3,.3-3.1-5.9-.7-1.2c-2.7,1.2-2.4-.7-2.4-.7l4-13.6c-.7,2.6.7,6.3.7,6.3l-1.1,2.3s2.9,1.7.7,2.9,1.4,4.3,1.4,4.3l4.5,3.9-1.1,1.3h.1ZM264.9,247.3c-1,.7-1.7,1-1.7,1,0,0-.3,1.6-1,2.1-.6.5-3.1,1.9-1,3.4,0,0,1,.8-.2,1.1l-.8.4s-.2-1.7-1.3-1.5c-1,.2-.9,1.6,0,1.7.9,0-.2.6-.2.6,0,0-1,.6-1,.9s-.9.3-1.1,0h0c-.1,0-1.5-.9-1.8.8l-.9,1.6s.6-1.4.5-1.9,1.1-1,1.1-1l4.5-4.5s3-2.2,3-3.6c0,0,.8-2.3.8-4.6s-.4-4.4-.4-4.4c0,0,.5.9.6.9s-.8.3,0,1c0,0,.3.3.6.3,0,0-.7.6-.6.9s-.6,1.9.4,2.6c1,.7,1.7-.4,1.7-.4,0,0,.4.7.9.4,0,0-.3,1.3,0,1.5,0,0-1.2,0-2.2.7h.1ZM273.9,239.2s-1,.1-2.2.6c0,0-2.1.9-1.6,1.8.5.9-1.4,2.4-1.9.4,0,0-.4-.6-1.3-.9,0,0-.8-1.2-1.3-1.3s-1.6-1.3-1.3-1.9c.3-.6-1.1-1.8-1.1-1.8l-2-2.2h6.1s.7,1.4,1.5,1.4,0-1.2.3-1.4,3.4-.1,3.4-.1v-3.2c.1,0,0,2.4.7,2.5.6.1.3,3.5.3,3.5,0,0,.6,2,.5,2.6h-.1ZM274.6,238.8s0-5.6.5-5.8,2.4-.4,2.9,0,1.2,0,1.2,0v13.2s-.2,1.1-1,.1c-.7-.9-.9-4.1-1.6-4.6,0,0,.2-1.8-.7-1.6,0,0,0-1.6-1.3-1.4h0ZM279,255.5c-.4-.8-1-.3-2.1-1.9-1-1.6-1-2-1-2,0,0,2.6.4,3.1-.9s1.5.4,1.5.4c0,0-2.1,1.1-.3,3.2,1.8,2.1-.9,2-1.2,1.2h0ZM285.3,248c-2.1.8-1,3.4-1,3.7.1.4,1,.1,1,.5-.1.4.2.9.2.9,0,0-1.3-.1-2.8-1.3-1.4-1.2.7-2.4.7-2.4-.7.1-1.2-.3-1.2-.3,0,0,2.2-.4,1.3-1.3-.9-1,.2-2.8.2-2.8,3.6.8,4.3-.8,4.3-.8,0,0-.6,3.1-2.7,3.8h0ZM289.8,235.3c.5.7-.7,1.4-.7,1.4,0,0-2.7,2.3-3.8,4.5,0,0-2.8,1-2.5,2.2,0,0-.8,1.1-.3,1.3.5.3,0,.8-.4.8s-.2.3-.5.4-.9-.6-.9-.6l-.2-12.6s.7.8,1.8,1.1,8.3,0,8.3,0c0,0-1.2.8-.8,1.5h0ZM303.6,219.8l-9.6,9.6h-9.9s-2,.7-3.2,0-3.6-3.7-6.7-1.2l-2.4,1.7-11.1-1.5-10.2-9.8.6-15.9,15.6-12.1h22.2l14.6,14.6v14.6h.1ZM315.4,251c-2,.7-3.6-.8-3.6-.8,0,0-1.4-1.1-1.8.9,0,0-.6,1-1,1s-4.1-5.1-2.7-5.9,3.6-2.6,3.6-2.6c0,0,.5-1.9,1.2-2.5s.7-1.3.7-1.3c0,0,1.2,1.1,2.6-.1s-.3,2.3-2.1,2c0,0-1.9,1.1-1.9,1.6s-3.2,2.9-3.2,2.9c0,0,.4,3.4,3.5,3.3,3.2-.1,5.3-3.7,5.3-3.7,0,0,1.3,4.7-.7,5.4h0v-.2Z" />
				</g>
			</g>
			<g id="L1BG">
				<path className="st24" d="M311.7,273.9v-14.3h2.9v-8.8h2.7v-15h-11.6v-25.2h-8v-10.1l3.1-2.6h3.6l3-3.4-7.8-7.1-10.5,9.4v9.1h-4.5v1.2h-15.5v1.1h-6.8v-2.9h-7.6v23s-7.8-.1-10.9,10.6v4.2h-4.7v8.9h-3.8v21.7h1.2v2.2h-2.7v30.3l5.2,5.3v.8h8.6v-.3h14.4l2.8-2.9v-6.7h6.8v-.7h16.7v2.5l7.9,7.7,2-2.4h7.6l.9-.7,2.6,2.7,6.7-6.4v-10.9l-8.6-8.4h-2.7v-12.2h7v.3ZM288.1,294v4.2h-17.1s-.1-4.1,0-4c0,0,2.6-3.1,5.8-6,2-1.9,4.6-3.8,6.3-4.7l7.7,7.7-2.7,2.7h0ZM299.3,286.2h-3.4l-1.4,1.5-7.1-6.9,2.7-2.4v-4.5h9.1v12.2h0Z" />
			</g>
			<g id="rooms">
				<path className="st23" d="M285.2,211.4h10.3v2.9h-2.4v2.9h-7.2v2.5h-2.7v-4.3h2.1v-4h0Z" />
				<path className="st23" d="M269.1,225.7h-5.3v3.5h-8.2s-6.1,0-10.5,8c0,0-.1-.1-.7,6.7h-4.6v8.4h11.4v21.1h25.3v-14.5h-6.1v-10.9h.5v-8.2h-1.8v-14h0Z" />
				<path className="st23" d="M269.8,239.1v-10.4h16v10.4h-3.8v8.9h-10.4v-8.9s-2,0-1.8,0h0Z" />
				<path className="st23" d="M287.1,273.3h8.8v-15.4h9.2v-7h-3.9v-.2h-4.7v-5h.6v4.4h4v-14.2h3.9v-6.8h-18.7v10.8h9.4v-3.7h.5v4.2h-10.6v-.6h-3.2v7h9.2v-1h.6v7.3h-2v2.5h-3.3v17.8h.2Z" />
				<path className="st23" d="M249.1,273.9h-11.7v2.2h9.1v.8h-11.9v29.5l5.2,5.5h21.9l2.6-2.6v-6.7h-12.3l-2.9-3v-25.7h0Z" />
				<path className="st23" d="M249.8,274h28.3v12.2s-6.3,6-7.5,7.6v4.8h21.9v3h-21.1v.6l-19.2-.2-2.5-2.5s.2-25.6.1-25.5h0Z" />
				<path className="st23" d="M278.7,285.7l4.4-3.1,10.9,10.8,1.2-1.2v-2.6c.1,0-8.8-8.8-8.8-8.8l2.9-2.5v-4.4h-10.8s.1,11.6.1,11.8h0Z" />
				<path className="st23" d="M300,273.9h4v15.2h-3.9v-15.2h-.1Z" />
				<polygon className="st23" points="315.3 294.8 315.3 305 309.4 310.7 306.9 308.1 305.7 309.3 297.9 309.3 296.1 311.2 289 304.3 289 294.1 296.5 286.9 307.1 286.9 315.3 294.8" />
			</g>
			<g id="Walls">
				<polyline className="st4" points="256.2 245.8 256.2 258 253.5 258 253.5 270.3 257.8 270.3" />
				<line className="st4" x1="263.1" y1="247.1" x2="263.1" y2="258.3" />
				<polyline className="st4" points="256.9 231.5 256.9 233.9 259.3 236.5 266.3 236.5 266.3 233.2" />
				<polyline className="st4" points="268 248.4 268 258.4 276.8 258.4" />
			</g>
			<g id="Stripe_Rooms">
				<path className="st20" d="M255.5,220.1h7.3v5.4h.3v2.7h-7.7s-.2-8.1,0-8.1h.1Z" />
				<path className="st20" d="M257.2,234.6l-1.6.8h-4.3l-1,1.2v1.5l-.4.5.4,2.1h1.1l2,.8h3.5l1.8-.9v-4s-1.6-2-1.5-1.9h0Z" />
				<path className="st20" d="M282.6,247.3h9.3v5.1h-2.2v2.6h-2.7v-7h-4.4s0-.9,0-.7h0Z" />
				<path className="st20" d="M256.3,276.7h8.2s.9,10.5-1.2,12.5h-6.3s-.9-4.7-.7-7c0,0,0-5.6,0-5.5h0Z" />
				<path className="st20" d="M241,311.7h5.7s.4-4-3.2-2.2l-2.4,2.2h-.1Z" />
			</g>
			<g id="dark_rooms">
				<polygon className="st7" points="305.9 290.3 298 290.3 292.5 295.9 292.6 303.8 298 309.4 305.9 309.4 311.6 303.9 311.6 296.3 305.9 290.3" />
				<polygon className="st6" points="306.7 194.7 299.7 188.1 294.3 193 299.5 198.4 300.7 197.3 304.4 197.3 306.7 194.7" />
				<polygon className="st6" points="293.7 193.4 299.2 198.8 297.2 200.3 297.2 210.8 284.7 210.8 284.7 215 282.5 215 282.5 217 269.8 217 269.8 207.7 285.2 207.7 285.2 206.6 289.8 206.6 289.8 197.1 293.7 193.4" />
				<path className="st6" d="M269.2,218.6v6.5h-6v-5.4h-7.7v-13.7h6.2v2.8h7.4v9.8h.1Z" />
				<path className="st6" d="M269.8,217.5v2.2h5v.4h-5v8.2h16v-8.2h-5.2v-.3h2v-2.2s-12.9-.1-12.8,0h0Z" />
				<path className="st6" d="M305.2,214.8h-11.6v2.7h-7.1v11h18.8v-13.8h0Z" />
				<path className="st6" d="M295.9,211.3h9.2v3h-9.2v-3h0Z" />
				<path className="st6" d="M301.8,236.4h15v14h-2.8v8.8h-8.1v-8.7h-4v-14h-.1Z" />
				<path className="st6" d="M296.4,258.3h8.8v1.3h6v13.8h-14.8s0-15.2,0-15.1h0Z" />
				<path className="st6" d="M271.1,248.5h15.4v24.9h-9.1v-15.1h-6.3s.1-9.8,0-9.8h0Z" />
				<path className="st6" d="M236.1,273.4v-20.6h14.5v20.6h-14.5Z" />
				<circle className="st7" cx="303.7" cy="190.6" r="2" />
			</g>
			<g id="Boat">
				<path className="st21" d="M137.8,269.8s-8.7-9.8-18-10.6c0,0-4.1,12.3-2.2,20.4,1.9,8.2,33,68.6,33,68.6l21-7.6-33.8-70.8h0Z" />
				<path className="st24" d="M120.7,280.1s8.4-7.6,14.4-7.1c0,0,.5,1.1-1.4,1.9s-11.2,4.4-12,6.3l-1.1-1.1h0Z" />
				<polygon className="st24" points="123.4 284.7 136.7 278.5 137.3 280.4 135.6 280.9 138.1 286.4 128.8 290.5 126.1 285.3 123.9 285.8 123.4 284.7" />
				<polyline className="st5" points="132.8 312.5 137.5 310.3 131 297.3 142.7 292.4 148.7 304.6 153.3 302.7" />
				<polygon className="st5" points="139.7 306.3 142.2 306.3 142.2 298.6 138.6 298.6 139.7 306.3" />
				<polygon className="st5" points="145.7 312.3 148.4 313.1 146.5 319.6 143.3 318.8 145.7 312.3" />
				<polygon className="st5" points="139.5 324 143.5 322.6 147.1 329.7 143 331.3 139.5 324" />
				<polygon className="st5" points="154.7 316.9 159.1 316.1 162.9 322.3 158.8 323.7 154.7 316.9" />
				<polygon className="st5" points="149.8 329.7 153.1 329.7 152.3 336.8 149 336.5 149.8 329.7" />
				<polygon className="st5" points="158.3 335.7 165.3 337.3 164.8 340 158.5 339.2 158.3 335.7" />
			</g>
			<g id="red_lines">
				<path className="st9" d="M214.5,374.3s4.8-12.1,15-11.9c10.1.2,6.3-12.3,4-14s-12.2-4.3-19.3-.9-4.6,4.6-9.3,7.5c-.9.5-1.2,2.3.2,4.4s1.2,3.8-1.1,5.9-2.4,2.3.1,4.4c0,0,2.5,4.6,2.5,5.9s4.7,4.1,7.9-1.3h0Z" />
				<path className="st9" d="M247.7,354.8s-4.7-.1-6.2,5.4,7.8,5,8.6,4.3,4.7-7.3-2.4-9.6h0Z" />
				<path className="st9" d="M273.3,371.6s14.6-1.4,13.9,8.1c-.8,9.5-16.8,3.2-16.8,3.2,0,0-9.1-8.8,3-11.2h-.1Z" />
				<path className="st9" d="M280.3,357.7s2.2-.4,2.8,0,2.8-3.7,6.4-2.8,7.4,1.3,9.3,1,11,2.6,13.9,11.6c2.8,9-7.4,11.6-7.4,11.6,0,0-2.2,1.8-2,3.7s-3,2-5.5-2.4-4.3-8.8-9.9-9.3c-5.7-.4-12.7-5.6-7.6-13.3h0Z" />
				<path className="st9" d="M227.6,367.9s-6.9.3-9.2,7.6,5,8.7,10.1,5.6c0,0,2.7-7.2,2.6-8.7s-.4-3.6-3.6-4.5h0Z" />
				<path className="st9" d="M237.4,367.7s1.5-.2,3.3.9,4.4,1.3,8.5.4c4.2-.9,7.8,1.5,6.1,5.9,0,0-4.9,3-6.8,3.5s-5.1,1.5-6.2,2.6-5.7.1-7.1-5.4,2.2-8,2.2-8h0Z" />
				<path className="st9" d="M196.1,386.7s6.9.5,8.9,0,7.8-1.8,11.2.1,10.9-.4,10.9-.4c0,0,10.4.1,12.6.1s12.2-5.4,12.2-5.4c0,0,3.3-1.5,12.2,3,8.9,4.5,20.2,6.4,20.2,6.4,0,0,3.4.2,5.2-.8s3.3-1.4,4.9-1.3,3.7-3,6.4-1.2,6.7,5.2,7,6,1.4,2.5-1.2,5.7-5.4,4-8.5,8.2c0,0-10.6.8-12.1,1.8s-7.1-1.5-7.1-1.5l-8.4,1.1s-2.7,1.5-5.1-1.9h-5.5c0,.1-2.4-.8-3.1-1.9s-2.2-3.3-8.9-.8c-6.8,2.5-7.6,4.7-17.6,3.3l-5.6,2.7s-3.5,1.9-8.9.7h-3.9s-2.3-1-3.7,0-15.1-4-12.2-23.9h.1Z" />
				<path className="st18" d="M214.5,374.3s4.8-12.1,15-11.9c10.1.2,6.3-12.3,4-14s-12.2-4.3-19.3-.9-4.6,4.6-9.3,7.5c-.9.5-1.2,2.3.2,4.4s1.2,3.8-1.1,5.9-2.4,2.3.1,4.4c0,0,2.5,4.6,2.5,5.9s4.7,4.1,7.9-1.3h0Z" />
				<path className="st11" d="M247.7,354.8s-4.7-.1-6.2,5.4,7.8,5,8.6,4.3,4.7-7.3-2.4-9.6h0Z" />
				<path className="st10" d="M273.3,371.6s14.6-1.4,13.9,8.1c-.8,9.5-16.8,3.2-16.8,3.2,0,0-9.1-8.8,3-11.2h-.1Z" />
				<path className="st15" d="M280.3,357.7s2.2-.4,2.8,0,2.8-3.7,6.4-2.8,7.4,1.3,9.3,1,11,2.6,13.9,11.6c2.8,9-7.4,11.6-7.4,11.6,0,0-2.2,1.8-2,3.7s-3,2-5.5-2.4-4.3-8.8-9.9-9.3c-5.7-.4-12.7-5.6-7.6-13.3h0Z" />
				<path className="st14" d="M227.6,367.9s-6.9.3-9.2,7.6,5,8.7,10.1,5.6c0,0,2.7-7.2,2.6-8.7s-.4-3.6-3.6-4.5h0Z" />
				<path className="st12" d="M237.4,367.7s1.5-.2,3.3.9,4.4,1.3,8.5.4c4.2-.9,7.8,1.5,6.1,5.9,0,0-4.9,3-6.8,3.5s-5.1,1.5-6.2,2.6-5.7.1-7.1-5.4,2.2-8,2.2-8h0Z" />
				<path className="st13" d="M196.1,386.7s6.9.5,8.9,0,7.8-1.8,11.2.1,10.9-.4,10.9-.4c0,0,10.4.1,12.6.1s12.2-5.4,12.2-5.4c0,0,3.3-1.5,12.2,3,8.9,4.5,20.2,6.4,20.2,6.4,0,0,3.4.2,5.2-.8s3.3-1.4,4.9-1.3,3.7-3,6.4-1.2,6.7,5.2,7,6,1.4,2.5-1.2,5.7-5.4,4-8.5,8.2c0,0-10.6.8-12.1,1.8s-7.1-1.5-7.1-1.5l-8.4,1.1s-2.7,1.5-5.1-1.9h-5.5c0,.1-2.4-.8-3.1-1.9s-2.2-3.3-8.9-.8c-6.8,2.5-7.6,4.7-17.6,3.3l-5.6,2.7s-3.5,1.9-8.9.7h-3.9s-2.3-1-3.7,0-15.1-4-12.2-23.9h.1Z" />
				<path className="st9" d="M259.3,360.8s3.4-1.3,5.8-.1,2.9,1.5,2.9,1.5c0,0,1.6,1.9,2,2.2s.1,2.9.1,2.9l-3.8,3.9s-4.2.3-5.2-.7-2.3-2.8-2.3-2.8c0,0-1.2-5,.4-6.8h.1Z" />
				<path className="st17" d="M259.3,360.7s3.4-1.3,5.8-.1,2.9,1.5,2.9,1.5c0,0,1.6,1.9,2,2.2s.1,2.9.1,2.9l-3.8,3.9s-4.2.3-5.2-.7-2.3-2.8-2.3-2.8c0,0-1.2-5,.4-6.8h.1Z" />
				<path className="st9" d="M418.9,208.9s.4-3.6,1.9-4,3.6,0,5.4,2.2,3.7,6.4,3.8,7.7.6,3.8-.3,5.1-1.7,2.9-1.8,3.9-1,3.6-2.1,5.2-1.3,2.4-1.3,2.4c0,0,.1,2.3-.8,3.8s-1.4,2.1-2.6,2-2.6-.5-2.9-1.7,0-2.4-2.1-2.5-5.9-7.8-5.8-9.2,1.9-12.3,3.4-13.5l2.5-1.4h2.9-.2Z" />
				<path className="st16" d="M418.9,208.9s.4-3.6,1.9-4,3.6,0,5.4,2.2,3.7,6.4,3.8,7.7.6,3.8-.3,5.1-1.7,2.9-1.8,3.9-1,3.6-2.1,5.2-1.3,2.4-1.3,2.4c0,0,.1,2.3-.8,3.8s-1.4,2.1-2.6,2-2.6-.5-2.9-1.7,0-2.4-2.1-2.5-5.9-7.8-5.8-9.2,1.9-12.3,3.4-13.5l2.5-1.4h2.9-.2Z" />
				<path className="st9" d="M188.3,128.9s-.3-2.3,1.9-2.1,4.6.4,5.1-2.8-.8-3.2-1.4-3.9-1.3-6.4-5.7-6.2c-4.4.2-5.4,1.6-5.9,2s-1.4,1.9-2.3,2.6-2.4,4.7-2.4,4.7c0,0-3.3,5.9-3.1,9s1.7,3.2,2.4,3.2,2.4.4,3.7,1.1,4.2,0,5.8-2.3,2.6-3.2,1.8-5.4h0Z" />
				<path className="st8" d="M188.3,128.9s-.3-2.3,1.9-2.1,4.6.4,5.1-2.8-.8-3.2-1.4-3.9-1.3-6.4-5.7-6.2c-4.4.2-5.4,1.6-5.9,2s-1.4,1.9-2.3,2.6-2.4,4.7-2.4,4.7c0,0-3.3,5.9-3.1,9s1.7,3.2,2.4,3.2,2.4.4,3.7,1.1,4.2,0,5.8-2.3,2.6-3.2,1.8-5.4h0Z" />
			</g>
		</SVGOverlay>
	),
	citadelle: (
		<SVGOverlay attributes={{ viewBox: '0 0 512 512', fill: 'none' }} bounds={ImageBounds}>
			<path opacity="0.25" d="M435.119 155.993V189.423H409.993C409.35 179.552 408.081 165.443 410.978 155.993H435.119Z" fill="white" />
			<path d="M463.055 131.582V157.838C459.594 163.543 451.342 164.717 442.173 164.954C441.283 165.372 436.775 167.83 436.621 174.782C436.455 182.502 436.621 189.547 436.621 189.547H417.663V199.615C417.663 199.615 417.503 209.367 397.178 212.554V221.418H379.873V227H373V221.418H355.754V181.522H340.488V201.032H303.915V129.316H340.488V169.79H355.754V163.383H373V160.5H379.873V163.383H397.178V202.71C400.405 203.415 410.424 204.853 410.282 195.418C410.258 193.713 410.141 191.677 409.993 189.423C409.349 179.552 408.081 165.443 410.978 155.994C411.385 154.66 411.877 153.422 412.462 152.302L404.746 145.759L409.777 137.873L409.442 135.524L417.161 128.143H421.355L428.905 123.949L432.649 131.582H463.055Z" fill="#555555" />
			<path d="M303.915 144.161V201.032H340.488V181.522H355.754V221.418H373V227.5H379.873V221.418H397.178V212.554C417.503 209.367 417.663 199.615 417.663 199.615V189.547H436.621C436.621 189.547 436.455 182.502 436.621 174.782C436.775 167.83 441.283 165.372 442.173 164.954C451.342 164.717 459.594 163.543 463.055 157.838V131.582H461.778M303.915 134.48V129.316H340.488V169.612H355.754V163.383H373V160.5H379.873V163.383H397.178V202.71C400.405 203.415 410.424 204.853 410.282 195.418C410.258 193.713 410.141 191.677 409.993 189.423C409.349 179.552 408.081 165.443 410.978 155.994C411.385 154.66 411.877 153.422 412.462 152.302L404.746 145.759L409.777 137.873L409.442 135.524L417.161 128.143H421.355L428.905 123.949L432.649 131.582H454.429" stroke="#7C2728" strokeWidth="0.923733" strokeMiterlimit="10" />
			<path d="M324.215 163.208H320.357V167.066H324.215V163.208Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M324.356 146.338H320.498V150.196H324.356V146.338Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M324.215 180.823H320.357V184.681H324.215V180.823Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M368.841 177.636H364.982V181.495H368.841V177.636Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M388.079 177.636H384.221V181.495H388.079V177.636Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M368.841 188.207H364.982V192.065H368.841V188.207Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M388.079 188.207H384.221V192.065H388.079V188.207Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M388.079 198.814H384.221V202.673H388.079V198.814Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M388.079 210.241H384.221V214.099H388.079V210.241Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M368.841 198.814H364.982V202.673H368.841V198.814Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M368.841 210.241H364.982V214.099H368.841V210.241Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M423.984 172.882H420.126V176.74H423.984V172.882Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M451.499 146.935H447.641V150.793H451.499V146.935Z" stroke="#6B6B6B" strokeWidth="0.307911" strokeMiterlimit="10" />
			<path d="M436.433 148.052H426.164V158.321H436.433V148.052Z" fill="#7C2728" />
			<path d="M286.517 123.949H286.979V123.487H286.517V123.949ZM286.517 138.531H286.055V138.993H286.517V138.531ZM306.262 138.858C306.443 138.677 306.443 138.385 306.262 138.204L303.323 135.265C303.143 135.085 302.85 135.085 302.67 135.265C302.489 135.445 302.489 135.738 302.67 135.918L305.282 138.531L302.67 141.144C302.489 141.324 302.489 141.616 302.67 141.797C302.85 141.977 303.143 141.977 303.323 141.797L306.262 138.858ZM301.865 114.867C301.684 114.686 301.392 114.686 301.212 114.867L298.272 117.806C298.092 117.986 298.092 118.279 298.272 118.459C298.453 118.64 298.745 118.64 298.926 118.459L301.538 115.847L304.151 118.459C304.331 118.64 304.624 118.64 304.804 118.459C304.985 118.279 304.985 117.986 304.804 117.806L301.865 114.867ZM301.538 121.308H301.076V121.77H301.538V121.308ZM458.706 121.308H459.168V120.847H458.706V121.308ZM458.379 133.603C458.56 133.784 458.852 133.784 459.032 133.603L461.972 130.664C462.152 130.484 462.152 130.191 461.972 130.011C461.791 129.83 461.499 129.83 461.318 130.011L458.706 132.624L456.093 130.011C455.913 129.83 455.62 129.83 455.44 130.011C455.259 130.191 455.259 130.484 455.44 130.664L458.379 133.603ZM154.169 123.623C153.988 123.803 153.988 124.095 154.169 124.276L157.108 127.215C157.288 127.395 157.581 127.395 157.761 127.215C157.941 127.035 157.941 126.742 157.761 126.562L155.148 123.949L157.761 121.336C157.941 121.156 157.941 120.864 157.761 120.683C157.581 120.503 157.288 120.503 157.108 120.683L154.169 123.623ZM154.495 124.411H155.412V123.487H154.495V124.411ZM157.246 124.411H159.079V123.487H157.246V124.411ZM160.913 124.411H162.746V123.487H160.913V124.411ZM164.58 124.411H166.414V123.487H164.58V124.411ZM168.247 124.411H170.081V123.487H168.247V124.411ZM171.915 124.411H173.748V123.487H171.915V124.411ZM175.582 124.411H177.416V123.487H175.582V124.411ZM179.249 124.411H181.083V123.487H179.249V124.411ZM182.916 124.411H184.75V123.487H182.916V124.411ZM186.584 124.411H188.417V123.487H186.584V124.411ZM190.251 124.411H192.085V123.487H190.251V124.411ZM193.918 124.411H195.752V123.487H193.918V124.411ZM197.586 124.411H199.419V123.487H197.586V124.411ZM201.253 124.411H203.086V123.487H201.253V124.411ZM204.92 124.411H206.754V123.487H204.92V124.411ZM208.587 124.411H210.421V123.487H208.587V124.411ZM212.255 124.411H214.088V123.487H212.255V124.411ZM215.922 124.411H217.756V123.487H215.922V124.411ZM219.589 124.411H221.423V123.487H219.589V124.411ZM223.256 124.411H225.09V123.487H223.256V124.411ZM226.924 124.411H228.757V123.487H226.924V124.411ZM230.591 124.411H232.425V123.487H230.591V124.411ZM234.258 124.411H236.092V123.487H234.258V124.411ZM237.926 124.411H239.759V123.487H237.926V124.411ZM241.593 124.411H243.426V123.487H241.593V124.411ZM245.26 124.411H247.094V123.487H245.26V124.411ZM248.927 124.411H250.761V123.487H248.927V124.411ZM252.595 124.411H254.428V123.487H252.595V124.411ZM256.262 124.411H258.096V123.487H256.262V124.411ZM259.929 124.411H261.763V123.487H259.929V124.411ZM263.596 124.411H265.43V123.487H263.596V124.411ZM267.264 124.411H269.097V123.487H267.264V124.411ZM270.931 124.411H272.765V123.487H270.931V124.411ZM274.598 124.411H276.432V123.487H274.598V124.411ZM278.265 124.411H280.099V123.487H278.265V124.411ZM281.933 124.411H283.766V123.487H281.933V124.411ZM285.6 124.411H286.517V123.487H285.6V124.411ZM286.055 123.949V124.86H286.979V123.949H286.055ZM286.055 126.683V128.506H286.979V126.683H286.055ZM286.055 130.329V132.151H286.979V130.329H286.055ZM286.055 133.974V135.797H286.979V133.974H286.055ZM286.055 137.62V138.531H286.979V137.62H286.055ZM286.517 138.993H287.488V138.069H286.517V138.993ZM289.43 138.993H291.372V138.069H289.43V138.993ZM293.313 138.993H295.255V138.069H293.313V138.993ZM297.197 138.993H299.139V138.069H297.197V138.993ZM301.081 138.993H303.023V138.069H301.081V138.993ZM304.965 138.993H305.936V138.069H304.965V138.993ZM301.076 115.193V115.958H302V115.193H301.076ZM301.076 117.487V119.015H302V117.487H301.076ZM301.076 120.544V121.308H302V120.544H301.076ZM301.538 121.77H302.452V120.847H301.538V121.77ZM304.28 121.77H306.107V120.847H304.28V121.77ZM307.935 121.77H309.762V120.847H307.935V121.77ZM311.59 121.77H313.417V120.847H311.59V121.77ZM315.245 121.77H317.072V120.847H315.245V121.77ZM318.9 121.77H320.727V120.847H318.9V121.77ZM322.555 121.77H324.382V120.847H322.555V121.77ZM326.21 121.77H328.037V120.847H326.21V121.77ZM329.865 121.77H331.692V120.847H329.865V121.77ZM333.52 121.77H335.348V120.847H333.52V121.77ZM337.175 121.77H339.003V120.847H337.175V121.77ZM340.83 121.77H342.658V120.847H340.83V121.77ZM344.485 121.77H346.313V120.847H344.485V121.77ZM348.14 121.77H349.968V120.847H348.14V121.77ZM351.795 121.77H353.623V120.847H351.795V121.77ZM355.45 121.77H357.278V120.847H355.45V121.77ZM359.105 121.77H360.933V120.847H359.105V121.77ZM362.76 121.77H364.588V120.847H362.76V121.77ZM366.416 121.77H368.243V120.847H366.416V121.77ZM370.071 121.77H371.898V120.847H370.071V121.77ZM373.726 121.77H375.553V120.847H373.726V121.77ZM377.381 121.77H379.208V120.847H377.381V121.77ZM381.036 121.77H382.863V120.847H381.036V121.77ZM384.691 121.77H386.518V120.847H384.691V121.77ZM388.346 121.77H390.173V120.847H388.346V121.77ZM392.001 121.77H393.829V120.847H392.001V121.77ZM395.656 121.77H397.484V120.847H395.656V121.77ZM399.311 121.77H401.139V120.847H399.311V121.77ZM402.966 121.77H404.794V120.847H402.966V121.77ZM406.621 121.77H408.449V120.847H406.621V121.77ZM410.276 121.77H412.104V120.847H410.276V121.77ZM413.931 121.77H415.759V120.847H413.931V121.77ZM417.586 121.77H419.414V120.847H417.586V121.77ZM421.241 121.77H423.069V120.847H421.241V121.77ZM424.897 121.77H426.724V120.847H424.897V121.77ZM428.552 121.77H430.379V120.847H428.552V121.77ZM432.207 121.77H434.034V120.847H432.207V121.77ZM435.862 121.77H437.689V120.847H435.862V121.77ZM439.517 121.77H441.344V120.847H439.517V121.77ZM443.172 121.77H444.999V120.847H443.172V121.77ZM446.827 121.77H448.654V120.847H446.827V121.77ZM450.482 121.77H452.309V120.847H450.482V121.77ZM454.137 121.77H455.965V120.847H454.137V121.77ZM457.792 121.77H458.706V120.847H457.792V121.77ZM458.244 121.308V122.306H459.168V121.308H458.244ZM458.244 124.3V126.295H459.168V124.3H458.244ZM458.244 128.29V130.285H459.168V128.29H458.244ZM458.244 132.279V133.277H459.168V132.279H458.244Z" fill="#7C2728" />
			<path d="M328.303 351.315V308.595L324.235 305.107H317.551L276.868 273.143H280.356L283.553 270.817V243.5H290.237V214.732H267.862L261.256 210.167H229.227C229.209 210.213 229.217 205.743 229.217 205.743H240.473V160.389H255.073C267.567 159.518 269.604 143.823 269.604 143.823V124.933H278.322V90.0599H290.817C296.338 90.3515 296.918 97.0359 296.918 97.0359V117.377H306.216V98.7781C306.507 84.5381 293.43 79.8875 293.43 79.8875H274.251V55.7666H226.593V74.3657H194.337V90.3479H191.14V89.7684H191.129V88.2181H151.894V89.7684H143.645V88.2181H134.18V89.7684H130.305V97.5195H134.18V119.585H130.305V128.129H147.126V119.585H143.645V97.5195H151.894V138.255H169.227V148.673H191.129V136.663H200.161V205.736H209.519V215.215C206.397 214.497 204.356 213.114 204.356 210.639C204.356 210.476 204.363 210.319 204.385 210.159H179.105V214.508H149.558V243.735H155.24V275.262C155.385 275.244 156.609 274.44 158.301 273.523C159.545 272.848 161.192 271.984 162.081 271.973C162.646 271.966 163.204 271.973 163.766 271.994L156.85 282.725H151.037L146.678 294.639C146.678 294.639 119.944 297.836 123.14 321.086L104.541 320.506C104.541 320.506 104.833 337.943 108.9 346.369V378.334L116.164 391.411C116.164 391.411 122.557 395.191 135.343 396.641C135.343 396.641 140.573 395.77 140.281 405.068L147.257 405.36C147.257 405.36 152.779 410.298 146.678 414.657L153.071 419.596H184.456V436.449H187.944V451.852H204.797V458.536H223.976V450.689H238.216L251.293 446.622V410.298H278.61V412.915H293.142V396.933L302.731 378.625L312.321 385.018L318.134 384.147L321.913 376.591L320.751 372.812L325.981 360.026H328.598L330.632 355.959L331.211 351.308H328.306L328.303 351.315ZM261.174 134.238C261.174 134.238 261.465 150.803 254.781 151.383C248.751 151.905 240.833 152.062 240.541 151.77L240.47 137.971H237.345V134.238H261.174ZM212.875 137.971V131.955V122.931H208.978H191.129V97.523H191.14V95.0057H194.628V109.537H225.721V102.561H233.569V119.998H228.918V137.971H212.875Z" fill="#555555" />
			<path d="M296.918 117.377V97.0359C296.918 97.0359 296.338 90.3515 290.817 90.0599H278.322V124.933H269.604V143.823C269.604 143.823 267.567 159.518 255.073 160.389H240.473V205.743H229.217C229.217 205.743 229.209 210.213 229.227 210.167H261.256L267.862 214.732H290.237V243.5H283.553V270.817L280.356 273.143H276.868L317.551 305.107H324.235L328.303 308.595V351.315L328.306 351.308H331.211L330.632 355.959L328.598 360.026H325.981L320.751 372.812L321.913 376.591L318.134 384.147L312.321 385.018L302.731 378.625L293.142 396.933V412.915H278.61V410.298H251.293V446.622L238.216 450.689H223.976V458.536H204.797V451.852H187.944V436.449H184.456V419.596H153.071L146.678 414.657C152.779 410.298 147.257 405.36 147.257 405.36L140.281 405.068C140.573 395.77 135.343 396.641 135.343 396.641C122.557 395.191 116.164 391.411 116.164 391.411L108.9 378.334V346.369C104.833 337.943 104.541 320.506 104.541 320.506L123.14 321.086C119.944 297.836 146.678 294.639 146.678 294.639L151.037 282.725H156.85L163.766 271.994C163.204 271.973 162.646 271.966 162.081 271.973C161.192 271.984 159.545 272.848 158.301 273.523C156.609 274.44 155.385 275.244 155.24 275.262V243.735H149.558V214.508H179.105V210.159H204.385C204.363 210.319 204.356 210.476 204.356 210.639C204.356 213.114 206.397 214.497 209.519 215.215V205.736H200.161V136.663H191.129V148.673H169.227V138.255H151.894V97.5195H143.645V119.585H147.126M306.216 117.377V98.7781C306.507 84.5381 293.43 79.8875 293.43 79.8875H274.251V55.7666H226.593V74.3657H194.337V90.3479H191.14V89.7684H191.129V88.2181H151.894V89.7684H143.645V88.2181H134.18V89.7684H130.305V97.5195H134.18V119.585H130.305V128.129H147.126M261.174 134.238C261.174 134.238 261.465 150.803 254.781 151.383C248.751 151.905 240.833 152.062 240.541 151.77L240.47 137.971H237.345V134.238H261.174ZM212.875 137.971V131.955V122.931H208.978H191.129V97.523H191.14V95.0057H194.628V109.537H225.721V102.561H233.569V119.998H228.918V137.971H212.875Z" stroke="#7C2728" strokeWidth="1.06667" strokeMiterlimit="10" />
			<path d="M175.251 215.649H150.614V242.64H175.251V215.649Z" fill="#363635" stroke="#6B6B6B" strokeWidth="1.06667" strokeMiterlimit="10" />
			<path d="M289.05 215.877H263.596V242.377H289.05V215.877Z" fill="#363635" stroke="#6B6B6B" strokeWidth="1.06667" strokeMiterlimit="10" />
			<path d="M198.888 403.624L173.316 403.237V357.128H230.66V383.088H198.888V403.624Z" fill="#363635" stroke="#6B6B6B" strokeWidth="1.06667" strokeMiterlimit="10" />
			<path d="M169.251 315.61L150.209 334.653L169.251 353.695L188.293 334.653L169.251 315.61Z" fill="#363635" stroke="#6B6B6B" strokeWidth="1.06667" strokeMiterlimit="10" />
			<path d="M269.022 65.9463H239.671V117.673H269.022V65.9463Z" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M168.183 97.9106H178.935" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M181.548 106.629V113.605" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M200.826 163.297H213.224V172.307" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M227.173 172.595V163.589H239.831" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M273.96 93.2637V114.476" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M208.961 219.383V232.364H175.255" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M208.961 232.364H243.642" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M211.674 232.364V236.819V255.031H203.152" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M199.664 237.015H211.674" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M174.963 242.824H177.288L180.193 246.7" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M187.457 248.442H192.303L197.534 243.6" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M169.441 242.633V262.391L184.94 277.31H195.788V269.175H198.697" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M210.899 270.334H243.834V277.31H254.49L269.797 262.003V242.533H261.854L258.17 246.217H247.71L243.93 242.437" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M249.26 232.364H263.4" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M249.647 223.646H257.203V232.364" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M225.818 217.932H228.336V204.755H233.953" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M248.677 216.865H257.203V210.76" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M251.002 267.237L257.783 274.018" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M260.496 257.936L266.988 264.428" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M200.439 253.093L207.027 245.925H211.482" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M227.756 253.48V232.364" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M182.227 210.956V217.253H189.783" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M182.423 232.364V223.063H190.17" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M164.791 290.483L170.312 286.416L173.221 288.741" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M144.257 310.824H168.862" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M167.408 356.257L158.785 349.185L161.111 345.118" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M117.52 334.849L118.49 351.898" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M117.907 360.229V372.819" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M121.978 354.611V372.819" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M125.85 380.375L143.706 380.279V371.173" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M129.146 376.115H143.482" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M298.856 377.278L289.943 395.034L292.819 396.393" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M293.043 325.161V342.018H289.555" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M126.821 338.917C129.389 338.917 131.472 336.835 131.472 334.266C131.472 331.698 129.389 329.616 126.821 329.616C124.252 329.616 122.17 331.698 122.17 334.266C122.17 336.835 124.252 338.917 126.821 338.917Z" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M289.555 340.855H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 339.855H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 338.856H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 337.857H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 336.855H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 335.855H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 334.856H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 333.857H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 332.858H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 331.859H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 330.86H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M289.555 329.861H292.947" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M294.917 384.961L297.95 386.384" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M294.504 385.776L297.541 387.198" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M294.095 386.594L297.128 388.016" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M293.683 387.408L296.719 388.83" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M293.271 388.225L296.307 389.648" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M292.862 389.04L295.898 390.462" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M292.449 389.857L295.486 391.28" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M292.04 390.672L295.073 392.094" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M291.628 391.49L294.664 392.912" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M291.219 392.307L294.252 393.726" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M290.807 393.121L293.843 394.544" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M290.394 393.939L293.431 395.358" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M283.987 367.397L289.943 370.156L283.404 385.801" stroke="#6B6B6B" strokeWidth="0.711111" strokeMiterlimit="10" />
			<path d="M276.545 382.281L283.568 385.687" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M276.897 381.406L283.92 384.812" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M277.25 380.531L284.272 383.938" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M277.602 379.656L284.624 383.063" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M277.953 378.782L284.976 382.188" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M278.305 377.907L285.328 381.313" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M278.657 377.032L285.68 380.439" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M279.01 376.158L286.032 379.564" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M279.362 375.283L286.384 378.689" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M279.713 374.408L286.736 377.815" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M280.065 373.534L287.088 376.94" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M280.417 372.659L287.44 376.065" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M126.821 356.353H132.439V347.248H141.736V356.741C141.736 356.741 143.866 356.933 143.866 359.646V371.269H126.43C126.43 371.269 126.334 356.837 126.817 356.35L126.821 356.353Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M220.2 423.774C223.411 423.774 226.014 421.171 226.014 417.96C226.014 414.75 223.411 412.147 220.2 412.147C216.99 412.147 214.387 414.75 214.387 417.96C214.387 421.171 216.99 423.774 220.2 423.774Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M304.671 361.772C306.194 361.772 307.428 360.537 307.428 359.015C307.428 357.492 306.194 356.258 304.671 356.258C303.148 356.258 301.914 357.492 301.914 359.015C301.914 360.537 303.148 361.772 304.671 361.772Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M320.943 324.968H298.469V347.443H320.943V324.968Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M239.592 152.944L256.172 152.296C256.172 152.296 262.846 152.147 262.415 133.847H236.958V138.398H239.375C239.375 138.398 239.592 152.51 239.592 152.94V152.944Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M207.802 288.933V297.068H231.823V288.933H246.547L249.26 290.871H263.208L267.084 286.22L284.52 303.269V322.643H289.558V346.277L284.908 358.675L282.97 357.125L280.257 364.101L284.52 366.426L276.769 381.537V396.648H267.084V398.586H253.135V393.936H237.637V359.838H231.048V356.933H173.317V403.624C173.317 403.624 154.33 405.95 151.617 388.901C151.617 388.901 150.842 381.537 156.655 378.44L157.43 364.492C157.43 364.492 158.206 357.516 168.278 355.582L188.911 334.949L169.633 315.479V311.024H165.953L173.121 288.549L176.026 289.712C176.026 289.712 208.186 289.324 207.798 288.936L207.802 288.933Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M190.654 94.6182H195.013V109.05H225.235V102.174H234.049V120.577H229.303V138.401H212.35V132.396V123.386H208.57H190.65C190.65 123.386 190.65 94.4226 190.65 94.6182H190.654Z" fill="#7C2728" stroke="#6B6B6B" strokeWidth="0.355556" strokeMiterlimit="10" />
			<path d="M226.334 74.6436V101.829" stroke="#6B6B6B" strokeWidth="0.5" />
			<path d="M181 126L181 137" stroke="#6B6B6B" strokeWidth="0.7" />
			<path d="M228 226L228 233" stroke="#6B6B6B" strokeWidth="0.7" />
			<path d="M236 237H228" stroke="#6B6B6B" strokeWidth="0.7" />
			<path d="M262 125H234V120.5" stroke="#6B6B6B" strokeWidth="0.5" strokeDasharray="1 1" />
			<path d="M145.431 123.623C145.251 123.803 145.251 124.095 145.431 124.276L148.371 127.215C148.551 127.395 148.843 127.395 149.024 127.215C149.204 127.035 149.204 126.742 149.024 126.562L146.411 123.949L149.024 121.337C149.204 121.156 149.204 120.864 149.024 120.683C148.843 120.503 148.551 120.503 148.371 120.683L145.431 123.623ZM145.758 124.411H146.496V123.487H145.758V124.411ZM147.972 124.411H149.447V123.487H147.972V124.411ZM150.923 124.411H151.661V123.487H150.923V124.411Z" fill="#7C2728" />
		</SVGOverlay>
	),
};
