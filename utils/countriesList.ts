// countriesList.ts

export interface Country {
  name: string;
  code: string;
  phoneCode: string;
  flagEmoji: string;
  flag: string;
}

export function getCountryFlagEmoji(location: string): string {
  const cleanLocation = location.trim().toLowerCase();

  const country = countryList.find((country) =>
    cleanLocation.includes(country.name.toLowerCase())
  );

  return country?.flagEmoji || "";
}

export function getFlagEmoji(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

export const countryList: Country[] = [
  {
    name: "Afghanistan",
    code: "AF",
    phoneCode: "+93",
    flagEmoji: "🇦🇫",
    flag: "https://flagcdn.com/h40/af.png",
  },
  {
    name: "Åland Islands",
    code: "AX",
    phoneCode: "+358",
    flagEmoji: "🇦🇽",
    flag: "https://flagcdn.com/h40/ax.png",
  },
  {
    name: "Albania",
    code: "AL",
    phoneCode: "+355",
    flagEmoji: "🇦🇱",
    flag: "https://flagcdn.com/h40/al.png",
  },
  {
    name: "Algeria",
    code: "DZ",
    phoneCode: "+213",
    flagEmoji: "🇩🇿",
    flag: "https://flagcdn.com/h40/dz.png",
  },
  {
    name: "American Samoa",
    code: "AS",
    phoneCode: "+1684",
    flagEmoji: "🇦🇸",
    flag: "https://flagcdn.com/h40/as.png",
  },
  {
    name: "Andorra",
    code: "AD",
    phoneCode: "+376",
    flagEmoji: "🇦🇩",
    flag: "https://flagcdn.com/h40/ad.png",
  },
  {
    name: "Angola",
    code: "AO",
    phoneCode: "+244",
    flagEmoji: "🇦🇴",
    flag: "https://flagcdn.com/h40/ao.png",
  },
  {
    name: "Anguilla",
    code: "AI",
    phoneCode: "+1264",
    flagEmoji: "🇦🇮",
    flag: "https://flagcdn.com/h40/ai.png",
  },
  {
    name: "Antarctica",
    code: "AQ",
    phoneCode: "+672",
    flagEmoji: "🇦🇶",
    flag: "https://flagcdn.com/h40/aq.png",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    phoneCode: "+1268",
    flagEmoji: "🇦🇬",
    flag: "https://flagcdn.com/h40/ag.png",
  },
  {
    name: "Argentina",
    code: "AR",
    phoneCode: "+54",
    flagEmoji: "🇦🇷",
    flag: "https://flagcdn.com/h40/ar.png",
  },
  {
    name: "Armenia",
    code: "AM",
    phoneCode: "+374",
    flagEmoji: "🇦🇲",
    flag: "https://flagcdn.com/h40/am.png",
  },
  {
    name: "Aruba",
    code: "AW",
    phoneCode: "+297",
    flagEmoji: "🇦🇼",
    flag: "https://flagcdn.com/h40/aw.png",
  },
  {
    name: "Australia",
    code: "AU",
    phoneCode: "+61",
    flagEmoji: "🇦🇺",
    flag: "https://flagcdn.com/h40/au.png",
  },
  {
    name: "Austria",
    code: "AT",
    phoneCode: "+43",
    flagEmoji: "🇦🇹",
    flag: "https://flagcdn.com/h40/at.png",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    phoneCode: "+994",
    flagEmoji: "🇦🇿",
    flag: "https://flagcdn.com/h40/az.png",
  },
  {
    name: "Bahamas",
    code: "BS",
    phoneCode: "+1242",
    flagEmoji: "🇧🇸",
    flag: "https://flagcdn.com/h40/bs.png",
  },
  {
    name: "Bahrain",
    code: "BH",
    phoneCode: "+973",
    flagEmoji: "🇧🇭",
    flag: "https://flagcdn.com/h40/bh.png",
  },
  {
    name: "Bangladesh",
    code: "BD",
    phoneCode: "+880",
    flagEmoji: "🇧🇩",
    flag: "https://flagcdn.com/h40/bd.png",
  },
  {
    name: "Barbados",
    code: "BB",
    phoneCode: "+1246",
    flagEmoji: "🇧🇧",
    flag: "https://flagcdn.com/h40/bb.png",
  },
  {
    name: "Belarus",
    code: "BY",
    phoneCode: "+375",
    flagEmoji: "🇧🇾",
    flag: "https://flagcdn.com/h40/by.png",
  },
  {
    name: "Belgium",
    code: "BE",
    phoneCode: "+32",
    flagEmoji: "🇧🇪",
    flag: "https://flagcdn.com/h40/be.png",
  },
  {
    name: "Belize",
    code: "BZ",
    phoneCode: "+501",
    flagEmoji: "🇧🇿",
    flag: "https://flagcdn.com/h40/bz.png",
  },
  {
    name: "Benin",
    code: "BJ",
    phoneCode: "+229",
    flagEmoji: "🇧🇯",
    flag: "https://flagcdn.com/h40/bj.png",
  },
  {
    name: "Bermuda",
    code: "BM",
    phoneCode: "+1441",
    flagEmoji: "🇧🇲",
    flag: "https://flagcdn.com/h40/bm.png",
  },
  {
    name: "Bhutan",
    code: "BT",
    phoneCode: "+975",
    flagEmoji: "🇧🇹",
    flag: "https://flagcdn.com/h40/bt.png",
  },
  {
    name: "Bolivia",
    code: "BO",
    phoneCode: "+591",
    flagEmoji: "🇧🇴",
    flag: "https://flagcdn.com/h40/bo.png",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    phoneCode: "+387",
    flagEmoji: "🇧🇦",
    flag: "https://flagcdn.com/h40/ba.png",
  },
  {
    name: "Botswana",
    code: "BW",
    phoneCode: "+267",
    flagEmoji: "🇧🇼",
    flag: "https://flagcdn.com/h40/bw.png",
  },
  {
    name: "Brazil",
    code: "BR",
    phoneCode: "+55",
    flagEmoji: "🇧🇷",
    flag: "https://flagcdn.com/h40/br.png",
  },
  {
    name: "Canada",
    code: "CA",
    phoneCode: "+1",
    flagEmoji: "🇨🇦",
    flag: "https://flagcdn.com/h40/ca.png",
  },
  {
    name: "China",
    code: "CN",
    phoneCode: "+86",
    flagEmoji: "🇨🇳",
    flag: "https://flagcdn.com/h40/cn.png",
  },
  {
    name: "Colombia",
    code: "CO",
    phoneCode: "+57",
    flagEmoji: "🇨🇴",
    flag: "https://flagcdn.com/h40/co.png",
  },
  {
    name: "France",
    code: "FR",
    phoneCode: "+33",
    flagEmoji: "🇫🇷",
    flag: "https://flagcdn.com/h40/fr.png",
  },
  {
    name: "Germany",
    code: "DE",
    phoneCode: "+49",
    flagEmoji: "🇩🇪",
    flag: "https://flagcdn.com/h40/de.png",
  },
  {
    name: "India",
    code: "IN",
    phoneCode: "+91",
    flagEmoji: "🇮🇳",
    flag: "https://flagcdn.com/h40/in.png",
  },
  {
    name: "Indonesia",
    code: "ID",
    phoneCode: "+62",
    flagEmoji: "🇮🇩",
    flag: "https://flagcdn.com/h40/id.png",
  },
  {
    name: "Italy",
    code: "IT",
    phoneCode: "+39",
    flagEmoji: "🇮🇹",
    flag: "https://flagcdn.com/h40/it.png",
  },
  {
    name: "Japan",
    code: "JP",
    phoneCode: "+81",
    flagEmoji: "🇯🇵",
    flag: "https://flagcdn.com/h40/jp.png",
  },
  {
    name: "Mexico",
    code: "MX",
    phoneCode: "+52",
    flagEmoji: "🇲🇽",
    flag: "https://flagcdn.com/h40/mx.png",
  },
  {
    name: "Netherlands",
    code: "NL",
    phoneCode: "+31",
    flagEmoji: "🇳🇱",
    flag: "https://flagcdn.com/h40/nl.png",
  },
  {
    name: "New Zealand",
    code: "NZ",
    phoneCode: "+64",
    flagEmoji: "🇳🇿",
    flag: "https://flagcdn.com/h40/nz.png",
  },
  {
    name: "Nigeria",
    code: "NG",
    phoneCode: "+234",
    flagEmoji: "🇳🇬",
    flag: "https://flagcdn.com/h40/ng.png",
  },
  {
    name: "Pakistan",
    code: "PK",
    phoneCode: "+92",
    flagEmoji: "🇵🇰",
    flag: "https://flagcdn.com/h40/pk.png",
  },
  {
    name: "Philippines",
    code: "PH",
    phoneCode: "+63",
    flagEmoji: "🇵🇭",
    flag: "https://flagcdn.com/h40/ph.png",
  },
  {
    name: "Russia",
    code: "RU",
    phoneCode: "+7",
    flagEmoji: "🇷🇺",
    flag: "https://flagcdn.com/h40/ru.png",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    phoneCode: "+966",
    flagEmoji: "🇸🇦",
    flag: "https://flagcdn.com/h40/sa.png",
  },
  {
    name: "South Africa",
    code: "ZA",
    phoneCode: "+27",
    flagEmoji: "🇿🇦",
    flag: "https://flagcdn.com/h40/za.png",
  },
  {
    name: "South Korea",
    code: "KR",
    phoneCode: "+82",
    flagEmoji: "🇰🇷",
    flag: "https://flagcdn.com/h40/kr.png",
  },
  {
    name: "Spain",
    code: "ES",
    phoneCode: "+34",
    flagEmoji: "🇪🇸",
    flag: "https://flagcdn.com/h40/es.png",
  },
  {
    name: "Sweden",
    code: "SE",
    phoneCode: "+46",
    flagEmoji: "🇸🇪",
    flag: "https://flagcdn.com/h40/se.png",
  },
  {
    name: "Switzerland",
    code: "CH",
    phoneCode: "+41",
    flagEmoji: "🇨🇭",
    flag: "https://flagcdn.com/h40/ch.png",
  },
  {
    name: "Turkey",
    code: "TR",
    phoneCode: "+90",
    flagEmoji: "🇹🇷",
    flag: "https://flagcdn.com/h40/tr.png",
  },
  {
    name: "Ukraine",
    code: "UA",
    phoneCode: "+380",
    flagEmoji: "🇺🇦",
    flag: "https://flagcdn.com/h40/ua.png",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    phoneCode: "+971",
    flagEmoji: "🇦🇪",
    flag: "https://flagcdn.com/h40/ae.png",
  },
  {
    name: "United Kingdom",
    code: "GB",
    phoneCode: "+44",
    flagEmoji: "🇬🇧",
    flag: "https://flagcdn.com/h40/gb.png",
  },
  {
    name: "United States",
    code: "US",
    phoneCode: "+1",
    flagEmoji: "🇺🇸",
    flag: "https://flagcdn.com/h40/us.png",
  },
  {
    name: "Vietnam",
    code: "VN",
    phoneCode: "+84",
    flagEmoji: "🇻🇳",
    flag: "https://flagcdn.com/h40/vn.png",
  },
];