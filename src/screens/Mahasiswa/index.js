import {ActivityIndicator, SafeAreaView} from 'react-native'
import {useEffect} from 'react'
import {useLoading, useStoreActions} from '../../store'
import DataList from '../../components/DataList'
import Navbar from '../../components/Navbar'
import Styles from './styles'
import Button from '../../components/Button'

const Mahasiswa = props => {
  const loading = useLoading()
  const actions = useStoreActions()
  useEffect(() => {
    actions.fetchMahasiswa()
  }, [])
  return (
    <SafeAreaView style={Styles.container}>
      <Button tambah text="Tambah Mahasiswa?" />
      {loading ? (
        <ActivityIndicator color="#2972DF" size={50} style={Styles.spinner} />
      ) : (
        <DataList />
      )}
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  )
}

export default Mahasiswa
