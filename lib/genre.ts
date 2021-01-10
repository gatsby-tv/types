/*
 * Genres describe the delivery format of a video.
 */
export enum Genre {
  /*
   * Analysis is a breakdown of information. These kinds of
   * videos study a particular subject with the intent of sharing
   * potentially unique observations and/or insights on the subject.
   */
  Analysis = "Analysis",

  /*
   * Clips are short subsections of other videos or (more commonly)
   * livestreams.
   */
  Clip = "Clip",

  /*
   * A Collaboration is a video dedicated to the display and celebration
   * of a variety of artists/creators by working on a team-based project.
   */
  Collaboration = "Collaboration",

  /*
   * Commentary is a versatile format dedicated to the sharing of opinions.
   * Usually, these opinions are on current/recent events or the public
   * actions of others.
   */
  Commentary = "Commentary",

  /*
   * A Compilation is a collection of clips.
   */
  Compilation = "Compilation",

  /*
   * Courses are videos dedicated to education. These kinds of videos
   * choose a particular topic or subject and provide viewers an in-depth
   * introduction to it. Typically, this genre is expected to be used to
   * describe shows rather than individual videos.
   */
  Course = "Course",

  /*
   * Criticism refers to the practice of studying, evaluating, and
   * iterpreting media and art.
   *
   * Unfortunately, it is also expected that this genre will be used by
   * some to berate said media/art; or, even more begrudgingly, other
   * people.
   */
  Criticism = "Criticism",

  /*
   * DIY is a demonstration of creative talents for things such as crafting.
   * This genre may also be used for specific kinds of Tutorial video.
   */
  DIY = "DIY",

  /*
   * Documentary is a video that documents historical events into a single,
   * cohesive narrative.
   */
  Documentary = "Documentary",

  /*
   * Essays are videos dedicated to the formal presentation of thoughts and
   * ideas on a specific theme.
   */
  Essay = "Essay",

  /*
   * Freeform is a placeholder genre for videos that don't quite match any
   * other genre.
   */
  Freeform = "Freeform",

  /*
   * A Guide is an extended Tutorial that provides deep instructions for a
   * particular subject.
   */
  Guide = "Guide",

  /*
   * Highlights are a particular type of compilation where each clip comes
   * from a single --- typically long --- video, livestream, or event.
   */
  Highlights = "Highlights",

  /*
   * Lectures are self-contained educational videos. May also be used to
   * describe recordings of live lectures.
   */
  Lecture = "Lecture",

  /*
   * LetsPlay is a gaming specific genre that presents a commentated
   * playthrough of a video game.
   */
  LetsPlay = "LetsPlay",

  /*
   * A Livestream is a recording of live content.
   */
  Livestream = "Livestream",

  /*
   * Memes are listed as a genre for insurance reasons.
   */
  Meme = "Meme",

  /*
   * Music Videos are filmic complements to musical compositions.
   */
  MusicVideo = "Music Video",

  /*
   * Performances are demonstrations of talent.
   */
  Performance = "Performance",

  /*
   * Playthrough is a generic variation of a LetsPlay. Where LetsPlays
   * tend to focus on the personalities commentating, a Playthrough
   * promises a more significant focus on the video game being played.
   */
  Playthrough = "Playthrough",

  /*
   * Podcasts are recordings of live podcasts.
   */
  Podcast = "Podcast",

  /*
   * Pranks comprise a genre with a detestable reputation --- representing
   * comedy videos that document the deception of others.
   */
  Prank = "Prank",

  /*
   * Q&A is short for "Questions and Answers." These videos are often a
   * shift in format where a creator answers questions submitted by viewers.
   */
  QandA = "Q&A",

  /*
   * Rankings are videos that sort media (or other items) by a certain
   * quality.
   */
  Ranking = "Ranking",

  /*
   * A Reaction video presents the expressions and commentary of an individual
   * viewing, hearing, or playing a popular piece of media for the first time.
   */
  Reaction = "Reaction",

  /*
   * Responses are an uncommon type of video where the creator
   * commentates on or addresses what is usually a Commentary or Criticism
   * video posted by another creator.
   */
  Response = "Response",

  /*
   * Reviews are a lighter form of criticism that evaluates the quality of
   * a piece of media or product with the intent to educate prospective
   * consumers.
   */
  Review = "Review",

  /*
   * Short Films are creative works that are commonly produced by an
   * independently funded creator or team. These videos are most often
   * intended to deliver a fictional narrative.
   */
  ShortFilm = "Short Film",

  /*
   * Sketches are a varient of Short Film characterized by their brevity,
   * makeshift production, and loose narrative structures.
   */
  Sketch = "Sketch",

  /*
   * Speedruns are a subset of the Playthrough genre dedicated to the
   * competitive completion of video games.
   */
  Speedrun = "Speedrun",

  /*
   * StoryTime is a unique genre where the creator narrates a story --- most
   * often of events in the creator's own life.
   */
  StoryTime = "StoryTime",

  /*
   * Tutorials provide instruction for performing a kind of task or objective.
   */
  Tutorial = "Tutorial",

  /*
   * Updates are a genre used to describe short videos that provide
   * information to a creator's audience regarding the progression or
   * evolution of an ongoing project or situation.
   */
  Update = "Update",

  /*
   * Vlogs document the everyday life of the creator. Usually with
   * narrations from the creator that describe their observations, thoughts,
   * or feelings.
   */
  Vlog = "Vlog",

  /*
   * Walkthroughs are extended Tutorials specific to gaming. Walkthroughs
   * describe sequences of tasks and how to perform them rather than focusing
   * on any particular task.
   */
  Walkthrough = "Walkthrough",
}
