import '../styles/Header.css'
export const Header = () => {
    return(
        <div className='appHeaderContainer'>
          <p id='headerName'>
            ramirobskis.dev{'</>'}
          </p>
            <table id='headerTabsMenu'>
              <tbody>
              <tr>
                <td className='menuOption'>Home</td>
                <td className='menuOption'>About me </td>
                <td className="menuOption">Carreer</td>
                <td className='menuOption'>Projects</td>
                <td className='menuOption'>Contact</td>
              </tr>
              </tbody>
            </table>
        </div>)
}