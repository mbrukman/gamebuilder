// Copyright 2009 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var games = gamebuilder.games = {};

/**
 * @param {number} m
 * @param {number} n
 * @constructor
 */
games.BoardMxN = function(m, n) {
  /**
   * @type {Array.<Array.<?>>}
   */
  this.board_ = [];
  for (var i = 0; i < n; ++i) {
    this.board_[i] = [];
    for (var j = 0; j < m; ++j) {
      this.board_[i][j] = null;
    }
  }
};

/**
 * @param {number} n
 * @constructor
 */
games.BoardNxN = function(n) {
  games.BoardMxN.call(this, n, n);
};
gamebuilder.util.inherits(games.BoardNxN, games.BoardMxN);

games.BoardNxN.prototype.placePiece = function(piece, coords) {
  this.board_[coords[0]][coords[1]] = piece;
};

/**
 * Given a string board position, converts it into an ordered pair (x, y),
 * e.g. 'j10' becomes (10, 10). The input is 1-based and lower-case, so
 * 'a1' is the lower-left corner; and 'a0' is invalid.
 *
 * The output is zero-based pair of array indices.
 *
 * @param name A string position such as "j10".
 * @return {Array<number>} Array of 2 ints representing the position.
 */
games.stringPosToCoords = function(name) {
  if (name.length < 2) {
    throw new Exception('Invalid format of coordinates: ' + name)
  }
  return [name.charCodeAt(0) - 'a'.charCodeAt(0),
          name.substr(1, name.length) - 1];
};

/**
 * This is the inverse of stringPosToCoords().
 *
 * @param {Array.<number>} coords A pair of integers, representing a position
 *     on the board, implementation-specific; not user-visible.
 * @param {string} A lower-case string position such as 'i5'.
 */
games.coordsToStringPos = function(coords) {
  return String.fromCharCode('a'.charCodeAt(0) + coords[1]) + (coords[0] + 1);
};
