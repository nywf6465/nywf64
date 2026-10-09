import styles from "./nyplRecordsSource.module.css";

/** Centered NYPL archive credit block (legacy worfoo essay pages). */
export function NyplRecordsSource() {
  return (
    <div className={styles.block}>
      <p className={styles.line}>
        Source: New York World&apos;s Fair 1964-1965 Corporation Records,
      </p>
      <p className={styles.line}>
        Source: Manuscripts and Archives Division,{" "}
        <em>The New York Public Library</em>,
      </p>
      <p className={styles.line}>
        Source: Astor, Lenox and Tilden Foundations
      </p>
      <p className={styles.line}>
        Source: Reproduced here courtesy of <em>The New York Public Library</em>
        , with permission
      </p>
      <p className={styles.line}>
        Source: May <u>not</u> be reproduced without written consent of{" "}
        <em>The New York Public Library</em>
      </p>
    </div>
  );
}
