const MobileCameraTest: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <h1>Camera</h1>
        <p>Expected: open camera</p>
        <pre>&lt;input type=&quot;file&quot; accept=&quot;image/*&quot; capture=&quot;environment&quot; /&gt;</pre>
        <input type="file" accept="image/*" capture="environment" />
      </div>
      <div>
        <h1>Album</h1>
        <p>Expected: open album on android</p>
        <pre>&lt;input type=&quot;file&quot; accept=&quot;image/*&quot; /&gt;</pre>
        <input type="file" accept="image/*" />
      </div>
      <div>
        <h1>Camera + Album</h1>
        <p>Expected: both camera and album are supported</p>
        <pre>&lt;input type=&quot;file&quot; accept=&quot;image/*;capture=camera&quot; /&gt;</pre>
        <input type="file" accept="image/*;capture=camera" />
      </div>
    </div>
  );
};

export default MobileCameraTest;
