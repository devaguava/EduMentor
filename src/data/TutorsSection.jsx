import tutorJennie from '../assets/Tutor Jennie.png';
import tutorAdi from '../assets/Tutor Adi.png';
import tutorCarissa from '../assets/Tutor Carissa.png';
import tutorAnisa1 from '../assets/Tutor Anisa.png';
import { Link } from 'react-router-dom';

export const tutorsSection = {
    content:`<p className="deskripsi"></p>
              <h2>Top Mentor</h2>
              <p>
                
              </p>`,
              content2: (
                <Link to="/mentor" className="tbl-pink">Lihat Semua Mentor</Link>
            ),
        };

export const tutorsList = [
    {
        image:tutorJennie,
        name:'Jennie'
    },
    {
        image:tutorAdi,
        name:'Adi Pratama'
    },
    {
        image:tutorCarissa,
        name:'Carissa'
    },
    {
        image:tutorAnisa1,
        name:'Anisa Rahma Sari'
    }
]