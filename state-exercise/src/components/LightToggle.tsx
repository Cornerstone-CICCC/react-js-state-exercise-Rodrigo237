type LightToggleProps = {
    setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LightToggle = ({ setIsLightsOn }: LightToggleProps) => {
  return (
    <div>
      <button onClick={() => setIsLightsOn(prev => !prev)}>
        Toggle Lights
      </button>
    </div>
  )
}

export default LightToggle;
