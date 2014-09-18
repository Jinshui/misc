/**
 * Created with IntelliJ IDEA.
 * User: baonguyen
 * Date: 5/7/14
 * Time: 3:30 PM
 * To change this template use File | Settings | File Templates.
 */
/*global App, Ember, console,Em , moment, widgets, jQuery, document, window*/
window.US_MAJOR_TZ = [{olsen: 'America/Denver', abbrev: 'MDT'}, {abbrev: 'CDT', olsen: 'America/Chicago'},
    {olsen: 'America/Phoenix', abbrev: 'MST'}, {olsen: 'America/New_York', abbrev: 'EDT'},
    {olsen: 'America/Los_Angeles', abbrev: 'PDT'}, {olsen: 'America/Regina', abbrev: 'CST'}];

window.ACDS_TIMEZONE_MAP = {
    "Etc/GMT+12": "GMT-12:00",
    "Etc/GMT+11": "GMT-11:00",
    "Pacific/Midway": "SST",
    "Pacific/Niue": "NUT",
    "Pacific/Pago_Pago": "SST",
    "Pacific/Samoa": "SST",
    "US/Samoa": "SST",
    "America/Adak": "HADT",
    "America/Atka": "HADT",
    "Etc/GMT+10": "GMT-10:00",
    "HST": "HST",
    "Pacific/Honolulu": "HST",
    "Pacific/Johnston": "HST",
    "Pacific/Rarotonga": "CKT",
    "Pacific/Tahiti": "TAHT",
    "SystemV/HST10": "HST",
    "US/Aleutian": "HADT",
    "US/Hawaii": "HST",
    "Pacific/Marquesas": "MART",
    "AST": "AKDT",
    "America/Anchorage": "AKDT",
    "America/Juneau": "AKDT",
    "America/Nome": "AKDT",
    "America/Sitka": "AKDT",
    "America/Yakutat": "AKDT",
    "Etc/GMT+9": "GMT-09:00",
    "Pacific/Gambier": "GAMT",
    "SystemV/YST9": "AKST",
    "SystemV/YST9YDT": "AKDT",
    "US/Alaska": "AKDT",
    "America/Dawson": "PDT",
    "America/Ensenada": "PDT",
    "America/Los_Angeles": "PDT",
    "America/Metlakatla": "MeST",
    "America/Santa_Isabel": "PDT",
    "America/Tijuana": "PDT",
    "America/Vancouver": "PDT",
    "America/Whitehorse": "PDT",
    "Canada/Pacific": "PDT",
    "Canada/Yukon": "PDT",
    "Etc/GMT+8": "GMT-08:00",
    "Mexico/BajaNorte": "PDT",
    "PST": "PDT",
    "PST8PDT": "PDT",
    "Pacific/Pitcairn": "PST",
    "SystemV/PST8": "PST",
    "SystemV/PST8PDT": "PDT",
    "US/Pacific": "PDT",
    "US/Pacific-New": "PDT",
    "America/Boise": "MDT",
    "America/Cambridge_Bay": "MDT",
    "America/Chihuahua": "MDT",
    "America/Creston": "MST",
    "America/Dawson_Creek": "MST",
    "America/Denver": "MDT",
    "America/Edmonton": "MDT",
    "America/Hermosillo": "MST",
    "America/Inuvik": "MDT",
    "America/Mazatlan": "MDT",
    "America/Ojinaga": "MDT",
    "America/Phoenix": "MST",
    "America/Shiprock": "MDT",
    "America/Yellowknife": "MDT",
    "Canada/Mountain": "MDT",
    "Etc/GMT+7": "GMT-07:00",
    "MST": "MST",
    "MST7MDT": "MDT",
    "Mexico/BajaSur": "MDT",
    "Navajo": "MDT",
    "PNT": "MST",
    "SystemV/MST7": "MST",
    "SystemV/MST7MDT": "MDT",
    "US/Arizona": "MST",
    "US/Mountain": "MDT",
    "America/Bahia_Banderas": "CDT",
    "America/Belize": "CST",
    "America/Cancun": "CDT",
    "America/Chicago": "CDT",
    "America/Costa_Rica": "CST",
    "America/El_Salvador": "CST",
    "America/Guatemala": "CST",
    "America/Indiana/Knox": "CDT",
    "America/Indiana/Tell_City": "CDT",
    "America/Knox_IN": "CDT",
    "America/Managua": "CST",
    "America/Matamoros": "CDT",
    "America/Menominee": "CDT",
    "America/Merida": "CDT",
    "America/Mexico_City": "CDT",
    "America/Monterrey": "CDT",
    "America/North_Dakota/Beulah": "CDT",
    "America/North_Dakota/Center": "CDT",
    "America/North_Dakota/New_Salem": "CDT",
    "America/Rainy_River": "CDT",
    "America/Rankin_Inlet": "CDT",
    "America/Regina": "CST",
    "America/Resolute": "CDT",
    "America/Swift_Current": "CST",
    "America/Tegucigalpa": "CST",
    "America/Winnipeg": "CDT",
    "CST": "CDT",
    "CST6CDT": "CDT",
    "Canada/Central": "CDT",
    "Canada/East-Saskatchewan": "CST",
    "Canada/Saskatchewan": "CST",
    "Chile/EasterIsland": "EAST",
    "Etc/GMT+6": "GMT-06:00",
    "Mexico/General": "CDT",
    "Pacific/Easter": "EAST",
    "Pacific/Galapagos": "GALT",
    "SystemV/CST6": "CST",
    "SystemV/CST6CDT": "CDT",
    "US/Central": "CDT",
    "US/Indiana-Starke": "CDT",
    "America/Atikokan": "EST",
    "America/Bogota": "COT",
    "America/Cayman": "EST",
    "America/Coral_Harbour": "EST",
    "America/Detroit": "EDT",
    "America/Eirunepe": "ACT",
    "America/Fort_Wayne": "EDT",
    "America/Grand_Turk": "EDT",
    "America/Guayaquil": "ECT",
    "America/Havana": "CDT",
    "America/Indiana/Indianapolis": "EDT",
    "America/Indiana/Marengo": "EDT",
    "America/Indiana/Petersburg": "EDT",
    "America/Indiana/Vevay": "EDT",
    "America/Indiana/Vincennes": "EDT",
    "America/Indiana/Winamac": "EDT",
    "America/Indianapolis": "EDT",
    "America/Iqaluit": "EDT",
    "America/Jamaica": "EST",
    "America/Kentucky/Louisville": "EDT",
    "America/Kentucky/Monticello": "EDT",
    "America/Lima": "PET",
    "America/Louisville": "EDT",
    "America/Montreal": "EDT",
    "America/Nassau": "EDT",
    "America/New_York": "EDT",
    "America/Nipigon": "EDT",
    "America/Panama": "EST",
    "America/Pangnirtung": "EDT",
    "America/Port-au-Prince": "EDT",
    "America/Porto_Acre": "ACT",
    "America/Rio_Branco": "ACT",
    "America/Thunder_Bay": "EDT",
    "America/Toronto": "EDT",
    "Brazil/Acre": "ACT",
    "Canada/Eastern": "EDT",
    "Cuba": "CDT",
    "EST": "EST",
    "EST5EDT": "EDT",
    "Etc/GMT+5": "GMT-05:00",
    "IET": "EDT",
    "Jamaica": "EST",
    "SystemV/EST5": "EST",
    "SystemV/EST5EDT": "EDT",
    "US/East-Indiana": "EDT",
    "US/Eastern": "EDT",
    "US/Michigan": "EDT",
    "America/Caracas": "VET",
    "America/Anguilla": "AST",
    "America/Antigua": "AST",
    "America/Aruba": "AST",
    "America/Asuncion": "PYT",
    "America/Barbados": "AST",
    "America/Blanc-Sablon": "AST",
    "America/Boa_Vista": "AMT",
    "America/Campo_Grande": "AMT",
    "America/Cuiaba": "AMT",
    "America/Curacao": "AST",
    "America/Dominica": "AST",
    "America/Glace_Bay": "ADT",
    "America/Goose_Bay": "ADT",
    "America/Grenada": "AST",
    "America/Guadeloupe": "AST",
    "America/Guyana": "GYT",
    "America/Halifax": "ADT",
    "America/Kralendijk": "AST",
    "America/La_Paz": "BOT",
    "America/Lower_Princes": "AST",
    "America/Manaus": "AMT",
    "America/Marigot": "AST",
    "America/Martinique": "AST",
    "America/Moncton": "ADT",
    "America/Montserrat": "AST",
    "America/Port_of_Spain": "AST",
    "America/Porto_Velho": "AMT",
    "America/Puerto_Rico": "AST",
    "America/Santiago": "CLT",
    "America/Santo_Domingo": "AST",
    "America/St_Barthelemy": "AST",
    "America/St_Kitts": "AST",
    "America/St_Lucia": "AST",
    "America/St_Thomas": "AST",
    "America/St_Vincent": "AST",
    "America/Thule": "ADT",
    "America/Tortola": "AST",
    "America/Virgin": "AST",
    "Antarctica/Palmer": "CLT",
    "Atlantic/Bermuda": "ADT",
    "Brazil/West": "AMT",
    "Canada/Atlantic": "ADT",
    "Chile/Continental": "CLT",
    "Etc/GMT+4": "GMT-04:00",
    "PRT": "AST",
    "SystemV/AST4": "AST",
    "SystemV/AST4ADT": "ADT",
    "America/St_Johns": "NDT",
    "CNT": "NDT",
    "Canada/Newfoundland": "NDT",
    "AGT": "ART",
    "America/Araguaina": "BRT",
    "America/Argentina/Buenos_Aires": "ART",
    "America/Argentina/Catamarca": "ART",
    "America/Argentina/ComodRivadavia": "ART",
    "America/Argentina/Cordoba": "ART",
    "America/Argentina/Jujuy": "ART",
    "America/Argentina/La_Rioja": "ART",
    "America/Argentina/Mendoza": "ART",
    "America/Argentina/Rio_Gallegos": "ART",
    "America/Argentina/Salta": "ART",
    "America/Argentina/San_Juan": "ART",
    "America/Argentina/San_Luis": "ART",
    "America/Argentina/Tucuman": "ART",
    "America/Argentina/Ushuaia": "ART",
    "America/Bahia": "BRT",
    "America/Belem": "BRT",
    "America/Buenos_Aires": "ART",
    "America/Catamarca": "ART",
    "America/Cayenne": "GFT",
    "America/Cordoba": "ART",
    "America/Fortaleza": "BRT",
    "America/Godthab": "WGST",
    "America/Jujuy": "ART",
    "America/Maceio": "BRT",
    "America/Mendoza": "ART",
    "America/Miquelon": "PMDT",
    "America/Montevideo": "UYT",
    "America/Paramaribo": "SRT",
    "America/Recife": "BRT",
    "America/Rosario": "ART",
    "America/Santarem": "BRT",
    "America/Sao_Paulo": "BRT",
    "Antarctica/Rothera": "ROTT",
    "Atlantic/Stanley": "FKT",
    "BET": "BRT",
    "Brazil/East": "BRT",
    "Etc/GMT+3": "GMT-03:00",
    "America/Noronha": "FNT",
    "Atlantic/South_Georgia": "GST",
    "Brazil/DeNoronha": "FNT",
    "Etc/GMT+2": "GMT-02:00",
    "America/Scoresbysund": "EGST",
    "Atlantic/Azores": "AZOST",
    "Atlantic/Cape_Verde": "CVT",
    "Etc/GMT+1": "GMT-01:00",
    "Africa/Abidjan": "GMT",
    "Africa/Accra": "GMT",
    "Africa/Bamako": "GMT",
    "Africa/Banjul": "GMT",
    "Africa/Bissau": "GMT",
    "Africa/Casablanca": "WEST",
    "Africa/Conakry": "GMT",
    "Africa/Dakar": "GMT",
    "Africa/El_Aaiun": "WEST",
    "Africa/Freetown": "GMT",
    "Africa/Lome": "GMT",
    "Africa/Monrovia": "GMT",
    "Africa/Nouakchott": "GMT",
    "Africa/Ouagadougou": "GMT",
    "Africa/Sao_Tome": "GMT",
    "Africa/Timbuktu": "GMT",
    "America/Danmarkshavn": "GMT",
    "Atlantic/Canary": "WEST",
    "Atlantic/Faeroe": "WEST",
    "Atlantic/Faroe": "WEST",
    "Atlantic/Madeira": "WEST",
    "Atlantic/Reykjavik": "GMT",
    "Atlantic/St_Helena": "GMT",
    "Eire": "IST",
    "Etc/GMT": "GMT+00:00",
    "Etc/GMT+0": "GMT+00:00",
    "Etc/GMT-0": "GMT+00:00",
    "Etc/GMT0": "GMT+00:00",
    "Etc/Greenwich": "GMT",
    "Etc/UCT": "UTC",
    "Etc/UTC": "UTC",
    "Etc/Universal": "UTC",
    "Etc/Zulu": "UTC",
    "Europe/Belfast": "BST",
    "Europe/Dublin": "IST",
    "Europe/Guernsey": "BST",
    "Europe/Isle_of_Man": "BST",
    "Europe/Jersey": "BST",
    "Europe/Lisbon": "WEST",
    "Europe/London": "BST",
    "GB": "BST",
    "GB-Eire": "BST",
    "GMT": "GMT",
    "GMT0": "GMT+00:00",
    "Greenwich": "GMT",
    "Iceland": "GMT",
    "Portugal": "WEST",
    "UCT": "UTC",
    "UTC": "UTC",
    "Universal": "UTC",
    "WET": "WEST",
    "Zulu": "UTC",
    "Africa/Algiers": "CET",
    "Africa/Bangui": "WAT",
    "Africa/Brazzaville": "WAT",
    "Africa/Ceuta": "CEST",
    "Africa/Douala": "WAT",
    "Africa/Kinshasa": "WAT",
    "Africa/Lagos": "WAT",
    "Africa/Libreville": "WAT",
    "Africa/Luanda": "WAT",
    "Africa/Malabo": "WAT",
    "Africa/Ndjamena": "WAT",
    "Africa/Niamey": "WAT",
    "Africa/Porto-Novo": "WAT",
    "Africa/Tunis": "CET",
    "Africa/Windhoek": "WAT",
    "Arctic/Longyearbyen": "CEST",
    "Atlantic/Jan_Mayen": "CEST",
    "CET": "CEST",
    "ECT": "CEST",
    "Etc/GMT-1": "GMT+01:00",
    "Europe/Amsterdam": "CEST",
    "Europe/Andorra": "CEST",
    "Europe/Belgrade": "CEST",
    "Europe/Berlin": "CEST",
    "Europe/Bratislava": "CEST",
    "Europe/Brussels": "CEST",
    "Europe/Budapest": "CEST",
    "Europe/Busingen": "CEST",
    "Europe/Copenhagen": "CEST",
    "Europe/Gibraltar": "CEST",
    "Europe/Ljubljana": "CEST",
    "Europe/Luxembourg": "CEST",
    "Europe/Madrid": "CEST",
    "Europe/Malta": "CEST",
    "Europe/Monaco": "CEST",
    "Europe/Oslo": "CEST",
    "Europe/Paris": "CEST",
    "Europe/Podgorica": "CEST",
    "Europe/Prague": "CEST",
    "Europe/Rome": "CEST",
    "Europe/San_Marino": "CEST",
    "Europe/Sarajevo": "CEST",
    "Europe/Skopje": "CEST",
    "Europe/Stockholm": "CEST",
    "Europe/Tirane": "CEST",
    "Europe/Vaduz": "CEST",
    "Europe/Vatican": "CEST",
    "Europe/Vienna": "CEST",
    "Europe/Warsaw": "CEST",
    "Europe/Zagreb": "CEST",
    "Europe/Zurich": "CEST",
    "MET": "MEST",
    "Poland": "CEST",
    "ART": "EET",
    "Africa/Blantyre": "CAT",
    "Africa/Bujumbura": "CAT",
    "Africa/Cairo": "EET",
    "Africa/Gaborone": "CAT",
    "Africa/Harare": "CAT",
    "Africa/Johannesburg": "SAST",
    "Africa/Kigali": "CAT",
    "Africa/Lubumbashi": "CAT",
    "Africa/Lusaka": "CAT",
    "Africa/Maputo": "CAT",
    "Africa/Maseru": "SAST",
    "Africa/Mbabane": "SAST",
    "Africa/Tripoli": "EET",
    "Asia/Beirut": "EEST",
    "Asia/Damascus": "EEST",
    "Asia/Gaza": "EEST",
    "Asia/Hebron": "EEST",
    "Asia/Istanbul": "EEST",
    "Asia/Jerusalem": "IDT",
    "Asia/Nicosia": "EEST",
    "Asia/Tel_Aviv": "IDT",
    "CAT": "CAT",
    "EET": "EEST",
    "Egypt": "EET",
    "Etc/GMT-2": "GMT+02:00",
    "Europe/Athens": "EEST",
    "Europe/Bucharest": "EEST",
    "Europe/Chisinau": "EEST",
    "Europe/Helsinki": "EEST",
    "Europe/Istanbul": "EEST",
    "Europe/Kiev": "EEST",
    "Europe/Mariehamn": "EEST",
    "Europe/Nicosia": "EEST",
    "Europe/Riga": "EEST",
    "Europe/Simferopol": "EEST",
    "Europe/Sofia": "EEST",
    "Europe/Tallinn": "EEST",
    "Europe/Tiraspol": "EEST",
    "Europe/Uzhgorod": "EEST",
    "Europe/Vilnius": "EEST",
    "Europe/Zaporozhye": "EEST",
    "Israel": "IDT",
    "Libya": "EET",
    "Turkey": "EEST",
    "Africa/Addis_Ababa": "EAT",
    "Africa/Asmara": "EAT",
    "Africa/Asmera": "EAT",
    "Africa/Dar_es_Salaam": "EAT",
    "Africa/Djibouti": "EAT",
    "Africa/Juba": "EAT",
    "Africa/Kampala": "EAT",
    "Africa/Khartoum": "EAT",
    "Africa/Mogadishu": "EAT",
    "Africa/Nairobi": "EAT",
    "Antarctica/Syowa": "SYOT",
    "Asia/Aden": "AST",
    "Asia/Amman": "AST",
    "Asia/Baghdad": "AST",
    "Asia/Bahrain": "AST",
    "Asia/Kuwait": "AST",
    "Asia/Qatar": "AST",
    "Asia/Riyadh": "AST",
    "EAT": "EAT",
    "Etc/GMT-3": "GMT+03:00",
    "Europe/Kaliningrad": "FET",
    "Europe/Minsk": "FET",
    "Indian/Antananarivo": "EAT",
    "Indian/Comoro": "EAT",
    "Indian/Mayotte": "EAT",
    "Asia/Riyadh87": "GMT+03:07",
    "Asia/Riyadh88": "GMT+03:07",
    "Asia/Riyadh89": "GMT+03:07",
    "Mideast/Riyadh87": "GMT+03:07",
    "Mideast/Riyadh88": "GMT+03:07",
    "Mideast/Riyadh89": "GMT+03:07",
    "Asia/Tehran": "IRDT",
    "Iran": "IRDT",
    "Asia/Baku": "AZST",
    "Asia/Dubai": "GST",
    "Asia/Muscat": "GST",
    "Asia/Tbilisi": "GET",
    "Asia/Yerevan": "AMT",
    "Etc/GMT-4": "GMT+04:00",
    "Europe/Moscow": "MSK",
    "Europe/Samara": "SAMT",
    "Europe/Volgograd": "VOLT",
    "Indian/Mahe": "SCT",
    "Indian/Mauritius": "MUT",
    "Indian/Reunion": "RET",
    "NET": "AMT",
    "W-SU": "MSK",
    "Asia/Kabul": "AFT",
    "Antarctica/Mawson": "MAWT",
    "Asia/Aqtau": "AQTT",
    "Asia/Aqtobe": "AQTT",
    "Asia/Ashgabat": "TMT",
    "Asia/Ashkhabad": "TMT",
    "Asia/Dushanbe": "TJT",
    "Asia/Karachi": "PKT",
    "Asia/Oral": "ORAT",
    "Asia/Samarkand": "UZT",
    "Asia/Tashkent": "UZT",
    "Etc/GMT-5": "GMT+05:00",
    "Indian/Kerguelen": "TFT",
    "Indian/Maldives": "MVT",
    "PLT": "PKT",
    "Asia/Calcutta": "IST",
    "Asia/Colombo": "IST",
    "Asia/Kolkata": "IST",
    "IST": "IST",
    "Asia/Kathmandu": "NPT",
    "Asia/Katmandu": "NPT",
    "Antarctica/Vostok": "VOST",
    "Asia/Almaty": "ALMT",
    "Asia/Bishkek": "KGT",
    "Asia/Dacca": "BDT",
    "Asia/Dhaka": "BDT",
    "Asia/Qyzylorda": "QYZT",
    "Asia/Thimbu": "BTT",
    "Asia/Thimphu": "BTT",
    "Asia/Yekaterinburg": "YEKT",
    "BST": "BDT",
    "Etc/GMT-6": "GMT+06:00",
    "Indian/Chagos": "IOT",
    "Asia/Rangoon": "MMT",
    "Indian/Cocos": "CCT",
    "Antarctica/Davis": "DAVT",
    "Asia/Bangkok": "ICT",
    "Asia/Ho_Chi_Minh": "ICT",
    "Asia/Hovd": "HOVT",
    "Asia/Jakarta": "WIB",
    "Asia/Novokuznetsk": "NOVT",
    "Asia/Novosibirsk": "NOVT",
    "Asia/Omsk": "OMST",
    "Asia/Phnom_Penh": "ICT",
    "Asia/Pontianak": "WIB",
    "Asia/Saigon": "ICT",
    "Asia/Vientiane": "ICT",
    "Etc/GMT-7": "GMT+07:00",
    "Indian/Christmas": "CXT",
    "VST": "ICT",
    "Antarctica/Casey": "WST",
    "Asia/Brunei": "BNT",
    "Asia/Choibalsan": "CHOT",
    "Asia/Chongqing": "CST",
    "Asia/Chungking": "CST",
    "Asia/Harbin": "CST",
    "Asia/Hong_Kong": "HKT",
    "Asia/Kashgar": "CST",
    "Asia/Krasnoyarsk": "KRAT",
    "Asia/Kuala_Lumpur": "MYT",
    "Asia/Kuching": "MYT",
    "Asia/Macao": "CST",
    "Asia/Macau": "CST",
    "Asia/Makassar": "WITA",
    "Asia/Manila": "PHT",
    "Asia/Shanghai": "CST",
    "Asia/Singapore": "SGT",
    "Asia/Taipei": "CST",
    "Asia/Ujung_Pandang": "WITA",
    "Asia/Ulaanbaatar": "ULAT",
    "Asia/Ulan_Bator": "ULAT",
    "Asia/Urumqi": "CST",
    "Australia/Perth": "WST",
    "Australia/West": "WST",
    "CTT": "CST",
    "Etc/GMT-8": "GMT+08:00",
    "Hongkong": "HKT",
    "PRC": "CST",
    "Singapore": "SGT",
    "Australia/Eucla": "CWST",
    "Asia/Dili": "TLT",
    "Asia/Irkutsk": "IRKT",
    "Asia/Jayapura": "WIT",
    "Asia/Pyongyang": "KST",
    "Asia/Seoul": "KST",
    "Asia/Tokyo": "JST",
    "Etc/GMT-9": "GMT+09:00",
    "JST": "JST",
    "Japan": "JST",
    "Pacific/Palau": "PWT",
    "ROK": "KST",
    "ACT": "CST",
    "Australia/Adelaide": "CST",
    "Australia/Broken_Hill": "CST",
    "Australia/Darwin": "CST",
    "Australia/North": "CST",
    "Australia/South": "CST",
    "Australia/Yancowinna": "CST",
    "AET": "EST",
    "Antarctica/DumontDUrville": "DDUT",
    "Asia/Khandyga": "YAKT",
    "Asia/Yakutsk": "YAKT",
    "Australia/ACT": "EST",
    "Australia/Brisbane": "EST",
    "Australia/Canberra": "EST",
    "Australia/Currie": "EST",
    "Australia/Hobart": "EST",
    "Australia/Lindeman": "EST",
    "Australia/Melbourne": "EST",
    "Australia/NSW": "EST",
    "Australia/Queensland": "EST",
    "Australia/Sydney": "EST",
    "Australia/Tasmania": "EST",
    "Australia/Victoria": "EST",
    "Etc/GMT-10": "GMT+10:00",
    "Pacific/Chuuk": "CHUT",
    "Pacific/Guam": "ChST",
    "Pacific/Port_Moresby": "PGT",
    "Pacific/Saipan": "ChST",
    "Pacific/Truk": "CHUT",
    "Pacific/Yap": "CHUT",
    "Australia/LHI": "LHST",
    "Australia/Lord_Howe": "LHST",
    "Antarctica/Macquarie": "MIST",
    "Asia/Sakhalin": "SAKT",
    "Asia/Ust-Nera": "VLAT",
    "Asia/Vladivostok": "VLAT",
    "Etc/GMT-11": "GMT+11:00",
    "Pacific/Efate": "VUT",
    "Pacific/Guadalcanal": "SBT",
    "Pacific/Kosrae": "KOST",
    "Pacific/Noumea": "NCT",
    "Pacific/Pohnpei": "PONT",
    "Pacific/Ponape": "PONT",
    "SST": "SBT",
    "Pacific/Norfolk": "NFT",
    "Antarctica/McMurdo": "NZST",
    "Antarctica/South_Pole": "NZST",
    "Asia/Anadyr": "ANAT",
    "Asia/Kamchatka": "PETT",
    "Asia/Magadan": "MAGT",
    "Etc/GMT-12": "GMT+12:00",
    "Kwajalein": "MHT",
    "NST": "NZST",
    "NZ": "NZST",
    "Pacific/Auckland": "NZST",
    "Pacific/Fiji": "FJT",
    "Pacific/Funafuti": "TVT",
    "Pacific/Kwajalein": "MHT",
    "Pacific/Majuro": "MHT",
    "Pacific/Nauru": "NRT",
    "Pacific/Tarawa": "GILT",
    "Pacific/Wake": "WAKT",
    "Pacific/Wallis": "WFT",
    "NZ-CHAT": "CHAST",
    "Pacific/Chatham": "CHAST",
    "Etc/GMT-13": "GMT+13:00",
    "MIT": "WST",
    "Pacific/Apia": "WST",
    "Pacific/Enderbury": "PHOT",
    "Pacific/Fakaofo": "TKT",
    "Pacific/Tongatapu": "TOT",
    "Etc/GMT-14": "GMT+14:00",
    "Pacific/Kiritimati": "LINT"
};
/**
 * If this is the source of memory consumption, we can reduce the list based on the time zones (countries) that we
 * support. Right now, just include everything.
 */

window.GIGANTIC_MOMENT_TZ_INFO = {
    "zones": {
        "Africa/Abidjan": [
            "-0:16:8 - LMT 1912 -0:16:8",
            "0 - GMT"
        ],
        "Africa/Accra": [
            "-0:0:52 - LMT 1918 -0:0:52",
            "0 Ghana %s"
        ],
        "Africa/Addis_Ababa": [
            "2:34:48 - LMT 1870 2:34:48",
            "2:35:20 - ADMT 1936_4_5 2:35:20",
            "3 - EAT"
        ],
        "Africa/Algiers": [
            "0:12:12 - LMT 1891_2_15_0_1 0:12:12",
            "0:9:21 - PMT 1911_2_11 0:9:21",
            "0 Algeria WE%sT 1940_1_25_2",
            "1 Algeria CE%sT 1946_9_7 1",
            "0 - WET 1956_0_29",
            "1 - CET 1963_3_14 1",
            "0 Algeria WE%sT 1977_9_21 1",
            "1 Algeria CE%sT 1979_9_26 1",
            "0 Algeria WE%sT 1981_4",
            "1 - CET"
        ],
        "Africa/Asmara": [
            "2:35:32 - LMT 1870 2:35:32",
            "2:35:32 - AMT 1890 2:35:32",
            "2:35:20 - ADMT 1936_4_5 2:35:20",
            "3 - EAT"
        ],
        "Africa/Bamako": [
            "-0:32 - LMT 1912 -0:32",
            "0 - GMT 1934_1_26",
            "-1 - WAT 1960_5_20 -1",
            "0 - GMT"
        ],
        "Africa/Bangui": [
            "1:14:20 - LMT 1912 1:14:20",
            "1 - WAT"
        ],
        "Africa/Banjul": [
            "-1:6:36 - LMT 1912 -1:6:36",
            "-1:6:36 - BMT 1935 -1:6:36",
            "-1 - WAT 1964 -1",
            "0 - GMT"
        ],
        "Africa/Bissau": [
            "-1:2:20 - LMT 1911_4_26 -1:2:20",
            "-1 - WAT 1975 -1",
            "0 - GMT"
        ],
        "Africa/Blantyre": [
            "2:20 - LMT 1903_2 2:20",
            "2 - CAT"
        ],
        "Africa/Brazzaville": [
            "1:1:8 - LMT 1912 1:1:8",
            "1 - WAT"
        ],
        "Africa/Bujumbura": [
            "1:57:28 - LMT 1890 1:57:28",
            "2 - CAT"
        ],
        "Africa/Cairo": [
            "2:5:9 - LMT 1900_9 2:5:9",
            "2 Egypt EE%sT"
        ],
        "Africa/Casablanca": [
            "-0:30:20 - LMT 1913_9_26 -0:30:20",
            "0 Morocco WE%sT 1984_2_16",
            "1 - CET 1986 1",
            "0 Morocco WE%sT"
        ],
        "Africa/Ceuta": [
            "-0:21:16 - LMT 1901 -0:21:16",
            "0 - WET 1918_4_6_23",
            "1 - WEST 1918_9_7_23 1",
            "0 - WET 1924",
            "0 Spain WE%sT 1929",
            "0 SpainAfrica WE%sT 1984_2_16",
            "1 - CET 1986 1",
            "1 EU CE%sT"
        ],
        "Africa/Conakry": [
            "-0:54:52 - LMT 1912 -0:54:52",
            "0 - GMT 1934_1_26",
            "-1 - WAT 1960 -1",
            "0 - GMT"
        ],
        "Africa/Dakar": [
            "-1:9:44 - LMT 1912 -1:9:44",
            "-1 - WAT 1941_5 -1",
            "0 - GMT"
        ],
        "Africa/Dar_es_Salaam": [
            "2:37:8 - LMT 1931 2:37:8",
            "3 - EAT 1948 3",
            "2:45 - BEAUT 1961 2:45",
            "3 - EAT"
        ],
        "Africa/Djibouti": [
            "2:52:36 - LMT 1911_6 2:52:36",
            "3 - EAT"
        ],
        "Africa/Douala": [
            "0:38:48 - LMT 1912 0:38:48",
            "1 - WAT"
        ],
        "Africa/El_Aaiun": [
            "-0:52:48 - LMT 1934_0 -0:52:48",
            "-1 - WAT 1976_3_14 -1",
            "0 - WET"
        ],
        "Africa/Freetown": [
            "-0:53 - LMT 1882 -0:53",
            "-0:53 - FMT 1913_5 -0:53",
            "-1 SL %s 1957 -1",
            "0 SL %s"
        ],
        "Africa/Gaborone": [
            "1:43:40 - LMT 1885 1:43:40",
            "1:30 - SAST 1903_2 1:30",
            "2 - CAT 1943_8_19_2 2",
            "3 - CAST 1944_2_19_2 3",
            "2 - CAT"
        ],
        "Africa/Harare": [
            "2:4:12 - LMT 1903_2 2:4:12",
            "2 - CAT"
        ],
        "Africa/Johannesburg": [
            "1:52 - LMT 1892_1_8 1:52",
            "1:30 - SAST 1903_2 1:30",
            "2 SA SAST"
        ],
        "Africa/Juba": [
            "2:6:24 - LMT 1931 2:6:24",
            "2 Sudan CA%sT 2000_0_15_12 2",
            "3 - EAT"
        ],
        "Africa/Kampala": [
            "2:9:40 - LMT 1928_6 2:9:40",
            "3 - EAT 1930 3",
            "2:30 - BEAT 1948 2:30",
            "2:45 - BEAUT 1957 2:45",
            "3 - EAT"
        ],
        "Africa/Khartoum": [
            "2:10:8 - LMT 1931 2:10:8",
            "2 Sudan CA%sT 2000_0_15_12 2",
            "3 - EAT"
        ],
        "Africa/Kigali": [
            "2:0:16 - LMT 1935_5 2:0:16",
            "2 - CAT"
        ],
        "Africa/Kinshasa": [
            "1:1:12 - LMT 1897_10_9 1:1:12",
            "1 - WAT"
        ],
        "Africa/Lagos": [
            "0:13:36 - LMT 1919_8 0:13:36",
            "1 - WAT"
        ],
        "Africa/Libreville": [
            "0:37:48 - LMT 1912 0:37:48",
            "1 - WAT"
        ],
        "Africa/Lome": [
            "0:4:52 - LMT 1893 0:4:52",
            "0 - GMT"
        ],
        "Africa/Luanda": [
            "0:52:56 - LMT 1892 0:52:56",
            "0:52:4 - AOT 1911_4_26 0:52:4",
            "1 - WAT"
        ],
        "Africa/Lubumbashi": [
            "1:49:52 - LMT 1897_10_9 1:49:52",
            "2 - CAT"
        ],
        "Africa/Lusaka": [
            "1:53:8 - LMT 1903_2 1:53:8",
            "2 - CAT"
        ],
        "Africa/Malabo": [
            "0:35:8 - LMT 1912 0:35:8",
            "0 - GMT 1963_11_15",
            "1 - WAT"
        ],
        "Africa/Maputo": [
            "2:10:20 - LMT 1903_2 2:10:20",
            "2 - CAT"
        ],
        "Africa/Maseru": [
            "1:50 - LMT 1903_2 1:50",
            "2 - SAST 1943_8_19_2 2",
            "3 - SAST 1944_2_19_2 3",
            "2 - SAST"
        ],
        "Africa/Mbabane": [
            "2:4:24 - LMT 1903_2 2:4:24",
            "2 - SAST"
        ],
        "Africa/Mogadishu": [
            "3:1:28 - LMT 1893_10 3:1:28",
            "3 - EAT 1931 3",
            "2:30 - BEAT 1957 2:30",
            "3 - EAT"
        ],
        "Africa/Monrovia": [
            "-0:43:8 - LMT 1882 -0:43:8",
            "-0:43:8 - MMT 1919_2 -0:43:8",
            "-0:44:30 - LRT 1972_4 -0:44:30",
            "0 - GMT"
        ],
        "Africa/Nairobi": [
            "2:27:16 - LMT 1928_6 2:27:16",
            "3 - EAT 1930 3",
            "2:30 - BEAT 1940 2:30",
            "2:45 - BEAUT 1960 2:45",
            "3 - EAT"
        ],
        "Africa/Ndjamena": [
            "1:0:12 - LMT 1912 1:0:12",
            "1 - WAT 1979_9_14 1",
            "2 - WAST 1980_2_8 2",
            "1 - WAT"
        ],
        "Africa/Niamey": [
            "0:8:28 - LMT 1912 0:8:28",
            "-1 - WAT 1934_1_26 -1",
            "0 - GMT 1960",
            "1 - WAT"
        ],
        "Africa/Nouakchott": [
            "-1:3:48 - LMT 1912 -1:3:48",
            "0 - GMT 1934_1_26",
            "-1 - WAT 1960_10_28 -1",
            "0 - GMT"
        ],
        "Africa/Ouagadougou": [
            "-0:6:4 - LMT 1912 -0:6:4",
            "0 - GMT"
        ],
        "Africa/Porto-Novo": [
            "0:10:28 - LMT 1912 0:10:28",
            "0 - GMT 1934_1_26",
            "1 - WAT"
        ],
        "Africa/Sao_Tome": [
            "0:26:56 - LMT 1884 0:26:56",
            "-0:36:32 - LMT 1912 -0:36:32",
            "0 - GMT"
        ],
        "Africa/Tripoli": [
            "0:52:44 - LMT 1920 0:52:44",
            "1 Libya CE%sT 1959 1",
            "2 - EET 1982 2",
            "1 Libya CE%sT 1990_4_4 1",
            "2 - EET 1996_8_30 2",
            "1 Libya CE%sT 1997_9_4 2",
            "2 - EET 2012_10_10_2 2",
            "1 Libya CE%sT"
        ],
        "Africa/Tunis": [
            "0:40:44 - LMT 1881_4_12 0:40:44",
            "0:9:21 - PMT 1911_2_11 0:9:21",
            "1 Tunisia CE%sT"
        ],
        "Africa/Windhoek": [
            "1:8:24 - LMT 1892_1_8 1:8:24",
            "1:30 - SWAT 1903_2 1:30",
            "2 - SAST 1942_8_20_2 2",
            "3 - SAST 1943_2_21_2 3",
            "2 - SAST 1990_2_21 2",
            "2 - CAT 1994_3_3 2",
            "1 Namibia WA%sT"
        ],
        "America/Adak": [
            "12:13:21 - LMT 1867_9_18 12:13:21",
            "-11:46:38 - LMT 1900_7_20_12 -11:46:38",
            "-11 - NST 1942 -11",
            "-11 US N%sT 1946 -11",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1969 -11",
            "-11 US B%sT 1983_9_30_2 -10",
            "-10 US AH%sT 1983_10_30 -10",
            "-10 US HA%sT"
        ],
        "America/Anchorage": [
            "14:0:24 - LMT 1867_9_18 14:0:24",
            "-9:59:36 - LMT 1900_7_20_12 -9:59:36",
            "-10 - CAT 1942 -10",
            "-10 US CAT/CAWT 1945_7_14_23",
            "-10 US CAT/CAPT 1946 -10",
            "-10 - CAT 1967_3 -10",
            "-10 - AHST 1969 -10",
            "-10 US AH%sT 1983_9_30_2 -9",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Anguilla": [
            "-4:12:16 - LMT 1912_2_2 -4:12:16",
            "-4 - AST"
        ],
        "America/Antigua": [
            "-4:7:12 - LMT 1912_2_2 -4:7:12",
            "-5 - EST 1951 -5",
            "-4 - AST"
        ],
        "America/Araguaina": [
            "-3:12:48 - LMT 1914 -3:12:48",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1995_8_14 -3",
            "-3 Brazil BR%sT 2003_8_24 -3",
            "-3 - BRT 2012_9_21 -3",
            "-3 Brazil BR%sT"
        ],
        "America/Argentina/Buenos_Aires": [
            "-3:53:48 - LMT 1894_9_31 -3:53:48",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT"
        ],
        "America/Argentina/Catamarca": [
            "-4:23:8 - LMT 1894_9_31 -4:23:8",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Cordoba": [
            "-4:16:48 - LMT 1894_9_31 -4:16:48",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT"
        ],
        "America/Argentina/Jujuy": [
            "-4:21:12 - LMT 1894_9_31 -4:21:12",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1990_2_4 -2",
            "-4 - WART 1990_9_28 -4",
            "-3 - WARST 1991_2_17 -3",
            "-4 - WART 1991_9_6 -4",
            "-2 - ARST 1992 -2",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/La_Rioja": [
            "-4:27:24 - LMT 1894_9_31 -4:27:24",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_1 -2",
            "-4 - WART 1991_4_7 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Mendoza": [
            "-4:35:16 - LMT 1894_9_31 -4:35:16",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1990_2_4 -2",
            "-4 - WART 1990_9_15 -4",
            "-3 - WARST 1991_2_1 -3",
            "-4 - WART 1991_9_15 -4",
            "-3 - WARST 1992_2_1 -3",
            "-4 - WART 1992_9_18 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_4_23 -3",
            "-4 - WART 2004_8_26 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Rio_Gallegos": [
            "-4:36:52 - LMT 1894_9_31 -4:36:52",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Salta": [
            "-4:21:40 - LMT 1894_9_31 -4:21:40",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/San_Juan": [
            "-4:34:4 - LMT 1894_9_31 -4:34:4",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_1 -2",
            "-4 - WART 1991_4_7 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_4_31 -3",
            "-4 - WART 2004_6_25 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/San_Luis": [
            "-4:25:24 - LMT 1894_9_31 -4:25:24",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1990 -2",
            "-2 - ARST 1990_2_14 -2",
            "-4 - WART 1990_9_15 -4",
            "-3 - WARST 1991_2_1 -3",
            "-4 - WART 1991_5_1 -4",
            "-3 - ART 1999_9_3 -3",
            "-3 - WARST 2000_2_3 -3",
            "-3 - ART 2004_4_31 -3",
            "-4 - WART 2004_6_25 -4",
            "-3 Arg AR%sT 2008_0_21 -2",
            "-4 SanLuis WAR%sT"
        ],
        "America/Argentina/Tucuman": [
            "-4:20:52 - LMT 1894_9_31 -4:20:52",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_13 -4",
            "-3 Arg AR%sT"
        ],
        "America/Argentina/Ushuaia": [
            "-4:33:12 - LMT 1894_9_31 -4:33:12",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_4_30 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Aruba": [
            "-4:40:24 - LMT 1912_1_12 -4:40:24",
            "-4:30 - ANT 1965 -4:30",
            "-4 - AST"
        ],
        "America/Asuncion": [
            "-3:50:40 - LMT 1890 -3:50:40",
            "-3:50:40 - AMT 1931_9_10 -3:50:40",
            "-4 - PYT 1972_9 -4",
            "-3 - PYT 1974_3 -3",
            "-4 Para PY%sT"
        ],
        "America/Atikokan": [
            "-6:6:28 - LMT 1895 -6:6:28",
            "-6 Canada C%sT 1940_8_29 -6",
            "-5 - CDT 1942_1_9_2 -6",
            "-6 Canada C%sT 1945_8_30_2 -5",
            "-5 - EST"
        ],
        "America/Bahia": [
            "-2:34:4 - LMT 1914 -2:34:4",
            "-3 Brazil BR%sT 2003_8_24 -3",
            "-3 - BRT 2011_9_16 -3",
            "-3 Brazil BR%sT 2012_9_21 -3",
            "-3 - BRT"
        ],
        "America/Bahia_Banderas": [
            "-7:1 - LMT 1921_11_31_23_59 -7:1",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1942_3_24 -6",
            "-7 - MST 1949_0_14 -7",
            "-8 - PST 1970 -8",
            "-7 Mexico M%sT 2010_3_4_2 -7",
            "-6 Mexico C%sT"
        ],
        "America/Barbados": [
            "-3:58:29 - LMT 1924 -3:58:29",
            "-3:58:29 - BMT 1932 -3:58:29",
            "-4 Barb A%sT"
        ],
        "America/Belem": [
            "-3:13:56 - LMT 1914 -3:13:56",
            "-3 Brazil BR%sT 1988_8_12 -3",
            "-3 - BRT"
        ],
        "America/Belize": [
            "-5:52:48 - LMT 1912_3 -5:52:48",
            "-6 Belize C%sT"
        ],
        "America/Blanc-Sablon": [
            "-3:48:28 - LMT 1884 -3:48:28",
            "-4 Canada A%sT 1970 -4",
            "-4 - AST"
        ],
        "America/Boa_Vista": [
            "-4:2:40 - LMT 1914 -4:2:40",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT 1999_8_30 -4",
            "-4 Brazil AM%sT 2000_9_15 -3",
            "-4 - AMT"
        ],
        "America/Bogota": [
            "-4:56:16 - LMT 1884_2_13 -4:56:16",
            "-4:56:16 - BMT 1914_10_23 -4:56:16",
            "-5 CO CO%sT"
        ],
        "America/Boise": [
            "-7:44:49 - LMT 1883_10_18_12_15_11 -7:44:49",
            "-8 US P%sT 1923_4_13_2 -8",
            "-7 US M%sT 1974 -7",
            "-7 - MST 1974_1_3_2 -7",
            "-7 US M%sT"
        ],
        "America/Cambridge_Bay": [
            "0 - zzz 1920",
            "-7 NT_YK M%sT 1999_9_31_2 -6",
            "-6 Canada C%sT 2000_9_29_2 -5",
            "-5 - EST 2000_10_5_0 -5",
            "-6 - CST 2001_3_1_3 -6",
            "-7 Canada M%sT"
        ],
        "America/Campo_Grande": [
            "-3:38:28 - LMT 1914 -3:38:28",
            "-4 Brazil AM%sT"
        ],
        "America/Cancun": [
            "-5:47:4 - LMT 1922_0_1_0_12_56 -5:47:4",
            "-6 - CST 1981_11_23 -6",
            "-5 Mexico E%sT 1998_7_2_2 -4",
            "-6 Mexico C%sT"
        ],
        "America/Caracas": [
            "-4:27:44 - LMT 1890 -4:27:44",
            "-4:27:40 - CMT 1912_1_12 -4:27:40",
            "-4:30 - VET 1965 -4:30",
            "-4 - VET 2007_11_9_03 -4",
            "-4:30 - VET"
        ],
        "America/Cayenne": [
            "-3:29:20 - LMT 1911_6 -3:29:20",
            "-4 - GFT 1967_9 -4",
            "-3 - GFT"
        ],
        "America/Cayman": [
            "-5:25:32 - LMT 1890 -5:25:32",
            "-5:7:12 - KMT 1912_1 -5:7:12",
            "-5 - EST"
        ],
        "America/Chicago": [
            "-5:50:36 - LMT 1883_10_18_12_9_24 -5:50:36",
            "-6 US C%sT 1920 -6",
            "-6 Chicago C%sT 1936_2_1_2 -6",
            "-5 - EST 1936_10_15_2 -5",
            "-6 Chicago C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Chicago C%sT 1967 -6",
            "-6 US C%sT"
        ],
        "America/Chihuahua": [
            "-7:4:20 - LMT 1921_11_31_23_55_40 -7:4:20",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1996 -6",
            "-6 Mexico C%sT 1998 -6",
            "-6 - CST 1998_3_5_3 -6",
            "-7 Mexico M%sT"
        ],
        "America/Costa_Rica": [
            "-5:36:13 - LMT 1890 -5:36:13",
            "-5:36:13 - SJMT 1921_0_15 -5:36:13",
            "-6 CR C%sT"
        ],
        "America/Creston": [
            "-7:46:4 - LMT 1884 -7:46:4",
            "-7 - MST 1916_9_1 -7",
            "-8 - PST 1918_5_2 -8",
            "-7 - MST"
        ],
        "America/Cuiaba": [
            "-3:44:20 - LMT 1914 -3:44:20",
            "-4 Brazil AM%sT 2003_8_24 -4",
            "-4 - AMT 2004_9_1 -4",
            "-4 Brazil AM%sT"
        ],
        "America/Curacao": [
            "-4:35:47 - LMT 1912_1_12 -4:35:47",
            "-4:30 - ANT 1965 -4:30",
            "-4 - AST"
        ],
        "America/Danmarkshavn": [
            "-1:14:40 - LMT 1916_6_28 -1:14:40",
            "-3 - WGT 1980_3_6_2 -3",
            "-3 EU WG%sT 1996 -3",
            "0 - GMT"
        ],
        "America/Dawson": [
            "-9:17:40 - LMT 1900_7_20 -9:17:40",
            "-9 NT_YK Y%sT 1973_9_28_0 -9",
            "-8 NT_YK P%sT 1980 -8",
            "-8 Canada P%sT"
        ],
        "America/Dawson_Creek": [
            "-8:0:56 - LMT 1884 -8:0:56",
            "-8 Canada P%sT 1947 -8",
            "-8 Vanc P%sT 1972_7_30_2 -7",
            "-7 - MST"
        ],
        "America/Denver": [
            "-6:59:56 - LMT 1883_10_18_12_0_4 -6:59:56",
            "-7 US M%sT 1920 -7",
            "-7 Denver M%sT 1942 -7",
            "-7 US M%sT 1946 -7",
            "-7 Denver M%sT 1967 -7",
            "-7 US M%sT"
        ],
        "America/Detroit": [
            "-5:32:11 - LMT 1905 -5:32:11",
            "-6 - CST 1915_4_15_2 -6",
            "-5 - EST 1942 -5",
            "-5 US E%sT 1946 -5",
            "-5 Detroit E%sT 1973 -5",
            "-5 US E%sT 1975 -5",
            "-5 - EST 1975_3_27_2 -5",
            "-5 US E%sT"
        ],
        "America/Dominica": [
            "-4:5:36 - LMT 1911_6_1_0_1 -4:5:36",
            "-4 - AST"
        ],
        "America/Edmonton": [
            "-7:33:52 - LMT 1906_8 -7:33:52",
            "-7 Edm M%sT 1987 -7",
            "-7 Canada M%sT"
        ],
        "America/Eirunepe": [
            "-4:39:28 - LMT 1914 -4:39:28",
            "-5 Brazil AC%sT 1988_8_12 -5",
            "-5 - ACT 1993_8_28 -5",
            "-5 Brazil AC%sT 1994_8_22 -5",
            "-5 - ACT 2008_5_24_00 -5",
            "-4 - AMT"
        ],
        "America/El_Salvador": [
            "-5:56:48 - LMT 1921 -5:56:48",
            "-6 Salv C%sT"
        ],
        "America/Fortaleza": [
            "-2:34 - LMT 1914 -2:34",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1999_8_30 -3",
            "-3 Brazil BR%sT 2000_9_22 -2",
            "-3 - BRT 2001_8_13 -3",
            "-3 Brazil BR%sT 2002_9_1 -3",
            "-3 - BRT"
        ],
        "America/Glace_Bay": [
            "-3:59:48 - LMT 1902_5_15 -3:59:48",
            "-4 Canada A%sT 1953 -4",
            "-4 Halifax A%sT 1954 -4",
            "-4 - AST 1972 -4",
            "-4 Halifax A%sT 1974 -4",
            "-4 Canada A%sT"
        ],
        "America/Godthab": [
            "-3:26:56 - LMT 1916_6_28 -3:26:56",
            "-3 - WGT 1980_3_6_2 -3",
            "-3 EU WG%sT"
        ],
        "America/Goose_Bay": [
            "-4:1:40 - LMT 1884 -4:1:40",
            "-3:30:52 - NST 1918 -3:30:52",
            "-3:30:52 Canada N%sT 1919 -3:30:52",
            "-3:30:52 - NST 1935_2_30 -3:30:52",
            "-3:30 - NST 1936 -3:30",
            "-3:30 StJohns N%sT 1942_4_11 -3:30",
            "-3:30 Canada N%sT 1946 -3:30",
            "-3:30 StJohns N%sT 1966_2_15_2 -3:30",
            "-4 StJohns A%sT 2011_10 -3",
            "-4 Canada A%sT"
        ],
        "America/Grand_Turk": [
            "-4:44:32 - LMT 1890 -4:44:32",
            "-5:7:12 - KMT 1912_1 -5:7:12",
            "-5 TC E%sT"
        ],
        "America/Grenada": [
            "-4:7 - LMT 1911_6 -4:7",
            "-4 - AST"
        ],
        "America/Guadeloupe": [
            "-4:6:8 - LMT 1911_5_8 -4:6:8",
            "-4 - AST"
        ],
        "America/Guatemala": [
            "-6:2:4 - LMT 1918_9_5 -6:2:4",
            "-6 Guat C%sT"
        ],
        "America/Guayaquil": [
            "-5:19:20 - LMT 1890 -5:19:20",
            "-5:14 - QMT 1931 -5:14",
            "-5 - ECT"
        ],
        "America/Guyana": [
            "-3:52:40 - LMT 1915_2 -3:52:40",
            "-3:45 - GBGT 1966_4_26 -3:45",
            "-3:45 - GYT 1975_6_31 -3:45",
            "-3 - GYT 1991 -3",
            "-4 - GYT"
        ],
        "America/Halifax": [
            "-4:14:24 - LMT 1902_5_15 -4:14:24",
            "-4 Halifax A%sT 1918 -4",
            "-4 Canada A%sT 1919 -4",
            "-4 Halifax A%sT 1942_1_9_2 -4",
            "-4 Canada A%sT 1946 -4",
            "-4 Halifax A%sT 1974 -4",
            "-4 Canada A%sT"
        ],
        "America/Havana": [
            "-5:29:28 - LMT 1890 -5:29:28",
            "-5:29:36 - HMT 1925_6_19_12 -5:29:36",
            "-5 Cuba C%sT"
        ],
        "America/Hermosillo": [
            "-7:23:52 - LMT 1921_11_31_23_36_8 -7:23:52",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1942_3_24 -6",
            "-7 - MST 1949_0_14 -7",
            "-8 - PST 1970 -8",
            "-7 Mexico M%sT 1999 -7",
            "-7 - MST"
        ],
        "America/Indiana/Indianapolis": [
            "-5:44:38 - LMT 1883_10_18_12_15_22 -5:44:38",
            "-6 US C%sT 1920 -6",
            "-6 Indianapolis C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Indianapolis C%sT 1955_3_24_2 -6",
            "-5 - EST 1957_8_29_2 -5",
            "-6 - CST 1958_3_27_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Knox": [
            "-5:46:30 - LMT 1883_10_18_12_13_30 -5:46:30",
            "-6 US C%sT 1947 -6",
            "-6 Starke C%sT 1962_3_29_2 -6",
            "-5 - EST 1963_9_27_2 -5",
            "-6 US C%sT 1991_9_27_2 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT"
        ],
        "America/Indiana/Marengo": [
            "-5:45:23 - LMT 1883_10_18_12_14_37 -5:45:23",
            "-6 US C%sT 1951 -6",
            "-6 Marengo C%sT 1961_3_30_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1974_0_6_2 -5",
            "-5 - CDT 1974_9_27_2 -5",
            "-5 US E%sT 1976 -5",
            "-5 - EST 2006 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Petersburg": [
            "-5:49:7 - LMT 1883_10_18_12_10_53 -5:49:7",
            "-6 US C%sT 1955 -6",
            "-6 Pike C%sT 1965_3_25_2 -6",
            "-5 - EST 1966_9_30_2 -5",
            "-6 US C%sT 1977_9_30_2 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT 2007_10_4_2 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Tell_City": [
            "-5:47:3 - LMT 1883_10_18_12_12_57 -5:47:3",
            "-6 US C%sT 1946 -6",
            "-6 Perry C%sT 1964_3_26_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT"
        ],
        "America/Indiana/Vevay": [
            "-5:40:16 - LMT 1883_10_18_12_19_44 -5:40:16",
            "-6 US C%sT 1954_3_25_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1973 -5",
            "-5 - EST 2006 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Vincennes": [
            "-5:50:7 - LMT 1883_10_18_12_9_53 -5:50:7",
            "-6 US C%sT 1946 -6",
            "-6 Vincennes C%sT 1964_3_26_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT 2007_10_4_2 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Winamac": [
            "-5:46:25 - LMT 1883_10_18_12_13_35 -5:46:25",
            "-6 US C%sT 1946 -6",
            "-6 Pulaski C%sT 1961_3_30_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT 2007_2_11_2 -6",
            "-5 US E%sT"
        ],
        "America/Inuvik": [
            "0 - zzz 1953",
            "-8 NT_YK P%sT 1979_3_29_2 -8",
            "-7 NT_YK M%sT 1980 -7",
            "-7 Canada M%sT"
        ],
        "America/Iqaluit": [
            "0 - zzz 1942_7",
            "-5 NT_YK E%sT 1999_9_31_2 -4",
            "-6 Canada C%sT 2000_9_29_2 -5",
            "-5 Canada E%sT"
        ],
        "America/Jamaica": [
            "-5:7:12 - LMT 1890 -5:7:12",
            "-5:7:12 - KMT 1912_1 -5:7:12",
            "-5 - EST 1974_3_28_2 -5",
            "-5 US E%sT 1984 -5",
            "-5 - EST"
        ],
        "America/Juneau": [
            "15:2:19 - LMT 1867_9_18 15:2:19",
            "-8:57:41 - LMT 1900_7_20_12 -8:57:41",
            "-8 - PST 1942 -8",
            "-8 US P%sT 1946 -8",
            "-8 - PST 1969 -8",
            "-8 US P%sT 1980_3_27_2 -8",
            "-9 US Y%sT 1980_9_26_2 -8",
            "-8 US P%sT 1983_9_30_2 -7",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Kentucky/Louisville": [
            "-5:43:2 - LMT 1883_10_18_12_16_58 -5:43:2",
            "-6 US C%sT 1921 -6",
            "-6 Louisville C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Louisville C%sT 1961_6_23_2 -5",
            "-5 - EST 1968 -5",
            "-5 US E%sT 1974_0_6_2 -5",
            "-5 - CDT 1974_9_27_2 -5",
            "-5 US E%sT"
        ],
        "America/Kentucky/Monticello": [
            "-5:39:24 - LMT 1883_10_18_12_20_36 -5:39:24",
            "-6 US C%sT 1946 -6",
            "-6 - CST 1968 -6",
            "-6 US C%sT 2000_9_29_2 -5",
            "-5 US E%sT"
        ],
        "America/La_Paz": [
            "-4:32:36 - LMT 1890 -4:32:36",
            "-4:32:36 - CMT 1931_9_15 -4:32:36",
            "-3:32:36 - BOST 1932_2_21 -3:32:36",
            "-4 - BOT"
        ],
        "America/Lima": [
            "-5:8:12 - LMT 1890 -5:8:12",
            "-5:8:36 - LMT 1908_6_28 -5:8:36",
            "-5 Peru PE%sT"
        ],
        "America/Los_Angeles": [
            "-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58",
            "-8 US P%sT 1946 -8",
            "-8 CA P%sT 1967 -8",
            "-8 US P%sT"
        ],
        "America/Maceio": [
            "-2:22:52 - LMT 1914 -2:22:52",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1995_9_13 -3",
            "-3 Brazil BR%sT 1996_8_4 -3",
            "-3 - BRT 1999_8_30 -3",
            "-3 Brazil BR%sT 2000_9_22 -2",
            "-3 - BRT 2001_8_13 -3",
            "-3 Brazil BR%sT 2002_9_1 -3",
            "-3 - BRT"
        ],
        "America/Managua": [
            "-5:45:8 - LMT 1890 -5:45:8",
            "-5:45:12 - MMT 1934_5_23 -5:45:12",
            "-6 - CST 1973_4 -6",
            "-5 - EST 1975_1_16 -5",
            "-6 Nic C%sT 1992_0_1_4 -6",
            "-5 - EST 1992_8_24 -5",
            "-6 - CST 1993 -6",
            "-5 - EST 1997 -5",
            "-6 Nic C%sT"
        ],
        "America/Manaus": [
            "-4:0:4 - LMT 1914 -4:0:4",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT 1993_8_28 -4",
            "-4 Brazil AM%sT 1994_8_22 -4",
            "-4 - AMT"
        ],
        "America/Martinique": [
            "-4:4:20 - LMT 1890 -4:4:20",
            "-4:4:20 - FFMT 1911_4 -4:4:20",
            "-4 - AST 1980_3_6 -4",
            "-3 - ADT 1980_8_28 -3",
            "-4 - AST"
        ],
        "America/Matamoros": [
            "-6:40 - LMT 1921_11_31_23_20 -6:40",
            "-6 - CST 1988 -6",
            "-6 US C%sT 1989 -6",
            "-6 Mexico C%sT 2010 -6",
            "-6 US C%sT"
        ],
        "America/Mazatlan": [
            "-7:5:40 - LMT 1921_11_31_23_54_20 -7:5:40",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1942_3_24 -6",
            "-7 - MST 1949_0_14 -7",
            "-8 - PST 1970 -8",
            "-7 Mexico M%sT"
        ],
        "America/Menominee": [
            "-5:50:27 - LMT 1885_8_18_12 -5:50:27",
            "-6 US C%sT 1946 -6",
            "-6 Menominee C%sT 1969_3_27_2 -6",
            "-5 - EST 1973_3_29_2 -5",
            "-6 US C%sT"
        ],
        "America/Merida": [
            "-5:58:28 - LMT 1922_0_1_0_1_32 -5:58:28",
            "-6 - CST 1981_11_23 -6",
            "-5 - EST 1982_11_2 -5",
            "-6 Mexico C%sT"
        ],
        "America/Metlakatla": [
            "15:13:42 - LMT 1867_9_18 15:13:42",
            "-8:46:18 - LMT 1900_7_20_12 -8:46:18",
            "-8 - PST 1942 -8",
            "-8 US P%sT 1946 -8",
            "-8 - PST 1969 -8",
            "-8 US P%sT 1983_9_30_2 -7",
            "-8 - MeST"
        ],
        "America/Mexico_City": [
            "-6:36:36 - LMT 1922_0_1_0_23_24 -6:36:36",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 Mexico C%sT 2001_8_30_02 -5",
            "-6 - CST 2002_1_20 -6",
            "-6 Mexico C%sT"
        ],
        "America/Miquelon": [
            "-3:44:40 - LMT 1911_4_15 -3:44:40",
            "-4 - AST 1980_4 -4",
            "-3 - PMST 1987 -3",
            "-3 Canada PM%sT"
        ],
        "America/Moncton": [
            "-4:19:8 - LMT 1883_11_9 -4:19:8",
            "-5 - EST 1902_5_15 -5",
            "-4 Canada A%sT 1933 -4",
            "-4 Moncton A%sT 1942 -4",
            "-4 Canada A%sT 1946 -4",
            "-4 Moncton A%sT 1973 -4",
            "-4 Canada A%sT 1993 -4",
            "-4 Moncton A%sT 2007 -4",
            "-4 Canada A%sT"
        ],
        "America/Monterrey": [
            "-6:41:16 - LMT 1921_11_31_23_18_44 -6:41:16",
            "-6 - CST 1988 -6",
            "-6 US C%sT 1989 -6",
            "-6 Mexico C%sT"
        ],
        "America/Montevideo": [
            "-3:44:44 - LMT 1898_5_28 -3:44:44",
            "-3:44:44 - MMT 1920_4_1 -3:44:44",
            "-3:30 Uruguay UY%sT 1942_11_14 -3:30",
            "-3 Uruguay UY%sT"
        ],
        "America/Montreal": [
            "-4:54:16 - LMT 1884 -4:54:16",
            "-5 Mont E%sT 1918 -5",
            "-5 Canada E%sT 1919 -5",
            "-5 Mont E%sT 1942_1_9_2 -5",
            "-5 Canada E%sT 1946 -5",
            "-5 Mont E%sT 1974 -5",
            "-5 Canada E%sT"
        ],
        "America/Montserrat": [
            "-4:8:52 - LMT 1911_6_1_0_1 -4:8:52",
            "-4 - AST"
        ],
        "America/Nassau": [
            "-5:9:30 - LMT 1912_2_2 -5:9:30",
            "-5 Bahamas E%sT 1976 -5",
            "-5 US E%sT"
        ],
        "America/New_York": [
            "-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2",
            "-5 US E%sT 1920 -5",
            "-5 NYC E%sT 1942 -5",
            "-5 US E%sT 1946 -5",
            "-5 NYC E%sT 1967 -5",
            "-5 US E%sT"
        ],
        "America/Nipigon": [
            "-5:53:4 - LMT 1895 -5:53:4",
            "-5 Canada E%sT 1940_8_29 -5",
            "-4 - EDT 1942_1_9_2 -5",
            "-5 Canada E%sT"
        ],
        "America/Nome": [
            "12:58:21 - LMT 1867_9_18 12:58:21",
            "-11:1:38 - LMT 1900_7_20_12 -11:1:38",
            "-11 - NST 1942 -11",
            "-11 US N%sT 1946 -11",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1969 -11",
            "-11 US B%sT 1983_9_30_2 -10",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Noronha": [
            "-2:9:40 - LMT 1914 -2:9:40",
            "-2 Brazil FN%sT 1990_8_17 -2",
            "-2 - FNT 1999_8_30 -2",
            "-2 Brazil FN%sT 2000_9_15 -1",
            "-2 - FNT 2001_8_13 -2",
            "-2 Brazil FN%sT 2002_9_1 -2",
            "-2 - FNT"
        ],
        "America/North_Dakota/Beulah": [
            "-6:47:7 - LMT 1883_10_18_12_12_53 -6:47:7",
            "-7 US M%sT 2010_10_7_2 -6",
            "-6 US C%sT"
        ],
        "America/North_Dakota/Center": [
            "-6:45:12 - LMT 1883_10_18_12_14_48 -6:45:12",
            "-7 US M%sT 1992_9_25_02 -6",
            "-6 US C%sT"
        ],
        "America/North_Dakota/New_Salem": [
            "-6:45:39 - LMT 1883_10_18_12_14_21 -6:45:39",
            "-7 US M%sT 2003_9_26_02 -6",
            "-6 US C%sT"
        ],
        "America/Ojinaga": [
            "-6:57:40 - LMT 1922_0_1_0_2_20 -6:57:40",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1996 -6",
            "-6 Mexico C%sT 1998 -6",
            "-6 - CST 1998_3_5_3 -6",
            "-7 Mexico M%sT 2010 -7",
            "-7 US M%sT"
        ],
        "America/Panama": [
            "-5:18:8 - LMT 1890 -5:18:8",
            "-5:19:36 - CMT 1908_3_22 -5:19:36",
            "-5 - EST"
        ],
        "America/Pangnirtung": [
            "0 - zzz 1921",
            "-4 NT_YK A%sT 1995_3_2_2 -4",
            "-5 Canada E%sT 1999_9_31_2 -4",
            "-6 Canada C%sT 2000_9_29_2 -5",
            "-5 Canada E%sT"
        ],
        "America/Paramaribo": [
            "-3:40:40 - LMT 1911 -3:40:40",
            "-3:40:52 - PMT 1935 -3:40:52",
            "-3:40:36 - PMT 1945_9 -3:40:36",
            "-3:30 - NEGT 1975_10_20 -3:30",
            "-3:30 - SRT 1984_9 -3:30",
            "-3 - SRT"
        ],
        "America/Phoenix": [
            "-7:28:18 - LMT 1883_10_18_11_31_42 -7:28:18",
            "-7 US M%sT 1944_0_1_00_1 -6",
            "-7 - MST 1944_3_1_00_1 -7",
            "-7 US M%sT 1944_9_1_00_1 -6",
            "-7 - MST 1967 -7",
            "-7 US M%sT 1968_2_21 -7",
            "-7 - MST"
        ],
        "America/Port-au-Prince": [
            "-4:49:20 - LMT 1890 -4:49:20",
            "-4:49 - PPMT 1917_0_24_12 -4:49",
            "-5 Haiti E%sT"
        ],
        "America/Port_of_Spain": [
            "-4:6:4 - LMT 1912_2_2 -4:6:4",
            "-4 - AST"
        ],
        "America/Porto_Velho": [
            "-4:15:36 - LMT 1914 -4:15:36",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT"
        ],
        "America/Puerto_Rico": [
            "-4:24:25 - LMT 1899_2_28_12 -4:24:25",
            "-4 - AST 1942_4_3 -4",
            "-4 US A%sT 1946 -4",
            "-4 - AST"
        ],
        "America/Rainy_River": [
            "-6:18:16 - LMT 1895 -6:18:16",
            "-6 Canada C%sT 1940_8_29 -6",
            "-5 - CDT 1942_1_9_2 -6",
            "-6 Canada C%sT"
        ],
        "America/Rankin_Inlet": [
            "0 - zzz 1957",
            "-6 NT_YK C%sT 2000_9_29_2 -5",
            "-5 - EST 2001_3_1_3 -5",
            "-6 Canada C%sT"
        ],
        "America/Recife": [
            "-2:19:36 - LMT 1914 -2:19:36",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1999_8_30 -3",
            "-3 Brazil BR%sT 2000_9_15 -2",
            "-3 - BRT 2001_8_13 -3",
            "-3 Brazil BR%sT 2002_9_1 -3",
            "-3 - BRT"
        ],
        "America/Regina": [
            "-6:58:36 - LMT 1905_8 -6:58:36",
            "-7 Regina M%sT 1960_3_24_2 -7",
            "-6 - CST"
        ],
        "America/Resolute": [
            "0 - zzz 1947_7_31",
            "-6 NT_YK C%sT 2000_9_29_2 -5",
            "-5 - EST 2001_3_1_3 -5",
            "-6 Canada C%sT 2006_9_29_2 -5",
            "-5 - EST 2007_2_11_3 -5",
            "-6 Canada C%sT"
        ],
        "America/Rio_Branco": [
            "-4:31:12 - LMT 1914 -4:31:12",
            "-5 Brazil AC%sT 1988_8_12 -5",
            "-5 - ACT 2008_5_24_00 -5",
            "-4 - AMT"
        ],
        "America/Santa_Isabel": [
            "-7:39:28 - LMT 1922_0_1_0_20_32 -7:39:28",
            "-7 - MST 1924 -7",
            "-8 - PST 1927_5_10_23 -8",
            "-7 - MST 1930_10_15 -7",
            "-8 - PST 1931_3_1 -8",
            "-7 - PDT 1931_8_30 -7",
            "-8 - PST 1942_3_24 -8",
            "-7 - PWT 1945_7_14_23",
            "-7 - PPT 1945_10_12 -7",
            "-8 - PST 1948_3_5 -8",
            "-7 - PDT 1949_0_14 -7",
            "-8 - PST 1954 -8",
            "-8 CA P%sT 1961 -8",
            "-8 - PST 1976 -8",
            "-8 US P%sT 1996 -8",
            "-8 Mexico P%sT 2001 -8",
            "-8 US P%sT 2002_1_20 -8",
            "-8 Mexico P%sT"
        ],
        "America/Santarem": [
            "-3:38:48 - LMT 1914 -3:38:48",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT 2008_5_24_00 -4",
            "-3 - BRT"
        ],
        "America/Santiago": [
            "-4:42:46 - LMT 1890 -4:42:46",
            "-4:42:46 - SMT 1910 -4:42:46",
            "-5 - CLT 1916_6_1 -5",
            "-4:42:46 - SMT 1918_8_1 -4:42:46",
            "-4 - CLT 1919_6_1 -4",
            "-4:42:46 - SMT 1927_8_1 -4:42:46",
            "-5 Chile CL%sT 1947_4_22 -5",
            "-4 Chile CL%sT"
        ],
        "America/Santo_Domingo": [
            "-4:39:36 - LMT 1890 -4:39:36",
            "-4:40 - SDMT 1933_3_1_12 -4:40",
            "-5 DR E%sT 1974_9_27 -5",
            "-4 - AST 2000_9_29_02 -4",
            "-5 US E%sT 2000_11_3_01 -5",
            "-4 - AST"
        ],
        "America/Sao_Paulo": [
            "-3:6:28 - LMT 1914 -3:6:28",
            "-3 Brazil BR%sT 1963_9_23_00 -3",
            "-2 - BRST 1964 -2",
            "-3 Brazil BR%sT"
        ],
        "America/Scoresbysund": [
            "-1:27:52 - LMT 1916_6_28 -1:27:52",
            "-2 - CGT 1980_3_6_2 -2",
            "-2 C-Eur CG%sT 1981_2_29 -2",
            "-1 EU EG%sT"
        ],
        "America/Sitka": [
            "14:58:47 - LMT 1867_9_18 14:58:47",
            "-9:1:13 - LMT 1900_7_20_12 -9:1:13",
            "-8 - PST 1942 -8",
            "-8 US P%sT 1946 -8",
            "-8 - PST 1969 -8",
            "-8 US P%sT 1983_9_30_2 -7",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/St_Johns": [
            "-3:30:52 - LMT 1884 -3:30:52",
            "-3:30:52 StJohns N%sT 1918 -3:30:52",
            "-3:30:52 Canada N%sT 1919 -3:30:52",
            "-3:30:52 StJohns N%sT 1935_2_30 -3:30:52",
            "-3:30 StJohns N%sT 1942_4_11 -3:30",
            "-3:30 Canada N%sT 1946 -3:30",
            "-3:30 StJohns N%sT 2011_10 -2:30",
            "-3:30 Canada N%sT"
        ],
        "America/St_Kitts": [
            "-4:10:52 - LMT 1912_2_2 -4:10:52",
            "-4 - AST"
        ],
        "America/St_Lucia": [
            "-4:4 - LMT 1890 -4:4",
            "-4:4 - CMT 1912 -4:4",
            "-4 - AST"
        ],
        "America/St_Thomas": [
            "-4:19:44 - LMT 1911_6 -4:19:44",
            "-4 - AST"
        ],
        "America/St_Vincent": [
            "-4:4:56 - LMT 1890 -4:4:56",
            "-4:4:56 - KMT 1912 -4:4:56",
            "-4 - AST"
        ],
        "America/Swift_Current": [
            "-7:11:20 - LMT 1905_8 -7:11:20",
            "-7 Canada M%sT 1946_3_28_2 -7",
            "-7 Regina M%sT 1950 -7",
            "-7 Swift M%sT 1972_3_30_2 -7",
            "-6 - CST"
        ],
        "America/Tegucigalpa": [
            "-5:48:52 - LMT 1921_3 -5:48:52",
            "-6 Hond C%sT"
        ],
        "America/Thule": [
            "-4:35:8 - LMT 1916_6_28 -4:35:8",
            "-4 Thule A%sT"
        ],
        "America/Thunder_Bay": [
            "-5:57 - LMT 1895 -5:57",
            "-6 - CST 1910 -6",
            "-5 - EST 1942 -5",
            "-5 Canada E%sT 1970 -5",
            "-5 Mont E%sT 1973 -5",
            "-5 - EST 1974 -5",
            "-5 Canada E%sT"
        ],
        "America/Tijuana": [
            "-7:48:4 - LMT 1922_0_1_0_11_56 -7:48:4",
            "-7 - MST 1924 -7",
            "-8 - PST 1927_5_10_23 -8",
            "-7 - MST 1930_10_15 -7",
            "-8 - PST 1931_3_1 -8",
            "-7 - PDT 1931_8_30 -7",
            "-8 - PST 1942_3_24 -8",
            "-7 - PWT 1945_7_14_23",
            "-7 - PPT 1945_10_12 -7",
            "-8 - PST 1948_3_5 -8",
            "-7 - PDT 1949_0_14 -7",
            "-8 - PST 1954 -8",
            "-8 CA P%sT 1961 -8",
            "-8 - PST 1976 -8",
            "-8 US P%sT 1996 -8",
            "-8 Mexico P%sT 2001 -8",
            "-8 US P%sT 2002_1_20 -8",
            "-8 Mexico P%sT 2010 -8",
            "-8 US P%sT"
        ],
        "America/Toronto": [
            "-5:17:32 - LMT 1895 -5:17:32",
            "-5 Canada E%sT 1919 -5",
            "-5 Toronto E%sT 1942_1_9_2 -5",
            "-5 Canada E%sT 1946 -5",
            "-5 Toronto E%sT 1974 -5",
            "-5 Canada E%sT"
        ],
        "America/Tortola": [
            "-4:18:28 - LMT 1911_6 -4:18:28",
            "-4 - AST"
        ],
        "America/Vancouver": [
            "-8:12:28 - LMT 1884 -8:12:28",
            "-8 Vanc P%sT 1987 -8",
            "-8 Canada P%sT"
        ],
        "America/Whitehorse": [
            "-9:0:12 - LMT 1900_7_20 -9:0:12",
            "-9 NT_YK Y%sT 1966_6_1_2 -9",
            "-8 NT_YK P%sT 1980 -8",
            "-8 Canada P%sT"
        ],
        "America/Winnipeg": [
            "-6:28:36 - LMT 1887_6_16 -6:28:36",
            "-6 Winn C%sT 2006 -6",
            "-6 Canada C%sT"
        ],
        "America/Yakutat": [
            "14:41:5 - LMT 1867_9_18 14:41:5",
            "-9:18:55 - LMT 1900_7_20_12 -9:18:55",
            "-9 - YST 1942 -9",
            "-9 US Y%sT 1946 -9",
            "-9 - YST 1969 -9",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Yellowknife": [
            "0 - zzz 1935",
            "-7 NT_YK M%sT 1980 -7",
            "-7 Canada M%sT"
        ],
        "Antarctica/Casey": [
            "0 - zzz 1969",
            "8 - WST 2009_9_18_2 8",
            "11 - CAST 2010_2_5_2 11",
            "8 - WST 2011_9_28_2 8",
            "11 - CAST 2012_1_21_17",
            "8 - WST"
        ],
        "Antarctica/Davis": [
            "0 - zzz 1957_0_13",
            "7 - DAVT 1964_10 7",
            "0 - zzz 1969_1",
            "7 - DAVT 2009_9_18_2 7",
            "5 - DAVT 2010_2_10_20",
            "7 - DAVT 2011_9_28_2 7",
            "5 - DAVT 2012_1_21_20",
            "7 - DAVT"
        ],
        "Antarctica/DumontDUrville": [
            "0 - zzz 1947",
            "10 - PMT 1952_0_14 10",
            "0 - zzz 1956_10",
            "10 - DDUT"
        ],
        "Antarctica/Macquarie": [
            "0 - zzz 1899_10",
            "10 - EST 1916_9_1_2 10",
            "11 - EST 1917_1 11",
            "10 Aus EST 1919_3 10",
            "0 - zzz 1948_2_25",
            "10 Aus EST 1967 10",
            "10 AT EST 2010_3_4_3 11",
            "11 - MIST"
        ],
        "Antarctica/Mawson": [
            "0 - zzz 1954_1_13",
            "6 - MAWT 2009_9_18_2 6",
            "5 - MAWT"
        ],
        "Antarctica/McMurdo": [
            "0 - zzz 1956",
            "12 NZAQ NZ%sT"
        ],
        "Antarctica/Palmer": [
            "0 - zzz 1965",
            "-4 ArgAQ AR%sT 1969_9_5 -4",
            "-3 ArgAQ AR%sT 1982_4 -3",
            "-4 ChileAQ CL%sT"
        ],
        "Antarctica/Rothera": [
            "0 - zzz 1976_11_1",
            "-3 - ROTT"
        ],
        "Antarctica/Syowa": [
            "0 - zzz 1957_0_29",
            "3 - SYOT"
        ],
        "Antarctica/Vostok": [
            "0 - zzz 1957_11_16",
            "6 - VOST"
        ],
        "Europe/Oslo": [
            "0:43 - LMT 1895_0_1 0:43",
            "1 Norway CE%sT 1940_7_10_23 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Norway CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Asia/Aden": [
            "2:59:54 - LMT 1950 2:59:54",
            "3 - AST"
        ],
        "Asia/Almaty": [
            "5:7:48 - LMT 1924_4_2 5:7:48",
            "5 - ALMT 1930_5_21 5",
            "6 RussiaAsia ALM%sT 1991 6",
            "6 - ALMT 1992 6",
            "6 RussiaAsia ALM%sT 2005_2_15 6",
            "6 - ALMT"
        ],
        "Asia/Amman": [
            "2:23:44 - LMT 1931 2:23:44",
            "2 Jordan EE%sT"
        ],
        "Asia/Anadyr": [
            "11:49:56 - LMT 1924_4_2 11:49:56",
            "12 - ANAT 1930_5_21 12",
            "13 Russia ANA%sT 1982_3_1_0 13",
            "12 Russia ANA%sT 1991_2_31_2 12",
            "11 Russia ANA%sT 1992_0_19_2 11",
            "12 Russia ANA%sT 2010_2_28_2 12",
            "11 Russia ANA%sT 2011_2_27_2 11",
            "12 - ANAT"
        ],
        "Asia/Aqtau": [
            "3:21:4 - LMT 1924_4_2 3:21:4",
            "4 - FORT 1930_5_21 4",
            "5 - FORT 1963 5",
            "5 - SHET 1981_9_1 5",
            "6 - SHET 1982_3_1 6",
            "5 RussiaAsia SHE%sT 1991 5",
            "5 - SHET 1991_11_16 5",
            "5 RussiaAsia AQT%sT 1995_2_26_2 5",
            "4 RussiaAsia AQT%sT 2005_2_15 4",
            "5 - AQTT"
        ],
        "Asia/Aqtobe": [
            "3:48:40 - LMT 1924_4_2 3:48:40",
            "4 - AKTT 1930_5_21 4",
            "5 - AKTT 1981_3_1 5",
            "6 - AKTST 1981_9_1 6",
            "6 - AKTT 1982_3_1 6",
            "5 RussiaAsia AKT%sT 1991 5",
            "5 - AKTT 1991_11_16 5",
            "5 RussiaAsia AQT%sT 2005_2_15 5",
            "5 - AQTT"
        ],
        "Asia/Ashgabat": [
            "3:53:32 - LMT 1924_4_2 3:53:32",
            "4 - ASHT 1930_5_21 4",
            "5 RussiaAsia ASH%sT 1991_2_31_2 5",
            "4 RussiaAsia ASH%sT 1991_9_27 4",
            "4 RussiaAsia TM%sT 1992_0_19_2 4",
            "5 - TMT"
        ],
        "Asia/Baghdad": [
            "2:57:40 - LMT 1890 2:57:40",
            "2:57:36 - BMT 1918 2:57:36",
            "3 - AST 1982_4 3",
            "3 Iraq A%sT"
        ],
        "Asia/Bahrain": [
            "3:22:20 - LMT 1920 3:22:20",
            "4 - GST 1972_5 4",
            "3 - AST"
        ],
        "Asia/Baku": [
            "3:19:24 - LMT 1924_4_2 3:19:24",
            "3 - BAKT 1957_2 3",
            "4 RussiaAsia BAK%sT 1991_2_31_2 4",
            "4 - BAKST 1991_7_30 4",
            "3 RussiaAsia AZ%sT 1992_8_26_23 4",
            "4 - AZT 1996 4",
            "4 EUAsia AZ%sT 1997 4",
            "4 Azer AZ%sT"
        ],
        "Asia/Bangkok": [
            "6:42:4 - LMT 1880 6:42:4",
            "6:42:4 - BMT 1920_3 6:42:4",
            "7 - ICT"
        ],
        "Asia/Beirut": [
            "2:22 - LMT 1880 2:22",
            "2 Lebanon EE%sT"
        ],
        "Asia/Bishkek": [
            "4:58:24 - LMT 1924_4_2 4:58:24",
            "5 - FRUT 1930_5_21 5",
            "6 RussiaAsia FRU%sT 1991_2_31_2 6",
            "6 - FRUST 1991_7_31_2 6",
            "5 Kyrgyz KG%sT 2005_7_12 6",
            "6 - KGT"
        ],
        "Asia/Brunei": [
            "7:39:40 - LMT 1926_2 7:39:40",
            "7:30 - BNT 1933 7:30",
            "8 - BNT"
        ],
        "Asia/Choibalsan": [
            "7:38 - LMT 1905_7 7:38",
            "7 - ULAT 1978 7",
            "8 - ULAT 1983_3 8",
            "9 Mongol CHO%sT 2008_2_31 9",
            "8 Mongol CHO%sT"
        ],
        "Asia/Chongqing": [
            "7:6:20 - LMT 1928 7:6:20",
            "7 - LONT 1980_4 7",
            "8 PRC C%sT"
        ],
        "Asia/Colombo": [
            "5:19:24 - LMT 1880 5:19:24",
            "5:19:32 - MMT 1906 5:19:32",
            "5:30 - IST 1942_0_5 5:30",
            "6 - IHST 1942_8 6",
            "6:30 - IST 1945_9_16_2 6:30",
            "5:30 - IST 1996_4_25_0 5:30",
            "6:30 - LKT 1996_9_26_0_30 6:30",
            "6 - LKT 2006_3_15_0_30 6",
            "5:30 - IST"
        ],
        "Asia/Damascus": [
            "2:25:12 - LMT 1920 2:25:12",
            "2 Syria EE%sT"
        ],
        "Asia/Dhaka": [
            "6:1:40 - LMT 1890 6:1:40",
            "5:53:20 - HMT 1941_9 5:53:20",
            "6:30 - BURT 1942_4_15 6:30",
            "5:30 - IST 1942_8 5:30",
            "6:30 - BURT 1951_8_30 6:30",
            "6 - DACT 1971_2_26 6",
            "6 - BDT 2009 6",
            "6 Dhaka BD%sT"
        ],
        "Asia/Dili": [
            "8:22:20 - LMT 1912 8:22:20",
            "8 - TLT 1942_1_21_23 8",
            "9 - JST 1945_8_23 9",
            "9 - TLT 1976_4_3 9",
            "8 - CIT 2000_8_17_00 8",
            "9 - TLT"
        ],
        "Asia/Dubai": [
            "3:41:12 - LMT 1920 3:41:12",
            "4 - GST"
        ],
        "Asia/Dushanbe": [
            "4:35:12 - LMT 1924_4_2 4:35:12",
            "5 - DUST 1930_5_21 5",
            "6 RussiaAsia DUS%sT 1991_2_31_2 6",
            "6 - DUSST 1991_8_9_2 5",
            "5 - TJT"
        ],
        "Asia/Gaza": [
            "2:17:52 - LMT 1900_9 2:17:52",
            "2 Zion EET 1948_4_15 2",
            "2 EgyptAsia EE%sT 1967_5_5 3",
            "2 Zion I%sT 1996 2",
            "2 Jordan EE%sT 1999 2",
            "2 Palestine EE%sT 2008_7_29_0 3",
            "2 - EET 2008_8 2",
            "2 Palestine EE%sT 2010 2",
            "2 - EET 2010_2_27_0_1 2",
            "2 Palestine EE%sT 2011_7_1 3",
            "2 - EET 2012 2",
            "2 Palestine EE%sT"
        ],
        "Asia/Harbin": [
            "8:26:44 - LMT 1928 8:26:44",
            "8:30 - CHAT 1932_2 8:30",
            "8 - CST 1940 8",
            "9 - CHAT 1966_4 9",
            "8:30 - CHAT 1980_4 8:30",
            "8 PRC C%sT"
        ],
        "Asia/Hebron": [
            "2:20:23 - LMT 1900_9 2:20:23",
            "2 Zion EET 1948_4_15 2",
            "2 EgyptAsia EE%sT 1967_5_5 3",
            "2 Zion I%sT 1996 2",
            "2 Jordan EE%sT 1999 2",
            "2 Palestine EE%sT"
        ],
        "Asia/Ho_Chi_Minh": [
            "7:6:40 - LMT 1906_5_9 7:6:40",
            "7:6:20 - SMT 1911_2_11_0_1 7:6:20",
            "7 - ICT 1912_4 7",
            "8 - ICT 1931_4 8",
            "7 - ICT"
        ],
        "Asia/Hong_Kong": [
            "7:36:42 - LMT 1904_9_30 7:36:42",
            "8 HK HK%sT 1941_11_25 8",
            "9 - JST 1945_8_15 9",
            "8 HK HK%sT"
        ],
        "Asia/Hovd": [
            "6:6:36 - LMT 1905_7 6:6:36",
            "6 - HOVT 1978 6",
            "7 Mongol HOV%sT"
        ],
        "Asia/Irkutsk": [
            "6:57:20 - LMT 1880 6:57:20",
            "6:57:20 - IMT 1920_0_25 6:57:20",
            "7 - IRKT 1930_5_21 7",
            "8 Russia IRK%sT 1991_2_31_2 8",
            "7 Russia IRK%sT 1992_0_19_2 7",
            "8 Russia IRK%sT 2011_2_27_2 8",
            "9 - IRKT"
        ],
        "Asia/Jakarta": [
            "7:7:12 - LMT 1867_7_10 7:7:12",
            "7:7:12 - JMT 1923_11_31_23_47_12 7:7:12",
            "7:20 - JAVT 1932_10 7:20",
            "7:30 - WIT 1942_2_23 7:30",
            "9 - JST 1945_8_23 9",
            "7:30 - WIT 1948_4 7:30",
            "8 - WIT 1950_4 8",
            "7:30 - WIT 1964 7:30",
            "7 - WIT"
        ],
        "Asia/Jayapura": [
            "9:22:48 - LMT 1932_10 9:22:48",
            "9 - EIT 1944_8_1 9",
            "9:30 - CST 1964 9:30",
            "9 - EIT"
        ],
        "Asia/Jerusalem": [
            "2:20:56 - LMT 1880 2:20:56",
            "2:20:40 - JMT 1918 2:20:40",
            "2 Zion I%sT"
        ],
        "Asia/Kabul": [
            "4:36:48 - LMT 1890 4:36:48",
            "4 - AFT 1945 4",
            "4:30 - AFT"
        ],
        "Asia/Kamchatka": [
            "10:34:36 - LMT 1922_10_10 10:34:36",
            "11 - PETT 1930_5_21 11",
            "12 Russia PET%sT 1991_2_31_2 12",
            "11 Russia PET%sT 1992_0_19_2 11",
            "12 Russia PET%sT 2010_2_28_2 12",
            "11 Russia PET%sT 2011_2_27_2 11",
            "12 - PETT"
        ],
        "Asia/Karachi": [
            "4:28:12 - LMT 1907 4:28:12",
            "5:30 - IST 1942_8 5:30",
            "6:30 - IST 1945_9_15 6:30",
            "5:30 - IST 1951_8_30 5:30",
            "5 - KART 1971_2_26 5",
            "5 Pakistan PK%sT"
        ],
        "Asia/Kashgar": [
            "5:3:56 - LMT 1928 5:3:56",
            "5:30 - KAST 1940 5:30",
            "5 - KAST 1980_4 5",
            "8 PRC C%sT"
        ],
        "Asia/Kathmandu": [
            "5:41:16 - LMT 1920 5:41:16",
            "5:30 - IST 1986 5:30",
            "5:45 - NPT"
        ],
        "Asia/Khandyga": [
            "9:2:13 - LMT 1919_11_15 9:2:13",
            "8 - YAKT 1930_5_21 8",
            "9 Russia YAK%sT 1991_2_31_2 9",
            "8 Russia YAK%sT 1992_0_19_2 8",
            "9 Russia YAK%sT 2004 9",
            "10 Russia VLA%sT 2011_2_27_2 10",
            "11 - VLAT 2011_8_13_0 11",
            "10 - YAKT"
        ],
        "Asia/Kolkata": [
            "5:53:28 - LMT 1880 5:53:28",
            "5:53:20 - HMT 1941_9 5:53:20",
            "6:30 - BURT 1942_4_15 6:30",
            "5:30 - IST 1942_8 5:30",
            "6:30 - IST 1945_9_15 6:30",
            "5:30 - IST"
        ],
        "Asia/Krasnoyarsk": [
            "6:11:20 - LMT 1920_0_6 6:11:20",
            "6 - KRAT 1930_5_21 6",
            "7 Russia KRA%sT 1991_2_31_2 7",
            "6 Russia KRA%sT 1992_0_19_2 6",
            "7 Russia KRA%sT 2011_2_27_2 7",
            "8 - KRAT"
        ],
        "Asia/Kuala_Lumpur": [
            "6:46:46 - LMT 1901_0_1 6:46:46",
            "6:55:25 - SMT 1905_5_1 6:55:25",
            "7 - MALT 1933_0_1 7",
            "7:20 - MALST 1936_0_1 7:20",
            "7:20 - MALT 1941_8_1 7:20",
            "7:30 - MALT 1942_1_16 7:30",
            "9 - JST 1945_8_12 9",
            "7:30 - MALT 1982_0_1 7:30",
            "8 - MYT"
        ],
        "Asia/Kuching": [
            "7:21:20 - LMT 1926_2 7:21:20",
            "7:30 - BORT 1933 7:30",
            "8 NBorneo BOR%sT 1942_1_16 8",
            "9 - JST 1945_8_12 9",
            "8 - BORT 1982_0_1 8",
            "8 - MYT"
        ],
        "Asia/Kuwait": [
            "3:11:56 - LMT 1950 3:11:56",
            "3 - AST"
        ],
        "Asia/Macau": [
            "7:34:20 - LMT 1912 7:34:20",
            "8 Macau MO%sT 1999_11_20 8",
            "8 PRC C%sT"
        ],
        "Asia/Magadan": [
            "10:3:12 - LMT 1924_4_2 10:3:12",
            "10 - MAGT 1930_5_21 10",
            "11 Russia MAG%sT 1991_2_31_2 11",
            "10 Russia MAG%sT 1992_0_19_2 10",
            "11 Russia MAG%sT 2011_2_27_2 11",
            "12 - MAGT"
        ],
        "Asia/Makassar": [
            "7:57:36 - LMT 1920 7:57:36",
            "7:57:36 - MMT 1932_10 7:57:36",
            "8 - CIT 1942_1_9 8",
            "9 - JST 1945_8_23 9",
            "8 - CIT"
        ],
        "Asia/Manila": [
            "-15:56 - LMT 1844_11_31 -15:56",
            "8:4 - LMT 1899_4_11 8:4",
            "8 Phil PH%sT 1942_4 8",
            "9 - JST 1944_10 9",
            "8 Phil PH%sT"
        ],
        "Asia/Muscat": [
            "3:54:24 - LMT 1920 3:54:24",
            "4 - GST"
        ],
        "Asia/Nicosia": [
            "2:13:28 - LMT 1921_10_14 2:13:28",
            "2 Cyprus EE%sT 1998_8 3",
            "2 EUAsia EE%sT"
        ],
        "Asia/Novokuznetsk": [
            "5:48:48 - NMT 1920_0_6 5:48:48",
            "6 - KRAT 1930_5_21 6",
            "7 Russia KRA%sT 1991_2_31_2 7",
            "6 Russia KRA%sT 1992_0_19_2 6",
            "7 Russia KRA%sT 2010_2_28_2 7",
            "6 Russia NOV%sT 2011_2_27_2 6",
            "7 - NOVT"
        ],
        "Asia/Novosibirsk": [
            "5:31:40 - LMT 1919_11_14_6 5:31:40",
            "6 - NOVT 1930_5_21 6",
            "7 Russia NOV%sT 1991_2_31_2 7",
            "6 Russia NOV%sT 1992_0_19_2 6",
            "7 Russia NOV%sT 1993_4_23 8",
            "6 Russia NOV%sT 2011_2_27_2 6",
            "7 - NOVT"
        ],
        "Asia/Omsk": [
            "4:53:36 - LMT 1919_10_14 4:53:36",
            "5 - OMST 1930_5_21 5",
            "6 Russia OMS%sT 1991_2_31_2 6",
            "5 Russia OMS%sT 1992_0_19_2 5",
            "6 Russia OMS%sT 2011_2_27_2 6",
            "7 - OMST"
        ],
        "Asia/Oral": [
            "3:25:24 - LMT 1924_4_2 3:25:24",
            "4 - URAT 1930_5_21 4",
            "5 - URAT 1981_3_1 5",
            "6 - URAST 1981_9_1 6",
            "6 - URAT 1982_3_1 6",
            "5 RussiaAsia URA%sT 1989_2_26_2 5",
            "4 RussiaAsia URA%sT 1991 4",
            "4 - URAT 1991_11_16 4",
            "4 RussiaAsia ORA%sT 2005_2_15 4",
            "5 - ORAT"
        ],
        "Asia/Phnom_Penh": [
            "6:59:40 - LMT 1906_5_9 6:59:40",
            "7:6:20 - SMT 1911_2_11_0_1 7:6:20",
            "7 - ICT 1912_4 7",
            "8 - ICT 1931_4 8",
            "7 - ICT"
        ],
        "Asia/Pontianak": [
            "7:17:20 - LMT 1908_4 7:17:20",
            "7:17:20 - PMT 1932_10 7:17:20",
            "7:30 - WIT 1942_0_29 7:30",
            "9 - JST 1945_8_23 9",
            "7:30 - WIT 1948_4 7:30",
            "8 - WIT 1950_4 8",
            "7:30 - WIT 1964 7:30",
            "8 - CIT 1988_0_1 8",
            "7 - WIT"
        ],
        "Asia/Pyongyang": [
            "8:23 - LMT 1890 8:23",
            "8:30 - KST 1904_11 8:30",
            "9 - KST 1928 9",
            "8:30 - KST 1932 8:30",
            "9 - KST 1954_2_21 9",
            "8 - KST 1961_7_10 8",
            "9 - KST"
        ],
        "Asia/Qatar": [
            "3:26:8 - LMT 1920 3:26:8",
            "4 - GST 1972_5 4",
            "3 - AST"
        ],
        "Asia/Qyzylorda": [
            "4:21:52 - LMT 1924_4_2 4:21:52",
            "4 - KIZT 1930_5_21 4",
            "5 - KIZT 1981_3_1 5",
            "6 - KIZST 1981_9_1 6",
            "6 - KIZT 1982_3_1 6",
            "5 RussiaAsia KIZ%sT 1991 5",
            "5 - KIZT 1991_11_16 5",
            "5 - QYZT 1992_0_19_2 5",
            "6 RussiaAsia QYZ%sT 2005_2_15 6",
            "6 - QYZT"
        ],
        "Asia/Rangoon": [
            "6:24:40 - LMT 1880 6:24:40",
            "6:24:40 - RMT 1920 6:24:40",
            "6:30 - BURT 1942_4 6:30",
            "9 - JST 1945_4_3 9",
            "6:30 - MMT"
        ],
        "Asia/Riyadh": [
            "3:6:52 - LMT 1950 3:6:52",
            "3 - AST"
        ],
        "Asia/Sakhalin": [
            "9:30:48 - LMT 1905_7_23 9:30:48",
            "9 - CJT 1938 9",
            "9 - JST 1945_7_25 9",
            "11 Russia SAK%sT 1991_2_31_2 11",
            "10 Russia SAK%sT 1992_0_19_2 10",
            "11 Russia SAK%sT 1997_2_30_2 11",
            "10 Russia SAK%sT 2011_2_27_2 10",
            "11 - SAKT"
        ],
        "Asia/Samarkand": [
            "4:27:12 - LMT 1924_4_2 4:27:12",
            "4 - SAMT 1930_5_21 4",
            "5 - SAMT 1981_3_1 5",
            "6 - SAMST 1981_9_1 6",
            "6 - TAST 1982_3_1 6",
            "5 RussiaAsia SAM%sT 1991_8_1 6",
            "5 RussiaAsia UZ%sT 1992 5",
            "5 - UZT"
        ],
        "Asia/Seoul": [
            "8:27:52 - LMT 1890 8:27:52",
            "8:30 - KST 1904_11 8:30",
            "9 - KST 1928 9",
            "8:30 - KST 1932 8:30",
            "9 - KST 1954_2_21 9",
            "8 ROK K%sT 1961_7_10 8",
            "8:30 - KST 1968_9 8:30",
            "9 ROK K%sT"
        ],
        "Asia/Shanghai": [
            "8:5:57 - LMT 1928 8:5:57",
            "8 Shang C%sT 1949 8",
            "8 PRC C%sT"
        ],
        "Asia/Singapore": [
            "6:55:25 - LMT 1901_0_1 6:55:25",
            "6:55:25 - SMT 1905_5_1 6:55:25",
            "7 - MALT 1933_0_1 7",
            "7:20 - MALST 1936_0_1 7:20",
            "7:20 - MALT 1941_8_1 7:20",
            "7:30 - MALT 1942_1_16 7:30",
            "9 - JST 1945_8_12 9",
            "7:30 - MALT 1965_7_9 7:30",
            "7:30 - SGT 1982_0_1 7:30",
            "8 - SGT"
        ],
        "Asia/Taipei": [
            "8:6 - LMT 1896 8:6",
            "8 Taiwan C%sT"
        ],
        "Asia/Tashkent": [
            "4:37:12 - LMT 1924_4_2 4:37:12",
            "5 - TAST 1930_5_21 5",
            "6 RussiaAsia TAS%sT 1991_2_31_2 6",
            "5 RussiaAsia TAS%sT 1991_8_1 6",
            "5 RussiaAsia UZ%sT 1992 5",
            "5 - UZT"
        ],
        "Asia/Tbilisi": [
            "2:59:16 - LMT 1880 2:59:16",
            "2:59:16 - TBMT 1924_4_2 2:59:16",
            "3 - TBIT 1957_2 3",
            "4 RussiaAsia TBI%sT 1991_2_31_2 4",
            "4 - TBIST 1991_3_9 4",
            "3 RussiaAsia GE%sT 1992 3",
            "3 E-EurAsia GE%sT 1994_8_25 4",
            "4 E-EurAsia GE%sT 1996_9_27 5",
            "5 - GEST 1997_2_30 5",
            "4 E-EurAsia GE%sT 2004_5_27 5",
            "3 RussiaAsia GE%sT 2005_2_27_2 3",
            "4 - GET"
        ],
        "Asia/Tehran": [
            "3:25:44 - LMT 1916 3:25:44",
            "3:25:44 - TMT 1946 3:25:44",
            "3:30 - IRST 1977_10 3:30",
            "4 Iran IR%sT 1979 4",
            "3:30 Iran IR%sT"
        ],
        "Asia/Thimphu": [
            "5:58:36 - LMT 1947_7_15 5:58:36",
            "5:30 - IST 1987_9 5:30",
            "6 - BTT"
        ],
        "Asia/Tokyo": [
            "9:18:59 - LMT 1887_11_31_15",
            "9 - JST 1896 9",
            "9 - CJT 1938 9",
            "9 Japan J%sT"
        ],
        "Asia/Ulaanbaatar": [
            "7:7:32 - LMT 1905_7 7:7:32",
            "7 - ULAT 1978 7",
            "8 Mongol ULA%sT"
        ],
        "Asia/Urumqi": [
            "5:50:20 - LMT 1928 5:50:20",
            "6 - URUT 1980_4 6",
            "8 PRC C%sT"
        ],
        "Asia/Ust-Nera": [
            "9:32:54 - LMT 1919_11_15 9:32:54",
            "8 - YAKT 1930_5_21 8",
            "9 Russia YAKT 1981_3_1 9",
            "11 Russia MAG%sT 1991_2_31_2 11",
            "10 Russia MAG%sT 1992_0_19_2 10",
            "11 Russia MAG%sT 2011_2_27_2 11",
            "12 - MAGT 2011_8_13_0 12",
            "11 - VLAT"
        ],
        "Asia/Vientiane": [
            "6:50:24 - LMT 1906_5_9 6:50:24",
            "7:6:20 - SMT 1911_2_11_0_1 7:6:20",
            "7 - ICT 1912_4 7",
            "8 - ICT 1931_4 8",
            "7 - ICT"
        ],
        "Asia/Vladivostok": [
            "8:47:44 - LMT 1922_10_15 8:47:44",
            "9 - VLAT 1930_5_21 9",
            "10 Russia VLA%sT 1991_2_31_2 10",
            "9 Russia VLA%sST 1992_0_19_2 9",
            "10 Russia VLA%sT 2011_2_27_2 10",
            "11 - VLAT"
        ],
        "Asia/Yakutsk": [
            "8:38:40 - LMT 1919_11_15 8:38:40",
            "8 - YAKT 1930_5_21 8",
            "9 Russia YAK%sT 1991_2_31_2 9",
            "8 Russia YAK%sT 1992_0_19_2 8",
            "9 Russia YAK%sT 2011_2_27_2 9",
            "10 - YAKT"
        ],
        "Asia/Yekaterinburg": [
            "4:2:24 - LMT 1919_6_15_4 4:2:24",
            "4 - SVET 1930_5_21 4",
            "5 Russia SVE%sT 1991_2_31_2 5",
            "4 Russia SVE%sT 1992_0_19_2 4",
            "5 Russia YEK%sT 2011_2_27_2 5",
            "6 - YEKT"
        ],
        "Asia/Yerevan": [
            "2:58 - LMT 1924_4_2 2:58",
            "3 - YERT 1957_2 3",
            "4 RussiaAsia YER%sT 1991_2_31_2 4",
            "4 - YERST 1991_8_23 4",
            "3 RussiaAsia AM%sT 1995_8_24_2 3",
            "4 - AMT 1997 4",
            "4 RussiaAsia AM%sT 2012_2_25_2 4",
            "4 - AMT"
        ],
        "Atlantic/Azores": [
            "-1:42:40 - LMT 1884 -1:42:40",
            "-1:54:32 - HMT 1911_4_24 -1:54:32",
            "-2 Port AZO%sT 1966_3_3_2 -2",
            "-1 Port AZO%sT 1983_8_25_1 -1",
            "-1 W-Eur AZO%sT 1992_8_27_1 -1",
            "0 EU WE%sT 1993_2_28_1",
            "-1 EU AZO%sT"
        ],
        "Atlantic/Bermuda": [
            "-4:19:18 - LMT 1930_0_1_2 -4:19:18",
            "-4 - AST 1974_3_28_2 -4",
            "-4 Bahamas A%sT 1976 -4",
            "-4 US A%sT"
        ],
        "Atlantic/Canary": [
            "-1:1:36 - LMT 1922_2 -1:1:36",
            "-1 - CANT 1946_8_30_1 -1",
            "0 - WET 1980_3_6_0",
            "1 - WEST 1980_8_28_0",
            "0 EU WE%sT"
        ],
        "Atlantic/Cape_Verde": [
            "-1:34:4 - LMT 1907 -1:34:4",
            "-2 - CVT 1942_8 -2",
            "-1 - CVST 1945_9_15 -1",
            "-2 - CVT 1975_10_25_2 -2",
            "-1 - CVT"
        ],
        "Atlantic/Faroe": [
            "-0:27:4 - LMT 1908_0_11 -0:27:4",
            "0 - WET 1981",
            "0 EU WE%sT"
        ],
        "Atlantic/Madeira": [
            "-1:7:36 - LMT 1884 -1:7:36",
            "-1:7:36 - FMT 1911_4_24 -1:7:36",
            "-1 Port MAD%sT 1966_3_3_2 -1",
            "0 Port WE%sT 1983_8_25_1",
            "0 EU WE%sT"
        ],
        "Atlantic/Reykjavik": [
            "-1:27:24 - LMT 1837 -1:27:24",
            "-1:27:48 - RMT 1908 -1:27:48",
            "-1 Iceland IS%sT 1968_3_7_1 -1",
            "0 - GMT"
        ],
        "Atlantic/South_Georgia": [
            "-2:26:8 - LMT 1890 -2:26:8",
            "-2 - GST"
        ],
        "Atlantic/St_Helena": [
            "-0:22:48 - LMT 1890 -0:22:48",
            "-0:22:48 - JMT 1951 -0:22:48",
            "0 - GMT"
        ],
        "Atlantic/Stanley": [
            "-3:51:24 - LMT 1890 -3:51:24",
            "-3:51:24 - SMT 1912_2_12 -3:51:24",
            "-4 Falk FK%sT 1983_4 -4",
            "-3 Falk FK%sT 1985_8_15 -3",
            "-4 Falk FK%sT 2010_8_5_02 -4",
            "-3 - FKST"
        ],
        "Australia/Adelaide": [
            "9:14:20 - LMT 1895_1 9:14:20",
            "9 - CST 1899_4 9",
            "9:30 Aus CST 1971 9:30",
            "9:30 AS CST"
        ],
        "Australia/Brisbane": [
            "10:12:8 - LMT 1895 10:12:8",
            "10 Aus EST 1971 10",
            "10 AQ EST"
        ],
        "Australia/Broken_Hill": [
            "9:25:48 - LMT 1895_1 9:25:48",
            "10 - EST 1896_7_23 10",
            "9 - CST 1899_4 9",
            "9:30 Aus CST 1971 9:30",
            "9:30 AN CST 2000 10:30",
            "9:30 AS CST"
        ],
        "Australia/Currie": [
            "9:35:28 - LMT 1895_8 9:35:28",
            "10 - EST 1916_9_1_2 10",
            "11 - EST 1917_1 11",
            "10 Aus EST 1971_6 10",
            "10 AT EST"
        ],
        "Australia/Darwin": [
            "8:43:20 - LMT 1895_1 8:43:20",
            "9 - CST 1899_4 9",
            "9:30 Aus CST"
        ],
        "Australia/Eucla": [
            "8:35:28 - LMT 1895_11 8:35:28",
            "8:45 Aus CWST 1943_6 8:45",
            "8:45 AW CWST"
        ],
        "Australia/Hobart": [
            "9:49:16 - LMT 1895_8 9:49:16",
            "10 - EST 1916_9_1_2 10",
            "11 - EST 1917_1 11",
            "10 Aus EST 1967 10",
            "10 AT EST"
        ],
        "Australia/Lindeman": [
            "9:55:56 - LMT 1895 9:55:56",
            "10 Aus EST 1971 10",
            "10 AQ EST 1992_6 10",
            "10 Holiday EST"
        ],
        "Australia/Lord_Howe": [
            "10:36:20 - LMT 1895_1 10:36:20",
            "10 - EST 1981_2 10",
            "10:30 LH LHST"
        ],
        "Australia/Melbourne": [
            "9:39:52 - LMT 1895_1 9:39:52",
            "10 Aus EST 1971 10",
            "10 AV EST"
        ],
        "Australia/Perth": [
            "7:43:24 - LMT 1895_11 7:43:24",
            "8 Aus WST 1943_6 8",
            "8 AW WST"
        ],
        "Australia/Sydney": [
            "10:4:52 - LMT 1895_1 10:4:52",
            "10 Aus EST 1971 10",
            "10 AN EST"
        ],
        "CET": [
            "1 C-Eur CE%sT"
        ],
        "CST6CDT": [
            "-6 US C%sT"
        ],
        "EET": [
            "2 EU EE%sT"
        ],
        "EST": [
            "-5 - EST"
        ],
        "EST5EDT": [
            "-5 US E%sT"
        ],
        "HST": [
            "-10 - HST"
        ],
        "MET": [
            "1 C-Eur ME%sT"
        ],
        "MST": [
            "-7 - MST"
        ],
        "MST7MDT": [
            "-7 US M%sT"
        ],
        "PST8PDT": [
            "-8 US P%sT"
        ],
        "WET": [
            "0 EU WE%sT"
        ],
        "Etc/GMT": [
            "0 - GMT"
        ],
        "Etc/GMT+1": [
            "-1 - GMT+1"
        ],
        "Etc/GMT+10": [
            "-10 - GMT+10"
        ],
        "Etc/GMT+11": [
            "-11 - GMT+11"
        ],
        "Etc/GMT+12": [
            "-12 - GMT+12"
        ],
        "Etc/GMT+2": [
            "-2 - GMT+2"
        ],
        "Etc/GMT+3": [
            "-3 - GMT+3"
        ],
        "Etc/GMT+4": [
            "-4 - GMT+4"
        ],
        "Etc/GMT+5": [
            "-5 - GMT+5"
        ],
        "Etc/GMT+6": [
            "-6 - GMT+6"
        ],
        "Etc/GMT+7": [
            "-7 - GMT+7"
        ],
        "Etc/GMT+8": [
            "-8 - GMT+8"
        ],
        "Etc/GMT+9": [
            "-9 - GMT+9"
        ],
        "Etc/GMT-1": [
            "1 - GMT-1"
        ],
        "Etc/GMT-10": [
            "10 - GMT-10"
        ],
        "Etc/GMT-11": [
            "11 - GMT-11"
        ],
        "Etc/GMT-12": [
            "12 - GMT-12"
        ],
        "Etc/GMT-13": [
            "13 - GMT-13"
        ],
        "Etc/GMT-14": [
            "14 - GMT-14"
        ],
        "Etc/GMT-2": [
            "2 - GMT-2"
        ],
        "Etc/GMT-3": [
            "3 - GMT-3"
        ],
        "Etc/GMT-4": [
            "4 - GMT-4"
        ],
        "Etc/GMT-5": [
            "5 - GMT-5"
        ],
        "Etc/GMT-6": [
            "6 - GMT-6"
        ],
        "Etc/GMT-7": [
            "7 - GMT-7"
        ],
        "Etc/GMT-8": [
            "8 - GMT-8"
        ],
        "Etc/GMT-9": [
            "9 - GMT-9"
        ],
        "Etc/UCT": [
            "0 - UCT"
        ],
        "Etc/UTC": [
            "0 - UTC"
        ],
        "Europe/Amsterdam": [
            "0:19:32 - LMT 1835 0:19:32",
            "0:19:32 Neth %s 1937_6_1 1:19:32",
            "0:20 Neth NE%sT 1940_4_16_0 0:20",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Neth CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Andorra": [
            "0:6:4 - LMT 1901 0:6:4",
            "0 - WET 1946_8_30",
            "1 - CET 1985_2_31_2 1",
            "1 EU CE%sT"
        ],
        "Europe/Athens": [
            "1:34:52 - LMT 1895_8_14 1:34:52",
            "1:34:52 - AMT 1916_6_28_0_1 1:34:52",
            "2 Greece EE%sT 1941_3_30 3",
            "1 Greece CE%sT 1944_3_4 1",
            "2 Greece EE%sT 1981 2",
            "2 EU EE%sT"
        ],
        "Europe/Belgrade": [
            "1:22 - LMT 1884 1:22",
            "1 - CET 1941_3_18_23 1",
            "1 C-Eur CE%sT 1945 1",
            "1 - CET 1945_4_8_2 1",
            "2 - CEST 1945_8_16_2 1",
            "1 - CET 1982_10_27 1",
            "1 EU CE%sT"
        ],
        "Europe/Berlin": [
            "0:53:28 - LMT 1893_3 0:53:28",
            "1 C-Eur CE%sT 1945_4_24_2 2",
            "1 SovietZone CE%sT 1946 1",
            "1 Germany CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Prague": [
            "0:57:44 - LMT 1850 0:57:44",
            "0:57:44 - PMT 1891_9 0:57:44",
            "1 C-Eur CE%sT 1944_8_17_2 1",
            "1 Czech CE%sT 1979 1",
            "1 EU CE%sT"
        ],
        "Europe/Brussels": [
            "0:17:30 - LMT 1880 0:17:30",
            "0:17:30 - BMT 1892_4_1_12 0:17:30",
            "0 - WET 1914_10_8",
            "1 - CET 1916_4_1_0 1",
            "1 C-Eur CE%sT 1918_10_11_11",
            "0 Belgium WE%sT 1940_4_20_2",
            "1 C-Eur CE%sT 1944_8_3 2",
            "1 Belgium CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Bucharest": [
            "1:44:24 - LMT 1891_9 1:44:24",
            "1:44:24 - BMT 1931_6_24 1:44:24",
            "2 Romania EE%sT 1981_2_29_2 2",
            "2 C-Eur EE%sT 1991 2",
            "2 Romania EE%sT 1994 2",
            "2 E-Eur EE%sT 1997 2",
            "2 EU EE%sT"
        ],
        "Europe/Budapest": [
            "1:16:20 - LMT 1890_9 1:16:20",
            "1 C-Eur CE%sT 1918 1",
            "1 Hungary CE%sT 1941_3_6_2 1",
            "1 C-Eur CE%sT 1945 1",
            "1 Hungary CE%sT 1980_8_28_2 1",
            "1 EU CE%sT"
        ],
        "Europe/Zurich": [
            "0:34:8 - LMT 1848_8_12 0:34:8",
            "0:29:44 - BMT 1894_5 0:29:44",
            "1 Swiss CE%sT 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Chisinau": [
            "1:55:20 - LMT 1880 1:55:20",
            "1:55 - CMT 1918_1_15 1:55",
            "1:44:24 - BMT 1931_6_24 1:44:24",
            "2 Romania EE%sT 1940_7_15 2",
            "3 - EEST 1941_6_17 3",
            "1 C-Eur CE%sT 1944_7_24 2",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_4_6 3",
            "2 - EET 1991 2",
            "2 Russia EE%sT 1992 2",
            "2 E-Eur EE%sT 1997 2",
            "2 EU EE%sT"
        ],
        "Europe/Copenhagen": [
            "0:50:20 - LMT 1890 0:50:20",
            "0:50:20 - CMT 1894_0_1 0:50:20",
            "1 Denmark CE%sT 1942_10_2_2 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Denmark CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Dublin": [
            "-0:25 - LMT 1880_7_2 -0:25",
            "-0:25:21 - DMT 1916_4_21_2 -0:25:21",
            "0:34:39 - IST 1916_9_1_2 -0:25:21",
            "0 GB-Eire %s 1921_11_6",
            "0 GB-Eire GMT/IST 1940_1_25_2",
            "1 - IST 1946_9_6_2 1",
            "0 - GMT 1947_2_16_2",
            "1 - IST 1947_10_2_2 1",
            "0 - GMT 1948_3_18_2",
            "0 GB-Eire GMT/IST 1968_9_27 1",
            "1 - IST 1971_9_31_2",
            "0 GB-Eire GMT/IST 1996",
            "0 EU GMT/IST"
        ],
        "Europe/Gibraltar": [
            "-0:21:24 - LMT 1880_7_2_0 -0:21:24",
            "0 GB-Eire %s 1957_3_14_2",
            "1 - CET 1982 1",
            "1 EU CE%sT"
        ],
        "Europe/London": [
            "-0:1:15 - LMT 1847_11_1_0 -0:1:15",
            "0 GB-Eire %s 1968_9_27 1",
            "1 - BST 1971_9_31_2",
            "0 GB-Eire %s 1996",
            "0 EU GMT/BST"
        ],
        "Europe/Helsinki": [
            "1:39:52 - LMT 1878_4_31 1:39:52",
            "1:39:52 - HMT 1921_4 1:39:52",
            "2 Finland EE%sT 1983 2",
            "2 EU EE%sT"
        ],
        "Europe/Istanbul": [
            "1:55:52 - LMT 1880 1:55:52",
            "1:56:56 - IMT 1910_9 1:56:56",
            "2 Turkey EE%sT 1978_9_15 3",
            "3 Turkey TR%sT 1985_3_20 3",
            "2 Turkey EE%sT 2007 2",
            "2 EU EE%sT 2011_2_27_1",
            "2 - EET 2011_2_28_1",
            "2 EU EE%sT"
        ],
        "Europe/Kaliningrad": [
            "1:22 - LMT 1893_3 1:22",
            "1 C-Eur CE%sT 1945 1",
            "2 Poland CE%sT 1946 2",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "2 Russia EE%sT 2011_2_27_2 2",
            "3 - FET"
        ],
        "Europe/Kiev": [
            "2:2:4 - LMT 1880 2:2:4",
            "2:2:4 - KMT 1924_4_2 2:2:4",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_8_20 3",
            "1 C-Eur CE%sT 1943_10_6 1",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_6_1_2 3",
            "2 - EET 1992 2",
            "2 E-Eur EE%sT 1995 2",
            "2 EU EE%sT"
        ],
        "Europe/Lisbon": [
            "-0:36:32 - LMT 1884 -0:36:32",
            "-0:36:32 - LMT 1912_0_1 -0:36:32",
            "0 Port WE%sT 1966_3_3_2",
            "1 - CET 1976_8_26_1 1",
            "0 Port WE%sT 1983_8_25_1",
            "0 W-Eur WE%sT 1992_8_27_1",
            "1 EU CE%sT 1996_2_31_1",
            "0 EU WE%sT"
        ],
        "Europe/Luxembourg": [
            "0:24:36 - LMT 1904_5 0:24:36",
            "1 Lux CE%sT 1918_10_25 1",
            "0 Lux WE%sT 1929_9_6_2",
            "0 Belgium WE%sT 1940_4_14_3 1",
            "1 C-Eur WE%sT 1944_8_18_3 2",
            "1 Belgium CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Madrid": [
            "-0:14:44 - LMT 1901_0_1_0 -0:14:44",
            "0 Spain WE%sT 1946_8_30 2",
            "1 Spain CE%sT 1979 1",
            "1 EU CE%sT"
        ],
        "Europe/Malta": [
            "0:58:4 - LMT 1893_10_2_0 0:58:4",
            "1 Italy CE%sT 1942_10_2_2 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Italy CE%sT 1973_2_31 1",
            "1 Malta CE%sT 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Minsk": [
            "1:50:16 - LMT 1880 1:50:16",
            "1:50 - MMT 1924_4_2 1:50",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_5_28 3",
            "1 C-Eur CE%sT 1944_6_3 2",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1991_2_31_2 3",
            "3 - EEST 1991_8_29_2 2",
            "2 - EET 1992_2_29_0 2",
            "3 - EEST 1992_8_27_0 2",
            "2 Russia EE%sT 2011_2_27_2 2",
            "3 - FET"
        ],
        "Europe/Monaco": [
            "0:29:32 - LMT 1891_2_15 0:29:32",
            "0:9:21 - PMT 1911_2_11 0:9:21",
            "0 France WE%sT 1945_8_16_3 2",
            "1 France CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Moscow": [
            "2:30:20 - LMT 1880 2:30:20",
            "2:30 - MMT 1916_6_3 2:30",
            "2:30:48 Russia %s 1919_6_1_2 4:30:48",
            "3 Russia MSK/MSD 1922_9 3",
            "2 - EET 1930_5_21 2",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "2 Russia EE%sT 1992_0_19_2 2",
            "3 Russia MSK/MSD 2011_2_27_2 3",
            "4 - MSK"
        ],
        "Europe/Paris": [
            "0:9:21 - LMT 1891_2_15_0_1 0:9:21",
            "0:9:21 - PMT 1911_2_11_0_1 0:9:21",
            "0 France WE%sT 1940_5_14_23 1",
            "1 C-Eur CE%sT 1944_7_25 2",
            "0 France WE%sT 1945_8_16_3 2",
            "1 France CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Riga": [
            "1:36:24 - LMT 1880 1:36:24",
            "1:36:24 - RMT 1918_3_15_2 1:36:24",
            "2:36:24 - LST 1918_8_16_3 2:36:24",
            "1:36:24 - RMT 1919_3_1_2 1:36:24",
            "2:36:24 - LST 1919_4_22_3 2:36:24",
            "1:36:24 - RMT 1926_4_11 1:36:24",
            "2 - EET 1940_7_5 2",
            "3 - MSK 1941_6 3",
            "1 C-Eur CE%sT 1944_9_13 1",
            "3 Russia MSK/MSD 1989_2_26_2 3",
            "3 - EEST 1989_8_24_2 2",
            "2 Latvia EE%sT 1997_0_21 2",
            "2 EU EE%sT 2000_1_29 2",
            "2 - EET 2001_0_2 2",
            "2 EU EE%sT"
        ],
        "Europe/Rome": [
            "0:49:56 - LMT 1866_8_22 0:49:56",
            "0:49:56 - RMT 1893_10_1_0 0:49:56",
            "1 Italy CE%sT 1942_10_2_2 1",
            "1 C-Eur CE%sT 1944_6 2",
            "1 Italy CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Samara": [
            "3:20:36 - LMT 1919_6_1_2 3:20:36",
            "3 - SAMT 1930_5_21 3",
            "4 - SAMT 1935_0_27 4",
            "4 Russia KUY%sT 1989_2_26_2 4",
            "3 Russia KUY%sT 1991_2_31_2 3",
            "2 Russia KUY%sT 1991_8_29_2 2",
            "3 - KUYT 1991_9_20_3 3",
            "4 Russia SAM%sT 2010_2_28_2 4",
            "3 Russia SAM%sT 2011_2_27_2 3",
            "4 - SAMT"
        ],
        "Europe/Simferopol": [
            "2:16:24 - LMT 1880 2:16:24",
            "2:16 - SMT 1924_4_2 2:16",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_10 3",
            "1 C-Eur CE%sT 1944_3_13 2",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_6_1_2 3",
            "2 - EET 1992 2",
            "2 E-Eur EE%sT 1994_4 3",
            "3 E-Eur MSK/MSD 1996_2_31_3 3",
            "4 - MSD 1996_9_27_3 3",
            "3 Russia MSK/MSD 1997 3",
            "3 - MSK 1997_2_30_1",
            "2 EU EE%sT"
        ],
        "Europe/Sofia": [
            "1:33:16 - LMT 1880 1:33:16",
            "1:56:56 - IMT 1894_10_30 1:56:56",
            "2 - EET 1942_10_2_3 2",
            "1 C-Eur CE%sT 1945 1",
            "1 - CET 1945_3_2_3 1",
            "2 - EET 1979_2_31_23 2",
            "2 Bulg EE%sT 1982_8_26_2 3",
            "2 C-Eur EE%sT 1991 2",
            "2 E-Eur EE%sT 1997 2",
            "2 EU EE%sT"
        ],
        "Europe/Stockholm": [
            "1:12:12 - LMT 1879_0_1 1:12:12",
            "1:0:14 - SET 1900_0_1 1:0:14",
            "1 - CET 1916_4_14_23 1",
            "2 - CEST 1916_9_1_01 2",
            "1 - CET 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Tallinn": [
            "1:39 - LMT 1880 1:39",
            "1:39 - TMT 1918_1 1:39",
            "1 C-Eur CE%sT 1919_6 1",
            "1:39 - TMT 1921_4 1:39",
            "2 - EET 1940_7_6 2",
            "3 - MSK 1941_8_15 3",
            "1 C-Eur CE%sT 1944_8_22 2",
            "3 Russia MSK/MSD 1989_2_26_2 3",
            "3 - EEST 1989_8_24_2 2",
            "2 C-Eur EE%sT 1998_8_22 3",
            "2 EU EE%sT 1999_10_1 3",
            "2 - EET 2002_1_21 2",
            "2 EU EE%sT"
        ],
        "Europe/Tirane": [
            "1:19:20 - LMT 1914 1:19:20",
            "1 - CET 1940_5_16 1",
            "1 Albania CE%sT 1984_6 2",
            "1 EU CE%sT"
        ],
        "Europe/Uzhgorod": [
            "1:29:12 - LMT 1890_9 1:29:12",
            "1 - CET 1940 1",
            "1 C-Eur CE%sT 1944_9 2",
            "2 - CEST 1944_9_26 2",
            "1 - CET 1945_5_29 1",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_6_1_2 3",
            "1 - CET 1991_2_31_3 1",
            "2 - EET 1992 2",
            "2 E-Eur EE%sT 1995 2",
            "2 EU EE%sT"
        ],
        "Europe/Vaduz": [
            "0:38:4 - LMT 1894_5 0:38:4",
            "1 - CET 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Vienna": [
            "1:5:21 - LMT 1893_3 1:5:21",
            "1 C-Eur CE%sT 1920 1",
            "1 Austria CE%sT 1940_3_1_2 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "2 - CEST 1945_3_12_2 1",
            "1 - CET 1946 1",
            "1 Austria CE%sT 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Vilnius": [
            "1:41:16 - LMT 1880 1:41:16",
            "1:24 - WMT 1917 1:24",
            "1:35:36 - KMT 1919_9_10 1:35:36",
            "1 - CET 1920_6_12 1",
            "2 - EET 1920_9_9 2",
            "1 - CET 1940_7_3 1",
            "3 - MSK 1941_5_24 3",
            "1 C-Eur CE%sT 1944_7 2",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "3 - EEST 1991_8_29_2 2",
            "2 C-Eur EE%sT 1998 2",
            "2 - EET 1998_2_29_1",
            "1 EU CE%sT 1999_9_31_1",
            "2 - EET 2003_0_1 2",
            "2 EU EE%sT"
        ],
        "Europe/Volgograd": [
            "2:57:40 - LMT 1920_0_3 2:57:40",
            "3 - TSAT 1925_3_6 3",
            "3 - STAT 1930_5_21 3",
            "4 - STAT 1961_10_11 4",
            "4 Russia VOL%sT 1989_2_26_2 4",
            "3 Russia VOL%sT 1991_2_31_2 3",
            "4 - VOLT 1992_2_29_2 4",
            "3 Russia VOL%sT 2011_2_27_2 3",
            "4 - VOLT"
        ],
        "Europe/Warsaw": [
            "1:24 - LMT 1880 1:24",
            "1:24 - WMT 1915_7_5 1:24",
            "1 C-Eur CE%sT 1918_8_16_3 2",
            "2 Poland EE%sT 1922_5 2",
            "1 Poland CE%sT 1940_5_23_2 1",
            "1 C-Eur CE%sT 1944_9 2",
            "1 Poland CE%sT 1977 1",
            "1 W-Eur CE%sT 1988 1",
            "1 EU CE%sT"
        ],
        "Europe/Zaporozhye": [
            "2:20:40 - LMT 1880 2:20:40",
            "2:20 - CUT 1924_4_2 2:20",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_7_25 3",
            "1 C-Eur CE%sT 1943_9_25 1",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "2 E-Eur EE%sT 1995 2",
            "2 EU EE%sT"
        ],
        "Indian/Antananarivo": [
            "3:10:4 - LMT 1911_6 3:10:4",
            "3 - EAT 1954_1_27_23 3",
            "4 - EAST 1954_4_29_23 3",
            "3 - EAT"
        ],
        "Indian/Chagos": [
            "4:49:40 - LMT 1907 4:49:40",
            "5 - IOT 1996 5",
            "6 - IOT"
        ],
        "Indian/Christmas": [
            "7:2:52 - LMT 1895_1 7:2:52",
            "7 - CXT"
        ],
        "Indian/Cocos": [
            "6:27:40 - LMT 1900 6:27:40",
            "6:30 - CCT"
        ],
        "Indian/Comoro": [
            "2:53:4 - LMT 1911_6 2:53:4",
            "3 - EAT"
        ],
        "Indian/Kerguelen": [
            "0 - zzz 1950",
            "5 - TFT"
        ],
        "Indian/Mahe": [
            "3:41:48 - LMT 1906_5 3:41:48",
            "4 - SCT"
        ],
        "Indian/Maldives": [
            "4:54 - LMT 1880 4:54",
            "4:54 - MMT 1960 4:54",
            "5 - MVT"
        ],
        "Indian/Mauritius": [
            "3:50 - LMT 1907 3:50",
            "4 Mauritius MU%sT"
        ],
        "Indian/Mayotte": [
            "3:0:56 - LMT 1911_6 3:0:56",
            "3 - EAT"
        ],
        "Indian/Reunion": [
            "3:41:52 - LMT 1911_5 3:41:52",
            "4 - RET"
        ],
        "Pacific/Apia": [
            "12:33:4 - LMT 1879_6_5 12:33:4",
            "-11:26:56 - LMT 1911 -11:26:56",
            "-11:30 - SAMT 1950 -11:30",
            "-11 - WST 2010_8_26 -11",
            "-10 - WSDT 2011_3_2_4 -10",
            "-11 - WST 2011_8_24_3 -11",
            "-10 - WSDT 2011_11_30 -10",
            "14 - WSDT 2012_3_1_4 14",
            "13 WS WS%sT"
        ],
        "Pacific/Auckland": [
            "11:39:4 - LMT 1868_10_2 11:39:4",
            "11:30 NZ NZ%sT 1946_0_1 12",
            "12 NZ NZ%sT"
        ],
        "Pacific/Chatham": [
            "12:13:48 - LMT 1957_0_1 12:13:48",
            "12:45 Chatham CHA%sT"
        ],
        "Pacific/Chuuk": [
            "10:7:8 - LMT 1901 10:7:8",
            "10 - CHUT"
        ],
        "Pacific/Easter": [
            "-7:17:44 - LMT 1890 -7:17:44",
            "-7:17:28 - EMT 1932_8 -7:17:28",
            "-7 Chile EAS%sT 1982_2_13_21 -6",
            "-6 Chile EAS%sT"
        ],
        "Pacific/Efate": [
            "11:13:16 - LMT 1912_0_13 11:13:16",
            "11 Vanuatu VU%sT"
        ],
        "Pacific/Enderbury": [
            "-11:24:20 - LMT 1901 -11:24:20",
            "-12 - PHOT 1979_9 -12",
            "-11 - PHOT 1995 -11",
            "13 - PHOT"
        ],
        "Pacific/Fakaofo": [
            "-11:24:56 - LMT 1901 -11:24:56",
            "-11 - TKT 2011_11_30 -11",
            "13 - TKT"
        ],
        "Pacific/Fiji": [
            "11:55:44 - LMT 1915_9_26 11:55:44",
            "12 Fiji FJ%sT"
        ],
        "Pacific/Funafuti": [
            "11:56:52 - LMT 1901 11:56:52",
            "12 - TVT"
        ],
        "Pacific/Galapagos": [
            "-5:58:24 - LMT 1931 -5:58:24",
            "-5 - ECT 1986 -5",
            "-6 - GALT"
        ],
        "Pacific/Gambier": [
            "-8:59:48 - LMT 1912_9 -8:59:48",
            "-9 - GAMT"
        ],
        "Pacific/Guadalcanal": [
            "10:39:48 - LMT 1912_9 10:39:48",
            "11 - SBT"
        ],
        "Pacific/Guam": [
            "-14:21 - LMT 1844_11_31 -14:21",
            "9:39 - LMT 1901 9:39",
            "10 - GST 2000_11_23 10",
            "10 - ChST"
        ],
        "Pacific/Honolulu": [
            "-10:31:26 - LMT 1896_0_13_12 -10:31:26",
            "-10:30 - HST 1933_3_30_2 -10:30",
            "-9:30 - HDT 1933_4_21_12 -9:30",
            "-10:30 - HST 1942_1_09_2 -10:30",
            "-9:30 - HDT 1945_8_30_2 -9:30",
            "-10:30 - HST 1947_5_8_2 -10:30",
            "-10 - HST"
        ],
        "Pacific/Johnston": [
            "-10 - HST"
        ],
        "Pacific/Kiritimati": [
            "-10:29:20 - LMT 1901 -10:29:20",
            "-10:40 - LINT 1979_9 -10:40",
            "-10 - LINT 1995 -10",
            "14 - LINT"
        ],
        "Pacific/Kosrae": [
            "10:51:56 - LMT 1901 10:51:56",
            "11 - KOST 1969_9 11",
            "12 - KOST 1999 12",
            "11 - KOST"
        ],
        "Pacific/Kwajalein": [
            "11:9:20 - LMT 1901 11:9:20",
            "11 - MHT 1969_9 11",
            "-12 - KWAT 1993_7_20 -12",
            "12 - MHT"
        ],
        "Pacific/Majuro": [
            "11:24:48 - LMT 1901 11:24:48",
            "11 - MHT 1969_9 11",
            "12 - MHT"
        ],
        "Pacific/Marquesas": [
            "-9:18 - LMT 1912_9 -9:18",
            "-9:30 - MART"
        ],
        "Pacific/Midway": [
            "-11:49:28 - LMT 1901 -11:49:28",
            "-11 - NST 1956_5_3 -11",
            "-10 - NDT 1956_8_2 -10",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1983_10_30 -11",
            "-11 - SST"
        ],
        "Pacific/Nauru": [
            "11:7:40 - LMT 1921_0_15 11:7:40",
            "11:30 - NRT 1942_2_15 11:30",
            "9 - JST 1944_7_15 9",
            "11:30 - NRT 1979_4 11:30",
            "12 - NRT"
        ],
        "Pacific/Niue": [
            "-11:19:40 - LMT 1901 -11:19:40",
            "-11:20 - NUT 1951 -11:20",
            "-11:30 - NUT 1978_9_1 -11:30",
            "-11 - NUT"
        ],
        "Pacific/Norfolk": [
            "11:11:52 - LMT 1901 11:11:52",
            "11:12 - NMT 1951 11:12",
            "11:30 - NFT"
        ],
        "Pacific/Noumea": [
            "11:5:48 - LMT 1912_0_13 11:5:48",
            "11 NC NC%sT"
        ],
        "Pacific/Pago_Pago": [
            "12:37:12 - LMT 1879_6_5 12:37:12",
            "-11:22:48 - LMT 1911 -11:22:48",
            "-11:30 - SAMT 1950 -11:30",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1983_10_30 -11",
            "-11 - SST"
        ],
        "Pacific/Palau": [
            "8:57:56 - LMT 1901 8:57:56",
            "9 - PWT"
        ],
        "Pacific/Pitcairn": [
            "-8:40:20 - LMT 1901 -8:40:20",
            "-8:30 - PNT 1998_3_27_00 -8:30",
            "-8 - PST"
        ],
        "Pacific/Pohnpei": [
            "10:32:52 - LMT 1901 10:32:52",
            "11 - PONT"
        ],
        "Pacific/Port_Moresby": [
            "9:48:40 - LMT 1880 9:48:40",
            "9:48:32 - PMMT 1895 9:48:32",
            "10 - PGT"
        ],
        "Pacific/Rarotonga": [
            "-10:39:4 - LMT 1901 -10:39:4",
            "-10:30 - CKT 1978_10_12 -10:30",
            "-10 Cook CK%sT"
        ],
        "Pacific/Saipan": [
            "-14:17 - LMT 1844_11_31 -14:17",
            "9:43 - LMT 1901 9:43",
            "9 - MPT 1969_9 9",
            "10 - MPT 2000_11_23 10",
            "10 - ChST"
        ],
        "Pacific/Tahiti": [
            "-9:58:16 - LMT 1912_9 -9:58:16",
            "-10 - TAHT"
        ],
        "Pacific/Tarawa": [
            "11:32:4 - LMT 1901 11:32:4",
            "12 - GILT"
        ],
        "Pacific/Tongatapu": [
            "12:19:20 - LMT 1901 12:19:20",
            "12:20 - TOT 1941 12:20",
            "13 - TOT 1999 13",
            "13 Tonga TO%sT"
        ],
        "Pacific/Wake": [
            "11:6:28 - LMT 1901 11:6:28",
            "12 - WAKT"
        ],
        "Pacific/Wallis": [
            "12:15:20 - LMT 1901 12:15:20",
            "12 - WFT"
        ]
    },
    "rules": {
        "Ghana": [
            "1936 1942 8 1 7 0 0 0:20 GHST",
            "1936 1942 11 31 7 0 0 0 GMT"
        ],
        "Algeria": [
            "1916 1916 5 14 7 23 2 1 S",
            "1916 1919 9 1 0 23 2 0",
            "1917 1917 2 24 7 23 2 1 S",
            "1918 1918 2 9 7 23 2 1 S",
            "1919 1919 2 1 7 23 2 1 S",
            "1920 1920 1 14 7 23 2 1 S",
            "1920 1920 9 23 7 23 2 0",
            "1921 1921 2 14 7 23 2 1 S",
            "1921 1921 5 21 7 23 2 0",
            "1939 1939 8 11 7 23 2 1 S",
            "1939 1939 10 19 7 1 0 0",
            "1944 1945 3 1 1 2 0 1 S",
            "1944 1944 9 8 7 2 0 0",
            "1945 1945 8 16 7 1 0 0",
            "1971 1971 3 25 7 23 2 1 S",
            "1971 1971 8 26 7 23 2 0",
            "1977 1977 4 6 7 0 0 1 S",
            "1977 1977 9 21 7 0 0 0",
            "1978 1978 2 24 7 1 0 1 S",
            "1978 1978 8 22 7 3 0 0",
            "1980 1980 3 25 7 0 0 1 S",
            "1980 1980 9 31 7 2 0 0"
        ],
        "Egypt": [
            "1940 1940 6 15 7 0 0 1 S",
            "1940 1940 9 1 7 0 0 0",
            "1941 1941 3 15 7 0 0 1 S",
            "1941 1941 8 16 7 0 0 0",
            "1942 1944 3 1 7 0 0 1 S",
            "1942 1942 9 27 7 0 0 0",
            "1943 1945 10 1 7 0 0 0",
            "1945 1945 3 16 7 0 0 1 S",
            "1957 1957 4 10 7 0 0 1 S",
            "1957 1958 9 1 7 0 0 0",
            "1958 1958 4 1 7 0 0 1 S",
            "1959 1981 4 1 7 1 0 1 S",
            "1959 1965 8 30 7 3 0 0",
            "1966 1994 9 1 7 3 0 0",
            "1982 1982 6 25 7 1 0 1 S",
            "1983 1983 6 12 7 1 0 1 S",
            "1984 1988 4 1 7 1 0 1 S",
            "1989 1989 4 6 7 1 0 1 S",
            "1990 1994 4 1 7 1 0 1 S",
            "1995 2010 3 5 8 0 2 1 S",
            "1995 2005 8 4 8 23 2 0",
            "2006 2006 8 21 7 23 2 0",
            "2007 2007 8 1 4 23 2 0",
            "2008 2008 7 4 8 23 2 0",
            "2009 2009 7 20 7 23 2 0",
            "2010 2010 7 11 7 0 0 0",
            "2010 2010 8 10 7 0 0 1 S",
            "2010 2010 8 4 8 23 2 0"
        ],
        "Morocco": [
            "1939 1939 8 12 7 0 0 1 S",
            "1939 1939 10 19 7 0 0 0",
            "1940 1940 1 25 7 0 0 1 S",
            "1945 1945 10 18 7 0 0 0",
            "1950 1950 5 11 7 0 0 1 S",
            "1950 1950 9 29 7 0 0 0",
            "1967 1967 5 3 7 12 0 1 S",
            "1967 1967 9 1 7 0 0 0",
            "1974 1974 5 24 7 0 0 1 S",
            "1974 1974 8 1 7 0 0 0",
            "1976 1977 4 1 7 0 0 1 S",
            "1976 1976 7 1 7 0 0 0",
            "1977 1977 8 28 7 0 0 0",
            "1978 1978 5 1 7 0 0 1 S",
            "1978 1978 7 4 7 0 0 0",
            "2008 2008 5 1 7 0 0 1 S",
            "2008 2008 8 1 7 0 0 0",
            "2009 2009 5 1 7 0 0 1 S",
            "2009 2009 7 21 7 0 0 0",
            "2010 2010 4 2 7 0 0 1 S",
            "2010 2010 7 8 7 0 0 0",
            "2011 2011 3 3 7 0 0 1 S",
            "2011 2011 6 31 7 0 0 0",
            "2012 2019 3 0 8 2 0 1 S",
            "2012 9999 8 0 8 3 0 0",
            "2012 2012 6 20 7 3 0 0",
            "2012 2012 7 20 7 2 0 1 S",
            "2013 2013 6 9 7 3 0 0",
            "2013 2013 7 8 7 2 0 1 S",
            "2014 2014 5 29 7 3 0 0",
            "2014 2014 6 29 7 2 0 1 S",
            "2015 2015 5 18 7 3 0 0",
            "2015 2015 6 18 7 2 0 1 S",
            "2016 2016 5 7 7 3 0 0",
            "2016 2016 6 7 7 2 0 1 S",
            "2017 2017 4 27 7 3 0 0",
            "2017 2017 5 26 7 2 0 1 S",
            "2018 2018 4 16 7 3 0 0",
            "2018 2018 5 15 7 2 0 1 S",
            "2019 2019 4 6 7 3 0 0",
            "2019 2019 5 5 7 2 0 1 S",
            "2020 2020 4 24 7 2 0 1 S",
            "2021 2021 4 13 7 2 0 1 S",
            "2022 2022 4 3 7 2 0 1 S",
            "2023 9999 3 0 8 2 0 1 S"
        ],
        "Spain": [
            "1917 1917 4 5 7 23 2 1 S",
            "1917 1919 9 6 7 23 2 0",
            "1918 1918 3 15 7 23 2 1 S",
            "1919 1919 3 5 7 23 2 1 S",
            "1924 1924 3 16 7 23 2 1 S",
            "1924 1924 9 4 7 23 2 0",
            "1926 1926 3 17 7 23 2 1 S",
            "1926 1929 9 1 6 23 2 0",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1929 1929 3 20 7 23 2 1 S",
            "1937 1937 4 22 7 23 2 1 S",
            "1937 1939 9 1 6 23 2 0",
            "1938 1938 2 22 7 23 2 1 S",
            "1939 1939 3 15 7 23 2 1 S",
            "1940 1940 2 16 7 23 2 1 S",
            "1942 1942 4 2 7 22 2 2 M",
            "1942 1942 8 1 7 22 2 1 S",
            "1943 1946 3 13 6 22 2 2 M",
            "1943 1943 9 3 7 22 2 1 S",
            "1944 1944 9 10 7 22 2 1 S",
            "1945 1945 8 30 7 1 0 1 S",
            "1946 1946 8 30 7 0 0 0",
            "1949 1949 3 30 7 23 0 1 S",
            "1949 1949 8 30 7 1 0 0",
            "1974 1975 3 13 6 23 0 1 S",
            "1974 1975 9 1 0 1 0 0",
            "1976 1976 2 27 7 23 0 1 S",
            "1976 1977 8 0 8 1 0 0",
            "1977 1978 3 2 7 23 0 1 S",
            "1978 1978 9 1 7 1 0 0"
        ],
        "SpainAfrica": [
            "1967 1967 5 3 7 12 0 1 S",
            "1967 1967 9 1 7 0 0 0",
            "1974 1974 5 24 7 0 0 1 S",
            "1974 1974 8 1 7 0 0 0",
            "1976 1977 4 1 7 0 0 1 S",
            "1976 1976 7 1 7 0 0 0",
            "1977 1977 8 28 7 0 0 0",
            "1978 1978 5 1 7 0 0 1 S",
            "1978 1978 7 4 7 0 0 0"
        ],
        "EU": [
            "1977 1980 3 1 0 1 1 1 S",
            "1977 1977 8 0 8 1 1 0",
            "1978 1978 9 1 7 1 1 0",
            "1979 1995 8 0 8 1 1 0",
            "1981 9999 2 0 8 1 1 1 S",
            "1996 9999 9 0 8 1 1 0"
        ],
        "SL": [
            "1935 1942 5 1 7 0 0 0:40 SLST",
            "1935 1942 9 1 7 0 0 0 WAT",
            "1957 1962 5 1 7 0 0 1 SLST",
            "1957 1962 8 1 7 0 0 0 GMT"
        ],
        "SA": [
            "1942 1943 8 15 0 2 0 1",
            "1943 1944 2 15 0 2 0 0"
        ],
        "Sudan": [
            "1970 1970 4 1 7 0 0 1 S",
            "1970 1985 9 15 7 0 0 0",
            "1971 1971 3 30 7 0 0 1 S",
            "1972 1985 3 0 8 0 0 1 S"
        ],
        "Libya": [
            "1951 1951 9 14 7 2 0 1 S",
            "1952 1952 0 1 7 0 0 0",
            "1953 1953 9 9 7 2 0 1 S",
            "1954 1954 0 1 7 0 0 0",
            "1955 1955 8 30 7 0 0 1 S",
            "1956 1956 0 1 7 0 0 0",
            "1982 1984 3 1 7 0 0 1 S",
            "1982 1985 9 1 7 0 0 0",
            "1985 1985 3 6 7 0 0 1 S",
            "1986 1986 3 4 7 0 0 1 S",
            "1986 1986 9 3 7 0 0 0",
            "1987 1989 3 1 7 0 0 1 S",
            "1987 1989 9 1 7 0 0 0",
            "1997 1997 3 4 7 0 0 1 S",
            "1997 1997 9 4 7 0 0 0",
            "2013 9999 2 5 8 1 0 1 S",
            "2013 9999 9 5 8 2 0 0"
        ],
        "Tunisia": [
            "1939 1939 3 15 7 23 2 1 S",
            "1939 1939 10 18 7 23 2 0",
            "1940 1940 1 25 7 23 2 1 S",
            "1941 1941 9 6 7 0 0 0",
            "1942 1942 2 9 7 0 0 1 S",
            "1942 1942 10 2 7 3 0 0",
            "1943 1943 2 29 7 2 0 1 S",
            "1943 1943 3 17 7 2 0 0",
            "1943 1943 3 25 7 2 0 1 S",
            "1943 1943 9 4 7 2 0 0",
            "1944 1945 3 1 1 2 0 1 S",
            "1944 1944 9 8 7 0 0 0",
            "1945 1945 8 16 7 0 0 0",
            "1977 1977 3 30 7 0 2 1 S",
            "1977 1977 8 24 7 0 2 0",
            "1978 1978 4 1 7 0 2 1 S",
            "1978 1978 9 1 7 0 2 0",
            "1988 1988 5 1 7 0 2 1 S",
            "1988 1990 8 0 8 0 2 0",
            "1989 1989 2 26 7 0 2 1 S",
            "1990 1990 4 1 7 0 2 1 S",
            "2005 2005 4 1 7 0 2 1 S",
            "2005 2005 8 30 7 1 2 0",
            "2006 2008 2 0 8 2 2 1 S",
            "2006 2008 9 0 8 2 2 0"
        ],
        "Namibia": [
            "1994 9999 8 1 0 2 0 1 S",
            "1995 9999 3 1 0 2 0 0"
        ],
        "US": [
            "1918 1919 2 0 8 2 0 1 D",
            "1918 1919 9 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1967 2006 9 0 8 2 0 0 S",
            "1967 1973 3 0 8 2 0 1 D",
            "1974 1974 0 6 7 2 0 1 D",
            "1975 1975 1 23 7 2 0 1 D",
            "1976 1986 3 0 8 2 0 1 D",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Brazil": [
            "1931 1931 9 3 7 11 0 1 S",
            "1932 1933 3 1 7 0 0 0",
            "1932 1932 9 3 7 0 0 1 S",
            "1949 1952 11 1 7 0 0 1 S",
            "1950 1950 3 16 7 1 0 0",
            "1951 1952 3 1 7 0 0 0",
            "1953 1953 2 1 7 0 0 0",
            "1963 1963 11 9 7 0 0 1 S",
            "1964 1964 2 1 7 0 0 0",
            "1965 1965 0 31 7 0 0 1 S",
            "1965 1965 2 31 7 0 0 0",
            "1965 1965 11 1 7 0 0 1 S",
            "1966 1968 2 1 7 0 0 0",
            "1966 1967 10 1 7 0 0 1 S",
            "1985 1985 10 2 7 0 0 1 S",
            "1986 1986 2 15 7 0 0 0",
            "1986 1986 9 25 7 0 0 1 S",
            "1987 1987 1 14 7 0 0 0",
            "1987 1987 9 25 7 0 0 1 S",
            "1988 1988 1 7 7 0 0 0",
            "1988 1988 9 16 7 0 0 1 S",
            "1989 1989 0 29 7 0 0 0",
            "1989 1989 9 15 7 0 0 1 S",
            "1990 1990 1 11 7 0 0 0",
            "1990 1990 9 21 7 0 0 1 S",
            "1991 1991 1 17 7 0 0 0",
            "1991 1991 9 20 7 0 0 1 S",
            "1992 1992 1 9 7 0 0 0",
            "1992 1992 9 25 7 0 0 1 S",
            "1993 1993 0 31 7 0 0 0",
            "1993 1995 9 11 0 0 0 1 S",
            "1994 1995 1 15 0 0 0 0",
            "1996 1996 1 11 7 0 0 0",
            "1996 1996 9 6 7 0 0 1 S",
            "1997 1997 1 16 7 0 0 0",
            "1997 1997 9 6 7 0 0 1 S",
            "1998 1998 2 1 7 0 0 0",
            "1998 1998 9 11 7 0 0 1 S",
            "1999 1999 1 21 7 0 0 0",
            "1999 1999 9 3 7 0 0 1 S",
            "2000 2000 1 27 7 0 0 0",
            "2000 2001 9 8 0 0 0 1 S",
            "2001 2006 1 15 0 0 0 0",
            "2002 2002 10 3 7 0 0 1 S",
            "2003 2003 9 19 7 0 0 1 S",
            "2004 2004 10 2 7 0 0 1 S",
            "2005 2005 9 16 7 0 0 1 S",
            "2006 2006 10 5 7 0 0 1 S",
            "2007 2007 1 25 7 0 0 0",
            "2007 2007 9 8 0 0 0 1 S",
            "2008 9999 9 15 0 0 0 1 S",
            "2008 2011 1 15 0 0 0 0",
            "2012 2012 1 22 0 0 0 0",
            "2013 2014 1 15 0 0 0 0",
            "2015 2015 1 22 0 0 0 0",
            "2016 2022 1 15 0 0 0 0",
            "2023 2023 1 22 0 0 0 0",
            "2024 2025 1 15 0 0 0 0",
            "2026 2026 1 22 0 0 0 0",
            "2027 2033 1 15 0 0 0 0",
            "2034 2034 1 22 0 0 0 0",
            "2035 2036 1 15 0 0 0 0",
            "2037 2037 1 22 0 0 0 0",
            "2038 9999 1 15 0 0 0 0"
        ],
        "Arg": [
            "1930 1930 11 1 7 0 0 1 S",
            "1931 1931 3 1 7 0 0 0",
            "1931 1931 9 15 7 0 0 1 S",
            "1932 1940 2 1 7 0 0 0",
            "1932 1939 10 1 7 0 0 1 S",
            "1940 1940 6 1 7 0 0 1 S",
            "1941 1941 5 15 7 0 0 0",
            "1941 1941 9 15 7 0 0 1 S",
            "1943 1943 7 1 7 0 0 0",
            "1943 1943 9 15 7 0 0 1 S",
            "1946 1946 2 1 7 0 0 0",
            "1946 1946 9 1 7 0 0 1 S",
            "1963 1963 9 1 7 0 0 0",
            "1963 1963 11 15 7 0 0 1 S",
            "1964 1966 2 1 7 0 0 0",
            "1964 1966 9 15 7 0 0 1 S",
            "1967 1967 3 2 7 0 0 0",
            "1967 1968 9 1 0 0 0 1 S",
            "1968 1969 3 1 0 0 0 0",
            "1974 1974 0 23 7 0 0 1 S",
            "1974 1974 4 1 7 0 0 0",
            "1988 1988 11 1 7 0 0 1 S",
            "1989 1993 2 1 0 0 0 0",
            "1989 1992 9 15 0 0 0 1 S",
            "1999 1999 9 1 0 0 0 1 S",
            "2000 2000 2 3 7 0 0 0",
            "2007 2007 11 30 7 0 0 1 S",
            "2008 2009 2 15 0 0 0 0",
            "2008 2008 9 15 0 0 0 1 S"
        ],
        "SanLuis": [
            "2008 2009 2 8 0 0 0 0",
            "2007 2009 9 8 0 0 0 1 S"
        ],
        "Para": [
            "1975 1988 9 1 7 0 0 1 S",
            "1975 1978 2 1 7 0 0 0",
            "1979 1991 3 1 7 0 0 0",
            "1989 1989 9 22 7 0 0 1 S",
            "1990 1990 9 1 7 0 0 1 S",
            "1991 1991 9 6 7 0 0 1 S",
            "1992 1992 2 1 7 0 0 0",
            "1992 1992 9 5 7 0 0 1 S",
            "1993 1993 2 31 7 0 0 0",
            "1993 1995 9 1 7 0 0 1 S",
            "1994 1995 1 0 8 0 0 0",
            "1996 1996 2 1 7 0 0 0",
            "1996 2001 9 1 0 0 0 1 S",
            "1997 1997 1 0 8 0 0 0",
            "1998 2001 2 1 0 0 0 0",
            "2002 2004 3 1 0 0 0 0",
            "2002 2003 8 1 0 0 0 1 S",
            "2004 2009 9 15 0 0 0 1 S",
            "2005 2009 2 8 0 0 0 0",
            "2010 9999 9 1 0 0 0 1 S",
            "2010 2012 3 8 0 0 0 0",
            "2013 9999 2 22 0 0 0 0"
        ],
        "Canada": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1974 1986 3 0 8 2 0 1 D",
            "1974 2006 9 0 8 2 0 0 S",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Mexico": [
            "1939 1939 1 5 7 0 0 1 D",
            "1939 1939 5 25 7 0 0 0 S",
            "1940 1940 11 9 7 0 0 1 D",
            "1941 1941 3 1 7 0 0 0 S",
            "1943 1943 11 16 7 0 0 1 W",
            "1944 1944 4 1 7 0 0 0 S",
            "1950 1950 1 12 7 0 0 1 D",
            "1950 1950 6 30 7 0 0 0 S",
            "1996 2000 3 1 0 2 0 1 D",
            "1996 2000 9 0 8 2 0 0 S",
            "2001 2001 4 1 0 2 0 1 D",
            "2001 2001 8 0 8 2 0 0 S",
            "2002 9999 3 1 0 2 0 1 D",
            "2002 9999 9 0 8 2 0 0 S"
        ],
        "Barb": [
            "1977 1977 5 12 7 2 0 1 D",
            "1977 1978 9 1 0 2 0 0 S",
            "1978 1980 3 15 0 2 0 1 D",
            "1979 1979 8 30 7 2 0 0 S",
            "1980 1980 8 25 7 2 0 0 S"
        ],
        "Belize": [
            "1918 1942 9 2 0 0 0 0:30 HD",
            "1919 1943 1 9 0 0 0 0 S",
            "1973 1973 11 5 7 0 0 1 D",
            "1974 1974 1 9 7 0 0 0 S",
            "1982 1982 11 18 7 0 0 1 D",
            "1983 1983 1 12 7 0 0 0 S"
        ],
        "CO": [
            "1992 1992 4 3 7 0 0 1 S",
            "1993 1993 3 4 7 0 0 0"
        ],
        "NT_YK": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1919 1919 4 25 7 2 0 1 D",
            "1919 1919 10 1 7 0 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1965 1965 3 0 8 0 0 2 DD",
            "1965 1965 9 0 8 2 0 0 S",
            "1980 1986 3 0 8 2 0 1 D",
            "1980 2006 9 0 8 2 0 0 S",
            "1987 2006 3 1 0 2 0 1 D"
        ],
        "Chicago": [
            "1920 1920 5 13 7 2 0 1 D",
            "1920 1921 9 0 8 2 0 0 S",
            "1921 1921 2 0 8 2 0 1 D",
            "1922 1966 3 0 8 2 0 1 D",
            "1922 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ],
        "CR": [
            "1979 1980 1 0 8 0 0 1 D",
            "1979 1980 5 1 0 0 0 0 S",
            "1991 1992 0 15 6 0 0 1 D",
            "1991 1991 6 1 7 0 0 0 S",
            "1992 1992 2 15 7 0 0 0 S"
        ],
        "Vanc": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1946 1986 3 0 8 2 0 1 D",
            "1946 1946 9 13 7 2 0 0 S",
            "1947 1961 8 0 8 2 0 0 S",
            "1962 2006 9 0 8 2 0 0 S"
        ],
        "Denver": [
            "1920 1921 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1921 4 22 7 2 0 0 S",
            "1965 1966 3 0 8 2 0 1 D",
            "1965 1966 9 0 8 2 0 0 S"
        ],
        "Detroit": [
            "1948 1948 3 0 8 2 0 1 D",
            "1948 1948 8 0 8 2 0 0 S",
            "1967 1967 5 14 7 2 0 1 D",
            "1967 1967 9 0 8 2 0 0 S"
        ],
        "Edm": [
            "1918 1919 3 8 0 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1919 1919 4 27 7 2 0 0 S",
            "1920 1923 3 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1923 8 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 0 8 2 0 0 S",
            "1947 1947 3 0 8 2 0 1 D",
            "1947 1947 8 0 8 2 0 0 S",
            "1967 1967 3 0 8 2 0 1 D",
            "1967 1967 9 0 8 2 0 0 S",
            "1969 1969 3 0 8 2 0 1 D",
            "1969 1969 9 0 8 2 0 0 S",
            "1972 1986 3 0 8 2 0 1 D",
            "1972 2006 9 0 8 2 0 0 S"
        ],
        "Salv": [
            "1987 1988 4 1 0 0 0 1 D",
            "1987 1988 8 0 8 0 0 0 S"
        ],
        "Halifax": [
            "1916 1916 3 1 7 0 0 1 D",
            "1916 1916 9 1 7 0 0 0 S",
            "1920 1920 4 9 7 0 0 1 D",
            "1920 1920 7 29 7 0 0 0 S",
            "1921 1921 4 6 7 0 0 1 D",
            "1921 1922 8 5 7 0 0 0 S",
            "1922 1922 3 30 7 0 0 1 D",
            "1923 1925 4 1 0 0 0 1 D",
            "1923 1923 8 4 7 0 0 0 S",
            "1924 1924 8 15 7 0 0 0 S",
            "1925 1925 8 28 7 0 0 0 S",
            "1926 1926 4 16 7 0 0 1 D",
            "1926 1926 8 13 7 0 0 0 S",
            "1927 1927 4 1 7 0 0 1 D",
            "1927 1927 8 26 7 0 0 0 S",
            "1928 1931 4 8 0 0 0 1 D",
            "1928 1928 8 9 7 0 0 0 S",
            "1929 1929 8 3 7 0 0 0 S",
            "1930 1930 8 15 7 0 0 0 S",
            "1931 1932 8 24 1 0 0 0 S",
            "1932 1932 4 1 7 0 0 1 D",
            "1933 1933 3 30 7 0 0 1 D",
            "1933 1933 9 2 7 0 0 0 S",
            "1934 1934 4 20 7 0 0 1 D",
            "1934 1934 8 16 7 0 0 0 S",
            "1935 1935 5 2 7 0 0 1 D",
            "1935 1935 8 30 7 0 0 0 S",
            "1936 1936 5 1 7 0 0 1 D",
            "1936 1936 8 14 7 0 0 0 S",
            "1937 1938 4 1 0 0 0 1 D",
            "1937 1941 8 24 1 0 0 0 S",
            "1939 1939 4 28 7 0 0 1 D",
            "1940 1941 4 1 0 0 0 1 D",
            "1946 1949 3 0 8 2 0 1 D",
            "1946 1949 8 0 8 2 0 0 S",
            "1951 1954 3 0 8 2 0 1 D",
            "1951 1954 8 0 8 2 0 0 S",
            "1956 1959 3 0 8 2 0 1 D",
            "1956 1959 8 0 8 2 0 0 S",
            "1962 1973 3 0 8 2 0 1 D",
            "1962 1973 9 0 8 2 0 0 S"
        ],
        "StJohns": [
            "1917 1917 3 8 7 2 0 1 D",
            "1917 1917 8 17 7 2 0 0 S",
            "1919 1919 4 5 7 23 0 1 D",
            "1919 1919 7 12 7 23 0 0 S",
            "1920 1935 4 1 0 23 0 1 D",
            "1920 1935 9 0 8 23 0 0 S",
            "1936 1941 4 9 1 0 0 1 D",
            "1936 1941 9 2 1 0 0 0 S",
            "1946 1950 4 8 0 2 0 1 D",
            "1946 1950 9 2 0 2 0 0 S",
            "1951 1986 3 0 8 2 0 1 D",
            "1951 1959 8 0 8 2 0 0 S",
            "1960 1986 9 0 8 2 0 0 S",
            "1987 1987 3 1 0 0:1 0 1 D",
            "1987 2006 9 0 8 0:1 0 0 S",
            "1988 1988 3 1 0 0:1 0 2 DD",
            "1989 2006 3 1 0 0:1 0 1 D",
            "2007 2011 2 8 0 0:1 0 1 D",
            "2007 2010 10 1 0 0:1 0 0 S"
        ],
        "TC": [
            "1979 1986 3 0 8 2 0 1 D",
            "1979 2006 9 0 8 2 0 0 S",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Guat": [
            "1973 1973 10 25 7 0 0 1 D",
            "1974 1974 1 24 7 0 0 0 S",
            "1983 1983 4 21 7 0 0 1 D",
            "1983 1983 8 22 7 0 0 0 S",
            "1991 1991 2 23 7 0 0 1 D",
            "1991 1991 8 7 7 0 0 0 S",
            "2006 2006 3 30 7 0 0 1 D",
            "2006 2006 9 1 7 0 0 0 S"
        ],
        "Cuba": [
            "1928 1928 5 10 7 0 0 1 D",
            "1928 1928 9 10 7 0 0 0 S",
            "1940 1942 5 1 0 0 0 1 D",
            "1940 1942 8 1 0 0 0 0 S",
            "1945 1946 5 1 0 0 0 1 D",
            "1945 1946 8 1 0 0 0 0 S",
            "1965 1965 5 1 7 0 0 1 D",
            "1965 1965 8 30 7 0 0 0 S",
            "1966 1966 4 29 7 0 0 1 D",
            "1966 1966 9 2 7 0 0 0 S",
            "1967 1967 3 8 7 0 0 1 D",
            "1967 1968 8 8 0 0 0 0 S",
            "1968 1968 3 14 7 0 0 1 D",
            "1969 1977 3 0 8 0 0 1 D",
            "1969 1971 9 0 8 0 0 0 S",
            "1972 1974 9 8 7 0 0 0 S",
            "1975 1977 9 0 8 0 0 0 S",
            "1978 1978 4 7 7 0 0 1 D",
            "1978 1990 9 8 0 0 0 0 S",
            "1979 1980 2 15 0 0 0 1 D",
            "1981 1985 4 5 0 0 0 1 D",
            "1986 1989 2 14 0 0 0 1 D",
            "1990 1997 3 1 0 0 0 1 D",
            "1991 1995 9 8 0 0 2 0 S",
            "1996 1996 9 6 7 0 2 0 S",
            "1997 1997 9 12 7 0 2 0 S",
            "1998 1999 2 0 8 0 2 1 D",
            "1998 2003 9 0 8 0 2 0 S",
            "2000 2004 3 1 0 0 2 1 D",
            "2006 2010 9 0 8 0 2 0 S",
            "2007 2007 2 8 0 0 2 1 D",
            "2008 2008 2 15 0 0 2 1 D",
            "2009 2010 2 8 0 0 2 1 D",
            "2011 2011 2 15 0 0 2 1 D",
            "2011 2011 10 13 7 0 2 0 S",
            "2012 2012 3 1 7 0 2 1 D",
            "2012 9999 10 1 0 0 2 0 S",
            "2013 9999 2 8 0 0 2 1 D"
        ],
        "Indianapolis": [
            "1941 1941 5 22 7 2 0 1 D",
            "1941 1954 8 0 8 2 0 0 S",
            "1946 1954 3 0 8 2 0 1 D"
        ],
        "Starke": [
            "1947 1961 3 0 8 2 0 1 D",
            "1947 1954 8 0 8 2 0 0 S",
            "1955 1956 9 0 8 2 0 0 S",
            "1957 1958 8 0 8 2 0 0 S",
            "1959 1961 9 0 8 2 0 0 S"
        ],
        "Marengo": [
            "1951 1951 3 0 8 2 0 1 D",
            "1951 1951 8 0 8 2 0 0 S",
            "1954 1960 3 0 8 2 0 1 D",
            "1954 1960 8 0 8 2 0 0 S"
        ],
        "Pike": [
            "1955 1955 4 1 7 0 0 1 D",
            "1955 1960 8 0 8 2 0 0 S",
            "1956 1964 3 0 8 2 0 1 D",
            "1961 1964 9 0 8 2 0 0 S"
        ],
        "Perry": [
            "1946 1946 3 0 8 2 0 1 D",
            "1946 1946 8 0 8 2 0 0 S",
            "1953 1954 3 0 8 2 0 1 D",
            "1953 1959 8 0 8 2 0 0 S",
            "1955 1955 4 1 7 0 0 1 D",
            "1956 1963 3 0 8 2 0 1 D",
            "1960 1960 9 0 8 2 0 0 S",
            "1961 1961 8 0 8 2 0 0 S",
            "1962 1963 9 0 8 2 0 0 S"
        ],
        "Vincennes": [
            "1946 1946 3 0 8 2 0 1 D",
            "1946 1946 8 0 8 2 0 0 S",
            "1953 1954 3 0 8 2 0 1 D",
            "1953 1959 8 0 8 2 0 0 S",
            "1955 1955 4 1 7 0 0 1 D",
            "1956 1963 3 0 8 2 0 1 D",
            "1960 1960 9 0 8 2 0 0 S",
            "1961 1961 8 0 8 2 0 0 S",
            "1962 1963 9 0 8 2 0 0 S"
        ],
        "Pulaski": [
            "1946 1960 3 0 8 2 0 1 D",
            "1946 1954 8 0 8 2 0 0 S",
            "1955 1956 9 0 8 2 0 0 S",
            "1957 1960 8 0 8 2 0 0 S"
        ],
        "Louisville": [
            "1921 1921 4 1 7 2 0 1 D",
            "1921 1921 8 1 7 2 0 0 S",
            "1941 1961 3 0 8 2 0 1 D",
            "1941 1941 8 0 8 2 0 0 S",
            "1946 1946 5 2 7 2 0 0 S",
            "1950 1955 8 0 8 2 0 0 S",
            "1956 1960 9 0 8 2 0 0 S"
        ],
        "Peru": [
            "1938 1938 0 1 7 0 0 1 S",
            "1938 1938 3 1 7 0 0 0",
            "1938 1939 8 0 8 0 0 1 S",
            "1939 1940 2 24 0 0 0 0",
            "1986 1987 0 1 7 0 0 1 S",
            "1986 1987 3 1 7 0 0 0",
            "1990 1990 0 1 7 0 0 1 S",
            "1990 1990 3 1 7 0 0 0",
            "1994 1994 0 1 7 0 0 1 S",
            "1994 1994 3 1 7 0 0 0"
        ],
        "CA": [
            "1948 1948 2 14 7 2 0 1 D",
            "1949 1949 0 1 7 2 0 0 S",
            "1950 1966 3 0 8 2 0 1 D",
            "1950 1961 8 0 8 2 0 0 S",
            "1962 1966 9 0 8 2 0 0 S"
        ],
        "Nic": [
            "1979 1980 2 16 0 0 0 1 D",
            "1979 1980 5 23 1 0 0 0 S",
            "2005 2005 3 10 7 0 0 1 D",
            "2005 2005 9 1 0 0 0 0 S",
            "2006 2006 3 30 7 2 0 1 D",
            "2006 2006 9 1 0 1 0 0 S"
        ],
        "Menominee": [
            "1946 1946 3 0 8 2 0 1 D",
            "1946 1946 8 0 8 2 0 0 S",
            "1966 1966 3 0 8 2 0 1 D",
            "1966 1966 9 0 8 2 0 0 S"
        ],
        "Moncton": [
            "1933 1935 5 8 0 1 0 1 D",
            "1933 1935 8 8 0 1 0 0 S",
            "1936 1938 5 1 0 1 0 1 D",
            "1936 1938 8 1 0 1 0 0 S",
            "1939 1939 4 27 7 1 0 1 D",
            "1939 1941 8 21 6 1 0 0 S",
            "1940 1940 4 19 7 1 0 1 D",
            "1941 1941 4 4 7 1 0 1 D",
            "1946 1972 3 0 8 2 0 1 D",
            "1946 1956 8 0 8 2 0 0 S",
            "1957 1972 9 0 8 2 0 0 S",
            "1993 2006 3 1 0 0:1 0 1 D",
            "1993 2006 9 0 8 0:1 0 0 S"
        ],
        "Uruguay": [
            "1923 1923 9 2 7 0 0 0:30 HS",
            "1924 1926 3 1 7 0 0 0",
            "1924 1925 9 1 7 0 0 0:30 HS",
            "1933 1935 9 0 8 0 0 0:30 HS",
            "1934 1936 2 25 6 23:30 2 0",
            "1936 1936 10 1 7 0 0 0:30 HS",
            "1937 1941 2 0 8 0 0 0",
            "1937 1940 9 0 8 0 0 0:30 HS",
            "1941 1941 7 1 7 0 0 0:30 HS",
            "1942 1942 0 1 7 0 0 0",
            "1942 1942 11 14 7 0 0 1 S",
            "1943 1943 2 14 7 0 0 0",
            "1959 1959 4 24 7 0 0 1 S",
            "1959 1959 10 15 7 0 0 0",
            "1960 1960 0 17 7 0 0 1 S",
            "1960 1960 2 6 7 0 0 0",
            "1965 1967 3 1 0 0 0 1 S",
            "1965 1965 8 26 7 0 0 0",
            "1966 1967 9 31 7 0 0 0",
            "1968 1970 4 27 7 0 0 0:30 HS",
            "1968 1970 11 2 7 0 0 0",
            "1972 1972 3 24 7 0 0 1 S",
            "1972 1972 7 15 7 0 0 0",
            "1974 1974 2 10 7 0 0 0:30 HS",
            "1974 1974 11 22 7 0 0 1 S",
            "1976 1976 9 1 7 0 0 0",
            "1977 1977 11 4 7 0 0 1 S",
            "1978 1978 3 1 7 0 0 0",
            "1979 1979 9 1 7 0 0 1 S",
            "1980 1980 4 1 7 0 0 0",
            "1987 1987 11 14 7 0 0 1 S",
            "1988 1988 2 14 7 0 0 0",
            "1988 1988 11 11 7 0 0 1 S",
            "1989 1989 2 12 7 0 0 0",
            "1989 1989 9 29 7 0 0 1 S",
            "1990 1992 2 1 0 0 0 0",
            "1990 1991 9 21 0 0 0 1 S",
            "1992 1992 9 18 7 0 0 1 S",
            "1993 1993 1 28 7 0 0 0",
            "2004 2004 8 19 7 0 0 1 S",
            "2005 2005 2 27 7 2 0 0",
            "2005 2005 9 9 7 2 0 1 S",
            "2006 2006 2 12 7 2 0 0",
            "2006 9999 9 1 0 2 0 1 S",
            "2007 9999 2 8 0 2 0 0"
        ],
        "Mont": [
            "1917 1917 2 25 7 2 0 1 D",
            "1917 1917 3 24 7 0 0 0 S",
            "1919 1919 2 31 7 2:30 0 1 D",
            "1919 1919 9 25 7 2:30 0 0 S",
            "1920 1920 4 2 7 2:30 0 1 D",
            "1920 1922 9 1 0 2:30 0 0 S",
            "1921 1921 4 1 7 2 0 1 D",
            "1922 1922 3 30 7 2 0 1 D",
            "1924 1924 4 17 7 2 0 1 D",
            "1924 1926 8 0 8 2:30 0 0 S",
            "1925 1926 4 1 0 2 0 1 D",
            "1927 1927 4 1 7 0 0 1 D",
            "1927 1932 8 0 8 0 0 0 S",
            "1928 1931 3 0 8 0 0 1 D",
            "1932 1932 4 1 7 0 0 1 D",
            "1933 1940 3 0 8 0 0 1 D",
            "1933 1933 9 1 7 0 0 0 S",
            "1934 1939 8 0 8 0 0 0 S",
            "1946 1973 3 0 8 2 0 1 D",
            "1945 1948 8 0 8 2 0 0 S",
            "1949 1950 9 0 8 2 0 0 S",
            "1951 1956 8 0 8 2 0 0 S",
            "1957 1973 9 0 8 2 0 0 S"
        ],
        "Bahamas": [
            "1964 1975 9 0 8 2 0 0 S",
            "1964 1975 3 0 8 2 0 1 D"
        ],
        "NYC": [
            "1920 1920 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1966 3 0 8 2 0 1 D",
            "1921 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ],
        "Haiti": [
            "1983 1983 4 8 7 0 0 1 D",
            "1984 1987 3 0 8 0 0 1 D",
            "1983 1987 9 0 8 0 0 0 S",
            "1988 1997 3 1 0 1 2 1 D",
            "1988 1997 9 0 8 1 2 0 S",
            "2005 2006 3 1 0 0 0 1 D",
            "2005 2006 9 0 8 0 0 0 S",
            "2012 9999 2 8 0 2 0 1 D",
            "2012 9999 10 1 0 2 0 0 S"
        ],
        "Regina": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1930 1934 4 1 0 0 0 1 D",
            "1930 1934 9 1 0 0 0 0 S",
            "1937 1941 3 8 0 0 0 1 D",
            "1937 1937 9 8 0 0 0 0 S",
            "1938 1938 9 1 0 0 0 0 S",
            "1939 1941 9 8 0 0 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 0 8 2 0 0 S",
            "1946 1946 3 8 0 2 0 1 D",
            "1946 1946 9 8 0 2 0 0 S",
            "1947 1957 3 0 8 2 0 1 D",
            "1947 1957 8 0 8 2 0 0 S",
            "1959 1959 3 0 8 2 0 1 D",
            "1959 1959 9 0 8 2 0 0 S"
        ],
        "Chile": [
            "1927 1932 8 1 7 0 0 1 S",
            "1928 1932 3 1 7 0 0 0",
            "1942 1942 5 1 7 4 1 0",
            "1942 1942 7 1 7 5 1 1 S",
            "1946 1946 6 15 7 4 1 1 S",
            "1946 1946 8 1 7 3 1 0",
            "1947 1947 3 1 7 4 1 0",
            "1968 1968 10 3 7 4 1 1 S",
            "1969 1969 2 30 7 3 1 0",
            "1969 1969 10 23 7 4 1 1 S",
            "1970 1970 2 29 7 3 1 0",
            "1971 1971 2 14 7 3 1 0",
            "1970 1972 9 9 0 4 1 1 S",
            "1972 1986 2 9 0 3 1 0",
            "1973 1973 8 30 7 4 1 1 S",
            "1974 1987 9 9 0 4 1 1 S",
            "1987 1987 3 12 7 3 1 0",
            "1988 1989 2 9 0 3 1 0",
            "1988 1988 9 1 0 4 1 1 S",
            "1989 1989 9 9 0 4 1 1 S",
            "1990 1990 2 18 7 3 1 0",
            "1990 1990 8 16 7 4 1 1 S",
            "1991 1996 2 9 0 3 1 0",
            "1991 1997 9 9 0 4 1 1 S",
            "1997 1997 2 30 7 3 1 0",
            "1998 1998 2 9 0 3 1 0",
            "1998 1998 8 27 7 4 1 1 S",
            "1999 1999 3 4 7 3 1 0",
            "1999 2010 9 9 0 4 1 1 S",
            "2000 2007 2 9 0 3 1 0",
            "2008 2008 2 30 7 3 1 0",
            "2009 2009 2 9 0 3 1 0",
            "2010 2010 3 1 0 3 1 0",
            "2011 2011 4 2 0 3 1 0",
            "2011 2011 7 16 0 4 1 1 S",
            "2012 9999 3 23 0 3 1 0",
            "2012 9999 8 2 0 4 1 1 S"
        ],
        "DR": [
            "1966 1966 9 30 7 0 0 1 D",
            "1967 1967 1 28 7 0 0 0 S",
            "1969 1973 9 0 8 0 0 0:30 HD",
            "1970 1970 1 21 7 0 0 0 S",
            "1971 1971 0 20 7 0 0 0 S",
            "1972 1974 0 21 7 0 0 0 S"
        ],
        "C-Eur": [
            "1916 1916 3 30 7 23 0 1 S",
            "1916 1916 9 1 7 1 0 0",
            "1917 1918 3 15 1 2 2 1 S",
            "1917 1918 8 15 1 2 2 0",
            "1940 1940 3 1 7 2 2 1 S",
            "1942 1942 10 2 7 2 2 0",
            "1943 1943 2 29 7 2 2 1 S",
            "1943 1943 9 4 7 2 2 0",
            "1944 1945 3 1 1 2 2 1 S",
            "1944 1944 9 2 7 2 2 0",
            "1945 1945 8 16 7 2 2 0",
            "1977 1980 3 1 0 2 2 1 S",
            "1977 1977 8 0 8 2 2 0",
            "1978 1978 9 1 7 2 2 0",
            "1979 1995 8 0 8 2 2 0",
            "1981 9999 2 0 8 2 2 1 S",
            "1996 9999 9 0 8 2 2 0"
        ],
        "Swift": [
            "1957 1957 3 0 8 2 0 1 D",
            "1957 1957 9 0 8 2 0 0 S",
            "1959 1961 3 0 8 2 0 1 D",
            "1959 1959 9 0 8 2 0 0 S",
            "1960 1961 8 0 8 2 0 0 S"
        ],
        "Hond": [
            "1987 1988 4 1 0 0 0 1 D",
            "1987 1988 8 0 8 0 0 0 S",
            "2006 2006 4 1 0 0 0 1 D",
            "2006 2006 7 1 1 0 0 0 S"
        ],
        "Thule": [
            "1991 1992 2 0 8 2 0 1 D",
            "1991 1992 8 0 8 2 0 0 S",
            "1993 2006 3 1 0 2 0 1 D",
            "1993 2006 9 0 8 2 0 0 S",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Toronto": [
            "1919 1919 2 30 7 23:30 0 1 D",
            "1919 1919 9 26 7 0 0 0 S",
            "1920 1920 4 2 7 2 0 1 D",
            "1920 1920 8 26 7 0 0 0 S",
            "1921 1921 4 15 7 2 0 1 D",
            "1921 1921 8 15 7 2 0 0 S",
            "1922 1923 4 8 0 2 0 1 D",
            "1922 1926 8 15 0 2 0 0 S",
            "1924 1927 4 1 0 2 0 1 D",
            "1927 1932 8 0 8 2 0 0 S",
            "1928 1931 3 0 8 2 0 1 D",
            "1932 1932 4 1 7 2 0 1 D",
            "1933 1940 3 0 8 2 0 1 D",
            "1933 1933 9 1 7 2 0 0 S",
            "1934 1939 8 0 8 2 0 0 S",
            "1945 1946 8 0 8 2 0 0 S",
            "1946 1946 3 0 8 2 0 1 D",
            "1947 1949 3 0 8 0 0 1 D",
            "1947 1948 8 0 8 0 0 0 S",
            "1949 1949 10 0 8 0 0 0 S",
            "1950 1973 3 0 8 2 0 1 D",
            "1950 1950 10 0 8 2 0 0 S",
            "1951 1956 8 0 8 2 0 0 S",
            "1957 1973 9 0 8 2 0 0 S"
        ],
        "Winn": [
            "1916 1916 3 23 7 0 0 1 D",
            "1916 1916 8 17 7 0 0 0 S",
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1937 1937 4 16 7 2 0 1 D",
            "1937 1937 8 26 7 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 0 8 2 0 0 S",
            "1946 1946 4 12 7 2 0 1 D",
            "1946 1946 9 13 7 2 0 0 S",
            "1947 1949 3 0 8 2 0 1 D",
            "1947 1949 8 0 8 2 0 0 S",
            "1950 1950 4 1 7 2 0 1 D",
            "1950 1950 8 30 7 2 0 0 S",
            "1951 1960 3 0 8 2 0 1 D",
            "1951 1958 8 0 8 2 0 0 S",
            "1959 1959 9 0 8 2 0 0 S",
            "1960 1960 8 0 8 2 0 0 S",
            "1963 1963 3 0 8 2 0 1 D",
            "1963 1963 8 22 7 2 0 0 S",
            "1966 1986 3 0 8 2 2 1 D",
            "1966 2005 9 0 8 2 2 0 S",
            "1987 2005 3 1 0 2 2 1 D"
        ],
        "Aus": [
            "1917 1917 0 1 7 0:1 0 1",
            "1917 1917 2 25 7 2 0 0",
            "1942 1942 0 1 7 2 0 1",
            "1942 1942 2 29 7 2 0 0",
            "1942 1942 8 27 7 2 0 1",
            "1943 1944 2 0 8 2 0 0",
            "1943 1943 9 3 7 2 0 1"
        ],
        "AT": [
            "1967 1967 9 1 0 2 2 1",
            "1968 1968 2 0 8 2 2 0",
            "1968 1985 9 0 8 2 2 1",
            "1969 1971 2 8 0 2 2 0",
            "1972 1972 1 0 8 2 2 0",
            "1973 1981 2 1 0 2 2 0",
            "1982 1983 2 0 8 2 2 0",
            "1984 1986 2 1 0 2 2 0",
            "1986 1986 9 15 0 2 2 1",
            "1987 1990 2 15 0 2 2 0",
            "1987 1987 9 22 0 2 2 1",
            "1988 1990 9 0 8 2 2 1",
            "1991 1999 9 1 0 2 2 1",
            "1991 2005 2 0 8 2 2 0",
            "2000 2000 7 0 8 2 2 1",
            "2001 9999 9 1 0 2 2 1",
            "2006 2006 3 1 0 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0"
        ],
        "NZAQ": [
            "1974 1974 10 3 7 2 2 1 D",
            "1975 1988 9 0 8 2 2 1 D",
            "1989 1989 9 8 7 2 2 1 D",
            "1990 2006 9 1 0 2 2 1 D",
            "1975 1975 1 23 7 2 2 0 S",
            "1976 1989 2 1 0 2 2 0 S",
            "1990 2007 2 15 0 2 2 0 S",
            "2007 9999 8 0 8 2 2 1 D",
            "2008 9999 3 1 0 2 2 0 S"
        ],
        "ArgAQ": [
            "1964 1966 2 1 7 0 0 0",
            "1964 1966 9 15 7 0 0 1 S",
            "1967 1967 3 2 7 0 0 0",
            "1967 1968 9 1 0 0 0 1 S",
            "1968 1969 3 1 0 0 0 0",
            "1974 1974 0 23 7 0 0 1 S",
            "1974 1974 4 1 7 0 0 0"
        ],
        "ChileAQ": [
            "1972 1986 2 9 0 3 1 0",
            "1974 1987 9 9 0 4 1 1 S",
            "1987 1987 3 12 7 3 1 0",
            "1988 1989 2 9 0 3 1 0",
            "1988 1988 9 1 0 4 1 1 S",
            "1989 1989 9 9 0 4 1 1 S",
            "1990 1990 2 18 7 3 1 0",
            "1990 1990 8 16 7 4 1 1 S",
            "1991 1996 2 9 0 3 1 0",
            "1991 1997 9 9 0 4 1 1 S",
            "1997 1997 2 30 7 3 1 0",
            "1998 1998 2 9 0 3 1 0",
            "1998 1998 8 27 7 4 1 1 S",
            "1999 1999 3 4 7 3 1 0",
            "1999 2010 9 9 0 4 1 1 S",
            "2000 2007 2 9 0 3 1 0",
            "2008 2008 2 30 7 3 1 0",
            "2009 2009 2 9 0 3 1 0",
            "2010 2010 3 1 0 3 1 0",
            "2011 2011 4 2 0 3 1 0",
            "2011 2011 7 16 0 4 1 1 S",
            "2012 9999 3 23 0 3 1 0",
            "2012 9999 8 2 0 4 1 1 S"
        ],
        "Norway": [
            "1916 1916 4 22 7 1 0 1 S",
            "1916 1916 8 30 7 0 0 0",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 9 1 7 2 2 0",
            "1959 1964 2 15 0 2 2 1 S",
            "1959 1965 8 15 0 2 2 0",
            "1965 1965 3 25 7 2 2 1 S"
        ],
        "RussiaAsia": [
            "1981 1984 3 1 7 0 0 1 S",
            "1981 1983 9 1 7 0 0 0",
            "1984 1991 8 0 8 2 2 0",
            "1985 1991 2 0 8 2 2 1 S",
            "1992 1992 2 6 8 23 0 1 S",
            "1992 1992 8 6 8 23 0 0",
            "1993 9999 2 0 8 2 2 1 S",
            "1993 1995 8 0 8 2 2 0",
            "1996 9999 9 0 8 2 2 0"
        ],
        "Jordan": [
            "1973 1973 5 6 7 0 0 1 S",
            "1973 1975 9 1 7 0 0 0",
            "1974 1977 4 1 7 0 0 1 S",
            "1976 1976 10 1 7 0 0 0",
            "1977 1977 9 1 7 0 0 0",
            "1978 1978 3 30 7 0 0 1 S",
            "1978 1978 8 30 7 0 0 0",
            "1985 1985 3 1 7 0 0 1 S",
            "1985 1985 9 1 7 0 0 0",
            "1986 1988 3 1 5 0 0 1 S",
            "1986 1990 9 1 5 0 0 0",
            "1989 1989 4 8 7 0 0 1 S",
            "1990 1990 3 27 7 0 0 1 S",
            "1991 1991 3 17 7 0 0 1 S",
            "1991 1991 8 27 7 0 0 0",
            "1992 1992 3 10 7 0 0 1 S",
            "1992 1993 9 1 5 0 0 0",
            "1993 1998 3 1 5 0 0 1 S",
            "1994 1994 8 15 5 0 0 0",
            "1995 1998 8 15 5 0 2 0",
            "1999 1999 6 1 7 0 2 1 S",
            "1999 2002 8 5 8 0 2 0",
            "2000 2001 2 4 8 0 2 1 S",
            "2002 9999 2 4 8 24 0 1 S",
            "2003 2003 9 24 7 0 2 0",
            "2004 2004 9 15 7 0 2 0",
            "2005 2005 8 5 8 0 2 0",
            "2006 2011 9 5 8 0 2 0",
            "2013 9999 9 5 8 0 2 0"
        ],
        "Russia": [
            "1917 1917 6 1 7 23 0 1 MST",
            "1917 1917 11 28 7 0 0 0 MMT",
            "1918 1918 4 31 7 22 0 2 MDST",
            "1918 1918 8 16 7 1 0 1 MST",
            "1919 1919 4 31 7 23 0 2 MDST",
            "1919 1919 6 1 7 2 0 1 S",
            "1919 1919 7 16 7 0 0 0",
            "1921 1921 1 14 7 23 0 1 S",
            "1921 1921 2 20 7 23 0 2 M",
            "1921 1921 8 1 7 0 0 1 S",
            "1921 1921 9 1 7 0 0 0",
            "1981 1984 3 1 7 0 0 1 S",
            "1981 1983 9 1 7 0 0 0",
            "1984 1991 8 0 8 2 2 0",
            "1985 1991 2 0 8 2 2 1 S",
            "1992 1992 2 6 8 23 0 1 S",
            "1992 1992 8 6 8 23 0 0",
            "1993 2010 2 0 8 2 2 1 S",
            "1993 1995 8 0 8 2 2 0",
            "1996 2010 9 0 8 2 2 0"
        ],
        "Iraq": [
            "1982 1982 4 1 7 0 0 1 D",
            "1982 1984 9 1 7 0 0 0 S",
            "1983 1983 2 31 7 0 0 1 D",
            "1984 1985 3 1 7 0 0 1 D",
            "1985 1990 8 0 8 1 2 0 S",
            "1986 1990 2 0 8 1 2 1 D",
            "1991 2007 3 1 7 3 2 1 D",
            "1991 2007 9 1 7 3 2 0 S"
        ],
        "EUAsia": [
            "1981 9999 2 0 8 1 1 1 S",
            "1979 1995 8 0 8 1 1 0",
            "1996 9999 9 0 8 1 1 0"
        ],
        "Azer": [
            "1997 9999 2 0 8 4 0 1 S",
            "1997 9999 9 0 8 5 0 0"
        ],
        "Lebanon": [
            "1920 1920 2 28 7 0 0 1 S",
            "1920 1920 9 25 7 0 0 0",
            "1921 1921 3 3 7 0 0 1 S",
            "1921 1921 9 3 7 0 0 0",
            "1922 1922 2 26 7 0 0 1 S",
            "1922 1922 9 8 7 0 0 0",
            "1923 1923 3 22 7 0 0 1 S",
            "1923 1923 8 16 7 0 0 0",
            "1957 1961 4 1 7 0 0 1 S",
            "1957 1961 9 1 7 0 0 0",
            "1972 1972 5 22 7 0 0 1 S",
            "1972 1977 9 1 7 0 0 0",
            "1973 1977 4 1 7 0 0 1 S",
            "1978 1978 3 30 7 0 0 1 S",
            "1978 1978 8 30 7 0 0 0",
            "1984 1987 4 1 7 0 0 1 S",
            "1984 1991 9 16 7 0 0 0",
            "1988 1988 5 1 7 0 0 1 S",
            "1989 1989 4 10 7 0 0 1 S",
            "1990 1992 4 1 7 0 0 1 S",
            "1992 1992 9 4 7 0 0 0",
            "1993 9999 2 0 8 0 0 1 S",
            "1993 1998 8 0 8 0 0 0",
            "1999 9999 9 0 8 0 0 0"
        ],
        "Kyrgyz": [
            "1992 1996 3 7 0 0 2 1 S",
            "1992 1996 8 0 8 0 0 0",
            "1997 2005 2 0 8 2:30 0 1 S",
            "1997 2004 9 0 8 2:30 0 0"
        ],
        "Mongol": [
            "1983 1984 3 1 7 0 0 1 S",
            "1983 1983 9 1 7 0 0 0",
            "1985 1998 2 0 8 0 0 1 S",
            "1984 1998 8 0 8 0 0 0",
            "2001 2001 3 6 8 2 0 1 S",
            "2001 2006 8 6 8 2 0 0",
            "2002 2006 2 6 8 2 0 1 S"
        ],
        "PRC": [
            "1986 1986 4 4 7 0 0 1 D",
            "1986 1991 8 11 0 0 0 0 S",
            "1987 1991 3 10 0 0 0 1 D"
        ],
        "Syria": [
            "1920 1923 3 15 0 2 0 1 S",
            "1920 1923 9 1 0 2 0 0",
            "1962 1962 3 29 7 2 0 1 S",
            "1962 1962 9 1 7 2 0 0",
            "1963 1965 4 1 7 2 0 1 S",
            "1963 1963 8 30 7 2 0 0",
            "1964 1964 9 1 7 2 0 0",
            "1965 1965 8 30 7 2 0 0",
            "1966 1966 3 24 7 2 0 1 S",
            "1966 1976 9 1 7 2 0 0",
            "1967 1978 4 1 7 2 0 1 S",
            "1977 1978 8 1 7 2 0 0",
            "1983 1984 3 9 7 2 0 1 S",
            "1983 1984 9 1 7 2 0 0",
            "1986 1986 1 16 7 2 0 1 S",
            "1986 1986 9 9 7 2 0 0",
            "1987 1987 2 1 7 2 0 1 S",
            "1987 1988 9 31 7 2 0 0",
            "1988 1988 2 15 7 2 0 1 S",
            "1989 1989 2 31 7 2 0 1 S",
            "1989 1989 9 1 7 2 0 0",
            "1990 1990 3 1 7 2 0 1 S",
            "1990 1990 8 30 7 2 0 0",
            "1991 1991 3 1 7 0 0 1 S",
            "1991 1992 9 1 7 0 0 0",
            "1992 1992 3 8 7 0 0 1 S",
            "1993 1993 2 26 7 0 0 1 S",
            "1993 1993 8 25 7 0 0 0",
            "1994 1996 3 1 7 0 0 1 S",
            "1994 2005 9 1 7 0 0 0",
            "1997 1998 2 1 8 0 0 1 S",
            "1999 2006 3 1 7 0 0 1 S",
            "2006 2006 8 22 7 0 0 0",
            "2007 2007 2 5 8 0 0 1 S",
            "2007 2007 10 1 5 0 0 0",
            "2008 2008 3 1 5 0 0 1 S",
            "2008 2008 10 1 7 0 0 0",
            "2009 2009 2 5 8 0 0 1 S",
            "2010 2011 3 1 5 0 0 1 S",
            "2012 9999 2 5 8 0 0 1 S",
            "2009 9999 9 5 8 0 0 0"
        ],
        "Dhaka": [
            "2009 2009 5 19 7 23 0 1 S",
            "2009 2009 11 31 7 23:59 0 0"
        ],
        "Zion": [
            "1940 1940 5 1 7 0 0 1 D",
            "1942 1944 10 1 7 0 0 0 S",
            "1943 1943 3 1 7 2 0 1 D",
            "1944 1944 3 1 7 0 0 1 D",
            "1945 1945 3 16 7 0 0 1 D",
            "1945 1945 10 1 7 2 0 0 S",
            "1946 1946 3 16 7 2 0 1 D",
            "1946 1946 10 1 7 0 0 0 S",
            "1948 1948 4 23 7 0 0 2 DD",
            "1948 1948 8 1 7 0 0 1 D",
            "1948 1949 10 1 7 2 0 0 S",
            "1949 1949 4 1 7 0 0 1 D",
            "1950 1950 3 16 7 0 0 1 D",
            "1950 1950 8 15 7 3 0 0 S",
            "1951 1951 3 1 7 0 0 1 D",
            "1951 1951 10 11 7 3 0 0 S",
            "1952 1952 3 20 7 2 0 1 D",
            "1952 1952 9 19 7 3 0 0 S",
            "1953 1953 3 12 7 2 0 1 D",
            "1953 1953 8 13 7 3 0 0 S",
            "1954 1954 5 13 7 0 0 1 D",
            "1954 1954 8 12 7 0 0 0 S",
            "1955 1955 5 11 7 2 0 1 D",
            "1955 1955 8 11 7 0 0 0 S",
            "1956 1956 5 3 7 0 0 1 D",
            "1956 1956 8 30 7 3 0 0 S",
            "1957 1957 3 29 7 2 0 1 D",
            "1957 1957 8 22 7 0 0 0 S",
            "1974 1974 6 7 7 0 0 1 D",
            "1974 1974 9 13 7 0 0 0 S",
            "1975 1975 3 20 7 0 0 1 D",
            "1975 1975 7 31 7 0 0 0 S",
            "1985 1985 3 14 7 0 0 1 D",
            "1985 1985 8 15 7 0 0 0 S",
            "1986 1986 4 18 7 0 0 1 D",
            "1986 1986 8 7 7 0 0 0 S",
            "1987 1987 3 15 7 0 0 1 D",
            "1987 1987 8 13 7 0 0 0 S",
            "1988 1988 3 9 7 0 0 1 D",
            "1988 1988 8 3 7 0 0 0 S",
            "1989 1989 3 30 7 0 0 1 D",
            "1989 1989 8 3 7 0 0 0 S",
            "1990 1990 2 25 7 0 0 1 D",
            "1990 1990 7 26 7 0 0 0 S",
            "1991 1991 2 24 7 0 0 1 D",
            "1991 1991 8 1 7 0 0 0 S",
            "1992 1992 2 29 7 0 0 1 D",
            "1992 1992 8 6 7 0 0 0 S",
            "1993 1993 3 2 7 0 0 1 D",
            "1993 1993 8 5 7 0 0 0 S",
            "1994 1994 3 1 7 0 0 1 D",
            "1994 1994 7 28 7 0 0 0 S",
            "1995 1995 2 31 7 0 0 1 D",
            "1995 1995 8 3 7 0 0 0 S",
            "1996 1996 2 15 7 0 0 1 D",
            "1996 1996 8 16 7 0 0 0 S",
            "1997 1997 2 21 7 0 0 1 D",
            "1997 1997 8 14 7 0 0 0 S",
            "1998 1998 2 20 7 0 0 1 D",
            "1998 1998 8 6 7 0 0 0 S",
            "1999 1999 3 2 7 2 0 1 D",
            "1999 1999 8 3 7 2 0 0 S",
            "2000 2000 3 14 7 2 0 1 D",
            "2000 2000 9 6 7 1 0 0 S",
            "2001 2001 3 9 7 1 0 1 D",
            "2001 2001 8 24 7 1 0 0 S",
            "2002 2002 2 29 7 1 0 1 D",
            "2002 2002 9 7 7 1 0 0 S",
            "2003 2003 2 28 7 1 0 1 D",
            "2003 2003 9 3 7 1 0 0 S",
            "2004 2004 3 7 7 1 0 1 D",
            "2004 2004 8 22 7 1 0 0 S",
            "2005 2005 3 1 7 2 0 1 D",
            "2005 2005 9 9 7 2 0 0 S",
            "2006 2010 2 26 5 2 0 1 D",
            "2006 2006 9 1 7 2 0 0 S",
            "2007 2007 8 16 7 2 0 0 S",
            "2008 2008 9 5 7 2 0 0 S",
            "2009 2009 8 27 7 2 0 0 S",
            "2010 2010 8 12 7 2 0 0 S",
            "2011 2011 3 1 7 2 0 1 D",
            "2011 2011 9 2 7 2 0 0 S",
            "2012 2012 2 26 5 2 0 1 D",
            "2012 2012 8 23 7 2 0 0 S",
            "2013 9999 2 23 5 2 0 1 D",
            "2013 2026 9 2 0 2 0 0 S",
            "2027 2027 9 3 1 2 0 0 S",
            "2028 9999 9 2 0 2 0 0 S"
        ],
        "EgyptAsia": [
            "1957 1957 4 10 7 0 0 1 S",
            "1957 1958 9 1 7 0 0 0",
            "1958 1958 4 1 7 0 0 1 S",
            "1959 1967 4 1 7 1 0 1 S",
            "1959 1965 8 30 7 3 0 0",
            "1966 1966 9 1 7 3 0 0"
        ],
        "Palestine": [
            "1999 2005 3 15 5 0 0 1 S",
            "1999 2003 9 15 5 0 0 0",
            "2004 2004 9 1 7 1 0 0",
            "2005 2005 9 4 7 2 0 0",
            "2006 2007 3 1 7 0 0 1 S",
            "2006 2006 8 22 7 0 0 0",
            "2007 2007 8 8 4 2 0 0",
            "2008 2009 2 5 8 0 0 1 S",
            "2008 2008 8 1 7 0 0 0",
            "2009 2009 8 1 5 1 0 0",
            "2010 2010 2 26 7 0 0 1 S",
            "2010 2010 7 11 7 0 0 0",
            "2011 2011 3 1 7 0:1 0 1 S",
            "2011 2011 7 1 7 0 0 0",
            "2011 2011 7 30 7 0 0 1 S",
            "2011 2011 8 30 7 0 0 0",
            "2012 9999 2 4 8 24 0 1 S",
            "2012 9999 8 21 5 1 0 0"
        ],
        "HK": [
            "1941 1941 3 1 7 3:30 0 1 S",
            "1941 1941 8 30 7 3:30 0 0",
            "1946 1946 3 20 7 3:30 0 1 S",
            "1946 1946 11 1 7 3:30 0 0",
            "1947 1947 3 13 7 3:30 0 1 S",
            "1947 1947 11 30 7 3:30 0 0",
            "1948 1948 4 2 7 3:30 0 1 S",
            "1948 1951 9 0 8 3:30 0 0",
            "1952 1952 9 25 7 3:30 0 0",
            "1949 1953 3 1 0 3:30 0 1 S",
            "1953 1953 10 1 7 3:30 0 0",
            "1954 1964 2 18 0 3:30 0 1 S",
            "1954 1954 9 31 7 3:30 0 0",
            "1955 1964 10 1 0 3:30 0 0",
            "1965 1976 3 16 0 3:30 0 1 S",
            "1965 1976 9 16 0 3:30 0 0",
            "1973 1973 11 30 7 3:30 0 1 S",
            "1979 1979 4 8 0 3:30 0 1 S",
            "1979 1979 9 16 0 3:30 0 0"
        ],
        "Pakistan": [
            "2002 2002 3 2 0 0:1 0 1 S",
            "2002 2002 9 2 0 0:1 0 0",
            "2008 2008 5 1 7 0 0 1 S",
            "2008 2008 10 1 7 0 0 0",
            "2009 2009 3 15 7 0 0 1 S",
            "2009 2009 10 1 7 0 0 0"
        ],
        "NBorneo": [
            "1935 1941 8 14 7 0 0 0:20 TS",
            "1935 1941 11 14 7 0 0 0"
        ],
        "Macau": [
            "1961 1962 2 16 0 3:30 0 1 S",
            "1961 1964 10 1 0 3:30 0 0",
            "1963 1963 2 16 0 0 0 1 S",
            "1964 1964 2 16 0 3:30 0 1 S",
            "1965 1965 2 16 0 0 0 1 S",
            "1965 1965 9 31 7 0 0 0",
            "1966 1971 3 16 0 3:30 0 1 S",
            "1966 1971 9 16 0 3:30 0 0",
            "1972 1974 3 15 0 0 0 1 S",
            "1972 1973 9 15 0 0 0 0",
            "1974 1977 9 15 0 3:30 0 0",
            "1975 1977 3 15 0 3:30 0 1 S",
            "1978 1980 3 15 0 0 0 1 S",
            "1978 1980 9 15 0 0 0 0"
        ],
        "Phil": [
            "1936 1936 10 1 7 0 0 1 S",
            "1937 1937 1 1 7 0 0 0",
            "1954 1954 3 12 7 0 0 1 S",
            "1954 1954 6 1 7 0 0 0",
            "1978 1978 2 22 7 0 0 1 S",
            "1978 1978 8 21 7 0 0 0"
        ],
        "Cyprus": [
            "1975 1975 3 13 7 0 0 1 S",
            "1975 1975 9 12 7 0 0 0",
            "1976 1976 4 15 7 0 0 1 S",
            "1976 1976 9 11 7 0 0 0",
            "1977 1980 3 1 0 0 0 1 S",
            "1977 1977 8 25 7 0 0 0",
            "1978 1978 9 2 7 0 0 0",
            "1979 1997 8 0 8 0 0 0",
            "1981 1998 2 0 8 0 0 1 S"
        ],
        "ROK": [
            "1960 1960 4 15 7 0 0 1 D",
            "1960 1960 8 13 7 0 0 0 S",
            "1987 1988 4 8 0 0 0 1 D",
            "1987 1988 9 8 0 0 0 0 S"
        ],
        "Shang": [
            "1940 1940 5 3 7 0 0 1 D",
            "1940 1941 9 1 7 0 0 0 S",
            "1941 1941 2 16 7 0 0 1 D"
        ],
        "Taiwan": [
            "1945 1951 4 1 7 0 0 1 D",
            "1945 1951 9 1 7 0 0 0 S",
            "1952 1952 2 1 7 0 0 1 D",
            "1952 1954 10 1 7 0 0 0 S",
            "1953 1959 3 1 7 0 0 1 D",
            "1955 1961 9 1 7 0 0 0 S",
            "1960 1961 5 1 7 0 0 1 D",
            "1974 1975 3 1 7 0 0 1 D",
            "1974 1975 9 1 7 0 0 0 S",
            "1979 1979 5 30 7 0 0 1 D",
            "1979 1979 8 30 7 0 0 0 S"
        ],
        "E-EurAsia": [
            "1981 9999 2 0 8 0 0 1 S",
            "1979 1995 8 0 8 0 0 0",
            "1996 9999 9 0 8 0 0 0"
        ],
        "Iran": [
            "1978 1980 2 21 7 0 0 1 D",
            "1978 1978 9 21 7 0 0 0 S",
            "1979 1979 8 19 7 0 0 0 S",
            "1980 1980 8 23 7 0 0 0 S",
            "1991 1991 4 3 7 0 0 1 D",
            "1992 1995 2 22 7 0 0 1 D",
            "1991 1995 8 22 7 0 0 0 S",
            "1996 1996 2 21 7 0 0 1 D",
            "1996 1996 8 21 7 0 0 0 S",
            "1997 1999 2 22 7 0 0 1 D",
            "1997 1999 8 22 7 0 0 0 S",
            "2000 2000 2 21 7 0 0 1 D",
            "2000 2000 8 21 7 0 0 0 S",
            "2001 2003 2 22 7 0 0 1 D",
            "2001 2003 8 22 7 0 0 0 S",
            "2004 2004 2 21 7 0 0 1 D",
            "2004 2004 8 21 7 0 0 0 S",
            "2005 2005 2 22 7 0 0 1 D",
            "2005 2005 8 22 7 0 0 0 S",
            "2008 2008 2 21 7 0 0 1 D",
            "2008 2008 8 21 7 0 0 0 S",
            "2009 2011 2 22 7 0 0 1 D",
            "2009 2011 8 22 7 0 0 0 S",
            "2012 2012 2 21 7 0 0 1 D",
            "2012 2012 8 21 7 0 0 0 S",
            "2013 2015 2 22 7 0 0 1 D",
            "2013 2015 8 22 7 0 0 0 S",
            "2016 2016 2 21 7 0 0 1 D",
            "2016 2016 8 21 7 0 0 0 S",
            "2017 2019 2 22 7 0 0 1 D",
            "2017 2019 8 22 7 0 0 0 S",
            "2020 2020 2 21 7 0 0 1 D",
            "2020 2020 8 21 7 0 0 0 S",
            "2021 2023 2 22 7 0 0 1 D",
            "2021 2023 8 22 7 0 0 0 S",
            "2024 2024 2 21 7 0 0 1 D",
            "2024 2024 8 21 7 0 0 0 S",
            "2025 2027 2 22 7 0 0 1 D",
            "2025 2027 8 22 7 0 0 0 S",
            "2028 2029 2 21 7 0 0 1 D",
            "2028 2029 8 21 7 0 0 0 S",
            "2030 2031 2 22 7 0 0 1 D",
            "2030 2031 8 22 7 0 0 0 S",
            "2032 2033 2 21 7 0 0 1 D",
            "2032 2033 8 21 7 0 0 0 S",
            "2034 2035 2 22 7 0 0 1 D",
            "2034 2035 8 22 7 0 0 0 S",
            "2036 2037 2 21 7 0 0 1 D",
            "2036 2037 8 21 7 0 0 0 S"
        ],
        "Japan": [
            "1948 1948 4 1 0 2 0 1 D",
            "1948 1951 8 8 6 2 0 0 S",
            "1949 1949 3 1 0 2 0 1 D",
            "1950 1951 4 1 0 2 0 1 D"
        ],
        "Port": [
            "1916 1916 5 17 7 23 0 1 S",
            "1916 1916 10 1 7 1 0 0",
            "1917 1917 1 28 7 23 2 1 S",
            "1917 1921 9 14 7 23 2 0",
            "1918 1918 2 1 7 23 2 1 S",
            "1919 1919 1 28 7 23 2 1 S",
            "1920 1920 1 29 7 23 2 1 S",
            "1921 1921 1 28 7 23 2 1 S",
            "1924 1924 3 16 7 23 2 1 S",
            "1924 1924 9 14 7 23 2 0",
            "1926 1926 3 17 7 23 2 1 S",
            "1926 1929 9 1 6 23 2 0",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1929 1929 3 20 7 23 2 1 S",
            "1931 1931 3 18 7 23 2 1 S",
            "1931 1932 9 1 6 23 2 0",
            "1932 1932 3 2 7 23 2 1 S",
            "1934 1934 3 7 7 23 2 1 S",
            "1934 1938 9 1 6 23 2 0",
            "1935 1935 2 30 7 23 2 1 S",
            "1936 1936 3 18 7 23 2 1 S",
            "1937 1937 3 3 7 23 2 1 S",
            "1938 1938 2 26 7 23 2 1 S",
            "1939 1939 3 15 7 23 2 1 S",
            "1939 1939 10 18 7 23 2 0",
            "1940 1940 1 24 7 23 2 1 S",
            "1940 1941 9 5 7 23 2 0",
            "1941 1941 3 5 7 23 2 1 S",
            "1942 1945 2 8 6 23 2 1 S",
            "1942 1942 3 25 7 22 2 2 M",
            "1942 1942 7 15 7 22 2 1 S",
            "1942 1945 9 24 6 23 2 0",
            "1943 1943 3 17 7 22 2 2 M",
            "1943 1945 7 25 6 22 2 1 S",
            "1944 1945 3 21 6 22 2 2 M",
            "1946 1946 3 1 6 23 2 1 S",
            "1946 1946 9 1 6 23 2 0",
            "1947 1949 3 1 0 2 2 1 S",
            "1947 1949 9 1 0 2 2 0",
            "1951 1965 3 1 0 2 2 1 S",
            "1951 1965 9 1 0 2 2 0",
            "1977 1977 2 27 7 0 2 1 S",
            "1977 1977 8 25 7 0 2 0",
            "1978 1979 3 1 0 0 2 1 S",
            "1978 1978 9 1 7 0 2 0",
            "1979 1982 8 0 8 1 2 0",
            "1980 1980 2 0 8 0 2 1 S",
            "1981 1982 2 0 8 1 2 1 S",
            "1983 1983 2 0 8 2 2 1 S"
        ],
        "W-Eur": [
            "1977 1980 3 1 0 1 2 1 S",
            "1977 1977 8 0 8 1 2 0",
            "1978 1978 9 1 7 1 2 0",
            "1979 1995 8 0 8 1 2 0",
            "1981 9999 2 0 8 1 2 1 S",
            "1996 9999 9 0 8 1 2 0"
        ],
        "Iceland": [
            "1917 1918 1 19 7 23 0 1 S",
            "1917 1917 9 21 7 1 0 0",
            "1918 1918 10 16 7 1 0 0",
            "1939 1939 3 29 7 23 0 1 S",
            "1939 1939 10 29 7 2 0 0",
            "1940 1940 1 25 7 2 0 1 S",
            "1940 1940 10 3 7 2 0 0",
            "1941 1941 2 2 7 1 2 1 S",
            "1941 1941 10 2 7 1 2 0",
            "1942 1942 2 8 7 1 2 1 S",
            "1942 1942 9 25 7 1 2 0",
            "1943 1946 2 1 0 1 2 1 S",
            "1943 1948 9 22 0 1 2 0",
            "1947 1967 3 1 0 1 2 1 S",
            "1949 1949 9 30 7 1 2 0",
            "1950 1966 9 22 0 1 2 0",
            "1967 1967 9 29 7 1 2 0"
        ],
        "Falk": [
            "1937 1938 8 0 8 0 0 1 S",
            "1938 1942 2 19 0 0 0 0",
            "1939 1939 9 1 7 0 0 1 S",
            "1940 1942 8 0 8 0 0 1 S",
            "1943 1943 0 1 7 0 0 0",
            "1983 1983 8 0 8 0 0 1 S",
            "1984 1985 3 0 8 0 0 0",
            "1984 1984 8 16 7 0 0 1 S",
            "1985 2000 8 9 0 0 0 1 S",
            "1986 2000 3 16 0 0 0 0",
            "2001 2010 3 15 0 2 0 0",
            "2001 2010 8 1 0 2 0 1 S"
        ],
        "AS": [
            "1971 1985 9 0 8 2 2 1",
            "1986 1986 9 19 7 2 2 1",
            "1987 2007 9 0 8 2 2 1",
            "1972 1972 1 27 7 2 2 0",
            "1973 1985 2 1 0 2 2 0",
            "1986 1990 2 15 0 2 2 0",
            "1991 1991 2 3 7 2 2 0",
            "1992 1992 2 22 7 2 2 0",
            "1993 1993 2 7 7 2 2 0",
            "1994 1994 2 20 7 2 2 0",
            "1995 2005 2 0 8 2 2 0",
            "2006 2006 3 2 7 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0",
            "2008 9999 9 1 0 2 2 1"
        ],
        "AQ": [
            "1971 1971 9 0 8 2 2 1",
            "1972 1972 1 0 8 2 2 0",
            "1989 1991 9 0 8 2 2 1",
            "1990 1992 2 1 0 2 2 0"
        ],
        "AN": [
            "1971 1985 9 0 8 2 2 1",
            "1972 1972 1 27 7 2 2 0",
            "1973 1981 2 1 0 2 2 0",
            "1982 1982 3 1 0 2 2 0",
            "1983 1985 2 1 0 2 2 0",
            "1986 1989 2 15 0 2 2 0",
            "1986 1986 9 19 7 2 2 1",
            "1987 1999 9 0 8 2 2 1",
            "1990 1995 2 1 0 2 2 0",
            "1996 2005 2 0 8 2 2 0",
            "2000 2000 7 0 8 2 2 1",
            "2001 2007 9 0 8 2 2 1",
            "2006 2006 3 1 0 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0",
            "2008 9999 9 1 0 2 2 1"
        ],
        "AW": [
            "1974 1974 9 0 8 2 2 1",
            "1975 1975 2 1 0 2 2 0",
            "1983 1983 9 0 8 2 2 1",
            "1984 1984 2 1 0 2 2 0",
            "1991 1991 10 17 7 2 2 1",
            "1992 1992 2 1 0 2 2 0",
            "2006 2006 11 3 7 2 2 1",
            "2007 2009 2 0 8 2 2 0",
            "2007 2008 9 0 8 2 2 1"
        ],
        "Holiday": [
            "1992 1993 9 0 8 2 2 1",
            "1993 1994 2 1 0 2 2 0"
        ],
        "LH": [
            "1981 1984 9 0 8 2 0 1",
            "1982 1985 2 1 0 2 0 0",
            "1985 1985 9 0 8 2 0 0:30",
            "1986 1989 2 15 0 2 0 0",
            "1986 1986 9 19 7 2 0 0:30",
            "1987 1999 9 0 8 2 0 0:30",
            "1990 1995 2 1 0 2 0 0",
            "1996 2005 2 0 8 2 0 0",
            "2000 2000 7 0 8 2 0 0:30",
            "2001 2007 9 0 8 2 0 0:30",
            "2006 2006 3 1 0 2 0 0",
            "2007 2007 2 0 8 2 0 0",
            "2008 9999 3 1 0 2 0 0",
            "2008 9999 9 1 0 2 0 0:30"
        ],
        "AV": [
            "1971 1985 9 0 8 2 2 1",
            "1972 1972 1 0 8 2 2 0",
            "1973 1985 2 1 0 2 2 0",
            "1986 1990 2 15 0 2 2 0",
            "1986 1987 9 15 0 2 2 1",
            "1988 1999 9 0 8 2 2 1",
            "1991 1994 2 1 0 2 2 0",
            "1995 2005 2 0 8 2 2 0",
            "2000 2000 7 0 8 2 2 1",
            "2001 2007 9 0 8 2 2 1",
            "2006 2006 3 1 0 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0",
            "2008 9999 9 1 0 2 2 1"
        ],
        "Neth": [
            "1916 1916 4 1 7 0 0 1 NST",
            "1916 1916 9 1 7 0 0 0 AMT",
            "1917 1917 3 16 7 2 2 1 NST",
            "1917 1917 8 17 7 2 2 0 AMT",
            "1918 1921 3 1 1 2 2 1 NST",
            "1918 1921 8 1 8 2 2 0 AMT",
            "1922 1922 2 0 8 2 2 1 NST",
            "1922 1936 9 2 0 2 2 0 AMT",
            "1923 1923 5 1 5 2 2 1 NST",
            "1924 1924 2 0 8 2 2 1 NST",
            "1925 1925 5 1 5 2 2 1 NST",
            "1926 1931 4 15 7 2 2 1 NST",
            "1932 1932 4 22 7 2 2 1 NST",
            "1933 1936 4 15 7 2 2 1 NST",
            "1937 1937 4 22 7 2 2 1 NST",
            "1937 1937 6 1 7 0 0 1 S",
            "1937 1939 9 2 0 2 2 0",
            "1938 1939 4 15 7 2 2 1 S",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 8 16 7 2 2 0"
        ],
        "Greece": [
            "1932 1932 6 7 7 0 0 1 S",
            "1932 1932 8 1 7 0 0 0",
            "1941 1941 3 7 7 0 0 1 S",
            "1942 1942 10 2 7 3 0 0",
            "1943 1943 2 30 7 0 0 1 S",
            "1943 1943 9 4 7 0 0 0",
            "1952 1952 6 1 7 0 0 1 S",
            "1952 1952 10 2 7 0 0 0",
            "1975 1975 3 12 7 0 2 1 S",
            "1975 1975 10 26 7 0 2 0",
            "1976 1976 3 11 7 2 2 1 S",
            "1976 1976 9 10 7 2 2 0",
            "1977 1978 3 1 0 2 2 1 S",
            "1977 1977 8 26 7 2 2 0",
            "1978 1978 8 24 7 4 0 0",
            "1979 1979 3 1 7 9 0 1 S",
            "1979 1979 8 29 7 2 0 0",
            "1980 1980 3 1 7 0 0 1 S",
            "1980 1980 8 28 7 0 0 0"
        ],
        "SovietZone": [
            "1945 1945 4 24 7 2 0 2 M",
            "1945 1945 8 24 7 3 0 1 S",
            "1945 1945 10 18 7 2 2 0"
        ],
        "Germany": [
            "1946 1946 3 14 7 2 2 1 S",
            "1946 1946 9 7 7 2 2 0",
            "1947 1949 9 1 0 2 2 0",
            "1947 1947 3 6 7 3 2 1 S",
            "1947 1947 4 11 7 2 2 2 M",
            "1947 1947 5 29 7 3 0 1 S",
            "1948 1948 3 18 7 2 2 1 S",
            "1949 1949 3 10 7 2 2 1 S"
        ],
        "Czech": [
            "1945 1945 3 8 7 2 2 1 S",
            "1945 1945 10 18 7 2 2 0",
            "1946 1946 4 6 7 2 2 1 S",
            "1946 1949 9 1 0 2 2 0",
            "1947 1947 3 20 7 2 2 1 S",
            "1948 1948 3 18 7 2 2 1 S",
            "1949 1949 3 9 7 2 2 1 S"
        ],
        "Belgium": [
            "1918 1918 2 9 7 0 2 1 S",
            "1918 1919 9 1 6 23 2 0",
            "1919 1919 2 1 7 23 2 1 S",
            "1920 1920 1 14 7 23 2 1 S",
            "1920 1920 9 23 7 23 2 0",
            "1921 1921 2 14 7 23 2 1 S",
            "1921 1921 9 25 7 23 2 0",
            "1922 1922 2 25 7 23 2 1 S",
            "1922 1927 9 1 6 23 2 0",
            "1923 1923 3 21 7 23 2 1 S",
            "1924 1924 2 29 7 23 2 1 S",
            "1925 1925 3 4 7 23 2 1 S",
            "1926 1926 3 17 7 23 2 1 S",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1928 1938 9 2 0 2 2 0",
            "1929 1929 3 21 7 2 2 1 S",
            "1930 1930 3 13 7 2 2 1 S",
            "1931 1931 3 19 7 2 2 1 S",
            "1932 1932 3 3 7 2 2 1 S",
            "1933 1933 2 26 7 2 2 1 S",
            "1934 1934 3 8 7 2 2 1 S",
            "1935 1935 2 31 7 2 2 1 S",
            "1936 1936 3 19 7 2 2 1 S",
            "1937 1937 3 4 7 2 2 1 S",
            "1938 1938 2 27 7 2 2 1 S",
            "1939 1939 3 16 7 2 2 1 S",
            "1939 1939 10 19 7 2 2 0",
            "1940 1940 1 25 7 2 2 1 S",
            "1944 1944 8 17 7 2 2 0",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 8 16 7 2 2 0",
            "1946 1946 4 19 7 2 2 1 S",
            "1946 1946 9 7 7 2 2 0"
        ],
        "Romania": [
            "1932 1932 4 21 7 0 2 1 S",
            "1932 1939 9 1 0 0 2 0",
            "1933 1939 3 2 0 0 2 1 S",
            "1979 1979 4 27 7 0 0 1 S",
            "1979 1979 8 0 8 0 0 0",
            "1980 1980 3 5 7 23 0 1 S",
            "1980 1980 8 0 8 1 0 0",
            "1991 1993 2 0 8 0 2 1 S",
            "1991 1993 8 0 8 0 2 0"
        ],
        "E-Eur": [
            "1977 1980 3 1 0 0 0 1 S",
            "1977 1977 8 0 8 0 0 0",
            "1978 1978 9 1 7 0 0 0",
            "1979 1995 8 0 8 0 0 0",
            "1981 9999 2 0 8 0 0 1 S",
            "1996 9999 9 0 8 0 0 0"
        ],
        "Hungary": [
            "1918 1918 3 1 7 3 0 1 S",
            "1918 1918 8 29 7 3 0 0",
            "1919 1919 3 15 7 3 0 1 S",
            "1919 1919 8 15 7 3 0 0",
            "1920 1920 3 5 7 3 0 1 S",
            "1920 1920 8 30 7 3 0 0",
            "1945 1945 4 1 7 23 0 1 S",
            "1945 1945 10 3 7 0 0 0",
            "1946 1946 2 31 7 2 2 1 S",
            "1946 1949 9 1 0 2 2 0",
            "1947 1949 3 4 0 2 2 1 S",
            "1950 1950 3 17 7 2 2 1 S",
            "1950 1950 9 23 7 2 2 0",
            "1954 1955 4 23 7 0 0 1 S",
            "1954 1955 9 3 7 0 0 0",
            "1956 1956 5 1 0 0 0 1 S",
            "1956 1956 8 0 8 0 0 0",
            "1957 1957 5 1 0 1 0 1 S",
            "1957 1957 8 0 8 3 0 0",
            "1980 1980 3 6 7 1 0 1 S"
        ],
        "Swiss": [
            "1941 1942 4 1 1 1 0 1 S",
            "1941 1942 9 1 1 2 0 0"
        ],
        "Denmark": [
            "1916 1916 4 14 7 23 0 1 S",
            "1916 1916 8 30 7 23 0 0",
            "1940 1940 4 15 7 0 0 1 S",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 7 15 7 2 2 0",
            "1946 1946 4 1 7 2 2 1 S",
            "1946 1946 8 1 7 2 2 0",
            "1947 1947 4 4 7 2 2 1 S",
            "1947 1947 7 10 7 2 2 0",
            "1948 1948 4 9 7 2 2 1 S",
            "1948 1948 7 8 7 2 2 0"
        ],
        "GB-Eire": [
            "1916 1916 4 21 7 2 2 1 BST",
            "1916 1916 9 1 7 2 2 0 GMT",
            "1917 1917 3 8 7 2 2 1 BST",
            "1917 1917 8 17 7 2 2 0 GMT",
            "1918 1918 2 24 7 2 2 1 BST",
            "1918 1918 8 30 7 2 2 0 GMT",
            "1919 1919 2 30 7 2 2 1 BST",
            "1919 1919 8 29 7 2 2 0 GMT",
            "1920 1920 2 28 7 2 2 1 BST",
            "1920 1920 9 25 7 2 2 0 GMT",
            "1921 1921 3 3 7 2 2 1 BST",
            "1921 1921 9 3 7 2 2 0 GMT",
            "1922 1922 2 26 7 2 2 1 BST",
            "1922 1922 9 8 7 2 2 0 GMT",
            "1923 1923 3 16 0 2 2 1 BST",
            "1923 1924 8 16 0 2 2 0 GMT",
            "1924 1924 3 9 0 2 2 1 BST",
            "1925 1926 3 16 0 2 2 1 BST",
            "1925 1938 9 2 0 2 2 0 GMT",
            "1927 1927 3 9 0 2 2 1 BST",
            "1928 1929 3 16 0 2 2 1 BST",
            "1930 1930 3 9 0 2 2 1 BST",
            "1931 1932 3 16 0 2 2 1 BST",
            "1933 1933 3 9 0 2 2 1 BST",
            "1934 1934 3 16 0 2 2 1 BST",
            "1935 1935 3 9 0 2 2 1 BST",
            "1936 1937 3 16 0 2 2 1 BST",
            "1938 1938 3 9 0 2 2 1 BST",
            "1939 1939 3 16 0 2 2 1 BST",
            "1939 1939 10 16 0 2 2 0 GMT",
            "1940 1940 1 23 0 2 2 1 BST",
            "1941 1941 4 2 0 1 2 2 BDST",
            "1941 1943 7 9 0 1 2 1 BST",
            "1942 1944 3 2 0 1 2 2 BDST",
            "1944 1944 8 16 0 1 2 1 BST",
            "1945 1945 3 2 1 1 2 2 BDST",
            "1945 1945 6 9 0 1 2 1 BST",
            "1945 1946 9 2 0 2 2 0 GMT",
            "1946 1946 3 9 0 2 2 1 BST",
            "1947 1947 2 16 7 2 2 1 BST",
            "1947 1947 3 13 7 1 2 2 BDST",
            "1947 1947 7 10 7 1 2 1 BST",
            "1947 1947 10 2 7 2 2 0 GMT",
            "1948 1948 2 14 7 2 2 1 BST",
            "1948 1948 9 31 7 2 2 0 GMT",
            "1949 1949 3 3 7 2 2 1 BST",
            "1949 1949 9 30 7 2 2 0 GMT",
            "1950 1952 3 14 0 2 2 1 BST",
            "1950 1952 9 21 0 2 2 0 GMT",
            "1953 1953 3 16 0 2 2 1 BST",
            "1953 1960 9 2 0 2 2 0 GMT",
            "1954 1954 3 9 0 2 2 1 BST",
            "1955 1956 3 16 0 2 2 1 BST",
            "1957 1957 3 9 0 2 2 1 BST",
            "1958 1959 3 16 0 2 2 1 BST",
            "1960 1960 3 9 0 2 2 1 BST",
            "1961 1963 2 0 8 2 2 1 BST",
            "1961 1968 9 23 0 2 2 0 GMT",
            "1964 1967 2 19 0 2 2 1 BST",
            "1968 1968 1 18 7 2 2 1 BST",
            "1972 1980 2 16 0 2 2 1 BST",
            "1972 1980 9 23 0 2 2 0 GMT",
            "1981 1995 2 0 8 1 1 1 BST",
            "1981 1989 9 23 0 1 1 0 GMT",
            "1990 1995 9 22 0 1 1 0 GMT"
        ],
        "Finland": [
            "1942 1942 3 3 7 0 0 1 S",
            "1942 1942 9 3 7 0 0 0",
            "1981 1982 2 0 8 2 0 1 S",
            "1981 1982 8 0 8 3 0 0"
        ],
        "Turkey": [
            "1916 1916 4 1 7 0 0 1 S",
            "1916 1916 9 1 7 0 0 0",
            "1920 1920 2 28 7 0 0 1 S",
            "1920 1920 9 25 7 0 0 0",
            "1921 1921 3 3 7 0 0 1 S",
            "1921 1921 9 3 7 0 0 0",
            "1922 1922 2 26 7 0 0 1 S",
            "1922 1922 9 8 7 0 0 0",
            "1924 1924 4 13 7 0 0 1 S",
            "1924 1925 9 1 7 0 0 0",
            "1925 1925 4 1 7 0 0 1 S",
            "1940 1940 5 30 7 0 0 1 S",
            "1940 1940 9 5 7 0 0 0",
            "1940 1940 11 1 7 0 0 1 S",
            "1941 1941 8 21 7 0 0 0",
            "1942 1942 3 1 7 0 0 1 S",
            "1942 1942 10 1 7 0 0 0",
            "1945 1945 3 2 7 0 0 1 S",
            "1945 1945 9 8 7 0 0 0",
            "1946 1946 5 1 7 0 0 1 S",
            "1946 1946 9 1 7 0 0 0",
            "1947 1948 3 16 0 0 0 1 S",
            "1947 1950 9 2 0 0 0 0",
            "1949 1949 3 10 7 0 0 1 S",
            "1950 1950 3 19 7 0 0 1 S",
            "1951 1951 3 22 7 0 0 1 S",
            "1951 1951 9 8 7 0 0 0",
            "1962 1962 6 15 7 0 0 1 S",
            "1962 1962 9 8 7 0 0 0",
            "1964 1964 4 15 7 0 0 1 S",
            "1964 1964 9 1 7 0 0 0",
            "1970 1972 4 2 0 0 0 1 S",
            "1970 1972 9 2 0 0 0 0",
            "1973 1973 5 3 7 1 0 1 S",
            "1973 1973 10 4 7 3 0 0",
            "1974 1974 2 31 7 2 0 1 S",
            "1974 1974 10 3 7 5 0 0",
            "1975 1975 2 30 7 0 0 1 S",
            "1975 1976 9 0 8 0 0 0",
            "1976 1976 5 1 7 0 0 1 S",
            "1977 1978 3 1 0 0 0 1 S",
            "1977 1977 9 16 7 0 0 0",
            "1979 1980 3 1 0 3 0 1 S",
            "1979 1982 9 11 1 0 0 0",
            "1981 1982 2 0 8 3 0 1 S",
            "1983 1983 6 31 7 0 0 1 S",
            "1983 1983 9 2 7 0 0 0",
            "1985 1985 3 20 7 0 0 1 S",
            "1985 1985 8 28 7 0 0 0",
            "1986 1990 2 0 8 2 2 1 S",
            "1986 1990 8 0 8 2 2 0",
            "1991 2006 2 0 8 1 2 1 S",
            "1991 1995 8 0 8 1 2 0",
            "1996 2006 9 0 8 1 2 0"
        ],
        "Poland": [
            "1918 1919 8 16 7 2 2 0",
            "1919 1919 3 15 7 2 2 1 S",
            "1944 1944 3 3 7 2 2 1 S",
            "1944 1944 9 4 7 2 0 0",
            "1945 1945 3 29 7 0 0 1 S",
            "1945 1945 10 1 7 0 0 0",
            "1946 1946 3 14 7 0 2 1 S",
            "1946 1946 9 7 7 2 2 0",
            "1947 1947 4 4 7 2 2 1 S",
            "1947 1949 9 1 0 2 2 0",
            "1948 1948 3 18 7 2 2 1 S",
            "1949 1949 3 10 7 2 2 1 S",
            "1957 1957 5 2 7 1 2 1 S",
            "1957 1958 8 0 8 1 2 0",
            "1958 1958 2 30 7 1 2 1 S",
            "1959 1959 4 31 7 1 2 1 S",
            "1959 1961 9 1 0 1 2 0",
            "1960 1960 3 3 7 1 2 1 S",
            "1961 1964 4 0 8 1 2 1 S",
            "1962 1964 8 0 8 1 2 0"
        ],
        "Lux": [
            "1916 1916 4 14 7 23 0 1 S",
            "1916 1916 9 1 7 1 0 0",
            "1917 1917 3 28 7 23 0 1 S",
            "1917 1917 8 17 7 1 0 0",
            "1918 1918 3 15 1 2 2 1 S",
            "1918 1918 8 15 1 2 2 0",
            "1919 1919 2 1 7 23 0 1 S",
            "1919 1919 9 5 7 3 0 0",
            "1920 1920 1 14 7 23 0 1 S",
            "1920 1920 9 24 7 2 0 0",
            "1921 1921 2 14 7 23 0 1 S",
            "1921 1921 9 26 7 2 0 0",
            "1922 1922 2 25 7 23 0 1 S",
            "1922 1922 9 2 0 1 0 0",
            "1923 1923 3 21 7 23 0 1 S",
            "1923 1923 9 2 0 2 0 0",
            "1924 1924 2 29 7 23 0 1 S",
            "1924 1928 9 2 0 1 0 0",
            "1925 1925 3 5 7 23 0 1 S",
            "1926 1926 3 17 7 23 0 1 S",
            "1927 1927 3 9 7 23 0 1 S",
            "1928 1928 3 14 7 23 0 1 S",
            "1929 1929 3 20 7 23 0 1 S"
        ],
        "Italy": [
            "1916 1916 5 3 7 0 2 1 S",
            "1916 1916 9 1 7 0 2 0",
            "1917 1917 3 1 7 0 2 1 S",
            "1917 1917 8 30 7 0 2 0",
            "1918 1918 2 10 7 0 2 1 S",
            "1918 1919 9 1 0 0 2 0",
            "1919 1919 2 2 7 0 2 1 S",
            "1920 1920 2 21 7 0 2 1 S",
            "1920 1920 8 19 7 0 2 0",
            "1940 1940 5 15 7 0 2 1 S",
            "1944 1944 8 17 7 0 2 0",
            "1945 1945 3 2 7 2 0 1 S",
            "1945 1945 8 15 7 0 2 0",
            "1946 1946 2 17 7 2 2 1 S",
            "1946 1946 9 6 7 2 2 0",
            "1947 1947 2 16 7 0 2 1 S",
            "1947 1947 9 5 7 0 2 0",
            "1948 1948 1 29 7 2 2 1 S",
            "1948 1948 9 3 7 2 2 0",
            "1966 1968 4 22 0 0 0 1 S",
            "1966 1969 8 22 0 0 0 0",
            "1969 1969 5 1 7 0 0 1 S",
            "1970 1970 4 31 7 0 0 1 S",
            "1970 1970 8 0 8 0 0 0",
            "1971 1972 4 22 0 0 0 1 S",
            "1971 1971 8 0 8 1 0 0",
            "1972 1972 9 1 7 0 0 0",
            "1973 1973 5 3 7 0 0 1 S",
            "1973 1974 8 0 8 0 0 0",
            "1974 1974 4 26 7 0 0 1 S",
            "1975 1975 5 1 7 0 2 1 S",
            "1975 1977 8 0 8 0 2 0",
            "1976 1976 4 30 7 0 2 1 S",
            "1977 1979 4 22 0 0 2 1 S",
            "1978 1978 9 1 7 0 2 0",
            "1979 1979 8 30 7 0 2 0"
        ],
        "Malta": [
            "1973 1973 2 31 7 0 2 1 S",
            "1973 1973 8 29 7 0 2 0",
            "1974 1974 3 21 7 0 2 1 S",
            "1974 1974 8 16 7 0 2 0",
            "1975 1979 3 15 0 2 0 1 S",
            "1975 1980 8 15 0 2 0 0",
            "1980 1980 2 31 7 2 0 1 S"
        ],
        "France": [
            "1916 1916 5 14 7 23 2 1 S",
            "1916 1919 9 1 0 23 2 0",
            "1917 1917 2 24 7 23 2 1 S",
            "1918 1918 2 9 7 23 2 1 S",
            "1919 1919 2 1 7 23 2 1 S",
            "1920 1920 1 14 7 23 2 1 S",
            "1920 1920 9 23 7 23 2 0",
            "1921 1921 2 14 7 23 2 1 S",
            "1921 1921 9 25 7 23 2 0",
            "1922 1922 2 25 7 23 2 1 S",
            "1922 1938 9 1 6 23 2 0",
            "1923 1923 4 26 7 23 2 1 S",
            "1924 1924 2 29 7 23 2 1 S",
            "1925 1925 3 4 7 23 2 1 S",
            "1926 1926 3 17 7 23 2 1 S",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1929 1929 3 20 7 23 2 1 S",
            "1930 1930 3 12 7 23 2 1 S",
            "1931 1931 3 18 7 23 2 1 S",
            "1932 1932 3 2 7 23 2 1 S",
            "1933 1933 2 25 7 23 2 1 S",
            "1934 1934 3 7 7 23 2 1 S",
            "1935 1935 2 30 7 23 2 1 S",
            "1936 1936 3 18 7 23 2 1 S",
            "1937 1937 3 3 7 23 2 1 S",
            "1938 1938 2 26 7 23 2 1 S",
            "1939 1939 3 15 7 23 2 1 S",
            "1939 1939 10 18 7 23 2 0",
            "1940 1940 1 25 7 2 0 1 S",
            "1941 1941 4 5 7 0 0 2 M",
            "1941 1941 9 6 7 0 0 1 S",
            "1942 1942 2 9 7 0 0 2 M",
            "1942 1942 10 2 7 3 0 1 S",
            "1943 1943 2 29 7 2 0 2 M",
            "1943 1943 9 4 7 3 0 1 S",
            "1944 1944 3 3 7 2 0 2 M",
            "1944 1944 9 8 7 1 0 1 S",
            "1945 1945 3 2 7 2 0 2 M",
            "1945 1945 8 16 7 3 0 0",
            "1976 1976 2 28 7 1 0 1 S",
            "1976 1976 8 26 7 1 0 0"
        ],
        "Latvia": [
            "1989 1996 2 0 8 2 2 1 S",
            "1989 1996 8 0 8 2 2 0"
        ],
        "Bulg": [
            "1979 1979 2 31 7 23 0 1 S",
            "1979 1979 9 1 7 1 0 0",
            "1980 1982 3 1 6 23 0 1 S",
            "1980 1980 8 29 7 1 0 0",
            "1981 1981 8 27 7 2 0 0"
        ],
        "Albania": [
            "1940 1940 5 16 7 0 0 1 S",
            "1942 1942 10 2 7 3 0 0",
            "1943 1943 2 29 7 2 0 1 S",
            "1943 1943 3 10 7 3 0 0",
            "1974 1974 4 4 7 0 0 1 S",
            "1974 1974 9 2 7 0 0 0",
            "1975 1975 4 1 7 0 0 1 S",
            "1975 1975 9 2 7 0 0 0",
            "1976 1976 4 2 7 0 0 1 S",
            "1976 1976 9 3 7 0 0 0",
            "1977 1977 4 8 7 0 0 1 S",
            "1977 1977 9 2 7 0 0 0",
            "1978 1978 4 6 7 0 0 1 S",
            "1978 1978 9 1 7 0 0 0",
            "1979 1979 4 5 7 0 0 1 S",
            "1979 1979 8 30 7 0 0 0",
            "1980 1980 4 3 7 0 0 1 S",
            "1980 1980 9 4 7 0 0 0",
            "1981 1981 3 26 7 0 0 1 S",
            "1981 1981 8 27 7 0 0 0",
            "1982 1982 4 2 7 0 0 1 S",
            "1982 1982 9 3 7 0 0 0",
            "1983 1983 3 18 7 0 0 1 S",
            "1983 1983 9 1 7 0 0 0",
            "1984 1984 3 1 7 0 0 1 S"
        ],
        "Austria": [
            "1920 1920 3 5 7 2 2 1 S",
            "1920 1920 8 13 7 2 2 0",
            "1946 1946 3 14 7 2 2 1 S",
            "1946 1948 9 1 0 2 2 0",
            "1947 1947 3 6 7 2 2 1 S",
            "1948 1948 3 18 7 2 2 1 S",
            "1980 1980 3 6 7 0 0 1 S",
            "1980 1980 8 28 7 0 0 0"
        ],
        "Mauritius": [
            "1982 1982 9 10 7 0 0 1 S",
            "1983 1983 2 21 7 0 0 0",
            "2008 2008 9 0 8 2 0 1 S",
            "2009 2009 2 0 8 2 0 0"
        ],
        "WS": [
            "2012 9999 8 0 8 3 0 1 D",
            "2012 9999 3 1 0 4 0 0"
        ],
        "NZ": [
            "1927 1927 10 6 7 2 0 1 S",
            "1928 1928 2 4 7 2 0 0 M",
            "1928 1933 9 8 0 2 0 0:30 S",
            "1929 1933 2 15 0 2 0 0 M",
            "1934 1940 3 0 8 2 0 0 M",
            "1934 1940 8 0 8 2 0 0:30 S",
            "1946 1946 0 1 7 0 0 0 S",
            "1974 1974 10 1 0 2 2 1 D",
            "1975 1975 1 0 8 2 2 0 S",
            "1975 1988 9 0 8 2 2 1 D",
            "1976 1989 2 1 0 2 2 0 S",
            "1989 1989 9 8 0 2 2 1 D",
            "1990 2006 9 1 0 2 2 1 D",
            "1990 2007 2 15 0 2 2 0 S",
            "2007 9999 8 0 8 2 2 1 D",
            "2008 9999 3 1 0 2 2 0 S"
        ],
        "Chatham": [
            "1974 1974 10 1 0 2:45 2 1 D",
            "1975 1975 1 0 8 2:45 2 0 S",
            "1975 1988 9 0 8 2:45 2 1 D",
            "1976 1989 2 1 0 2:45 2 0 S",
            "1989 1989 9 8 0 2:45 2 1 D",
            "1990 2006 9 1 0 2:45 2 1 D",
            "1990 2007 2 15 0 2:45 2 0 S",
            "2007 9999 8 0 8 2:45 2 1 D",
            "2008 9999 3 1 0 2:45 2 0 S"
        ],
        "Vanuatu": [
            "1983 1983 8 25 7 0 0 1 S",
            "1984 1991 2 23 0 0 0 0",
            "1984 1984 9 23 7 0 0 1 S",
            "1985 1991 8 23 0 0 0 1 S",
            "1992 1993 0 23 0 0 0 0",
            "1992 1992 9 23 0 0 0 1 S"
        ],
        "Fiji": [
            "1998 1999 10 1 0 2 0 1 S",
            "1999 2000 1 0 8 3 0 0",
            "2009 2009 10 29 7 2 0 1 S",
            "2010 2010 2 0 8 3 0 0",
            "2010 9999 9 18 0 2 0 1 S",
            "2011 2011 2 1 0 3 0 0",
            "2012 9999 0 18 0 3 0 0"
        ],
        "NC": [
            "1977 1978 11 1 0 0 0 1 S",
            "1978 1979 1 27 7 0 0 0",
            "1996 1996 11 1 7 2 2 1 S",
            "1997 1997 2 2 7 2 2 0"
        ],
        "Cook": [
            "1978 1978 10 12 7 0 0 0:30 HS",
            "1979 1991 2 1 0 0 0 0",
            "1979 1990 9 0 8 0 0 0:30 HS"
        ],
        "Tonga": [
            "1999 1999 9 7 7 2 2 1 S",
            "2000 2000 2 19 7 2 2 0",
            "2000 2001 10 1 0 2 0 1 S",
            "2001 2002 0 0 8 2 0 0"
        ]
    },
    "links": {
        "America/Kralendijk": "America/Curacao",
        "America/Lower_Princes": "America/Curacao",
        "America/Marigot": "America/Guadeloupe",
        "America/Shiprock": "America/Denver",
        "America/St_Barthelemy": "America/Guadeloupe",
        "Antarctica/South_Pole": "Antarctica/McMurdo",
        "Arctic/Longyearbyen": "Europe/Oslo",
        "Europe/Bratislava": "Europe/Prague",
        "Europe/Busingen": "Europe/Zurich",
        "Europe/Guernsey": "Europe/London",
        "Europe/Isle_of_Man": "Europe/London",
        "Europe/Jersey": "Europe/London",
        "Europe/Ljubljana": "Europe/Belgrade",
        "Europe/Mariehamn": "Europe/Helsinki",
        "Europe/Podgorica": "Europe/Belgrade",
        "Europe/San_Marino": "Europe/Rome",
        "Europe/Sarajevo": "Europe/Belgrade",
        "Europe/Skopje": "Europe/Belgrade",
        "Europe/Vatican": "Europe/Rome",
        "Europe/Zagreb": "Europe/Belgrade"
    }
};
/*global Ember */
var Vinz = Ember.Object.create({
    // core is used as a namespace to put base-classes that should not be attached to the application during
    // Vinz.setup. For example: Vinz.core.Adapter, Vinz.core.Model, Vinz.core.Serializer
    core: {}
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/scripts/vinz-ui.bundle.js":[function(require,module,exports){
/*global Ember, Vinz */
// This file can be regenerated with this command:
// head -3 vinz-ui.bundle.js >out;find . -type d -d 1|sed -e 's+^+require('+'|sed -e 's+$+');+' >>out;mv out vinz-ui-bundle.js
exports.Vinz = Vinz;
require('./adapters');
require('./components');
require('./controllers');
require('./framework');
require('./mixins');
require('./models');
require('./routes');
require('./serializers');
require('./transforms');
require('./util');
require('./views');

},{"./adapters":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/index.js","./components":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/index.js","./controllers":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/index.js","./framework":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/index.js","./mixins":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/index.js","./models":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/index.js","./routes":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/index.js","./serializers":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/index.js","./transforms":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/transforms/index.js","./util":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/index.js","./views":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/index.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/accessConditionAdapter.js":[function(require,module,exports){
/*global Vinz */

require('./coreAdapter');

Vinz.AccessConditionAdapter = Vinz.core.Adapter.extend({
    pathForType: function () {
        'use strict';
        return 'licensedAccessCondition';
    }
});

},{"./coreAdapter":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/authorizationAdaptor.js":[function(require,module,exports){
/*global Vinz */

require('./coreAdapter');

Vinz.AuthorizationAdapter = Vinz.core.Adapter.extend({
    pathForType: function () {
        'use strict';
        return 'authorization';
    }
});

},{"./coreAdapter":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js":[function(require,module,exports){
/*global Vinz, DS, Ember */

Vinz.core.Adapter = DS.RESTAdapter.extend({
    proxyAddress: Ember.computed.alias('env.vinzProxyAddress'),

    ajaxError: function (response) {
        'use strict';
        var error = this._super(response);
        if (response && response.status === 401) {
            this.get('authenticator').onUnauthorized(response);
        }
        return error;
    },

    buildURL: function (type, id) {
        'use strict';
        var result;
        this.host = this.get('proxyAddress');
        result = this._super(type, id);
        return result;
    },

    pathForType: function (type) {
        'use strict';
        return Ember.String.singularize(type);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/identityAdapter.js":[function(require,module,exports){
/*global Vinz */

require('./coreAdapter');

Vinz.IdentityAdapter = Vinz.core.Adapter.extend({
    pathForType: function () {
        'use strict';
        return 'identity';
    }
});

},{"./coreAdapter":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/index.js":[function(require,module,exports){
require('./accessConditionAdapter.js');
require('./authorizationAdaptor.js');
require('./coreAdapter.js');
require('./identityAdapter.js');
require('./organizationAdapter.js');
require('./productLinkAdapter.js');

},{"./accessConditionAdapter.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/accessConditionAdapter.js","./authorizationAdaptor.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/authorizationAdaptor.js","./coreAdapter.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js","./identityAdapter.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/identityAdapter.js","./organizationAdapter.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/organizationAdapter.js","./productLinkAdapter.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/productLinkAdapter.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/organizationAdapter.js":[function(require,module,exports){
/*global Vinz */

require('./coreAdapter');

Vinz.OrganizationAdapter = Vinz.core.Adapter.extend({
    pathForType: function () {
        'use strict';
        return 'organization';
    }
});

},{"./coreAdapter":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/productLinkAdapter.js":[function(require,module,exports){
/*globals Vinz, Ember */

require('./coreAdapter');
require('../serializers/productLinkSerializer');

Vinz.ProductLinkAdapter = Vinz.core.Adapter.extend({
    pathForType: function () {
        'use strict';
        return 'crossprodnav/productLinks';
    }
});

},{"../serializers/productLinkSerializer":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/productLinkSerializer.js","./coreAdapter":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/adapters/coreAdapter.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/bs-icon-list-group.js":[function(require,module,exports){
/*globals Bootstrap, Ember*/

Bootstrap.BsIconListGroupComponent = Bootstrap.ItemsView.extend({

    classNames: ['list-group'],

    tagName: 'ul',

    itemViewClass: Bootstrap.ItemView.extend(Bootstrap.ItemSelection, {

        classNames: ['list-group-item'],

        template: Ember.Handlebars.compile('{{#if view.icon}}' +
                                            '<i {{bind-attr class="view.icon"}}></i> ' +
                                            '{{/if}}' +
                                            '{{#if view.badge}}' +
                                            '{{bs-badge contentBinding="view.badge"}}' +
                                            '{{/if}}' +
                                            '{{#if view.sub}}' +
                                            '<h4 class="list-group-item-heading">{{view.title}}</h4>' +
                                            '<p class="list-group-item-text">{{view.sub}}</p>' +
                                            '{{else}}' +
                                            '{{view.title}}' +
                                            '{{/if}}'),

        badge: Ember.computed('content', function () {
            'use strict';
            var content = this.get('content'),
                result = null;
            if (Ember.typeOf(content) === 'instance' || Ember.canInvoke(content, 'get')) {
                result = content.get('badge');
            }
            return result;
        }),

        icon: Ember.computed('content', function () {
            'use strict';
            var content = this.get('content'),
                icon = null;
            if (Ember.typeOf(content) === 'instance' || Ember.canInvoke(content, 'get')) {
                icon = content.get('icon');
            }
            return icon;
        }),

        sub: Ember.computed('content', function () {
            'use strict';
            var content = this.get('content'),
                result = null;
            if (Ember.typeOf(content) === 'instance' || Ember.canInvoke(content, 'get')) {
                result = content.get('sub');
            }
            return result;
        })
    })
});

Ember.Handlebars.helper('bs-icon-list-group', Bootstrap.BsIconListGroupComponent);

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/email-input.js":[function(require,module,exports){
/*globals Vinz, Ember */
/*jslint regexp:true */

require('./regexp-input');

Vinz.EmailInputComponent = Vinz.RegexpInputComponent.extend({

    /**
     * Message to display when this input contains text that doesn't conform to the pattern for valid email addresses.
     * {String}
     */
    invalidValueMessage: 'Invalid email',

    /**
     * Message to display when this field is empty and required.
     * {String}
     */
    isValueEmptyMessage: 'Required',

    /**
     * Regular expression used to validate this input's value to check if the value is in the correct format for
     * email addresses.
     * {RegExp}
     */
    pattern: /^[a-zA-Z0-9_\.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/
});

Ember.Handlebars.helper('email-input', Vinz.EmailInputComponent);

},{"./regexp-input":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/regexp-input.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/flip-switch.js":[function(require,module,exports){
/*globals Vinz, document, Ember*/

/**
 * Flip switch (on/off) component. A user interface component that can be switched between two states (by default: On or Off).
 *
 * offLabel - The text that this switch displays when it is in the Off state.
 * onLabel - The text that this switch displays when it is in the On state.
 * paddingLeft
 * textIndent
 * width - The value for this switch's width CSS attribute.
 */
Vinz.FlipSwitchComponent = Ember.Component.extend({

    classNames: [ 'flip-switch' ],

    layout: Ember.Handlebars.compile(
        '<label for="{{unbound view.checkBoxId}}">' +
            '{{view.label}}' +
            '<input id="{{unbound view.checkBoxId}}" type="checkbox" {{bind-attr checked="view.checked"}}>' +
            '<div class="switch"></div>' +
            '</label>'
    ),

    offLabel: 'Off',

    onLabel: 'On',

    paddingLeft: '2em',

    propertyName: 'checked',

    textIndent: '-2.5em',

    width: '3em',

    addCssRule: function (styleSheet, selector, rules) {
        'use strict';
        if (styleSheet.insertRule) {
            styleSheet.insertRule(selector + '{' + rules + '}', 0);
        } else {
            styleSheet.addRule(selector, rules, 0);
        }
    },

    checkBoxId: Ember.computed(function () {
        'use strict';
        return 'checker-' + (this.get('elementId'));
    }),

    didInsertElement: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        this.updateStyle(this.$().attr('id'));
        this.updateView();
    },

    init: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super.apply(this, arguments);
        /*jslint nomen:false*/
        return this.on('change', this, this.updateView);
    },

    updateStyle: function (id) {
        'use strict';
        var sheet,
            style = document.createElement('style');
        style.appendChild(document.createTextNode(' '));
        document.head.appendChild(style);
        sheet = document.styleSheets[document.styleSheets.length - 1];
        // TODO - Remove any CSS rules already added to the document for this flip switch.
        this.addCssRule(
            sheet,
            '#' + id + '.flip-switch input[type="checkbox"] + div',
            'width: ' + this.get('width') + ';'
        );
        this.addCssRule(
            sheet,
            '#' + id + '.flip-switch input[type="checkbox"] + div:after',
            'content: "' + this.get('offLabel') + '";'
        );
        this.addCssRule(
            sheet,
            '#' + id + '.flip-switch input[type="checkbox"] + div:before',
            'content: "' + this.get('onLabel') + '";' +
                'text-indent: ' + this.get('textIndent') + ';'
        );
        this.addCssRule(
            sheet,
            '#' + id + '.flip-switch input[type="checkbox"]:checked + div',
            'padding-left: ' + this.get('paddingLeft') + ';'
        );
    },

    updateView: function () {
        'use strict';
        var isChecked = this.$('input').prop('checked'),
            parentView = this.get('parentView');
        parentView.set(this.get('propertyName'), isChecked);
        return this.set('checked', isChecked);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/index.js":[function(require,module,exports){
require('./bs-icon-list-group.js');
require('./email-input.js');
require('./flip-switch.js');
require('./page-panel.js');
require('./password-input.js');
require('./regexp-input.js');
require('./split-panel-toggle.js');
require('./split-panel.js');
require('./timezone-picker-dialog.js');

},{"./bs-icon-list-group.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/bs-icon-list-group.js","./email-input.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/email-input.js","./flip-switch.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/flip-switch.js","./page-panel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/page-panel.js","./password-input.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/password-input.js","./regexp-input.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/regexp-input.js","./split-panel-toggle.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/split-panel-toggle.js","./split-panel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/split-panel.js","./timezone-picker-dialog.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/timezone-picker-dialog.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/page-panel.js":[function(require,module,exports){
/*global Vinz, Ember */

/* Component to wrap a header, footer, and div element so that the header and footer
 * are fixed and the div element has scrollable contents
 *
 * Use:
 * ```
 * {{#page-panel collapsedHeader=false collapsedFooter=false}}
 *     <header></header>
 *     <div class='scrollable'></div>
 *     <footer></footer>
 * {{/page-panel}}
 * ```
 *
 * css to allow for scrollable content:
 * ```
 * .scrollable { overflow-y: scroll !important; }
 * .page-panel > div { overflow-y: hidden; }
 * ```
 */

Vinz.PagePanel = Ember.Component.extend({
    // options
    expandedHeader: true,
    collapsedHeader: Ember.computed.not('expandedHeader'),
    expandedFooter: true,
    collapsedFooter: Ember.computed.not('expandedFooter'),
    collapsedOpacity: 0,

    // private
    header: null,
    footer: null,
    div: null,

    classNames: 'page-panel',
    transition: 'all 250ms ease-out',

    didInsertElement: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        Ember.run.scheduleOnce('afterRender', this, this.onceAfterRender);
    },

    onceAfterRender: function () {
        'use strict';
        var hh, fh;
        this.enableTransition();

        this.div = this.$('>div');
        this.header = this.$('>header');
        this.footer = this.$('>footer');

        this.headerHeight = 0;
        this.headerOffset = 0;
        this.footerHeight = 0;
        this.footerOffset = 0;

        if (this.div) {
            this.div.css({position: 'absolute', left: 0, right: 0});
        }

        if (this.header) {
            this.header.css({position: 'absolute', top: 0, left: 0, right: 0});
            this.headerHeight = this.header.height() || 0;
            this.headerOffset = (this.header.outerHeight() || 0) - this.headerHeight;
        }

        if (this.footer) {
            this.footer.css({position: 'absolute', bottom: 0, left: 0, right: 0});
            this.footerHeight = this.footer.height() || 0;
            this.footerOffset = (this.footer.outerHeight() || 0) - this.footerHeight;
        }

        if (this.header && this.get('collapsedHeader')) {
            this.prevHeaderOpacity = this.header.css('opacity');
            hh = 0;
        } else {
            hh = this.headerHeight;
        }

        if (this.footer && this.get('collapsedFooter')) {
            this.prevFooterOpacity = this.footer.css('opacity');
            fh = 0;
        } else {
            fh = this.footerHeight;
        }

        this.pageResize(hh, fh);
    },

    pageResize: function (hh, fh) {
        'use strict';
        if (this.header) { this.header.height(hh); }
        if (this.footer) { this.footer.height(fh); }
        if (hh > 0) { hh += this.headerOffset; }
        if (fh > 0) { fh += this.footerOffset; }
        if (this.div) { this.div.css({top: hh, bottom: fh}); }
    },

    applyTransition: function (transition, elements) {
        'use strict';
        elements.forEach(function (element) {
            if (element) {
                element.css({
                    '-webkit-transition': transition,
                    '-moz-transition': transition,
                    '-ms-transition': transition,
                    '-o-transition': transition,
                    'transition': transition
                });
            }
        });
    },

    enableTransition: function () {
        'use strict';
        this.applyTransition(this.get('transition'), [this.header, this.footer, this.div]);
        this.set('enabledTransition', true);
    },

    disableTransition: function () {
        'use strict';
        this.applyTransition('', [this.header, this.footer, this.div]);
        this.set('enabledTransition', false);
    },

    collapsedChanged: Ember.observer('collapsedFooter', 'collapsedHeader', function () {
        'use strict';
        var hh, fh, self = this;

        hh = this.headerHeight;
        fh = this.footerHeight;

        if (this.header) {
            if (this.get('collapsedHeader')) {
                this.prevHeaderOpacity = this.header.css('opacity');
                this.header.css('opacity', this.get('collapseOpacity'));
                hh = 0;
            } else {
                this.header.css('opacity', this.get('prevHeaderOpacity'));
                hh = this.headerHeight;
            }
        }

        if (this.footer) {
            if (this.get('collapsedFooter')) {
                this.prevFooterOpacity = this.footer.css('opacity');
                this.footer.css('opacity', this.get('collapseOpacity'));
                fh = 0;
            } else {
                this.footer.css('opacity', this.get('prevFooterOpacity'));
                fh = this.footerHeight;
            }
        }

        this.pageResize(hh, fh);

        if (!this.get('enabledTrnasition')) {
            Ember.run.next(function () { self.enableTransition(); });
        }
    })
});

Ember.Handlebars.helper('page-panel', Vinz.PagePanel);

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/password-input.js":[function(require,module,exports){
/*globals Vinz, Ember */

require('../mixins/inputValidationMixin');

Vinz.PasswordInput = Ember.TextField.extend(Vinz.InputValidationMixin, {

    didInsertElement: function () {
        'use strict';
        this.$().attr('type', 'password');
        this._super();
    },

    validateValue: function () {
        'use strict';
        var isValueEmpty = this.get('isValueEmpty'),
            isValueValid = true;
        if (this.get('isValueRequired')) {
            if (isValueEmpty) {
                isValueValid = false;
            }
        }
        if (this.get('isValueValid') !== isValueValid) {
            this.set('isValueValid', isValueValid);
        } else {
            if (this.get('wasValueEmpty') !== isValueEmpty) {
                this.set('wasValueEmpty', isValueEmpty);
                this.onValueValidityChanged();
            }
        }
    }
});

Ember.Handlebars.helper('password-input', Vinz.PasswordInput);

},{"../mixins/inputValidationMixin":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationMixin.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/regexp-input.js":[function(require,module,exports){
/*globals Vinz, Ember */

require('../mixins/inputValidationMixin');

Vinz.RegexpInputComponent = Ember.TextField.extend(Vinz.InputValidationMixin, {

    attributeBindings: ['spellcheck'],

    classNameBindings: ['hasError:has-error', 'hasSuccess:has-success', 'hasWarning:has-warning'],

    pattern: '.*',

    expression: Ember.computed('pattern', function () {
        'use strict';
        return new RegExp(this.get('pattern'));
    }),

    hasError: Ember.computed('value', function () {
        'use strict';
        var hasError = false,
            value = this.get('value');
        if (value) {
            if (this.get('expression').test(value)) {
                if (this.hadError) {
                    this.hadError = false;
                    this.set('hasSuccess', true);
                    Ember.run.later(this, function () {
                        if (!this.isDestroyed) { this.set('hasSuccess', false); }
                    }, 2000);
                }
            } else {
                this.hadError = true;
                this.set('hasSuccess', false);
                hasError = true;
            }
            if (!this.get('expression').test(value)) {
                this.hadError = true;
                this.set('hasSuccess', false);
                return true;
            }
        } else {
            hasError = this.get('isValueRequired');
        }
        return hasError;
    }),

    validateValue: function () {
        'use strict';
        var isValueEmpty = this.get('isValueEmpty'),
            isValueValid = true,
            expression = this.get('expression');
        if (this.get('isValueRequired')) {
            if (isValueEmpty) {
                isValueValid = false;
            }
        }
        if (isValueValid && expression) {
            isValueValid = expression.test(this.get('value'));
        }
        if (this.get('isValueValid') !== isValueValid) {
            this.set('isValueValid', isValueValid);
        } else if (this.get('wasValueEmpty') !== isValueEmpty) {
            this.set('wasValueEmpty', isValueEmpty);
            this.onValueValidityChanged();
        }
    }
});

Ember.Handlebars.helper('tt-textfield', Vinz.RegexpInputComponent);

},{"../mixins/inputValidationMixin":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationMixin.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/split-panel-toggle.js":[function(require,module,exports){
/*global Vinz, Ember */

/* Component to collapse the justified side of a split-panel.
 *
 * Creates a clickable div with an icon that toggles between left and right:
 * when collapsed is true:
 * ```
 * <div class='split-panel-toggle split-panel-toggle-left'><i class='fa fa-caret-right'></i></div>
 * ```
 * when collapsed is false (selected):
 * ```
 * <div class='split-panel-toggle split-panel-toggle-left selected'><i class='fa fa-caret-left'></i></div>
 * ```
 *
 * Use:
 * ```
 * {{split-panel-toggle collapsed=splitCollapsed}}
 * {{#split-panel collapsed=splitCollapsed}}
 *     <div></div>
 *     <div></div>
 * {{/split-panel}}
 * ```
 */

Vinz.SplitPanelToggle = Ember.Component.extend({
    // options
    justify: 'left',

    tag: 'label',
    classNameBindings: [':split-panel-toggle', ':unselectable', 'isLeft:split-panel-toggle-left:split-panel-toggle:right', 'collapsed::selected'],
    layout: Ember.Handlebars.compile('<span {{bind-attr class=":fa iconClass"}}></span>'),
    leftRightClass: [ 'fa-caret-left', 'fa-caret-right' ],

    didInsertElement: function () {
        'use strict';
        this._super();
    },

    click: function () {
        'use strict';
        this.set('collapsed', !this.get('collapsed'));
    },

    isLeft: Ember.computed('justify', function () {
        'use strict';
        return (this.get('justify') === 'left');
    }),

    iconClass: Ember.computed('justify', 'collapsed', function () {
        'use strict';
        var left = this.get('justify') === 'left';
        if (this.get('collapsed')) { left = !left; }
        return this.leftRightClass[left ? 0 : 1];
    })
});
Ember.Handlebars.helper('split-panel-toggle', Vinz.SplitPanelToggle);

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/split-panel.js":[function(require,module,exports){
/*globals Vinz, document, Ember */

/* Component to wrap a header, footer, and div element so that the header and footer
 * are fixed and the div element has scrollable contents
 *
 * Optionally specify wich side dictates width and collapses (default is left expanded).
 * Collapsed or expanded can be bound to a value.
 *
 * ```
 * {{#split-panel justify='left' collapsed=value}}
 *     <div class='scrollable'></div>
 *     <div class='scrollable'></div>
 * {{/split-panel}}
 * ```
 *
 * The class 'unselectable' is used to avoid selecting text while resizing:
 * ```
 * .unselectable {
 *     user-select: none;
 *     -webkit-user-select: none;
 *     -khtml-user-select: none;
 *     -moz-user-select: none;
 *     -o-user-select: none;
 * }
 * ```
 *
 * css to make areas scrollable or not:
 * ```
 * .scrollable { overflow-y: scroll !important; }
 * .split-panel > div { overflow-y: hidden; }
 * ```
 */

Vinz.SplitPanel = Ember.Component.extend({
    // options
    min: 0,
    max: Number.MAX_VALUE,
    justify: 'left',
    expanded: true,
    collapsed: Ember.computed.not('expanded'),
    collapseOpacity: 0,

    // private
    panes: null,
    bar: null,
    left: null,
    right: null,
    barEvent: null,
    offset: 0,
    origWidth: 0,
    deltaDir: 1,

    classNames: 'split-panel',
    transition: 'all 250ms ease-out',

    didInsertElement: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        this.deltaDir = (this.justify === 'left') ? 1 : -1;
        Ember.run.scheduleOnce('afterRender', this, this.onceAfterRender);
    },

    onceAfterRender: function () {
        'use strict';
        var width;

        this.panes = this.$('>div');
        this.panes.css({position: 'absolute', '-moz-outline-style': 'none'});

        this.left = this.$(this.panes[0]);
        this.right = this.$(this.panes[1]);
        this.bar = this.$(this.panes[2] || '<div style="width:10px;margin-' + this.justify + ':-5px"></div>').insertAfter(this.right);

        this.enableTransition();

        this.left.css({left: 0, top: 0, bottom: 0});
        this.right.css({right: 0, top: 0, bottom: 0});

        this.bar.addClass('split-bar split-bar-' + this.justify);
        this.bar.attr({ unselectable: 'on' });
        this.bar.css({ position: 'absolute', cursor: 'ew-resize', top: 0, bottom: 0 });
        this.bar.on('mousedown', this, this.barMouseDown);

        width = this[this.justify].width();
        this.offset = this[this.justify].outerWidth(true) - width;

        if (this.get('collapsed')) {
            this.set('prevOpacity', this[this.justify].css('opacity'));
            this.set('prevWidth', width);
            this.bar.hide();
            this.splitResize(0, true);
        } else {
            this.splitResize(width);
        }
    },

    barMouseDown: function (event) {
        'use strict';
        var that = event.data;
        that.fromX = event.pageX;
        that.origWidth = that[that.justify].width();

        that.disableTransition();

        that.bar.addClass('active');
        that.$(document.body).addClass('unselectable');
        that.$(document).on('mousemove', that, that.barMouseMove).on('mouseup', that, that.barMouseUp);
    },

    barMouseMove: function (event) {
        'use strict';
        var that = event.data,
            delta = event.pageX - that.fromX,
            width = that.origWidth + (delta * that.deltaDir);
        that.splitResize(width);
    },

    barMouseUp: function (event) {
        'use strict';
        var that = event.data;

        that.enableTransition();

        that.bar.removeClass('active');
        that.$(document.body).removeClass('unselectable');
        that.$(document).off('mousemove', that.barMouseMove).off('mouseup', that.barMouseUp);
    },

    splitResize: function (width, ignoreLimits) {
        'use strict';
        var pos;

        if (!ignoreLimits) {
            width = Math.max(Math.min(width, this.get('max')), this.get('min'));
            this[this.justify].removeClass('collapsed');
        } else {
            this[this.justify].addClass('collapsed');
        }
        this[this.justify].width(width);

        if (width === 0) {
            pos = 0;
        } else {
            pos = width + this.offset;
        }

        if (this.justify === 'left') {
            this.right.css({left: pos + 'px'});
            this.bar.css({left: pos + 'px'});
        } else {
            this.left.css({right: pos + 'px'});
            this.bar.css({right: pos + 'px'});
        }
    },

    applyTransition: function (transition, elements) {
        'use strict';
        elements.forEach(function (element) {
            element.css({
                '-webkit-transition': transition,
                '-moz-transition': transition,
                '-ms-transition': transition,
                '-o-transition': transition,
                'transition': transition
            });
        });
    },

    enableTransition: function () {
        'use strict';
        this.applyTransition(this.get('transition'), [this.left, this.right, this.bar]);
        this.set('enabledTransition', true);
    },

    disableTransition: function () {
        'use strict';
        this.applyTransition('', [this.left, this.right, this.bar]);
        this.set('enabledTransition', false);
    },

    collapsedChanged: Ember.observer('collapsed', function () {
        'use strict';
        var that = this;
        if (this.get('collapsed')) {
            this.prevWidth = this[this.justify].width();
            this.prevOpacity = this[this.justify].css('opacity');
            this[this.justify].css('opacity', this.get('collapseOpacity'));
            this[this.justify].removeClass('collapsed');
            this.bar.hide();
            this.splitResize(0, true);
        } else {
            this[this.justify].css('opacity', this.prevOpacity);
            this[this.justify].addClass('collapsed');
            this.bar.show();
            this.splitResize(this.prevWidth, false);
        }
        if (!this.get('enabledTransition')) {
            Ember.run.next(function () { that.enableTransition(); });
        }
    })
});

Ember.Handlebars.helper('split-panel', Vinz.SplitPanel);

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/components/timezone-picker-dialog.js":[function(require,module,exports){
/*globals Vinz, Ember, moment*/

Vinz.TimezonePickerDialogComponent = Ember.Component.extend({

    needs: ['timezone'],

    timezoneController : null, // needs to be set in referencing view or template

    actions: {
        hideDialog: function () {
            'use strict';
            this.get('timezoneController').send('hideDialog', this.get('timezonePickerDialogName'));
        },

        resetMap: function () {
            'use strict';
            this.get('timezoneController').send('resetMap', this.get('mapPanelId'));
        },

        selectTimezone: function () {
            'use strict';
            var me = this, selName = this.get("_selectedTimezoneName"), selOlson = this.get("_selectedTimezoneOlson");
            me.set("selectedTimezoneName", selName);
            me.set("selectedTimezoneOlson", selOlson);
            this.get('timezoneController').send('hideDialog', me.get('timezonePickerDialogName'));
        }
    },

    currentTimeDisplay: null,

    hoverTimeDisplay: null,

    mapPanelId: 'map-panel-id',

    selectedTimeDisplay: null,

    selectedTimezoneName: null,

    selectedTimezoneOlson: null,

    timezonePickerDialogName: 'timezonePickerDialog',

    timezonePickerButtons: [
        Ember.Object.create({ title: 'Reset Map', clicked: 'resetMap' }),
        Ember.Object.create({ title: 'Select Timezone', clicked: 'selectTimezone' }),
        Ember.Object.create({ title: 'Cancel', clicked: 'hideDialog' })
    ],

    hoverTimezoneSelected: Ember.observer('timezoneController.hoverTimezone', function () {
        'use strict';
        var newTime, olsonName, tzName;
        olsonName = this.get('timezoneController.hoverOlsonTimezone');
        tzName = this.get('timezoneController.hoverTimezone');
        if (!Ember.isNone(olsonName) && !Ember.isNone(tzName)) {
            newTime = moment().tz(olsonName).format('hh:mm:ss A') + ' ' + tzName;
            this.set('hoverTimeDisplay', newTime);
        } else {
            this.set('hoverTimeDisplay', null);
        }
    }),

    init: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        this.set('timezoneController.initialOlsonTimezone', this.get('selectedTimezoneOlson'));
    },

    selectedTimezone: Ember.observer('timezoneController.selectedTimezone', function () {
        'use strict';
        var newTime, olsonName, tzName;
        olsonName = this.get('timezoneController.selectedOlsonTimezone');
        tzName = this.get('timezoneController.selectedTimezone');
        if (!Ember.isNone(olsonName) && !Ember.isNone(tzName)) {
            newTime = moment().tz(olsonName).format('hh:mm:ssa') + ' ' + tzName + ' ( ' + olsonName + ' )';
            this.set('selectedTimeDisplay', newTime);
        } else {
            this.set('selectedTimeDisplay', null);
        }
        this.set('_selectedTimezoneOlson', olsonName);
        this.set('_selectedTimezoneName', tzName);
    }),

    selectedTimezoneChanged: Ember.computed('timezoneController.selectedTimezoneName', 'timezoneController.selectedTimezoneOlsonName', function () {
        'use strict';
        this.set('_selectedTimezoneName', this.get('timezoneController.selectedTimezoneName'));
        this.set('_selectedTimezoneOlson', this.get('timezoneController.selectedTimezoneOlsonName'));
    }),

    updateTimeClock: Ember.observer('timezoneController.timeTick', function () {
        'use strict';
        var me = this;
        me.selectedTimezone();
        this.set('currentTimeDisplay', this.get('timezoneController.currentBrowserTime'));
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/aboutController.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.AboutController = Ember.Controller.extend({

    init: function () {
        'use strict';
        var self = this, modules = this.get('env.modules');
        this._super();

        modules.forEach(function (module) {
            var proxyAddress, attributeName, promise;

            proxyAddress = self.get('env.' + module + 'ProxyAddress');
            attributeName = module + 'About';

            promise = Ember.$.getJSON(proxyAddress + '/app/status').then(function (json) {
                console.log(JSON.stringify(json));
                self.set(attributeName, json);
            }, function (err) {
                console.log(err);
                self.set(attributeName, {AppName: module + ' - ERROR: Unable to connect'});
            });
            self.set(attributeName, promise);
        });
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/applicationNavController.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.ApplicationNavController = Ember.Controller.extend({
    actions: {
        changeOrganization: function (org) {
            'use strict';
            this.session.set('currentOrganization', org);
            this.set('currentOrganization', org);
        }
    },

    currentIdentity: Ember.computed.alias('session.identity'),

    currentOrganization: null,

    showOrganizationSelection: false,

    showClock: Ember.computed(function() {
        'use strict';
        return Ember.$.cookie('display.clock') === 'true';
    }),

    changeOrganization: function (org) {
        'use strict';
        this.session.set('currentOrganization', org);
        this.set('currentOrganization', org);
    },

    currentIdentityChanged: Ember.observer('currentIdentity', function () {
        'use strict';
        var currentOrganization = this.get('currentOrganization'),
            organizations,
            that = this;
        that.set('showOrganizationSelection', false);
        // Use the first organization as the default organization
        if (!currentOrganization) {
            organizations = this.get('currentIdentity.organizations');
            if (organizations !== null && organizations !== undefined && typeof organizations.then === 'function') {
                organizations.then(function (value) {
                    if (Ember.isArray(value) && value.get('length') > 0) {
                        currentOrganization = value.get('firstObject');
                        that.session.set('currentOrganization', currentOrganization);
                        that.set('currentOrganization', currentOrganization);
                        if (value.get('length') > 1) {
                            that.set('showOrganizationSelection', true);
                        }
                    }
                });
            } else if (organizations !== null && organizations !== undefined && organizations.then === undefined) {
                currentOrganization = organizations[0];
                this.session.set('currentOrganization', currentOrganization);
                this.set('currentOrganization', currentOrganization);
                if (organizations.length > 1) {
                    this.set('showOrganizationSelection', true);
                }
            }
        }
    }),

    has: function (accessCondition) {
        'use strict';
        var identity = this.session.isAuthenticated ? this.session.get('identity') : null;
        return identity ? identity.hasAccessCondition(accessCondition) : false;
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/authorizationControllers.js":[function(require,module,exports){
/*global Vinz, Ember */

require('./searchController');
require('./crudController');
require('../util/startsWith');

if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (prefix) {
        'use strict';
        return this.slice(0, prefix.length) === prefix;
    };
}

Vinz.AuthorizationController = Vinz.SearchController.extend({
    modelType: 'authorization',
    showRoute: 'authorization.show',
    listRoute: 'authorization'
});

/**
 * Groups access conditions together for display in a user interface.
 * The list of access conditions should be filtered by the licensed
 * access conditions before display to the user.
 * <p/>
 * Used by vinz-ui on AuthorizationsActivity
 * Used by vinz-keygen-ui on FeatureActivity
 */
Vinz.AccessConditionGroup = Ember.Object.extend({
    selectionCount: 0,
    accessConditions: [],
    prefixes: [],
    text: null
});

Vinz.AuthorizationCrudController = Vinz.CrudController.extend({

    actions: {
        toggleSelection: function (accessConditionSelection) {
            'use strict';
            var selected = accessConditionSelection.get('selected');
            this.changeAccessConditionSelectionState(accessConditionSelection, !selected);
        },

        selectOrDeselectAll: function (accessConditionGroup, isSelected) {
            'use strict';
            var self = this;

            accessConditionGroup.accessConditions.forEach(function (accessConditionSelection) {
                self.changeAccessConditionSelectionState(accessConditionSelection, isSelected);
            });
        }
    },

    changeAccessConditionSelectionState: function (accessConditionSelection, isSelected) {
        'use strict';
        var selectedAccessConditions = this.content.get('accessConditions'),
            index;
        if (!selectedAccessConditions) {
            this.content.set('accessConditions', []);
            selectedAccessConditions = this.content.get('accessConditions');
        }
        //toggle the selection
        accessConditionSelection.set('selected', isSelected);
        if (accessConditionSelection.get('selected')) {

            if (selectedAccessConditions.indexOf(accessConditionSelection.accessCondition.id) === -1) {
                selectedAccessConditions.push(accessConditionSelection.accessCondition.id);
            }
        } else {     //remove from datastore
            index = Ember.$.inArray(accessConditionSelection.accessCondition.id, selectedAccessConditions);
            if (index >= 0) {
                selectedAccessConditions.splice(index, 1);
            }
        }
        this.content.notifyPropertyChange('accessConditions');
    },

    createRoute: 'authorization.create',

    editRoute: 'authorization.edit',

    mainRoute: 'authorization',

    modelName: 'authorization',

    showRoute: 'authorization.show',


    manageAccessCondition: 'VINZ_AUTHORIZATION_MANAGE',

    authorizationHasAccessCondition: function (accessCondition) {
        'use strict';
        var isSelected = false, accessConditions = this.get('content.accessConditions');

        if (accessConditions) {
            accessConditions.forEach(function (item) {
                if (item === accessCondition) {
                    isSelected = true;
                }
            });
        }
        return isSelected;
    },

    isAccessConditionInGroup: function (group, accessCondition) {
        'use strict';
        var isInGroup = false;
        this.accessGroupHash[group].get('prefixes').forEach(function (prefix) {
            accessCondition.startsWith(prefix);
            if (accessCondition.startsWith(prefix)) {
                isInGroup = true;
            }
        });
        return isInGroup;
    },

    accessConditionGroups: Ember.computed('accessConditions.[]', 'content.accessConditions', function () {
        'use strict';
        var prop, result = [], accessConditionSelection;

        this.get('accessConditions').forEach(function (item) {
            var group;
            for (group in this.accessGroupHash) {
                if (this.accessGroupHash.hasOwnProperty(group)) {
                    if (this.isAccessConditionInGroup(group, item.get('id'))) {
                        accessConditionSelection = Vinz.AccessConditionSelection.create({
                            selected: this.authorizationHasAccessCondition(item.get('id')),
                            accessCondition: item
                        });

                        if (accessConditionSelection.selected) {
                            this.accessGroupHash[group].set('accessConditions.selectionCount',
                                this.accessGroupHash[group].get('accessConditions.selectionCount') + 1);
                        }
                        this.accessGroupHash[group].get('accessConditions').push(accessConditionSelection);
                    }
                }
            }
        }.bind(this));

        for (prop in this.accessGroupHash) {
            if (this.accessGroupHash.hasOwnProperty(prop)) {
                if (this.accessGroupHash[prop].get('accessConditions').length > 0) {
                    result.push(this.accessGroupHash[prop]);
                }
            }
        }
        return result;
    }),

    accessGroupHash: {
        ASSET_MANAGEMENT: Vinz.AccessConditionGroup.create({ text: 'Asset Management', prefixes: ['METAMORE_'] }),
        ALTERNATE_CONTENT: Vinz.AccessConditionGroup.create({ text: 'Alternate Content', prefixes: ['ACS_'] }),
        OPPORTUNITY_MANAGEMENT: Vinz.AccessConditionGroup.create({ text: 'Opportunity Management', prefixes: ['SPOTBUILDER_'] }),
        EXECUTION: Vinz.AccessConditionGroup.create({ text: 'Execution', prefixes: ['SPOTLINK_', 'ESP_'] }),
        KEYGEN: Vinz.AccessConditionGroup.create({ text: 'License Generation', prefixes: ['KEYGEN_'] }),
        VINZ: Vinz.AccessConditionGroup.create({ text: 'Administration', prefixes: ['VINZ_'] }),
        OPLOG: Vinz.AccessConditionGroup.create({ text: 'Operational Logs', prefixes: ['OPLOG_'] }),
        VEX: Vinz.AccessConditionGroup.create({ text: 'VEX', prefixes: ['VEX_'] }),
        EMP: Vinz.AccessConditionGroup.create({ text: 'EMP', prefixes: ['EMP_'] })
    },

    accessConditions: Ember.computed(function () {
        'use strict';
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['id'],
            content: this.get('store').find('accessCondition', {})
        });
    })
});


Vinz.AuthorizationCreateController = Vinz.AuthorizationCrudController.extend({

    navListController: Ember.computed.alias('controllers.authorization'),

    needs: 'authorization',

    title: 'New Authorization',

    cancel: function () {
        'use strict';
        this.get('model').rollback();
        this.get('navListController').set('selectedItem', null);
        this.transitionToRoute('authorization');
    }
});



Vinz.AccessConditionSelection = Ember.Object.extend({

    accessCondition: null,

    selected: false,

    buttonType: Ember.computed('selected', function () {
        'use strict';
        return this.get('selected') ? 'primary' : 'default';
    })
});

Vinz.AuthorizationEditController = Vinz.AuthorizationCrudController.extend({
    needs: 'authorization',
    navListController: Ember.computed.alias('controllers.authorization'),
    title: 'Edit Authorization',
    transition: null,

    relationshipsChanged: Ember.observer('model.accessConditions.[]', function () {
        'use strict';
        if (this.get('isEditing')) {
            this.content.send('becomeDirty');
        }
    })

});


Vinz.AuthorizationIndexController = Vinz.AuthorizationCrudController.extend({
    navListController: Ember.computed.alias('controllers.authorization'),
    needs: 'authorization'
});


Vinz.AuthorizationShowController = Vinz.AuthorizationCrudController.extend({
    navListController: Ember.computed.alias('controllers.authorization'),
    needs: 'authorization',
    title: 'View Authorization',
    isNonSystemManaged: Ember.computed('model.systemManaged', function () {
        'use strict';
        if (this.get('model') && this.get('model').get('systemManaged') === true) {
            return false;
        }
        return true;
    })
});



},{"../util/startsWith":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/startsWith.js","./crudController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/crudController.js","./searchController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/searchController.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/authorizedNavController.js":[function(require,module,exports){
/*global Vinz, Ember */

/*
 A controller that filters a hierarchy (for drop-down menus) of link objects down to only the list that
 an identity has access to.

 Provide the component the link hierarchy, an identity with a hasAccessCondition() method, and optionally a router
 that to validate the link routes with the hasRoute() method. If no route is set, the component will use
 App.Router.router to validate routes.

 The hierarchy is an array of objects that can be links or dropdowns:
 * link properties are: label, route, and optionally, access
 * dropdown properties are: label, and links where links is an array of link, divider, or header objects
 * divider is an object with divider=true
 * header is an object with a header property

 The access property is either a single access condition, or an array of access conditions, or a function. If the
 access property is an array, then access will be granted if any of the access conditions are authorized. If the
 access property is a function it will be passed an identity to use.

 For example:
 ```
 links: [
 { label: 'Menu Item 1', route: 'route1', access: 'ACCESS1' },
 {
 label: 'Dropdown',
 links: [
 { label: 'Menu Item 2', route: 'route2', access: 'ACCESS2' },
 { divider: true },
 { label: 'Menu Item 3', route: 'route3', access: 'ACCESS3' },
 { divider: true },
 { header: 'Admin' },
 { label: 'Menu Item 4', route: 'route4', access: 'ACCESS4' },
 { divider: true, header: false },
 { label: 'Menu Item 5', route: 'route4', access: 'ACCESS5' },
 ]
 },
 ]
 ```

 Divider objects will not be included if, after filtering, it is the first or last item in a dropdown or
 immediately follows another divider.

 Header objects will be included if one of the links that follows (through a divider with header set to false)
 is added to the dropdown.

 A dropdown can set the user property to true instead of providing a label; the view may display the
 current user name (using the userName property), or display an icon instead of a label.
 */

Vinz.AuthorizedNavController = Ember.Controller.extend({
    userName: Ember.computed.alias('session.identity.name'),

    authorizedLinks: Ember.computed('session.identity', 'content', 'router', function() {
        'use strict';
        var identity = this.get('session.identity'), links = this.get('model'), result = [], router = this.container.lookup('router:main'), self = this;

        Ember.assert('Model is expected to be an array of links.', (links instanceof Array));

        links.forEach(function(link) {
            var anyChildLinks, childLinks = Ember.get(link, 'links'), newChildLinks, newLink = Ember.Object.create(link), previousDivider, previousHeader;
            if (childLinks) {
                newChildLinks = [];
                previousDivider = null;
                previousHeader = null;
                newLink.set('links', newChildLinks);
                childLinks.forEach(function(childLink) {
                    var accessOk;
                    if (childLink.divider) {
                        previousDivider = childLink;
                        if (childLink.header === false) {
                            previousHeader = null;
                        }
                    }
                    else if (childLink.header) {
                        previousHeader = childLink;
                    }
                    else {
                        accessOk = self.hasAccess(identity, childLink.access);
                        if (self.hasRoute(router, childLink.route)) {
                            if (accessOk) {
                                if (previousDivider) {
                                    newChildLinks.push(previousDivider);
                                    previousDivider = null;
                                }
                                if (previousHeader) {
                                    newChildLinks.push(previousHeader);
                                    previousHeader = null;
                                }
                                newChildLinks.push(childLink);
                                anyChildLinks = true;
                            }
                        }
                        else {
                            Ember.Logger.warn('Unknown route ' + childLink.route, this);
                        }
                        if (!accessOk) {
                            Ember.Logger.warn('Access denied ' + childLink.access, this);
                        }
                    }
                });
                if (anyChildLinks) {
                    result.push(newLink);
                }
            }
            else {
                result.push(newLink);
            }
        });
        return result;
    }),

    hasAccess: function(identity, access) {
        'use strict';
        var i, hasAccess = false;
        if (identity && typeof access === 'function') {
            hasAccess = access(identity);
        }
        else if (identity && access instanceof Array) {
            for (i = 0; i < access.length; i += 1) {
                if (this.hasAccessCondition(access[i])) {
                    hasAccess = true;
                    break;
                }
            }
        }
        else {
            hasAccess = !access || (identity && identity.hasAccessCondition(access));
        }
        return hasAccess;
    },

    hasRoute: function(router, name) {
        'use strict';
        return (!router || router.hasRoute(name) || router.hasRoute(name + '.index'));
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/crudController.js":[function(require,module,exports){
/*globals Vinz, Ember*/

/**
 * Base implementation of a controller that supports user interface views for creating, editing (updating), and deleting persistent objects.
 * @type {Ember.ObjectController}
 *
 * '''
 * Override the following properties when extending this class
 *   * createRoute - The name of the route for creating a new instance of a persistent object: for example, 'identity.create'.
 *   * editRoute - The name of the route for editing (updating) a persistent object: for example, 'identity.edit'.
 *   * modelName - the name of the type persistent object to create, edit, or delete: for example, 'identity'.
 *   * showRoute - The name of the route for displaying a persistent object's properties: for example, 'identity.show'.
 *
 * In addition, override the following methods to handle events.
 *   * onCancelEdit - Invoked when the user cancel's editing a persistent thing's properties.
 * '''
 */
Vinz.CrudController = Ember.ObjectController.extend({

    actions: {
        cancel: function () {
            'use strict';
            var model = this.get('model');
            this.set('isEditing', false);
            if (model.id !== null) {
                model.rollback();
            }
            this.get('navListController').send('cancel');
            if (this.onCancelEdit) {
                this.onCancelEdit();
            }
        },

        create: function () {
            'use strict';
            var createRoute = this.get('createRoute');
            this.get('navListController').set('selectedItem', null);
            if (createRoute) {
                this.transitionToRoute(createRoute);
            }
        },

        // TODO - delete is a JavaScript keyword, rename this method!
        delete: function () {
            'use strict';
            Ember.Widgets.ModalComponent.popup({
                headerText: 'Confirm Delete',
                targetObject: this,
                confirmText: 'Yes',
                cancelText: 'No',
                confirm: 'modalDeleteConfirm',
                cancel: 'modalDeleteCancel',
                enforceModality: true,
                backdrop: true,
                isShowing: true,
                content: 'Are you sure you want to delete this record?'
            });
        },

        edit: function () {
            'use strict';
            var editRoute = this.get('editRoute'),
                modelName = this.get('modelName');
            this.set('isEditing', true);
            this.transitionToRoute(editRoute, this.store.find(modelName, this.get('model').id));
        },

        save: function () {
            'use strict';
            var self = this;
            this.set('isEditing', false);
            self.get('model').save().then(
                function () {
                    var navListController = self.get('navListController');
                    navListController.notifyPropertyChange('query');
                    navListController.set('selectedItem', self.get('model'));
                    self.transitionToRoute(self.get('showRoute'), self.get('model'));
                },
                function (error) {
                    var messages = [],
                            msgs = [];
                    if (error.responseJSON) {
                        messages = messages.concat(error.responseJSON.messages || [], error.responseJSON.fieldErrors ? [JSON.stringify(error.responseJSON.fieldErrors)] : []);
                    } else {
                        messages = [error.responseText];
                    }
                    messages.forEach(function (mItem) {
                        if (mItem) {
                            msgs.push(mItem);
                        }
                    });
                    self.set('messages', msgs);
                    self.set('isEditing', true);
                }
        );
        },

        showTransitionModal: function (transition) {
            'use strict';
            this.set('transition', transition);
            this.get('transition').abort();
            Ember.Widgets.ModalComponent.popup({
                headerText: 'Confirm Navigation',
                targetObject: this,
                confirmText: 'Stay',
                cancelText: 'Leave',
                confirm: 'modalConfirm',
                cancel: 'modalCancel',
                enforceModality: true,
                backdrop: true,
                isShowing: true,
                content: 'You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?'
            });
        },

        modalConfirm: function () {
            'use strict';
            var navListController = this.get('navListController');
            //this.get('transition').abort();
            navListController.set('selectedItemReset', this.content);
            navListController.notifyPropertyChange('selectedItemReset');
        },

        modalCancel: function () {
            'use strict';
            this.set('isEditing', false);
            this.content.rollback();
            this.get('transition').retry();
        },

        modalDeleteConfirm: function () {
            'use strict';
            var navListController = this.get('navListController'),
                self = this;
            this.get('model').destroyRecord().then(
                function () {
                    navListController.set('selectedItemReset', null);
                    navListController.notifyPropertyChange('selectedItemReset');
                    navListController.notifyPropertyChange('query');
                    self.set('messages', []);
                    Vinz.Logger.debug('record destroyed', self);
                },
                function (error) {
                    navListController.set('selectedItemReset', null);
                    navListController.notifyPropertyChange('selectedItemReset');
                    navListController.notifyPropertyChange('query');
                    self.set('messages', []);
                    Vinz.Logger.warn(JSON.stringify(error), self);
                }
            );
        },

        modalDeleteCancel: function () {
            'use strict';
            //do Nothing
            return;
        }
    },

    createRoute: null,

    editRoute: null,

    /**
     * {Boolean}
     */
    isEditing: false,

    manageAccessCondition: null,  //'VINZ_IDENTITY_MANAGE',

    messages: null,

    modelName: null,

    showRoute: null,

    hasManageAccessCondition: Ember.computed(function () {
        'use strict';
        var identity = this.session.isAuthenticated ? this.session.get('identity') : null;
        return identity ? identity.hasAccessCondition(this.manageAccessCondition) : false;
    }),

    isDirty: Ember.computed.alias('content.isDirty'),

    isManageable: Ember.computed('hasManageAccessCondition', 'isOwner', function () {
        'use strict';
        return this.get('isOwner') || this.get('hasManageAccessCondition');
    }),

    isNotDirty: Ember.computed.not('isDirty'),

    isNotManageable: Ember.computed.not('isManageable'),

    isOwner: Ember.computed('content.organizationId', 'session.currentOrganization.id', function () {
        'use strict';
        var contextOrgId =  this.session.get('currentOrganization.id'),
            entityOrgId = this.get('content.organizationId');
        return contextOrgId === entityOrgId;
    })
});


},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/currentTimeController.js":[function(require,module,exports){
/*global Vinz, Ember, location, moment, jstz */
/*jslint unparam:true */

Vinz.NavTimeZone = Ember.Object.extend({
    timeFormat: 'ddd h:mm:ss a z',
    timezone: null,
    currentTime: null,
    isSelected: true,

    timezoneName: Ember.computed('timezone', function () {
        'use strict';
        var timezone = this.get('timezone');
        return timezone ? timezone.replace(/_/g,' ') : null;
    }),

    displayTime: Ember.computed('currentTime', 'timezone', 'timeFormat', function () {
        'use strict';
        var currentTime = this.get('currentTime') || 0,
            timezone = this.get('timezone') || 'Etc/UTC';
        return moment(currentTime).tz(timezone).format(this.get('timeFormat'));
    })
});

Vinz.CurrentTimeController = Ember.Controller.extend({

    actions: {
        startTimers: function () {
            'use strict';
            this.tick();
            this.tock();
        },

        stopTimers: function () {
            'use strict';
            clearTimeout(this.tickTimer);
            clearTimeout(this.tockTimer);
        },

        updateCurrentTime: function () {
            'use strict';
            var offset = this.get('serverTimeOffset'),
                now = new Date().getTime();
            this.set('currentTime', new Date(now + offset));
        },

        updateServerTimeOffset: function () {
            'use strict';
            var self = this,
                host = this.get('proxyAddress'),
                sendTime = moment();

            Ember.$.getJSON(host + '/app/status', function (json) {
                var now = moment(), serverTime, delay, offset;
                if (json.CurrentDateTime !== undefined) {
                    serverTime = moment(json.CurrentDateTime, "YYYY-MM-DD'T'HH:mm:ss.SSS'Z'");
                    if (serverTime.isValid()) {
                        delay = now.diff(sendTime);
                        offset = now.diff(serverTime);
                        self.set('serverTimeOffset', offset - delay / 2);
                    }
                }
            });
        },

        selectTimezone: function (selectedTz) {
            'use strict';
            this.set('timezone', selectedTz.get('timezone'));
            this.get('displayTzList').forEach(function (item) {
                item.set('isSelected', item === selectedTz);
            });
        }
    },

    proxyAddress: Ember.computed.alias('env.vinzProxyAddress'),
    currentTime: new Date(),
    serverTimeOffset: 0,
    timeFormat: 'ddd h:mm:ss a z',

    displayTime: Ember.computed('currentTime', 'timezone', 'timeFormat', function () {
        'use strict';
        var currentTime = this.get('currentTime'),
            timezone = this.get('timezone') || 'Etc/UTC';
        return moment(currentTime).tz(timezone).format(this.get('timeFormat'));
    }),

    timezone: Ember.computed(function (key, value, previousValue) {
        'use strict';
        var timezone;
        // setter
        if (arguments.length > 1) {
            if (!Ember.isNone(value)) {
                Ember.$.cookie('user.timezone', value, {expires: 999, path: '/'});
            }
        }

        // getter
        timezone = Ember.$.cookie('user.timezone');
        if (!timezone) {
            timezone = jstz.determine().name();
        }
        return timezone;
    }),

    timezoneName: Ember.computed('timezone', function () {
        'use strict';
        var timezone = this.get('timezone');
        return timezone ? timezone.replace(/_/g,' ') : null;
    }),

    tzList: Ember.computed(function () {
        'use strict';
        var tzList = [], tzs = Ember.$.cookie('display.clock.tzs');
        if (Ember.isNone(tzs) === false && tzs !== '') {
            tzList = tzs.split(';');
        }
        return tzList;
    }),

    displayTzList: Ember.computed('tzList', 'selectedTimeZone', function () {
        'use strict';
        var index,
            displayTzList = [],
            tzList = this.get('tzList'),
            selectedTimezone = this.get('timezone');

        if (Ember.isEmpty(tzList) === false) {
            for (index = 0; index < tzList.length; index = index + 1) {
                if (displayTzList.contains(tzList[index]) === false && Ember.isNone(tzList[index]) === false) {
                    displayTzList.push(Vinz.NavTimeZone.create({
                        timezone: tzList[index],
                        isSelected: tzList[index] === selectedTimezone
                    }));
                }
            }
        }
        return displayTzList;
    }),

    onCurrentTimeChange: Ember.observer('currentTime', 'displayTzList', function () {
        'use strict';
        var currentTime = this.get('currentTime'),
            displayTzList = this.get('displayTzList');
        displayTzList.forEach(function (item) {
            item.set('currentTime', currentTime);
        });
    }),

    tick: function () {
        'use strict';
        var oneSecond = 1000,
            self = this;
        this.send('updateCurrentTime');
        this.tickTimer = setTimeout(function (){ self.tick(); }, oneSecond);
    },

    tock: function () {
        'use strict';
        var fiveMinutes = 1000 * 60 * 5,
            self = this;
        this.send('updateServerTimeOffset');
        this.tockTimer = setTimeout(function (){ self.tock(); }, fiveMinutes);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/identityControllers.js":[function(require,module,exports){
/*globals Vinz, clearTimeout, Ember, setTimeout*/

require('./crudController');
require("./searchController");

Vinz.IdentityController = Vinz.SearchController.extend({

    listRoute: 'identity',

    modelType: 'identity',

    showRoute: 'identity.show'
});

Vinz.IdentityCrudController = Vinz.CrudController.extend({
    needs: 'timezone',

    actions: {
        showTimezoneDialog: function () {
            'use strict';
            this.set('controllers.timezone.loaded', null);
            this.set('selectedTimezone', this.get('model').get('timezone'));
            this.get('controllers.timezone').showDialog('i-tz-panel', 'i-timezone-dialog', this.get('selectedTimezone'));
        }
    },

    authorizationsQuery: '',

    authorizationsQueryDelayTimer: null,

    createRoute: 'identity.create',

    editRoute: 'identity.edit',

    modelName: 'identity',

    organizationsQuery: '',

    organizationsQueryDelayTimer: null,

    selectedTimezone: null,

    showRoute: 'identity.show',

    manageAccessCondition: 'VINZ_IDENTITY_MANAGE',

    authorizations: Ember.computed(function () {
        'use strict';
        return this.get('store').find('authorization', { o: this.session.get('currentOrganization').id, q: this.authorizationsQuery, s: 'name', d: false, pageIndex: 0, pageSize: 100000 });
    }),

    authorizationsQueryChanged: Ember.observer('authorizationsQuery', function () {
        'use strict';
        var self = this;
        if (this.get('authorizationsQueryDelayTimer')) {
            clearTimeout(this.get('authorizationsQueryDelayTimer'));
        }
        this.set('authorizationsQueryDelayTimer', setTimeout(function () {
            self.notifyPropertyChange('authorizations');
        }, 400));
    }),

    currentTimezone: Ember.computed('model.timezone', function () {
        'use strict';
        var tz = this.get('model').get('timezone');
        if (Ember.isNone(tz)) {
            tz = this.get('controllers.timezone.currentOlsonTimezone');
        }
        return this.get('controllers.timezone').getTimezoneName(tz) + ' ( ' + tz + ' )';
    }),

    organizations: Ember.computed(function () {
        'use strict';
        return this.get('store').find('Organization', { o:  this.session.get("currentOrganization").id, q: this.organizationsQuery, s: 'name', d: false, pageIndex: 0, pageSize: 100000 });
    }),

    organizationsQueryChanged: Ember.observer('organizationsQuery', function () {
        'use strict';
        var self = this;
        if (this.get('organizationsQueryDelayTimer')) {
            clearTimeout(this.get('organizationsQueryDelayTimer'));
        }
        this.set('organizationsQueryDelayTimer', setTimeout(function () {
            self.notifyPropertyChange('organizations');
        }, 400));
    }),

    timezoneSelected: Ember.observer('selectedTimezone', function () {
        'use strict';
        this.get('model').set('timezone', this.get('selectedTimezone'));
    })
});

Vinz.IdentityCreateController = Vinz.IdentityCrudController.extend({

    navListController: Ember.computed.alias('controllers.identity'),

    needs: 'identity',

    cancel: function () {
        'use strict';
        this.get('model').rollback();
        this.get('navListController').set('selectedItem', null);
        this.transitionToRoute('identity');
    }
});

Vinz.IdentityEditController = Vinz.IdentityCrudController.extend({

    navListController: Ember.computed.alias('controllers.identity'),

    needs: 'identity',

    transition: null,

    relationshipsChanged: Ember.observer('model.organizations.[]', 'model.authorizations.[]', function () {
        'use strict';
        if (this.get('isEditing')) {
            this.content.send('becomeDirty');
        }
    })
});

Vinz.IdentityIndexController = Vinz.IdentityCrudController.extend({

    navListController: Ember.computed.alias('controllers.identity'),

    needs: 'identity'
});

Vinz.IdentityShowController = Vinz.IdentityCrudController.extend({

    navListController: Ember.computed.alias('controllers.identity'),

    needs: 'identity'
});

},{"./crudController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/crudController.js","./searchController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/searchController.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/index.js":[function(require,module,exports){
require('./aboutController.js');
require('./applicationNavController.js');
require('./authorizationControllers.js');
require('./authorizedNavController.js');
require('./crudController.js');
require('./currentTimeController.js');
require('./identityControllers.js');
require('./licenseControllers.js');
require('./loginController.js');
require('./organizationControllers.js');
require('./productNavController.js');
require('./profileControllers.js');
require('./searchController.js');
require('./timezoneController.js');

},{"./aboutController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/aboutController.js","./applicationNavController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/applicationNavController.js","./authorizationControllers.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/authorizationControllers.js","./authorizedNavController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/authorizedNavController.js","./crudController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/crudController.js","./currentTimeController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/currentTimeController.js","./identityControllers.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/identityControllers.js","./licenseControllers.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/licenseControllers.js","./loginController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/loginController.js","./organizationControllers.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/organizationControllers.js","./productNavController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/productNavController.js","./profileControllers.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/profileControllers.js","./searchController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/searchController.js","./timezoneController.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/timezoneController.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/licenseControllers.js":[function(require,module,exports){
/*globals Vinz, clearTimeout, Ember, setTimeout*/
/*jslint unparam: true */

Vinz.LicenseController = Ember.ArrayController.extend({
});

Vinz.LicenseShowController = Ember.Controller.extend({
    vinzProxyAddress: Ember.computed.alias('env.vinzProxyAddress'),

    actions: {

        installLicense: function () {
            'use strict';
            this.transitionToRoute('license.install');
        }
    },

    siteNameObserver: Ember.observer('siteName', function () {
        'use strict';
        var self = this,
            url;
        if (self.get('siteName')) {
            url = self.get('vinzProxyAddress') + '/license/licensekey/' + self.get('siteName');
            Ember.$.getJSON(url).then(function (json) {
                self.set('licenseKeys', json);
            }, function (err) {
                Vinz.Logger.error(err, this);
            });
            url = this.get('vinzProxyAddress') + '/license/clusterkey/' + self.get('siteName');
            Ember.$.getJSON(url).then(function (json) {
                self.set('clusterKey', json.encryptedClusterKey);
            }, function (err) {
                Vinz.Logger.error(err, this);
            });
        }
    })
});

Vinz.LicenseInstallController = Ember.Controller.extend({
    vinzProxyAddress: Ember.computed.alias('env.vinzProxyAddress'),

    actions: {
        installLicense: function () {
            'use strict';
            var self = this,
                encryptedLicenseKey = {encryptedLicenseKey: this.get('licenseKey'), siteName: self.get('siteName')},
                url = self.get('vinzProxyAddress') + '/license/licensekey';
            Ember.$.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                type: 'POST',
                url: url,
                data: JSON.stringify(encryptedLicenseKey),
                dataType: 'json',
                success: function () {
                    self.set('message', null);
                    self.transitionToRoute('license.show');
                },
                error: function (xhr, status, error) {
                    self.set('message', error.toString());
                }
            });
        },

        cancel: function () {
            'use strict';
            this.set('message', null);
            this.transitionToRoute('license.show');
        }
    },

    siteNameObserver: Ember.observer('siteName', function () {
        'use strict';
        var self = this;
        if (self.get('siteName')) {
            if (this.get('queryDelayTimer')) {
                clearTimeout(this.get('queryDelayTimer'));
            }
            this.set('queryDelayTimer', setTimeout(function () {
                var url = self.get('vinzProxyAddress') + '/license/clusterkey/' + self.get('siteName');
                Ember.$.getJSON(url).then(function (json) {
                    self.set('clusterKey', json.encryptedClusterKey);
                }, function (err) {
                    Vinz.Logger.error(err, this);
                });
            }, 400));
        }
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/loginController.js":[function(require,module,exports){
/*globals Vinz, Ember, SimpleAuth */

require('../mixins/inputValidationSetMixin');

Vinz.LoginController = Ember.Controller.extend(Vinz.InputValidationSetMixin, SimpleAuth.LoginControllerMixin, {
    authenticator: 'simple-auth-authenticator:vinz',
    identification: '',
    password: '',
    rememberMe: false,

    rememberMeChanged: Ember.observer('rememberMe', function () {
        'use strict';
        this.get('session.store').sessionCookie = !this.get('rememberMe');
    })
});

},{"../mixins/inputValidationSetMixin":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationSetMixin.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/organizationControllers.js":[function(require,module,exports){
/*globals Vinz, clearTimeout, Ember, require, setTimeout*/

require('./crudController');
require("./searchController");

Vinz.OrganizationController = Vinz.SearchController.extend({

    listRoute: 'organization',

    modelType: 'organization',

    showRoute: 'organization.show'
});

Vinz.OrganizationCrudController = Vinz.CrudController.extend({

    actions: {

        showTimezoneDialog: function () {
            'use strict';
            Vinz.timezoneController.set('loaded', null);
            this.set('selectedTimezone', this.get('model').get('timezone'));
            Vinz.timezoneController.showDialog('i-tz-panel', 'i-timezone-dialog', this.get('selectedTimezone'));
        }
    },

    authorizationsQuery: '',

    authorizationsQueryDelayTimer: null,

    createRoute: 'organization.create',

    editRoute: 'organization.edit',

    mainRoute: 'organization',

    modelName: 'organization',

    organizationsQuery: '',

    organizationsQueryDelayTimer: null,

    selectedTimezone: null,

    showRoute: 'organization.show',

    manageAccessCondition: 'VINZ_ORGANIZATION_MANAGE',

    authorizations: Ember.computed(function () {
        'use strict';
        return this.get('store').find('authorization', { o: this.session.get('currentOrganization').id, q: this.authorizationsQuery, s: 'name', d: false, pageIndex: 0, pageSize: 100000});
    }),

    authorizationsQueryChanged: Ember.observer('authorizationsQuery', function () {
        'use strict';
        var self = this;
        if (this.get('authorizationsQueryDelayTimer')) {
            clearTimeout(this.get('authorizationsQueryDelayTimer'));
        }
        this.set('authorizationsQueryDelayTimer', setTimeout(function () {
            self.notifyPropertyChange('authorizations');
        }, 400));
    }),

    currentTimezone: Ember.computed('model.timezone', function () {
        'use strict';
        var tz = this.get('model').get('timezone');
        if (Ember.isNone(tz)) {
            tz = Vinz.timezoneController.getCurrentOlsonTimezone();
        }
        return Vinz.timezoneController.getTimezoneName(tz) + ' ( ' + tz + ' )';
    }),

    edit: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super(this.store.find('organization', this.get('model').id));
        /*jslint nomen:false*/
    },

    organizations: Ember.computed(function () {
        'use strict';
        return this.get('store').find('Organization', {o:  this.session.get('currentOrganization').id, q: this.organizationsQuery, s: 'name', d: false, pageIndex: 0, pageSize: 100000});
    }),

    organizationsQueryChanged: Ember.observer('organizationsQuery', function () {
        'use strict';
        var self = this;
        if (this.get('organizationsQueryDelayTimer')) {
            clearTimeout(this.get('organizationsQueryDelayTimer'));
        }
        this.set('organizationsQueryDelayTimer', setTimeout(function () {
            self.notifyPropertyChange('organizations');
        }, 400));
    }),

    timezoneSelected: Ember.observer('selectedTimezone', function () {
        'use strict';
        this.get('model').set('timezone', this.get('selectedTimezone'));
    })
});

Vinz.OrganizationCreateController = Vinz.OrganizationCrudController.extend({

    navListController: Ember.computed.alias('controllers.organization'),

    needs: 'organization',

    cancel: function () {
        'use strict';
        this.get('model').rollback();
        this.get('navListController').set('selectedItem', null);
        this.transitionToRoute('organization');
    }
});

Vinz.OrganizationEditController = Vinz.OrganizationCrudController.extend({

    navListController: Ember.computed.alias('controllers.organization'),

    needs: 'organization',

    transition: null,

    relationshipsChanged: Ember.observer('model.organizations.[]', 'model.authorizations.[]', function () {
        'use strict';
        if (this.get('isEditing')) {
            this.content.send('becomeDirty');
        }
    })
});

Vinz.OrganizationIndexController = Vinz.OrganizationCrudController.extend({

    navListController: Ember.computed.alias('controllers.organization'),

    needs: 'organization'
});

Vinz.OrganizationShowController = Vinz.OrganizationCrudController.extend({

    navListController: Ember.computed.alias('controllers.organization'),

    needs: "organization"
});

},{"./crudController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/crudController.js","./searchController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/searchController.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/productNavController.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.ProductNavController = Ember.Controller.extend({
    products: Ember.computed(function () {
        'use strict';
        return this.session.isAuthenticated ? this.store.find('productLink') : null;
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/profileControllers.js":[function(require,module,exports){
/*globals Vinz, Ember, location, require*/

require('./crudController');

Vinz.ProfileCrudController = Vinz.CrudController.extend({

    needs: ['timezone'],

    actions: {

        removeTz: function (tz) {
            'use strict';
            var v = this.get('clockTimezones'), i, index = -1;
            if (!Ember.isEmpty(v)) {
                for (i = 0; i <= v.length; i = i + 1) {
                    if (Ember.compare(v[i], tz) === 0) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    v.splice(index, 1);
                }
                this.set('clockTimezones', v);
                this.notifyPropertyChange('clockTimezones');
            }
        },

        save: function () {
            'use strict';
            try {
                /*jslint nomen:true*/
                this._super(); //call the super function to save
                /*jslint nomen:false*/
            } catch (err) {
                Vinz.Logger.error(err, this);
            }
            var tzs = this.get('clockTimezones'), displayClock = this.get('showClock');
            if (Ember.isNone(tzs) === false) {
                Ember.$.cookie('display.clock.tzs', tzs.join(';'), {expires: 99999, path: '/'});
            }
            Ember.$.cookie('display.clock', displayClock, {expires: 99999, path: '/'});
            if (Ember.isNone(this.get('model.timezone')) === false) {
                Ember.$.cookie('user.timezone', this.get('model.timezone'), {expires: 99999, path: '/'});
            }
            location.reload();
        },

        showAddTimezoneDialog: function () {
            'use strict';
            this.set('controllers.timezone.loaded', null);
            this.set('selectedTimezone', this.get('model.timezone'));
            this.get('controllers.timezone').showDialog('add-tz-panel', 'add-timezone-dialog', this.get('selectedTimezone'));
        },

        showTimezoneDialog: function () {
            'use strict';
            this.set('controllers.timezone.loaded', null);
            this.set('addedTimezone', this.get('model.timezone'));
            this.get('controllers.timezone').showDialog('p-tz-panel', 'p-timezone-dialog', this.get('addedTimezone'));
        }
    },

    addedTimezone: null,

    clockTimezones: null,

    editRoute: 'profile.edit',

    modelName: 'currentIdentity',

    selectedTimezone: null,

    showClock: false,

    showRoute: 'profile.show',

    addedTimezoneObserver: Ember.observer('addedTimezone', function () {
        'use strict';
        var tzs = this.get('clockTimezones');
        if (Ember.isNone(tzs)) {
            tzs = [];
        }
        tzs.unshift(this.get('addedTimezone'));
        this.set('clockTimezones', tzs);
        this.notifyPropertyChange('clockTimezones');
    }),

    currentTimezone: Ember.computed('model.timezone', function () {
        'use strict';
        var tz = this.get('model.timezone');
        if (Ember.isNone(tz)) {
            tz = this.get('controllers.timezone.currentOlsonTimezone');
        }
        return this.get('controllers.timezone').getTimezoneName(tz) + ' ( ' + tz + ' )';
    }),

    init: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        var v = Ember.$.cookie('display.clock.tzs'), sc = Ember.$.cookie('display.clock');
        if (!Ember.isNone(v) && v !== '') {
            this.set('clockTimezones', v.split(';'));
        }
        this.set('showClock', (sc === "true"));
    },

    showClockDisplay: Ember.computed('showClock', function () {
        'use strict';
        if (this.get('showClock') === true) {
            return 'Yes';
        }
        return "No";
    }),

    timezoneSelected: Ember.observer('selectedTimezone', function () {
        'use strict';
        this.set('model.timezone', this.get('selectedTimezone'));
    })
});

Vinz.ProfileEditController = Vinz.ProfileCrudController.extend({
    needs: ['profile', 'timezone'],
    navListController: Ember.computed.alias('controllers.profile'),
    transition: null
});

Vinz.ProfileIndexController = Vinz.ProfileCrudController.extend({
    needs: ['profile', 'timezone'],

    actions: {
        edit: function () {
            'use strict';
            this.transitionToRoute('/profile/edit');
        }
    },

    navListController: Ember.computed.alias('controllers.profile')
});

Vinz.ProfileShowController = Vinz.ProfileCrudController.extend({
    needs: ['profile', 'timezone'],

    navListController: Ember.computed.alias('controllers.profile')
});

},{"./crudController":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/crudController.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/searchController.js":[function(require,module,exports){
/*globals Vinz, clearTimeout, Ember, setTimeout*/

/*jslint unparam: true */
Vinz.SearchController = Ember.ObjectController.extend({

    actions: {
        search: function () {
            'use strict';
            this.notifyPropertyChange('query');
        },
        create: function () {
            'use strict';
            this.ignoreSelectedItemReset = true; // HACK to avoid list transition
            this.set('selectedItem', null);
            this.transitionToRoute(this.get('createRoute'));
            this.ignoreSelectedItemReset = false; // undo HACK to avoid list transition
        },
        cancel: function () {
            'use strict';
            this.set('selectedItem', this.get('lastSelectedItem'));
        }
    },

    listRoute: null, // eg. 'identity'
    modelType: null, // eg. 'identity'
    showRoute: null, // eg. 'identity.show'
    createRoute: null, // eg. 'identity.create'

    query: '',
    queryDelayTimer: null,
    selectedItemReset: null,
    lastSelectedItem: null,

    items: Ember.computed(function () {
        'use strict';
        var currentOrganizationId = this.session.get('currentOrganization.id'),
            modelType = this.get('modelType'),
            store = this.get('store');
        return store.find(modelType, { o: currentOrganizationId, q: this.query, s: 'name', d: false, pageIndex: 0, pageSize: 100000 });
    }),

    queryChanged: Ember.observer('query', function () {
        'use strict';
        var self = this;
        if (this.get('queryDelayTimer')) {
            clearTimeout(this.get('queryDelayTimer'));
        }
        this.set('queryDelayTimer', setTimeout(function () {
            self.notifyPropertyChange('items');
        }, 400));
    }),

    selectedItem: Ember.computed('selectedItemReset', function (key, value, oldValue) {
        'use strict';
        if (value) {
            this.set('lastSelectedItem', value);
            this.transitionToRoute(this.get('showRoute'), this.store.find(this.get('modelType'), value.id));
        } else if (!this.ignoreSelectedItemReset) {
            value = this.get('selectedItemReset');
            if (value === null) {
                this.transitionToRoute(this.get('listRoute'));
            }
        }
        return value;
    }),

    canCreate: Ember.computed('session.identity', 'createAccessCondition', function () {
        'use strict';
        var identity = this.get('session.isAuthenticated') ? this.get('session.identity') : null,
            createAccessCondition = this.get('createAccessCondition');
        if (createAccessCondition) {
            return identity ? identity.hasAccessCondition(createAccessCondition) : false;
        }
        return true;
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/controllers/timezoneController.js":[function(require,module,exports){
/*globals Vinz, Bootstrap, document, Ember, jQuery, moment, window, $*/

/*jslint unparam: true */
Vinz.TimezoneController = Ember.ObjectController.extend({

    actions: {

        hideDialog: function (timezonePickerDialogName) {
            'use strict';
            this.stopClockTimer();
            Bootstrap.ModalManager.hide(timezonePickerDialogName);
        },

        resetMap: function (mapPanelId, selectedTimezone) {
            'use strict';
            var mapPane = jQuery("#" + mapPanelId),
                selZone = selectedTimezone;
            if (Ember.isNone(selZone)) {
                selZone = this.get('currentOlsonTimezone');
            }
            mapPane.timezonePicker("selectZone", selZone);
            mapPane.timezonePicker("resetMap");
        }
    },

    hoverOlsonTimezone: null,

    hoverTimezone: null,

    initialOlsonTimezone: null,

    loaded: false,

    selectedOlsonTimezone: null,

    selectedTimezone: null,

    timeTick: 0,

    /**
     * Format a date time. Use this function to display date time in our app. When you need to get a string
     * representation of the date time to display, use Vinz.timezoneController.formatDateTime(date,format,showtimezone).
     * Please see parameters explanation below
     * @param date - this can be a date object or any string that moment can parse as a date. See this: http://momentjs.com/docs/
     * moment can interpret a variety of string and number formats as date
     * @param pattern this is the format that you want to display your date time in. For example: MM/DD/YYYY hh:mm:ss A.
     * See the format docs on moment.js (http://momentjs.com/docs/). If this is null or undefined, the default is : MM/DD/YYYY
     * @param showtimezone whether or not you want to append familiar (not olson) time zones at the end of your display value.
     * (MDT/MST/CDT ... are the timezone names)
     * @param [timezoneOlsen] the timezone name. If not passed in, it'll read from the cookie
     */
    formatDateTime : function (date, pattern, showtimezone, timezoneOlsen) {
        'use strict';
        var tz = (Ember.isNone(timezoneOlsen) ? Ember.$.cookie('user.timezone') : timezoneOlsen), result, me = this;
        if (Ember.isNone(tz)) {
            result = moment(date).format(pattern);
            if (showtimezone) {
                result += ' ' + me.get('browserTimezone');
            }
        } else {
            result = moment(date).tz(tz).format(pattern);
            if (showtimezone) {
                if (window.ACDS_TIMEZONE_MAP[tz]) {
                    result += ' ' + window.ACDS_TIMEZONE_MAP[tz];
                }
            }
        }
        return result;
    },

    browserTimezone: Ember.computed(function () {
        'use strict';
        var now, TZ;
        now = new Date().toString();
        try {
            /*jslint regexp:true*/
            TZ = now.indexOf('(') > -1 ? now.match(/\([^\)]+\)/)[0].match(/[A-Z]/g).join('') : now.match(/[A-Z]{3,4}/)[0];
            /*jslint regexp:false*/
        } catch (error) {
            TZ = "GMT";
        }
        if (TZ === "GMT" && /(GMT\W*\d{4})/.test(now)) {
            TZ = RegExp.$1;
        }
        return TZ;
    }),

    currentBrowserTime: Ember.computed('browserTimezone', function () {
        'use strict';
        return moment().format('hh:mm:ssa') + ' ' + this.get('browserTimezone');
    }),

    currentOlsonTimezone: Ember.computed(function () {
        'use strict';
        //first try to see if there is a cookie.
        //if not found, try a best guest from the map.
        //if still not not found. Assume it to be America/Denver as that is where we hail from.
        var me = this,
            findDefaultTz = function () {
                var i, dtz = me.get('browserTimezone'), tzKey, tzValue;
                for (i = 0; i < window.US_MAJOR_TZ.length; i += 1) {
                    if (window.US_MAJOR_TZ[i].abbrev === dtz) {
                        return window.US_MAJOR_TZ[i].olsen;
                    }
                }
                for (tzKey in window.ACDS_TIMEZONE_MAP) {
                    if (window.ACDS_TIMEZONE_MAP.hasOwnProperty(tzKey) && tzKey.indexOf("/") > 0) {
                        tzValue = window.ACDS_TIMEZONE_MAP[tzKey];
                        if (tzValue === dtz) {
                            return tzKey;
                        }
                    }
                }
                return 'America/Denver';
            },
            tz = jQuery.cookie('user.timezone');
        return Ember.isNone(tz) ? findDefaultTz() : tz;
    }),

    getCurrentTime: function () {
        'use strict';
        return this.formatDateTime(new Date(), 'hh:mm:ssa', true);
    },

    getCurrentTimeWithTz: function (tz) {
        'use strict';
        return this.formatDateTime(new Date(), 'hh:mm:ssa', true, tz);
    },

    getTimezoneName: function (olsonName) {
        'use strict';
        var result = window.ACDS_TIMEZONE_MAP[olsonName];
        if (Ember.isEmpty(result)) {
            result = olsonName;
        }
        return result;
    },

    loadScript: function (mapPanelId, timezoneDialogName, selZone) {
        'use strict';
        var me = this, script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://maps.google.com/maps/api/js?sensor=false&key=AIzaSyAuw3kxD0qkFY5vP2BunfUr_VDLtsMtXck&callback=initializeTimerZonePanel';
        document.body.appendChild(script);
        window.initializeTimerZonePanel = function () {
            jQuery("#" + mapPanelId).timezonePicker({
                jsonRootUrl: 'data/tz_json/',
                //center around iowa
                initialLat: 41.666007,
                initialLng:  -93.621793,
                initialZoom: 3,
                onReady: function () {
                    var tz = selZone;
                    if (Ember.isNone(tz)) {
                        tz = me.get('initialOlsonTimezone');
                    }
                    if (Ember.isNone(tz)) {
                        tz = me.get('currentOlsonTimezone');
                    }
                    jQuery("#" + mapPanelId).timezonePicker('selectZone', tz);
                },
                onHover: function (utcOffset, tzNames, olsonName) {
                    if (!Ember.isNone(tzNames) && !Ember.isNone(olsonName)) {
                        me.set('hoverOlsonTimezone', olsonName);
                        me.set('hoverTimezone', tzNames[0]);
                    } else {
                        me.set('hoverOlsonTimezone', null);
                        me.set('hoverTimezone', null);
                    }

                },
                onSelected: function (olsonName, utcOffset, tzName) {
                    if (!Ember.isNone(tzName) && !Ember.isNone(olsonName)) {
                        me.set('selectedOlsonTimezone', olsonName);
                        me.set('selectedTimezone', tzName);
                    } else {
                        me.set('hoverOlsonTimezone', null);
                        me.set('hoverTimezone', null);
                    }
                },
                mapOptions: {
                    maxZoom: 12,
                    minZoom: 2
                }
            });
            Bootstrap.ModalManager.show(timezoneDialogName);
            me.set('loaded', timezoneDialogName);
        };
    },

    showDialog: function (mapPanelId, timezoneDialogName, selectedTimezone) {
        'use strict';
        var me = this;
        if (me.get('loaded') === timezoneDialogName) {
            me.send('resetMap', mapPanelId, selectedTimezone);
            Bootstrap.ModalManager.show(timezoneDialogName);
        } else {
            me.loadScript(mapPanelId, timezoneDialogName, selectedTimezone);
        }
        this.startClockTimer();
        try {
            jQuery(".tzModal .modal-dialog .modal-content .modal-header .close").click(function () {
                me.stopClockTimer();
            });
        } catch (ignore) {}

    },

    startClockTimer: function () {
        'use strict';
        var me = this, v;
        window.doNothideCalendarOnOutsideClick = true;
        if (Ember.isNone(me.doStopClock)) {
            v = me.get('timeTick');
            Ember.run.later(function () {
                me.set('timeTick', v + 1);
                me.startClockTimer();
            }, 1000);
        } else {
            Vinz.Logger.info('Clock timer stopped', this);
            delete me.doStopClock;
        }
    },

    stopClockTimer: function () {
        'use strict';
        var me = this;
        me.doStopClock = true;
        me.set('timeTick', 0);
        Vinz.Logger.info('Stopping clock timer ...', this);
        Ember.run.later(function () {
            window.doNothideCalendarOnOutsideClick = false;
        }, 2000);

    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authSession.js":[function(require,module,exports){
/*global Vinz, Ember, SimpleAuth */

Vinz.AuthSession = SimpleAuth.Session.extend({
    identity: null,

    onAccessTokenChange: Ember.observer('access_token', function() {
        'use strict';
        var self = this,
            store = this.container.lookup('store:main');
        return store.find('identity', 'current').then(function (identity) {
            var promises = [];
            promises.push(identity.get('authorizations'));
            promises.push(identity.get('organizations'));
            return Ember.RSVP.all(promises).then(function () {
                self.set('currentOrganization', identity.get('organizations').objectAt(0));
                self.set('identity', identity);
            });
        });
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authStore.js":[function(require,module,exports){
/*global Ember, Vinz, SimpleAuth */

Vinz.AuthStore = SimpleAuth.Stores.LocalStorage.extend({
    sessionCookie: true,

    persist: function (data) {
        'use strict';
        var twoWeeks = 1209600, cookieExpires = this.sessionCookie ? null : data.expires_in || twoWeeks;
        Ember.$.cookie('authToken', data.access_token, { expires: cookieExpires, path: '/' });
        data.access_token = null;
        this._super(data);
    },

    restore: function () {
        'use strict';
        var data = this._super(),
            authTokenCookie = Ember.$.cookie('authToken');

        if (authTokenCookie) {
            data.access_token = authTokenCookie.split(';')[0];
        }
        return data;
    },

    clear: function () {
        'use strict';
        this._super();
        Ember.$.cookie('authToken', null, { path: '/' });
    }
});


},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authenticator.js":[function(require,module,exports){
/*global Ember, Vinz, SimpleAuth */

/**
 * Requires vinzProxyAddress be defined:
 * ```
 * App.Environment = Vinz.Environment.create();
 * App.Authenticator = Vinz.Authenticator.extend({
 *     vinzProxyAddress: function() { return App.Environment.get('vinzProxyAddress'); }.property()
 * });
 * ```
 */

/*jslint unparam: true */
Vinz.Authenticator = SimpleAuth.Authenticators.OAuth2.extend({
    vinzProxyAddress: '/vinz',
    authenticate: function (credentials) {
        'use strict';
        var self = this, url = this.get('vinzProxyAddress') + '/token';
        return new Ember.RSVP.Promise(function (resolve, reject) {
            var keepSignedIn = credentials.keepSignedIn || false,
                data = { grant_type: 'client_credentials', client_id: credentials.identification, client_secret: credentials.password };
            if (keepSignedIn) {
                data.keepSignedIn = 'true';
            }
            self.makeRequest(url, data).then(
                function (response) {
                    var expiresAt = self.absolutizeExpirationTime(response.expires_in);
                    resolve(Ember.$.extend(response, { expires_at: expiresAt }));
                },
                function (xhr, status, error) {
                    Ember.run(function () {
                        reject(xhr.responseText);
                    });
                }
            );
        });
    },

    onUnauthorized: function(response) {
        'use strict';
        if (this.hasOwnProperty('session') && this.session && this.session.isAuthenticated) {
            this.session.invalidate();
        }
        location.replace('#/login');
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/environment.js":[function(require,module,exports){
/*global Ember, Vinz, DS */

/**
 * An object to represent a environment configuration, including server side configuration values such as
 * projectVersion, buildDate, buildRevision, and proxyAddresses.
 *
 *  - initFailed - false if data/configuration.json cannot be loaded
 *  - modules - a comma separated list of modules (eg., 'vinz, esp, oplog')
 *  - <module>ProxyAddress - location of module proxy (eg., vinzProxyAddress is '/vinz')
 *  - authCrossOriginWhiteList - used by authentication.js when a proxy address is on a host
 *    other than the ui (this is useful for dev)
 *  - projectVersion, buildDate, buildRevision - displayed in the application footer
 *
 * Additional fields can be read from data/configuration.json by extending the updateFields function:
 * ```
 * App.Environemnt = Vinz.Environment.extend({
 *     additionalField: 'default',
 *     updateFields: function(data) {
 *         this._super();
 *         this.updateField('additionalField', data);
 *     }
 * });
 *
 * App.initializer(Vinz.Initializer('/'));
 * ```
 *
 * In production, the environment file (data/configuration.json) is generated by the server (see an example
 * implementation in src/main/java/com/thistech/acds/ui/service/ConfigService.java. In development, with gulp or
 * grunt, it is served from a static file.
 */
Vinz.Environment = Ember.Object.extend({
    authCrossOriginWhitelist: [ ],
    buildDate: null,
    buildRevision: null,
    projectVersion: null,
    initFailed: null,
    vinzProxyAddress: '/vinz',

    // method to call from an initializer (see Vinz.Initializer)
    setup: function (application) {
        'use strict';
        var self = this;
        this.set('app', application);

        // fetch the confirguration
        if (application.rootElement === 'body') {
            return Ember.$.ajax('data/configuration.json', {timeout: 3000}).done(function (data) {
                self.updateFields(data);
            }).fail(function () {
                Ember.Logger.error('Init Failed: Could not load data/configuration.json');
                self.updateField('initFailed', { initFailed: 'Could not load data/configuration.json'});
                self.updateField('buildRevision', { buildRevision: 'INIT-FAILED' });
            });
        }
        this.isTesting = true;
        return Ember.$.when(this);
    },

    updateFields: function(data) {
        'use strict';
        var self = this;
        this.updateField('authCrossOriginWhitelist', data);
        this.updateField('projectVersion', data);
        this.updateField('buildDate', data);
        this.updateField('buildRevision', data);

        this.updateField('modules', data);
        data.modules.forEach(function (module) {
            self.updateField(module + 'ProxyAddress', data);
        });
    },

    updateField: function (propertyName, data) {
        'use strict';
        if (data.hasOwnProperty(propertyName)) {
            this.set(propertyName, data[propertyName]);
        }
    },

    currentYear: Ember.computed(function () {
        'use strict';
        return new Date().getFullYear();
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/index.js":[function(require,module,exports){
require('./authSession.js');
require('./authStore.js');
require('./authenticator.js');
require('./environment.js');
require('./initialize.js');
require('./setup.js');

},{"./authSession.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authSession.js","./authStore.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authStore.js","./authenticator.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authenticator.js","./environment.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/environment.js","./initialize.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/initialize.js","./setup.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/setup.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/initialize.js":[function(require,module,exports){
/*global Vinz, Ember, SimpleAuth */

Vinz.initialize = function (container, application) {
    'use strict';
    var env;

    // define and register Environment
    if (!application.Environment) {
        application.Environment = Vinz.Environment.extend();
    }
    application.register('environment:vinz', application.Environment, {singleton: true});
    application.inject('adapter', 'env', 'environment:vinz');
    application.inject('controller', 'env', 'environment:vinz');
    application.inject('route', 'env', 'environment:vinz');
    env = container.lookup('environment:vinz');

    // fetch environment
    application.deferReadiness();
    Ember.$.when(env.setup(application)).always(function () {
        var authorizer = container.lookup('simple-auth-authorizer:vinz');
        if (authorizer) { authorizer.set('vinzProxyAddress', env.get('vinzProxyAddress')); }
        application.advanceReadiness();
    });
};

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/setup.js":[function(require,module,exports){
/*global Vinz, SimpleAuth */

require('../util/endsWithAny');
require('./authSession');
require('./authStore');
require('./authenticator');
require('./initialize');
require('../routes/mapRoutes');

Vinz.setup = function(app, options) {
    'use strict';
    window.ENV = window.ENV || {};

    if (options) {
        app.setProperties(options);
        // TODO: moves options off of the app
        //window.ENV['vinz'] = options;
    }

    // inject vinz classes into app
    var suffix = ['Model', 'View', 'Component', 'Controller', 'Route', 'Adapter', 'Serializer', 'Transform'], name;
    for (name in Vinz) {
        if (Vinz.hasOwnProperty(name) && name.endsWithAny(suffix) && !app.hasOwnProperty(name)) {
            app[name] = Vinz[name];
        }
    }

    // map vinz routes
    app.Router.map(function() {
        Vinz.mapRoutes(this);
    });

    // setup simple-auth
    window.ENV['simple-auth'] = {
        authorizer: 'simple-auth-authorizer:vinz',
        session: 'simple-auth-session:vinz',
        store: 'simple-auth-session-store:vinz'
    };
    app.register('simple-auth-authorizer:vinz', SimpleAuth.Authorizers.OAuth2);
    app.register('simple-auth-session:vinz', Vinz.AuthSession);
    app.register('simple-auth-session-store:vinz', Vinz.AuthStore);
    app.register('simple-auth-authenticator:vinz', Vinz.Authenticator);
    app.inject('adapter', 'authenticator', 'simple-auth-authenticator:vinz');

    // schedule initializer to load environment config
    app.initializer({
        name: 'vinz',
        initialize: Vinz.initialize
    });

    return app;
};

},{"../routes/mapRoutes":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/mapRoutes.js","../util/endsWithAny":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/endsWithAny.js","./authSession":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authSession.js","./authStore":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authStore.js","./authenticator":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/authenticator.js","./initialize":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/framework/initialize.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/index.js":[function(require,module,exports){
require('./inputValidationMixin.js');
require('./inputValidationSetMixin.js');

},{"./inputValidationMixin.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationMixin.js","./inputValidationSetMixin.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationSetMixin.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationMixin.js":[function(require,module,exports){
/*globals Vinz, Ember */
/*jslint nomen:true*/

Vinz.InputValidationMixin = Ember.Mixin.create({

    /**
     * Message to display when this field contains an invalid value. An invalid value is a value that,
     * if left unchanged, may cause an error.
     * {String}
     */
    invalidValueMessage: null,

    /**
     * Message to display when this field is empty and required.
     * {String}
     */
    isValueEmptyMessage: 'Required',

    /**
     * Is this input's value required? If true then this input contains an invalid value whenever it is empty.
     * {Boolean}
     */
    isValueRequired: true,

    /**
     * Does this input contain a valid value? An invalid value is a value that may cause an error if left unchanged.
     * {Boolean}
     */
    isValueValid: true,

    /**
     * Message to display when this input contains a valid value.
     * {String}
     */
    validValueMessage: null,

    /**
     * Was this field empty? Used to keep track of when this field becomes empty or non-empty.
     * {Boolean}
     */
    wasValueEmpty: true,

    change: function () {
        'use strict';
        this.validateValue();
    },

    didInsertElement: function () {
        'use strict';
        this.updateLabel();
    },

    init: function () {
        'use strict';
        this._super();
        this.validateValue();
        this.set('wasValueEmpty', this.get('isValueEmpty'));
    },

    isValueEmpty: Ember.computed('value', function () {
        'use strict';
        var value = this.get('value');
        return (value === '') || (value === null) || (value === undefined) || (value.length === 0);
    }),

    keyUp: function () {
        'use strict';
        this.validateValue();
    },

    onIsValueRequiredChanged: Ember.observer('isValueRequired', function () {
        'use strict';
        this.updateLabel();
    }),

    onValueValidityChanged: Ember.observer('isValueValid', function () {
        'use strict';
        var element = this.$(),
            iconElement,
            isValueValid = this.get('isValueValid'),
            messageElement,
            parentFormGroup,
            statusId = this.get('statusId'),
            statusMessage;
        if (element) {
            parentFormGroup = element.parents('.form-group');
            if (parentFormGroup) {
                if (isValueValid) {
                    parentFormGroup.removeClass('has-error');
                    parentFormGroup.addClass('has-success');
                } else {
                    parentFormGroup.removeClass('has-success');
                    parentFormGroup.addClass('has-error');
                }
                if (statusId) {
                    iconElement = parentFormGroup.find('#' + statusId + '-icon');
                    if (iconElement) {
                        iconElement.addClass('glyphicon');
                        if (isValueValid) {
                            iconElement.removeClass('glyphicon-remove');
                            iconElement.addClass('glyphicon-ok');
                        } else {
                            iconElement.removeClass('glyphicon-ok');
                            iconElement.addClass('glyphicon-remove');
                        }
                    }
                    messageElement = parentFormGroup.find('#' + statusId + '-message');
                    if (messageElement) {
                        if (isValueValid) {
                            statusMessage = this.get('validValueMessage') || '';
                        } else {
                            if (this.get('isValueRequired') && this.get('isValueEmpty')) {
                                statusMessage = this.get('isValueEmptyMessage') || this.get('invalidMessage') || '';
                            } else {
                                statusMessage = this.get('invalidValueMessage') || '';
                            }
                        }
                        messageElement.text(statusMessage);
                    }
                }
            }
        }
    }),

    /**
     * Updates an input field's label's style to match whether the field's value is required.
     */
    updateLabel: function () {
        'use strict';
        var element = this.$(),
            labelElement,
            parentFormGroup;
        if (element) {
            parentFormGroup = element.parents('.form-group');
            if (parentFormGroup) {
                labelElement = parentFormGroup.find('label.control-label');
                if (labelElement) {
                    labelElement.toggleClass('control-label-required', this.get('isValueRequired'));
                }
            }
        }
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/mixins/inputValidationSetMixin.js":[function(require,module,exports){
/*globals Vinz, Ember */

/**
 * Mixin for controllers of user interface forms that contain input fields that validate their data values.
 */
Vinz.InputValidationSetMixin = Ember.Mixin.create({

    /**
     * Opposite of is value valid. Useful for binding to HTML element's 'disabled' CSS class name.
     */
    isValueInvalid: Ember.computed.not('isValueValid'),

    /**
     * Does all of the validating inputs in this controller's view contain valid values?
     */
    isValueValid: false,

    /**
     * The child input fields of this controller's view that validate the values they contain.
     */
    validatingInputs: [],

    /**
     * Adds (registers) a data input field that checks the validity of the data it contains.
     *
     * @param {Vinz.InputValidationMixin} validatingInput  Required input field that validates its contents.
     */
    addValidatingInput: function (validatingInput) {
        'use strict';
        this.validatingInputs.push(validatingInput);
        validatingInput.get('controller').addObserver('isValueValid', this, this.onValueValidityChanged);
    },

    /**
     * Invoked when the value within an input becomes valid or becomes invalid.
     */
    onValueValidityChanged: function () {
        'use strict';
        var i,
            isValueValid = true;
        for (i = 0; i < this.validatingInputs.length; i += 1) {
            if (!this.validatingInputs[i].get('isValueValid')) {
                isValueValid = false;
                break;
            }
        }
        this.set('isValueValid', isValueValid);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/accessConditionModel.js":[function(require,module,exports){
/*globals Vinz, Ember, DS */

require('./coreModel');
require('./accessConditionTitles');

Vinz.AccessConditionModel = Vinz.core.Model.extend({

    'name': DS.attr('string'),

    title: Ember.computed('id', function () {
        'use strict';
        return Vinz.AccessConditionTitles[this.get('id')];
    })
});



},{"./accessConditionTitles":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/accessConditionTitles.js","./coreModel":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/coreModel.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/accessConditionTitles.js":[function(require,module,exports){
/*global Vinz */

Vinz.AccessConditionTitles = {
    METAMORE_ASSET_READ: 'Asset - read',
    METAMORE_ASSET_MANAGE: 'Asset - create/edit/delete',
    METAMORE_ASSET_DISTRIBUTE: 'Asset - distribute',
    METAMORE_ASSET_TEMPLATE_READ: 'Asset Template - read',
    METAMORE_ASSET_TEMPLATE_MANAGE: 'Asset Template - create/edit/delete',
    METAMORE_CCMS_READ: 'CCMS - read',
    METAMORE_CCMS_MANAGE: 'CCMS - create/edit/delete',
    METAMORE_INBOUND_NOTIFICATION_READ: 'Inbound Notification - read',
    METAMORE_INBOUND_NOTIFICATION_MANAGE: 'Inbound Notification - create/edit/delete',
    METAMORE_LINEAR_ASSET_READ: 'Linear Asset - read',
    METAMORE_NETWORK_FEED_READ: 'Network Feed - read',
    METAMORE_NETWORK_FEED_MANAGE: 'Network Feed - create/edit/delete',
    METAMORE_OUTBOUND_NOTIFICATION_READ: 'Outbound Notifications - read',
    METAMORE_OUTBOUND_NOTIFICATION_MANAGE: 'Outbound Notifications - create/edit/delete',
    METAMORE_QUERY_READ: 'Query - read',
    METAMORE_QUERY_MANAGE: 'Query - create/edit/delete',
    METAMORE_REPORT_BILLING_ID: 'Report - Billing ID',
    METAMORE_REPORT_DISTRIBUTION_HISTORY: 'Report - Distribution History',
    METAMORE_REPORT_FILE_NAME: 'Report - File Name',
    METAMORE_REPORT_MONTHLY_ASSET_COUNT: 'Report - Monthly Asset Count',
    METAMORE_SEASON_TEMPLATE_READ: 'Season Template - read',
    METAMORE_SEASON_TEMPLATE_MANAGE: 'Season Template - create/edit/delete',
    METAMORE_STRATA_READ: 'Strata - read',
    METAMORE_STRATA_MANAGE: 'Strata - create/edit/delete',
    METAMORE_CIS_READ: 'CIS - read',
    METAMORE_CIS_MANAGE: 'CIS - create/edit/delete',
    METAMORE_CUE_READ: 'CUE - read',
    METAMORE_CUE_MANAGE: 'CUE - create/edit/delete',
    METAMORE_EMAIL_READ: 'Email - read',
    METAMORE_EMAIL_MANAGE: 'Email - create/edit/delete',
    METAMORE_ESAM_READ: 'ESAM - read',
    METAMORE_ESAM_MANAGE: 'ESAM - create/edit/delete',
    METAMORE_ISA_READ: 'ISA - read',
    METAMORE_ISA_MANAGE: 'ISA - create/edit/delete',
    METAMORE_SIGNAL_READ: 'Signal - read',
    METAMORE_SIGNAL_MANAGE: 'Signal - create/edit/delete',
    METAMORE_EDL_READ: 'EDL - read',
    METAMORE_EDL_MANAGE: 'EDL - create/edit/delete',
    METAMORE_CURSOR_READ: 'Cursor - read',
    METAMORE_CURSOR_MANAGE: 'Cursor - create/edit/delete',
    METAMORE_VOD_ASSET_READ: 'VOD Asset - read',
    ACS_ACQUISITION_SYSTEM_PROFILE_READ: 'Acquisition System Profile - read',
    ACS_DASHBOARD: 'Decision - dashboard',
    ACS_DECISION_NETWORK: 'Decision - network',
    ACS_DECISION_SIGNAL: 'Decision - signal',
    ACS_EVENT_MANAGE: 'Event - create/edit/delete',
    ACS_EVENT_READ: 'Event - read',
    ACS_EVENT_TEMPLATE_MANAGE: 'Event Template - create/edit/delete',
    ACS_EVENT_TEMPLATE_READ: 'Event Template - read',
    ACS_NETWORK_READ: 'Network - read',
    ACS_NETWORK_MANAGE: 'Network - create/edit/delete',
    ACS_PROFILE_READ: 'Profile - read',
    ACS_PROFILE_MANAGE: 'Profile - create/edit/delete',
    ACS_REGION_READ: 'Region - read',
    ACS_REGION_MANAGE: 'Region - create/edit/delete',
    ACS_REPORT_NETWORK: 'Report - network',
    ACS_REPORT_SUMMARY: 'Report - organization',
    ACS_SCHEDULE_MANAGE: 'Schedule - create/edit/delete',
    ACS_SCHEDULE_READ: 'Schedule - read',
    ACS_SOURCE_FEED_READ: 'Source Feed - read',
    ACS_SOURCE_FEED_MANAGE: 'Source Feed - create/edit/delete',
    ACS_STATUS_NETWORK: 'Status - network',
    ACS_STATUS_SUMMARY: 'Status - organization',
    ACS_ZONE_READ: 'Zone - read',
    ACS_ZONE_MANAGE: 'Zone - create/edit/delete',
    ACS_GLOBAL_REGION_MANAGE: 'Global Region - create/edit/delete',
    ACS_GLOBAL_ZONE_MANAGE: 'Global Zone - create/edit/delete',
    ACS_DEVICE_PROFILE_READ: 'Device Profile - read',
    ACS_DEVICE_PROFILE_MANAGE: 'Device Profile - create/edit/delete',
    ACS_GLOBAL_DEVICE_PROFILE_MANAGE: 'Global Device Profile - create/edit/delete',
    ACS_INBAND_PROTECTION_ENABLE: 'In-band Protection - enable',
    ACS_EMP_REGION_UI: 'EMP UI - Show EMP Region UI',
    ACS_EMP_ZONE_UI: 'EMP UI - Show EMP Zone UI',
    OPLOG_LOGS_READ: 'Operational Logs - read',
    OPLOG_CONFIG_READ: 'Configuration - read',
    OPLOG_CONFIG_MANAGE: 'Configuration - edit',
    VEX_LINEAR_CHANNEL_READ: 'Linear Channel - read',
    VEX_LINEAR_CHANNEL_MANAGE: 'Linear Channel - edit',
    VEX_CONFIG_READ: 'VEX Configuration - read',
    VEX_CONFIG_MANAGE: 'VEX Configuration - edit',
    VEX_VOD_READ: 'VEX VOD Configuration - read',
    VEX_VOD_MANAGE: 'VEX VOD Configuration - edit',
    VEX_CDVR_READ: 'VEX CDVR Configuration - read',
    VEX_CDVR_MANAGE: 'VEX CDVR Configuration - edit',
    VEX_ORIGIN_SERVER_READ: 'VEX Origin Server - read',
    VEX_ORIGIN_SERVER_MANAGE: 'VEX Origin Server - edit',
    VEX_ORIGIN_STATUS_READ: 'VEX Origin Status - read',
    VEX_REPORT_CLIENT_VIEW: 'Client View - report',
    SPOTBUILDER_AD_UNIT_READ: 'Ad Unit - read',
    SPOTBUILDER_AD_UNIT_MANAGE: 'Ad Unit – create/update/delete',
    SPOTBUILDER_AD_MAP_READ: 'Ad Map - read',
    SPOTBUILDER_AD_MAP_MANAGE: 'Ad Map – create/update/delete',
    SPOTBUILDER_CIS_CONFIG_READ: 'CIS Configuration - read',
    SPOTBUILDER_CIS_CONFIG_MANAGE: 'CIS Configuration – create/update/delete',
    SPOTBUILDER_CONTENT_FILTER_READ: 'Content Filter - read',
    SPOTBUILDER_CONTENT_FILTER_MANAGE: 'Content Filter – create/update/delete',
    SPOTBUILDER_DECISION_OWNER_READ: 'Decision Owner – read',  // @see SPOTLINK_DECISION_OWNER_READ
    SPOTBUILDER_DECISION_OWNER_MANAGE: 'Decision Owner – create/update/delete', // @see SPOTLINK_DECISION_DECISION_OWNER_MANAGE
    SPOTBUILDER_NOTIFICATION_REGISTRATION_READ: 'Notification Registrations – read',
    SPOTBUILDER_OPPORTUNITY_READ: 'Opportunity - read',
    SPOTBUILDER_OPPORTUNITY_TEMPLATE_READ: 'Opportunity Template - read',
    SPOTBUILDER_OPPORTUNITY_TEMPLATE_MANAGE: 'Opportunity Template – create/update/delete',
    SPOTBUILDER_OPPORTUNITY_TEMPLATE_PUBLISH: 'Opportunity Template – publish',
    SPOTBUILDER_OPPORTUNITY_TEMPLATE_UNPUBLISH: 'Opportunity Template – unpublish',
    SPOTBUILDER_POIS: 'POIS Operations',
    SPOTLINK_DASHBOARD: 'Dashboard - view',
    SPOTLINK_POLICY_VIEW: 'Policy - view',
    SPOTLINK_POLICY_MANAGER: 'Policy - manage',
    SPOTLINK_CIS_CONFIG_READ: 'CIS Configuration - read',
    SPOTLINK_CIS_CONFIG_MANAGE: 'CIS Configuration - create/update/delete',
    SPOTLINK_DYNAMIC_SCHEDULER_READ: 'DynamicScheduler - read',
    SPOTLINK_DYNAMIC_SCHEDULER_MANAGE: 'DynamicScheduler - manage',
    SPOTLINK_DECISION_OWNER_READ: 'Decision Owner – read',
    SPOTLINK_DECISION_OWNER_MANAGE: 'Decision Owner – create/update/delete',
    SPOTLINK_FALLBACK_POOL_READ: 'Fallback Pool - read',
    SPOTLINK_FALLBACK_POOL_MANAGE: 'Fallback Pool - manage',
    VINZ_AUTHORIZATION_MANAGE: 'Authorizations - create/update/delete',
    VINZ_IDENTITY_MANAGE: 'Identities - create/update/delete',
    VINZ_ORGANIZATION_MANAGE: 'Organizations - create/update/delete',
    VINZ_GLOBAL_IDENTITY_MANAGE: 'Global Identities - create/update/delete',
    VINZ_GLOBAL_IDENTITY_READ: 'Global Identities - read',
    VINZ_GLOBAL_ORGANIZATION_READ: 'Global Organizations - read',
    VINZ_GLOBAL_ORGANIZATION_MANAGE: 'Global Organizations - create/update/delete',
    VINZ_LICENSEKEY_READ: 'LicenseKey - read',
    VINZ_LICENSEKEY_MANAGE: 'LicenseKey - create/delete/verify',
    VINZ_MODULE_VERSION_MANAGE: 'Module Versions - create/update/delete',
    KEYGEN_MANAGE: 'KeyGenerator - create/update/delete',
    KEYGEN_FEATURE_READ: 'Features - read',
    KEYGEN_FEATURE_MANAGE: 'Features - create/update/delete',
    KEYGEN_PRODUCT_READ: 'Products - read',
    KEYGEN_PRODUCT_MANAGE: 'Products - create/update/delete',
    KEYGEN_MODULE_VERSION_READ: 'Module Versions - read',
    KEYGEN_MODULE_VERSION_MANAGE: 'Module Versions - create/update/delete',
    ESP_CONFIG_READ: 'ESP Configuration - read',
    ESP_CONFIG_MANAGE: 'ESP Configuration - manage',
    ESP_TRANSFORM_READ: 'ESP Transform - read',
    ESP_TRANSFORM_MANAGE: 'ESP Transform - manage',
    EMP_DATA_MANAGE: 'Data Ingest',
    EMP_LAYER_READ: 'Layer - read',
    EMP_LAYER_MANAGE: 'Layer - create/edit/delete',
    EMP_REGION_READ: 'Region - read',
    EMP_REGION_MANAGE: 'Region - create/edit/delete',
    EMP_SHAPE_READ: 'Shape - read',
    EMP_SHAPE_MANAGE: 'Shape - create/edit/delete',
    EMP_ZONE_READ: 'Zone - read',
    EMP_ZONE_MANAGE: 'Zone - create/edit/delete',
    EMP_GLOBAL_LAYER_MANAGE: 'Global Layer - create/edit/delete',
    EMP_GLOBAL_REGION_MANAGE: 'Global Region - create/edit/delete',
    EMP_GLOBAL_SHAPE_MANAGE: 'Global Shape - create/edit/delete',
    EMP_GLOBAL_ZONE_MANAGE: 'Global Zone - create/edit/delete'
};

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/authorizationModel.js":[function(require,module,exports){
/*globals Vinz, DS, Ember */

require('./coreModel');

Vinz.AuthorizationModel = Vinz.core.Model.extend({
    accessConditions: DS.attr('array'),
    name: DS.attr(),
    systemManaged: DS.attr(),
    icon: Ember.computed('systemManaged', function () {
        'use strict';
        var result = null;
        if (this.get('systemManaged') === true) {
            result = 'fa fa-lock disabled';
        }
        return result;
    })
});

},{"./coreModel":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/coreModel.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/coreModel.js":[function(require,module,exports){
/*globals Vinz, DS, Ember */

Vinz.core.Model = DS.Model.extend({

    //force serializer to include id property
    toJSON: function () {
        'use strict';
        // container is for lazy transform lookups
        var serializer = DS.JSONSerializer.create({ container: this.container });
        return serializer.serialize(this, { includeId: true });
    },

    // used by bs-list-group
    title: Ember.computed('name', function () {
        'use strict';
        return this.get('name');
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/identityModel.js":[function(require,module,exports){
/*globals Vinz, DS, Ember */

Vinz.IdentityModel = DS.Model.extend({
    apiKey: DS.attr(),
    authorizations: DS.hasMany('authorization'),
    clientId: DS.attr(),
    clientSecret: DS.attr(),
    name: DS.attr(),
    organizations: DS.hasMany('organization'),
    timezone: DS.attr(),

    accessConditions: Ember.computed('authorizations.@each', function() {
        'use strict';
        var accessConditions = Ember.A([]);
        this.get('authorizations').forEach(function (auth) {
            accessConditions.pushObjects(auth.get('accessConditions') || []);
        });
        return accessConditions;
    }),

    hasAccessCondition: function(accessCondition) {
        'use strict';
        return this.get('accessConditions').indexOf(accessCondition) !== -1;
    },

    sub: Ember.computed('clientId', function() {
        'use strict';
        return this.get('clientId');
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/index.js":[function(require,module,exports){
require('./accessConditionModel.js');
require('./accessConditionTitles.js');
require('./authorizationModel.js');
require('./coreModel.js');
require('./identityModel.js');
require('./organization.js');
require('./page.js');
require('./productLinkModel.js');

},{"./accessConditionModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/accessConditionModel.js","./accessConditionTitles.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/accessConditionTitles.js","./authorizationModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/authorizationModel.js","./coreModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/coreModel.js","./identityModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/identityModel.js","./organization.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/organization.js","./page.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/page.js","./productLinkModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/productLinkModel.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/organization.js":[function(require,module,exports){
/*globals Vinz, DS, require*/

require('./coreModel.js');

Vinz.OrganizationModel = Vinz.core.Model.extend({
    address: DS.attr(),
    assetIdPrefix: DS.attr(),
    contactEmail: DS.attr(),
    contactName: DS.attr(),
    contactPhone: DS.attr(),
    dmrId: DS.attr(),
    name: DS.attr(),
    type: DS.attr()
});

},{"./coreModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/coreModel.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/page.js":[function(require,module,exports){
/*globals Vinz, DS, Ember*/

Vinz.PageModel = Ember.Object.extend({
    pageIndex: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0,
    isFirstPage: false,
    isLastPage: false,
    hasNextPage: false,
    hasPreviousPage: false,

    visible: true,
    FIRST: 0,
    PREV: 0,
    PAGE1: 0,
    PAGE2: 1,
    PAGE3: 2,
    PAGE4: 3,
    PAGE5: 4,
    NEXT: 1,
    LAST: 4,

    FIRST_Visible: true,
    PREV_Visible: true,
    PAGE1_Visible: true,
    PAGE2_Visible: true,
    PAGE3_Visible: true,
    PAGE4_Visible: true,
    PAGE5_Visible: true,
    NEXT_Visible: true,
    LAST_Visible: true,

    PAGE1_Active: Ember.computed('PAGE1', 'pageIndex', function () {
        'use strict';
        return this.PAGE1 === this.pageIndex;
    }),
    PAGE2_Active: Ember.computed('PAGE2', 'pageIndex', function () {
        'use strict';
        return this.PAGE2 === this.pageIndex;
    }),
    PAGE3_Active: Ember.computed('PAGE3', 'pageIndex', function () {
        'use strict';
        return this.PAGE3 === this.pageIndex;
    }),
    PAGE4_Active: Ember.computed('PAGE4', 'pageIndex', function () {
        'use strict';
        return this.PAGE4 === this.pageIndex;
    }),
    PAGE5_Active: Ember.computed('PAGE5', 'pageIndex', function () {
        'use strict';
        return this.PAGE5 === this.pageIndex;
    }),

    copyProperties: function (entries) {
        'use strict';
        this.pageIndex = entries.pageIndex;
        this.pageSize = entries.pageSize;
        this.totalElements = entries.totalElements;
        this.totalPages = entries.totalPages;
        this.isFirstPage = entries.isFirstPage;
        this.isLastPage = entries.isLastPage;
        this.hasNextPage = entries.hasNextPage;
        this.hasPreviousPage = entries.hasPreviousPage;
    },

    calculate: function (totalElements) {
        'use strict';
        this.totalElements = totalElements;
        this.totalPages = Math.ceil(totalElements / this.pageSize);
        this.isFirstPage = (this.pageIndex === 0);
        this.isLastPage = (this.pageIndex === (this.totalPages - 1));
        this.hasNextPage = !this.isLastPage;
        this.hasPreviousPage = !this.isFirstPage;
    }

});



},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/productLinkModel.js":[function(require,module,exports){
/*globals Vinz, DS */

require('./coreModel.js');

Vinz.ProductLinkModel = Vinz.core.Model.extend({
    color: DS.attr('string'),
    description: DS.attr('string'),
    href: DS.attr('string'),
    productName: DS.attr('string'),
    separatorBefore: DS.attr('boolean'),
    text: DS.attr('string')
});

},{"./coreModel.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/models/coreModel.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/applicationRoute.js":[function(require,module,exports){
/*global Vinz, Ember, SimpleAuth */

Vinz.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin);

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/authenticatedRoute.js":[function(require,module,exports){
/*global Vinz, Ember, SimpleAuth */

Vinz.AuthenticatedRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, {
    actions: {
        authenticateSession: function () {
            'use strict';
            this.transitionTo(this.get('env.app.authenticationRoute') || 'login');
        }
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/authorizationRoutes.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.AuthorizationCreateRoute = Vinz.AuthenticatedRoute.extend({
    actions: {
        willTransition: function (transition) {
            'use strict';
            var model = this.controller.content;
            if (model && model.get('isDirty')) {
                this.controller.showTransitionModal(transition);
            } else {
                // Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
                this.controller.set('isEditing', false);
                return true;
            }
        }
    },

    model: function () {
        'use strict';
        var record =  this.store.createRecord('authorization');
        record.set('accessConditions', []);
        return record;
    },

    renderTemplate: function () {
        'use strict';
        this.render('authorizationEdit', {
            controller: 'authorizationCreate'
        });
    },

    setupController: function (controller, model) {
        'use strict';
        controller.set('model', model);
        controller.set('messages', null);
        this.controller.set('isEditing', true);
    }
});

Vinz.AuthorizationEditRoute = Vinz.AuthenticatedRoute.extend({

    actions: {
        willTransition: function (transition) {
            'use strict';
            var model = this.controller.content;
            if (model && model.get('isDirty')) {
                this.controller.showTransitionModal(transition);
            } else {
                // Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
                this.controller.set('isEditing', false);
                return true;
            }
        }
    },

    model: function (params) {
        'use strict';
        return this.store.find('authorization', params.authorization_id);
    },

    setupController: function (controller, model) {
        'use strict';
        controller.set('model', model);
        controller.set('messages', null);
        this.controller.set('isEditing', true);
    }
});

Vinz.AuthorizationRoute = Vinz.AuthenticatedRoute.extend({
    setupController: function (controller, model) {
        'use strict';
        controller.set('model', model);
        controller.set('query', null);
        controller.set('selectedItem', null);
    }
});

Vinz.AuthorizationShowRoute = Vinz.AuthenticatedRoute.extend({
    model: function (params) {
        'use strict';
        return this.store.find('authorization', params.authorization_id);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/identityRoutes.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.IdentityRoute = Ember.Route.extend({

    setupController: function (controller) {
        'use strict';
        controller.set('query', null);
        controller.set('selectedItem', null);
    }
});

Vinz.IdentityCreateRoute = Ember.Route.extend({

    actions: {

        willTransition: function (transition) {
            'use strict';
            var model = this.controller.content;
            if (model && model.get('isDirty')) {
                this.controller.showTransitionModal(transition);
                Vinz.Logger.debug('AFTER MODAL', this);
            } else {
                // Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
                this.controller.set('isEditing', false);
                return true;
            }
        }
    },

    model: function () {
        'use strict';
        // the model for this route is a new empty Ember.Object
        return this.store.createRecord('identity');
    },

    renderTemplate: function () {
        'use strict';
        this.render('identityEdit', {
            controller: 'identityCreate'
        });
    },

    setupController: function (controller, model) {
        'use strict';
        controller.set('messages', null);
        controller.set('model', model);
        controller.set('organizationsQuery', '');
        controller.set('authorizationsQuery', '');
        this.controller.set('isEditing', true);
    }
});

Vinz.IdentityShowRoute = Ember.Route.extend({

    model: function (params) {
        'use strict';
        return this.store.find('identity', params.identity_id);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/index.js":[function(require,module,exports){
require('./applicationRoute.js');
require('./authenticatedRoute.js');
require('./authorizationRoutes.js');
require('./identityRoutes.js');
require('./indexRoute.js');
require('./licenseRoutes.js');
require('./loginRoute.js');
require('./logoutRoute.js');
require('./mapRoutes.js');
require('./organizationRoutes.js');
require('./profileRoutes.js');

},{"./applicationRoute.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/applicationRoute.js","./authenticatedRoute.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/authenticatedRoute.js","./authorizationRoutes.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/authorizationRoutes.js","./identityRoutes.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/identityRoutes.js","./indexRoute.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/indexRoute.js","./licenseRoutes.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/licenseRoutes.js","./loginRoute.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/loginRoute.js","./logoutRoute.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/logoutRoute.js","./mapRoutes.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/mapRoutes.js","./organizationRoutes.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/organizationRoutes.js","./profileRoutes.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/profileRoutes.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/indexRoute.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.IndexRoute = Vinz.AuthenticatedRoute.extend({
   routeAfterAuthentication: Ember.computed.alias('env.app.routeAfterAuthentication'),

   afterModel: function () {
       'use strict';
       this.transitionTo(this.get('routeAfterAuthentication'));
   }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/licenseRoutes.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.LicenseRoute = Ember.Route.extend({

});

Vinz.LicenseShowRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        var url = this.get('env.vinzProxyAddress') + '/license/sitename',
            promise = Ember.$.ajax({url: url, dataType: 'text' });
        return promise;
    },

    setupController: function (controller, model) {
        'use strict';
        //controller.set('model', model);
        controller.set('siteName', model);
        controller.notifyPropertyChange('siteName');
    }
});


Vinz.LicenseInstallRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        var url = this.get('env.vinzProxyAddress') + '/license/sitename',
            promise = Ember.$.ajax({url: url, dataType: 'text' });
        return promise;
    },

    setupController: function (controller, model) {
        'use strict';
        //controller.set('model', model);
        controller.set('siteName', model);
        controller.set('message', null);
        controller.set('licenseKey', null);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/loginRoute.js":[function(require,module,exports){
/*globals Vinz, Ember, SimpleAuth*/

Vinz.LoginRoute = Ember.Route.extend(SimpleAuth.UnauthenticatedRouteMixin,{});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/logoutRoute.js":[function(require,module,exports){
/*global Vinz, Ember*/

Vinz.LogoutRoute = Vinz.AuthenticatedRoute.extend({
    redirect: function () {
        'use strict';
        Ember.$.removeCookie('authToken', {path: '/'});
        Ember.$.removeCookie('authToken');
        this.get('session').invalidate();
        this.transitionTo('login');
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/mapRoutes.js":[function(require,module,exports){
/*global Vinz */

/**
 * Adds the Vinz routes to the application router.
 *
 * Example:
 * ```
 * Vinz.setup(App);
 * App.Router.map(function() {
 *     'use strict';
 *     Vinz.mapRoutes(this);
 *     ...
 *     add application routes
 *     ...
 * });
 * ```
 */
Vinz.mapRoutes = function(router) {
    'use strict';
    router.resource('about');
    router.resource('authorization', function () {
        this.route('show', { path: ':authorization_id' });
        this.route('edit', { path: ':authorization_id/edit' });
        this.route('create');
    });
    router.resource('identity', function () {
        this.route('create');
        this.route('edit', { path: ':identity_id/edit' });
        this.route('show', { path: ':identity_id' });
    });
    router.resource('license', function () {
        this.route('show', { path: '/show' });
        this.route('install', { path: '/install' });
    });
    router.resource('login');
    router.resource('logout');
    router.resource('organization', function () {
        this.route('create');
        this.route('edit', { path: ':organization_id/edit' });
        this.route('show', { path: ':organization_id' });
    });
    router.resource('profile', function () {
        this.route('edit', { path: '/edit' });
    });
    router.resource('recover');
};

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/organizationRoutes.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.OrganizationRoute = Ember.Route.extend({

    setupController: function (controller, model) {
        'use strict';
        controller.set('model', model);
        controller.set('query', null);
        controller.set('selectedItem', null);
    }
});

Vinz.OrganizationCreateRoute = Ember.Route.extend({

    actions: {

        willTransition: function (transition) {
            'use strict';
            var model = this.controller.content;
            if (model && model.get('isDirty')) {
                this.controller.showTransitionModal(transition);
                Vinz.Logger.debug('AFTER MODAL', this);
            } else {
                // Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
                this.controller.set('isEditing', false);
                return true;
            }
        }
    },

    model: function () {
        'use strict';
        // the model for this route is a new empty Ember.Object
        return this.store.createRecord('organization');
    },

    renderTemplate: function () {
        'use strict';
        this.render('organizationEdit', {
            controller: 'organizationCreate'
        });
    },

    setupController: function (controller, model) {
        'use strict';
        controller.set('messages', null);
        controller.set('model', model);
        controller.set('organizationsQuery', '');
        controller.set('authorizationsQuery', '');
        this.controller.set('isEditing', true);
    }
});

Vinz.OrganizationEditRoute = Ember.Route.extend({

    actions: {

        willTransition: function (transition) {
            'use strict';
            var model = this.controller.content;
            if (model && model.get('isDirty')) {
                this.controller.showTransitionModal(transition);
                Vinz.Logger.debug('AFTER MODAL', this);
            } else {
                // Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
                this.controller.set('isEditing', false);
                return true;
            }
        }
    },

    model: function (params) {
        'use strict';
        return this.store.find('organization', params.organization_id);
    },

    setupController: function (controller, model) {
        'use strict';
        controller.set('messages', null);
        controller.set('model', model);
        controller.set('organizationsQuery', '');
        controller.set('authorizationsQuery', '');
        this.controller.set('isEditing', true);
    }
});

Vinz.OrganizationShowRoute = Ember.Route.extend({

    model: function (params) {
        'use strict';
        return this.store.find('organization', params.organization_id);
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/routes/profileRoutes.js":[function(require,module,exports){
/*globals Vinz, Ember */

Vinz.ProfileEditRoute = Vinz.AuthenticatedRoute.extend({
    model: function () {
        'use strict';
        return this.get('session.identity');
    }
});

Vinz.ProfileIndexRoute = Vinz.AuthenticatedRoute.extend({
    model: function () {
        'use strict';
        return this.get('session.identity');
    }
});

Vinz.ProfileShowRoute = Vinz.AuthenticatedRoute.extend({
    model: function() {
        'use strict';
        return this.get('session.identity');
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/accessConditionSerializer.js":[function(require,module,exports){
/*globals Vinz, Ember, require, $*/
/*jslint unparam:true */

require('./coreSerializer');

Vinz.AccessConditionSerializer = Vinz.core.Serializer.extend({

    extract: function (store, type, payload, id, requestType) {
        'use strict';
        var retArray = [];
        $.each(payload, function (index, value) {
            retArray.push({id: value});
        });
        return retArray;
    }
});

},{"./coreSerializer":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/coreSerializer.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/authorizationSerializer.js":[function(require,module,exports){
/*globals Vinz */

require('./coreSerializer');

Vinz.AuthorizationSerializer = Vinz.core.Serializer.extend({});

},{"./coreSerializer":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/coreSerializer.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/coreSerializer.js":[function(require,module,exports){
/*globals Vinz, DS, Ember */
/*jslint unparam: true  */

Vinz.core.Serializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    keyForAttribute: function(attr) {
        'use strict';
        return attr;
    },
    keyForRelationship: function(key, kind) {
        'use strict';
        if (kind === 'belongsTo') { return key + 'Id'; }
        if (kind === 'hasMany') { return Ember.String.singularize(key) + 'Ids'; }
        return key;
    },
    extractArray: function(store, type, payload) {
        'use strict';
        var newPayload = {},
                key = Ember.String.pluralize(type.typeKey);

        if (payload instanceof Array) {
            newPayload[key] = payload;
        }
        else if (payload.contents && payload.contents instanceof Array) {
            newPayload[key] = payload.contents;
        }
        else {
            newPayload[key] = [];
        }
        return this._super(store, type, newPayload);
    },
    extractSingle: function(store, type, payload, id) {
        'use strict';
        var newPayload = {},
                key = type.typeKey;

        newPayload[key] = payload;
        return this._super(store, type, newPayload, id);
    },
    serializeIntoHash: function(hash, type, record, options) {
        'use strict';
        Ember.merge(hash, this.serialize(record, options));
    }
});


},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/identitySerializer.js":[function(require,module,exports){
/*globals Vinz, Ember */

require('./coreSerializer');

Vinz.IdentitySerializer = Vinz.core.Serializer.extend({
    attrs: {
        authorizations: { serialize: 'records', deserialize: 'records' },
        organizations: { serialize: 'records', deserialize: 'records' }
    }
});

},{"./coreSerializer":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/coreSerializer.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/index.js":[function(require,module,exports){
require('./accessConditionSerializer.js');
require('./authorizationSerializer.js');
require('./coreSerializer.js');
require('./identitySerializer.js');
require('./organizationSerializer.js');
require('./productLinkSerializer.js');

},{"./accessConditionSerializer.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/accessConditionSerializer.js","./authorizationSerializer.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/authorizationSerializer.js","./coreSerializer.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/coreSerializer.js","./identitySerializer.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/identitySerializer.js","./organizationSerializer.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/organizationSerializer.js","./productLinkSerializer.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/productLinkSerializer.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/organizationSerializer.js":[function(require,module,exports){
/*globals Vinz */

require('./coreSerializer');

Vinz.OrganizationSerializer = Vinz.core.Serializer.extend({});

},{"./coreSerializer":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/coreSerializer.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/serializers/productLinkSerializer.js":[function(require,module,exports){
/*globals Vinz, DS */
/*jslint unparam: true */

Vinz.ProductLinkSerializer = DS.RESTSerializer.extend({

    extract: function (store, type, payload, id, requestType) {
        'use strict';
        if (payload instanceof Array) {
            payload.forEach(function (productLink) {
                productLink.id = productLink.productName;
            });
        }
        return payload;
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/transforms/arrayTransform.js":[function(require,module,exports){
/*global Vinz, Ember, DS */

Vinz.ArrayTransform = DS.Transform.extend({
    deserialize: function(serialized) {
        "use strict";
        return Ember.A(serialized);
    },
    serialize: function(deserialized) {
        "use strict";
        return deserialized ? deserialized.toArray() : [];
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/transforms/index.js":[function(require,module,exports){
require('./arrayTransform.js');

},{"./arrayTransform.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/transforms/arrayTransform.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/endsWith.js":[function(require,module,exports){
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function (suffix) {
        'use strict';
        return this.slice(-suffix.length) === suffix;
    };
}

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/endsWithAny.js":[function(require,module,exports){
if (typeof String.prototype.endsWithAny !== 'function') {
    String.prototype.endsWithAny = function (suffix) {
        'use strict';
        var i;
        if (suffix instanceof Array) {
            for (i = 0; i < suffix.length; i += 1) {
                if (this.slice(-suffix[i].length) === suffix[i]) { return true; }
            }
            return false;
        }
        return this.slice(-suffix.length) === suffix;
    };
}

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/index.js":[function(require,module,exports){
require('./endsWith.js');
require('./endsWithAny.js');
require('./startsWith.js');
require('./startsWithAny.js');

},{"./endsWith.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/endsWith.js","./endsWithAny.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/endsWithAny.js","./startsWith.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/startsWith.js","./startsWithAny.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/startsWithAny.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/startsWith.js":[function(require,module,exports){
if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (prefix) {
        'use strict';
        return this.slice(0, prefix.length) === prefix;
    };
}

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/util/startsWithAny.js":[function(require,module,exports){
if (typeof String.prototype.startsWithAny !== 'function') {
    String.prototype.startsWithAny = function (prefix) {
        'use strict';
        var i;
        if (prefix instanceof Array) {
            for (i = 0; i < prefix.length; i += 1) {
                if (this.slice(0, prefix[i].length) === prefix[i]) { return true; }
            }
            return false;
        }
        return this.slice(0, prefix.length) === prefix;
    };
}

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/accessDenied.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.AccessDeniedView = Ember.View.extend({

    templateName: 'accessDenied',

    didInsertElement: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function () {
        'use strict';
        return;
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/applicationNavView.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.ApplicationNavView = Ember.View.extend({

    applicationLinks: Ember.computed.alias('env.app.productLinks'),

    classNames: ['navbar', 'navbar-app', 'navbar-default', 'navbar-fixed-top'],

    tagName: 'nav',

    templateName: 'applicationNav',

    userLinks: [
        {
            user: 'true',
            links: [
                { label: 'Logout', route: 'logout' },
                { label: 'Profile', route: 'profile' },
                { divider: true },
                { header: 'Administration', user: true },
                { label: 'Identities', route: 'identity', access: 'VINZ_IDENTITY_MANAGE' },
                { label: 'Organizations', route: 'organization', access: 'VINZ_ORGANIZATION_MANAGE' },
                { label: 'Authorizations', route: 'authorization', access: 'VINZ_AUTHORIZATION_MANAGE' },
                { divider: true, header: false },
                { label: 'License', route: 'license.show', access: 'VINZ_LICENSEKEY_READ' },
                { label: 'About', route: 'about' }
            ]
        }
    ]
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/authorizationViews.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.AuthorizationEditView = Ember.View.extend({
    templateName: 'authorization/edit'
});

Vinz.AuthorizationView = Ember.View.extend({
    templateName: 'authorization'
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/authorizedNavView.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.AuthorizedNavView = Ember.View.extend({

    classNameBindings: [ ':nav', ':navbar-nav', 'right:navbar-right' ],

    tagName: 'ul',

    templateName: 'authorizedNav',

    dropdownView: Ember.View.extend({

        classNameBindings: ['isChildActive:active', ':dropdown', 'content.class'],

        tagName: 'li',

        isChildActive: Ember.computed('router.url', function () {
            'use strict';
            var i,
                link,
                links = this.get('content.links'),
                router = this.get('router');
            for (i = 0; i < links.length; i += 1) {
                link = links[i];
                if (link.route && router.isActive(link.route)) {
                    return true;
                }
            }
            return false;
        }),

        router: Ember.computed(function () {
            'use strict';
            return this.get('controller').container.lookup('router:main');
        })
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/currentTimeView.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.CurrentTimeView = Ember.View.extend({
    classNames: 'current-time dropdown',
    tagName: 'li',
    templateName: 'currentTime',

    didInsertElement: function() {
        'use strict';
        this.get('controller').send('startTimers');
    },

    willDestroyElement: function() {
        'use strict';
        this.get('controller').send('stopTimers');
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/identityViews.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.IdentityView = Ember.View.extend({

    templateName: 'identity'
});

Vinz.IdentityEditView = Ember.View.extend({

    templateName: 'identity/edit'
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/index.js":[function(require,module,exports){
require('./accessDenied.js');
require('./applicationNavView.js');
require('./authorizationViews.js');
require('./authorizedNavView.js');
require('./currentTimeView.js');
require('./identityViews.js');
require('./loginView.js');
require('./organizationViews.js');
require('./productNavView.js');

},{"./accessDenied.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/accessDenied.js","./applicationNavView.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/applicationNavView.js","./authorizationViews.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/authorizationViews.js","./authorizedNavView.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/authorizedNavView.js","./currentTimeView.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/currentTimeView.js","./identityViews.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/identityViews.js","./loginView.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/loginView.js","./organizationViews.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/organizationViews.js","./productNavView.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/productNavView.js","./profileViews.js":"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/profileViews.js"}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/loginView.js":[function(require,module,exports){
/*globals Vinz, Ember*/

Vinz.LoginView = Ember.View.extend({

    templateName: 'login',

    didInsertElement: function () {
        'use strict';
        var childViews,
            controller = this.get('controller');
        this._super();
        childViews = this.get('childViews');
        if (childViews) {
            childViews.forEach(function (childView) {
                if (Vinz.InputValidationMixin.detect(childView)) {
                    controller.addValidatingInput(childView);
                }
            });
        }
    }
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/organizationViews.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.OrganizationEditView = Ember.View.extend({
    templateName: 'organization/edit'
});

Vinz.OrganizationView = Ember.View.extend({

    templateName: 'organization'
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/productNavView.js":[function(require,module,exports){
/*global Vinz, Ember */

Vinz.ProductNavView = Ember.View.extend({
    tagName: 'nav',
    classNames: ['navbar', 'navbar-inverse', 'navbar-fixed-top'],
    templateName: 'productNav',

    needs: ['vinz'],

    buttonView: Ember.View.extend({
        tagName: 'li',
        attributeBindings: [ 'style' ],
        classNameBindings: [ 'active' ],
        invert: false,

        color: Ember.computed('context.color', function() {
            'use strict';
            return this.get('context.color');
        }),

        style: Ember.computed('invert', function() {
            'use strict';
            var s = (this.get('invert')?'background-color:':'color:') + this.get('color');
            return s;
        }),

        active: Ember.computed(function() {
            'use strict';
            var pn = this.get('context.productName'),
                isActive = (pn === this.get('env.productName'));
            return isActive;
        }),

        mouseEnter: function() {
            'use strict';
            this.set('invert', true);
        },

        mouseLeave: function() {
            'use strict';
            this.set('invert', false);
        }
    })
});

},{}],"/Users/jeff/Code/thistech/vinz-ui-ember/app/scripts/views/profileViews.js":[function(require,module,exports){
/*globals Vinz, Ember */

Vinz.ProfileEditView = Ember.View.extend({
    templateName: 'profile/edit',
    tzChanged: Ember.observer('controller.clockTimezones', function () {
        'use strict';
        this.rerender();
    })
});

Vinz.ProfileView = Ember.View.extend({
    templateName: 'profile'
});

},{}]},{},["./app/scripts/vinz-ui.bundle.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLi9hcHAvc2NyaXB0cy92aW56LXVpLmJ1bmRsZS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9hZGFwdGVycy9hY2Nlc3NDb25kaXRpb25BZGFwdGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2FkYXB0ZXJzL2F1dGhvcml6YXRpb25BZGFwdG9yLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2FkYXB0ZXJzL2NvcmVBZGFwdGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2FkYXB0ZXJzL2lkZW50aXR5QWRhcHRlci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9hZGFwdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9hZGFwdGVycy9vcmdhbml6YXRpb25BZGFwdGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2FkYXB0ZXJzL3Byb2R1Y3RMaW5rQWRhcHRlci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb21wb25lbnRzL2JzLWljb24tbGlzdC1ncm91cC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb21wb25lbnRzL2VtYWlsLWlucHV0LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvZmxpcC1zd2l0Y2guanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9pbmRleC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3BhZ2UtcGFuZWwuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9wYXNzd29yZC1pbnB1dC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3JlZ2V4cC1pbnB1dC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3NwbGl0LXBhbmVsLXRvZ2dsZS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3NwbGl0LXBhbmVsLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvdGltZXpvbmUtcGlja2VyLWRpYWxvZy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9hYm91dENvbnRyb2xsZXIuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvYXBwbGljYXRpb25OYXZDb250cm9sbGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2F1dGhvcml6YXRpb25Db250cm9sbGVycy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9hdXRob3JpemVkTmF2Q29udHJvbGxlci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9jcnVkQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9jdXJyZW50VGltZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvaWRlbnRpdHlDb250cm9sbGVycy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9pbmRleC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9saWNlbnNlQ29udHJvbGxlcnMuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbG9naW5Db250cm9sbGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL29yZ2FuaXphdGlvbkNvbnRyb2xsZXJzLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3Byb2R1Y3ROYXZDb250cm9sbGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3Byb2ZpbGVDb250cm9sbGVycy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zZWFyY2hDb250cm9sbGVyLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3RpbWV6b25lQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9mcmFtZXdvcmsvYXV0aFNlc3Npb24uanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvZnJhbWV3b3JrL2F1dGhTdG9yZS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9mcmFtZXdvcmsvYXV0aGVudGljYXRvci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9mcmFtZXdvcmsvZW52aXJvbm1lbnQuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvZnJhbWV3b3JrL2luZGV4LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2ZyYW1ld29yay9pbml0aWFsaXplLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL2ZyYW1ld29yay9zZXR1cC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9taXhpbnMvaW5kZXguanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvbWl4aW5zL2lucHV0VmFsaWRhdGlvbk1peGluLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL21peGlucy9pbnB1dFZhbGlkYXRpb25TZXRNaXhpbi5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9tb2RlbHMvYWNjZXNzQ29uZGl0aW9uTW9kZWwuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvbW9kZWxzL2FjY2Vzc0NvbmRpdGlvblRpdGxlcy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9tb2RlbHMvYXV0aG9yaXphdGlvbk1vZGVsLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL21vZGVscy9jb3JlTW9kZWwuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvbW9kZWxzL2lkZW50aXR5TW9kZWwuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvbW9kZWxzL2luZGV4LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL21vZGVscy9vcmdhbml6YXRpb24uanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvbW9kZWxzL3BhZ2UuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvbW9kZWxzL3Byb2R1Y3RMaW5rTW9kZWwuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvcm91dGVzL2FwcGxpY2F0aW9uUm91dGUuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvcm91dGVzL2F1dGhlbnRpY2F0ZWRSb3V0ZS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9yb3V0ZXMvYXV0aG9yaXphdGlvblJvdXRlcy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9yb3V0ZXMvaWRlbnRpdHlSb3V0ZXMuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvcm91dGVzL2luZGV4LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3JvdXRlcy9pbmRleFJvdXRlLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3JvdXRlcy9saWNlbnNlUm91dGVzLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3JvdXRlcy9sb2dpblJvdXRlLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3JvdXRlcy9sb2dvdXRSb3V0ZS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9yb3V0ZXMvbWFwUm91dGVzLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3JvdXRlcy9vcmdhbml6YXRpb25Sb3V0ZXMuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvcm91dGVzL3Byb2ZpbGVSb3V0ZXMuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvc2VyaWFsaXplcnMvYWNjZXNzQ29uZGl0aW9uU2VyaWFsaXplci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9zZXJpYWxpemVycy9hdXRob3JpemF0aW9uU2VyaWFsaXplci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9zZXJpYWxpemVycy9jb3JlU2VyaWFsaXplci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9zZXJpYWxpemVycy9pZGVudGl0eVNlcmlhbGl6ZXIuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvc2VyaWFsaXplcnMvaW5kZXguanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvc2VyaWFsaXplcnMvb3JnYW5pemF0aW9uU2VyaWFsaXplci5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy9zZXJpYWxpemVycy9wcm9kdWN0TGlua1NlcmlhbGl6ZXIuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdHJhbnNmb3Jtcy9hcnJheVRyYW5zZm9ybS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy90cmFuc2Zvcm1zL2luZGV4LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3V0aWwvZW5kc1dpdGguanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdXRpbC9lbmRzV2l0aEFueS5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy91dGlsL2luZGV4LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3V0aWwvc3RhcnRzV2l0aC5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy91dGlsL3N0YXJ0c1dpdGhBbnkuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdmlld3MvYWNjZXNzRGVuaWVkLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3ZpZXdzL2FwcGxpY2F0aW9uTmF2Vmlldy5qcyIsIi9Vc2Vycy9qZWZmL0NvZGUvdGhpc3RlY2gvdmluei11aS1lbWJlci9hcHAvc2NyaXB0cy92aWV3cy9hdXRob3JpemF0aW9uVmlld3MuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdmlld3MvYXV0aG9yaXplZE5hdlZpZXcuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdmlld3MvY3VycmVudFRpbWVWaWV3LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3ZpZXdzL2lkZW50aXR5Vmlld3MuanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdmlld3MvaW5kZXguanMiLCIvVXNlcnMvamVmZi9Db2RlL3RoaXN0ZWNoL3ZpbnotdWktZW1iZXIvYXBwL3NjcmlwdHMvdmlld3MvbG9naW5WaWV3LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3ZpZXdzL29yZ2FuaXphdGlvblZpZXdzLmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3ZpZXdzL3Byb2R1Y3ROYXZWaWV3LmpzIiwiL1VzZXJzL2plZmYvQ29kZS90aGlzdGVjaC92aW56LXVpLWVtYmVyL2FwcC9zY3JpcHRzL3ZpZXdzL3Byb2ZpbGVWaWV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmdsb2JhbCBFbWJlciwgVmlueiAqL1xuLy8gVGhpcyBmaWxlIGNhbiBiZSByZWdlbmVyYXRlZCB3aXRoIHRoaXMgY29tbWFuZDpcbi8vIGhlYWQgLTMgdmluei11aS5idW5kbGUuanMgPm91dDtmaW5kIC4gLXR5cGUgZCAtZCAxfHNlZCAtZSAncyteK3JlcXVpcmUoJysnfHNlZCAtZSAncyskKycpOysnID4+b3V0O212IG91dCB2aW56LXVpLWJ1bmRsZS5qc1xuZXhwb3J0cy5WaW56ID0gVmluejtcbnJlcXVpcmUoJy4vYWRhcHRlcnMnKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycycpO1xucmVxdWlyZSgnLi9mcmFtZXdvcmsnKTtcbnJlcXVpcmUoJy4vbWl4aW5zJyk7XG5yZXF1aXJlKCcuL21vZGVscycpO1xucmVxdWlyZSgnLi9yb3V0ZXMnKTtcbnJlcXVpcmUoJy4vc2VyaWFsaXplcnMnKTtcbnJlcXVpcmUoJy4vdHJhbnNmb3JtcycpO1xucmVxdWlyZSgnLi91dGlsJyk7XG5yZXF1aXJlKCcuL3ZpZXdzJyk7XG4iLCIvKmdsb2JhbCBWaW56ICovXG5cbnJlcXVpcmUoJy4vY29yZUFkYXB0ZXInKTtcblxuVmluei5BY2Nlc3NDb25kaXRpb25BZGFwdGVyID0gVmluei5jb3JlLkFkYXB0ZXIuZXh0ZW5kKHtcbiAgICBwYXRoRm9yVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiAnbGljZW5zZWRBY2Nlc3NDb25kaXRpb24nO1xuICAgIH1cbn0pO1xuIiwiLypnbG9iYWwgVmlueiAqL1xuXG5yZXF1aXJlKCcuL2NvcmVBZGFwdGVyJyk7XG5cblZpbnouQXV0aG9yaXphdGlvbkFkYXB0ZXIgPSBWaW56LmNvcmUuQWRhcHRlci5leHRlbmQoe1xuICAgIHBhdGhGb3JUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuICdhdXRob3JpemF0aW9uJztcbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFsIFZpbnosIERTLCBFbWJlciAqL1xuXG5WaW56LmNvcmUuQWRhcHRlciA9IERTLlJFU1RBZGFwdGVyLmV4dGVuZCh7XG4gICAgcHJveHlBZGRyZXNzOiBFbWJlci5jb21wdXRlZC5hbGlhcygnZW52LnZpbnpQcm94eUFkZHJlc3MnKSxcblxuICAgIGFqYXhFcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fc3VwZXIocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0KCdhdXRoZW50aWNhdG9yJykub25VbmF1dGhvcml6ZWQocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuXG4gICAgYnVpbGRVUkw6IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0KCdwcm94eUFkZHJlc3MnKTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fc3VwZXIodHlwZSwgaWQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBwYXRoRm9yVHlwZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gRW1iZXIuU3RyaW5nLnNpbmd1bGFyaXplKHR5cGUpO1xuICAgIH1cbn0pO1xuIiwiLypnbG9iYWwgVmlueiAqL1xuXG5yZXF1aXJlKCcuL2NvcmVBZGFwdGVyJyk7XG5cblZpbnouSWRlbnRpdHlBZGFwdGVyID0gVmluei5jb3JlLkFkYXB0ZXIuZXh0ZW5kKHtcbiAgICBwYXRoRm9yVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiAnaWRlbnRpdHknO1xuICAgIH1cbn0pO1xuIiwicmVxdWlyZSgnLi9hY2Nlc3NDb25kaXRpb25BZGFwdGVyLmpzJyk7XG5yZXF1aXJlKCcuL2F1dGhvcml6YXRpb25BZGFwdG9yLmpzJyk7XG5yZXF1aXJlKCcuL2NvcmVBZGFwdGVyLmpzJyk7XG5yZXF1aXJlKCcuL2lkZW50aXR5QWRhcHRlci5qcycpO1xucmVxdWlyZSgnLi9vcmdhbml6YXRpb25BZGFwdGVyLmpzJyk7XG5yZXF1aXJlKCcuL3Byb2R1Y3RMaW5rQWRhcHRlci5qcycpO1xuIiwiLypnbG9iYWwgVmlueiAqL1xuXG5yZXF1aXJlKCcuL2NvcmVBZGFwdGVyJyk7XG5cblZpbnouT3JnYW5pemF0aW9uQWRhcHRlciA9IFZpbnouY29yZS5BZGFwdGVyLmV4dGVuZCh7XG4gICAgcGF0aEZvclR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gJ29yZ2FuaXphdGlvbic7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIgKi9cblxucmVxdWlyZSgnLi9jb3JlQWRhcHRlcicpO1xucmVxdWlyZSgnLi4vc2VyaWFsaXplcnMvcHJvZHVjdExpbmtTZXJpYWxpemVyJyk7XG5cblZpbnouUHJvZHVjdExpbmtBZGFwdGVyID0gVmluei5jb3JlLkFkYXB0ZXIuZXh0ZW5kKHtcbiAgICBwYXRoRm9yVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiAnY3Jvc3Nwcm9kbmF2L3Byb2R1Y3RMaW5rcyc7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgQm9vdHN0cmFwLCBFbWJlciovXG5cbkJvb3RzdHJhcC5Cc0ljb25MaXN0R3JvdXBDb21wb25lbnQgPSBCb290c3RyYXAuSXRlbXNWaWV3LmV4dGVuZCh7XG5cbiAgICBjbGFzc05hbWVzOiBbJ2xpc3QtZ3JvdXAnXSxcblxuICAgIHRhZ05hbWU6ICd1bCcsXG5cbiAgICBpdGVtVmlld0NsYXNzOiBCb290c3RyYXAuSXRlbVZpZXcuZXh0ZW5kKEJvb3RzdHJhcC5JdGVtU2VsZWN0aW9uLCB7XG5cbiAgICAgICAgY2xhc3NOYW1lczogWydsaXN0LWdyb3VwLWl0ZW0nXSxcblxuICAgICAgICB0ZW1wbGF0ZTogRW1iZXIuSGFuZGxlYmFycy5jb21waWxlKCd7eyNpZiB2aWV3Lmljb259fScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGkge3tiaW5kLWF0dHIgY2xhc3M9XCJ2aWV3Lmljb25cIn19PjwvaT4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ey9pZn19JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7eyNpZiB2aWV3LmJhZGdlfX0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3t7YnMtYmFkZ2UgY29udGVudEJpbmRpbmc9XCJ2aWV3LmJhZGdlXCJ9fScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3svaWZ9fScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3sjaWYgdmlldy5zdWJ9fScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGg0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcIj57e3ZpZXcudGl0bGV9fTwvaDQ+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cCBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCI+e3t2aWV3LnN1Yn19PC9wPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3tlbHNlfX0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3t7dmlldy50aXRsZX19JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ey9pZn19JyksXG5cbiAgICAgICAgYmFkZ2U6IEVtYmVyLmNvbXB1dGVkKCdjb250ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldCgnY29udGVudCcpLFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoRW1iZXIudHlwZU9mKGNvbnRlbnQpID09PSAnaW5zdGFuY2UnIHx8IEVtYmVyLmNhbkludm9rZShjb250ZW50LCAnZ2V0JykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50LmdldCgnYmFkZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIGljb246IEVtYmVyLmNvbXB1dGVkKCdjb250ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldCgnY29udGVudCcpLFxuICAgICAgICAgICAgICAgIGljb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKEVtYmVyLnR5cGVPZihjb250ZW50KSA9PT0gJ2luc3RhbmNlJyB8fCBFbWJlci5jYW5JbnZva2UoY29udGVudCwgJ2dldCcpKSB7XG4gICAgICAgICAgICAgICAgaWNvbiA9IGNvbnRlbnQuZ2V0KCdpY29uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfSksXG5cbiAgICAgICAgc3ViOiBFbWJlci5jb21wdXRlZCgnY29udGVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXQoJ2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKEVtYmVyLnR5cGVPZihjb250ZW50KSA9PT0gJ2luc3RhbmNlJyB8fCBFbWJlci5jYW5JbnZva2UoY29udGVudCwgJ2dldCcpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudC5nZXQoJ3N1YicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSlcbiAgICB9KVxufSk7XG5cbkVtYmVyLkhhbmRsZWJhcnMuaGVscGVyKCdicy1pY29uLWxpc3QtZ3JvdXAnLCBCb290c3RyYXAuQnNJY29uTGlzdEdyb3VwQ29tcG9uZW50KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciAqL1xuLypqc2xpbnQgcmVnZXhwOnRydWUgKi9cblxucmVxdWlyZSgnLi9yZWdleHAtaW5wdXQnKTtcblxuVmluei5FbWFpbElucHV0Q29tcG9uZW50ID0gVmluei5SZWdleHBJbnB1dENvbXBvbmVudC5leHRlbmQoe1xuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhpcyBpbnB1dCBjb250YWlucyB0ZXh0IHRoYXQgZG9lc24ndCBjb25mb3JtIHRvIHRoZSBwYXR0ZXJuIGZvciB2YWxpZCBlbWFpbCBhZGRyZXNzZXMuXG4gICAgICoge1N0cmluZ31cbiAgICAgKi9cbiAgICBpbnZhbGlkVmFsdWVNZXNzYWdlOiAnSW52YWxpZCBlbWFpbCcsXG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGlzIGZpZWxkIGlzIGVtcHR5IGFuZCByZXF1aXJlZC5cbiAgICAgKiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGlzVmFsdWVFbXB0eU1lc3NhZ2U6ICdSZXF1aXJlZCcsXG5cbiAgICAvKipcbiAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byB2YWxpZGF0ZSB0aGlzIGlucHV0J3MgdmFsdWUgdG8gY2hlY2sgaWYgdGhlIHZhbHVlIGlzIGluIHRoZSBjb3JyZWN0IGZvcm1hdCBmb3JcbiAgICAgKiBlbWFpbCBhZGRyZXNzZXMuXG4gICAgICoge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBwYXR0ZXJuOiAvXlthLXpBLVowLTlfXFwuK1xcLV0rQFthLXpBLVowLTlcXC1dK1xcLlthLXpBLVowLTlcXC1cXC5dKyQvXG59KTtcblxuRW1iZXIuSGFuZGxlYmFycy5oZWxwZXIoJ2VtYWlsLWlucHV0JywgVmluei5FbWFpbElucHV0Q29tcG9uZW50KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBkb2N1bWVudCwgRW1iZXIqL1xuXG4vKipcbiAqIEZsaXAgc3dpdGNoIChvbi9vZmYpIGNvbXBvbmVudC4gQSB1c2VyIGludGVyZmFjZSBjb21wb25lbnQgdGhhdCBjYW4gYmUgc3dpdGNoZWQgYmV0d2VlbiB0d28gc3RhdGVzIChieSBkZWZhdWx0OiBPbiBvciBPZmYpLlxuICpcbiAqIG9mZkxhYmVsIC0gVGhlIHRleHQgdGhhdCB0aGlzIHN3aXRjaCBkaXNwbGF5cyB3aGVuIGl0IGlzIGluIHRoZSBPZmYgc3RhdGUuXG4gKiBvbkxhYmVsIC0gVGhlIHRleHQgdGhhdCB0aGlzIHN3aXRjaCBkaXNwbGF5cyB3aGVuIGl0IGlzIGluIHRoZSBPbiBzdGF0ZS5cbiAqIHBhZGRpbmdMZWZ0XG4gKiB0ZXh0SW5kZW50XG4gKiB3aWR0aCAtIFRoZSB2YWx1ZSBmb3IgdGhpcyBzd2l0Y2gncyB3aWR0aCBDU1MgYXR0cmlidXRlLlxuICovXG5WaW56LkZsaXBTd2l0Y2hDb21wb25lbnQgPSBFbWJlci5Db21wb25lbnQuZXh0ZW5kKHtcblxuICAgIGNsYXNzTmFtZXM6IFsgJ2ZsaXAtc3dpdGNoJyBdLFxuXG4gICAgbGF5b3V0OiBFbWJlci5IYW5kbGViYXJzLmNvbXBpbGUoXG4gICAgICAgICc8bGFiZWwgZm9yPVwie3t1bmJvdW5kIHZpZXcuY2hlY2tCb3hJZH19XCI+JyArXG4gICAgICAgICAgICAne3t2aWV3LmxhYmVsfX0nICtcbiAgICAgICAgICAgICc8aW5wdXQgaWQ9XCJ7e3VuYm91bmQgdmlldy5jaGVja0JveElkfX1cIiB0eXBlPVwiY2hlY2tib3hcIiB7e2JpbmQtYXR0ciBjaGVja2VkPVwidmlldy5jaGVja2VkXCJ9fT4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic3dpdGNoXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9sYWJlbD4nXG4gICAgKSxcblxuICAgIG9mZkxhYmVsOiAnT2ZmJyxcblxuICAgIG9uTGFiZWw6ICdPbicsXG5cbiAgICBwYWRkaW5nTGVmdDogJzJlbScsXG5cbiAgICBwcm9wZXJ0eU5hbWU6ICdjaGVja2VkJyxcblxuICAgIHRleHRJbmRlbnQ6ICctMi41ZW0nLFxuXG4gICAgd2lkdGg6ICczZW0nLFxuXG4gICAgYWRkQ3NzUnVsZTogZnVuY3Rpb24gKHN0eWxlU2hlZXQsIHNlbGVjdG9yLCBydWxlcykge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmIChzdHlsZVNoZWV0Lmluc2VydFJ1bGUpIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShzZWxlY3RvciArICd7JyArIHJ1bGVzICsgJ30nLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuYWRkUnVsZShzZWxlY3RvciwgcnVsZXMsIDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrQm94SWQ6IEVtYmVyLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gJ2NoZWNrZXItJyArICh0aGlzLmdldCgnZWxlbWVudElkJykpO1xuICAgIH0pLFxuXG4gICAgZGlkSW5zZXJ0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOnRydWUqL1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvKmpzbGludCBub21lbjpmYWxzZSovXG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy4kKCkuYXR0cignaWQnKSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgLypqc2xpbnQgbm9tZW46dHJ1ZSovXG4gICAgICAgIHRoaXMuX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOmZhbHNlKi9cbiAgICAgICAgcmV0dXJuIHRoaXMub24oJ2NoYW5nZScsIHRoaXMsIHRoaXMudXBkYXRlVmlldyk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVN0eWxlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgc2hlZXQsXG4gICAgICAgICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gVE9ETyAtIFJlbW92ZSBhbnkgQ1NTIHJ1bGVzIGFscmVhZHkgYWRkZWQgdG8gdGhlIGRvY3VtZW50IGZvciB0aGlzIGZsaXAgc3dpdGNoLlxuICAgICAgICB0aGlzLmFkZENzc1J1bGUoXG4gICAgICAgICAgICBzaGVldCxcbiAgICAgICAgICAgICcjJyArIGlkICsgJy5mbGlwLXN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBkaXYnLFxuICAgICAgICAgICAgJ3dpZHRoOiAnICsgdGhpcy5nZXQoJ3dpZHRoJykgKyAnOydcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hZGRDc3NSdWxlKFxuICAgICAgICAgICAgc2hlZXQsXG4gICAgICAgICAgICAnIycgKyBpZCArICcuZmxpcC1zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgZGl2OmFmdGVyJyxcbiAgICAgICAgICAgICdjb250ZW50OiBcIicgKyB0aGlzLmdldCgnb2ZmTGFiZWwnKSArICdcIjsnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3NzUnVsZShcbiAgICAgICAgICAgIHNoZWV0LFxuICAgICAgICAgICAgJyMnICsgaWQgKyAnLmZsaXAtc3dpdGNoIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGRpdjpiZWZvcmUnLFxuICAgICAgICAgICAgJ2NvbnRlbnQ6IFwiJyArIHRoaXMuZ2V0KCdvbkxhYmVsJykgKyAnXCI7JyArXG4gICAgICAgICAgICAgICAgJ3RleHQtaW5kZW50OiAnICsgdGhpcy5nZXQoJ3RleHRJbmRlbnQnKSArICc7J1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZENzc1J1bGUoXG4gICAgICAgICAgICBzaGVldCxcbiAgICAgICAgICAgICcjJyArIGlkICsgJy5mbGlwLXN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGRpdicsXG4gICAgICAgICAgICAncGFkZGluZy1sZWZ0OiAnICsgdGhpcy5nZXQoJ3BhZGRpbmdMZWZ0JykgKyAnOydcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlVmlldzogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBpc0NoZWNrZWQgPSB0aGlzLiQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAgICAgcGFyZW50VmlldyA9IHRoaXMuZ2V0KCdwYXJlbnRWaWV3Jyk7XG4gICAgICAgIHBhcmVudFZpZXcuc2V0KHRoaXMuZ2V0KCdwcm9wZXJ0eU5hbWUnKSwgaXNDaGVja2VkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdjaGVja2VkJywgaXNDaGVja2VkKTtcbiAgICB9XG59KTtcbiIsInJlcXVpcmUoJy4vYnMtaWNvbi1saXN0LWdyb3VwLmpzJyk7XG5yZXF1aXJlKCcuL2VtYWlsLWlucHV0LmpzJyk7XG5yZXF1aXJlKCcuL2ZsaXAtc3dpdGNoLmpzJyk7XG5yZXF1aXJlKCcuL3BhZ2UtcGFuZWwuanMnKTtcbnJlcXVpcmUoJy4vcGFzc3dvcmQtaW5wdXQuanMnKTtcbnJlcXVpcmUoJy4vcmVnZXhwLWlucHV0LmpzJyk7XG5yZXF1aXJlKCcuL3NwbGl0LXBhbmVsLXRvZ2dsZS5qcycpO1xucmVxdWlyZSgnLi9zcGxpdC1wYW5lbC5qcycpO1xucmVxdWlyZSgnLi90aW1lem9uZS1waWNrZXItZGlhbG9nLmpzJyk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG4vKiBDb21wb25lbnQgdG8gd3JhcCBhIGhlYWRlciwgZm9vdGVyLCBhbmQgZGl2IGVsZW1lbnQgc28gdGhhdCB0aGUgaGVhZGVyIGFuZCBmb290ZXJcbiAqIGFyZSBmaXhlZCBhbmQgdGhlIGRpdiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIGNvbnRlbnRzXG4gKlxuICogVXNlOlxuICogYGBgXG4gKiB7eyNwYWdlLXBhbmVsIGNvbGxhcHNlZEhlYWRlcj1mYWxzZSBjb2xsYXBzZWRGb290ZXI9ZmFsc2V9fVxuICogICAgIDxoZWFkZXI+PC9oZWFkZXI+XG4gKiAgICAgPGRpdiBjbGFzcz0nc2Nyb2xsYWJsZSc+PC9kaXY+XG4gKiAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAqIHt7L3BhZ2UtcGFuZWx9fVxuICogYGBgXG4gKlxuICogY3NzIHRvIGFsbG93IGZvciBzY3JvbGxhYmxlIGNvbnRlbnQ6XG4gKiBgYGBcbiAqIC5zY3JvbGxhYmxlIHsgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7IH1cbiAqIC5wYWdlLXBhbmVsID4gZGl2IHsgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gKiBgYGBcbiAqL1xuXG5WaW56LlBhZ2VQYW5lbCA9IEVtYmVyLkNvbXBvbmVudC5leHRlbmQoe1xuICAgIC8vIG9wdGlvbnNcbiAgICBleHBhbmRlZEhlYWRlcjogdHJ1ZSxcbiAgICBjb2xsYXBzZWRIZWFkZXI6IEVtYmVyLmNvbXB1dGVkLm5vdCgnZXhwYW5kZWRIZWFkZXInKSxcbiAgICBleHBhbmRlZEZvb3RlcjogdHJ1ZSxcbiAgICBjb2xsYXBzZWRGb290ZXI6IEVtYmVyLmNvbXB1dGVkLm5vdCgnZXhwYW5kZWRGb290ZXInKSxcbiAgICBjb2xsYXBzZWRPcGFjaXR5OiAwLFxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIGhlYWRlcjogbnVsbCxcbiAgICBmb290ZXI6IG51bGwsXG4gICAgZGl2OiBudWxsLFxuXG4gICAgY2xhc3NOYW1lczogJ3BhZ2UtcGFuZWwnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMjUwbXMgZWFzZS1vdXQnLFxuXG4gICAgZGlkSW5zZXJ0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOnRydWUqL1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvKmpzbGludCBub21lbjpmYWxzZSovXG4gICAgICAgIEVtYmVyLnJ1bi5zY2hlZHVsZU9uY2UoJ2FmdGVyUmVuZGVyJywgdGhpcywgdGhpcy5vbmNlQWZ0ZXJSZW5kZXIpO1xuICAgIH0sXG5cbiAgICBvbmNlQWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaGgsIGZoO1xuICAgICAgICB0aGlzLmVuYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmRpdiA9IHRoaXMuJCgnPmRpdicpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IHRoaXMuJCgnPmhlYWRlcicpO1xuICAgICAgICB0aGlzLmZvb3RlciA9IHRoaXMuJCgnPmZvb3RlcicpO1xuXG4gICAgICAgIHRoaXMuaGVhZGVySGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5oZWFkZXJPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmZvb3RlckhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZm9vdGVyT2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5kaXYpIHtcbiAgICAgICAgICAgIHRoaXMuZGl2LmNzcyh7cG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHJpZ2h0OiAwfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNzcyh7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDB9KTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVySGVpZ2h0ID0gdGhpcy5oZWFkZXIuaGVpZ2h0KCkgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyT2Zmc2V0ID0gKHRoaXMuaGVhZGVyLm91dGVySGVpZ2h0KCkgfHwgMCkgLSB0aGlzLmhlYWRlckhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvb3Rlcikge1xuICAgICAgICAgICAgdGhpcy5mb290ZXIuY3NzKHtwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAwLCBsZWZ0OiAwLCByaWdodDogMH0pO1xuICAgICAgICAgICAgdGhpcy5mb290ZXJIZWlnaHQgPSB0aGlzLmZvb3Rlci5oZWlnaHQoKSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5mb290ZXJPZmZzZXQgPSAodGhpcy5mb290ZXIub3V0ZXJIZWlnaHQoKSB8fCAwKSAtIHRoaXMuZm9vdGVySGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyICYmIHRoaXMuZ2V0KCdjb2xsYXBzZWRIZWFkZXInKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2SGVhZGVyT3BhY2l0eSA9IHRoaXMuaGVhZGVyLmNzcygnb3BhY2l0eScpO1xuICAgICAgICAgICAgaGggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGggPSB0aGlzLmhlYWRlckhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvb3RlciAmJiB0aGlzLmdldCgnY29sbGFwc2VkRm9vdGVyJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJldkZvb3Rlck9wYWNpdHkgPSB0aGlzLmZvb3Rlci5jc3MoJ29wYWNpdHknKTtcbiAgICAgICAgICAgIGZoID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZoID0gdGhpcy5mb290ZXJIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2VSZXNpemUoaGgsIGZoKTtcbiAgICB9LFxuXG4gICAgcGFnZVJlc2l6ZTogZnVuY3Rpb24gKGhoLCBmaCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcikgeyB0aGlzLmhlYWRlci5oZWlnaHQoaGgpOyB9XG4gICAgICAgIGlmICh0aGlzLmZvb3RlcikgeyB0aGlzLmZvb3Rlci5oZWlnaHQoZmgpOyB9XG4gICAgICAgIGlmIChoaCA+IDApIHsgaGggKz0gdGhpcy5oZWFkZXJPZmZzZXQ7IH1cbiAgICAgICAgaWYgKGZoID4gMCkgeyBmaCArPSB0aGlzLmZvb3Rlck9mZnNldDsgfVxuICAgICAgICBpZiAodGhpcy5kaXYpIHsgdGhpcy5kaXYuY3NzKHt0b3A6IGhoLCBib3R0b206IGZofSk7IH1cbiAgICB9LFxuXG4gICAgYXBwbHlUcmFuc2l0aW9uOiBmdW5jdGlvbiAodHJhbnNpdGlvbiwgZWxlbWVudHMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICctbW96LXRyYW5zaXRpb24nOiB0cmFuc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zaXRpb24nOiB0cmFuc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAnLW8tdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZW5hYmxlVHJhbnNpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMuYXBwbHlUcmFuc2l0aW9uKHRoaXMuZ2V0KCd0cmFuc2l0aW9uJyksIFt0aGlzLmhlYWRlciwgdGhpcy5mb290ZXIsIHRoaXMuZGl2XSk7XG4gICAgICAgIHRoaXMuc2V0KCdlbmFibGVkVHJhbnNpdGlvbicsIHRydWUpO1xuICAgIH0sXG5cbiAgICBkaXNhYmxlVHJhbnNpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMuYXBwbHlUcmFuc2l0aW9uKCcnLCBbdGhpcy5oZWFkZXIsIHRoaXMuZm9vdGVyLCB0aGlzLmRpdl0pO1xuICAgICAgICB0aGlzLnNldCgnZW5hYmxlZFRyYW5zaXRpb24nLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIGNvbGxhcHNlZENoYW5nZWQ6IEVtYmVyLm9ic2VydmVyKCdjb2xsYXBzZWRGb290ZXInLCAnY29sbGFwc2VkSGVhZGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBoaCwgZmgsIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGhoID0gdGhpcy5oZWFkZXJIZWlnaHQ7XG4gICAgICAgIGZoID0gdGhpcy5mb290ZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2NvbGxhcHNlZEhlYWRlcicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2SGVhZGVyT3BhY2l0eSA9IHRoaXMuaGVhZGVyLmNzcygnb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNzcygnb3BhY2l0eScsIHRoaXMuZ2V0KCdjb2xsYXBzZU9wYWNpdHknKSk7XG4gICAgICAgICAgICAgICAgaGggPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5jc3MoJ29wYWNpdHknLCB0aGlzLmdldCgncHJldkhlYWRlck9wYWNpdHknKSk7XG4gICAgICAgICAgICAgICAgaGggPSB0aGlzLmhlYWRlckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdjb2xsYXBzZWRGb290ZXInKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldkZvb3Rlck9wYWNpdHkgPSB0aGlzLmZvb3Rlci5jc3MoJ29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3Rlci5jc3MoJ29wYWNpdHknLCB0aGlzLmdldCgnY29sbGFwc2VPcGFjaXR5JykpO1xuICAgICAgICAgICAgICAgIGZoID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXIuY3NzKCdvcGFjaXR5JywgdGhpcy5nZXQoJ3ByZXZGb290ZXJPcGFjaXR5JykpO1xuICAgICAgICAgICAgICAgIGZoID0gdGhpcy5mb290ZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2VSZXNpemUoaGgsIGZoKTtcblxuICAgICAgICBpZiAoIXRoaXMuZ2V0KCdlbmFibGVkVHJuYXNpdGlvbicpKSB7XG4gICAgICAgICAgICBFbWJlci5ydW4ubmV4dChmdW5jdGlvbiAoKSB7IHNlbGYuZW5hYmxlVHJhbnNpdGlvbigpOyB9KTtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuRW1iZXIuSGFuZGxlYmFycy5oZWxwZXIoJ3BhZ2UtcGFuZWwnLCBWaW56LlBhZ2VQYW5lbCk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIgKi9cblxucmVxdWlyZSgnLi4vbWl4aW5zL2lucHV0VmFsaWRhdGlvbk1peGluJyk7XG5cblZpbnouUGFzc3dvcmRJbnB1dCA9IEVtYmVyLlRleHRGaWVsZC5leHRlbmQoVmluei5JbnB1dFZhbGlkYXRpb25NaXhpbiwge1xuXG4gICAgZGlkSW5zZXJ0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMuJCgpLmF0dHIoJ3R5cGUnLCAncGFzc3dvcmQnKTtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGVWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBpc1ZhbHVlRW1wdHkgPSB0aGlzLmdldCgnaXNWYWx1ZUVtcHR5JyksXG4gICAgICAgICAgICBpc1ZhbHVlVmFsaWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2lzVmFsdWVSZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWx1ZUVtcHR5KSB7XG4gICAgICAgICAgICAgICAgaXNWYWx1ZVZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdpc1ZhbHVlVmFsaWQnKSAhPT0gaXNWYWx1ZVZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnaXNWYWx1ZVZhbGlkJywgaXNWYWx1ZVZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnd2FzVmFsdWVFbXB0eScpICE9PSBpc1ZhbHVlRW1wdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnd2FzVmFsdWVFbXB0eScsIGlzVmFsdWVFbXB0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbHVlVmFsaWRpdHlDaGFuZ2VkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuRW1iZXIuSGFuZGxlYmFycy5oZWxwZXIoJ3Bhc3N3b3JkLWlucHV0JywgVmluei5QYXNzd29yZElucHV0KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciAqL1xuXG5yZXF1aXJlKCcuLi9taXhpbnMvaW5wdXRWYWxpZGF0aW9uTWl4aW4nKTtcblxuVmluei5SZWdleHBJbnB1dENvbXBvbmVudCA9IEVtYmVyLlRleHRGaWVsZC5leHRlbmQoVmluei5JbnB1dFZhbGlkYXRpb25NaXhpbiwge1xuXG4gICAgYXR0cmlidXRlQmluZGluZ3M6IFsnc3BlbGxjaGVjayddLFxuXG4gICAgY2xhc3NOYW1lQmluZGluZ3M6IFsnaGFzRXJyb3I6aGFzLWVycm9yJywgJ2hhc1N1Y2Nlc3M6aGFzLXN1Y2Nlc3MnLCAnaGFzV2FybmluZzpoYXMtd2FybmluZyddLFxuXG4gICAgcGF0dGVybjogJy4qJyxcblxuICAgIGV4cHJlc3Npb246IEVtYmVyLmNvbXB1dGVkKCdwYXR0ZXJuJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMuZ2V0KCdwYXR0ZXJuJykpO1xuICAgIH0pLFxuXG4gICAgaGFzRXJyb3I6IEVtYmVyLmNvbXB1dGVkKCd2YWx1ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdleHByZXNzaW9uJykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYWRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhZEVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdoYXNTdWNjZXNzJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIEVtYmVyLnJ1bi5sYXRlcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNEZXN0cm95ZWQpIHsgdGhpcy5zZXQoJ2hhc1N1Y2Nlc3MnLCBmYWxzZSk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnaGFzU3VjY2VzcycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0KCdleHByZXNzaW9uJykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnaGFzU3VjY2VzcycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdGhpcy5nZXQoJ2lzVmFsdWVSZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXNFcnJvcjtcbiAgICB9KSxcblxuICAgIHZhbGlkYXRlVmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaXNWYWx1ZUVtcHR5ID0gdGhpcy5nZXQoJ2lzVmFsdWVFbXB0eScpLFxuICAgICAgICAgICAgaXNWYWx1ZVZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmdldCgnZXhwcmVzc2lvbicpO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2lzVmFsdWVSZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWx1ZUVtcHR5KSB7XG4gICAgICAgICAgICAgICAgaXNWYWx1ZVZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVmFsdWVWYWxpZCAmJiBleHByZXNzaW9uKSB7XG4gICAgICAgICAgICBpc1ZhbHVlVmFsaWQgPSBleHByZXNzaW9uLnRlc3QodGhpcy5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldCgnaXNWYWx1ZVZhbGlkJykgIT09IGlzVmFsdWVWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2lzVmFsdWVWYWxpZCcsIGlzVmFsdWVWYWxpZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXQoJ3dhc1ZhbHVlRW1wdHknKSAhPT0gaXNWYWx1ZUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnd2FzVmFsdWVFbXB0eScsIGlzVmFsdWVFbXB0eSk7XG4gICAgICAgICAgICB0aGlzLm9uVmFsdWVWYWxpZGl0eUNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5FbWJlci5IYW5kbGViYXJzLmhlbHBlcigndHQtdGV4dGZpZWxkJywgVmluei5SZWdleHBJbnB1dENvbXBvbmVudCk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG4vKiBDb21wb25lbnQgdG8gY29sbGFwc2UgdGhlIGp1c3RpZmllZCBzaWRlIG9mIGEgc3BsaXQtcGFuZWwuXG4gKlxuICogQ3JlYXRlcyBhIGNsaWNrYWJsZSBkaXYgd2l0aCBhbiBpY29uIHRoYXQgdG9nZ2xlcyBiZXR3ZWVuIGxlZnQgYW5kIHJpZ2h0OlxuICogd2hlbiBjb2xsYXBzZWQgaXMgdHJ1ZTpcbiAqIGBgYFxuICogPGRpdiBjbGFzcz0nc3BsaXQtcGFuZWwtdG9nZ2xlIHNwbGl0LXBhbmVsLXRvZ2dsZS1sZWZ0Jz48aSBjbGFzcz0nZmEgZmEtY2FyZXQtcmlnaHQnPjwvaT48L2Rpdj5cbiAqIGBgYFxuICogd2hlbiBjb2xsYXBzZWQgaXMgZmFsc2UgKHNlbGVjdGVkKTpcbiAqIGBgYFxuICogPGRpdiBjbGFzcz0nc3BsaXQtcGFuZWwtdG9nZ2xlIHNwbGl0LXBhbmVsLXRvZ2dsZS1sZWZ0IHNlbGVjdGVkJz48aSBjbGFzcz0nZmEgZmEtY2FyZXQtbGVmdCc+PC9pPjwvZGl2PlxuICogYGBgXG4gKlxuICogVXNlOlxuICogYGBgXG4gKiB7e3NwbGl0LXBhbmVsLXRvZ2dsZSBjb2xsYXBzZWQ9c3BsaXRDb2xsYXBzZWR9fVxuICoge3sjc3BsaXQtcGFuZWwgY29sbGFwc2VkPXNwbGl0Q29sbGFwc2VkfX1cbiAqICAgICA8ZGl2PjwvZGl2PlxuICogICAgIDxkaXY+PC9kaXY+XG4gKiB7ey9zcGxpdC1wYW5lbH19XG4gKiBgYGBcbiAqL1xuXG5WaW56LlNwbGl0UGFuZWxUb2dnbGUgPSBFbWJlci5Db21wb25lbnQuZXh0ZW5kKHtcbiAgICAvLyBvcHRpb25zXG4gICAganVzdGlmeTogJ2xlZnQnLFxuXG4gICAgdGFnOiAnbGFiZWwnLFxuICAgIGNsYXNzTmFtZUJpbmRpbmdzOiBbJzpzcGxpdC1wYW5lbC10b2dnbGUnLCAnOnVuc2VsZWN0YWJsZScsICdpc0xlZnQ6c3BsaXQtcGFuZWwtdG9nZ2xlLWxlZnQ6c3BsaXQtcGFuZWwtdG9nZ2xlOnJpZ2h0JywgJ2NvbGxhcHNlZDo6c2VsZWN0ZWQnXSxcbiAgICBsYXlvdXQ6IEVtYmVyLkhhbmRsZWJhcnMuY29tcGlsZSgnPHNwYW4ge3tiaW5kLWF0dHIgY2xhc3M9XCI6ZmEgaWNvbkNsYXNzXCJ9fT48L3NwYW4+JyksXG4gICAgbGVmdFJpZ2h0Q2xhc3M6IFsgJ2ZhLWNhcmV0LWxlZnQnLCAnZmEtY2FyZXQtcmlnaHQnIF0sXG5cbiAgICBkaWRJbnNlcnRFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICB9LFxuXG4gICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnNldCgnY29sbGFwc2VkJywgIXRoaXMuZ2V0KCdjb2xsYXBzZWQnKSk7XG4gICAgfSxcblxuICAgIGlzTGVmdDogRW1iZXIuY29tcHV0ZWQoJ2p1c3RpZnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldCgnanVzdGlmeScpID09PSAnbGVmdCcpO1xuICAgIH0pLFxuXG4gICAgaWNvbkNsYXNzOiBFbWJlci5jb21wdXRlZCgnanVzdGlmeScsICdjb2xsYXBzZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmdldCgnanVzdGlmeScpID09PSAnbGVmdCc7XG4gICAgICAgIGlmICh0aGlzLmdldCgnY29sbGFwc2VkJykpIHsgbGVmdCA9ICFsZWZ0OyB9XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnRSaWdodENsYXNzW2xlZnQgPyAwIDogMV07XG4gICAgfSlcbn0pO1xuRW1iZXIuSGFuZGxlYmFycy5oZWxwZXIoJ3NwbGl0LXBhbmVsLXRvZ2dsZScsIFZpbnouU3BsaXRQYW5lbFRvZ2dsZSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgZG9jdW1lbnQsIEVtYmVyICovXG5cbi8qIENvbXBvbmVudCB0byB3cmFwIGEgaGVhZGVyLCBmb290ZXIsIGFuZCBkaXYgZWxlbWVudCBzbyB0aGF0IHRoZSBoZWFkZXIgYW5kIGZvb3RlclxuICogYXJlIGZpeGVkIGFuZCB0aGUgZGl2IGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgY29udGVudHNcbiAqXG4gKiBPcHRpb25hbGx5IHNwZWNpZnkgd2ljaCBzaWRlIGRpY3RhdGVzIHdpZHRoIGFuZCBjb2xsYXBzZXMgKGRlZmF1bHQgaXMgbGVmdCBleHBhbmRlZCkuXG4gKiBDb2xsYXBzZWQgb3IgZXhwYW5kZWQgY2FuIGJlIGJvdW5kIHRvIGEgdmFsdWUuXG4gKlxuICogYGBgXG4gKiB7eyNzcGxpdC1wYW5lbCBqdXN0aWZ5PSdsZWZ0JyBjb2xsYXBzZWQ9dmFsdWV9fVxuICogICAgIDxkaXYgY2xhc3M9J3Njcm9sbGFibGUnPjwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9J3Njcm9sbGFibGUnPjwvZGl2PlxuICoge3svc3BsaXQtcGFuZWx9fVxuICogYGBgXG4gKlxuICogVGhlIGNsYXNzICd1bnNlbGVjdGFibGUnIGlzIHVzZWQgdG8gYXZvaWQgc2VsZWN0aW5nIHRleHQgd2hpbGUgcmVzaXppbmc6XG4gKiBgYGBcbiAqIC51bnNlbGVjdGFibGUge1xuICogICAgIHVzZXItc2VsZWN0OiBub25lO1xuICogICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gKiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gKiAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBjc3MgdG8gbWFrZSBhcmVhcyBzY3JvbGxhYmxlIG9yIG5vdDpcbiAqIGBgYFxuICogLnNjcm9sbGFibGUgeyBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDsgfVxuICogLnNwbGl0LXBhbmVsID4gZGl2IHsgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gKiBgYGBcbiAqL1xuXG5WaW56LlNwbGl0UGFuZWwgPSBFbWJlci5Db21wb25lbnQuZXh0ZW5kKHtcbiAgICAvLyBvcHRpb25zXG4gICAgbWluOiAwLFxuICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICBqdXN0aWZ5OiAnbGVmdCcsXG4gICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgY29sbGFwc2VkOiBFbWJlci5jb21wdXRlZC5ub3QoJ2V4cGFuZGVkJyksXG4gICAgY29sbGFwc2VPcGFjaXR5OiAwLFxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHBhbmVzOiBudWxsLFxuICAgIGJhcjogbnVsbCxcbiAgICBsZWZ0OiBudWxsLFxuICAgIHJpZ2h0OiBudWxsLFxuICAgIGJhckV2ZW50OiBudWxsLFxuICAgIG9mZnNldDogMCxcbiAgICBvcmlnV2lkdGg6IDAsXG4gICAgZGVsdGFEaXI6IDEsXG5cbiAgICBjbGFzc05hbWVzOiAnc3BsaXQtcGFuZWwnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMjUwbXMgZWFzZS1vdXQnLFxuXG4gICAgZGlkSW5zZXJ0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOnRydWUqL1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvKmpzbGludCBub21lbjpmYWxzZSovXG4gICAgICAgIHRoaXMuZGVsdGFEaXIgPSAodGhpcy5qdXN0aWZ5ID09PSAnbGVmdCcpID8gMSA6IC0xO1xuICAgICAgICBFbWJlci5ydW4uc2NoZWR1bGVPbmNlKCdhZnRlclJlbmRlcicsIHRoaXMsIHRoaXMub25jZUFmdGVyUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgb25jZUFmdGVyUmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHdpZHRoO1xuXG4gICAgICAgIHRoaXMucGFuZXMgPSB0aGlzLiQoJz5kaXYnKTtcbiAgICAgICAgdGhpcy5wYW5lcy5jc3Moe3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCAnLW1vei1vdXRsaW5lLXN0eWxlJzogJ25vbmUnfSk7XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy4kKHRoaXMucGFuZXNbMF0pO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy4kKHRoaXMucGFuZXNbMV0pO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMuJCh0aGlzLnBhbmVzWzJdIHx8ICc8ZGl2IHN0eWxlPVwid2lkdGg6MTBweDttYXJnaW4tJyArIHRoaXMuanVzdGlmeSArICc6LTVweFwiPjwvZGl2PicpLmluc2VydEFmdGVyKHRoaXMucmlnaHQpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIHRoaXMubGVmdC5jc3Moe2xlZnQ6IDAsIHRvcDogMCwgYm90dG9tOiAwfSk7XG4gICAgICAgIHRoaXMucmlnaHQuY3NzKHtyaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9KTtcblxuICAgICAgICB0aGlzLmJhci5hZGRDbGFzcygnc3BsaXQtYmFyIHNwbGl0LWJhci0nICsgdGhpcy5qdXN0aWZ5KTtcbiAgICAgICAgdGhpcy5iYXIuYXR0cih7IHVuc2VsZWN0YWJsZTogJ29uJyB9KTtcbiAgICAgICAgdGhpcy5iYXIuY3NzKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIGN1cnNvcjogJ2V3LXJlc2l6ZScsIHRvcDogMCwgYm90dG9tOiAwIH0pO1xuICAgICAgICB0aGlzLmJhci5vbignbW91c2Vkb3duJywgdGhpcywgdGhpcy5iYXJNb3VzZURvd24pO1xuXG4gICAgICAgIHdpZHRoID0gdGhpc1t0aGlzLmp1c3RpZnldLndpZHRoKCk7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpc1t0aGlzLmp1c3RpZnldLm91dGVyV2lkdGgodHJ1ZSkgLSB3aWR0aDtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgncHJldk9wYWNpdHknLCB0aGlzW3RoaXMuanVzdGlmeV0uY3NzKCdvcGFjaXR5JykpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3ByZXZXaWR0aCcsIHdpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuYmFyLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRSZXNpemUoMCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwbGl0UmVzaXplKHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBiYXJNb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciB0aGF0ID0gZXZlbnQuZGF0YTtcbiAgICAgICAgdGhhdC5mcm9tWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICB0aGF0Lm9yaWdXaWR0aCA9IHRoYXRbdGhhdC5qdXN0aWZ5XS53aWR0aCgpO1xuXG4gICAgICAgIHRoYXQuZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICB0aGF0LmJhci5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRoYXQuJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygndW5zZWxlY3RhYmxlJyk7XG4gICAgICAgIHRoYXQuJChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIHRoYXQsIHRoYXQuYmFyTW91c2VNb3ZlKS5vbignbW91c2V1cCcsIHRoYXQsIHRoYXQuYmFyTW91c2VVcCk7XG4gICAgfSxcblxuICAgIGJhck1vdXNlTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHRoYXQgPSBldmVudC5kYXRhLFxuICAgICAgICAgICAgZGVsdGEgPSBldmVudC5wYWdlWCAtIHRoYXQuZnJvbVgsXG4gICAgICAgICAgICB3aWR0aCA9IHRoYXQub3JpZ1dpZHRoICsgKGRlbHRhICogdGhhdC5kZWx0YURpcik7XG4gICAgICAgIHRoYXQuc3BsaXRSZXNpemUod2lkdGgpO1xuICAgIH0sXG5cbiAgICBiYXJNb3VzZVVwOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdGhhdCA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgdGhhdC5lbmFibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdGhhdC5iYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0aGF0LiQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ3Vuc2VsZWN0YWJsZScpO1xuICAgICAgICB0aGF0LiQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJywgdGhhdC5iYXJNb3VzZU1vdmUpLm9mZignbW91c2V1cCcsIHRoYXQuYmFyTW91c2VVcCk7XG4gICAgfSxcblxuICAgIHNwbGl0UmVzaXplOiBmdW5jdGlvbiAod2lkdGgsIGlnbm9yZUxpbWl0cykge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBwb3M7XG5cbiAgICAgICAgaWYgKCFpZ25vcmVMaW1pdHMpIHtcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgoTWF0aC5taW4od2lkdGgsIHRoaXMuZ2V0KCdtYXgnKSksIHRoaXMuZ2V0KCdtaW4nKSk7XG4gICAgICAgICAgICB0aGlzW3RoaXMuanVzdGlmeV0ucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1t0aGlzLmp1c3RpZnldLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW3RoaXMuanVzdGlmeV0ud2lkdGgod2lkdGgpO1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgcG9zID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcyA9IHdpZHRoICsgdGhpcy5vZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5qdXN0aWZ5ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHQuY3NzKHtsZWZ0OiBwb3MgKyAncHgnfSk7XG4gICAgICAgICAgICB0aGlzLmJhci5jc3Moe2xlZnQ6IHBvcyArICdweCd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGVmdC5jc3Moe3JpZ2h0OiBwb3MgKyAncHgnfSk7XG4gICAgICAgICAgICB0aGlzLmJhci5jc3Moe3JpZ2h0OiBwb3MgKyAncHgnfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXBwbHlUcmFuc2l0aW9uOiBmdW5jdGlvbiAodHJhbnNpdGlvbiwgZWxlbWVudHMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2l0aW9uJzogdHJhbnNpdGlvbixcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24nOiB0cmFuc2l0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGVuYWJsZVRyYW5zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLmFwcGx5VHJhbnNpdGlvbih0aGlzLmdldCgndHJhbnNpdGlvbicpLCBbdGhpcy5sZWZ0LCB0aGlzLnJpZ2h0LCB0aGlzLmJhcl0pO1xuICAgICAgICB0aGlzLnNldCgnZW5hYmxlZFRyYW5zaXRpb24nLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZVRyYW5zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLmFwcGx5VHJhbnNpdGlvbignJywgW3RoaXMubGVmdCwgdGhpcy5yaWdodCwgdGhpcy5iYXJdKTtcbiAgICAgICAgdGhpcy5zZXQoJ2VuYWJsZWRUcmFuc2l0aW9uJywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBjb2xsYXBzZWRDaGFuZ2VkOiBFbWJlci5vYnNlcnZlcignY29sbGFwc2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdjb2xsYXBzZWQnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2V2lkdGggPSB0aGlzW3RoaXMuanVzdGlmeV0ud2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMucHJldk9wYWNpdHkgPSB0aGlzW3RoaXMuanVzdGlmeV0uY3NzKCdvcGFjaXR5Jyk7XG4gICAgICAgICAgICB0aGlzW3RoaXMuanVzdGlmeV0uY3NzKCdvcGFjaXR5JywgdGhpcy5nZXQoJ2NvbGxhcHNlT3BhY2l0eScpKTtcbiAgICAgICAgICAgIHRoaXNbdGhpcy5qdXN0aWZ5XS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB0aGlzLmJhci5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnNwbGl0UmVzaXplKDAsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1t0aGlzLmp1c3RpZnldLmNzcygnb3BhY2l0eScsIHRoaXMucHJldk9wYWNpdHkpO1xuICAgICAgICAgICAgdGhpc1t0aGlzLmp1c3RpZnldLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYmFyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRSZXNpemUodGhpcy5wcmV2V2lkdGgsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ2V0KCdlbmFibGVkVHJhbnNpdGlvbicpKSB7XG4gICAgICAgICAgICBFbWJlci5ydW4ubmV4dChmdW5jdGlvbiAoKSB7IHRoYXQuZW5hYmxlVHJhbnNpdGlvbigpOyB9KTtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuRW1iZXIuSGFuZGxlYmFycy5oZWxwZXIoJ3NwbGl0LXBhbmVsJywgVmluei5TcGxpdFBhbmVsKTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciwgbW9tZW50Ki9cblxuVmluei5UaW1lem9uZVBpY2tlckRpYWxvZ0NvbXBvbmVudCA9IEVtYmVyLkNvbXBvbmVudC5leHRlbmQoe1xuXG4gICAgbmVlZHM6IFsndGltZXpvbmUnXSxcblxuICAgIHRpbWV6b25lQ29udHJvbGxlciA6IG51bGwsIC8vIG5lZWRzIHRvIGJlIHNldCBpbiByZWZlcmVuY2luZyB2aWV3IG9yIHRlbXBsYXRlXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGhpZGVEaWFsb2c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHRoaXMuZ2V0KCd0aW1lem9uZUNvbnRyb2xsZXInKS5zZW5kKCdoaWRlRGlhbG9nJywgdGhpcy5nZXQoJ3RpbWV6b25lUGlja2VyRGlhbG9nTmFtZScpKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldE1hcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy5nZXQoJ3RpbWV6b25lQ29udHJvbGxlcicpLnNlbmQoJ3Jlc2V0TWFwJywgdGhpcy5nZXQoJ21hcFBhbmVsSWQnKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VsZWN0VGltZXpvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXMsIHNlbE5hbWUgPSB0aGlzLmdldChcIl9zZWxlY3RlZFRpbWV6b25lTmFtZVwiKSwgc2VsT2xzb24gPSB0aGlzLmdldChcIl9zZWxlY3RlZFRpbWV6b25lT2xzb25cIik7XG4gICAgICAgICAgICBtZS5zZXQoXCJzZWxlY3RlZFRpbWV6b25lTmFtZVwiLCBzZWxOYW1lKTtcbiAgICAgICAgICAgIG1lLnNldChcInNlbGVjdGVkVGltZXpvbmVPbHNvblwiLCBzZWxPbHNvbik7XG4gICAgICAgICAgICB0aGlzLmdldCgndGltZXpvbmVDb250cm9sbGVyJykuc2VuZCgnaGlkZURpYWxvZycsIG1lLmdldCgndGltZXpvbmVQaWNrZXJEaWFsb2dOYW1lJykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGN1cnJlbnRUaW1lRGlzcGxheTogbnVsbCxcblxuICAgIGhvdmVyVGltZURpc3BsYXk6IG51bGwsXG5cbiAgICBtYXBQYW5lbElkOiAnbWFwLXBhbmVsLWlkJyxcblxuICAgIHNlbGVjdGVkVGltZURpc3BsYXk6IG51bGwsXG5cbiAgICBzZWxlY3RlZFRpbWV6b25lTmFtZTogbnVsbCxcblxuICAgIHNlbGVjdGVkVGltZXpvbmVPbHNvbjogbnVsbCxcblxuICAgIHRpbWV6b25lUGlja2VyRGlhbG9nTmFtZTogJ3RpbWV6b25lUGlja2VyRGlhbG9nJyxcblxuICAgIHRpbWV6b25lUGlja2VyQnV0dG9uczogW1xuICAgICAgICBFbWJlci5PYmplY3QuY3JlYXRlKHsgdGl0bGU6ICdSZXNldCBNYXAnLCBjbGlja2VkOiAncmVzZXRNYXAnIH0pLFxuICAgICAgICBFbWJlci5PYmplY3QuY3JlYXRlKHsgdGl0bGU6ICdTZWxlY3QgVGltZXpvbmUnLCBjbGlja2VkOiAnc2VsZWN0VGltZXpvbmUnIH0pLFxuICAgICAgICBFbWJlci5PYmplY3QuY3JlYXRlKHsgdGl0bGU6ICdDYW5jZWwnLCBjbGlja2VkOiAnaGlkZURpYWxvZycgfSlcbiAgICBdLFxuXG4gICAgaG92ZXJUaW1lem9uZVNlbGVjdGVkOiBFbWJlci5vYnNlcnZlcigndGltZXpvbmVDb250cm9sbGVyLmhvdmVyVGltZXpvbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIG5ld1RpbWUsIG9sc29uTmFtZSwgdHpOYW1lO1xuICAgICAgICBvbHNvbk5hbWUgPSB0aGlzLmdldCgndGltZXpvbmVDb250cm9sbGVyLmhvdmVyT2xzb25UaW1lem9uZScpO1xuICAgICAgICB0ek5hbWUgPSB0aGlzLmdldCgndGltZXpvbmVDb250cm9sbGVyLmhvdmVyVGltZXpvbmUnKTtcbiAgICAgICAgaWYgKCFFbWJlci5pc05vbmUob2xzb25OYW1lKSAmJiAhRW1iZXIuaXNOb25lKHR6TmFtZSkpIHtcbiAgICAgICAgICAgIG5ld1RpbWUgPSBtb21lbnQoKS50eihvbHNvbk5hbWUpLmZvcm1hdCgnaGg6bW06c3MgQScpICsgJyAnICsgdHpOYW1lO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2hvdmVyVGltZURpc3BsYXknLCBuZXdUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdob3ZlclRpbWVEaXNwbGF5JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAvKmpzbGludCBub21lbjp0cnVlKi9cbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgLypqc2xpbnQgbm9tZW46ZmFsc2UqL1xuICAgICAgICB0aGlzLnNldCgndGltZXpvbmVDb250cm9sbGVyLmluaXRpYWxPbHNvblRpbWV6b25lJywgdGhpcy5nZXQoJ3NlbGVjdGVkVGltZXpvbmVPbHNvbicpKTtcbiAgICB9LFxuXG4gICAgc2VsZWN0ZWRUaW1lem9uZTogRW1iZXIub2JzZXJ2ZXIoJ3RpbWV6b25lQ29udHJvbGxlci5zZWxlY3RlZFRpbWV6b25lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBuZXdUaW1lLCBvbHNvbk5hbWUsIHR6TmFtZTtcbiAgICAgICAgb2xzb25OYW1lID0gdGhpcy5nZXQoJ3RpbWV6b25lQ29udHJvbGxlci5zZWxlY3RlZE9sc29uVGltZXpvbmUnKTtcbiAgICAgICAgdHpOYW1lID0gdGhpcy5nZXQoJ3RpbWV6b25lQ29udHJvbGxlci5zZWxlY3RlZFRpbWV6b25lJyk7XG4gICAgICAgIGlmICghRW1iZXIuaXNOb25lKG9sc29uTmFtZSkgJiYgIUVtYmVyLmlzTm9uZSh0ek5hbWUpKSB7XG4gICAgICAgICAgICBuZXdUaW1lID0gbW9tZW50KCkudHoob2xzb25OYW1lKS5mb3JtYXQoJ2hoOm1tOnNzYScpICsgJyAnICsgdHpOYW1lICsgJyAoICcgKyBvbHNvbk5hbWUgKyAnICknO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkVGltZURpc3BsYXknLCBuZXdUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZFRpbWVEaXNwbGF5JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXQoJ19zZWxlY3RlZFRpbWV6b25lT2xzb24nLCBvbHNvbk5hbWUpO1xuICAgICAgICB0aGlzLnNldCgnX3NlbGVjdGVkVGltZXpvbmVOYW1lJywgdHpOYW1lKTtcbiAgICB9KSxcblxuICAgIHNlbGVjdGVkVGltZXpvbmVDaGFuZ2VkOiBFbWJlci5jb21wdXRlZCgndGltZXpvbmVDb250cm9sbGVyLnNlbGVjdGVkVGltZXpvbmVOYW1lJywgJ3RpbWV6b25lQ29udHJvbGxlci5zZWxlY3RlZFRpbWV6b25lT2xzb25OYW1lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMuc2V0KCdfc2VsZWN0ZWRUaW1lem9uZU5hbWUnLCB0aGlzLmdldCgndGltZXpvbmVDb250cm9sbGVyLnNlbGVjdGVkVGltZXpvbmVOYW1lJykpO1xuICAgICAgICB0aGlzLnNldCgnX3NlbGVjdGVkVGltZXpvbmVPbHNvbicsIHRoaXMuZ2V0KCd0aW1lem9uZUNvbnRyb2xsZXIuc2VsZWN0ZWRUaW1lem9uZU9sc29uTmFtZScpKTtcbiAgICB9KSxcblxuICAgIHVwZGF0ZVRpbWVDbG9jazogRW1iZXIub2JzZXJ2ZXIoJ3RpbWV6b25lQ29udHJvbGxlci50aW1lVGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBtZS5zZWxlY3RlZFRpbWV6b25lKCk7XG4gICAgICAgIHRoaXMuc2V0KCdjdXJyZW50VGltZURpc3BsYXknLCB0aGlzLmdldCgndGltZXpvbmVDb250cm9sbGVyLmN1cnJlbnRCcm93c2VyVGltZScpKTtcbiAgICB9KVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIqL1xuXG5WaW56LkFib3V0Q29udHJvbGxlciA9IEVtYmVyLkNvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG1vZHVsZXMgPSB0aGlzLmdldCgnZW52Lm1vZHVsZXMnKTtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcblxuICAgICAgICBtb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIHByb3h5QWRkcmVzcywgYXR0cmlidXRlTmFtZSwgcHJvbWlzZTtcblxuICAgICAgICAgICAgcHJveHlBZGRyZXNzID0gc2VsZi5nZXQoJ2Vudi4nICsgbW9kdWxlICsgJ1Byb3h5QWRkcmVzcycpO1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IG1vZHVsZSArICdBYm91dCc7XG5cbiAgICAgICAgICAgIHByb21pc2UgPSBFbWJlci4kLmdldEpTT04ocHJveHlBZGRyZXNzICsgJy9hcHAvc3RhdHVzJykudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldChhdHRyaWJ1dGVOYW1lLCBqc29uKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0KGF0dHJpYnV0ZU5hbWUsIHtBcHBOYW1lOiBtb2R1bGUgKyAnIC0gRVJST1I6IFVuYWJsZSB0byBjb25uZWN0J30pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLnNldChhdHRyaWJ1dGVOYW1lLCBwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG5WaW56LkFwcGxpY2F0aW9uTmF2Q29udHJvbGxlciA9IEVtYmVyLkNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGNoYW5nZU9yZ2FuaXphdGlvbjogZnVuY3Rpb24gKG9yZykge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldCgnY3VycmVudE9yZ2FuaXphdGlvbicsIG9yZyk7XG4gICAgICAgICAgICB0aGlzLnNldCgnY3VycmVudE9yZ2FuaXphdGlvbicsIG9yZyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3VycmVudElkZW50aXR5OiBFbWJlci5jb21wdXRlZC5hbGlhcygnc2Vzc2lvbi5pZGVudGl0eScpLFxuXG4gICAgY3VycmVudE9yZ2FuaXphdGlvbjogbnVsbCxcblxuICAgIHNob3dPcmdhbml6YXRpb25TZWxlY3Rpb246IGZhbHNlLFxuXG4gICAgc2hvd0Nsb2NrOiBFbWJlci5jb21wdXRlZChmdW5jdGlvbigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gRW1iZXIuJC5jb29raWUoJ2Rpc3BsYXkuY2xvY2snKSA9PT0gJ3RydWUnO1xuICAgIH0pLFxuXG4gICAgY2hhbmdlT3JnYW5pemF0aW9uOiBmdW5jdGlvbiAob3JnKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldCgnY3VycmVudE9yZ2FuaXphdGlvbicsIG9yZyk7XG4gICAgICAgIHRoaXMuc2V0KCdjdXJyZW50T3JnYW5pemF0aW9uJywgb3JnKTtcbiAgICB9LFxuXG4gICAgY3VycmVudElkZW50aXR5Q2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ2N1cnJlbnRJZGVudGl0eScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgY3VycmVudE9yZ2FuaXphdGlvbiA9IHRoaXMuZ2V0KCdjdXJyZW50T3JnYW5pemF0aW9uJyksXG4gICAgICAgICAgICBvcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQuc2V0KCdzaG93T3JnYW5pemF0aW9uU2VsZWN0aW9uJywgZmFsc2UpO1xuICAgICAgICAvLyBVc2UgdGhlIGZpcnN0IG9yZ2FuaXphdGlvbiBhcyB0aGUgZGVmYXVsdCBvcmdhbml6YXRpb25cbiAgICAgICAgaWYgKCFjdXJyZW50T3JnYW5pemF0aW9uKSB7XG4gICAgICAgICAgICBvcmdhbml6YXRpb25zID0gdGhpcy5nZXQoJ2N1cnJlbnRJZGVudGl0eS5vcmdhbml6YXRpb25zJyk7XG4gICAgICAgICAgICBpZiAob3JnYW5pemF0aW9ucyAhPT0gbnVsbCAmJiBvcmdhbml6YXRpb25zICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9yZ2FuaXphdGlvbnMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbnMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEVtYmVyLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmdldCgnbGVuZ3RoJykgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3JnYW5pemF0aW9uID0gdmFsdWUuZ2V0KCdmaXJzdE9iamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXNzaW9uLnNldCgnY3VycmVudE9yZ2FuaXphdGlvbicsIGN1cnJlbnRPcmdhbml6YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXQoJ2N1cnJlbnRPcmdhbml6YXRpb24nLCBjdXJyZW50T3JnYW5pemF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5nZXQoJ2xlbmd0aCcpID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0KCdzaG93T3JnYW5pemF0aW9uU2VsZWN0aW9uJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JnYW5pemF0aW9ucyAhPT0gbnVsbCAmJiBvcmdhbml6YXRpb25zICE9PSB1bmRlZmluZWQgJiYgb3JnYW5pemF0aW9ucy50aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50T3JnYW5pemF0aW9uID0gb3JnYW5pemF0aW9uc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0KCdjdXJyZW50T3JnYW5pemF0aW9uJywgY3VycmVudE9yZ2FuaXphdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ2N1cnJlbnRPcmdhbml6YXRpb24nLCBjdXJyZW50T3JnYW5pemF0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAob3JnYW5pemF0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdzaG93T3JnYW5pemF0aW9uU2VsZWN0aW9uJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSksXG5cbiAgICBoYXM6IGZ1bmN0aW9uIChhY2Nlc3NDb25kaXRpb24pIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaWRlbnRpdHkgPSB0aGlzLnNlc3Npb24uaXNBdXRoZW50aWNhdGVkID8gdGhpcy5zZXNzaW9uLmdldCgnaWRlbnRpdHknKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBpZGVudGl0eSA/IGlkZW50aXR5Lmhhc0FjY2Vzc0NvbmRpdGlvbihhY2Nlc3NDb25kaXRpb24pIDogZmFsc2U7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG5yZXF1aXJlKCcuL3NlYXJjaENvbnRyb2xsZXInKTtcbnJlcXVpcmUoJy4vY3J1ZENvbnRyb2xsZXInKTtcbnJlcXVpcmUoJy4uL3V0aWwvc3RhcnRzV2l0aCcpO1xuXG5pZiAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4O1xuICAgIH07XG59XG5cblZpbnouQXV0aG9yaXphdGlvbkNvbnRyb2xsZXIgPSBWaW56LlNlYXJjaENvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgICBtb2RlbFR5cGU6ICdhdXRob3JpemF0aW9uJyxcbiAgICBzaG93Um91dGU6ICdhdXRob3JpemF0aW9uLnNob3cnLFxuICAgIGxpc3RSb3V0ZTogJ2F1dGhvcml6YXRpb24nXG59KTtcblxuLyoqXG4gKiBHcm91cHMgYWNjZXNzIGNvbmRpdGlvbnMgdG9nZXRoZXIgZm9yIGRpc3BsYXkgaW4gYSB1c2VyIGludGVyZmFjZS5cbiAqIFRoZSBsaXN0IG9mIGFjY2VzcyBjb25kaXRpb25zIHNob3VsZCBiZSBmaWx0ZXJlZCBieSB0aGUgbGljZW5zZWRcbiAqIGFjY2VzcyBjb25kaXRpb25zIGJlZm9yZSBkaXNwbGF5IHRvIHRoZSB1c2VyLlxuICogPHAvPlxuICogVXNlZCBieSB2aW56LXVpIG9uIEF1dGhvcml6YXRpb25zQWN0aXZpdHlcbiAqIFVzZWQgYnkgdmluei1rZXlnZW4tdWkgb24gRmVhdHVyZUFjdGl2aXR5XG4gKi9cblZpbnouQWNjZXNzQ29uZGl0aW9uR3JvdXAgPSBFbWJlci5PYmplY3QuZXh0ZW5kKHtcbiAgICBzZWxlY3Rpb25Db3VudDogMCxcbiAgICBhY2Nlc3NDb25kaXRpb25zOiBbXSxcbiAgICBwcmVmaXhlczogW10sXG4gICAgdGV4dDogbnVsbFxufSk7XG5cblZpbnouQXV0aG9yaXphdGlvbkNydWRDb250cm9sbGVyID0gVmluei5DcnVkQ29udHJvbGxlci5leHRlbmQoe1xuXG4gICAgYWN0aW9uczoge1xuICAgICAgICB0b2dnbGVTZWxlY3Rpb246IGZ1bmN0aW9uIChhY2Nlc3NDb25kaXRpb25TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbi5nZXQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvblN0YXRlKGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbiwgIXNlbGVjdGVkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZWxlY3RPckRlc2VsZWN0QWxsOiBmdW5jdGlvbiAoYWNjZXNzQ29uZGl0aW9uR3JvdXAsIGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgYWNjZXNzQ29uZGl0aW9uR3JvdXAuYWNjZXNzQ29uZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY2Nlc3NDb25kaXRpb25TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZUFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvblN0YXRlKGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbiwgaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjaGFuZ2VBY2Nlc3NDb25kaXRpb25TZWxlY3Rpb25TdGF0ZTogZnVuY3Rpb24gKGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbiwgaXNTZWxlY3RlZCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBzZWxlY3RlZEFjY2Vzc0NvbmRpdGlvbnMgPSB0aGlzLmNvbnRlbnQuZ2V0KCdhY2Nlc3NDb25kaXRpb25zJyksXG4gICAgICAgICAgICBpbmRleDtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEFjY2Vzc0NvbmRpdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zZXQoJ2FjY2Vzc0NvbmRpdGlvbnMnLCBbXSk7XG4gICAgICAgICAgICBzZWxlY3RlZEFjY2Vzc0NvbmRpdGlvbnMgPSB0aGlzLmNvbnRlbnQuZ2V0KCdhY2Nlc3NDb25kaXRpb25zJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy90b2dnbGUgdGhlIHNlbGVjdGlvblxuICAgICAgICBhY2Nlc3NDb25kaXRpb25TZWxlY3Rpb24uc2V0KCdzZWxlY3RlZCcsIGlzU2VsZWN0ZWQpO1xuICAgICAgICBpZiAoYWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uLmdldCgnc2VsZWN0ZWQnKSkge1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRBY2Nlc3NDb25kaXRpb25zLmluZGV4T2YoYWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uLmFjY2Vzc0NvbmRpdGlvbi5pZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2Nlc3NDb25kaXRpb25zLnB1c2goYWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uLmFjY2Vzc0NvbmRpdGlvbi5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7ICAgICAvL3JlbW92ZSBmcm9tIGRhdGFzdG9yZVxuICAgICAgICAgICAgaW5kZXggPSBFbWJlci4kLmluQXJyYXkoYWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uLmFjY2Vzc0NvbmRpdGlvbi5pZCwgc2VsZWN0ZWRBY2Nlc3NDb25kaXRpb25zKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2Nlc3NDb25kaXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZW50Lm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdhY2Nlc3NDb25kaXRpb25zJyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJvdXRlOiAnYXV0aG9yaXphdGlvbi5jcmVhdGUnLFxuXG4gICAgZWRpdFJvdXRlOiAnYXV0aG9yaXphdGlvbi5lZGl0JyxcblxuICAgIG1haW5Sb3V0ZTogJ2F1dGhvcml6YXRpb24nLFxuXG4gICAgbW9kZWxOYW1lOiAnYXV0aG9yaXphdGlvbicsXG5cbiAgICBzaG93Um91dGU6ICdhdXRob3JpemF0aW9uLnNob3cnLFxuXG5cbiAgICBtYW5hZ2VBY2Nlc3NDb25kaXRpb246ICdWSU5aX0FVVEhPUklaQVRJT05fTUFOQUdFJyxcblxuICAgIGF1dGhvcml6YXRpb25IYXNBY2Nlc3NDb25kaXRpb246IGZ1bmN0aW9uIChhY2Nlc3NDb25kaXRpb24pIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IGZhbHNlLCBhY2Nlc3NDb25kaXRpb25zID0gdGhpcy5nZXQoJ2NvbnRlbnQuYWNjZXNzQ29uZGl0aW9ucycpO1xuXG4gICAgICAgIGlmIChhY2Nlc3NDb25kaXRpb25zKSB7XG4gICAgICAgICAgICBhY2Nlc3NDb25kaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gYWNjZXNzQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1NlbGVjdGVkO1xuICAgIH0sXG5cbiAgICBpc0FjY2Vzc0NvbmRpdGlvbkluR3JvdXA6IGZ1bmN0aW9uIChncm91cCwgYWNjZXNzQ29uZGl0aW9uKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGlzSW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjY2Vzc0dyb3VwSGFzaFtncm91cF0uZ2V0KCdwcmVmaXhlcycpLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICAgICAgYWNjZXNzQ29uZGl0aW9uLnN0YXJ0c1dpdGgocHJlZml4KTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NDb25kaXRpb24uc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgaXNJbkdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpc0luR3JvdXA7XG4gICAgfSxcblxuICAgIGFjY2Vzc0NvbmRpdGlvbkdyb3VwczogRW1iZXIuY29tcHV0ZWQoJ2FjY2Vzc0NvbmRpdGlvbnMuW10nLCAnY29udGVudC5hY2Nlc3NDb25kaXRpb25zJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBwcm9wLCByZXN1bHQgPSBbXSwgYWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuZ2V0KCdhY2Nlc3NDb25kaXRpb25zJykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGdyb3VwO1xuICAgICAgICAgICAgZm9yIChncm91cCBpbiB0aGlzLmFjY2Vzc0dyb3VwSGFzaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjY2Vzc0dyb3VwSGFzaC5oYXNPd25Qcm9wZXJ0eShncm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBY2Nlc3NDb25kaXRpb25Jbkdyb3VwKGdyb3VwLCBpdGVtLmdldCgnaWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbiA9IFZpbnouQWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuYXV0aG9yaXphdGlvbkhhc0FjY2Vzc0NvbmRpdGlvbihpdGVtLmdldCgnaWQnKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzQ29uZGl0aW9uOiBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzR3JvdXBIYXNoW2dyb3VwXS5zZXQoJ2FjY2Vzc0NvbmRpdGlvbnMuc2VsZWN0aW9uQ291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2Vzc0dyb3VwSGFzaFtncm91cF0uZ2V0KCdhY2Nlc3NDb25kaXRpb25zLnNlbGVjdGlvbkNvdW50JykgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzR3JvdXBIYXNoW2dyb3VwXS5nZXQoJ2FjY2Vzc0NvbmRpdGlvbnMnKS5wdXNoKGFjY2Vzc0NvbmRpdGlvblNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgZm9yIChwcm9wIGluIHRoaXMuYWNjZXNzR3JvdXBIYXNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2Nlc3NHcm91cEhhc2guaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY2Nlc3NHcm91cEhhc2hbcHJvcF0uZ2V0KCdhY2Nlc3NDb25kaXRpb25zJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmFjY2Vzc0dyb3VwSGFzaFtwcm9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSksXG5cbiAgICBhY2Nlc3NHcm91cEhhc2g6IHtcbiAgICAgICAgQVNTRVRfTUFOQUdFTUVOVDogVmluei5BY2Nlc3NDb25kaXRpb25Hcm91cC5jcmVhdGUoeyB0ZXh0OiAnQXNzZXQgTWFuYWdlbWVudCcsIHByZWZpeGVzOiBbJ01FVEFNT1JFXyddIH0pLFxuICAgICAgICBBTFRFUk5BVEVfQ09OVEVOVDogVmluei5BY2Nlc3NDb25kaXRpb25Hcm91cC5jcmVhdGUoeyB0ZXh0OiAnQWx0ZXJuYXRlIENvbnRlbnQnLCBwcmVmaXhlczogWydBQ1NfJ10gfSksXG4gICAgICAgIE9QUE9SVFVOSVRZX01BTkFHRU1FTlQ6IFZpbnouQWNjZXNzQ29uZGl0aW9uR3JvdXAuY3JlYXRlKHsgdGV4dDogJ09wcG9ydHVuaXR5IE1hbmFnZW1lbnQnLCBwcmVmaXhlczogWydTUE9UQlVJTERFUl8nXSB9KSxcbiAgICAgICAgRVhFQ1VUSU9OOiBWaW56LkFjY2Vzc0NvbmRpdGlvbkdyb3VwLmNyZWF0ZSh7IHRleHQ6ICdFeGVjdXRpb24nLCBwcmVmaXhlczogWydTUE9UTElOS18nLCAnRVNQXyddIH0pLFxuICAgICAgICBLRVlHRU46IFZpbnouQWNjZXNzQ29uZGl0aW9uR3JvdXAuY3JlYXRlKHsgdGV4dDogJ0xpY2Vuc2UgR2VuZXJhdGlvbicsIHByZWZpeGVzOiBbJ0tFWUdFTl8nXSB9KSxcbiAgICAgICAgVklOWjogVmluei5BY2Nlc3NDb25kaXRpb25Hcm91cC5jcmVhdGUoeyB0ZXh0OiAnQWRtaW5pc3RyYXRpb24nLCBwcmVmaXhlczogWydWSU5aXyddIH0pLFxuICAgICAgICBPUExPRzogVmluei5BY2Nlc3NDb25kaXRpb25Hcm91cC5jcmVhdGUoeyB0ZXh0OiAnT3BlcmF0aW9uYWwgTG9ncycsIHByZWZpeGVzOiBbJ09QTE9HXyddIH0pLFxuICAgICAgICBWRVg6IFZpbnouQWNjZXNzQ29uZGl0aW9uR3JvdXAuY3JlYXRlKHsgdGV4dDogJ1ZFWCcsIHByZWZpeGVzOiBbJ1ZFWF8nXSB9KSxcbiAgICAgICAgRU1QOiBWaW56LkFjY2Vzc0NvbmRpdGlvbkdyb3VwLmNyZWF0ZSh7IHRleHQ6ICdFTVAnLCBwcmVmaXhlczogWydFTVBfJ10gfSlcbiAgICB9LFxuXG4gICAgYWNjZXNzQ29uZGl0aW9uczogRW1iZXIuY29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiBFbWJlci5BcnJheVByb3h5LmNyZWF0ZVdpdGhNaXhpbnMoRW1iZXIuU29ydGFibGVNaXhpbiwge1xuICAgICAgICAgICAgc29ydFByb3BlcnRpZXM6IFsnaWQnXSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2V0KCdzdG9yZScpLmZpbmQoJ2FjY2Vzc0NvbmRpdGlvbicsIHt9KVxuICAgICAgICB9KTtcbiAgICB9KVxufSk7XG5cblxuVmluei5BdXRob3JpemF0aW9uQ3JlYXRlQ29udHJvbGxlciA9IFZpbnouQXV0aG9yaXphdGlvbkNydWRDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLmF1dGhvcml6YXRpb24nKSxcblxuICAgIG5lZWRzOiAnYXV0aG9yaXphdGlvbicsXG5cbiAgICB0aXRsZTogJ05ldyBBdXRob3JpemF0aW9uJyxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMuZ2V0KCdtb2RlbCcpLnJvbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuZ2V0KCduYXZMaXN0Q29udHJvbGxlcicpLnNldCgnc2VsZWN0ZWRJdGVtJywgbnVsbCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRvUm91dGUoJ2F1dGhvcml6YXRpb24nKTtcbiAgICB9XG59KTtcblxuXG5cblZpbnouQWNjZXNzQ29uZGl0aW9uU2VsZWN0aW9uID0gRW1iZXIuT2JqZWN0LmV4dGVuZCh7XG5cbiAgICBhY2Nlc3NDb25kaXRpb246IG51bGwsXG5cbiAgICBzZWxlY3RlZDogZmFsc2UsXG5cbiAgICBidXR0b25UeXBlOiBFbWJlci5jb21wdXRlZCgnc2VsZWN0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZWxlY3RlZCcpID8gJ3ByaW1hcnknIDogJ2RlZmF1bHQnO1xuICAgIH0pXG59KTtcblxuVmluei5BdXRob3JpemF0aW9uRWRpdENvbnRyb2xsZXIgPSBWaW56LkF1dGhvcml6YXRpb25DcnVkQ29udHJvbGxlci5leHRlbmQoe1xuICAgIG5lZWRzOiAnYXV0aG9yaXphdGlvbicsXG4gICAgbmF2TGlzdENvbnRyb2xsZXI6IEVtYmVyLmNvbXB1dGVkLmFsaWFzKCdjb250cm9sbGVycy5hdXRob3JpemF0aW9uJyksXG4gICAgdGl0bGU6ICdFZGl0IEF1dGhvcml6YXRpb24nLFxuICAgIHRyYW5zaXRpb246IG51bGwsXG5cbiAgICByZWxhdGlvbnNoaXBzQ2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ21vZGVsLmFjY2Vzc0NvbmRpdGlvbnMuW10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdpc0VkaXRpbmcnKSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnNlbmQoJ2JlY29tZURpcnR5Jyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59KTtcblxuXG5WaW56LkF1dGhvcml6YXRpb25JbmRleENvbnRyb2xsZXIgPSBWaW56LkF1dGhvcml6YXRpb25DcnVkQ29udHJvbGxlci5leHRlbmQoe1xuICAgIG5hdkxpc3RDb250cm9sbGVyOiBFbWJlci5jb21wdXRlZC5hbGlhcygnY29udHJvbGxlcnMuYXV0aG9yaXphdGlvbicpLFxuICAgIG5lZWRzOiAnYXV0aG9yaXphdGlvbidcbn0pO1xuXG5cblZpbnouQXV0aG9yaXphdGlvblNob3dDb250cm9sbGVyID0gVmluei5BdXRob3JpemF0aW9uQ3J1ZENvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLmF1dGhvcml6YXRpb24nKSxcbiAgICBuZWVkczogJ2F1dGhvcml6YXRpb24nLFxuICAgIHRpdGxlOiAnVmlldyBBdXRob3JpemF0aW9uJyxcbiAgICBpc05vblN5c3RlbU1hbmFnZWQ6IEVtYmVyLmNvbXB1dGVkKCdtb2RlbC5zeXN0ZW1NYW5hZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmICh0aGlzLmdldCgnbW9kZWwnKSAmJiB0aGlzLmdldCgnbW9kZWwnKS5nZXQoJ3N5c3RlbU1hbmFnZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG59KTtcblxuXG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG4vKlxuIEEgY29udHJvbGxlciB0aGF0IGZpbHRlcnMgYSBoaWVyYXJjaHkgKGZvciBkcm9wLWRvd24gbWVudXMpIG9mIGxpbmsgb2JqZWN0cyBkb3duIHRvIG9ubHkgdGhlIGxpc3QgdGhhdFxuIGFuIGlkZW50aXR5IGhhcyBhY2Nlc3MgdG8uXG5cbiBQcm92aWRlIHRoZSBjb21wb25lbnQgdGhlIGxpbmsgaGllcmFyY2h5LCBhbiBpZGVudGl0eSB3aXRoIGEgaGFzQWNjZXNzQ29uZGl0aW9uKCkgbWV0aG9kLCBhbmQgb3B0aW9uYWxseSBhIHJvdXRlclxuIHRoYXQgdG8gdmFsaWRhdGUgdGhlIGxpbmsgcm91dGVzIHdpdGggdGhlIGhhc1JvdXRlKCkgbWV0aG9kLiBJZiBubyByb3V0ZSBpcyBzZXQsIHRoZSBjb21wb25lbnQgd2lsbCB1c2VcbiBBcHAuUm91dGVyLnJvdXRlciB0byB2YWxpZGF0ZSByb3V0ZXMuXG5cbiBUaGUgaGllcmFyY2h5IGlzIGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBjYW4gYmUgbGlua3Mgb3IgZHJvcGRvd25zOlxuICogbGluayBwcm9wZXJ0aWVzIGFyZTogbGFiZWwsIHJvdXRlLCBhbmQgb3B0aW9uYWxseSwgYWNjZXNzXG4gKiBkcm9wZG93biBwcm9wZXJ0aWVzIGFyZTogbGFiZWwsIGFuZCBsaW5rcyB3aGVyZSBsaW5rcyBpcyBhbiBhcnJheSBvZiBsaW5rLCBkaXZpZGVyLCBvciBoZWFkZXIgb2JqZWN0c1xuICogZGl2aWRlciBpcyBhbiBvYmplY3Qgd2l0aCBkaXZpZGVyPXRydWVcbiAqIGhlYWRlciBpcyBhbiBvYmplY3Qgd2l0aCBhIGhlYWRlciBwcm9wZXJ0eVxuXG4gVGhlIGFjY2VzcyBwcm9wZXJ0eSBpcyBlaXRoZXIgYSBzaW5nbGUgYWNjZXNzIGNvbmRpdGlvbiwgb3IgYW4gYXJyYXkgb2YgYWNjZXNzIGNvbmRpdGlvbnMsIG9yIGEgZnVuY3Rpb24uIElmIHRoZVxuIGFjY2VzcyBwcm9wZXJ0eSBpcyBhbiBhcnJheSwgdGhlbiBhY2Nlc3Mgd2lsbCBiZSBncmFudGVkIGlmIGFueSBvZiB0aGUgYWNjZXNzIGNvbmRpdGlvbnMgYXJlIGF1dGhvcml6ZWQuIElmIHRoZVxuIGFjY2VzcyBwcm9wZXJ0eSBpcyBhIGZ1bmN0aW9uIGl0IHdpbGwgYmUgcGFzc2VkIGFuIGlkZW50aXR5IHRvIHVzZS5cblxuIEZvciBleGFtcGxlOlxuIGBgYFxuIGxpbmtzOiBbXG4geyBsYWJlbDogJ01lbnUgSXRlbSAxJywgcm91dGU6ICdyb3V0ZTEnLCBhY2Nlc3M6ICdBQ0NFU1MxJyB9LFxuIHtcbiBsYWJlbDogJ0Ryb3Bkb3duJyxcbiBsaW5rczogW1xuIHsgbGFiZWw6ICdNZW51IEl0ZW0gMicsIHJvdXRlOiAncm91dGUyJywgYWNjZXNzOiAnQUNDRVNTMicgfSxcbiB7IGRpdmlkZXI6IHRydWUgfSxcbiB7IGxhYmVsOiAnTWVudSBJdGVtIDMnLCByb3V0ZTogJ3JvdXRlMycsIGFjY2VzczogJ0FDQ0VTUzMnIH0sXG4geyBkaXZpZGVyOiB0cnVlIH0sXG4geyBoZWFkZXI6ICdBZG1pbicgfSxcbiB7IGxhYmVsOiAnTWVudSBJdGVtIDQnLCByb3V0ZTogJ3JvdXRlNCcsIGFjY2VzczogJ0FDQ0VTUzQnIH0sXG4geyBkaXZpZGVyOiB0cnVlLCBoZWFkZXI6IGZhbHNlIH0sXG4geyBsYWJlbDogJ01lbnUgSXRlbSA1Jywgcm91dGU6ICdyb3V0ZTQnLCBhY2Nlc3M6ICdBQ0NFU1M1JyB9LFxuIF1cbiB9LFxuIF1cbiBgYGBcblxuIERpdmlkZXIgb2JqZWN0cyB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpZiwgYWZ0ZXIgZmlsdGVyaW5nLCBpdCBpcyB0aGUgZmlyc3Qgb3IgbGFzdCBpdGVtIGluIGEgZHJvcGRvd24gb3JcbiBpbW1lZGlhdGVseSBmb2xsb3dzIGFub3RoZXIgZGl2aWRlci5cblxuIEhlYWRlciBvYmplY3RzIHdpbGwgYmUgaW5jbHVkZWQgaWYgb25lIG9mIHRoZSBsaW5rcyB0aGF0IGZvbGxvd3MgKHRocm91Z2ggYSBkaXZpZGVyIHdpdGggaGVhZGVyIHNldCB0byBmYWxzZSlcbiBpcyBhZGRlZCB0byB0aGUgZHJvcGRvd24uXG5cbiBBIGRyb3Bkb3duIGNhbiBzZXQgdGhlIHVzZXIgcHJvcGVydHkgdG8gdHJ1ZSBpbnN0ZWFkIG9mIHByb3ZpZGluZyBhIGxhYmVsOyB0aGUgdmlldyBtYXkgZGlzcGxheSB0aGVcbiBjdXJyZW50IHVzZXIgbmFtZSAodXNpbmcgdGhlIHVzZXJOYW1lIHByb3BlcnR5KSwgb3IgZGlzcGxheSBhbiBpY29uIGluc3RlYWQgb2YgYSBsYWJlbC5cbiAqL1xuXG5WaW56LkF1dGhvcml6ZWROYXZDb250cm9sbGVyID0gRW1iZXIuQ29udHJvbGxlci5leHRlbmQoe1xuICAgIHVzZXJOYW1lOiBFbWJlci5jb21wdXRlZC5hbGlhcygnc2Vzc2lvbi5pZGVudGl0eS5uYW1lJyksXG5cbiAgICBhdXRob3JpemVkTGlua3M6IEVtYmVyLmNvbXB1dGVkKCdzZXNzaW9uLmlkZW50aXR5JywgJ2NvbnRlbnQnLCAncm91dGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGlkZW50aXR5ID0gdGhpcy5nZXQoJ3Nlc3Npb24uaWRlbnRpdHknKSwgbGlua3MgPSB0aGlzLmdldCgnbW9kZWwnKSwgcmVzdWx0ID0gW10sIHJvdXRlciA9IHRoaXMuY29udGFpbmVyLmxvb2t1cCgncm91dGVyOm1haW4nKSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgRW1iZXIuYXNzZXJ0KCdNb2RlbCBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheSBvZiBsaW5rcy4nLCAobGlua3MgaW5zdGFuY2VvZiBBcnJheSkpO1xuXG4gICAgICAgIGxpbmtzLmZvckVhY2goZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgdmFyIGFueUNoaWxkTGlua3MsIGNoaWxkTGlua3MgPSBFbWJlci5nZXQobGluaywgJ2xpbmtzJyksIG5ld0NoaWxkTGlua3MsIG5ld0xpbmsgPSBFbWJlci5PYmplY3QuY3JlYXRlKGxpbmspLCBwcmV2aW91c0RpdmlkZXIsIHByZXZpb3VzSGVhZGVyO1xuICAgICAgICAgICAgaWYgKGNoaWxkTGlua3MpIHtcbiAgICAgICAgICAgICAgICBuZXdDaGlsZExpbmtzID0gW107XG4gICAgICAgICAgICAgICAgcHJldmlvdXNEaXZpZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0hlYWRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgbmV3TGluay5zZXQoJ2xpbmtzJywgbmV3Q2hpbGRMaW5rcyk7XG4gICAgICAgICAgICAgICAgY2hpbGRMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTGluaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjZXNzT2s7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZExpbmsuZGl2aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNEaXZpZGVyID0gY2hpbGRMaW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTGluay5oZWFkZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkTGluay5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGVhZGVyID0gY2hpbGRMaW5rO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzT2sgPSBzZWxmLmhhc0FjY2VzcyhpZGVudGl0eSwgY2hpbGRMaW5rLmFjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5oYXNSb3V0ZShyb3V0ZXIsIGNoaWxkTGluay5yb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXNzT2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzRGl2aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRMaW5rcy5wdXNoKHByZXZpb3VzRGl2aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0RpdmlkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0hlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRMaW5rcy5wdXNoKHByZXZpb3VzSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZExpbmtzLnB1c2goY2hpbGRMaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55Q2hpbGRMaW5rcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1iZXIuTG9nZ2VyLndhcm4oJ1Vua25vd24gcm91dGUgJyArIGNoaWxkTGluay5yb3V0ZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY2Vzc09rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1iZXIuTG9nZ2VyLndhcm4oJ0FjY2VzcyBkZW5pZWQgJyArIGNoaWxkTGluay5hY2Nlc3MsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGFueUNoaWxkTGlua3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3TGluayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3TGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLFxuXG4gICAgaGFzQWNjZXNzOiBmdW5jdGlvbihpZGVudGl0eSwgYWNjZXNzKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGksIGhhc0FjY2VzcyA9IGZhbHNlO1xuICAgICAgICBpZiAoaWRlbnRpdHkgJiYgdHlwZW9mIGFjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaGFzQWNjZXNzID0gYWNjZXNzKGlkZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpZGVudGl0eSAmJiBhY2Nlc3MgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFjY2Vzcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0FjY2Vzc0NvbmRpdGlvbihhY2Nlc3NbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0FjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhhc0FjY2VzcyA9ICFhY2Nlc3MgfHwgKGlkZW50aXR5ICYmIGlkZW50aXR5Lmhhc0FjY2Vzc0NvbmRpdGlvbihhY2Nlc3MpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzQWNjZXNzO1xuICAgIH0sXG5cbiAgICBoYXNSb3V0ZTogZnVuY3Rpb24ocm91dGVyLCBuYW1lKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuICghcm91dGVyIHx8IHJvdXRlci5oYXNSb3V0ZShuYW1lKSB8fCByb3V0ZXIuaGFzUm91dGUobmFtZSArICcuaW5kZXgnKSk7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIqL1xuXG4vKipcbiAqIEJhc2UgaW1wbGVtZW50YXRpb24gb2YgYSBjb250cm9sbGVyIHRoYXQgc3VwcG9ydHMgdXNlciBpbnRlcmZhY2Ugdmlld3MgZm9yIGNyZWF0aW5nLCBlZGl0aW5nICh1cGRhdGluZyksIGFuZCBkZWxldGluZyBwZXJzaXN0ZW50IG9iamVjdHMuXG4gKiBAdHlwZSB7RW1iZXIuT2JqZWN0Q29udHJvbGxlcn1cbiAqXG4gKiAnJydcbiAqIE92ZXJyaWRlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyB3aGVuIGV4dGVuZGluZyB0aGlzIGNsYXNzXG4gKiAgICogY3JlYXRlUm91dGUgLSBUaGUgbmFtZSBvZiB0aGUgcm91dGUgZm9yIGNyZWF0aW5nIGEgbmV3IGluc3RhbmNlIG9mIGEgcGVyc2lzdGVudCBvYmplY3Q6IGZvciBleGFtcGxlLCAnaWRlbnRpdHkuY3JlYXRlJy5cbiAqICAgKiBlZGl0Um91dGUgLSBUaGUgbmFtZSBvZiB0aGUgcm91dGUgZm9yIGVkaXRpbmcgKHVwZGF0aW5nKSBhIHBlcnNpc3RlbnQgb2JqZWN0OiBmb3IgZXhhbXBsZSwgJ2lkZW50aXR5LmVkaXQnLlxuICogICAqIG1vZGVsTmFtZSAtIHRoZSBuYW1lIG9mIHRoZSB0eXBlIHBlcnNpc3RlbnQgb2JqZWN0IHRvIGNyZWF0ZSwgZWRpdCwgb3IgZGVsZXRlOiBmb3IgZXhhbXBsZSwgJ2lkZW50aXR5Jy5cbiAqICAgKiBzaG93Um91dGUgLSBUaGUgbmFtZSBvZiB0aGUgcm91dGUgZm9yIGRpc3BsYXlpbmcgYSBwZXJzaXN0ZW50IG9iamVjdCdzIHByb3BlcnRpZXM6IGZvciBleGFtcGxlLCAnaWRlbnRpdHkuc2hvdycuXG4gKlxuICogSW4gYWRkaXRpb24sIG92ZXJyaWRlIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyB0byBoYW5kbGUgZXZlbnRzLlxuICogICAqIG9uQ2FuY2VsRWRpdCAtIEludm9rZWQgd2hlbiB0aGUgdXNlciBjYW5jZWwncyBlZGl0aW5nIGEgcGVyc2lzdGVudCB0aGluZydzIHByb3BlcnRpZXMuXG4gKiAnJydcbiAqL1xuVmluei5DcnVkQ29udHJvbGxlciA9IEVtYmVyLk9iamVjdENvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmdldCgnbW9kZWwnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdpc0VkaXRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAobW9kZWwuaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5yb2xsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXQoJ25hdkxpc3RDb250cm9sbGVyJykuc2VuZCgnY2FuY2VsJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vbkNhbmNlbEVkaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2FuY2VsRWRpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIGNyZWF0ZVJvdXRlID0gdGhpcy5nZXQoJ2NyZWF0ZVJvdXRlJyk7XG4gICAgICAgICAgICB0aGlzLmdldCgnbmF2TGlzdENvbnRyb2xsZXInKS5zZXQoJ3NlbGVjdGVkSXRlbScsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGNyZWF0ZVJvdXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZShjcmVhdGVSb3V0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVE9ETyAtIGRlbGV0ZSBpcyBhIEphdmFTY3JpcHQga2V5d29yZCwgcmVuYW1lIHRoaXMgbWV0aG9kIVxuICAgICAgICBkZWxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIEVtYmVyLldpZGdldHMuTW9kYWxDb21wb25lbnQucG9wdXAoe1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQ6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICAgICAgdGFyZ2V0T2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAnWWVzJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAnTm8nLFxuICAgICAgICAgICAgICAgIGNvbmZpcm06ICdtb2RhbERlbGV0ZUNvbmZpcm0nLFxuICAgICAgICAgICAgICAgIGNhbmNlbDogJ21vZGFsRGVsZXRlQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBlbmZvcmNlTW9kYWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNTaG93aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBlZGl0Um91dGUgPSB0aGlzLmdldCgnZWRpdFJvdXRlJyksXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lID0gdGhpcy5nZXQoJ21vZGVsTmFtZScpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2lzRWRpdGluZycsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZShlZGl0Um91dGUsIHRoaXMuc3RvcmUuZmluZChtb2RlbE5hbWUsIHRoaXMuZ2V0KCdtb2RlbCcpLmlkKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2lzRWRpdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIHNlbGYuZ2V0KCdtb2RlbCcpLnNhdmUoKS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hdkxpc3RDb250cm9sbGVyID0gc2VsZi5nZXQoJ25hdkxpc3RDb250cm9sbGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkxpc3RDb250cm9sbGVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdxdWVyeScpO1xuICAgICAgICAgICAgICAgICAgICBuYXZMaXN0Q29udHJvbGxlci5zZXQoJ3NlbGVjdGVkSXRlbScsIHNlbGYuZ2V0KCdtb2RlbCcpKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmFuc2l0aW9uVG9Sb3V0ZShzZWxmLmdldCgnc2hvd1JvdXRlJyksIHNlbGYuZ2V0KCdtb2RlbCcpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZUpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KGVycm9yLnJlc3BvbnNlSlNPTi5tZXNzYWdlcyB8fCBbXSwgZXJyb3IucmVzcG9uc2VKU09OLmZpZWxkRXJyb3JzID8gW0pTT04uc3RyaW5naWZ5KGVycm9yLnJlc3BvbnNlSlNPTi5maWVsZEVycm9ycyldIDogW10pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbZXJyb3IucmVzcG9uc2VUZXh0XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChtSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1JdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNncy5wdXNoKG1JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0KCdtZXNzYWdlcycsIG1zZ3MpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldCgnaXNFZGl0aW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNob3dUcmFuc2l0aW9uTW9kYWw6IGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnNldCgndHJhbnNpdGlvbicsIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5nZXQoJ3RyYW5zaXRpb24nKS5hYm9ydCgpO1xuICAgICAgICAgICAgRW1iZXIuV2lkZ2V0cy5Nb2RhbENvbXBvbmVudC5wb3B1cCh7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dDogJ0NvbmZpcm0gTmF2aWdhdGlvbicsXG4gICAgICAgICAgICAgICAgdGFyZ2V0T2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAnU3RheScsXG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ0xlYXZlJyxcbiAgICAgICAgICAgICAgICBjb25maXJtOiAnbW9kYWxDb25maXJtJyxcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdtb2RhbENhbmNlbCcsXG4gICAgICAgICAgICAgICAgZW5mb3JjZU1vZGFsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzU2hvd2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzIG9uIHRoaXMgcGFnZS4gRG8geW91IHdhbnQgdG8gbGVhdmUgdGhpcyBwYWdlIGFuZCBkaXNjYXJkIHlvdXIgY2hhbmdlcyBvciBzdGF5IG9uIHRoaXMgcGFnZT8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb2RhbENvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBuYXZMaXN0Q29udHJvbGxlciA9IHRoaXMuZ2V0KCduYXZMaXN0Q29udHJvbGxlcicpO1xuICAgICAgICAgICAgLy90aGlzLmdldCgndHJhbnNpdGlvbicpLmFib3J0KCk7XG4gICAgICAgICAgICBuYXZMaXN0Q29udHJvbGxlci5zZXQoJ3NlbGVjdGVkSXRlbVJlc2V0JywgdGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIG5hdkxpc3RDb250cm9sbGVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZEl0ZW1SZXNldCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vZGFsQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnNldCgnaXNFZGl0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJvbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLmdldCgndHJhbnNpdGlvbicpLnJldHJ5KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW9kYWxEZWxldGVDb25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgbmF2TGlzdENvbnRyb2xsZXIgPSB0aGlzLmdldCgnbmF2TGlzdENvbnRyb2xsZXInKSxcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZ2V0KCdtb2RlbCcpLmRlc3Ryb3lSZWNvcmQoKS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2TGlzdENvbnRyb2xsZXIuc2V0KCdzZWxlY3RlZEl0ZW1SZXNldCcsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBuYXZMaXN0Q29udHJvbGxlci5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRJdGVtUmVzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbmF2TGlzdENvbnRyb2xsZXIubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3F1ZXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0KCdtZXNzYWdlcycsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgVmluei5Mb2dnZXIuZGVidWcoJ3JlY29yZCBkZXN0cm95ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuYXZMaXN0Q29udHJvbGxlci5zZXQoJ3NlbGVjdGVkSXRlbVJlc2V0JywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkxpc3RDb250cm9sbGVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZEl0ZW1SZXNldCcpO1xuICAgICAgICAgICAgICAgICAgICBuYXZMaXN0Q29udHJvbGxlci5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncXVlcnknKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXQoJ21lc3NhZ2VzJywgW10pO1xuICAgICAgICAgICAgICAgICAgICBWaW56LkxvZ2dlci53YXJuKEpTT04uc3RyaW5naWZ5KGVycm9yKSwgc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb2RhbERlbGV0ZUNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgLy9kbyBOb3RoaW5nXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlUm91dGU6IG51bGwsXG5cbiAgICBlZGl0Um91dGU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VkaXRpbmc6IGZhbHNlLFxuXG4gICAgbWFuYWdlQWNjZXNzQ29uZGl0aW9uOiBudWxsLCAgLy8nVklOWl9JREVOVElUWV9NQU5BR0UnLFxuXG4gICAgbWVzc2FnZXM6IG51bGwsXG5cbiAgICBtb2RlbE5hbWU6IG51bGwsXG5cbiAgICBzaG93Um91dGU6IG51bGwsXG5cbiAgICBoYXNNYW5hZ2VBY2Nlc3NDb25kaXRpb246IEVtYmVyLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaWRlbnRpdHkgPSB0aGlzLnNlc3Npb24uaXNBdXRoZW50aWNhdGVkID8gdGhpcy5zZXNzaW9uLmdldCgnaWRlbnRpdHknKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBpZGVudGl0eSA/IGlkZW50aXR5Lmhhc0FjY2Vzc0NvbmRpdGlvbih0aGlzLm1hbmFnZUFjY2Vzc0NvbmRpdGlvbikgOiBmYWxzZTtcbiAgICB9KSxcblxuICAgIGlzRGlydHk6IEVtYmVyLmNvbXB1dGVkLmFsaWFzKCdjb250ZW50LmlzRGlydHknKSxcblxuICAgIGlzTWFuYWdlYWJsZTogRW1iZXIuY29tcHV0ZWQoJ2hhc01hbmFnZUFjY2Vzc0NvbmRpdGlvbicsICdpc093bmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnaXNPd25lcicpIHx8IHRoaXMuZ2V0KCdoYXNNYW5hZ2VBY2Nlc3NDb25kaXRpb24nKTtcbiAgICB9KSxcblxuICAgIGlzTm90RGlydHk6IEVtYmVyLmNvbXB1dGVkLm5vdCgnaXNEaXJ0eScpLFxuXG4gICAgaXNOb3RNYW5hZ2VhYmxlOiBFbWJlci5jb21wdXRlZC5ub3QoJ2lzTWFuYWdlYWJsZScpLFxuXG4gICAgaXNPd25lcjogRW1iZXIuY29tcHV0ZWQoJ2NvbnRlbnQub3JnYW5pemF0aW9uSWQnLCAnc2Vzc2lvbi5jdXJyZW50T3JnYW5pemF0aW9uLmlkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBjb250ZXh0T3JnSWQgPSAgdGhpcy5zZXNzaW9uLmdldCgnY3VycmVudE9yZ2FuaXphdGlvbi5pZCcpLFxuICAgICAgICAgICAgZW50aXR5T3JnSWQgPSB0aGlzLmdldCgnY29udGVudC5vcmdhbml6YXRpb25JZCcpO1xuICAgICAgICByZXR1cm4gY29udGV4dE9yZ0lkID09PSBlbnRpdHlPcmdJZDtcbiAgICB9KVxufSk7XG5cbiIsIi8qZ2xvYmFsIFZpbnosIEVtYmVyLCBsb2NhdGlvbiwgbW9tZW50LCBqc3R6ICovXG4vKmpzbGludCB1bnBhcmFtOnRydWUgKi9cblxuVmluei5OYXZUaW1lWm9uZSA9IEVtYmVyLk9iamVjdC5leHRlbmQoe1xuICAgIHRpbWVGb3JtYXQ6ICdkZGQgaDptbTpzcyBhIHonLFxuICAgIHRpbWV6b25lOiBudWxsLFxuICAgIGN1cnJlbnRUaW1lOiBudWxsLFxuICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG5cbiAgICB0aW1lem9uZU5hbWU6IEVtYmVyLmNvbXB1dGVkKCd0aW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdGltZXpvbmUgPSB0aGlzLmdldCgndGltZXpvbmUnKTtcbiAgICAgICAgcmV0dXJuIHRpbWV6b25lID8gdGltZXpvbmUucmVwbGFjZSgvXy9nLCcgJykgOiBudWxsO1xuICAgIH0pLFxuXG4gICAgZGlzcGxheVRpbWU6IEVtYmVyLmNvbXB1dGVkKCdjdXJyZW50VGltZScsICd0aW1lem9uZScsICd0aW1lRm9ybWF0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoaXMuZ2V0KCdjdXJyZW50VGltZScpIHx8IDAsXG4gICAgICAgICAgICB0aW1lem9uZSA9IHRoaXMuZ2V0KCd0aW1lem9uZScpIHx8ICdFdGMvVVRDJztcbiAgICAgICAgcmV0dXJuIG1vbWVudChjdXJyZW50VGltZSkudHoodGltZXpvbmUpLmZvcm1hdCh0aGlzLmdldCgndGltZUZvcm1hdCcpKTtcbiAgICB9KVxufSk7XG5cblZpbnouQ3VycmVudFRpbWVDb250cm9sbGVyID0gRW1iZXIuQ29udHJvbGxlci5leHRlbmQoe1xuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzdGFydFRpbWVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgICAgICB0aGlzLnRvY2soKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzdG9wVGltZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aWNrVGltZXIpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9ja1RpbWVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuZ2V0KCdzZXJ2ZXJUaW1lT2Zmc2V0JyksXG4gICAgICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLnNldCgnY3VycmVudFRpbWUnLCBuZXcgRGF0ZShub3cgKyBvZmZzZXQpKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVTZXJ2ZXJUaW1lT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaG9zdCA9IHRoaXMuZ2V0KCdwcm94eUFkZHJlc3MnKSxcbiAgICAgICAgICAgICAgICBzZW5kVGltZSA9IG1vbWVudCgpO1xuXG4gICAgICAgICAgICBFbWJlci4kLmdldEpTT04oaG9zdCArICcvYXBwL3N0YXR1cycsIGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG1vbWVudCgpLCBzZXJ2ZXJUaW1lLCBkZWxheSwgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChqc29uLkN1cnJlbnREYXRlVGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlclRpbWUgPSBtb21lbnQoanNvbi5DdXJyZW50RGF0ZVRpbWUsIFwiWVlZWS1NTS1ERCdUJ0hIOm1tOnNzLlNTUydaJ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcnZlclRpbWUuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheSA9IG5vdy5kaWZmKHNlbmRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG5vdy5kaWZmKHNlcnZlclRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXQoJ3NlcnZlclRpbWVPZmZzZXQnLCBvZmZzZXQgLSBkZWxheSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VsZWN0VGltZXpvbmU6IGZ1bmN0aW9uIChzZWxlY3RlZFR6KSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnNldCgndGltZXpvbmUnLCBzZWxlY3RlZFR6LmdldCgndGltZXpvbmUnKSk7XG4gICAgICAgICAgICB0aGlzLmdldCgnZGlzcGxheVR6TGlzdCcpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldCgnaXNTZWxlY3RlZCcsIGl0ZW0gPT09IHNlbGVjdGVkVHopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJveHlBZGRyZXNzOiBFbWJlci5jb21wdXRlZC5hbGlhcygnZW52LnZpbnpQcm94eUFkZHJlc3MnKSxcbiAgICBjdXJyZW50VGltZTogbmV3IERhdGUoKSxcbiAgICBzZXJ2ZXJUaW1lT2Zmc2V0OiAwLFxuICAgIHRpbWVGb3JtYXQ6ICdkZGQgaDptbTpzcyBhIHonLFxuXG4gICAgZGlzcGxheVRpbWU6IEVtYmVyLmNvbXB1dGVkKCdjdXJyZW50VGltZScsICd0aW1lem9uZScsICd0aW1lRm9ybWF0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoaXMuZ2V0KCdjdXJyZW50VGltZScpLFxuICAgICAgICAgICAgdGltZXpvbmUgPSB0aGlzLmdldCgndGltZXpvbmUnKSB8fCAnRXRjL1VUQyc7XG4gICAgICAgIHJldHVybiBtb21lbnQoY3VycmVudFRpbWUpLnR6KHRpbWV6b25lKS5mb3JtYXQodGhpcy5nZXQoJ3RpbWVGb3JtYXQnKSk7XG4gICAgfSksXG5cbiAgICB0aW1lem9uZTogRW1iZXIuY29tcHV0ZWQoZnVuY3Rpb24gKGtleSwgdmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdGltZXpvbmU7XG4gICAgICAgIC8vIHNldHRlclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGlmICghRW1iZXIuaXNOb25lKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIEVtYmVyLiQuY29va2llKCd1c2VyLnRpbWV6b25lJywgdmFsdWUsIHtleHBpcmVzOiA5OTksIHBhdGg6ICcvJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0dGVyXG4gICAgICAgIHRpbWV6b25lID0gRW1iZXIuJC5jb29raWUoJ3VzZXIudGltZXpvbmUnKTtcbiAgICAgICAgaWYgKCF0aW1lem9uZSkge1xuICAgICAgICAgICAgdGltZXpvbmUgPSBqc3R6LmRldGVybWluZSgpLm5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZXpvbmU7XG4gICAgfSksXG5cbiAgICB0aW1lem9uZU5hbWU6IEVtYmVyLmNvbXB1dGVkKCd0aW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdGltZXpvbmUgPSB0aGlzLmdldCgndGltZXpvbmUnKTtcbiAgICAgICAgcmV0dXJuIHRpbWV6b25lID8gdGltZXpvbmUucmVwbGFjZSgvXy9nLCcgJykgOiBudWxsO1xuICAgIH0pLFxuXG4gICAgdHpMaXN0OiBFbWJlci5jb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHR6TGlzdCA9IFtdLCB0enMgPSBFbWJlci4kLmNvb2tpZSgnZGlzcGxheS5jbG9jay50enMnKTtcbiAgICAgICAgaWYgKEVtYmVyLmlzTm9uZSh0enMpID09PSBmYWxzZSAmJiB0enMgIT09ICcnKSB7XG4gICAgICAgICAgICB0ekxpc3QgPSB0enMuc3BsaXQoJzsnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHpMaXN0O1xuICAgIH0pLFxuXG4gICAgZGlzcGxheVR6TGlzdDogRW1iZXIuY29tcHV0ZWQoJ3R6TGlzdCcsICdzZWxlY3RlZFRpbWVab25lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBpbmRleCxcbiAgICAgICAgICAgIGRpc3BsYXlUekxpc3QgPSBbXSxcbiAgICAgICAgICAgIHR6TGlzdCA9IHRoaXMuZ2V0KCd0ekxpc3QnKSxcbiAgICAgICAgICAgIHNlbGVjdGVkVGltZXpvbmUgPSB0aGlzLmdldCgndGltZXpvbmUnKTtcblxuICAgICAgICBpZiAoRW1iZXIuaXNFbXB0eSh0ekxpc3QpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdHpMaXN0Lmxlbmd0aDsgaW5kZXggPSBpbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheVR6TGlzdC5jb250YWlucyh0ekxpc3RbaW5kZXhdKSA9PT0gZmFsc2UgJiYgRW1iZXIuaXNOb25lKHR6TGlzdFtpbmRleF0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHpMaXN0LnB1c2goVmluei5OYXZUaW1lWm9uZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXpvbmU6IHR6TGlzdFtpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiB0ekxpc3RbaW5kZXhdID09PSBzZWxlY3RlZFRpbWV6b25lXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3BsYXlUekxpc3Q7XG4gICAgfSksXG5cbiAgICBvbkN1cnJlbnRUaW1lQ2hhbmdlOiBFbWJlci5vYnNlcnZlcignY3VycmVudFRpbWUnLCAnZGlzcGxheVR6TGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmdldCgnY3VycmVudFRpbWUnKSxcbiAgICAgICAgICAgIGRpc3BsYXlUekxpc3QgPSB0aGlzLmdldCgnZGlzcGxheVR6TGlzdCcpO1xuICAgICAgICBkaXNwbGF5VHpMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uc2V0KCdjdXJyZW50VGltZScsIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfSksXG5cbiAgICB0aWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIG9uZVNlY29uZCA9IDEwMDAsXG4gICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZW5kKCd1cGRhdGVDdXJyZW50VGltZScpO1xuICAgICAgICB0aGlzLnRpY2tUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7IHNlbGYudGljaygpOyB9LCBvbmVTZWNvbmQpO1xuICAgIH0sXG5cbiAgICB0b2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGZpdmVNaW51dGVzID0gMTAwMCAqIDYwICogNSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbmQoJ3VwZGF0ZVNlcnZlclRpbWVPZmZzZXQnKTtcbiAgICAgICAgdGhpcy50b2NrVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpeyBzZWxmLnRvY2soKTsgfSwgZml2ZU1pbnV0ZXMpO1xuICAgIH1cbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIGNsZWFyVGltZW91dCwgRW1iZXIsIHNldFRpbWVvdXQqL1xuXG5yZXF1aXJlKCcuL2NydWRDb250cm9sbGVyJyk7XG5yZXF1aXJlKFwiLi9zZWFyY2hDb250cm9sbGVyXCIpO1xuXG5WaW56LklkZW50aXR5Q29udHJvbGxlciA9IFZpbnouU2VhcmNoQ29udHJvbGxlci5leHRlbmQoe1xuXG4gICAgbGlzdFJvdXRlOiAnaWRlbnRpdHknLFxuXG4gICAgbW9kZWxUeXBlOiAnaWRlbnRpdHknLFxuXG4gICAgc2hvd1JvdXRlOiAnaWRlbnRpdHkuc2hvdydcbn0pO1xuXG5WaW56LklkZW50aXR5Q3J1ZENvbnRyb2xsZXIgPSBWaW56LkNydWRDb250cm9sbGVyLmV4dGVuZCh7XG4gICAgbmVlZHM6ICd0aW1lem9uZScsXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dUaW1lem9uZURpYWxvZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2NvbnRyb2xsZXJzLnRpbWV6b25lLmxvYWRlZCcsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkVGltZXpvbmUnLCB0aGlzLmdldCgnbW9kZWwnKS5nZXQoJ3RpbWV6b25lJykpO1xuICAgICAgICAgICAgdGhpcy5nZXQoJ2NvbnRyb2xsZXJzLnRpbWV6b25lJykuc2hvd0RpYWxvZygnaS10ei1wYW5lbCcsICdpLXRpbWV6b25lLWRpYWxvZycsIHRoaXMuZ2V0KCdzZWxlY3RlZFRpbWV6b25lJykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGF1dGhvcml6YXRpb25zUXVlcnk6ICcnLFxuXG4gICAgYXV0aG9yaXphdGlvbnNRdWVyeURlbGF5VGltZXI6IG51bGwsXG5cbiAgICBjcmVhdGVSb3V0ZTogJ2lkZW50aXR5LmNyZWF0ZScsXG5cbiAgICBlZGl0Um91dGU6ICdpZGVudGl0eS5lZGl0JyxcblxuICAgIG1vZGVsTmFtZTogJ2lkZW50aXR5JyxcblxuICAgIG9yZ2FuaXphdGlvbnNRdWVyeTogJycsXG5cbiAgICBvcmdhbml6YXRpb25zUXVlcnlEZWxheVRpbWVyOiBudWxsLFxuXG4gICAgc2VsZWN0ZWRUaW1lem9uZTogbnVsbCxcblxuICAgIHNob3dSb3V0ZTogJ2lkZW50aXR5LnNob3cnLFxuXG4gICAgbWFuYWdlQWNjZXNzQ29uZGl0aW9uOiAnVklOWl9JREVOVElUWV9NQU5BR0UnLFxuXG4gICAgYXV0aG9yaXphdGlvbnM6IEVtYmVyLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3N0b3JlJykuZmluZCgnYXV0aG9yaXphdGlvbicsIHsgbzogdGhpcy5zZXNzaW9uLmdldCgnY3VycmVudE9yZ2FuaXphdGlvbicpLmlkLCBxOiB0aGlzLmF1dGhvcml6YXRpb25zUXVlcnksIHM6ICduYW1lJywgZDogZmFsc2UsIHBhZ2VJbmRleDogMCwgcGFnZVNpemU6IDEwMDAwMCB9KTtcbiAgICB9KSxcblxuICAgIGF1dGhvcml6YXRpb25zUXVlcnlDaGFuZ2VkOiBFbWJlci5vYnNlcnZlcignYXV0aG9yaXphdGlvbnNRdWVyeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0aG9yaXphdGlvbnNRdWVyeURlbGF5VGltZXInKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2V0KCdhdXRob3JpemF0aW9uc1F1ZXJ5RGVsYXlUaW1lcicpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldCgnYXV0aG9yaXphdGlvbnNRdWVyeURlbGF5VGltZXInLCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2F1dGhvcml6YXRpb25zJyk7XG4gICAgICAgIH0sIDQwMCkpO1xuICAgIH0pLFxuXG4gICAgY3VycmVudFRpbWV6b25lOiBFbWJlci5jb21wdXRlZCgnbW9kZWwudGltZXpvbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHR6ID0gdGhpcy5nZXQoJ21vZGVsJykuZ2V0KCd0aW1lem9uZScpO1xuICAgICAgICBpZiAoRW1iZXIuaXNOb25lKHR6KSkge1xuICAgICAgICAgICAgdHogPSB0aGlzLmdldCgnY29udHJvbGxlcnMudGltZXpvbmUuY3VycmVudE9sc29uVGltZXpvbmUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2NvbnRyb2xsZXJzLnRpbWV6b25lJykuZ2V0VGltZXpvbmVOYW1lKHR6KSArICcgKCAnICsgdHogKyAnICknO1xuICAgIH0pLFxuXG4gICAgb3JnYW5pemF0aW9uczogRW1iZXIuY29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc3RvcmUnKS5maW5kKCdPcmdhbml6YXRpb24nLCB7IG86ICB0aGlzLnNlc3Npb24uZ2V0KFwiY3VycmVudE9yZ2FuaXphdGlvblwiKS5pZCwgcTogdGhpcy5vcmdhbml6YXRpb25zUXVlcnksIHM6ICduYW1lJywgZDogZmFsc2UsIHBhZ2VJbmRleDogMCwgcGFnZVNpemU6IDEwMDAwMCB9KTtcbiAgICB9KSxcblxuICAgIG9yZ2FuaXphdGlvbnNRdWVyeUNoYW5nZWQ6IEVtYmVyLm9ic2VydmVyKCdvcmdhbml6YXRpb25zUXVlcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ29yZ2FuaXphdGlvbnNRdWVyeURlbGF5VGltZXInKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2V0KCdvcmdhbml6YXRpb25zUXVlcnlEZWxheVRpbWVyJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0KCdvcmdhbml6YXRpb25zUXVlcnlEZWxheVRpbWVyJywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdvcmdhbml6YXRpb25zJyk7XG4gICAgICAgIH0sIDQwMCkpO1xuICAgIH0pLFxuXG4gICAgdGltZXpvbmVTZWxlY3RlZDogRW1iZXIub2JzZXJ2ZXIoJ3NlbGVjdGVkVGltZXpvbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5nZXQoJ21vZGVsJykuc2V0KCd0aW1lem9uZScsIHRoaXMuZ2V0KCdzZWxlY3RlZFRpbWV6b25lJykpO1xuICAgIH0pXG59KTtcblxuVmluei5JZGVudGl0eUNyZWF0ZUNvbnRyb2xsZXIgPSBWaW56LklkZW50aXR5Q3J1ZENvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIG5hdkxpc3RDb250cm9sbGVyOiBFbWJlci5jb21wdXRlZC5hbGlhcygnY29udHJvbGxlcnMuaWRlbnRpdHknKSxcblxuICAgIG5lZWRzOiAnaWRlbnRpdHknLFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5nZXQoJ21vZGVsJykucm9sbGJhY2soKTtcbiAgICAgICAgdGhpcy5nZXQoJ25hdkxpc3RDb250cm9sbGVyJykuc2V0KCdzZWxlY3RlZEl0ZW0nLCBudWxsKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZSgnaWRlbnRpdHknKTtcbiAgICB9XG59KTtcblxuVmluei5JZGVudGl0eUVkaXRDb250cm9sbGVyID0gVmluei5JZGVudGl0eUNydWRDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLmlkZW50aXR5JyksXG5cbiAgICBuZWVkczogJ2lkZW50aXR5JyxcblxuICAgIHRyYW5zaXRpb246IG51bGwsXG5cbiAgICByZWxhdGlvbnNoaXBzQ2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ21vZGVsLm9yZ2FuaXphdGlvbnMuW10nLCAnbW9kZWwuYXV0aG9yaXphdGlvbnMuW10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdpc0VkaXRpbmcnKSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnNlbmQoJ2JlY29tZURpcnR5Jyk7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cblZpbnouSWRlbnRpdHlJbmRleENvbnRyb2xsZXIgPSBWaW56LklkZW50aXR5Q3J1ZENvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIG5hdkxpc3RDb250cm9sbGVyOiBFbWJlci5jb21wdXRlZC5hbGlhcygnY29udHJvbGxlcnMuaWRlbnRpdHknKSxcblxuICAgIG5lZWRzOiAnaWRlbnRpdHknXG59KTtcblxuVmluei5JZGVudGl0eVNob3dDb250cm9sbGVyID0gVmluei5JZGVudGl0eUNydWRDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLmlkZW50aXR5JyksXG5cbiAgICBuZWVkczogJ2lkZW50aXR5J1xufSk7XG4iLCJyZXF1aXJlKCcuL2Fib3V0Q29udHJvbGxlci5qcycpO1xucmVxdWlyZSgnLi9hcHBsaWNhdGlvbk5hdkNvbnRyb2xsZXIuanMnKTtcbnJlcXVpcmUoJy4vYXV0aG9yaXphdGlvbkNvbnRyb2xsZXJzLmpzJyk7XG5yZXF1aXJlKCcuL2F1dGhvcml6ZWROYXZDb250cm9sbGVyLmpzJyk7XG5yZXF1aXJlKCcuL2NydWRDb250cm9sbGVyLmpzJyk7XG5yZXF1aXJlKCcuL2N1cnJlbnRUaW1lQ29udHJvbGxlci5qcycpO1xucmVxdWlyZSgnLi9pZGVudGl0eUNvbnRyb2xsZXJzLmpzJyk7XG5yZXF1aXJlKCcuL2xpY2Vuc2VDb250cm9sbGVycy5qcycpO1xucmVxdWlyZSgnLi9sb2dpbkNvbnRyb2xsZXIuanMnKTtcbnJlcXVpcmUoJy4vb3JnYW5pemF0aW9uQ29udHJvbGxlcnMuanMnKTtcbnJlcXVpcmUoJy4vcHJvZHVjdE5hdkNvbnRyb2xsZXIuanMnKTtcbnJlcXVpcmUoJy4vcHJvZmlsZUNvbnRyb2xsZXJzLmpzJyk7XG5yZXF1aXJlKCcuL3NlYXJjaENvbnRyb2xsZXIuanMnKTtcbnJlcXVpcmUoJy4vdGltZXpvbmVDb250cm9sbGVyLmpzJyk7XG4iLCIvKmdsb2JhbHMgVmlueiwgY2xlYXJUaW1lb3V0LCBFbWJlciwgc2V0VGltZW91dCovXG4vKmpzbGludCB1bnBhcmFtOiB0cnVlICovXG5cblZpbnouTGljZW5zZUNvbnRyb2xsZXIgPSBFbWJlci5BcnJheUNvbnRyb2xsZXIuZXh0ZW5kKHtcbn0pO1xuXG5WaW56LkxpY2Vuc2VTaG93Q29udHJvbGxlciA9IEVtYmVyLkNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgICB2aW56UHJveHlBZGRyZXNzOiBFbWJlci5jb21wdXRlZC5hbGlhcygnZW52LnZpbnpQcm94eUFkZHJlc3MnKSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgICAgICBpbnN0YWxsTGljZW5zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZSgnbGljZW5zZS5pbnN0YWxsJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2l0ZU5hbWVPYnNlcnZlcjogRW1iZXIub2JzZXJ2ZXIoJ3NpdGVOYW1lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHVybDtcbiAgICAgICAgaWYgKHNlbGYuZ2V0KCdzaXRlTmFtZScpKSB7XG4gICAgICAgICAgICB1cmwgPSBzZWxmLmdldCgndmluelByb3h5QWRkcmVzcycpICsgJy9saWNlbnNlL2xpY2Vuc2VrZXkvJyArIHNlbGYuZ2V0KCdzaXRlTmFtZScpO1xuICAgICAgICAgICAgRW1iZXIuJC5nZXRKU09OKHVybCkudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0KCdsaWNlbnNlS2V5cycsIGpzb24pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIFZpbnouTG9nZ2VyLmVycm9yKGVyciwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0KCd2aW56UHJveHlBZGRyZXNzJykgKyAnL2xpY2Vuc2UvY2x1c3RlcmtleS8nICsgc2VsZi5nZXQoJ3NpdGVOYW1lJyk7XG4gICAgICAgICAgICBFbWJlci4kLmdldEpTT04odXJsKS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXQoJ2NsdXN0ZXJLZXknLCBqc29uLmVuY3J5cHRlZENsdXN0ZXJLZXkpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIFZpbnouTG9nZ2VyLmVycm9yKGVyciwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuVmluei5MaWNlbnNlSW5zdGFsbENvbnRyb2xsZXIgPSBFbWJlci5Db250cm9sbGVyLmV4dGVuZCh7XG4gICAgdmluelByb3h5QWRkcmVzczogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2Vudi52aW56UHJveHlBZGRyZXNzJyksXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGluc3RhbGxMaWNlbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkTGljZW5zZUtleSA9IHtlbmNyeXB0ZWRMaWNlbnNlS2V5OiB0aGlzLmdldCgnbGljZW5zZUtleScpLCBzaXRlTmFtZTogc2VsZi5nZXQoJ3NpdGVOYW1lJyl9LFxuICAgICAgICAgICAgICAgIHVybCA9IHNlbGYuZ2V0KCd2aW56UHJveHlBZGRyZXNzJykgKyAnL2xpY2Vuc2UvbGljZW5zZWtleSc7XG4gICAgICAgICAgICBFbWJlci4kLmFqYXgoe1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGVuY3J5cHRlZExpY2Vuc2VLZXkpLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldCgnbWVzc2FnZScsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRyYW5zaXRpb25Ub1JvdXRlKCdsaWNlbnNlLnNob3cnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0KCdtZXNzYWdlJywgZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnNldCgnbWVzc2FnZScsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZSgnbGljZW5zZS5zaG93Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2l0ZU5hbWVPYnNlcnZlcjogRW1iZXIub2JzZXJ2ZXIoJ3NpdGVOYW1lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuZ2V0KCdzaXRlTmFtZScpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ3F1ZXJ5RGVsYXlUaW1lcicpKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2V0KCdxdWVyeURlbGF5VGltZXInKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCgncXVlcnlEZWxheVRpbWVyJywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHNlbGYuZ2V0KCd2aW56UHJveHlBZGRyZXNzJykgKyAnL2xpY2Vuc2UvY2x1c3RlcmtleS8nICsgc2VsZi5nZXQoJ3NpdGVOYW1lJyk7XG4gICAgICAgICAgICAgICAgRW1iZXIuJC5nZXRKU09OKHVybCkudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldCgnY2x1c3RlcktleScsIGpzb24uZW5jcnlwdGVkQ2x1c3RlcktleSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBWaW56LkxvZ2dlci5lcnJvcihlcnIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNDAwKSk7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIsIFNpbXBsZUF1dGggKi9cblxucmVxdWlyZSgnLi4vbWl4aW5zL2lucHV0VmFsaWRhdGlvblNldE1peGluJyk7XG5cblZpbnouTG9naW5Db250cm9sbGVyID0gRW1iZXIuQ29udHJvbGxlci5leHRlbmQoVmluei5JbnB1dFZhbGlkYXRpb25TZXRNaXhpbiwgU2ltcGxlQXV0aC5Mb2dpbkNvbnRyb2xsZXJNaXhpbiwge1xuICAgIGF1dGhlbnRpY2F0b3I6ICdzaW1wbGUtYXV0aC1hdXRoZW50aWNhdG9yOnZpbnonLFxuICAgIGlkZW50aWZpY2F0aW9uOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgcmVtZW1iZXJNZTogZmFsc2UsXG5cbiAgICByZW1lbWJlck1lQ2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ3JlbWVtYmVyTWUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5nZXQoJ3Nlc3Npb24uc3RvcmUnKS5zZXNzaW9uQ29va2llID0gIXRoaXMuZ2V0KCdyZW1lbWJlck1lJyk7XG4gICAgfSlcbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIGNsZWFyVGltZW91dCwgRW1iZXIsIHJlcXVpcmUsIHNldFRpbWVvdXQqL1xuXG5yZXF1aXJlKCcuL2NydWRDb250cm9sbGVyJyk7XG5yZXF1aXJlKFwiLi9zZWFyY2hDb250cm9sbGVyXCIpO1xuXG5WaW56Lk9yZ2FuaXphdGlvbkNvbnRyb2xsZXIgPSBWaW56LlNlYXJjaENvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIGxpc3RSb3V0ZTogJ29yZ2FuaXphdGlvbicsXG5cbiAgICBtb2RlbFR5cGU6ICdvcmdhbml6YXRpb24nLFxuXG4gICAgc2hvd1JvdXRlOiAnb3JnYW5pemF0aW9uLnNob3cnXG59KTtcblxuVmluei5Pcmdhbml6YXRpb25DcnVkQ29udHJvbGxlciA9IFZpbnouQ3J1ZENvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIGFjdGlvbnM6IHtcblxuICAgICAgICBzaG93VGltZXpvbmVEaWFsb2c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIFZpbnoudGltZXpvbmVDb250cm9sbGVyLnNldCgnbG9hZGVkJywgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2VsZWN0ZWRUaW1lem9uZScsIHRoaXMuZ2V0KCdtb2RlbCcpLmdldCgndGltZXpvbmUnKSk7XG4gICAgICAgICAgICBWaW56LnRpbWV6b25lQ29udHJvbGxlci5zaG93RGlhbG9nKCdpLXR6LXBhbmVsJywgJ2ktdGltZXpvbmUtZGlhbG9nJywgdGhpcy5nZXQoJ3NlbGVjdGVkVGltZXpvbmUnKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXV0aG9yaXphdGlvbnNRdWVyeTogJycsXG5cbiAgICBhdXRob3JpemF0aW9uc1F1ZXJ5RGVsYXlUaW1lcjogbnVsbCxcblxuICAgIGNyZWF0ZVJvdXRlOiAnb3JnYW5pemF0aW9uLmNyZWF0ZScsXG5cbiAgICBlZGl0Um91dGU6ICdvcmdhbml6YXRpb24uZWRpdCcsXG5cbiAgICBtYWluUm91dGU6ICdvcmdhbml6YXRpb24nLFxuXG4gICAgbW9kZWxOYW1lOiAnb3JnYW5pemF0aW9uJyxcblxuICAgIG9yZ2FuaXphdGlvbnNRdWVyeTogJycsXG5cbiAgICBvcmdhbml6YXRpb25zUXVlcnlEZWxheVRpbWVyOiBudWxsLFxuXG4gICAgc2VsZWN0ZWRUaW1lem9uZTogbnVsbCxcblxuICAgIHNob3dSb3V0ZTogJ29yZ2FuaXphdGlvbi5zaG93JyxcblxuICAgIG1hbmFnZUFjY2Vzc0NvbmRpdGlvbjogJ1ZJTlpfT1JHQU5JWkFUSU9OX01BTkFHRScsXG5cbiAgICBhdXRob3JpemF0aW9uczogRW1iZXIuY29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc3RvcmUnKS5maW5kKCdhdXRob3JpemF0aW9uJywgeyBvOiB0aGlzLnNlc3Npb24uZ2V0KCdjdXJyZW50T3JnYW5pemF0aW9uJykuaWQsIHE6IHRoaXMuYXV0aG9yaXphdGlvbnNRdWVyeSwgczogJ25hbWUnLCBkOiBmYWxzZSwgcGFnZUluZGV4OiAwLCBwYWdlU2l6ZTogMTAwMDAwfSk7XG4gICAgfSksXG5cbiAgICBhdXRob3JpemF0aW9uc1F1ZXJ5Q2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ2F1dGhvcml6YXRpb25zUXVlcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2F1dGhvcml6YXRpb25zUXVlcnlEZWxheVRpbWVyJykpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmdldCgnYXV0aG9yaXphdGlvbnNRdWVyeURlbGF5VGltZXInKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXQoJ2F1dGhvcml6YXRpb25zUXVlcnlEZWxheVRpbWVyJywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdhdXRob3JpemF0aW9ucycpO1xuICAgICAgICB9LCA0MDApKTtcbiAgICB9KSxcblxuICAgIGN1cnJlbnRUaW1lem9uZTogRW1iZXIuY29tcHV0ZWQoJ21vZGVsLnRpbWV6b25lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciB0eiA9IHRoaXMuZ2V0KCdtb2RlbCcpLmdldCgndGltZXpvbmUnKTtcbiAgICAgICAgaWYgKEVtYmVyLmlzTm9uZSh0eikpIHtcbiAgICAgICAgICAgIHR6ID0gVmluei50aW1lem9uZUNvbnRyb2xsZXIuZ2V0Q3VycmVudE9sc29uVGltZXpvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVmluei50aW1lem9uZUNvbnRyb2xsZXIuZ2V0VGltZXpvbmVOYW1lKHR6KSArICcgKCAnICsgdHogKyAnICknO1xuICAgIH0pLFxuXG4gICAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOnRydWUqL1xuICAgICAgICB0aGlzLl9zdXBlcih0aGlzLnN0b3JlLmZpbmQoJ29yZ2FuaXphdGlvbicsIHRoaXMuZ2V0KCdtb2RlbCcpLmlkKSk7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOmZhbHNlKi9cbiAgICB9LFxuXG4gICAgb3JnYW5pemF0aW9uczogRW1iZXIuY29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc3RvcmUnKS5maW5kKCdPcmdhbml6YXRpb24nLCB7bzogIHRoaXMuc2Vzc2lvbi5nZXQoJ2N1cnJlbnRPcmdhbml6YXRpb24nKS5pZCwgcTogdGhpcy5vcmdhbml6YXRpb25zUXVlcnksIHM6ICduYW1lJywgZDogZmFsc2UsIHBhZ2VJbmRleDogMCwgcGFnZVNpemU6IDEwMDAwMH0pO1xuICAgIH0pLFxuXG4gICAgb3JnYW5pemF0aW9uc1F1ZXJ5Q2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ29yZ2FuaXphdGlvbnNRdWVyeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmdldCgnb3JnYW5pemF0aW9uc1F1ZXJ5RGVsYXlUaW1lcicpKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5nZXQoJ29yZ2FuaXphdGlvbnNRdWVyeURlbGF5VGltZXInKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXQoJ29yZ2FuaXphdGlvbnNRdWVyeURlbGF5VGltZXInLCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ29yZ2FuaXphdGlvbnMnKTtcbiAgICAgICAgfSwgNDAwKSk7XG4gICAgfSksXG5cbiAgICB0aW1lem9uZVNlbGVjdGVkOiBFbWJlci5vYnNlcnZlcignc2VsZWN0ZWRUaW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLmdldCgnbW9kZWwnKS5zZXQoJ3RpbWV6b25lJywgdGhpcy5nZXQoJ3NlbGVjdGVkVGltZXpvbmUnKSk7XG4gICAgfSlcbn0pO1xuXG5WaW56Lk9yZ2FuaXphdGlvbkNyZWF0ZUNvbnRyb2xsZXIgPSBWaW56Lk9yZ2FuaXphdGlvbkNydWRDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLm9yZ2FuaXphdGlvbicpLFxuXG4gICAgbmVlZHM6ICdvcmdhbml6YXRpb24nLFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5nZXQoJ21vZGVsJykucm9sbGJhY2soKTtcbiAgICAgICAgdGhpcy5nZXQoJ25hdkxpc3RDb250cm9sbGVyJykuc2V0KCdzZWxlY3RlZEl0ZW0nLCBudWxsKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZSgnb3JnYW5pemF0aW9uJyk7XG4gICAgfVxufSk7XG5cblZpbnouT3JnYW5pemF0aW9uRWRpdENvbnRyb2xsZXIgPSBWaW56Lk9yZ2FuaXphdGlvbkNydWRDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLm9yZ2FuaXphdGlvbicpLFxuXG4gICAgbmVlZHM6ICdvcmdhbml6YXRpb24nLFxuXG4gICAgdHJhbnNpdGlvbjogbnVsbCxcblxuICAgIHJlbGF0aW9uc2hpcHNDaGFuZ2VkOiBFbWJlci5vYnNlcnZlcignbW9kZWwub3JnYW5pemF0aW9ucy5bXScsICdtb2RlbC5hdXRob3JpemF0aW9ucy5bXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2lzRWRpdGluZycpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2VuZCgnYmVjb21lRGlydHknKTtcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuVmluei5Pcmdhbml6YXRpb25JbmRleENvbnRyb2xsZXIgPSBWaW56Lk9yZ2FuaXphdGlvbkNydWRDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBuYXZMaXN0Q29udHJvbGxlcjogRW1iZXIuY29tcHV0ZWQuYWxpYXMoJ2NvbnRyb2xsZXJzLm9yZ2FuaXphdGlvbicpLFxuXG4gICAgbmVlZHM6ICdvcmdhbml6YXRpb24nXG59KTtcblxuVmluei5Pcmdhbml6YXRpb25TaG93Q29udHJvbGxlciA9IFZpbnouT3JnYW5pemF0aW9uQ3J1ZENvbnRyb2xsZXIuZXh0ZW5kKHtcblxuICAgIG5hdkxpc3RDb250cm9sbGVyOiBFbWJlci5jb21wdXRlZC5hbGlhcygnY29udHJvbGxlcnMub3JnYW5pemF0aW9uJyksXG5cbiAgICBuZWVkczogXCJvcmdhbml6YXRpb25cIlxufSk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG5WaW56LlByb2R1Y3ROYXZDb250cm9sbGVyID0gRW1iZXIuQ29udHJvbGxlci5leHRlbmQoe1xuICAgIHByb2R1Y3RzOiBFbWJlci5jb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvbi5pc0F1dGhlbnRpY2F0ZWQgPyB0aGlzLnN0b3JlLmZpbmQoJ3Byb2R1Y3RMaW5rJykgOiBudWxsO1xuICAgIH0pXG59KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciwgbG9jYXRpb24sIHJlcXVpcmUqL1xuXG5yZXF1aXJlKCcuL2NydWRDb250cm9sbGVyJyk7XG5cblZpbnouUHJvZmlsZUNydWRDb250cm9sbGVyID0gVmluei5DcnVkQ29udHJvbGxlci5leHRlbmQoe1xuXG4gICAgbmVlZHM6IFsndGltZXpvbmUnXSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgICAgICByZW1vdmVUejogZnVuY3Rpb24gKHR6KSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KCdjbG9ja1RpbWV6b25lcycpLCBpLCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgaWYgKCFFbWJlci5pc0VtcHR5KHYpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSB2Lmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChFbWJlci5jb21wYXJlKHZbaV0sIHR6KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnY2xvY2tUaW1lem9uZXMnLCB2KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjbG9ja1RpbWV6b25lcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLypqc2xpbnQgbm9tZW46dHJ1ZSovXG4gICAgICAgICAgICAgICAgdGhpcy5fc3VwZXIoKTsgLy9jYWxsIHRoZSBzdXBlciBmdW5jdGlvbiB0byBzYXZlXG4gICAgICAgICAgICAgICAgLypqc2xpbnQgbm9tZW46ZmFsc2UqL1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgVmluei5Mb2dnZXIuZXJyb3IoZXJyLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0enMgPSB0aGlzLmdldCgnY2xvY2tUaW1lem9uZXMnKSwgZGlzcGxheUNsb2NrID0gdGhpcy5nZXQoJ3Nob3dDbG9jaycpO1xuICAgICAgICAgICAgaWYgKEVtYmVyLmlzTm9uZSh0enMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIEVtYmVyLiQuY29va2llKCdkaXNwbGF5LmNsb2NrLnR6cycsIHR6cy5qb2luKCc7JyksIHtleHBpcmVzOiA5OTk5OSwgcGF0aDogJy8nfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBFbWJlci4kLmNvb2tpZSgnZGlzcGxheS5jbG9jaycsIGRpc3BsYXlDbG9jaywge2V4cGlyZXM6IDk5OTk5LCBwYXRoOiAnLyd9KTtcbiAgICAgICAgICAgIGlmIChFbWJlci5pc05vbmUodGhpcy5nZXQoJ21vZGVsLnRpbWV6b25lJykpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIEVtYmVyLiQuY29va2llKCd1c2VyLnRpbWV6b25lJywgdGhpcy5nZXQoJ21vZGVsLnRpbWV6b25lJyksIHtleHBpcmVzOiA5OTk5OSwgcGF0aDogJy8nfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93QWRkVGltZXpvbmVEaWFsb2c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjb250cm9sbGVycy50aW1lem9uZS5sb2FkZWQnLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZFRpbWV6b25lJywgdGhpcy5nZXQoJ21vZGVsLnRpbWV6b25lJykpO1xuICAgICAgICAgICAgdGhpcy5nZXQoJ2NvbnRyb2xsZXJzLnRpbWV6b25lJykuc2hvd0RpYWxvZygnYWRkLXR6LXBhbmVsJywgJ2FkZC10aW1lem9uZS1kaWFsb2cnLCB0aGlzLmdldCgnc2VsZWN0ZWRUaW1lem9uZScpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93VGltZXpvbmVEaWFsb2c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjb250cm9sbGVycy50aW1lem9uZS5sb2FkZWQnLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdhZGRlZFRpbWV6b25lJywgdGhpcy5nZXQoJ21vZGVsLnRpbWV6b25lJykpO1xuICAgICAgICAgICAgdGhpcy5nZXQoJ2NvbnRyb2xsZXJzLnRpbWV6b25lJykuc2hvd0RpYWxvZygncC10ei1wYW5lbCcsICdwLXRpbWV6b25lLWRpYWxvZycsIHRoaXMuZ2V0KCdhZGRlZFRpbWV6b25lJykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZGVkVGltZXpvbmU6IG51bGwsXG5cbiAgICBjbG9ja1RpbWV6b25lczogbnVsbCxcblxuICAgIGVkaXRSb3V0ZTogJ3Byb2ZpbGUuZWRpdCcsXG5cbiAgICBtb2RlbE5hbWU6ICdjdXJyZW50SWRlbnRpdHknLFxuXG4gICAgc2VsZWN0ZWRUaW1lem9uZTogbnVsbCxcblxuICAgIHNob3dDbG9jazogZmFsc2UsXG5cbiAgICBzaG93Um91dGU6ICdwcm9maWxlLnNob3cnLFxuXG4gICAgYWRkZWRUaW1lem9uZU9ic2VydmVyOiBFbWJlci5vYnNlcnZlcignYWRkZWRUaW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdHpzID0gdGhpcy5nZXQoJ2Nsb2NrVGltZXpvbmVzJyk7XG4gICAgICAgIGlmIChFbWJlci5pc05vbmUodHpzKSkge1xuICAgICAgICAgICAgdHpzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdHpzLnVuc2hpZnQodGhpcy5nZXQoJ2FkZGVkVGltZXpvbmUnKSk7XG4gICAgICAgIHRoaXMuc2V0KCdjbG9ja1RpbWV6b25lcycsIHR6cyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nsb2NrVGltZXpvbmVzJyk7XG4gICAgfSksXG5cbiAgICBjdXJyZW50VGltZXpvbmU6IEVtYmVyLmNvbXB1dGVkKCdtb2RlbC50aW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdHogPSB0aGlzLmdldCgnbW9kZWwudGltZXpvbmUnKTtcbiAgICAgICAgaWYgKEVtYmVyLmlzTm9uZSh0eikpIHtcbiAgICAgICAgICAgIHR6ID0gdGhpcy5nZXQoJ2NvbnRyb2xsZXJzLnRpbWV6b25lLmN1cnJlbnRPbHNvblRpbWV6b25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjb250cm9sbGVycy50aW1lem9uZScpLmdldFRpbWV6b25lTmFtZSh0eikgKyAnICggJyArIHR6ICsgJyApJztcbiAgICB9KSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAvKmpzbGludCBub21lbjp0cnVlKi9cbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgLypqc2xpbnQgbm9tZW46ZmFsc2UqL1xuICAgICAgICB2YXIgdiA9IEVtYmVyLiQuY29va2llKCdkaXNwbGF5LmNsb2NrLnR6cycpLCBzYyA9IEVtYmVyLiQuY29va2llKCdkaXNwbGF5LmNsb2NrJyk7XG4gICAgICAgIGlmICghRW1iZXIuaXNOb25lKHYpICYmIHYgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnY2xvY2tUaW1lem9uZXMnLCB2LnNwbGl0KCc7JykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0KCdzaG93Q2xvY2snLCAoc2MgPT09IFwidHJ1ZVwiKSk7XG4gICAgfSxcblxuICAgIHNob3dDbG9ja0Rpc3BsYXk6IEVtYmVyLmNvbXB1dGVkKCdzaG93Q2xvY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdzaG93Q2xvY2snKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdZZXMnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIk5vXCI7XG4gICAgfSksXG5cbiAgICB0aW1lem9uZVNlbGVjdGVkOiBFbWJlci5vYnNlcnZlcignc2VsZWN0ZWRUaW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnNldCgnbW9kZWwudGltZXpvbmUnLCB0aGlzLmdldCgnc2VsZWN0ZWRUaW1lem9uZScpKTtcbiAgICB9KVxufSk7XG5cblZpbnouUHJvZmlsZUVkaXRDb250cm9sbGVyID0gVmluei5Qcm9maWxlQ3J1ZENvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgICBuZWVkczogWydwcm9maWxlJywgJ3RpbWV6b25lJ10sXG4gICAgbmF2TGlzdENvbnRyb2xsZXI6IEVtYmVyLmNvbXB1dGVkLmFsaWFzKCdjb250cm9sbGVycy5wcm9maWxlJyksXG4gICAgdHJhbnNpdGlvbjogbnVsbFxufSk7XG5cblZpbnouUHJvZmlsZUluZGV4Q29udHJvbGxlciA9IFZpbnouUHJvZmlsZUNydWRDb250cm9sbGVyLmV4dGVuZCh7XG4gICAgbmVlZHM6IFsncHJvZmlsZScsICd0aW1lem9uZSddLFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBlZGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Ub1JvdXRlKCcvcHJvZmlsZS9lZGl0Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbmF2TGlzdENvbnRyb2xsZXI6IEVtYmVyLmNvbXB1dGVkLmFsaWFzKCdjb250cm9sbGVycy5wcm9maWxlJylcbn0pO1xuXG5WaW56LlByb2ZpbGVTaG93Q29udHJvbGxlciA9IFZpbnouUHJvZmlsZUNydWRDb250cm9sbGVyLmV4dGVuZCh7XG4gICAgbmVlZHM6IFsncHJvZmlsZScsICd0aW1lem9uZSddLFxuXG4gICAgbmF2TGlzdENvbnRyb2xsZXI6IEVtYmVyLmNvbXB1dGVkLmFsaWFzKCdjb250cm9sbGVycy5wcm9maWxlJylcbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIGNsZWFyVGltZW91dCwgRW1iZXIsIHNldFRpbWVvdXQqL1xuXG4vKmpzbGludCB1bnBhcmFtOiB0cnVlICovXG5WaW56LlNlYXJjaENvbnRyb2xsZXIgPSBFbWJlci5PYmplY3RDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncXVlcnknKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLmlnbm9yZVNlbGVjdGVkSXRlbVJlc2V0ID0gdHJ1ZTsgLy8gSEFDSyB0byBhdm9pZCBsaXN0IHRyYW5zaXRpb25cbiAgICAgICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZEl0ZW0nLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblRvUm91dGUodGhpcy5nZXQoJ2NyZWF0ZVJvdXRlJykpO1xuICAgICAgICAgICAgdGhpcy5pZ25vcmVTZWxlY3RlZEl0ZW1SZXNldCA9IGZhbHNlOyAvLyB1bmRvIEhBQ0sgdG8gYXZvaWQgbGlzdCB0cmFuc2l0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkSXRlbScsIHRoaXMuZ2V0KCdsYXN0U2VsZWN0ZWRJdGVtJykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxpc3RSb3V0ZTogbnVsbCwgLy8gZWcuICdpZGVudGl0eSdcbiAgICBtb2RlbFR5cGU6IG51bGwsIC8vIGVnLiAnaWRlbnRpdHknXG4gICAgc2hvd1JvdXRlOiBudWxsLCAvLyBlZy4gJ2lkZW50aXR5LnNob3cnXG4gICAgY3JlYXRlUm91dGU6IG51bGwsIC8vIGVnLiAnaWRlbnRpdHkuY3JlYXRlJ1xuXG4gICAgcXVlcnk6ICcnLFxuICAgIHF1ZXJ5RGVsYXlUaW1lcjogbnVsbCxcbiAgICBzZWxlY3RlZEl0ZW1SZXNldDogbnVsbCxcbiAgICBsYXN0U2VsZWN0ZWRJdGVtOiBudWxsLFxuXG4gICAgaXRlbXM6IEVtYmVyLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgY3VycmVudE9yZ2FuaXphdGlvbklkID0gdGhpcy5zZXNzaW9uLmdldCgnY3VycmVudE9yZ2FuaXphdGlvbi5pZCcpLFxuICAgICAgICAgICAgbW9kZWxUeXBlID0gdGhpcy5nZXQoJ21vZGVsVHlwZScpLFxuICAgICAgICAgICAgc3RvcmUgPSB0aGlzLmdldCgnc3RvcmUnKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmZpbmQobW9kZWxUeXBlLCB7IG86IGN1cnJlbnRPcmdhbml6YXRpb25JZCwgcTogdGhpcy5xdWVyeSwgczogJ25hbWUnLCBkOiBmYWxzZSwgcGFnZUluZGV4OiAwLCBwYWdlU2l6ZTogMTAwMDAwIH0pO1xuICAgIH0pLFxuXG4gICAgcXVlcnlDaGFuZ2VkOiBFbWJlci5vYnNlcnZlcigncXVlcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ3F1ZXJ5RGVsYXlUaW1lcicpKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5nZXQoJ3F1ZXJ5RGVsYXlUaW1lcicpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldCgncXVlcnlEZWxheVRpbWVyJywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycpO1xuICAgICAgICB9LCA0MDApKTtcbiAgICB9KSxcblxuICAgIHNlbGVjdGVkSXRlbTogRW1iZXIuY29tcHV0ZWQoJ3NlbGVjdGVkSXRlbVJlc2V0JywgZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnbGFzdFNlbGVjdGVkSXRlbScsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblRvUm91dGUodGhpcy5nZXQoJ3Nob3dSb3V0ZScpLCB0aGlzLnN0b3JlLmZpbmQodGhpcy5nZXQoJ21vZGVsVHlwZScpLCB2YWx1ZS5pZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlnbm9yZVNlbGVjdGVkSXRlbVJlc2V0KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0KCdzZWxlY3RlZEl0ZW1SZXNldCcpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9Sb3V0ZSh0aGlzLmdldCgnbGlzdFJvdXRlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KSxcblxuICAgIGNhbkNyZWF0ZTogRW1iZXIuY29tcHV0ZWQoJ3Nlc3Npb24uaWRlbnRpdHknLCAnY3JlYXRlQWNjZXNzQ29uZGl0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBpZGVudGl0eSA9IHRoaXMuZ2V0KCdzZXNzaW9uLmlzQXV0aGVudGljYXRlZCcpID8gdGhpcy5nZXQoJ3Nlc3Npb24uaWRlbnRpdHknKSA6IG51bGwsXG4gICAgICAgICAgICBjcmVhdGVBY2Nlc3NDb25kaXRpb24gPSB0aGlzLmdldCgnY3JlYXRlQWNjZXNzQ29uZGl0aW9uJyk7XG4gICAgICAgIGlmIChjcmVhdGVBY2Nlc3NDb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpZGVudGl0eSA/IGlkZW50aXR5Lmhhc0FjY2Vzc0NvbmRpdGlvbihjcmVhdGVBY2Nlc3NDb25kaXRpb24pIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIEJvb3RzdHJhcCwgZG9jdW1lbnQsIEVtYmVyLCBqUXVlcnksIG1vbWVudCwgd2luZG93LCAkKi9cblxuLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xuVmluei5UaW1lem9uZUNvbnRyb2xsZXIgPSBFbWJlci5PYmplY3RDb250cm9sbGVyLmV4dGVuZCh7XG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICAgICAgaGlkZURpYWxvZzogZnVuY3Rpb24gKHRpbWV6b25lUGlja2VyRGlhbG9nTmFtZSkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdGhpcy5zdG9wQ2xvY2tUaW1lcigpO1xuICAgICAgICAgICAgQm9vdHN0cmFwLk1vZGFsTWFuYWdlci5oaWRlKHRpbWV6b25lUGlja2VyRGlhbG9nTmFtZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZXRNYXA6IGZ1bmN0aW9uIChtYXBQYW5lbElkLCBzZWxlY3RlZFRpbWV6b25lKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgbWFwUGFuZSA9IGpRdWVyeShcIiNcIiArIG1hcFBhbmVsSWQpLFxuICAgICAgICAgICAgICAgIHNlbFpvbmUgPSBzZWxlY3RlZFRpbWV6b25lO1xuICAgICAgICAgICAgaWYgKEVtYmVyLmlzTm9uZShzZWxab25lKSkge1xuICAgICAgICAgICAgICAgIHNlbFpvbmUgPSB0aGlzLmdldCgnY3VycmVudE9sc29uVGltZXpvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFBhbmUudGltZXpvbmVQaWNrZXIoXCJzZWxlY3Rab25lXCIsIHNlbFpvbmUpO1xuICAgICAgICAgICAgbWFwUGFuZS50aW1lem9uZVBpY2tlcihcInJlc2V0TWFwXCIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhvdmVyT2xzb25UaW1lem9uZTogbnVsbCxcblxuICAgIGhvdmVyVGltZXpvbmU6IG51bGwsXG5cbiAgICBpbml0aWFsT2xzb25UaW1lem9uZTogbnVsbCxcblxuICAgIGxvYWRlZDogZmFsc2UsXG5cbiAgICBzZWxlY3RlZE9sc29uVGltZXpvbmU6IG51bGwsXG5cbiAgICBzZWxlY3RlZFRpbWV6b25lOiBudWxsLFxuXG4gICAgdGltZVRpY2s6IDAsXG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgYSBkYXRlIHRpbWUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGRpc3BsYXkgZGF0ZSB0aW1lIGluIG91ciBhcHAuIFdoZW4geW91IG5lZWQgdG8gZ2V0IGEgc3RyaW5nXG4gICAgICogcmVwcmVzZW50YXRpb24gb2YgdGhlIGRhdGUgdGltZSB0byBkaXNwbGF5LCB1c2UgVmluei50aW1lem9uZUNvbnRyb2xsZXIuZm9ybWF0RGF0ZVRpbWUoZGF0ZSxmb3JtYXQsc2hvd3RpbWV6b25lKS5cbiAgICAgKiBQbGVhc2Ugc2VlIHBhcmFtZXRlcnMgZXhwbGFuYXRpb24gYmVsb3dcbiAgICAgKiBAcGFyYW0gZGF0ZSAtIHRoaXMgY2FuIGJlIGEgZGF0ZSBvYmplY3Qgb3IgYW55IHN0cmluZyB0aGF0IG1vbWVudCBjYW4gcGFyc2UgYXMgYSBkYXRlLiBTZWUgdGhpczogaHR0cDovL21vbWVudGpzLmNvbS9kb2NzL1xuICAgICAqIG1vbWVudCBjYW4gaW50ZXJwcmV0IGEgdmFyaWV0eSBvZiBzdHJpbmcgYW5kIG51bWJlciBmb3JtYXRzIGFzIGRhdGVcbiAgICAgKiBAcGFyYW0gcGF0dGVybiB0aGlzIGlzIHRoZSBmb3JtYXQgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IHlvdXIgZGF0ZSB0aW1lIGluLiBGb3IgZXhhbXBsZTogTU0vREQvWVlZWSBoaDptbTpzcyBBLlxuICAgICAqIFNlZSB0aGUgZm9ybWF0IGRvY3Mgb24gbW9tZW50LmpzIChodHRwOi8vbW9tZW50anMuY29tL2RvY3MvKS4gSWYgdGhpcyBpcyBudWxsIG9yIHVuZGVmaW5lZCwgdGhlIGRlZmF1bHQgaXMgOiBNTS9ERC9ZWVlZXG4gICAgICogQHBhcmFtIHNob3d0aW1lem9uZSB3aGV0aGVyIG9yIG5vdCB5b3Ugd2FudCB0byBhcHBlbmQgZmFtaWxpYXIgKG5vdCBvbHNvbikgdGltZSB6b25lcyBhdCB0aGUgZW5kIG9mIHlvdXIgZGlzcGxheSB2YWx1ZS5cbiAgICAgKiAoTURUL01TVC9DRFQgLi4uIGFyZSB0aGUgdGltZXpvbmUgbmFtZXMpXG4gICAgICogQHBhcmFtIFt0aW1lem9uZU9sc2VuXSB0aGUgdGltZXpvbmUgbmFtZS4gSWYgbm90IHBhc3NlZCBpbiwgaXQnbGwgcmVhZCBmcm9tIHRoZSBjb29raWVcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlVGltZSA6IGZ1bmN0aW9uIChkYXRlLCBwYXR0ZXJuLCBzaG93dGltZXpvbmUsIHRpbWV6b25lT2xzZW4pIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdHogPSAoRW1iZXIuaXNOb25lKHRpbWV6b25lT2xzZW4pID8gRW1iZXIuJC5jb29raWUoJ3VzZXIudGltZXpvbmUnKSA6IHRpbWV6b25lT2xzZW4pLCByZXN1bHQsIG1lID0gdGhpcztcbiAgICAgICAgaWYgKEVtYmVyLmlzTm9uZSh0eikpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudChkYXRlKS5mb3JtYXQocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoc2hvd3RpbWV6b25lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcgJyArIG1lLmdldCgnYnJvd3NlclRpbWV6b25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBtb21lbnQoZGF0ZSkudHoodHopLmZvcm1hdChwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChzaG93dGltZXpvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFDRFNfVElNRVpPTkVfTUFQW3R6XSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyAnICsgd2luZG93LkFDRFNfVElNRVpPTkVfTUFQW3R6XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgYnJvd3NlclRpbWV6b25lOiBFbWJlci5jb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIG5vdywgVFo7XG4gICAgICAgIG5vdyA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8qanNsaW50IHJlZ2V4cDp0cnVlKi9cbiAgICAgICAgICAgIFRaID0gbm93LmluZGV4T2YoJygnKSA+IC0xID8gbm93Lm1hdGNoKC9cXChbXlxcKV0rXFwpLylbMF0ubWF0Y2goL1tBLVpdL2cpLmpvaW4oJycpIDogbm93Lm1hdGNoKC9bQS1aXXszLDR9LylbMF07XG4gICAgICAgICAgICAvKmpzbGludCByZWdleHA6ZmFsc2UqL1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgVFogPSBcIkdNVFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUWiA9PT0gXCJHTVRcIiAmJiAvKEdNVFxcVypcXGR7NH0pLy50ZXN0KG5vdykpIHtcbiAgICAgICAgICAgIFRaID0gUmVnRXhwLiQxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUWjtcbiAgICB9KSxcblxuICAgIGN1cnJlbnRCcm93c2VyVGltZTogRW1iZXIuY29tcHV0ZWQoJ2Jyb3dzZXJUaW1lem9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gbW9tZW50KCkuZm9ybWF0KCdoaDptbTpzc2EnKSArICcgJyArIHRoaXMuZ2V0KCdicm93c2VyVGltZXpvbmUnKTtcbiAgICB9KSxcblxuICAgIGN1cnJlbnRPbHNvblRpbWV6b25lOiBFbWJlci5jb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgLy9maXJzdCB0cnkgdG8gc2VlIGlmIHRoZXJlIGlzIGEgY29va2llLlxuICAgICAgICAvL2lmIG5vdCBmb3VuZCwgdHJ5IGEgYmVzdCBndWVzdCBmcm9tIHRoZSBtYXAuXG4gICAgICAgIC8vaWYgc3RpbGwgbm90IG5vdCBmb3VuZC4gQXNzdW1lIGl0IHRvIGJlIEFtZXJpY2EvRGVudmVyIGFzIHRoYXQgaXMgd2hlcmUgd2UgaGFpbCBmcm9tLlxuICAgICAgICB2YXIgbWUgPSB0aGlzLFxuICAgICAgICAgICAgZmluZERlZmF1bHRUeiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgZHR6ID0gbWUuZ2V0KCdicm93c2VyVGltZXpvbmUnKSwgdHpLZXksIHR6VmFsdWU7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHdpbmRvdy5VU19NQUpPUl9UWi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LlVTX01BSk9SX1RaW2ldLmFiYnJldiA9PT0gZHR6KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LlVTX01BSk9SX1RaW2ldLm9sc2VuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodHpLZXkgaW4gd2luZG93LkFDRFNfVElNRVpPTkVfTUFQKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQUNEU19USU1FWk9ORV9NQVAuaGFzT3duUHJvcGVydHkodHpLZXkpICYmIHR6S2V5LmluZGV4T2YoXCIvXCIpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHpWYWx1ZSA9IHdpbmRvdy5BQ0RTX1RJTUVaT05FX01BUFt0ektleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHpWYWx1ZSA9PT0gZHR6KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR6S2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnQW1lcmljYS9EZW52ZXInO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR6ID0galF1ZXJ5LmNvb2tpZSgndXNlci50aW1lem9uZScpO1xuICAgICAgICByZXR1cm4gRW1iZXIuaXNOb25lKHR6KSA/IGZpbmREZWZhdWx0VHooKSA6IHR6O1xuICAgIH0pLFxuXG4gICAgZ2V0Q3VycmVudFRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZShuZXcgRGF0ZSgpLCAnaGg6bW06c3NhJywgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGdldEN1cnJlbnRUaW1lV2l0aFR6OiBmdW5jdGlvbiAodHopIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlVGltZShuZXcgRGF0ZSgpLCAnaGg6bW06c3NhJywgdHJ1ZSwgdHopO1xuICAgIH0sXG5cbiAgICBnZXRUaW1lem9uZU5hbWU6IGZ1bmN0aW9uIChvbHNvbk5hbWUpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgcmVzdWx0ID0gd2luZG93LkFDRFNfVElNRVpPTkVfTUFQW29sc29uTmFtZV07XG4gICAgICAgIGlmIChFbWJlci5pc0VtcHR5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG9sc29uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBsb2FkU2NyaXB0OiBmdW5jdGlvbiAobWFwUGFuZWxJZCwgdGltZXpvbmVEaWFsb2dOYW1lLCBzZWxab25lKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIG1lID0gdGhpcywgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBzL2FwaS9qcz9zZW5zb3I9ZmFsc2Uma2V5PUFJemFTeUF1dzNreEQwcWtGWTV2UDJCdW5mVXJfVkRMdHNNdFhjayZjYWxsYmFjaz1pbml0aWFsaXplVGltZXJab25lUGFuZWwnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsaXplVGltZXJab25lUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkoXCIjXCIgKyBtYXBQYW5lbElkKS50aW1lem9uZVBpY2tlcih7XG4gICAgICAgICAgICAgICAganNvblJvb3RVcmw6ICdkYXRhL3R6X2pzb24vJyxcbiAgICAgICAgICAgICAgICAvL2NlbnRlciBhcm91bmQgaW93YVxuICAgICAgICAgICAgICAgIGluaXRpYWxMYXQ6IDQxLjY2NjAwNyxcbiAgICAgICAgICAgICAgICBpbml0aWFsTG5nOiAgLTkzLjYyMTc5MyxcbiAgICAgICAgICAgICAgICBpbml0aWFsWm9vbTogMyxcbiAgICAgICAgICAgICAgICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eiA9IHNlbFpvbmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChFbWJlci5pc05vbmUodHopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eiA9IG1lLmdldCgnaW5pdGlhbE9sc29uVGltZXpvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoRW1iZXIuaXNOb25lKHR6KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHogPSBtZS5nZXQoJ2N1cnJlbnRPbHNvblRpbWV6b25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI1wiICsgbWFwUGFuZWxJZCkudGltZXpvbmVQaWNrZXIoJ3NlbGVjdFpvbmUnLCB0eik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkhvdmVyOiBmdW5jdGlvbiAodXRjT2Zmc2V0LCB0ek5hbWVzLCBvbHNvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFFbWJlci5pc05vbmUodHpOYW1lcykgJiYgIUVtYmVyLmlzTm9uZShvbHNvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZXQoJ2hvdmVyT2xzb25UaW1lem9uZScsIG9sc29uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZXQoJ2hvdmVyVGltZXpvbmUnLCB0ek5hbWVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnNldCgnaG92ZXJPbHNvblRpbWV6b25lJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZXQoJ2hvdmVyVGltZXpvbmUnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblNlbGVjdGVkOiBmdW5jdGlvbiAob2xzb25OYW1lLCB1dGNPZmZzZXQsIHR6TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUVtYmVyLmlzTm9uZSh0ek5hbWUpICYmICFFbWJlci5pc05vbmUob2xzb25OYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2V0KCdzZWxlY3RlZE9sc29uVGltZXpvbmUnLCBvbHNvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2V0KCdzZWxlY3RlZFRpbWV6b25lJywgdHpOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnNldCgnaG92ZXJPbHNvblRpbWV6b25lJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZXQoJ2hvdmVyVGltZXpvbmUnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBtYXhab29tOiAxMixcbiAgICAgICAgICAgICAgICAgICAgbWluWm9vbTogMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgQm9vdHN0cmFwLk1vZGFsTWFuYWdlci5zaG93KHRpbWV6b25lRGlhbG9nTmFtZSk7XG4gICAgICAgICAgICBtZS5zZXQoJ2xvYWRlZCcsIHRpbWV6b25lRGlhbG9nTmFtZSk7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHNob3dEaWFsb2c6IGZ1bmN0aW9uIChtYXBQYW5lbElkLCB0aW1lem9uZURpYWxvZ05hbWUsIHNlbGVjdGVkVGltZXpvbmUpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUuZ2V0KCdsb2FkZWQnKSA9PT0gdGltZXpvbmVEaWFsb2dOYW1lKSB7XG4gICAgICAgICAgICBtZS5zZW5kKCdyZXNldE1hcCcsIG1hcFBhbmVsSWQsIHNlbGVjdGVkVGltZXpvbmUpO1xuICAgICAgICAgICAgQm9vdHN0cmFwLk1vZGFsTWFuYWdlci5zaG93KHRpbWV6b25lRGlhbG9nTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5sb2FkU2NyaXB0KG1hcFBhbmVsSWQsIHRpbWV6b25lRGlhbG9nTmFtZSwgc2VsZWN0ZWRUaW1lem9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydENsb2NrVGltZXIoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpRdWVyeShcIi50ek1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciAuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lLnN0b3BDbG9ja1RpbWVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgfSxcblxuICAgIHN0YXJ0Q2xvY2tUaW1lcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBtZSA9IHRoaXMsIHY7XG4gICAgICAgIHdpbmRvdy5kb05vdGhpZGVDYWxlbmRhck9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgaWYgKEVtYmVyLmlzTm9uZShtZS5kb1N0b3BDbG9jaykpIHtcbiAgICAgICAgICAgIHYgPSBtZS5nZXQoJ3RpbWVUaWNrJyk7XG4gICAgICAgICAgICBFbWJlci5ydW4ubGF0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lLnNldCgndGltZVRpY2snLCB2ICsgMSk7XG4gICAgICAgICAgICAgICAgbWUuc3RhcnRDbG9ja1RpbWVyKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFZpbnouTG9nZ2VyLmluZm8oJ0Nsb2NrIHRpbWVyIHN0b3BwZWQnLCB0aGlzKTtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5kb1N0b3BDbG9jaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wQ2xvY2tUaW1lcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLmRvU3RvcENsb2NrID0gdHJ1ZTtcbiAgICAgICAgbWUuc2V0KCd0aW1lVGljaycsIDApO1xuICAgICAgICBWaW56LkxvZ2dlci5pbmZvKCdTdG9wcGluZyBjbG9jayB0aW1lciAuLi4nLCB0aGlzKTtcbiAgICAgICAgRW1iZXIucnVuLmxhdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb05vdGhpZGVDYWxlbmRhck9uT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciwgU2ltcGxlQXV0aCAqL1xuXG5WaW56LkF1dGhTZXNzaW9uID0gU2ltcGxlQXV0aC5TZXNzaW9uLmV4dGVuZCh7XG4gICAgaWRlbnRpdHk6IG51bGwsXG5cbiAgICBvbkFjY2Vzc1Rva2VuQ2hhbmdlOiBFbWJlci5vYnNlcnZlcignYWNjZXNzX3Rva2VuJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgc3RvcmUgPSB0aGlzLmNvbnRhaW5lci5sb29rdXAoJ3N0b3JlOm1haW4nKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmZpbmQoJ2lkZW50aXR5JywgJ2N1cnJlbnQnKS50aGVuKGZ1bmN0aW9uIChpZGVudGl0eSkge1xuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGlkZW50aXR5LmdldCgnYXV0aG9yaXphdGlvbnMnKSk7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGlkZW50aXR5LmdldCgnb3JnYW5pemF0aW9ucycpKTtcbiAgICAgICAgICAgIHJldHVybiBFbWJlci5SU1ZQLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXQoJ2N1cnJlbnRPcmdhbml6YXRpb24nLCBpZGVudGl0eS5nZXQoJ29yZ2FuaXphdGlvbnMnKS5vYmplY3RBdCgwKSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXQoJ2lkZW50aXR5JywgaWRlbnRpdHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59KTtcbiIsIi8qZ2xvYmFsIEVtYmVyLCBWaW56LCBTaW1wbGVBdXRoICovXG5cblZpbnouQXV0aFN0b3JlID0gU2ltcGxlQXV0aC5TdG9yZXMuTG9jYWxTdG9yYWdlLmV4dGVuZCh7XG4gICAgc2Vzc2lvbkNvb2tpZTogdHJ1ZSxcblxuICAgIHBlcnNpc3Q6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHR3b1dlZWtzID0gMTIwOTYwMCwgY29va2llRXhwaXJlcyA9IHRoaXMuc2Vzc2lvbkNvb2tpZSA/IG51bGwgOiBkYXRhLmV4cGlyZXNfaW4gfHwgdHdvV2Vla3M7XG4gICAgICAgIEVtYmVyLiQuY29va2llKCdhdXRoVG9rZW4nLCBkYXRhLmFjY2Vzc190b2tlbiwgeyBleHBpcmVzOiBjb29raWVFeHBpcmVzLCBwYXRoOiAnLycgfSk7XG4gICAgICAgIGRhdGEuYWNjZXNzX3Rva2VuID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3VwZXIoZGF0YSk7XG4gICAgfSxcblxuICAgIHJlc3RvcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX3N1cGVyKCksXG4gICAgICAgICAgICBhdXRoVG9rZW5Db29raWUgPSBFbWJlci4kLmNvb2tpZSgnYXV0aFRva2VuJyk7XG5cbiAgICAgICAgaWYgKGF1dGhUb2tlbkNvb2tpZSkge1xuICAgICAgICAgICAgZGF0YS5hY2Nlc3NfdG9rZW4gPSBhdXRoVG9rZW5Db29raWUuc3BsaXQoJzsnKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICBFbWJlci4kLmNvb2tpZSgnYXV0aFRva2VuJywgbnVsbCwgeyBwYXRoOiAnLycgfSk7XG4gICAgfVxufSk7XG5cbiIsIi8qZ2xvYmFsIEVtYmVyLCBWaW56LCBTaW1wbGVBdXRoICovXG5cbi8qKlxuICogUmVxdWlyZXMgdmluelByb3h5QWRkcmVzcyBiZSBkZWZpbmVkOlxuICogYGBgXG4gKiBBcHAuRW52aXJvbm1lbnQgPSBWaW56LkVudmlyb25tZW50LmNyZWF0ZSgpO1xuICogQXBwLkF1dGhlbnRpY2F0b3IgPSBWaW56LkF1dGhlbnRpY2F0b3IuZXh0ZW5kKHtcbiAqICAgICB2aW56UHJveHlBZGRyZXNzOiBmdW5jdGlvbigpIHsgcmV0dXJuIEFwcC5FbnZpcm9ubWVudC5nZXQoJ3ZpbnpQcm94eUFkZHJlc3MnKTsgfS5wcm9wZXJ0eSgpXG4gKiB9KTtcbiAqIGBgYFxuICovXG5cbi8qanNsaW50IHVucGFyYW06IHRydWUgKi9cblZpbnouQXV0aGVudGljYXRvciA9IFNpbXBsZUF1dGguQXV0aGVudGljYXRvcnMuT0F1dGgyLmV4dGVuZCh7XG4gICAgdmluelByb3h5QWRkcmVzczogJy92aW56JyxcbiAgICBhdXRoZW50aWNhdGU6IGZ1bmN0aW9uIChjcmVkZW50aWFscykge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgdXJsID0gdGhpcy5nZXQoJ3ZpbnpQcm94eUFkZHJlc3MnKSArICcvdG9rZW4nO1xuICAgICAgICByZXR1cm4gbmV3IEVtYmVyLlJTVlAuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIga2VlcFNpZ25lZEluID0gY3JlZGVudGlhbHMua2VlcFNpZ25lZEluIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGEgPSB7IGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnLCBjbGllbnRfaWQ6IGNyZWRlbnRpYWxzLmlkZW50aWZpY2F0aW9uLCBjbGllbnRfc2VjcmV0OiBjcmVkZW50aWFscy5wYXNzd29yZCB9O1xuICAgICAgICAgICAgaWYgKGtlZXBTaWduZWRJbikge1xuICAgICAgICAgICAgICAgIGRhdGEua2VlcFNpZ25lZEluID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5tYWtlUmVxdWVzdCh1cmwsIGRhdGEpLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBpcmVzQXQgPSBzZWxmLmFic29sdXRpemVFeHBpcmF0aW9uVGltZShyZXNwb25zZS5leHBpcmVzX2luKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShFbWJlci4kLmV4dGVuZChyZXNwb25zZSwgeyBleHBpcmVzX2F0OiBleHBpcmVzQXQgfSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBFbWJlci5ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25VbmF1dGhvcml6ZWQ6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ3Nlc3Npb24nKSAmJiB0aGlzLnNlc3Npb24gJiYgdGhpcy5zZXNzaW9uLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLmludmFsaWRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcjL2xvZ2luJyk7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbCBFbWJlciwgVmlueiwgRFMgKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgdG8gcmVwcmVzZW50IGEgZW52aXJvbm1lbnQgY29uZmlndXJhdGlvbiwgaW5jbHVkaW5nIHNlcnZlciBzaWRlIGNvbmZpZ3VyYXRpb24gdmFsdWVzIHN1Y2ggYXNcbiAqIHByb2plY3RWZXJzaW9uLCBidWlsZERhdGUsIGJ1aWxkUmV2aXNpb24sIGFuZCBwcm94eUFkZHJlc3Nlcy5cbiAqXG4gKiAgLSBpbml0RmFpbGVkIC0gZmFsc2UgaWYgZGF0YS9jb25maWd1cmF0aW9uLmpzb24gY2Fubm90IGJlIGxvYWRlZFxuICogIC0gbW9kdWxlcyAtIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgbW9kdWxlcyAoZWcuLCAndmlueiwgZXNwLCBvcGxvZycpXG4gKiAgLSA8bW9kdWxlPlByb3h5QWRkcmVzcyAtIGxvY2F0aW9uIG9mIG1vZHVsZSBwcm94eSAoZWcuLCB2aW56UHJveHlBZGRyZXNzIGlzICcvdmlueicpXG4gKiAgLSBhdXRoQ3Jvc3NPcmlnaW5XaGl0ZUxpc3QgLSB1c2VkIGJ5IGF1dGhlbnRpY2F0aW9uLmpzIHdoZW4gYSBwcm94eSBhZGRyZXNzIGlzIG9uIGEgaG9zdFxuICogICAgb3RoZXIgdGhhbiB0aGUgdWkgKHRoaXMgaXMgdXNlZnVsIGZvciBkZXYpXG4gKiAgLSBwcm9qZWN0VmVyc2lvbiwgYnVpbGREYXRlLCBidWlsZFJldmlzaW9uIC0gZGlzcGxheWVkIGluIHRoZSBhcHBsaWNhdGlvbiBmb290ZXJcbiAqXG4gKiBBZGRpdGlvbmFsIGZpZWxkcyBjYW4gYmUgcmVhZCBmcm9tIGRhdGEvY29uZmlndXJhdGlvbi5qc29uIGJ5IGV4dGVuZGluZyB0aGUgdXBkYXRlRmllbGRzIGZ1bmN0aW9uOlxuICogYGBgXG4gKiBBcHAuRW52aXJvbmVtbnQgPSBWaW56LkVudmlyb25tZW50LmV4dGVuZCh7XG4gKiAgICAgYWRkaXRpb25hbEZpZWxkOiAnZGVmYXVsdCcsXG4gKiAgICAgdXBkYXRlRmllbGRzOiBmdW5jdGlvbihkYXRhKSB7XG4gKiAgICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gKiAgICAgICAgIHRoaXMudXBkYXRlRmllbGQoJ2FkZGl0aW9uYWxGaWVsZCcsIGRhdGEpO1xuICogICAgIH1cbiAqIH0pO1xuICpcbiAqIEFwcC5pbml0aWFsaXplcihWaW56LkluaXRpYWxpemVyKCcvJykpO1xuICogYGBgXG4gKlxuICogSW4gcHJvZHVjdGlvbiwgdGhlIGVudmlyb25tZW50IGZpbGUgKGRhdGEvY29uZmlndXJhdGlvbi5qc29uKSBpcyBnZW5lcmF0ZWQgYnkgdGhlIHNlcnZlciAoc2VlIGFuIGV4YW1wbGVcbiAqIGltcGxlbWVudGF0aW9uIGluIHNyYy9tYWluL2phdmEvY29tL3RoaXN0ZWNoL2FjZHMvdWkvc2VydmljZS9Db25maWdTZXJ2aWNlLmphdmEuIEluIGRldmVsb3BtZW50LCB3aXRoIGd1bHAgb3JcbiAqIGdydW50LCBpdCBpcyBzZXJ2ZWQgZnJvbSBhIHN0YXRpYyBmaWxlLlxuICovXG5WaW56LkVudmlyb25tZW50ID0gRW1iZXIuT2JqZWN0LmV4dGVuZCh7XG4gICAgYXV0aENyb3NzT3JpZ2luV2hpdGVsaXN0OiBbIF0sXG4gICAgYnVpbGREYXRlOiBudWxsLFxuICAgIGJ1aWxkUmV2aXNpb246IG51bGwsXG4gICAgcHJvamVjdFZlcnNpb246IG51bGwsXG4gICAgaW5pdEZhaWxlZDogbnVsbCxcbiAgICB2aW56UHJveHlBZGRyZXNzOiAnL3ZpbnonLFxuXG4gICAgLy8gbWV0aG9kIHRvIGNhbGwgZnJvbSBhbiBpbml0aWFsaXplciAoc2VlIFZpbnouSW5pdGlhbGl6ZXIpXG4gICAgc2V0dXA6IGZ1bmN0aW9uIChhcHBsaWNhdGlvbikge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZXQoJ2FwcCcsIGFwcGxpY2F0aW9uKTtcblxuICAgICAgICAvLyBmZXRjaCB0aGUgY29uZmlyZ3VyYXRpb25cbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLnJvb3RFbGVtZW50ID09PSAnYm9keScpIHtcbiAgICAgICAgICAgIHJldHVybiBFbWJlci4kLmFqYXgoJ2RhdGEvY29uZmlndXJhdGlvbi5qc29uJywge3RpbWVvdXQ6IDMwMDB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVGaWVsZHMoZGF0YSk7XG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBFbWJlci5Mb2dnZXIuZXJyb3IoJ0luaXQgRmFpbGVkOiBDb3VsZCBub3QgbG9hZCBkYXRhL2NvbmZpZ3VyYXRpb24uanNvbicpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlRmllbGQoJ2luaXRGYWlsZWQnLCB7IGluaXRGYWlsZWQ6ICdDb3VsZCBub3QgbG9hZCBkYXRhL2NvbmZpZ3VyYXRpb24uanNvbid9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUZpZWxkKCdidWlsZFJldmlzaW9uJywgeyBidWlsZFJldmlzaW9uOiAnSU5JVC1GQUlMRUQnIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Rlc3RpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gRW1iZXIuJC53aGVuKHRoaXMpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVGaWVsZHM6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudXBkYXRlRmllbGQoJ2F1dGhDcm9zc09yaWdpbldoaXRlbGlzdCcsIGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkKCdwcm9qZWN0VmVyc2lvbicsIGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkKCdidWlsZERhdGUnLCBkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZCgnYnVpbGRSZXZpc2lvbicsIGRhdGEpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGQoJ21vZHVsZXMnLCBkYXRhKTtcbiAgICAgICAgZGF0YS5tb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGVGaWVsZChtb2R1bGUgKyAnUHJveHlBZGRyZXNzJywgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGVGaWVsZDogZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgZGF0YSkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHByb3BlcnR5TmFtZSwgZGF0YVtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjdXJyZW50WWVhcjogRW1iZXIuY29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgfSlcbn0pO1xuIiwicmVxdWlyZSgnLi9hdXRoU2Vzc2lvbi5qcycpO1xucmVxdWlyZSgnLi9hdXRoU3RvcmUuanMnKTtcbnJlcXVpcmUoJy4vYXV0aGVudGljYXRvci5qcycpO1xucmVxdWlyZSgnLi9lbnZpcm9ubWVudC5qcycpO1xucmVxdWlyZSgnLi9pbml0aWFsaXplLmpzJyk7XG5yZXF1aXJlKCcuL3NldHVwLmpzJyk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciwgU2ltcGxlQXV0aCAqL1xuXG5WaW56LmluaXRpYWxpemUgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBhcHBsaWNhdGlvbikge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgZW52O1xuXG4gICAgLy8gZGVmaW5lIGFuZCByZWdpc3RlciBFbnZpcm9ubWVudFxuICAgIGlmICghYXBwbGljYXRpb24uRW52aXJvbm1lbnQpIHtcbiAgICAgICAgYXBwbGljYXRpb24uRW52aXJvbm1lbnQgPSBWaW56LkVudmlyb25tZW50LmV4dGVuZCgpO1xuICAgIH1cbiAgICBhcHBsaWNhdGlvbi5yZWdpc3RlcignZW52aXJvbm1lbnQ6dmlueicsIGFwcGxpY2F0aW9uLkVudmlyb25tZW50LCB7c2luZ2xldG9uOiB0cnVlfSk7XG4gICAgYXBwbGljYXRpb24uaW5qZWN0KCdhZGFwdGVyJywgJ2VudicsICdlbnZpcm9ubWVudDp2aW56Jyk7XG4gICAgYXBwbGljYXRpb24uaW5qZWN0KCdjb250cm9sbGVyJywgJ2VudicsICdlbnZpcm9ubWVudDp2aW56Jyk7XG4gICAgYXBwbGljYXRpb24uaW5qZWN0KCdyb3V0ZScsICdlbnYnLCAnZW52aXJvbm1lbnQ6dmlueicpO1xuICAgIGVudiA9IGNvbnRhaW5lci5sb29rdXAoJ2Vudmlyb25tZW50OnZpbnonKTtcblxuICAgIC8vIGZldGNoIGVudmlyb25tZW50XG4gICAgYXBwbGljYXRpb24uZGVmZXJSZWFkaW5lc3MoKTtcbiAgICBFbWJlci4kLndoZW4oZW52LnNldHVwKGFwcGxpY2F0aW9uKSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGF1dGhvcml6ZXIgPSBjb250YWluZXIubG9va3VwKCdzaW1wbGUtYXV0aC1hdXRob3JpemVyOnZpbnonKTtcbiAgICAgICAgaWYgKGF1dGhvcml6ZXIpIHsgYXV0aG9yaXplci5zZXQoJ3ZpbnpQcm94eUFkZHJlc3MnLCBlbnYuZ2V0KCd2aW56UHJveHlBZGRyZXNzJykpOyB9XG4gICAgICAgIGFwcGxpY2F0aW9uLmFkdmFuY2VSZWFkaW5lc3MoKTtcbiAgICB9KTtcbn07XG4iLCIvKmdsb2JhbCBWaW56LCBTaW1wbGVBdXRoICovXG5cbnJlcXVpcmUoJy4uL3V0aWwvZW5kc1dpdGhBbnknKTtcbnJlcXVpcmUoJy4vYXV0aFNlc3Npb24nKTtcbnJlcXVpcmUoJy4vYXV0aFN0b3JlJyk7XG5yZXF1aXJlKCcuL2F1dGhlbnRpY2F0b3InKTtcbnJlcXVpcmUoJy4vaW5pdGlhbGl6ZScpO1xucmVxdWlyZSgnLi4vcm91dGVzL21hcFJvdXRlcycpO1xuXG5WaW56LnNldHVwID0gZnVuY3Rpb24oYXBwLCBvcHRpb25zKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHdpbmRvdy5FTlYgPSB3aW5kb3cuRU5WIHx8IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYXBwLnNldFByb3BlcnRpZXMob3B0aW9ucyk7XG4gICAgICAgIC8vIFRPRE86IG1vdmVzIG9wdGlvbnMgb2ZmIG9mIHRoZSBhcHBcbiAgICAgICAgLy93aW5kb3cuRU5WWyd2aW56J10gPSBvcHRpb25zO1xuICAgIH1cblxuICAgIC8vIGluamVjdCB2aW56IGNsYXNzZXMgaW50byBhcHBcbiAgICB2YXIgc3VmZml4ID0gWydNb2RlbCcsICdWaWV3JywgJ0NvbXBvbmVudCcsICdDb250cm9sbGVyJywgJ1JvdXRlJywgJ0FkYXB0ZXInLCAnU2VyaWFsaXplcicsICdUcmFuc2Zvcm0nXSwgbmFtZTtcbiAgICBmb3IgKG5hbWUgaW4gVmlueikge1xuICAgICAgICBpZiAoVmluei5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lLmVuZHNXaXRoQW55KHN1ZmZpeCkgJiYgIWFwcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgYXBwW25hbWVdID0gVmlueltuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hcCB2aW56IHJvdXRlc1xuICAgIGFwcC5Sb3V0ZXIubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICBWaW56Lm1hcFJvdXRlcyh0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIHNldHVwIHNpbXBsZS1hdXRoXG4gICAgd2luZG93LkVOVlsnc2ltcGxlLWF1dGgnXSA9IHtcbiAgICAgICAgYXV0aG9yaXplcjogJ3NpbXBsZS1hdXRoLWF1dGhvcml6ZXI6dmlueicsXG4gICAgICAgIHNlc3Npb246ICdzaW1wbGUtYXV0aC1zZXNzaW9uOnZpbnonLFxuICAgICAgICBzdG9yZTogJ3NpbXBsZS1hdXRoLXNlc3Npb24tc3RvcmU6dmlueidcbiAgICB9O1xuICAgIGFwcC5yZWdpc3Rlcignc2ltcGxlLWF1dGgtYXV0aG9yaXplcjp2aW56JywgU2ltcGxlQXV0aC5BdXRob3JpemVycy5PQXV0aDIpO1xuICAgIGFwcC5yZWdpc3Rlcignc2ltcGxlLWF1dGgtc2Vzc2lvbjp2aW56JywgVmluei5BdXRoU2Vzc2lvbik7XG4gICAgYXBwLnJlZ2lzdGVyKCdzaW1wbGUtYXV0aC1zZXNzaW9uLXN0b3JlOnZpbnonLCBWaW56LkF1dGhTdG9yZSk7XG4gICAgYXBwLnJlZ2lzdGVyKCdzaW1wbGUtYXV0aC1hdXRoZW50aWNhdG9yOnZpbnonLCBWaW56LkF1dGhlbnRpY2F0b3IpO1xuICAgIGFwcC5pbmplY3QoJ2FkYXB0ZXInLCAnYXV0aGVudGljYXRvcicsICdzaW1wbGUtYXV0aC1hdXRoZW50aWNhdG9yOnZpbnonKTtcblxuICAgIC8vIHNjaGVkdWxlIGluaXRpYWxpemVyIHRvIGxvYWQgZW52aXJvbm1lbnQgY29uZmlnXG4gICAgYXBwLmluaXRpYWxpemVyKHtcbiAgICAgICAgbmFtZTogJ3ZpbnonLFxuICAgICAgICBpbml0aWFsaXplOiBWaW56LmluaXRpYWxpemVcbiAgICB9KTtcblxuICAgIHJldHVybiBhcHA7XG59O1xuIiwicmVxdWlyZSgnLi9pbnB1dFZhbGlkYXRpb25NaXhpbi5qcycpO1xucmVxdWlyZSgnLi9pbnB1dFZhbGlkYXRpb25TZXRNaXhpbi5qcycpO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyICovXG4vKmpzbGludCBub21lbjp0cnVlKi9cblxuVmluei5JbnB1dFZhbGlkYXRpb25NaXhpbiA9IEVtYmVyLk1peGluLmNyZWF0ZSh7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGlzIGZpZWxkIGNvbnRhaW5zIGFuIGludmFsaWQgdmFsdWUuIEFuIGludmFsaWQgdmFsdWUgaXMgYSB2YWx1ZSB0aGF0LFxuICAgICAqIGlmIGxlZnQgdW5jaGFuZ2VkLCBtYXkgY2F1c2UgYW4gZXJyb3IuXG4gICAgICoge1N0cmluZ31cbiAgICAgKi9cbiAgICBpbnZhbGlkVmFsdWVNZXNzYWdlOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhpcyBmaWVsZCBpcyBlbXB0eSBhbmQgcmVxdWlyZWQuXG4gICAgICoge1N0cmluZ31cbiAgICAgKi9cbiAgICBpc1ZhbHVlRW1wdHlNZXNzYWdlOiAnUmVxdWlyZWQnLFxuXG4gICAgLyoqXG4gICAgICogSXMgdGhpcyBpbnB1dCdzIHZhbHVlIHJlcXVpcmVkPyBJZiB0cnVlIHRoZW4gdGhpcyBpbnB1dCBjb250YWlucyBhbiBpbnZhbGlkIHZhbHVlIHdoZW5ldmVyIGl0IGlzIGVtcHR5LlxuICAgICAqIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzVmFsdWVSZXF1aXJlZDogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIERvZXMgdGhpcyBpbnB1dCBjb250YWluIGEgdmFsaWQgdmFsdWU/IEFuIGludmFsaWQgdmFsdWUgaXMgYSB2YWx1ZSB0aGF0IG1heSBjYXVzZSBhbiBlcnJvciBpZiBsZWZ0IHVuY2hhbmdlZC5cbiAgICAgKiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbHVlVmFsaWQ6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGlzIGlucHV0IGNvbnRhaW5zIGEgdmFsaWQgdmFsdWUuXG4gICAgICoge1N0cmluZ31cbiAgICAgKi9cbiAgICB2YWxpZFZhbHVlTWVzc2FnZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFdhcyB0aGlzIGZpZWxkIGVtcHR5PyBVc2VkIHRvIGtlZXAgdHJhY2sgb2Ygd2hlbiB0aGlzIGZpZWxkIGJlY29tZXMgZW1wdHkgb3Igbm9uLWVtcHR5LlxuICAgICAqIHtCb29sZWFufVxuICAgICAqL1xuICAgIHdhc1ZhbHVlRW1wdHk6IHRydWUsXG5cbiAgICBjaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnZhbGlkYXRlVmFsdWUoKTtcbiAgICB9LFxuXG4gICAgZGlkSW5zZXJ0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGVWYWx1ZSgpO1xuICAgICAgICB0aGlzLnNldCgnd2FzVmFsdWVFbXB0eScsIHRoaXMuZ2V0KCdpc1ZhbHVlRW1wdHknKSk7XG4gICAgfSxcblxuICAgIGlzVmFsdWVFbXB0eTogRW1iZXIuY29tcHV0ZWQoJ3ZhbHVlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCd2YWx1ZScpO1xuICAgICAgICByZXR1cm4gKHZhbHVlID09PSAnJykgfHwgKHZhbHVlID09PSBudWxsKSB8fCAodmFsdWUgPT09IHVuZGVmaW5lZCkgfHwgKHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gICAgfSksXG5cbiAgICBrZXlVcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMudmFsaWRhdGVWYWx1ZSgpO1xuICAgIH0sXG5cbiAgICBvbklzVmFsdWVSZXF1aXJlZENoYW5nZWQ6IEVtYmVyLm9ic2VydmVyKCdpc1ZhbHVlUmVxdWlyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIH0pLFxuXG4gICAgb25WYWx1ZVZhbGlkaXR5Q2hhbmdlZDogRW1iZXIub2JzZXJ2ZXIoJ2lzVmFsdWVWYWxpZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJCgpLFxuICAgICAgICAgICAgaWNvbkVsZW1lbnQsXG4gICAgICAgICAgICBpc1ZhbHVlVmFsaWQgPSB0aGlzLmdldCgnaXNWYWx1ZVZhbGlkJyksXG4gICAgICAgICAgICBtZXNzYWdlRWxlbWVudCxcbiAgICAgICAgICAgIHBhcmVudEZvcm1Hcm91cCxcbiAgICAgICAgICAgIHN0YXR1c0lkID0gdGhpcy5nZXQoJ3N0YXR1c0lkJyksXG4gICAgICAgICAgICBzdGF0dXNNZXNzYWdlO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcGFyZW50Rm9ybUdyb3VwID0gZWxlbWVudC5wYXJlbnRzKCcuZm9ybS1ncm91cCcpO1xuICAgICAgICAgICAgaWYgKHBhcmVudEZvcm1Hcm91cCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbHVlVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Rm9ybUdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Rm9ybUdyb3VwLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEZvcm1Hcm91cC5yZW1vdmVDbGFzcygnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Rm9ybUdyb3VwLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25FbGVtZW50ID0gcGFyZW50Rm9ybUdyb3VwLmZpbmQoJyMnICsgc3RhdHVzSWQgKyAnLWljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGljb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcygnZ2x5cGhpY29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWx1ZVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1yZW1vdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcygnZ2x5cGhpY29uLW9rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKCdnbHlwaGljb24tb2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcygnZ2x5cGhpY29uLXJlbW92ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gcGFyZW50Rm9ybUdyb3VwLmZpbmQoJyMnICsgc3RhdHVzSWQgKyAnLW1lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWx1ZVZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZSA9IHRoaXMuZ2V0KCd2YWxpZFZhbHVlTWVzc2FnZScpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2lzVmFsdWVSZXF1aXJlZCcpICYmIHRoaXMuZ2V0KCdpc1ZhbHVlRW1wdHknKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlID0gdGhpcy5nZXQoJ2lzVmFsdWVFbXB0eU1lc3NhZ2UnKSB8fCB0aGlzLmdldCgnaW52YWxpZE1lc3NhZ2UnKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlID0gdGhpcy5nZXQoJ2ludmFsaWRWYWx1ZU1lc3NhZ2UnKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC50ZXh0KHN0YXR1c01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGlucHV0IGZpZWxkJ3MgbGFiZWwncyBzdHlsZSB0byBtYXRjaCB3aGV0aGVyIHRoZSBmaWVsZCdzIHZhbHVlIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHVwZGF0ZUxhYmVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLiQoKSxcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgICAgIHBhcmVudEZvcm1Hcm91cDtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHBhcmVudEZvcm1Hcm91cCA9IGVsZW1lbnQucGFyZW50cygnLmZvcm0tZ3JvdXAnKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRGb3JtR3JvdXApIHtcbiAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQgPSBwYXJlbnRGb3JtR3JvdXAuZmluZCgnbGFiZWwuY29udHJvbC1sYWJlbCcpO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LnRvZ2dsZUNsYXNzKCdjb250cm9sLWxhYmVsLXJlcXVpcmVkJywgdGhpcy5nZXQoJ2lzVmFsdWVSZXF1aXJlZCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciAqL1xuXG4vKipcbiAqIE1peGluIGZvciBjb250cm9sbGVycyBvZiB1c2VyIGludGVyZmFjZSBmb3JtcyB0aGF0IGNvbnRhaW4gaW5wdXQgZmllbGRzIHRoYXQgdmFsaWRhdGUgdGhlaXIgZGF0YSB2YWx1ZXMuXG4gKi9cblZpbnouSW5wdXRWYWxpZGF0aW9uU2V0TWl4aW4gPSBFbWJlci5NaXhpbi5jcmVhdGUoe1xuXG4gICAgLyoqXG4gICAgICogT3Bwb3NpdGUgb2YgaXMgdmFsdWUgdmFsaWQuIFVzZWZ1bCBmb3IgYmluZGluZyB0byBIVE1MIGVsZW1lbnQncyAnZGlzYWJsZWQnIENTUyBjbGFzcyBuYW1lLlxuICAgICAqL1xuICAgIGlzVmFsdWVJbnZhbGlkOiBFbWJlci5jb21wdXRlZC5ub3QoJ2lzVmFsdWVWYWxpZCcpLFxuXG4gICAgLyoqXG4gICAgICogRG9lcyBhbGwgb2YgdGhlIHZhbGlkYXRpbmcgaW5wdXRzIGluIHRoaXMgY29udHJvbGxlcidzIHZpZXcgY29udGFpbiB2YWxpZCB2YWx1ZXM/XG4gICAgICovXG4gICAgaXNWYWx1ZVZhbGlkOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZCBpbnB1dCBmaWVsZHMgb2YgdGhpcyBjb250cm9sbGVyJ3MgdmlldyB0aGF0IHZhbGlkYXRlIHRoZSB2YWx1ZXMgdGhleSBjb250YWluLlxuICAgICAqL1xuICAgIHZhbGlkYXRpbmdJbnB1dHM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogQWRkcyAocmVnaXN0ZXJzKSBhIGRhdGEgaW5wdXQgZmllbGQgdGhhdCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIHRoZSBkYXRhIGl0IGNvbnRhaW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtWaW56LklucHV0VmFsaWRhdGlvbk1peGlufSB2YWxpZGF0aW5nSW5wdXQgIFJlcXVpcmVkIGlucHV0IGZpZWxkIHRoYXQgdmFsaWRhdGVzIGl0cyBjb250ZW50cy5cbiAgICAgKi9cbiAgICBhZGRWYWxpZGF0aW5nSW5wdXQ6IGZ1bmN0aW9uICh2YWxpZGF0aW5nSW5wdXQpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnZhbGlkYXRpbmdJbnB1dHMucHVzaCh2YWxpZGF0aW5nSW5wdXQpO1xuICAgICAgICB2YWxpZGF0aW5nSW5wdXQuZ2V0KCdjb250cm9sbGVyJykuYWRkT2JzZXJ2ZXIoJ2lzVmFsdWVWYWxpZCcsIHRoaXMsIHRoaXMub25WYWx1ZVZhbGlkaXR5Q2hhbmdlZCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdmFsdWUgd2l0aGluIGFuIGlucHV0IGJlY29tZXMgdmFsaWQgb3IgYmVjb21lcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIG9uVmFsdWVWYWxpZGl0eUNoYW5nZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlzVmFsdWVWYWxpZCA9IHRydWU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnZhbGlkYXRpbmdJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0aW5nSW5wdXRzW2ldLmdldCgnaXNWYWx1ZVZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbHVlVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldCgnaXNWYWx1ZVZhbGlkJywgaXNWYWx1ZVZhbGlkKTtcbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciwgRFMgKi9cblxucmVxdWlyZSgnLi9jb3JlTW9kZWwnKTtcbnJlcXVpcmUoJy4vYWNjZXNzQ29uZGl0aW9uVGl0bGVzJyk7XG5cblZpbnouQWNjZXNzQ29uZGl0aW9uTW9kZWwgPSBWaW56LmNvcmUuTW9kZWwuZXh0ZW5kKHtcblxuICAgICduYW1lJzogRFMuYXR0cignc3RyaW5nJyksXG5cbiAgICB0aXRsZTogRW1iZXIuY29tcHV0ZWQoJ2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiBWaW56LkFjY2Vzc0NvbmRpdGlvblRpdGxlc1t0aGlzLmdldCgnaWQnKV07XG4gICAgfSlcbn0pO1xuXG5cbiIsIi8qZ2xvYmFsIFZpbnogKi9cblxuVmluei5BY2Nlc3NDb25kaXRpb25UaXRsZXMgPSB7XG4gICAgTUVUQU1PUkVfQVNTRVRfUkVBRDogJ0Fzc2V0IC0gcmVhZCcsXG4gICAgTUVUQU1PUkVfQVNTRVRfTUFOQUdFOiAnQXNzZXQgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIE1FVEFNT1JFX0FTU0VUX0RJU1RSSUJVVEU6ICdBc3NldCAtIGRpc3RyaWJ1dGUnLFxuICAgIE1FVEFNT1JFX0FTU0VUX1RFTVBMQVRFX1JFQUQ6ICdBc3NldCBUZW1wbGF0ZSAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX0FTU0VUX1RFTVBMQVRFX01BTkFHRTogJ0Fzc2V0IFRlbXBsYXRlIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9DQ01TX1JFQUQ6ICdDQ01TIC0gcmVhZCcsXG4gICAgTUVUQU1PUkVfQ0NNU19NQU5BR0U6ICdDQ01TIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9JTkJPVU5EX05PVElGSUNBVElPTl9SRUFEOiAnSW5ib3VuZCBOb3RpZmljYXRpb24gLSByZWFkJyxcbiAgICBNRVRBTU9SRV9JTkJPVU5EX05PVElGSUNBVElPTl9NQU5BR0U6ICdJbmJvdW5kIE5vdGlmaWNhdGlvbiAtIGNyZWF0ZS9lZGl0L2RlbGV0ZScsXG4gICAgTUVUQU1PUkVfTElORUFSX0FTU0VUX1JFQUQ6ICdMaW5lYXIgQXNzZXQgLSByZWFkJyxcbiAgICBNRVRBTU9SRV9ORVRXT1JLX0ZFRURfUkVBRDogJ05ldHdvcmsgRmVlZCAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX05FVFdPUktfRkVFRF9NQU5BR0U6ICdOZXR3b3JrIEZlZWQgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIE1FVEFNT1JFX09VVEJPVU5EX05PVElGSUNBVElPTl9SRUFEOiAnT3V0Ym91bmQgTm90aWZpY2F0aW9ucyAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX09VVEJPVU5EX05PVElGSUNBVElPTl9NQU5BR0U6ICdPdXRib3VuZCBOb3RpZmljYXRpb25zIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9RVUVSWV9SRUFEOiAnUXVlcnkgLSByZWFkJyxcbiAgICBNRVRBTU9SRV9RVUVSWV9NQU5BR0U6ICdRdWVyeSAtIGNyZWF0ZS9lZGl0L2RlbGV0ZScsXG4gICAgTUVUQU1PUkVfUkVQT1JUX0JJTExJTkdfSUQ6ICdSZXBvcnQgLSBCaWxsaW5nIElEJyxcbiAgICBNRVRBTU9SRV9SRVBPUlRfRElTVFJJQlVUSU9OX0hJU1RPUlk6ICdSZXBvcnQgLSBEaXN0cmlidXRpb24gSGlzdG9yeScsXG4gICAgTUVUQU1PUkVfUkVQT1JUX0ZJTEVfTkFNRTogJ1JlcG9ydCAtIEZpbGUgTmFtZScsXG4gICAgTUVUQU1PUkVfUkVQT1JUX01PTlRITFlfQVNTRVRfQ09VTlQ6ICdSZXBvcnQgLSBNb250aGx5IEFzc2V0IENvdW50JyxcbiAgICBNRVRBTU9SRV9TRUFTT05fVEVNUExBVEVfUkVBRDogJ1NlYXNvbiBUZW1wbGF0ZSAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX1NFQVNPTl9URU1QTEFURV9NQU5BR0U6ICdTZWFzb24gVGVtcGxhdGUgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIE1FVEFNT1JFX1NUUkFUQV9SRUFEOiAnU3RyYXRhIC0gcmVhZCcsXG4gICAgTUVUQU1PUkVfU1RSQVRBX01BTkFHRTogJ1N0cmF0YSAtIGNyZWF0ZS9lZGl0L2RlbGV0ZScsXG4gICAgTUVUQU1PUkVfQ0lTX1JFQUQ6ICdDSVMgLSByZWFkJyxcbiAgICBNRVRBTU9SRV9DSVNfTUFOQUdFOiAnQ0lTIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9DVUVfUkVBRDogJ0NVRSAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX0NVRV9NQU5BR0U6ICdDVUUgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIE1FVEFNT1JFX0VNQUlMX1JFQUQ6ICdFbWFpbCAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX0VNQUlMX01BTkFHRTogJ0VtYWlsIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9FU0FNX1JFQUQ6ICdFU0FNIC0gcmVhZCcsXG4gICAgTUVUQU1PUkVfRVNBTV9NQU5BR0U6ICdFU0FNIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9JU0FfUkVBRDogJ0lTQSAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX0lTQV9NQU5BR0U6ICdJU0EgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIE1FVEFNT1JFX1NJR05BTF9SRUFEOiAnU2lnbmFsIC0gcmVhZCcsXG4gICAgTUVUQU1PUkVfU0lHTkFMX01BTkFHRTogJ1NpZ25hbCAtIGNyZWF0ZS9lZGl0L2RlbGV0ZScsXG4gICAgTUVUQU1PUkVfRURMX1JFQUQ6ICdFREwgLSByZWFkJyxcbiAgICBNRVRBTU9SRV9FRExfTUFOQUdFOiAnRURMIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBNRVRBTU9SRV9DVVJTT1JfUkVBRDogJ0N1cnNvciAtIHJlYWQnLFxuICAgIE1FVEFNT1JFX0NVUlNPUl9NQU5BR0U6ICdDdXJzb3IgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIE1FVEFNT1JFX1ZPRF9BU1NFVF9SRUFEOiAnVk9EIEFzc2V0IC0gcmVhZCcsXG4gICAgQUNTX0FDUVVJU0lUSU9OX1NZU1RFTV9QUk9GSUxFX1JFQUQ6ICdBY3F1aXNpdGlvbiBTeXN0ZW0gUHJvZmlsZSAtIHJlYWQnLFxuICAgIEFDU19EQVNIQk9BUkQ6ICdEZWNpc2lvbiAtIGRhc2hib2FyZCcsXG4gICAgQUNTX0RFQ0lTSU9OX05FVFdPUks6ICdEZWNpc2lvbiAtIG5ldHdvcmsnLFxuICAgIEFDU19ERUNJU0lPTl9TSUdOQUw6ICdEZWNpc2lvbiAtIHNpZ25hbCcsXG4gICAgQUNTX0VWRU5UX01BTkFHRTogJ0V2ZW50IC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfRVZFTlRfUkVBRDogJ0V2ZW50IC0gcmVhZCcsXG4gICAgQUNTX0VWRU5UX1RFTVBMQVRFX01BTkFHRTogJ0V2ZW50IFRlbXBsYXRlIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfRVZFTlRfVEVNUExBVEVfUkVBRDogJ0V2ZW50IFRlbXBsYXRlIC0gcmVhZCcsXG4gICAgQUNTX05FVFdPUktfUkVBRDogJ05ldHdvcmsgLSByZWFkJyxcbiAgICBBQ1NfTkVUV09SS19NQU5BR0U6ICdOZXR3b3JrIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfUFJPRklMRV9SRUFEOiAnUHJvZmlsZSAtIHJlYWQnLFxuICAgIEFDU19QUk9GSUxFX01BTkFHRTogJ1Byb2ZpbGUgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIEFDU19SRUdJT05fUkVBRDogJ1JlZ2lvbiAtIHJlYWQnLFxuICAgIEFDU19SRUdJT05fTUFOQUdFOiAnUmVnaW9uIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfUkVQT1JUX05FVFdPUks6ICdSZXBvcnQgLSBuZXR3b3JrJyxcbiAgICBBQ1NfUkVQT1JUX1NVTU1BUlk6ICdSZXBvcnQgLSBvcmdhbml6YXRpb24nLFxuICAgIEFDU19TQ0hFRFVMRV9NQU5BR0U6ICdTY2hlZHVsZSAtIGNyZWF0ZS9lZGl0L2RlbGV0ZScsXG4gICAgQUNTX1NDSEVEVUxFX1JFQUQ6ICdTY2hlZHVsZSAtIHJlYWQnLFxuICAgIEFDU19TT1VSQ0VfRkVFRF9SRUFEOiAnU291cmNlIEZlZWQgLSByZWFkJyxcbiAgICBBQ1NfU09VUkNFX0ZFRURfTUFOQUdFOiAnU291cmNlIEZlZWQgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIEFDU19TVEFUVVNfTkVUV09SSzogJ1N0YXR1cyAtIG5ldHdvcmsnLFxuICAgIEFDU19TVEFUVVNfU1VNTUFSWTogJ1N0YXR1cyAtIG9yZ2FuaXphdGlvbicsXG4gICAgQUNTX1pPTkVfUkVBRDogJ1pvbmUgLSByZWFkJyxcbiAgICBBQ1NfWk9ORV9NQU5BR0U6ICdab25lIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfR0xPQkFMX1JFR0lPTl9NQU5BR0U6ICdHbG9iYWwgUmVnaW9uIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfR0xPQkFMX1pPTkVfTUFOQUdFOiAnR2xvYmFsIFpvbmUgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIEFDU19ERVZJQ0VfUFJPRklMRV9SRUFEOiAnRGV2aWNlIFByb2ZpbGUgLSByZWFkJyxcbiAgICBBQ1NfREVWSUNFX1BST0ZJTEVfTUFOQUdFOiAnRGV2aWNlIFByb2ZpbGUgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIEFDU19HTE9CQUxfREVWSUNFX1BST0ZJTEVfTUFOQUdFOiAnR2xvYmFsIERldmljZSBQcm9maWxlIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBBQ1NfSU5CQU5EX1BST1RFQ1RJT05fRU5BQkxFOiAnSW4tYmFuZCBQcm90ZWN0aW9uIC0gZW5hYmxlJyxcbiAgICBBQ1NfRU1QX1JFR0lPTl9VSTogJ0VNUCBVSSAtIFNob3cgRU1QIFJlZ2lvbiBVSScsXG4gICAgQUNTX0VNUF9aT05FX1VJOiAnRU1QIFVJIC0gU2hvdyBFTVAgWm9uZSBVSScsXG4gICAgT1BMT0dfTE9HU19SRUFEOiAnT3BlcmF0aW9uYWwgTG9ncyAtIHJlYWQnLFxuICAgIE9QTE9HX0NPTkZJR19SRUFEOiAnQ29uZmlndXJhdGlvbiAtIHJlYWQnLFxuICAgIE9QTE9HX0NPTkZJR19NQU5BR0U6ICdDb25maWd1cmF0aW9uIC0gZWRpdCcsXG4gICAgVkVYX0xJTkVBUl9DSEFOTkVMX1JFQUQ6ICdMaW5lYXIgQ2hhbm5lbCAtIHJlYWQnLFxuICAgIFZFWF9MSU5FQVJfQ0hBTk5FTF9NQU5BR0U6ICdMaW5lYXIgQ2hhbm5lbCAtIGVkaXQnLFxuICAgIFZFWF9DT05GSUdfUkVBRDogJ1ZFWCBDb25maWd1cmF0aW9uIC0gcmVhZCcsXG4gICAgVkVYX0NPTkZJR19NQU5BR0U6ICdWRVggQ29uZmlndXJhdGlvbiAtIGVkaXQnLFxuICAgIFZFWF9WT0RfUkVBRDogJ1ZFWCBWT0QgQ29uZmlndXJhdGlvbiAtIHJlYWQnLFxuICAgIFZFWF9WT0RfTUFOQUdFOiAnVkVYIFZPRCBDb25maWd1cmF0aW9uIC0gZWRpdCcsXG4gICAgVkVYX0NEVlJfUkVBRDogJ1ZFWCBDRFZSIENvbmZpZ3VyYXRpb24gLSByZWFkJyxcbiAgICBWRVhfQ0RWUl9NQU5BR0U6ICdWRVggQ0RWUiBDb25maWd1cmF0aW9uIC0gZWRpdCcsXG4gICAgVkVYX09SSUdJTl9TRVJWRVJfUkVBRDogJ1ZFWCBPcmlnaW4gU2VydmVyIC0gcmVhZCcsXG4gICAgVkVYX09SSUdJTl9TRVJWRVJfTUFOQUdFOiAnVkVYIE9yaWdpbiBTZXJ2ZXIgLSBlZGl0JyxcbiAgICBWRVhfT1JJR0lOX1NUQVRVU19SRUFEOiAnVkVYIE9yaWdpbiBTdGF0dXMgLSByZWFkJyxcbiAgICBWRVhfUkVQT1JUX0NMSUVOVF9WSUVXOiAnQ2xpZW50IFZpZXcgLSByZXBvcnQnLFxuICAgIFNQT1RCVUlMREVSX0FEX1VOSVRfUkVBRDogJ0FkIFVuaXQgLSByZWFkJyxcbiAgICBTUE9UQlVJTERFUl9BRF9VTklUX01BTkFHRTogJ0FkIFVuaXQg4oCTIGNyZWF0ZS91cGRhdGUvZGVsZXRlJyxcbiAgICBTUE9UQlVJTERFUl9BRF9NQVBfUkVBRDogJ0FkIE1hcCAtIHJlYWQnLFxuICAgIFNQT1RCVUlMREVSX0FEX01BUF9NQU5BR0U6ICdBZCBNYXAg4oCTIGNyZWF0ZS91cGRhdGUvZGVsZXRlJyxcbiAgICBTUE9UQlVJTERFUl9DSVNfQ09ORklHX1JFQUQ6ICdDSVMgQ29uZmlndXJhdGlvbiAtIHJlYWQnLFxuICAgIFNQT1RCVUlMREVSX0NJU19DT05GSUdfTUFOQUdFOiAnQ0lTIENvbmZpZ3VyYXRpb24g4oCTIGNyZWF0ZS91cGRhdGUvZGVsZXRlJyxcbiAgICBTUE9UQlVJTERFUl9DT05URU5UX0ZJTFRFUl9SRUFEOiAnQ29udGVudCBGaWx0ZXIgLSByZWFkJyxcbiAgICBTUE9UQlVJTERFUl9DT05URU5UX0ZJTFRFUl9NQU5BR0U6ICdDb250ZW50IEZpbHRlciDigJMgY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIFNQT1RCVUlMREVSX0RFQ0lTSU9OX09XTkVSX1JFQUQ6ICdEZWNpc2lvbiBPd25lciDigJMgcmVhZCcsICAvLyBAc2VlIFNQT1RMSU5LX0RFQ0lTSU9OX09XTkVSX1JFQURcbiAgICBTUE9UQlVJTERFUl9ERUNJU0lPTl9PV05FUl9NQU5BR0U6ICdEZWNpc2lvbiBPd25lciDigJMgY3JlYXRlL3VwZGF0ZS9kZWxldGUnLCAvLyBAc2VlIFNQT1RMSU5LX0RFQ0lTSU9OX0RFQ0lTSU9OX09XTkVSX01BTkFHRVxuICAgIFNQT1RCVUlMREVSX05PVElGSUNBVElPTl9SRUdJU1RSQVRJT05fUkVBRDogJ05vdGlmaWNhdGlvbiBSZWdpc3RyYXRpb25zIOKAkyByZWFkJyxcbiAgICBTUE9UQlVJTERFUl9PUFBPUlRVTklUWV9SRUFEOiAnT3Bwb3J0dW5pdHkgLSByZWFkJyxcbiAgICBTUE9UQlVJTERFUl9PUFBPUlRVTklUWV9URU1QTEFURV9SRUFEOiAnT3Bwb3J0dW5pdHkgVGVtcGxhdGUgLSByZWFkJyxcbiAgICBTUE9UQlVJTERFUl9PUFBPUlRVTklUWV9URU1QTEFURV9NQU5BR0U6ICdPcHBvcnR1bml0eSBUZW1wbGF0ZSDigJMgY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIFNQT1RCVUlMREVSX09QUE9SVFVOSVRZX1RFTVBMQVRFX1BVQkxJU0g6ICdPcHBvcnR1bml0eSBUZW1wbGF0ZSDigJMgcHVibGlzaCcsXG4gICAgU1BPVEJVSUxERVJfT1BQT1JUVU5JVFlfVEVNUExBVEVfVU5QVUJMSVNIOiAnT3Bwb3J0dW5pdHkgVGVtcGxhdGUg4oCTIHVucHVibGlzaCcsXG4gICAgU1BPVEJVSUxERVJfUE9JUzogJ1BPSVMgT3BlcmF0aW9ucycsXG4gICAgU1BPVExJTktfREFTSEJPQVJEOiAnRGFzaGJvYXJkIC0gdmlldycsXG4gICAgU1BPVExJTktfUE9MSUNZX1ZJRVc6ICdQb2xpY3kgLSB2aWV3JyxcbiAgICBTUE9UTElOS19QT0xJQ1lfTUFOQUdFUjogJ1BvbGljeSAtIG1hbmFnZScsXG4gICAgU1BPVExJTktfQ0lTX0NPTkZJR19SRUFEOiAnQ0lTIENvbmZpZ3VyYXRpb24gLSByZWFkJyxcbiAgICBTUE9UTElOS19DSVNfQ09ORklHX01BTkFHRTogJ0NJUyBDb25maWd1cmF0aW9uIC0gY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIFNQT1RMSU5LX0RZTkFNSUNfU0NIRURVTEVSX1JFQUQ6ICdEeW5hbWljU2NoZWR1bGVyIC0gcmVhZCcsXG4gICAgU1BPVExJTktfRFlOQU1JQ19TQ0hFRFVMRVJfTUFOQUdFOiAnRHluYW1pY1NjaGVkdWxlciAtIG1hbmFnZScsXG4gICAgU1BPVExJTktfREVDSVNJT05fT1dORVJfUkVBRDogJ0RlY2lzaW9uIE93bmVyIOKAkyByZWFkJyxcbiAgICBTUE9UTElOS19ERUNJU0lPTl9PV05FUl9NQU5BR0U6ICdEZWNpc2lvbiBPd25lciDigJMgY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIFNQT1RMSU5LX0ZBTExCQUNLX1BPT0xfUkVBRDogJ0ZhbGxiYWNrIFBvb2wgLSByZWFkJyxcbiAgICBTUE9UTElOS19GQUxMQkFDS19QT09MX01BTkFHRTogJ0ZhbGxiYWNrIFBvb2wgLSBtYW5hZ2UnLFxuICAgIFZJTlpfQVVUSE9SSVpBVElPTl9NQU5BR0U6ICdBdXRob3JpemF0aW9ucyAtIGNyZWF0ZS91cGRhdGUvZGVsZXRlJyxcbiAgICBWSU5aX0lERU5USVRZX01BTkFHRTogJ0lkZW50aXRpZXMgLSBjcmVhdGUvdXBkYXRlL2RlbGV0ZScsXG4gICAgVklOWl9PUkdBTklaQVRJT05fTUFOQUdFOiAnT3JnYW5pemF0aW9ucyAtIGNyZWF0ZS91cGRhdGUvZGVsZXRlJyxcbiAgICBWSU5aX0dMT0JBTF9JREVOVElUWV9NQU5BR0U6ICdHbG9iYWwgSWRlbnRpdGllcyAtIGNyZWF0ZS91cGRhdGUvZGVsZXRlJyxcbiAgICBWSU5aX0dMT0JBTF9JREVOVElUWV9SRUFEOiAnR2xvYmFsIElkZW50aXRpZXMgLSByZWFkJyxcbiAgICBWSU5aX0dMT0JBTF9PUkdBTklaQVRJT05fUkVBRDogJ0dsb2JhbCBPcmdhbml6YXRpb25zIC0gcmVhZCcsXG4gICAgVklOWl9HTE9CQUxfT1JHQU5JWkFUSU9OX01BTkFHRTogJ0dsb2JhbCBPcmdhbml6YXRpb25zIC0gY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIFZJTlpfTElDRU5TRUtFWV9SRUFEOiAnTGljZW5zZUtleSAtIHJlYWQnLFxuICAgIFZJTlpfTElDRU5TRUtFWV9NQU5BR0U6ICdMaWNlbnNlS2V5IC0gY3JlYXRlL2RlbGV0ZS92ZXJpZnknLFxuICAgIFZJTlpfTU9EVUxFX1ZFUlNJT05fTUFOQUdFOiAnTW9kdWxlIFZlcnNpb25zIC0gY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIEtFWUdFTl9NQU5BR0U6ICdLZXlHZW5lcmF0b3IgLSBjcmVhdGUvdXBkYXRlL2RlbGV0ZScsXG4gICAgS0VZR0VOX0ZFQVRVUkVfUkVBRDogJ0ZlYXR1cmVzIC0gcmVhZCcsXG4gICAgS0VZR0VOX0ZFQVRVUkVfTUFOQUdFOiAnRmVhdHVyZXMgLSBjcmVhdGUvdXBkYXRlL2RlbGV0ZScsXG4gICAgS0VZR0VOX1BST0RVQ1RfUkVBRDogJ1Byb2R1Y3RzIC0gcmVhZCcsXG4gICAgS0VZR0VOX1BST0RVQ1RfTUFOQUdFOiAnUHJvZHVjdHMgLSBjcmVhdGUvdXBkYXRlL2RlbGV0ZScsXG4gICAgS0VZR0VOX01PRFVMRV9WRVJTSU9OX1JFQUQ6ICdNb2R1bGUgVmVyc2lvbnMgLSByZWFkJyxcbiAgICBLRVlHRU5fTU9EVUxFX1ZFUlNJT05fTUFOQUdFOiAnTW9kdWxlIFZlcnNpb25zIC0gY3JlYXRlL3VwZGF0ZS9kZWxldGUnLFxuICAgIEVTUF9DT05GSUdfUkVBRDogJ0VTUCBDb25maWd1cmF0aW9uIC0gcmVhZCcsXG4gICAgRVNQX0NPTkZJR19NQU5BR0U6ICdFU1AgQ29uZmlndXJhdGlvbiAtIG1hbmFnZScsXG4gICAgRVNQX1RSQU5TRk9STV9SRUFEOiAnRVNQIFRyYW5zZm9ybSAtIHJlYWQnLFxuICAgIEVTUF9UUkFOU0ZPUk1fTUFOQUdFOiAnRVNQIFRyYW5zZm9ybSAtIG1hbmFnZScsXG4gICAgRU1QX0RBVEFfTUFOQUdFOiAnRGF0YSBJbmdlc3QnLFxuICAgIEVNUF9MQVlFUl9SRUFEOiAnTGF5ZXIgLSByZWFkJyxcbiAgICBFTVBfTEFZRVJfTUFOQUdFOiAnTGF5ZXIgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIEVNUF9SRUdJT05fUkVBRDogJ1JlZ2lvbiAtIHJlYWQnLFxuICAgIEVNUF9SRUdJT05fTUFOQUdFOiAnUmVnaW9uIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBFTVBfU0hBUEVfUkVBRDogJ1NoYXBlIC0gcmVhZCcsXG4gICAgRU1QX1NIQVBFX01BTkFHRTogJ1NoYXBlIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBFTVBfWk9ORV9SRUFEOiAnWm9uZSAtIHJlYWQnLFxuICAgIEVNUF9aT05FX01BTkFHRTogJ1pvbmUgLSBjcmVhdGUvZWRpdC9kZWxldGUnLFxuICAgIEVNUF9HTE9CQUxfTEFZRVJfTUFOQUdFOiAnR2xvYmFsIExheWVyIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBFTVBfR0xPQkFMX1JFR0lPTl9NQU5BR0U6ICdHbG9iYWwgUmVnaW9uIC0gY3JlYXRlL2VkaXQvZGVsZXRlJyxcbiAgICBFTVBfR0xPQkFMX1NIQVBFX01BTkFHRTogJ0dsb2JhbCBTaGFwZSAtIGNyZWF0ZS9lZGl0L2RlbGV0ZScsXG4gICAgRU1QX0dMT0JBTF9aT05FX01BTkFHRTogJ0dsb2JhbCBab25lIC0gY3JlYXRlL2VkaXQvZGVsZXRlJ1xufTtcbiIsIi8qZ2xvYmFscyBWaW56LCBEUywgRW1iZXIgKi9cblxucmVxdWlyZSgnLi9jb3JlTW9kZWwnKTtcblxuVmluei5BdXRob3JpemF0aW9uTW9kZWwgPSBWaW56LmNvcmUuTW9kZWwuZXh0ZW5kKHtcbiAgICBhY2Nlc3NDb25kaXRpb25zOiBEUy5hdHRyKCdhcnJheScpLFxuICAgIG5hbWU6IERTLmF0dHIoKSxcbiAgICBzeXN0ZW1NYW5hZ2VkOiBEUy5hdHRyKCksXG4gICAgaWNvbjogRW1iZXIuY29tcHV0ZWQoJ3N5c3RlbU1hbmFnZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmdldCgnc3lzdGVtTWFuYWdlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnZmEgZmEtbG9jayBkaXNhYmxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRFMsIEVtYmVyICovXG5cblZpbnouY29yZS5Nb2RlbCA9IERTLk1vZGVsLmV4dGVuZCh7XG5cbiAgICAvL2ZvcmNlIHNlcmlhbGl6ZXIgdG8gaW5jbHVkZSBpZCBwcm9wZXJ0eVxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8vIGNvbnRhaW5lciBpcyBmb3IgbGF6eSB0cmFuc2Zvcm0gbG9va3Vwc1xuICAgICAgICB2YXIgc2VyaWFsaXplciA9IERTLkpTT05TZXJpYWxpemVyLmNyZWF0ZSh7IGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIgfSk7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVyLnNlcmlhbGl6ZSh0aGlzLCB7IGluY2x1ZGVJZDogdHJ1ZSB9KTtcbiAgICB9LFxuXG4gICAgLy8gdXNlZCBieSBicy1saXN0LWdyb3VwXG4gICAgdGl0bGU6IEVtYmVyLmNvbXB1dGVkKCduYW1lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbmFtZScpO1xuICAgIH0pXG59KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBEUywgRW1iZXIgKi9cblxuVmluei5JZGVudGl0eU1vZGVsID0gRFMuTW9kZWwuZXh0ZW5kKHtcbiAgICBhcGlLZXk6IERTLmF0dHIoKSxcbiAgICBhdXRob3JpemF0aW9uczogRFMuaGFzTWFueSgnYXV0aG9yaXphdGlvbicpLFxuICAgIGNsaWVudElkOiBEUy5hdHRyKCksXG4gICAgY2xpZW50U2VjcmV0OiBEUy5hdHRyKCksXG4gICAgbmFtZTogRFMuYXR0cigpLFxuICAgIG9yZ2FuaXphdGlvbnM6IERTLmhhc01hbnkoJ29yZ2FuaXphdGlvbicpLFxuICAgIHRpbWV6b25lOiBEUy5hdHRyKCksXG5cbiAgICBhY2Nlc3NDb25kaXRpb25zOiBFbWJlci5jb21wdXRlZCgnYXV0aG9yaXphdGlvbnMuQGVhY2gnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgYWNjZXNzQ29uZGl0aW9ucyA9IEVtYmVyLkEoW10pO1xuICAgICAgICB0aGlzLmdldCgnYXV0aG9yaXphdGlvbnMnKS5mb3JFYWNoKGZ1bmN0aW9uIChhdXRoKSB7XG4gICAgICAgICAgICBhY2Nlc3NDb25kaXRpb25zLnB1c2hPYmplY3RzKGF1dGguZ2V0KCdhY2Nlc3NDb25kaXRpb25zJykgfHwgW10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc0NvbmRpdGlvbnM7XG4gICAgfSksXG5cbiAgICBoYXNBY2Nlc3NDb25kaXRpb246IGZ1bmN0aW9uKGFjY2Vzc0NvbmRpdGlvbikge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnYWNjZXNzQ29uZGl0aW9ucycpLmluZGV4T2YoYWNjZXNzQ29uZGl0aW9uKSAhPT0gLTE7XG4gICAgfSxcblxuICAgIHN1YjogRW1iZXIuY29tcHV0ZWQoJ2NsaWVudElkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjbGllbnRJZCcpO1xuICAgIH0pXG59KTtcbiIsInJlcXVpcmUoJy4vYWNjZXNzQ29uZGl0aW9uTW9kZWwuanMnKTtcbnJlcXVpcmUoJy4vYWNjZXNzQ29uZGl0aW9uVGl0bGVzLmpzJyk7XG5yZXF1aXJlKCcuL2F1dGhvcml6YXRpb25Nb2RlbC5qcycpO1xucmVxdWlyZSgnLi9jb3JlTW9kZWwuanMnKTtcbnJlcXVpcmUoJy4vaWRlbnRpdHlNb2RlbC5qcycpO1xucmVxdWlyZSgnLi9vcmdhbml6YXRpb24uanMnKTtcbnJlcXVpcmUoJy4vcGFnZS5qcycpO1xucmVxdWlyZSgnLi9wcm9kdWN0TGlua01vZGVsLmpzJyk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRFMsIHJlcXVpcmUqL1xuXG5yZXF1aXJlKCcuL2NvcmVNb2RlbC5qcycpO1xuXG5WaW56Lk9yZ2FuaXphdGlvbk1vZGVsID0gVmluei5jb3JlLk1vZGVsLmV4dGVuZCh7XG4gICAgYWRkcmVzczogRFMuYXR0cigpLFxuICAgIGFzc2V0SWRQcmVmaXg6IERTLmF0dHIoKSxcbiAgICBjb250YWN0RW1haWw6IERTLmF0dHIoKSxcbiAgICBjb250YWN0TmFtZTogRFMuYXR0cigpLFxuICAgIGNvbnRhY3RQaG9uZTogRFMuYXR0cigpLFxuICAgIGRtcklkOiBEUy5hdHRyKCksXG4gICAgbmFtZTogRFMuYXR0cigpLFxuICAgIHR5cGU6IERTLmF0dHIoKVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRFMsIEVtYmVyKi9cblxuVmluei5QYWdlTW9kZWwgPSBFbWJlci5PYmplY3QuZXh0ZW5kKHtcbiAgICBwYWdlSW5kZXg6IDAsXG4gICAgcGFnZVNpemU6IDIwLFxuICAgIHRvdGFsRWxlbWVudHM6IDAsXG4gICAgdG90YWxQYWdlczogMCxcbiAgICBpc0ZpcnN0UGFnZTogZmFsc2UsXG4gICAgaXNMYXN0UGFnZTogZmFsc2UsXG4gICAgaGFzTmV4dFBhZ2U6IGZhbHNlLFxuICAgIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsXG5cbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIEZJUlNUOiAwLFxuICAgIFBSRVY6IDAsXG4gICAgUEFHRTE6IDAsXG4gICAgUEFHRTI6IDEsXG4gICAgUEFHRTM6IDIsXG4gICAgUEFHRTQ6IDMsXG4gICAgUEFHRTU6IDQsXG4gICAgTkVYVDogMSxcbiAgICBMQVNUOiA0LFxuXG4gICAgRklSU1RfVmlzaWJsZTogdHJ1ZSxcbiAgICBQUkVWX1Zpc2libGU6IHRydWUsXG4gICAgUEFHRTFfVmlzaWJsZTogdHJ1ZSxcbiAgICBQQUdFMl9WaXNpYmxlOiB0cnVlLFxuICAgIFBBR0UzX1Zpc2libGU6IHRydWUsXG4gICAgUEFHRTRfVmlzaWJsZTogdHJ1ZSxcbiAgICBQQUdFNV9WaXNpYmxlOiB0cnVlLFxuICAgIE5FWFRfVmlzaWJsZTogdHJ1ZSxcbiAgICBMQVNUX1Zpc2libGU6IHRydWUsXG5cbiAgICBQQUdFMV9BY3RpdmU6IEVtYmVyLmNvbXB1dGVkKCdQQUdFMScsICdwYWdlSW5kZXgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuUEFHRTEgPT09IHRoaXMucGFnZUluZGV4O1xuICAgIH0pLFxuICAgIFBBR0UyX0FjdGl2ZTogRW1iZXIuY29tcHV0ZWQoJ1BBR0UyJywgJ3BhZ2VJbmRleCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5QQUdFMiA9PT0gdGhpcy5wYWdlSW5kZXg7XG4gICAgfSksXG4gICAgUEFHRTNfQWN0aXZlOiBFbWJlci5jb21wdXRlZCgnUEFHRTMnLCAncGFnZUluZGV4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLlBBR0UzID09PSB0aGlzLnBhZ2VJbmRleDtcbiAgICB9KSxcbiAgICBQQUdFNF9BY3RpdmU6IEVtYmVyLmNvbXB1dGVkKCdQQUdFNCcsICdwYWdlSW5kZXgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuUEFHRTQgPT09IHRoaXMucGFnZUluZGV4O1xuICAgIH0pLFxuICAgIFBBR0U1X0FjdGl2ZTogRW1iZXIuY29tcHV0ZWQoJ1BBR0U1JywgJ3BhZ2VJbmRleCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5QQUdFNSA9PT0gdGhpcy5wYWdlSW5kZXg7XG4gICAgfSksXG5cbiAgICBjb3B5UHJvcGVydGllczogZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IGVudHJpZXMucGFnZUluZGV4O1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gZW50cmllcy5wYWdlU2l6ZTtcbiAgICAgICAgdGhpcy50b3RhbEVsZW1lbnRzID0gZW50cmllcy50b3RhbEVsZW1lbnRzO1xuICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSBlbnRyaWVzLnRvdGFsUGFnZXM7XG4gICAgICAgIHRoaXMuaXNGaXJzdFBhZ2UgPSBlbnRyaWVzLmlzRmlyc3RQYWdlO1xuICAgICAgICB0aGlzLmlzTGFzdFBhZ2UgPSBlbnRyaWVzLmlzTGFzdFBhZ2U7XG4gICAgICAgIHRoaXMuaGFzTmV4dFBhZ2UgPSBlbnRyaWVzLmhhc05leHRQYWdlO1xuICAgICAgICB0aGlzLmhhc1ByZXZpb3VzUGFnZSA9IGVudHJpZXMuaGFzUHJldmlvdXNQYWdlO1xuICAgIH0sXG5cbiAgICBjYWxjdWxhdGU6IGZ1bmN0aW9uICh0b3RhbEVsZW1lbnRzKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy50b3RhbEVsZW1lbnRzID0gdG90YWxFbGVtZW50cztcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsRWxlbWVudHMgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICAgICAgdGhpcy5pc0ZpcnN0UGFnZSA9ICh0aGlzLnBhZ2VJbmRleCA9PT0gMCk7XG4gICAgICAgIHRoaXMuaXNMYXN0UGFnZSA9ICh0aGlzLnBhZ2VJbmRleCA9PT0gKHRoaXMudG90YWxQYWdlcyAtIDEpKTtcbiAgICAgICAgdGhpcy5oYXNOZXh0UGFnZSA9ICF0aGlzLmlzTGFzdFBhZ2U7XG4gICAgICAgIHRoaXMuaGFzUHJldmlvdXNQYWdlID0gIXRoaXMuaXNGaXJzdFBhZ2U7XG4gICAgfVxuXG59KTtcblxuXG4iLCIvKmdsb2JhbHMgVmlueiwgRFMgKi9cblxucmVxdWlyZSgnLi9jb3JlTW9kZWwuanMnKTtcblxuVmluei5Qcm9kdWN0TGlua01vZGVsID0gVmluei5jb3JlLk1vZGVsLmV4dGVuZCh7XG4gICAgY29sb3I6IERTLmF0dHIoJ3N0cmluZycpLFxuICAgIGRlc2NyaXB0aW9uOiBEUy5hdHRyKCdzdHJpbmcnKSxcbiAgICBocmVmOiBEUy5hdHRyKCdzdHJpbmcnKSxcbiAgICBwcm9kdWN0TmFtZTogRFMuYXR0cignc3RyaW5nJyksXG4gICAgc2VwYXJhdG9yQmVmb3JlOiBEUy5hdHRyKCdib29sZWFuJyksXG4gICAgdGV4dDogRFMuYXR0cignc3RyaW5nJylcbn0pO1xuIiwiLypnbG9iYWwgVmlueiwgRW1iZXIsIFNpbXBsZUF1dGggKi9cblxuVmluei5BcHBsaWNhdGlvblJvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKFNpbXBsZUF1dGguQXBwbGljYXRpb25Sb3V0ZU1peGluKTtcbiIsIi8qZ2xvYmFsIFZpbnosIEVtYmVyLCBTaW1wbGVBdXRoICovXG5cblZpbnouQXV0aGVudGljYXRlZFJvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKFNpbXBsZUF1dGguQXV0aGVudGljYXRlZFJvdXRlTWl4aW4sIHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGF1dGhlbnRpY2F0ZVNlc3Npb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblRvKHRoaXMuZ2V0KCdlbnYuYXBwLmF1dGhlbnRpY2F0aW9uUm91dGUnKSB8fCAnbG9naW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyKi9cblxuVmluei5BdXRob3JpemF0aW9uQ3JlYXRlUm91dGUgPSBWaW56LkF1dGhlbnRpY2F0ZWRSb3V0ZS5leHRlbmQoe1xuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgd2lsbFRyYW5zaXRpb246IGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmNvbnRyb2xsZXIuY29udGVudDtcbiAgICAgICAgICAgIGlmIChtb2RlbCAmJiBtb2RlbC5nZXQoJ2lzRGlydHknKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zaG93VHJhbnNpdGlvbk1vZGFsKHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBCdWJibGUgdGhlIGB3aWxsVHJhbnNpdGlvbmAgZXZlbnQgc28gdGhhdCBwYXJlbnQgcm91dGVzIGNhbiBkZWNpZGUgd2hldGhlciBvciBub3QgdG8gYWJvcnQuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldCgnaXNFZGl0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1vZGVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHJlY29yZCA9ICB0aGlzLnN0b3JlLmNyZWF0ZVJlY29yZCgnYXV0aG9yaXphdGlvbicpO1xuICAgICAgICByZWNvcmQuc2V0KCdhY2Nlc3NDb25kaXRpb25zJywgW10pO1xuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH0sXG5cbiAgICByZW5kZXJUZW1wbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHRoaXMucmVuZGVyKCdhdXRob3JpemF0aW9uRWRpdCcsIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdhdXRob3JpemF0aW9uQ3JlYXRlJ1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2V0dXBDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlciwgbW9kZWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnbW9kZWwnLCBtb2RlbCk7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0KCdtZXNzYWdlcycsIG51bGwpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0KCdpc0VkaXRpbmcnLCB0cnVlKTtcbiAgICB9XG59KTtcblxuVmluei5BdXRob3JpemF0aW9uRWRpdFJvdXRlID0gVmluei5BdXRoZW50aWNhdGVkUm91dGUuZXh0ZW5kKHtcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgd2lsbFRyYW5zaXRpb246IGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmNvbnRyb2xsZXIuY29udGVudDtcbiAgICAgICAgICAgIGlmIChtb2RlbCAmJiBtb2RlbC5nZXQoJ2lzRGlydHknKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zaG93VHJhbnNpdGlvbk1vZGFsKHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBCdWJibGUgdGhlIGB3aWxsVHJhbnNpdGlvbmAgZXZlbnQgc28gdGhhdCBwYXJlbnQgcm91dGVzIGNhbiBkZWNpZGUgd2hldGhlciBvciBub3QgdG8gYWJvcnQuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldCgnaXNFZGl0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1vZGVsOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZmluZCgnYXV0aG9yaXphdGlvbicsIHBhcmFtcy5hdXRob3JpemF0aW9uX2lkKTtcbiAgICB9LFxuXG4gICAgc2V0dXBDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlciwgbW9kZWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnbW9kZWwnLCBtb2RlbCk7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0KCdtZXNzYWdlcycsIG51bGwpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0KCdpc0VkaXRpbmcnLCB0cnVlKTtcbiAgICB9XG59KTtcblxuVmluei5BdXRob3JpemF0aW9uUm91dGUgPSBWaW56LkF1dGhlbnRpY2F0ZWRSb3V0ZS5leHRlbmQoe1xuICAgIHNldHVwQ29udHJvbGxlcjogZnVuY3Rpb24gKGNvbnRyb2xsZXIsIG1vZGVsKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ21vZGVsJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgncXVlcnknLCBudWxsKTtcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ3NlbGVjdGVkSXRlbScsIG51bGwpO1xuICAgIH1cbn0pO1xuXG5WaW56LkF1dGhvcml6YXRpb25TaG93Um91dGUgPSBWaW56LkF1dGhlbnRpY2F0ZWRSb3V0ZS5leHRlbmQoe1xuICAgIG1vZGVsOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZmluZCgnYXV0aG9yaXphdGlvbicsIHBhcmFtcy5hdXRob3JpemF0aW9uX2lkKTtcbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciovXG5cblZpbnouSWRlbnRpdHlSb3V0ZSA9IEVtYmVyLlJvdXRlLmV4dGVuZCh7XG5cbiAgICBzZXR1cENvbnRyb2xsZXI6IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ3F1ZXJ5JywgbnVsbCk7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0KCdzZWxlY3RlZEl0ZW0nLCBudWxsKTtcbiAgICB9XG59KTtcblxuVmluei5JZGVudGl0eUNyZWF0ZVJvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKHtcblxuICAgIGFjdGlvbnM6IHtcblxuICAgICAgICB3aWxsVHJhbnNpdGlvbjogZnVuY3Rpb24gKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IHRoaXMuY29udHJvbGxlci5jb250ZW50O1xuICAgICAgICAgICAgaWYgKG1vZGVsICYmIG1vZGVsLmdldCgnaXNEaXJ0eScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNob3dUcmFuc2l0aW9uTW9kYWwodHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgVmluei5Mb2dnZXIuZGVidWcoJ0FGVEVSIE1PREFMJywgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEJ1YmJsZSB0aGUgYHdpbGxUcmFuc2l0aW9uYCBldmVudCBzbyB0aGF0IHBhcmVudCByb3V0ZXMgY2FuIGRlY2lkZSB3aGV0aGVyIG9yIG5vdCB0byBhYm9ydC5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0KCdpc0VkaXRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAvLyB0aGUgbW9kZWwgZm9yIHRoaXMgcm91dGUgaXMgYSBuZXcgZW1wdHkgRW1iZXIuT2JqZWN0XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmNyZWF0ZVJlY29yZCgnaWRlbnRpdHknKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyVGVtcGxhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnJlbmRlcignaWRlbnRpdHlFZGl0Jywge1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ2lkZW50aXR5Q3JlYXRlJ1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2V0dXBDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlciwgbW9kZWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnbWVzc2FnZXMnLCBudWxsKTtcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ21vZGVsJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnb3JnYW5pemF0aW9uc1F1ZXJ5JywgJycpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnYXV0aG9yaXphdGlvbnNRdWVyeScsICcnKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldCgnaXNFZGl0aW5nJywgdHJ1ZSk7XG4gICAgfVxufSk7XG5cblZpbnouSWRlbnRpdHlTaG93Um91dGUgPSBFbWJlci5Sb3V0ZS5leHRlbmQoe1xuXG4gICAgbW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5maW5kKCdpZGVudGl0eScsIHBhcmFtcy5pZGVudGl0eV9pZCk7XG4gICAgfVxufSk7XG4iLCJyZXF1aXJlKCcuL2FwcGxpY2F0aW9uUm91dGUuanMnKTtcbnJlcXVpcmUoJy4vYXV0aGVudGljYXRlZFJvdXRlLmpzJyk7XG5yZXF1aXJlKCcuL2F1dGhvcml6YXRpb25Sb3V0ZXMuanMnKTtcbnJlcXVpcmUoJy4vaWRlbnRpdHlSb3V0ZXMuanMnKTtcbnJlcXVpcmUoJy4vaW5kZXhSb3V0ZS5qcycpO1xucmVxdWlyZSgnLi9saWNlbnNlUm91dGVzLmpzJyk7XG5yZXF1aXJlKCcuL2xvZ2luUm91dGUuanMnKTtcbnJlcXVpcmUoJy4vbG9nb3V0Um91dGUuanMnKTtcbnJlcXVpcmUoJy4vbWFwUm91dGVzLmpzJyk7XG5yZXF1aXJlKCcuL29yZ2FuaXphdGlvblJvdXRlcy5qcycpO1xucmVxdWlyZSgnLi9wcm9maWxlUm91dGVzLmpzJyk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG5WaW56LkluZGV4Um91dGUgPSBWaW56LkF1dGhlbnRpY2F0ZWRSb3V0ZS5leHRlbmQoe1xuICAgcm91dGVBZnRlckF1dGhlbnRpY2F0aW9uOiBFbWJlci5jb21wdXRlZC5hbGlhcygnZW52LmFwcC5yb3V0ZUFmdGVyQXV0aGVudGljYXRpb24nKSxcblxuICAgYWZ0ZXJNb2RlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICB0aGlzLnRyYW5zaXRpb25Ubyh0aGlzLmdldCgncm91dGVBZnRlckF1dGhlbnRpY2F0aW9uJykpO1xuICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIqL1xuXG5WaW56LkxpY2Vuc2VSb3V0ZSA9IEVtYmVyLlJvdXRlLmV4dGVuZCh7XG5cbn0pO1xuXG5WaW56LkxpY2Vuc2VTaG93Um91dGUgPSBFbWJlci5Sb3V0ZS5leHRlbmQoe1xuICAgIG1vZGVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuZ2V0KCdlbnYudmluelByb3h5QWRkcmVzcycpICsgJy9saWNlbnNlL3NpdGVuYW1lJyxcbiAgICAgICAgICAgIHByb21pc2UgPSBFbWJlci4kLmFqYXgoe3VybDogdXJsLCBkYXRhVHlwZTogJ3RleHQnIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9LFxuXG4gICAgc2V0dXBDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlciwgbW9kZWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAvL2NvbnRyb2xsZXIuc2V0KCdtb2RlbCcsIG1vZGVsKTtcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ3NpdGVOYW1lJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzaXRlTmFtZScpO1xuICAgIH1cbn0pO1xuXG5cblZpbnouTGljZW5zZUluc3RhbGxSb3V0ZSA9IEVtYmVyLlJvdXRlLmV4dGVuZCh7XG4gICAgbW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXQoJ2Vudi52aW56UHJveHlBZGRyZXNzJykgKyAnL2xpY2Vuc2Uvc2l0ZW5hbWUnLFxuICAgICAgICAgICAgcHJvbWlzZSA9IEVtYmVyLiQuYWpheCh7dXJsOiB1cmwsIGRhdGFUeXBlOiAndGV4dCcgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG5cbiAgICBzZXR1cENvbnRyb2xsZXI6IGZ1bmN0aW9uIChjb250cm9sbGVyLCBtb2RlbCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8vY29udHJvbGxlci5zZXQoJ21vZGVsJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnc2l0ZU5hbWUnLCBtb2RlbCk7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0KCdtZXNzYWdlJywgbnVsbCk7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0KCdsaWNlbnNlS2V5JywgbnVsbCk7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIsIFNpbXBsZUF1dGgqL1xuXG5WaW56LkxvZ2luUm91dGUgPSBFbWJlci5Sb3V0ZS5leHRlbmQoU2ltcGxlQXV0aC5VbmF1dGhlbnRpY2F0ZWRSb3V0ZU1peGluLHt9KTtcbiIsIi8qZ2xvYmFsIFZpbnosIEVtYmVyKi9cblxuVmluei5Mb2dvdXRSb3V0ZSA9IFZpbnouQXV0aGVudGljYXRlZFJvdXRlLmV4dGVuZCh7XG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBFbWJlci4kLnJlbW92ZUNvb2tpZSgnYXV0aFRva2VuJywge3BhdGg6ICcvJ30pO1xuICAgICAgICBFbWJlci4kLnJlbW92ZUNvb2tpZSgnYXV0aFRva2VuJyk7XG4gICAgICAgIHRoaXMuZ2V0KCdzZXNzaW9uJykuaW52YWxpZGF0ZSgpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UbygnbG9naW4nKTtcbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFsIFZpbnogKi9cblxuLyoqXG4gKiBBZGRzIHRoZSBWaW56IHJvdXRlcyB0byB0aGUgYXBwbGljYXRpb24gcm91dGVyLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBcbiAqIFZpbnouc2V0dXAoQXBwKTtcbiAqIEFwcC5Sb3V0ZXIubWFwKGZ1bmN0aW9uKCkge1xuICogICAgICd1c2Ugc3RyaWN0JztcbiAqICAgICBWaW56Lm1hcFJvdXRlcyh0aGlzKTtcbiAqICAgICAuLi5cbiAqICAgICBhZGQgYXBwbGljYXRpb24gcm91dGVzXG4gKiAgICAgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICovXG5WaW56Lm1hcFJvdXRlcyA9IGZ1bmN0aW9uKHJvdXRlcikge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByb3V0ZXIucmVzb3VyY2UoJ2Fib3V0Jyk7XG4gICAgcm91dGVyLnJlc291cmNlKCdhdXRob3JpemF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJvdXRlKCdzaG93JywgeyBwYXRoOiAnOmF1dGhvcml6YXRpb25faWQnIH0pO1xuICAgICAgICB0aGlzLnJvdXRlKCdlZGl0JywgeyBwYXRoOiAnOmF1dGhvcml6YXRpb25faWQvZWRpdCcgfSk7XG4gICAgICAgIHRoaXMucm91dGUoJ2NyZWF0ZScpO1xuICAgIH0pO1xuICAgIHJvdXRlci5yZXNvdXJjZSgnaWRlbnRpdHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucm91dGUoJ2NyZWF0ZScpO1xuICAgICAgICB0aGlzLnJvdXRlKCdlZGl0JywgeyBwYXRoOiAnOmlkZW50aXR5X2lkL2VkaXQnIH0pO1xuICAgICAgICB0aGlzLnJvdXRlKCdzaG93JywgeyBwYXRoOiAnOmlkZW50aXR5X2lkJyB9KTtcbiAgICB9KTtcbiAgICByb3V0ZXIucmVzb3VyY2UoJ2xpY2Vuc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucm91dGUoJ3Nob3cnLCB7IHBhdGg6ICcvc2hvdycgfSk7XG4gICAgICAgIHRoaXMucm91dGUoJ2luc3RhbGwnLCB7IHBhdGg6ICcvaW5zdGFsbCcgfSk7XG4gICAgfSk7XG4gICAgcm91dGVyLnJlc291cmNlKCdsb2dpbicpO1xuICAgIHJvdXRlci5yZXNvdXJjZSgnbG9nb3V0Jyk7XG4gICAgcm91dGVyLnJlc291cmNlKCdvcmdhbml6YXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucm91dGUoJ2NyZWF0ZScpO1xuICAgICAgICB0aGlzLnJvdXRlKCdlZGl0JywgeyBwYXRoOiAnOm9yZ2FuaXphdGlvbl9pZC9lZGl0JyB9KTtcbiAgICAgICAgdGhpcy5yb3V0ZSgnc2hvdycsIHsgcGF0aDogJzpvcmdhbml6YXRpb25faWQnIH0pO1xuICAgIH0pO1xuICAgIHJvdXRlci5yZXNvdXJjZSgncHJvZmlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZSgnZWRpdCcsIHsgcGF0aDogJy9lZGl0JyB9KTtcbiAgICB9KTtcbiAgICByb3V0ZXIucmVzb3VyY2UoJ3JlY292ZXInKTtcbn07XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIqL1xuXG5WaW56Lk9yZ2FuaXphdGlvblJvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKHtcblxuICAgIHNldHVwQ29udHJvbGxlcjogZnVuY3Rpb24gKGNvbnRyb2xsZXIsIG1vZGVsKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ21vZGVsJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgncXVlcnknLCBudWxsKTtcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ3NlbGVjdGVkSXRlbScsIG51bGwpO1xuICAgIH1cbn0pO1xuXG5WaW56Lk9yZ2FuaXphdGlvbkNyZWF0ZVJvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKHtcblxuICAgIGFjdGlvbnM6IHtcblxuICAgICAgICB3aWxsVHJhbnNpdGlvbjogZnVuY3Rpb24gKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IHRoaXMuY29udHJvbGxlci5jb250ZW50O1xuICAgICAgICAgICAgaWYgKG1vZGVsICYmIG1vZGVsLmdldCgnaXNEaXJ0eScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNob3dUcmFuc2l0aW9uTW9kYWwodHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgVmluei5Mb2dnZXIuZGVidWcoJ0FGVEVSIE1PREFMJywgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEJ1YmJsZSB0aGUgYHdpbGxUcmFuc2l0aW9uYCBldmVudCBzbyB0aGF0IHBhcmVudCByb3V0ZXMgY2FuIGRlY2lkZSB3aGV0aGVyIG9yIG5vdCB0byBhYm9ydC5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0KCdpc0VkaXRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAvLyB0aGUgbW9kZWwgZm9yIHRoaXMgcm91dGUgaXMgYSBuZXcgZW1wdHkgRW1iZXIuT2JqZWN0XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmNyZWF0ZVJlY29yZCgnb3JnYW5pemF0aW9uJyk7XG4gICAgfSxcblxuICAgIHJlbmRlclRlbXBsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5yZW5kZXIoJ29yZ2FuaXphdGlvbkVkaXQnLCB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiAnb3JnYW5pemF0aW9uQ3JlYXRlJ1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2V0dXBDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlciwgbW9kZWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnbWVzc2FnZXMnLCBudWxsKTtcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ21vZGVsJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnb3JnYW5pemF0aW9uc1F1ZXJ5JywgJycpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnYXV0aG9yaXphdGlvbnNRdWVyeScsICcnKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldCgnaXNFZGl0aW5nJywgdHJ1ZSk7XG4gICAgfVxufSk7XG5cblZpbnouT3JnYW5pemF0aW9uRWRpdFJvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKHtcblxuICAgIGFjdGlvbnM6IHtcblxuICAgICAgICB3aWxsVHJhbnNpdGlvbjogZnVuY3Rpb24gKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IHRoaXMuY29udHJvbGxlci5jb250ZW50O1xuICAgICAgICAgICAgaWYgKG1vZGVsICYmIG1vZGVsLmdldCgnaXNEaXJ0eScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNob3dUcmFuc2l0aW9uTW9kYWwodHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgVmluei5Mb2dnZXIuZGVidWcoJ0FGVEVSIE1PREFMJywgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEJ1YmJsZSB0aGUgYHdpbGxUcmFuc2l0aW9uYCBldmVudCBzbyB0aGF0IHBhcmVudCByb3V0ZXMgY2FuIGRlY2lkZSB3aGV0aGVyIG9yIG5vdCB0byBhYm9ydC5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0KCdpc0VkaXRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5maW5kKCdvcmdhbml6YXRpb24nLCBwYXJhbXMub3JnYW5pemF0aW9uX2lkKTtcbiAgICB9LFxuXG4gICAgc2V0dXBDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlciwgbW9kZWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnbWVzc2FnZXMnLCBudWxsKTtcbiAgICAgICAgY29udHJvbGxlci5zZXQoJ21vZGVsJywgbW9kZWwpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnb3JnYW5pemF0aW9uc1F1ZXJ5JywgJycpO1xuICAgICAgICBjb250cm9sbGVyLnNldCgnYXV0aG9yaXphdGlvbnNRdWVyeScsICcnKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldCgnaXNFZGl0aW5nJywgdHJ1ZSk7XG4gICAgfVxufSk7XG5cblZpbnouT3JnYW5pemF0aW9uU2hvd1JvdXRlID0gRW1iZXIuUm91dGUuZXh0ZW5kKHtcblxuICAgIG1vZGVsOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZmluZCgnb3JnYW5pemF0aW9uJywgcGFyYW1zLm9yZ2FuaXphdGlvbl9pZCk7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIgKi9cblxuVmluei5Qcm9maWxlRWRpdFJvdXRlID0gVmluei5BdXRoZW50aWNhdGVkUm91dGUuZXh0ZW5kKHtcbiAgICBtb2RlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2Vzc2lvbi5pZGVudGl0eScpO1xuICAgIH1cbn0pO1xuXG5WaW56LlByb2ZpbGVJbmRleFJvdXRlID0gVmluei5BdXRoZW50aWNhdGVkUm91dGUuZXh0ZW5kKHtcbiAgICBtb2RlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2Vzc2lvbi5pZGVudGl0eScpO1xuICAgIH1cbn0pO1xuXG5WaW56LlByb2ZpbGVTaG93Um91dGUgPSBWaW56LkF1dGhlbnRpY2F0ZWRSb3V0ZS5leHRlbmQoe1xuICAgIG1vZGVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3Nlc3Npb24uaWRlbnRpdHknKTtcbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBFbWJlciwgcmVxdWlyZSwgJCovXG4vKmpzbGludCB1bnBhcmFtOnRydWUgKi9cblxucmVxdWlyZSgnLi9jb3JlU2VyaWFsaXplcicpO1xuXG5WaW56LkFjY2Vzc0NvbmRpdGlvblNlcmlhbGl6ZXIgPSBWaW56LmNvcmUuU2VyaWFsaXplci5leHRlbmQoe1xuXG4gICAgZXh0cmFjdDogZnVuY3Rpb24gKHN0b3JlLCB0eXBlLCBwYXlsb2FkLCBpZCwgcmVxdWVzdFR5cGUpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgcmV0QXJyYXkgPSBbXTtcbiAgICAgICAgJC5lYWNoKHBheWxvYWQsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldEFycmF5LnB1c2goe2lkOiB2YWx1ZX0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldEFycmF5O1xuICAgIH1cbn0pO1xuIiwiLypnbG9iYWxzIFZpbnogKi9cblxucmVxdWlyZSgnLi9jb3JlU2VyaWFsaXplcicpO1xuXG5WaW56LkF1dGhvcml6YXRpb25TZXJpYWxpemVyID0gVmluei5jb3JlLlNlcmlhbGl6ZXIuZXh0ZW5kKHt9KTtcbiIsIi8qZ2xvYmFscyBWaW56LCBEUywgRW1iZXIgKi9cbi8qanNsaW50IHVucGFyYW06IHRydWUgICovXG5cblZpbnouY29yZS5TZXJpYWxpemVyID0gRFMuUkVTVFNlcmlhbGl6ZXIuZXh0ZW5kKERTLkVtYmVkZGVkUmVjb3Jkc01peGluLCB7XG4gICAga2V5Rm9yQXR0cmlidXRlOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfSxcbiAgICBrZXlGb3JSZWxhdGlvbnNoaXA6IGZ1bmN0aW9uKGtleSwga2luZCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmIChraW5kID09PSAnYmVsb25nc1RvJykgeyByZXR1cm4ga2V5ICsgJ0lkJzsgfVxuICAgICAgICBpZiAoa2luZCA9PT0gJ2hhc01hbnknKSB7IHJldHVybiBFbWJlci5TdHJpbmcuc2luZ3VsYXJpemUoa2V5KSArICdJZHMnOyB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSxcbiAgICBleHRyYWN0QXJyYXk6IGZ1bmN0aW9uKHN0b3JlLCB0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIG5ld1BheWxvYWQgPSB7fSxcbiAgICAgICAgICAgICAgICBrZXkgPSBFbWJlci5TdHJpbmcucGx1cmFsaXplKHR5cGUudHlwZUtleSk7XG5cbiAgICAgICAgaWYgKHBheWxvYWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgbmV3UGF5bG9hZFtrZXldID0gcGF5bG9hZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXlsb2FkLmNvbnRlbnRzICYmIHBheWxvYWQuY29udGVudHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgbmV3UGF5bG9hZFtrZXldID0gcGF5bG9hZC5jb250ZW50cztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1BheWxvYWRba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBlcihzdG9yZSwgdHlwZSwgbmV3UGF5bG9hZCk7XG4gICAgfSxcbiAgICBleHRyYWN0U2luZ2xlOiBmdW5jdGlvbihzdG9yZSwgdHlwZSwgcGF5bG9hZCwgaWQpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB2YXIgbmV3UGF5bG9hZCA9IHt9LFxuICAgICAgICAgICAgICAgIGtleSA9IHR5cGUudHlwZUtleTtcblxuICAgICAgICBuZXdQYXlsb2FkW2tleV0gPSBwYXlsb2FkO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VwZXIoc3RvcmUsIHR5cGUsIG5ld1BheWxvYWQsIGlkKTtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZUludG9IYXNoOiBmdW5jdGlvbihoYXNoLCB0eXBlLCByZWNvcmQsIG9wdGlvbnMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBFbWJlci5tZXJnZShoYXNoLCB0aGlzLnNlcmlhbGl6ZShyZWNvcmQsIG9wdGlvbnMpKTtcbiAgICB9XG59KTtcblxuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyICovXG5cbnJlcXVpcmUoJy4vY29yZVNlcmlhbGl6ZXInKTtcblxuVmluei5JZGVudGl0eVNlcmlhbGl6ZXIgPSBWaW56LmNvcmUuU2VyaWFsaXplci5leHRlbmQoe1xuICAgIGF0dHJzOiB7XG4gICAgICAgIGF1dGhvcml6YXRpb25zOiB7IHNlcmlhbGl6ZTogJ3JlY29yZHMnLCBkZXNlcmlhbGl6ZTogJ3JlY29yZHMnIH0sXG4gICAgICAgIG9yZ2FuaXphdGlvbnM6IHsgc2VyaWFsaXplOiAncmVjb3JkcycsIGRlc2VyaWFsaXplOiAncmVjb3JkcycgfVxuICAgIH1cbn0pO1xuIiwicmVxdWlyZSgnLi9hY2Nlc3NDb25kaXRpb25TZXJpYWxpemVyLmpzJyk7XG5yZXF1aXJlKCcuL2F1dGhvcml6YXRpb25TZXJpYWxpemVyLmpzJyk7XG5yZXF1aXJlKCcuL2NvcmVTZXJpYWxpemVyLmpzJyk7XG5yZXF1aXJlKCcuL2lkZW50aXR5U2VyaWFsaXplci5qcycpO1xucmVxdWlyZSgnLi9vcmdhbml6YXRpb25TZXJpYWxpemVyLmpzJyk7XG5yZXF1aXJlKCcuL3Byb2R1Y3RMaW5rU2VyaWFsaXplci5qcycpO1xuIiwiLypnbG9iYWxzIFZpbnogKi9cblxucmVxdWlyZSgnLi9jb3JlU2VyaWFsaXplcicpO1xuXG5WaW56Lk9yZ2FuaXphdGlvblNlcmlhbGl6ZXIgPSBWaW56LmNvcmUuU2VyaWFsaXplci5leHRlbmQoe30pO1xuIiwiLypnbG9iYWxzIFZpbnosIERTICovXG4vKmpzbGludCB1bnBhcmFtOiB0cnVlICovXG5cblZpbnouUHJvZHVjdExpbmtTZXJpYWxpemVyID0gRFMuUkVTVFNlcmlhbGl6ZXIuZXh0ZW5kKHtcblxuICAgIGV4dHJhY3Q6IGZ1bmN0aW9uIChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgaWQsIHJlcXVlc3RUeXBlKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHBheWxvYWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcGF5bG9hZC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0TGluaykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaW5rLmlkID0gcHJvZHVjdExpbmsucHJvZHVjdE5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFsIFZpbnosIEVtYmVyLCBEUyAqL1xuXG5WaW56LkFycmF5VHJhbnNmb3JtID0gRFMuVHJhbnNmb3JtLmV4dGVuZCh7XG4gICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uKHNlcmlhbGl6ZWQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHJldHVybiBFbWJlci5BKHNlcmlhbGl6ZWQpO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbihkZXNlcmlhbGl6ZWQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZWQgPyBkZXNlcmlhbGl6ZWQudG9BcnJheSgpIDogW107XG4gICAgfVxufSk7XG4iLCJyZXF1aXJlKCcuL2FycmF5VHJhbnNmb3JtLmpzJyk7XG4iLCJpZiAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggIT09ICdmdW5jdGlvbicpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gKHN1ZmZpeCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKC1zdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4O1xuICAgIH07XG59XG4iLCJpZiAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGhBbnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoQW55ID0gZnVuY3Rpb24gKHN1ZmZpeCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoc3VmZml4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdWZmaXgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGljZSgtc3VmZml4W2ldLmxlbmd0aCkgPT09IHN1ZmZpeFtpXSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKC1zdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4O1xuICAgIH07XG59XG4iLCJyZXF1aXJlKCcuL2VuZHNXaXRoLmpzJyk7XG5yZXF1aXJlKCcuL2VuZHNXaXRoQW55LmpzJyk7XG5yZXF1aXJlKCcuL3N0YXJ0c1dpdGguanMnKTtcbnJlcXVpcmUoJy4vc3RhcnRzV2l0aEFueS5qcycpO1xuIiwiaWYgKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggIT09ICdmdW5jdGlvbicpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeDtcbiAgICB9O1xufVxuIiwiaWYgKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGhBbnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGhBbnkgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmIChwcmVmaXggaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWNlKDAsIHByZWZpeFtpXS5sZW5ndGgpID09PSBwcmVmaXhbaV0pIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4O1xuICAgIH07XG59XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG5WaW56LkFjY2Vzc0RlbmllZFZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG5cbiAgICB0ZW1wbGF0ZU5hbWU6ICdhY2Nlc3NEZW5pZWQnLFxuXG4gICAgZGlkSW5zZXJ0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8qanNsaW50IG5vbWVuOnRydWUqL1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvKmpzbGludCBub21lbjpmYWxzZSovXG4gICAgICAgIEVtYmVyLnJ1bi5zY2hlZHVsZU9uY2UoJ2FmdGVyUmVuZGVyJywgdGhpcywgJ3Byb2Nlc3NDaGlsZEVsZW1lbnRzJyk7XG4gICAgfSxcblxuICAgIHByb2Nlc3NDaGlsZEVsZW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyKi9cblxuVmluei5BcHBsaWNhdGlvbk5hdlZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG5cbiAgICBhcHBsaWNhdGlvbkxpbmtzOiBFbWJlci5jb21wdXRlZC5hbGlhcygnZW52LmFwcC5wcm9kdWN0TGlua3MnKSxcblxuICAgIGNsYXNzTmFtZXM6IFsnbmF2YmFyJywgJ25hdmJhci1hcHAnLCAnbmF2YmFyLWRlZmF1bHQnLCAnbmF2YmFyLWZpeGVkLXRvcCddLFxuXG4gICAgdGFnTmFtZTogJ25hdicsXG5cbiAgICB0ZW1wbGF0ZU5hbWU6ICdhcHBsaWNhdGlvbk5hdicsXG5cbiAgICB1c2VyTGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdXNlcjogJ3RydWUnLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTG9nb3V0Jywgcm91dGU6ICdsb2dvdXQnIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1Byb2ZpbGUnLCByb3V0ZTogJ3Byb2ZpbGUnIH0sXG4gICAgICAgICAgICAgICAgeyBkaXZpZGVyOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyBoZWFkZXI6ICdBZG1pbmlzdHJhdGlvbicsIHVzZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSWRlbnRpdGllcycsIHJvdXRlOiAnaWRlbnRpdHknLCBhY2Nlc3M6ICdWSU5aX0lERU5USVRZX01BTkFHRScgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT3JnYW5pemF0aW9ucycsIHJvdXRlOiAnb3JnYW5pemF0aW9uJywgYWNjZXNzOiAnVklOWl9PUkdBTklaQVRJT05fTUFOQUdFJyB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdBdXRob3JpemF0aW9ucycsIHJvdXRlOiAnYXV0aG9yaXphdGlvbicsIGFjY2VzczogJ1ZJTlpfQVVUSE9SSVpBVElPTl9NQU5BR0UnIH0sXG4gICAgICAgICAgICAgICAgeyBkaXZpZGVyOiB0cnVlLCBoZWFkZXI6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0xpY2Vuc2UnLCByb3V0ZTogJ2xpY2Vuc2Uuc2hvdycsIGFjY2VzczogJ1ZJTlpfTElDRU5TRUtFWV9SRUFEJyB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdBYm91dCcsIHJvdXRlOiAnYWJvdXQnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF1cbn0pO1xuIiwiLypnbG9iYWwgVmlueiwgRW1iZXIgKi9cblxuVmluei5BdXRob3JpemF0aW9uRWRpdFZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG4gICAgdGVtcGxhdGVOYW1lOiAnYXV0aG9yaXphdGlvbi9lZGl0J1xufSk7XG5cblZpbnouQXV0aG9yaXphdGlvblZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG4gICAgdGVtcGxhdGVOYW1lOiAnYXV0aG9yaXphdGlvbidcbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyKi9cblxuVmluei5BdXRob3JpemVkTmF2VmlldyA9IEVtYmVyLlZpZXcuZXh0ZW5kKHtcblxuICAgIGNsYXNzTmFtZUJpbmRpbmdzOiBbICc6bmF2JywgJzpuYXZiYXItbmF2JywgJ3JpZ2h0Om5hdmJhci1yaWdodCcgXSxcblxuICAgIHRhZ05hbWU6ICd1bCcsXG5cbiAgICB0ZW1wbGF0ZU5hbWU6ICdhdXRob3JpemVkTmF2JyxcblxuICAgIGRyb3Bkb3duVmlldzogRW1iZXIuVmlldy5leHRlbmQoe1xuXG4gICAgICAgIGNsYXNzTmFtZUJpbmRpbmdzOiBbJ2lzQ2hpbGRBY3RpdmU6YWN0aXZlJywgJzpkcm9wZG93bicsICdjb250ZW50LmNsYXNzJ10sXG5cbiAgICAgICAgdGFnTmFtZTogJ2xpJyxcblxuICAgICAgICBpc0NoaWxkQWN0aXZlOiBFbWJlci5jb21wdXRlZCgncm91dGVyLnVybCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICAgICAgbGlua3MgPSB0aGlzLmdldCgnY29udGVudC5saW5rcycpLFxuICAgICAgICAgICAgICAgIHJvdXRlciA9IHRoaXMuZ2V0KCdyb3V0ZXInKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluay5yb3V0ZSAmJiByb3V0ZXIuaXNBY3RpdmUobGluay5yb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KSxcblxuICAgICAgICByb3V0ZXI6IEVtYmVyLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnY29udHJvbGxlcicpLmNvbnRhaW5lci5sb29rdXAoJ3JvdXRlcjptYWluJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyKi9cblxuVmluei5DdXJyZW50VGltZVZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lczogJ2N1cnJlbnQtdGltZSBkcm9wZG93bicsXG4gICAgdGFnTmFtZTogJ2xpJyxcbiAgICB0ZW1wbGF0ZU5hbWU6ICdjdXJyZW50VGltZScsXG5cbiAgICBkaWRJbnNlcnRFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLmdldCgnY29udHJvbGxlcicpLnNlbmQoJ3N0YXJ0VGltZXJzJyk7XG4gICAgfSxcblxuICAgIHdpbGxEZXN0cm95RWxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdGhpcy5nZXQoJ2NvbnRyb2xsZXInKS5zZW5kKCdzdG9wVGltZXJzJyk7XG4gICAgfVxufSk7XG4iLCIvKmdsb2JhbHMgVmlueiwgRW1iZXIqL1xuXG5WaW56LklkZW50aXR5VmlldyA9IEVtYmVyLlZpZXcuZXh0ZW5kKHtcblxuICAgIHRlbXBsYXRlTmFtZTogJ2lkZW50aXR5J1xufSk7XG5cblZpbnouSWRlbnRpdHlFZGl0VmlldyA9IEVtYmVyLlZpZXcuZXh0ZW5kKHtcblxuICAgIHRlbXBsYXRlTmFtZTogJ2lkZW50aXR5L2VkaXQnXG59KTtcbiIsInJlcXVpcmUoJy4vYWNjZXNzRGVuaWVkLmpzJyk7XG5yZXF1aXJlKCcuL2FwcGxpY2F0aW9uTmF2Vmlldy5qcycpO1xucmVxdWlyZSgnLi9hdXRob3JpemF0aW9uVmlld3MuanMnKTtcbnJlcXVpcmUoJy4vYXV0aG9yaXplZE5hdlZpZXcuanMnKTtcbnJlcXVpcmUoJy4vY3VycmVudFRpbWVWaWV3LmpzJyk7XG5yZXF1aXJlKCcuL2lkZW50aXR5Vmlld3MuanMnKTtcbnJlcXVpcmUoJy4vbG9naW5WaWV3LmpzJyk7XG5yZXF1aXJlKCcuL29yZ2FuaXphdGlvblZpZXdzLmpzJyk7XG5yZXF1aXJlKCcuL3Byb2R1Y3ROYXZWaWV3LmpzJyk7XG5yZXF1aXJlKCcuL3Byb2ZpbGVWaWV3cy5qcycpO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyKi9cblxuVmluei5Mb2dpblZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG5cbiAgICB0ZW1wbGF0ZU5hbWU6ICdsb2dpbicsXG5cbiAgICBkaWRJbnNlcnRFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGNoaWxkVmlld3MsXG4gICAgICAgICAgICBjb250cm9sbGVyID0gdGhpcy5nZXQoJ2NvbnRyb2xsZXInKTtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgY2hpbGRWaWV3cyA9IHRoaXMuZ2V0KCdjaGlsZFZpZXdzJyk7XG4gICAgICAgIGlmIChjaGlsZFZpZXdzKSB7XG4gICAgICAgICAgICBjaGlsZFZpZXdzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkVmlldykge1xuICAgICAgICAgICAgICAgIGlmIChWaW56LklucHV0VmFsaWRhdGlvbk1peGluLmRldGVjdChjaGlsZFZpZXcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkVmFsaWRhdGluZ0lucHV0KGNoaWxkVmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8qZ2xvYmFsIFZpbnosIEVtYmVyICovXG5cblZpbnouT3JnYW5pemF0aW9uRWRpdFZpZXcgPSBFbWJlci5WaWV3LmV4dGVuZCh7XG4gICAgdGVtcGxhdGVOYW1lOiAnb3JnYW5pemF0aW9uL2VkaXQnXG59KTtcblxuVmluei5Pcmdhbml6YXRpb25WaWV3ID0gRW1iZXIuVmlldy5leHRlbmQoe1xuXG4gICAgdGVtcGxhdGVOYW1lOiAnb3JnYW5pemF0aW9uJ1xufSk7XG4iLCIvKmdsb2JhbCBWaW56LCBFbWJlciAqL1xuXG5WaW56LlByb2R1Y3ROYXZWaWV3ID0gRW1iZXIuVmlldy5leHRlbmQoe1xuICAgIHRhZ05hbWU6ICduYXYnLFxuICAgIGNsYXNzTmFtZXM6IFsnbmF2YmFyJywgJ25hdmJhci1pbnZlcnNlJywgJ25hdmJhci1maXhlZC10b3AnXSxcbiAgICB0ZW1wbGF0ZU5hbWU6ICdwcm9kdWN0TmF2JyxcblxuICAgIG5lZWRzOiBbJ3ZpbnonXSxcblxuICAgIGJ1dHRvblZpZXc6IEVtYmVyLlZpZXcuZXh0ZW5kKHtcbiAgICAgICAgdGFnTmFtZTogJ2xpJyxcbiAgICAgICAgYXR0cmlidXRlQmluZGluZ3M6IFsgJ3N0eWxlJyBdLFxuICAgICAgICBjbGFzc05hbWVCaW5kaW5nczogWyAnYWN0aXZlJyBdLFxuICAgICAgICBpbnZlcnQ6IGZhbHNlLFxuXG4gICAgICAgIGNvbG9yOiBFbWJlci5jb21wdXRlZCgnY29udGV4dC5jb2xvcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjb250ZXh0LmNvbG9yJyk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIHN0eWxlOiBFbWJlci5jb21wdXRlZCgnaW52ZXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgcyA9ICh0aGlzLmdldCgnaW52ZXJ0Jyk/J2JhY2tncm91bmQtY29sb3I6JzonY29sb3I6JykgKyB0aGlzLmdldCgnY29sb3InKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9KSxcblxuICAgICAgICBhY3RpdmU6IEVtYmVyLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIHBuID0gdGhpcy5nZXQoJ2NvbnRleHQucHJvZHVjdE5hbWUnKSxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IChwbiA9PT0gdGhpcy5nZXQoJ2Vudi5wcm9kdWN0TmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICAgICAgfSksXG5cbiAgICAgICAgbW91c2VFbnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnNldCgnaW52ZXJ0JywgdHJ1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91c2VMZWF2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB0aGlzLnNldCgnaW52ZXJ0JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuIiwiLypnbG9iYWxzIFZpbnosIEVtYmVyICovXG5cblZpbnouUHJvZmlsZUVkaXRWaWV3ID0gRW1iZXIuVmlldy5leHRlbmQoe1xuICAgIHRlbXBsYXRlTmFtZTogJ3Byb2ZpbGUvZWRpdCcsXG4gICAgdHpDaGFuZ2VkOiBFbWJlci5vYnNlcnZlcignY29udHJvbGxlci5jbG9ja1RpbWV6b25lcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICB0aGlzLnJlcmVuZGVyKCk7XG4gICAgfSlcbn0pO1xuXG5WaW56LlByb2ZpbGVWaWV3ID0gRW1iZXIuVmlldy5leHRlbmQoe1xuICAgIHRlbXBsYXRlTmFtZTogJ3Byb2ZpbGUnXG59KTtcbiJdfQ==

this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};
this["Ember"]["TEMPLATES"]["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"well\" style=\"margin:20px;position:relative\">\n    <img src=\"images/thistech-logo-big.png\" style=\"position:absolute;bottom:10px;right:15px\"/>\n    <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.app.productName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.app.productMark", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.app.productTagline", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n    <h5>\n        &#169; 2008 - ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.currentYear", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" THIS TECHNOLOGY, Inc.\n    </h5>\n    <h5>\n        Version ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.projectVersion", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" <br/>\n        Build ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.buildRevision", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </h5>\n\n    <hr style=\"color:rgb(244,22,22);background-color:rgb(244,22,22);height:1px;border:none; \"/>\n\n    <div style=\"margin-top: 20px\">\n        <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "vinzAbout.AppName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n        <h6>Version ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "vinzAbout.AppVersion", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n            Build ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "vinzAbout.AppBuildNumber", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h6>\n    </div>\n\n    <div style=\"margin-top: 20px\">\n        <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "acsAbout.AppName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n        <h6>Version ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "acsAbout.AppVersion", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n            Build ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "acsAbout.AppBuildNumber", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h6>\n    </div>\n\n    <div style=\"margin-top: 20px\">\n        <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "espAbout.AppName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n        <h6>Version ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "espAbout.AppVersion", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n            Build ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "espAbout.AppBuildNumber", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h6>\n    </div>\n\n    <div style=\"margin-top: 20px\">\n        <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "spotlink-reportsAbout.AppName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n        <h6>Version ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "spotlink-reportsAbout.AppVersion", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n            Build ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "spotlink-reportsAbout.AppBuildNumber", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h6>\n    </div>\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["accessDenied"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"hero-unit\"><h2>Access Denied <small></small></h2><p>The identity you have signed on with does not have access to this resource. Contact your system administrator to have the appropriate access conditions added to your authorizations.</p></div>\n");
  
});
this["Ember"]["TEMPLATES"]["applicationNav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"brand\"><span class=\"small\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.app.productTagline", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n            <div class=\"navbar-inner\">\n                <div class=\"container-fluid\">\n                    <div class=\"nav-collapse\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "currentIdentity", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        <ul id=\"current-user-menu\" class=\"nav navbar-nav navbar-right\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "showClock", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  hashContexts = {'right': depth0};
  hashTypes = {'right': "BOOLEAN"};
  options = {hash:{
    'right': (true)
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || (depth0 && depth0.render)),stack1 ? stack1.call(depth0, "authorizedNav", "view.userLinks", options) : helperMissing.call(depth0, "render", "authorizedNav", "view.userLinks", options))));
  data.buffer.push("\n                        </ul>\n\n                        <ul id=\"current-organization-menu\" class=\"nav navbar-nav navbar-right\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "showOrganizationSelection", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || (depth0 && depth0.render)),stack1 ? stack1.call(depth0, "authorizedNav", "env.app.productLinks", options) : helperMissing.call(depth0, "render", "authorizedNav", "env.app.productLinks", options))));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || (depth0 && depth0.render)),stack1 ? stack1.call(depth0, "currentTime", options) : helperMissing.call(depth0, "render", "currentTime", options))));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                                <li class=\"dropdown\">\n                                    <button class=\"btn btn-default navbar-btn dropdown-toggle\" data-toggle=\"dropdown\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "session.currentOrganization.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" <b class=\"caret\"></b></button>\n                                    <ul class=\"dropdown-menu\">\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "org", "in", "currentIdentity.organizations", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </ul>\n                                </li>\n                            ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                            <li><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeOrganization", "org", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "org.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n                                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"navbar-area\">\n    <nav class=\"navbar navbar-default navbar-fixed-top navbar-app\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "session.isAuthenticated", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </nav>\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["authorization"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <header class=\"main-content-header\">\n        ");
  hashContexts = {'collapsed': depth0};
  hashTypes = {'collapsed': "ID"};
  options = {hash:{
    'collapsed': ("view.splitCollapsed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['split-panel-toggle'] || (depth0 && depth0['split-panel-toggle'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "split-panel-toggle", options))));
  data.buffer.push("\n        <ul class=\"breadcrumb\">\n            <li>Administration</li>\n            <li>Authorizations</li>\n        </ul>\n    </header>\n\n    ");
  hashContexts = {'collapsed': depth0,'min': depth0,'max': depth0};
  hashTypes = {'collapsed': "ID",'min': "INTEGER",'max': "INTEGER"};
  options = {hash:{
    'collapsed': ("view.splitCollapsed"),
    'min': (250),
    'max': (600)
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['split-panel'] || (depth0 && depth0['split-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "split-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <div class=\"main-content-side-bar scrollable\">\n            <div class=\"input-group\" style=\"margin:5px\">\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("query"),
    'class': ("form-control"),
    'placeholder': ("Search...")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default fa fa-search\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                 </span>\n            </div>\n\n            ");
  hashContexts = {'class': depth0,'contentBinding': depth0,'selectedBinding': depth0};
  hashTypes = {'class': "STRING",'contentBinding': "STRING",'selectedBinding': "STRING"};
  options = {hash:{
    'class': ("nav-list-padding"),
    'contentBinding': ("items"),
    'selectedBinding': ("selectedItem")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-icon-list-group'] || (depth0 && depth0['bs-icon-list-group'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-icon-list-group", options))));
  data.buffer.push("\n\n        </div>\n\n        <div>\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["authorizedNav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "link.links", {hash:{},inverse:self.program(17, program17, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'content': depth0};
  hashTypes = {'content': "ID"};
  stack1 = helpers.view.call(depth0, "view.dropdownView", {hash:{
    'content': ("link")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "link.user", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <ul class=\"dropdown-menu\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "link.links", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-user fa-lg\"></i><span class=\"caret\"></span>\n                </a>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i></i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<span class=\"caret\"></span>\n                </a>\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "divider", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("\n                        <li class=\"divider\"></li>\n                    ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "header", {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li role=\"presentation\" class=\"dropdown-header\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "header", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                            <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                        ");
  return buffer;
  }
function program15(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "link.user", {hash:{},inverse:self.program(21, program21, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n            <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "link.route", options) : helperMissing.call(depth0, "link-to", "link.route", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<i class=\"fa fa-user fa-lg\"></i>");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n            <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "link.route", options) : helperMissing.call(depth0, "link-to", "link.route", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }
function program22(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "link", "in", "authorizedLinks", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["currentTime"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <ul class=\"dropdown-menu\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "tz", "in", "displayTzList", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <li>\n                <a ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("tz.isSelected:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTimezone", "tz", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <div class=\"timezone\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "tz.timezoneName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    <div class=\"display-time\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "tz.displayTime", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                </a>\n            </li>\n        ");
  return buffer;
  }

  data.buffer.push("<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n    <div class=\"timezone\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "timezoneName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n    <div class=\"display-time\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "displayTime", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n</a>\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "displayTzList", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["identity"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <header class=\"main-content-header\">\n        ");
  hashContexts = {'collapsed': depth0};
  hashTypes = {'collapsed': "ID"};
  options = {hash:{
    'collapsed': ("view.splitCollapsed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['split-panel-toggle'] || (depth0 && depth0['split-panel-toggle'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "split-panel-toggle", options))));
  data.buffer.push("\n        <ul class=\"breadcrumb\">\n            <li>Administration</li>\n            <li>Identities</li>\n        </ul>\n    </header>\n\n    ");
  hashContexts = {'collapsed': depth0,'min': depth0,'max': depth0};
  hashTypes = {'collapsed': "ID",'min': "INTEGER",'max': "INTEGER"};
  options = {hash:{
    'collapsed': ("view.splitCollapsed"),
    'min': (250),
    'max': (600)
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['split-panel'] || (depth0 && depth0['split-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "split-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <div class=\"main-content-side-bar\">\n            <div class=\"input-group\" style=\"margin:5px\">\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("query"),
    'class': ("form-control"),
    'placeholder': ("Search...")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default fa fa-search\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                 </span>\n            </div>\n\n            ");
  hashContexts = {'class': depth0,'contentBinding': depth0,'selectedBinding': depth0};
  hashTypes = {'class': "STRING",'contentBinding': "STRING",'selectedBinding': "STRING"};
  options = {hash:{
    'class': ("nav-list-padding"),
    'contentBinding': ("items"),
    'selectedBinding': ("selectedItem")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-list-group'] || (depth0 && depth0['bs-list-group'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-list-group", options))));
  data.buffer.push("\n        </div>\n\n        <div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n    ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["license"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"well\" style=\"margin:20px;position:relative\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"well login\">\n    <div content>\n        <form class=\"form-horizontal\" ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "authenticate", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" role=\"form\">\n            <h2>Sign In</h2>\n            <div class=\"form-group has-feedback\">\n                <label class=\"control-label col-sm-3\" for=\"identification\">Email</label>\n                <div class=\"col-sm-6\">\n                    ");
  hashContexts = {'class': depth0,'id': depth0,'isValueRequired': depth0,'spellcheck': depth0,'statusId': depth0,'valueBinding': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'isValueRequired': "BOOLEAN",'spellcheck': "STRING",'statusId': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'class': ("form-control email-input"),
    'id': ("identification"),
    'isValueRequired': (true),
    'spellcheck': ("false"),
    'statusId': ("email-status"),
    'valueBinding': ("identification")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['email-input'] || (depth0 && depth0['email-input'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "email-input", options))));
  data.buffer.push("\n                </div>\n                <span id=\"email-status-icon\" class=\"form-control-feedback\"></span>\n                <label id=\"email-status-message\" class=\"status-label\"></label>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label class=\"control-label col-sm-3\" for=\"password\">Password</label>\n                <div class=\"col-sm-6\">\n                    ");
  hashContexts = {'class': depth0,'id': depth0,'statusId': depth0,'valueBinding': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'statusId': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'class': ("form-control"),
    'id': ("password"),
    'statusId': ("password-status"),
    'valueBinding': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['password-input'] || (depth0 && depth0['password-input'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "password-input", options))));
  data.buffer.push("\n                </div>\n                <span id=\"password-status-icon\" class=\"form-control-feedback\"></span>\n                <label id=\"password-status-message\" class=\"status-label\"></label>\n            </div>\n            <div id=\"login-button-bar\">\n                <label id=\"sign-in-remember-me-checkbox\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":checkbox :right-aligned isValueValid::disabled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                    ");
  hashContexts = {'type': depth0,'checked': depth0,'disabled': depth0};
  hashTypes = {'type': "STRING",'checked': "ID",'disabled': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'checked': ("rememberMe"),
    'disabled': ("isValueInvalid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" Keep me signed in\n                </label>\n                <input\n                    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":btn :btn-primary isValueValid::disabled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n                    id=\"sign-in-button\"\n                    class=\"btn btn-primary\"\n                    type=\"submit\"\n                    value=\"Sign in\">\n            </div>\n            <div id=\"login-status\" class=\"alert\"\n                 ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "ID"};
  options = {hash:{
    'class': ("isStatusMessageVisible:visible:invisible")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n                 ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "ID"};
  options = {hash:{
    'class': ("isWarning:alert-warning")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n                 ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "ID"};
  options = {hash:{
    'class': ("isError:alert-danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n                 ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "ID"};
  options = {hash:{
    'class': ("isInfo:alert-info")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n        </form>\n    </div>\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["organization"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <header class=\"main-content-header\">\n        ");
  hashContexts = {'collapsed': depth0};
  hashTypes = {'collapsed': "ID"};
  options = {hash:{
    'collapsed': ("view.splitCollapsed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['split-panel-toggle'] || (depth0 && depth0['split-panel-toggle'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "split-panel-toggle", options))));
  data.buffer.push("\n        <ul class=\"breadcrumb\">\n            <li>Administration</li>\n            <li>Organizations</li>\n        </ul>\n    </header>\n\n    ");
  hashContexts = {'collapsed': depth0,'min': depth0,'max': depth0};
  hashTypes = {'collapsed': "ID",'min': "INTEGER",'max': "INTEGER"};
  options = {hash:{
    'collapsed': ("view.splitCollapsed"),
    'min': (250),
    'max': (600)
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['split-panel'] || (depth0 && depth0['split-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "split-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <div class=\"main-content-side-bar\">\n            <div class=\"input-group\" style=\"margin:5px\">\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("query"),
    'class': ("form-control"),
    'placeholder': ("Search...")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default fa fa-search\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                 </span>\n            </div>\n\n            ");
  hashContexts = {'class': depth0,'contentBinding': depth0,'selectedBinding': depth0};
  hashTypes = {'class': "STRING",'contentBinding': "STRING",'selectedBinding': "STRING"};
  options = {hash:{
    'class': ("nav-list-padding"),
    'contentBinding': ("items"),
    'selectedBinding': ("selectedItem")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-list-group'] || (depth0 && depth0['bs-list-group'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-list-group", options))));
  data.buffer.push("\n        </div>\n\n        <div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n    ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["productNav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "products", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "view.buttonView", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "href", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"color:inherit\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "productName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'active': depth0,'color': depth0};
  hashTypes = {'active': "BOOLEAN",'color': "ID"};
  stack1 = helpers.view.call(depth0, "view.buttonView", {hash:{
    'active': (true),
    'color': ("env.app.productColor")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <a style=\"color:inherit\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "env.app.productName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n        ");
  return buffer;
  }

  data.buffer.push("<ul class=\"nav product-nav navbar-nav\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "session.isAuthenticated", {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n<ul class=\"nav navbar-nav navbar-right\">\n    <li class=\"brand\"><img alt=\"This Technology\" src=\"images/thistech-logo-tiny.png\"></li>\n</ul>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});
this["Ember"]["TEMPLATES"]["authorization/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class='scrollable'>\n        <div class='container'>\n            <div class=\"content-panel-heading\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.name"),
    'class': ("form-control"),
    'id': ("inputName")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "accessConditionGroup", "in", "accessConditionGroups", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"main-content-details-bottom-bar\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Save"),
    'disabled': ("isNotDirty"),
    'clicked': ("save")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("Cancel"),
    'disabled': ("isDeleteButtonDisabled"),
    'clicked': ("cancel")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message.isTypeSuccess", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0};
  hashTypes = {'message': "ID",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"};
  options = {hash:{
    'message': ("message.messageText"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "accessConditionGroup.text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "accessConditionGroup.accessConditions.selectionCount", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            <div class=\"btn-group btn-group-xs pull-right\">\n                                <button type=\"button\"\n                                        class=\"btn btn-link\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectOrDeselectAll", "accessConditionGroup", true, {hash:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","BOOLEAN"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">select all\n                                </button>\n\n                                <button type=\"button\"\n                                        class=\"btn btn-link\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectOrDeselectAll", "accessConditionGroup", false, {hash:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","BOOLEAN"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">deselect all\n                                </button>\n                            </div>\n\n\n                        </div>\n                        <div class=\"panel-body\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "accessConditionSelection", "in", "accessConditionGroup.accessConditions", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </div>\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <span class=\"badge alert-info\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "accessConditionGroup.accessConditions.selectionCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                ");
  hashContexts = {'type': depth0,'size': depth0,'title': depth0,'clicked': depth0,'clickedParamBinding': depth0};
  hashTypes = {'type': "ID",'size': "STRING",'title': "ID",'clicked': "STRING",'clickedParamBinding': "STRING"};
  options = {hash:{
    'type': ("accessConditionSelection.buttonType"),
    'size': ("xs"),
    'title': ("accessConditionSelection.accessCondition.title"),
    'clicked': ("toggleSelection"),
    'clickedParamBinding': ("accessConditionSelection")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n                            ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["authorization/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, options, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"content-panel-heading\"><h1>No identity selected</h1></div>\n\n    <footer class=\"content-form-footer\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("New"),
    'disabled': ("isNewButtonDisabled"),
    'clicked': ("create")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['page-panel']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0['page-panel']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['page-panel']) { stack1 = blockHelperMissing.call(depth0, 'page-panel', options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["authorization/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, options, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"scrollable\">\n        <div class=\"container\">\n            <div class=\"content-panel-heading\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "accessConditionGroup", "in", "accessConditionGroups", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"content-form-footer\">\n        ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("New"),
    'disabled': ("isNotManageable"),
    'clicked': ("create")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isNonSystemManaged", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n    </footer>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message.isTypeSuccess", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0};
  hashTypes = {'message': "ID",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"};
  options = {hash:{
    'message': ("message.messageText"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "accessConditionGroup.text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "accessConditionGroup.accessConditions.selectionCount", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n\n                        <div class=\"panel-body\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "accessConditionSelection", "in", "accessConditionGroup.accessConditions", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </div>\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <span class=\"badge alert-info\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "accessConditionGroup.accessConditions.selectionCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                ");
  hashContexts = {'content': depth0,'type': depth0};
  hashTypes = {'content': "ID",'type': "ID"};
  options = {hash:{
    'content': ("accessConditionSelection.accessCondition.title"),
    'type': ("accessConditionSelection.buttonType")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-label'] || (depth0 && depth0['bs-label'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-label", options))));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Edit"),
    'disabled': ("isNotManageable"),
    'clicked': ("edit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n                ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("danger"),
    'title': ("Delete"),
    'disabled': ("isNotManageable"),
    'clicked': ("delete")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['page-panel']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0['page-panel']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['page-panel']) { stack1 = blockHelperMissing.call(depth0, 'page-panel', options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["components/timezone-picker-dialog"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <label class='time-label'>Your location time: </label> <label class=\"time-field\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentTimeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n        <label class=\"time-label\">Selected time: </label> <label class=\"time-field-selected\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "selectedTimeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n        <div ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "ID"};
  options = {hash:{
    'id': ("mapPanelId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" style=\"width: 800px; height: 360px; border: 1px solid red\">\n        </div>\n        <label class=\"time-field-hover\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hoverTimeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n");
  return buffer;
  }

  data.buffer.push("<style>\n    .modal {\n        z-index: 99999;\n    }\n    .tzModal .modal-dialog {\n        width: 860px;\n    }\n    .tzModal .modal-body {\n        padding-bottom: 0px;\n        padding-top: 0px;\n    }\n    .tzModal .time-label {\n        width: 140px;\n    }\n    .tzModal .time-field {\n        font-weight: bold;\n        color: blue;\n        width: 200px;\n    }\n    .tzModal .time-field-selected {\n        font-weight: bold;\n        color: #ff865a;\n    }\n    .tzModal .time-field-hover {\n        font-weight: bold;\n        font-size: 1.5em;\n        color: #d3d3d3;\n    }\n</style>\n");
  hashContexts = {'class': depth0,'name': depth0,'fade': depth0,'footerButtonsBinding': depth0,'title': depth0};
  hashTypes = {'class': "STRING",'name': "ID",'fade': "BOOLEAN",'footerButtonsBinding': "STRING",'title': "STRING"};
  options = {hash:{
    'class': ("tzModal"),
    'name': ("timezonePickerDialogName"),
    'fade': (true),
    'footerButtonsBinding': ("timezonePickerButtons"),
    'title': ("Timezone Selection")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['bs-modal'] || (depth0 && depth0['bs-modal'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-modal", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["identity/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"scrollable\">\n        <div class=\"container\">\n            <div class=\"content-panel-heading\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.name"),
    'class': ("form-control"),
    'id': ("inputName")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.clientId"),
    'class': ("form-control"),
    'id': ("inputEmail")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputApiKey\" class=\"col-sm-2 control-label\">API-Key</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.apiKey"),
    'class': ("form-control"),
    'id': ("inputApiKey")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.clientSecret"),
    'class': ("form-control"),
    'id': ("inputPassword")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputOrganizations\" class=\"col-sm-2 control-label\">Organizations</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionsBinding': depth0,'queryBinding': depth0};
  hashTypes = {'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionsBinding': "STRING",'queryBinding': "STRING"};
  options = {hash:{
    'contentBinding': ("organizations"),
    'optionLabelPath': ("name"),
    'optionValuePath': ("id"),
    'selectionsBinding': ("model.organizations"),
    'queryBinding': ("controller.organizationsQuery")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['multi-select-component'] || (depth0 && depth0['multi-select-component'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "multi-select-component", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputAuthorizations\" class=\"col-sm-2 control-label\">Authorizations</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionsBinding': depth0,'queryBinding': depth0};
  hashTypes = {'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionsBinding': "STRING",'queryBinding': "STRING"};
  options = {hash:{
    'contentBinding': ("authorizations"),
    'optionLabelPath': ("name"),
    'optionValuePath': ("id"),
    'selectionsBinding': ("model.authorizations"),
    'queryBinding': ("controller.authorizationsQuery")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['multi-select-component'] || (depth0 && depth0['multi-select-component'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "multi-select-component", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"timzeoneButton\" class=\"col-sm-2 control-label\">Timezone</label>\n                    <button style=\"margin-left:20px;\"\n                            class=\"btn btn-primary btn-small\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showTimezoneDialog", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentTimezone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp;&nbsp;<i\n                            class=\"fa fa-map-marker\" id=\"timzeoneButton\"></i></button>\n\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"main-content-details-bottom-bar\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Save"),
    'disabled': ("isNotDirty"),
    'clicked': ("save")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            <label style=\"width: 10px;\"></label>\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("Cancel"),
    'disabled': ("isDeleteButtonDisabled"),
    'clicked': ("cancel")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message.isTypeSuccess", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0};
  hashTypes = {'message': "ID",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"};
  options = {hash:{
    'message': ("message.messageText"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content-details")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["identity/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"scrollable content-panel-heading\">\n        <h1>No identity selected</h1>\n    </div>\n\n    <footer class=\"main-content-details-bottom-bar\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("New"),
    'disabled': ("isNewButtonDisabled"),
    'clicked': ("create")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content-details")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["identity/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"scrollable\">\n        <div class=\"container\">\n            <div class=\"content-panel-heading\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.clientId", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputApiKey\" class=\"col-sm-2 control-label\">API-Key</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.apiKey", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.clientSecret", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputOrganizations\" class=\"col-sm-2 control-label\">Organizations</label>\n\n                    <div class=\"col-sm-6\">\n                            <span class=\"form-control-static\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "organization", "in", "model.organizations", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputAuthorizations\" class=\"col-sm-2 control-label\">Authorizations</label>\n                    <div class=\"col-sm-6\">\n                        <span class=\"form-control-static\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "authorization", "in", "model.authorizations", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"timzeoneButton\" class=\"col-sm-2 control-label\">Timezone</label>\n                    <label style=\"margin-left:15px;\" class=\"label label-info\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentTimezone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp;&nbsp;<i class=\"fa fa-map-marker\" id = \"timzeoneButton\"></i></label>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"main-content-details-bottom-bar\">\n        ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("New"),
    'disabled': ("isNotManageable"),
    'clicked': ("create")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Edit"),
    'disabled': ("isNotManageable"),
    'clicked': ("edit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            <label style=\"width:10px\"></label>\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("danger"),
    'title': ("Delete"),
    'disabled': ("isNotManageable"),
    'clicked': ("delete")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message.isTypeSuccess", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0};
  hashTypes = {'message': "ID",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"};
  options = {hash:{
    'message': ("message.messageText"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    ");
  hashContexts = {'content': depth0,'type': depth0};
  hashTypes = {'content': "ID",'type': "STRING"};
  options = {hash:{
    'content': ("organization.name"),
    'type': ("info")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-label'] || (depth0 && depth0['bs-label'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-label", options))));
  data.buffer.push("\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                ");
  hashContexts = {'content': depth0,'type': depth0};
  hashTypes = {'content': "ID",'type': "STRING"};
  options = {hash:{
    'content': ("authorization.name"),
    'type': ("info")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-label'] || (depth0 && depth0['bs-label'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-label", options))));
  data.buffer.push("\n                            ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content-details")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["license/install"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div >\n    <h2 style=\"margin-top: 0px; margin-bottom: 30px;\">Install License</h2>\n\n    <form role=\"form\">\n        <div class=\"form-group\">\n            <label>Site Name</label>\n            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("siteName"),
    'class': ("form-control"),
    'id': ("siteName")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            changing it will overwrite existing site name\n        </div>\n        <div class=\"form-group\">\n            <label> Cluster Key</label>\n            ");
  hashContexts = {'valueBinding': depth0,'rows': depth0,'class': depth0,'style': depth0,'disabled': depth0};
  hashTypes = {'valueBinding': "ID",'rows': "STRING",'class': "STRING",'style': "STRING",'disabled': "BOOLEAN"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("clusterKey"),
    'rows': ("2"),
    'class': ("form-control"),
    'style': ("width:100%; resize: none;"),
    'disabled': (true)
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n\n        <div class=\"form-group\">\n            <label> Paste your new license key below</label>\n            ");
  hashContexts = {'valueBinding': depth0,'rows': depth0,'class': depth0,'style': depth0};
  hashTypes = {'valueBinding': "STRING",'rows': "STRING",'class': "STRING",'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("licenseKey"),
    'rows': ("8"),
    'class': ("form-control"),
    'style': ("width:100%; resize: none;")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            Saving will overwrite and and replace your existing license key.\n        </div>\n    </form>\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class=\"btn-group pull-right\">\n        ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("Cancel"),
    'disabled': ("isNotDirty"),
    'clicked': ("cancel")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Save License"),
    'disabled': ("isNotDirty"),
    'clicked': ("installLicense")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n    </div>\n\n</div>");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["license/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <h5 style='display: inline;'>Expiration Date:</h5> <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.expiration", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        <h5>Organization</h5>\n        <ul>\n            <li>Name: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.organization.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li>Contact Name: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.organization.contactName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li>Address: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.organization.address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li>Contact phone: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.organization.contactPhone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li>Contact email: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.organization.contactEmail", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n        </ul>\n        <h5>Products: </h5>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "product", "in", "item.products", {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            <ul>\n                <li>Name: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "product.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "product.version", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                <li>Modules:\n                    <ul>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "module", "in", "product.moduleVersions", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n                </li>\n            </ul>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "module.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "module.version", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n            <span class=\"label label-info\">Nothing to display</span>\n        ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"label label-info\">Nothing to display</span>\n    ");
  }

  data.buffer.push("<div>\n\n    <h2 style=\"margin-top: 0px; margin-bottom: 30px;\">License</h2>\n    <h5 style='display: inline;'>Site:</h5> <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "siteName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n\n    <div style='word-break: break-all;'>\n        <h5 style='display: inline;'>Cluster Key:</h5> <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "clusterKey", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n    </div>\n\n    <hr style=\"color:rgb(244,22,22);background-color:rgb(244,22,22);height:1px;border:none; \"/>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "item", "in", "licenseKeys", {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    <div style=\"min-width: 100%;\">\n        ");
  hashContexts = {'type': depth0,'title': depth0,'clicked': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'clicked': "STRING",'class': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Install License"),
    'clicked': ("installLicense"),
    'class': ("pull-right")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n    </div>\n\n</div>");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["organization/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"scrollable\">\n        <div class=\"container\">\n            <div class=\"content-panel-heading\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.name"),
    'class': ("form-control"),
    'id': ("inputName")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputAddress\" class=\"col-sm-2 control-label\">Address</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.address"),
    'class': ("form-control"),
    'id': ("inputAddress")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputContactName\" class=\"col-sm-2 control-label\">Contact Name</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.contactName"),
    'class': ("form-control"),
    'id': ("inputContactName")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputContactPhone\" class=\"col-sm-2 control-label\">Contact Phone</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.contactPhone"),
    'class': ("form-control"),
    'id': ("inputContactPhone")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputContactEmail\" class=\"col-sm-2 control-label\">Contact Email</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.contactEmail"),
    'class': ("form-control"),
    'id': ("inputContactEmail")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputDmrId\" class=\"col-sm-2 control-label\">DMR ID</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.dmrId"),
    'class': ("form-control"),
    'id': ("inputDmrId")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"InputAssetIdPrefix\" class=\"col-sm-2 control-label\">Asset ID Prefix</label>\n\n                    <div class=\"col-sm-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0};
  hashTypes = {'valueBinding': "ID",'class': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.assetIdPrefix"),
    'class': ("form-control"),
    'id': ("InputAssetIdPrefix")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"main-content-details-bottom-bar\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Save"),
    'disabled': ("isNotDirty"),
    'clicked': ("save")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            ");
  hashContexts = {'type': depth0,'title': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("Cancel"),
    'clicked': ("cancel")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message.isTypeSuccess", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0};
  hashTypes = {'message': "ID",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"};
  options = {hash:{
    'message': ("message.messageText"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content-details")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["organization/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, options, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"content-panel-heading\"><h1>No organization selected</h1></div>\n\n    <footer class=\"content-form-footer\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("New"),
    'disabled': ("isNewButtonDisabled"),
    'clicked': ("create")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['page-panel']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0['page-panel']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['page-panel']) { stack1 = blockHelperMissing.call(depth0, 'page-panel', options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["organization/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"scrollable\">\n        <div class=\"container\">\n            <div class=\"content-panel-heading\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "message", "in", "messages", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Address</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputApiKey\" class=\"col-sm-2 control-label\">Contact Name</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.contactName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Contact Phone</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.contactPhone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Contact Email</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.contactEmail", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">DMR ID</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.dmrId", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Asset ID Prefix</label>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.assetIdPrefix", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"main-content-details-bottom-bar\">\n        ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("default"),
    'title': ("New"),
    'disabled': ("isNotManageable"),
    'clicked': ("create")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Edit"),
    'disabled': ("isNotManageable"),
    'clicked': ("edit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "message.isTypeSuccess", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0};
  hashTypes = {'message': "ID",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"};
  options = {hash:{
    'message': ("message.messageText"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                    ");
  hashContexts = {'message': depth0,'type': depth0};
  hashTypes = {'message': "ID",'type': "STRING"};
  options = {hash:{
    'message': ("message"),
    'type': ("danger")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-alert'] || (depth0 && depth0['bs-alert'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

  hashContexts = {'class': depth0,'style': depth0};
  hashTypes = {'class': "STRING",'style': "STRING"};
  options = {hash:{
    'class': ("main-content-details"),
    'style': ("background-color:red")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["profile/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <header class=\"main-content-header\">\n        <ul class=\"breadcrumb\">\n            <li><i class=\"fa fa-user\"></i> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "session.identity.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li>Profile</li>\n            <li>Edit\n                <span class=\"actions\">\n                    <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</a>\n                    <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</a>\n                </span>\n            </li>\n        </ul>\n    </header>\n\n    <div class=\"scrollable\">\n        <div class=\"container-fluid panel-body\">\n            <form class=\"form-horizontal col-sm-8\" role=\"form\">\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"nameField\">Name</label>\n                    <div class=\"controls col-sm-10\">\n                        ");
  hashContexts = {'class': depth0,'id': depth0,'valueBinding': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("form-control"),
    'id': ("nameField"),
    'valueBinding': ("model.name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"email\">Email</label>\n                    <div class=\"controls col-sm-10\">\n                        ");
  hashContexts = {'class': depth0,'id': depth0,'valueBinding': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("form-control"),
    'id': ("emailField"),
    'valueBinding': ("model.clientId")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"apiKey\">API Key</label>\n                    <div class=\"controls input-group col-sm-10\">\n                        ");
  hashContexts = {'class': depth0,'id': depth0,'valueBinding': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("form-control"),
    'id': ("apiKey"),
    'valueBinding': ("model.apiKey")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\">Generate</button>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"password\">Password</label>\n\n                    <div class=\"controls col-sm-10\">\n                        ");
  hashContexts = {'class': depth0,'id': depth0,'placeholder': depth0,'type': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'placeholder': "STRING",'type': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("form-control"),
    'id': ("password"),
    'placeholder': ("New password"),
    'type': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\"></label>\n                    <div class=\"controls col-sm-10\">\n                        ");
  hashContexts = {'class': depth0,'id': depth0,'placeholder': depth0,'type': depth0};
  hashTypes = {'class': "STRING",'id': "STRING",'placeholder': "STRING",'type': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("form-control"),
    'id': ("confirmedPassword"),
    'placeholder': ("Confirm password"),
    'type': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"form-group\">\n                    <label class = \"control-label col-sm-2\">Display Clock</label>\n                    ");
  hashContexts = {'id': depth0,'class': depth0,'checkedBinding': depth0};
  hashTypes = {'id': "STRING",'class': "STRING",'checkedBinding': "STRING"};
  options = {hash:{
    'id': ("display-clock-flip-switch"),
    'class': ("col-sm-2"),
    'checkedBinding': ("showClock")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['flip-switch'] || (depth0 && depth0['flip-switch'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "flip-switch", options))));
  data.buffer.push("\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"activeTimezoneButton\" class=\"col-sm-2 control-label\">Active Timezone</label>\n                    <button id =\"activeTimezoneButton\" style=\"margin-left:13px; margin-top: 5px;\" class=\"btn btn-primary btn-xs\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showTimezoneDialog", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentTimezone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp;&nbsp;<i class=\"fa fa-map-marker\"></i></button>\n\n                </div>\n                <div class=\"form-group\">\n                    <label class = \"control-label col-sm-2\">Clock Timezones</label>\n                    <div class=\"controls col-sm-10\" style=\"margin-top: 5px;\">\n                          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "clockTimezones", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                          <button id =\"addTimezoneButton\" class=\"btn btn-primary btn-xs\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAddTimezoneDialog", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                  title=\"Add a timezone to the display clock\"><i class=\"fa fa-plus-circle\"></i></button>\n\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"content-form-footer\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'title': depth0,'type': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'title': "STRING",'type': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'title': ("Cancel"),
    'type': ("warning"),
    'disabled': ("isCancelButtonDisabled"),
    'clicked': ("cancel")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Save"),
    'disabled': ("isSaveButtonDisabled"),
    'clicked': ("save")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                              <span>\n                                  <label class=\"label label-info\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n                                  <button style=\"position: relative; right:8px;\" class=\"btn btn-xs btn-link\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeTz", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" title=\"Remove this timezone from the display clock\">\n                                      <i class=\"fa fa-times\"></i>\n                                  </button>\n                             </span>\n                          ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["profile/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <header class=\"main-content-header\">\n        <ul class=\"breadcrumb\">\n            <li><i class=\"fa fa-user\"></i> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "session.identity.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li>Profile\n                <span class=\"actions\">\n                    <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Edit</a>\n                </span>\n            </li>\n        </ul>\n    </header>\n\n    <div class=\"scrollable\">\n        <div class=\"container\">\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">Name</label>\n                    <div class=\"col-sm-6 controls\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">Email</label>\n                    <div class=\"col-sm-6 controls\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.clientId", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">API key</label>\n                    <div class=\"col-sm-6 controls\">\n                        <div class=\"form-control-static\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.apiKey", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class = \"control-label col-sm-2\">Display Clock</label>\n                    <div class=\"col-sm-2\" style=\"margin-top: 8px;\">\n                        <label>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "showClockDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"activeTimezoneButton\" class=\"col-sm-2 control-label\">Active Timezone</label>\n                    <div class=\"controls col-sm-10\" style=\"margin-top: 5px;\">\n                      <label class=\"label label-info\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentTimezone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class = \"control-label col-sm-2\">Clock Timezones</label>\n                    <div class=\"controls col-sm-10\" style=\"margin-top: 5px;\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "clockTimezones", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <footer class=\"content-form-footer\">\n        <div class=\"content-form-footer-right-align\">\n            ");
  hashContexts = {'type': depth0,'title': depth0,'disabled': depth0,'clicked': depth0};
  hashTypes = {'type': "STRING",'title': "STRING",'disabled': "ID",'clicked': "STRING"};
  options = {hash:{
    'type': ("primary"),
    'title': ("Edit"),
    'disabled': ("isEditButtonDisabled"),
    'clicked': ("edit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bs-button'] || (depth0 && depth0['bs-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n        </div>\n    </footer>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <span>\n                                  <label class=\"label label-info\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n                             </span>\n                        ");
  return buffer;
  }

  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("main-content")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['page-panel'] || (depth0 && depth0['page-panel'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "page-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});