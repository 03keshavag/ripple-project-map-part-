import StoryCard from './StoryCard';

/**
 * DiscoveryList — a browsable grid of story cards as an alternative to the
 * map view. Pure presentational: receives already-filtered acts + a ripple
 * callback.
 */
export default function DiscoveryList({ acts, onRipple }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {acts.map((act) => (
        <StoryCard key={act.id} act={act} onRipple={onRipple} />
      ))}
    </div>
  );
}