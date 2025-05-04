--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8
-- Dumped by pg_dump version 16.8

-- Started on 2025-05-04 19:05:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 16515)
-- Name: court_sports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.court_sports (
    court_id integer NOT NULL,
    sport_id integer NOT NULL
);


ALTER TABLE public.court_sports OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16505)
-- Name: courts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courts (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    city character varying(50) NOT NULL,
    country character(2) NOT NULL,
    address character varying(150) NOT NULL,
    g_maps character varying NOT NULL
);


ALTER TABLE public.courts OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16504)
-- Name: courts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courts_id_seq OWNER TO postgres;

--
-- TOC entry 4921 (class 0 OID 0)
-- Dependencies: 225
-- Name: courts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courts_id_seq OWNED BY public.courts.id;


--
-- TOC entry 230 (class 1259 OID 16554)
-- Name: game_players; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_players (
    game_id integer NOT NULL,
    user_id integer NOT NULL,
    presence boolean,
    player_grade integer
);


ALTER TABLE public.game_players OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16531)
-- Name: games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.games (
    id integer NOT NULL,
    sport_id integer NOT NULL,
    court_id integer NOT NULL,
    game_time timestamp without time zone NOT NULL,
    best_player_id integer
);


ALTER TABLE public.games OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16530)
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.games_id_seq OWNER TO postgres;

--
-- TOC entry 4922 (class 0 OID 0)
-- Dependencies: 228
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- TOC entry 224 (class 1259 OID 16484)
-- Name: player_favorite_position; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player_favorite_position (
    user_id integer NOT NULL,
    sport_id integer NOT NULL,
    position_id integer NOT NULL,
    added_at date NOT NULL
);


ALTER TABLE public.player_favorite_position OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16420)
-- Name: sports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sports (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.sports OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16419)
-- Name: sports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sports_id_seq OWNER TO postgres;

--
-- TOC entry 4923 (class 0 OID 0)
-- Dependencies: 215
-- Name: sports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sports_id_seq OWNED BY public.sports.id;


--
-- TOC entry 218 (class 1259 OID 16427)
-- Name: sports_positions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sports_positions (
    id integer NOT NULL,
    sport_id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.sports_positions OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16426)
-- Name: sports_positions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sports_positions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sports_positions_id_seq OWNER TO postgres;

--
-- TOC entry 4924 (class 0 OID 0)
-- Dependencies: 217
-- Name: sports_positions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sports_positions_id_seq OWNED BY public.sports_positions.id;


--
-- TOC entry 220 (class 1259 OID 16440)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    nickname character varying(20) NOT NULL,
    xp integer NOT NULL,
    favorite_sport integer,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16453)
-- Name: user_accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_accounts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    provider character varying(30) NOT NULL,
    provider_account_id character varying(100) NOT NULL,
    access_token text,
    refresh_token text,
    token_expires timestamp without time zone,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.user_accounts OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16452)
-- Name: user_accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_accounts_id_seq OWNER TO postgres;

--
-- TOC entry 4925 (class 0 OID 0)
-- Dependencies: 221
-- Name: user_accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_accounts_id_seq OWNED BY public.user_accounts.id;


--
-- TOC entry 219 (class 1259 OID 16439)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 4926 (class 0 OID 0)
-- Dependencies: 219
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 223 (class 1259 OID 16470)
-- Name: user_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_info (
    user_id integer NOT NULL,
    email character varying(100) NOT NULL,
    phone character varying(30),
    birthday date,
    city character varying(50),
    state character(2),
    country character(2),
    address character varying(150)
);


ALTER TABLE public.user_info OWNER TO postgres;

--
-- TOC entry 4724 (class 2604 OID 16508)
-- Name: courts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courts ALTER COLUMN id SET DEFAULT nextval('public.courts_id_seq'::regclass);


--
-- TOC entry 4725 (class 2604 OID 16534)
-- Name: games id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- TOC entry 4719 (class 2604 OID 16423)
-- Name: sports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sports ALTER COLUMN id SET DEFAULT nextval('public.sports_id_seq'::regclass);


--
-- TOC entry 4720 (class 2604 OID 16430)
-- Name: sports_positions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sports_positions ALTER COLUMN id SET DEFAULT nextval('public.sports_positions_id_seq'::regclass);


--
-- TOC entry 4721 (class 2604 OID 16443)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 4722 (class 2604 OID 16456)
-- Name: user_accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts ALTER COLUMN id SET DEFAULT nextval('public.user_accounts_id_seq'::regclass);


--
-- TOC entry 4752 (class 2606 OID 16519)
-- Name: court_sports court_sports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.court_sports
    ADD CONSTRAINT court_sports_pkey PRIMARY KEY (court_id, sport_id);


--
-- TOC entry 4748 (class 2606 OID 16512)
-- Name: courts courts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courts
    ADD CONSTRAINT courts_pkey PRIMARY KEY (id);


--
-- TOC entry 4758 (class 2606 OID 16558)
-- Name: game_players game_players_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_players
    ADD CONSTRAINT game_players_pkey PRIMARY KEY (game_id, user_id);


--
-- TOC entry 4754 (class 2606 OID 16536)
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- TOC entry 4746 (class 2606 OID 16488)
-- Name: player_favorite_position player_favorite_position_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_favorite_position
    ADD CONSTRAINT player_favorite_position_pkey PRIMARY KEY (user_id, sport_id);


--
-- TOC entry 4727 (class 2606 OID 16425)
-- Name: sports sports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sports
    ADD CONSTRAINT sports_pkey PRIMARY KEY (id);


--
-- TOC entry 4730 (class 2606 OID 16432)
-- Name: sports_positions sports_positions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sports_positions
    ADD CONSTRAINT sports_positions_pkey PRIMARY KEY (id);


--
-- TOC entry 4736 (class 2606 OID 16463)
-- Name: user_accounts uq_provider_account; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts
    ADD CONSTRAINT uq_provider_account UNIQUE (provider, provider_account_id);


--
-- TOC entry 4738 (class 2606 OID 16461)
-- Name: user_accounts user_accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts
    ADD CONSTRAINT user_accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 4744 (class 2606 OID 16474)
-- Name: user_info user_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4733 (class 2606 OID 16445)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 4749 (class 1259 OID 16514)
-- Name: idx_courts_city; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_courts_city ON public.courts USING btree (city);


--
-- TOC entry 4750 (class 1259 OID 16513)
-- Name: idx_courts_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_courts_name ON public.courts USING btree (name);


--
-- TOC entry 4755 (class 1259 OID 16553)
-- Name: idx_games_best_player_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_games_best_player_id ON public.games USING btree (best_player_id);


--
-- TOC entry 4756 (class 1259 OID 16552)
-- Name: idx_games_court; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_games_court ON public.games USING btree (court_id);


--
-- TOC entry 4728 (class 1259 OID 16438)
-- Name: idx_sports_positions_sport_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_sports_positions_sport_id ON public.sports_positions USING btree (sport_id);


--
-- TOC entry 4734 (class 1259 OID 16469)
-- Name: idx_user_accounts_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_accounts_user_id ON public.user_accounts USING btree (user_id);


--
-- TOC entry 4739 (class 1259 OID 16480)
-- Name: idx_user_info_birthday; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_info_birthday ON public.user_info USING btree (birthday);


--
-- TOC entry 4740 (class 1259 OID 16481)
-- Name: idx_user_info_city; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_info_city ON public.user_info USING btree (city);


--
-- TOC entry 4741 (class 1259 OID 16483)
-- Name: idx_user_info_country; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_info_country ON public.user_info USING btree (country);


--
-- TOC entry 4742 (class 1259 OID 16482)
-- Name: idx_user_info_state; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_info_state ON public.user_info USING btree (state);


--
-- TOC entry 4731 (class 1259 OID 16451)
-- Name: idx_user_xp; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_xp ON public."user" USING btree (xp);


--
-- TOC entry 4766 (class 2606 OID 16520)
-- Name: court_sports fk_court_sports_court; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.court_sports
    ADD CONSTRAINT fk_court_sports_court FOREIGN KEY (court_id) REFERENCES public.courts(id);


--
-- TOC entry 4767 (class 2606 OID 16525)
-- Name: court_sports fk_court_sports_sport; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.court_sports
    ADD CONSTRAINT fk_court_sports_sport FOREIGN KEY (sport_id) REFERENCES public.sports(id);


--
-- TOC entry 4760 (class 2606 OID 16446)
-- Name: user fk_favorite_sport; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_favorite_sport FOREIGN KEY (favorite_sport) REFERENCES public.sports(id);


--
-- TOC entry 4771 (class 2606 OID 16559)
-- Name: game_players fk_game_players_game; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_players
    ADD CONSTRAINT fk_game_players_game FOREIGN KEY (game_id) REFERENCES public.games(id);


--
-- TOC entry 4772 (class 2606 OID 16564)
-- Name: game_players fk_game_players_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_players
    ADD CONSTRAINT fk_game_players_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 4768 (class 2606 OID 16547)
-- Name: games fk_games_best_player; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_games_best_player FOREIGN KEY (best_player_id) REFERENCES public."user"(id);


--
-- TOC entry 4769 (class 2606 OID 16542)
-- Name: games fk_games_court; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_games_court FOREIGN KEY (court_id) REFERENCES public.courts(id);


--
-- TOC entry 4770 (class 2606 OID 16537)
-- Name: games fk_games_sport; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_games_sport FOREIGN KEY (sport_id) REFERENCES public.sports(id);


--
-- TOC entry 4763 (class 2606 OID 16499)
-- Name: player_favorite_position fk_pfp_position; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_favorite_position
    ADD CONSTRAINT fk_pfp_position FOREIGN KEY (position_id) REFERENCES public.sports_positions(id);


--
-- TOC entry 4764 (class 2606 OID 16494)
-- Name: player_favorite_position fk_pfp_sport; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_favorite_position
    ADD CONSTRAINT fk_pfp_sport FOREIGN KEY (sport_id) REFERENCES public.sports(id);


--
-- TOC entry 4765 (class 2606 OID 16489)
-- Name: player_favorite_position fk_pfp_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_favorite_position
    ADD CONSTRAINT fk_pfp_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 4759 (class 2606 OID 16433)
-- Name: sports_positions fk_sports_positions_sport; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sports_positions
    ADD CONSTRAINT fk_sports_positions_sport FOREIGN KEY (sport_id) REFERENCES public.sports(id);


--
-- TOC entry 4761 (class 2606 OID 16464)
-- Name: user_accounts fk_user_accounts_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts
    ADD CONSTRAINT fk_user_accounts_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 4762 (class 2606 OID 16475)
-- Name: user_info fk_user_info_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT fk_user_info_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


-- Completed on 2025-05-04 19:05:43

--
-- PostgreSQL database dump complete
--

