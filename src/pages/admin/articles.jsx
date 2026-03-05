import styles from './articles.module.css'

export default function Articles () {

    return(
        <div className={styles.article}>
            <h3>Article</h3>
            <div className={styles.tableGroup}>
                <table>
                    <thead>
                        <tr>
                        <th>no</th>
                        <th>title</th>
                        <th>ID</th>
                        <th>author</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>gurun pasir</td>
                        <td>sfdsfsdds</td>
                        <td>trisna</td>
                        <td>

                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}