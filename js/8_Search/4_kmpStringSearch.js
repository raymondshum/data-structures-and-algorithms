/**
 * KMP String Search
 */

/**
 * Pattern: abcdabc
 * prefix (left): a, ab, abc, abcd
 * suffix (right): c, bc, abc, dabc
 * 
 * Idea: Is there any prefix == suffix?
 * - Yes, abc == abc
 * 
 * In other words, is there a component at the start of the pattern that
 * appears anywhere else in the pattern?
 * 
 * LPS table
 * You're building a table that repeating elements
 *                        
 * 0 1 2 3 4 5 6 7 8 9 10 [index] 
 * a b c d e a b f a b c  [string]
 * 0 0 0 0 0 1 2 0 1 2 3  [table (index+1)] <- Prob. cause 0 show neg. res.
 */

/**
 * Algorithm trace
 */

/**
 * Return to implement
 */