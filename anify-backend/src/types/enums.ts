export const enum Type {
    ANIME = "ANIME",
    MANGA = "MANGA",
}

export const enum Sort {
    SCORE = "averageRating",
    POPULARITY = "averagePopularity",
    TITLE = "title",
    YEAR = "year",
    TOTAL_EPISODES = "episodes",
    TOTAL_CHAPTERS = "chapters",
    TOTAL_VOLUMES = "volumes",
}

export const Sorts = [Sort.SCORE, Sort.POPULARITY, Sort.TITLE, Sort.YEAR, Sort.TOTAL_EPISODES, Sort.TOTAL_CHAPTERS, Sort.TOTAL_VOLUMES];

export const enum SortDirection {
    ASC = "ASC",
    DESC = "DESC",
}

export const enum ProviderType {
    ANIME = "ANIME",
    MANGA = "MANGA",
    META = "META",
    INFORMATION = "INFORMATION",
    BASE = "BASE",
}

export const enum Format {
    TV = "TV",
    TV_SHORT = "TV_SHORT",
    MOVIE = "MOVIE",
    SPECIAL = "SPECIAL",
    OVA = "OVA",
    ONA = "ONA",
    MUSIC = "MUSIC",
    MANGA = "MANGA",
    NOVEL = "NOVEL",
    ONE_SHOT = "ONE_SHOT",
    UNKNOWN = "UNKNOWN",
}

export const Formats = [Format.TV, Format.TV_SHORT, Format.MOVIE, Format.SPECIAL, Format.OVA, Format.ONA, Format.MUSIC, Format.MANGA, Format.NOVEL, Format.ONE_SHOT, Format.UNKNOWN];

export const enum Season {
    WINTER = "WINTER",
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    FALL = "FALL",
    UNKNOWN = "UNKNOWN",
}

export const enum MediaStatus {
    FINISHED = "FINISHED",
    RELEASING = "RELEASING",
    NOT_YET_RELEASED = "NOT_YET_RELEASED",
    CANCELLED = "CANCELLED",
    HIATUS = "HIATUS",
}

export const enum Genres {
    ACTION = "Action",
    ADVENTURE = "Adventure",
    ANIME_INFLUENCED = "Anime Influenced",
    AVANT_GARDE = "Avant Garde",
    AWARD_WINNING = "Award Winning",
    BOYS_LOVE = "Boys Love",
    CARS = "Cards",
    COMEDY = "Comedy",
    DEMENTIA = "Dementia",
    DEMONS = "Demons",
    DOUJINSHI = "Doujinshi",
    DRAMA = "Drama",
    ECCHI = "Ecchi",
    EROTICA = "Erotica",
    FAMILY = "Family",
    FANTASY = "Fantasy",
    FOOD = "Food",
    FRIENDSHIP = "Friendship",
    GAME = "Game",
    GENDER_BENDER = "Gender Bender",
    GIRLS_LOVE = "Girls Love",
    GORE = "Gore",
    GOURMET = "Gourmet",
    HAREM = "Harem",
    HENTAI = "Hentai",
    HISTORICAL = "Historical",
    HORROR = "Horror",
    ISEKAI = "Isekai",
    KIDS = "Kids",
    MAGIC = "Magic",
    MAHOU_SHOUJO = "Mahou Shoujo",
    MARTIAL_ARTS = "Martial Arts",
    MECHA = "Mecha",
    MEDICAL = "Medical",
    MILITARY = "Military",
    MUSIC = "Music",
    MYSTERY = "Mystery",
    PARODY = "Parody",
    POLICE = "Police",
    POLITICAL = "Political",
    PSYCHOLOGICAL = "Psychological",
    RACING = "Racing",
    ROMANCE = "Romance",
    SAMURAI = "Samurai",
    SCHOOL = "School",
    SCI_FI = "Sci-Fi",
    SHOUJO_AI = "Shoujo Ai",
    SHOUNEN_AI = "Shounen Ai",
    SLICE_OF_LIFE = "Slice of Life",
    SPACE = "Space",
    SPORTS = "Sports",
    SUPER_POWER = "Super Power",
    SUPERNATURAL = "Supernatural",
    SUSPENCE = "Suspence",
    THRILLER = "Thriller",
    VAMPIRE = "Vampire",
    WORKPLACE = "Workplace",
    YAOI = "Yaoi",
    YURI = "Yuri",
    ZOMBIES = "Zombies",
}

export const enum SubType {
    DUB = "dub",
    SUB = "sub",
}

export const enum StreamingServers {
    AsianLoad = "asianload",
    GogoCDN = "gogocdn",
    StreamSB = "streamsb",
    MixDrop = "mixdrop",
    UpCloud = "upcloud",
    VidCloud = "vidcloud",
    StreamTape = "streamtape",
    VizCloud = "vidplay",
    MyCloud = "mycloud",
    Filemoon = "filemoon",
    VidStreaming = "vidstreaming",
    AllAnime = "allanime",
    FPlayer = "fplayer",
    Kwik = "kwik",
    DuckStream = "duckstream",
    DuckStreamV2 = "duckstreamv2",
    BirdStream = "birdstream",
    AnimeFlix = "animeflix",
}
