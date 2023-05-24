ALTER TABLE albums
  ADD COLUMN artist_id INT REFERENCES artists(id)